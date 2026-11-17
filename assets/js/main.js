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
