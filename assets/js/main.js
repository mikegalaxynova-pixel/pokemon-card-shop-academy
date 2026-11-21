// 清单进度：localStorage 保存勾选状态（key 带页面路径，互不干扰）
document.querySelectorAll('.checklist input[type=checkbox]').forEach(function (cb, i) {
  var key = 'check:' + location.pathname + ':' + i;
  try { cb.checked = localStorage.getItem(key) === '1'; } catch (e) {}
  cb.addEventListener('change', function () {
    try { localStorage.setItem(key, cb.checked ? '1' : '0'); } catch (e) {}
  });
});

// 收支平衡计算器（tools 页）
var be = document.getElementById('breakeven-calc');
if (be) {
  var calc = function () {
    var v = function (id) { return parseFloat(document.getElementById(id).value) || 0; };
    var fixed = v('be-rent') + v('be-labor') + v('be-other');
    var margin = v('be-margin') / 100;
    var out = document.getElementById('be-result');
    if (margin <= 0) { out.textContent = '请填毛利率（大于 0）。'; return; }
    var need = fixed / margin;
    var ticket = v('be-ticket');
    var perDay = ticket > 0 ? need / 30 / ticket : 0;
    out.textContent = '每月固定成本 ¥' + fixed.toLocaleString() + ' → 需要月营业额约 ¥' +
      Math.round(need).toLocaleString() + (ticket > 0 ? '，按客单价折算约每天 ' + perDay.toFixed(1) + ' 单。' : '。');
  };
  be.querySelectorAll('input').forEach(function (el) { el.addEventListener('input', calc); });
  calc();
}

// 收购定价计算器（tools 页）：建议收购价 = 目标售价 × (1 - 目标毛利率) - 费用预留
var bk = document.getElementById('buyback-calc');
if (bk) {
  var calc2 = function () {
    var v = function (id) { return parseFloat(document.getElementById(id).value) || 0; };
    var price = v('bk-price'), m = v('bk-margin') / 100, fee = v('bk-fee');
    var buy = price * (1 - m) - fee;
    document.getElementById('bk-result').textContent = buy > 0
      ? '建议收购价上限约 ¥' + Math.floor(buy).toLocaleString() + '（这只是公式结果，成交前必须再核成色、真伪和最新行情）。'
      : '请填预期售价和目标毛利率。';
  };
  bk.querySelectorAll('input').forEach(function (el) { el.addEventListener('input', calc2); });
  calc2();
}

// PSA 送评期望值计算器（tools 页）：期望售价 = PSA10 价 × 出 10 概率 + PSA9 价 × (1 - 概率)；
// 送评期望净收益 = 期望售价 - 送评总成本 - 生卡价（不送直接卖的机会成本）。
// 档位数据为 PSA Japan 2026 年 9-10 月价目（2026-11-19 对官网核对）：费用、周期、申报上限见 grading.md。
// 送评总成本默认 = 评级费 + 保险・返送料约 ¥1,900（Value 例）；各档实际金额以官网为准，用户可手动改。
var psa = document.getElementById('psa-calc');
if (psa) {
  var psaTiers = {
    value: { fee: 5980, days: 120, cap: 80000, label: 'Value（バリュー）' },
    standard: { fee: 9980, days: 100, cap: 150000, label: 'Standard（スタンダード）' },
    priority: { fee: 11980, days: 80, cap: 250000, label: 'Priority（プライオリティ）' },
    express: { fee: 29980, days: 25, cap: 400000, label: 'Express（エクスプレス）' },
    superexpress: { fee: 44980, days: 25, cap: 750000, label: 'Super Express' }
  };
  var psaInsurance = 1900;
  var calc3 = function () {
    var v = function (id) { return parseFloat(document.getElementById(id).value) || 0; };
    var tier = psaTiers[document.getElementById('psa-tier').value] || psaTiers.value;
    var raw = v('psa-raw'), p10 = v('psa-10'), p9 = v('psa-9'), cost = v('psa-cost');
    var prob = Math.min(100, Math.max(0, v('psa-prob'))) / 100;
    var note = document.getElementById('psa-tier-note');
    note.textContent = tier.label + '：评级费 ¥' + tier.fee.toLocaleString() + ' + 保险・返送料约 ¥' +
      psaInsurance.toLocaleString() + '，预计 ' + tier.days + ' 个工作日，申报价上限 ¥' + tier.cap.toLocaleString() + '。';
    var out = document.getElementById('psa-result');
    if (p10 > tier.cap) {
      out.textContent = '这档送不了：PSA10 参考价 ¥' + Math.round(p10).toLocaleString() + ' 已超过' + tier.label +
        '的申报上限 ¥' + tier.cap.toLocaleString() + '，请升一档再算。';
      return;
    }
    var exp = p10 * prob + p9 * (1 - prob);
    var diff = exp - cost - raw;
    var pct = raw > 0 ? Math.round(diff / raw * 100) : 0;
    var verdict;
    if (diff > 0 && pct >= 15) verdict = '值得送：期望比直接卖裸卡多赚约 ' + pct + '%，且评级卡流动性更好。前提是自估概率诚实——先按评级篇四项标准自筛再寄出。';
    else if (diff > 0) verdict = '期望为正但只有约 ' + pct + '%，太薄。算上数周至数月的资金占用，直接卖裸卡或攒够一批一起送更合理。';
    else verdict = '别送：按当前概率与价格，送评期望亏损约 ¥' + Math.abs(Math.round(diff)).toLocaleString() + '。要么提高自筛标准（只送大概率 10 分的），要么直接卖裸卡。';
    if (p10 >= tier.cap * 0.9) verdict += ' 注意：PSA10 参考价已接近申报上限，别赌申报口径，考虑升一档。';
    out.textContent = '期望售价约 ¥' + Math.round(exp).toLocaleString() + ' → 送评期望净收益约 ¥' +
      Math.round(diff).toLocaleString() + '（' + (diff >= 0 ? '+' : '') + pct + '%）。' + verdict;
  };
  document.getElementById('psa-tier').addEventListener('change', function () {
    var tier = psaTiers[this.value] || psaTiers.value;
    document.getElementById('psa-cost').value = tier.fee + psaInsurance;
    calc3();
  });
  psa.querySelectorAll('input, select').forEach(function (el) { el.addEventListener('input', calc3); });
  calc3();
}
