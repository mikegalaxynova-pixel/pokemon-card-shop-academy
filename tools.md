---
layout: lesson
title: 工具箱：计算器、清单和模板
module: tools
module_name: 工具箱
permalink: /tools/
---

**结论**：开店要算的账就三笔——开下去能不能保本（收支平衡）、收一张卡该出多少钱（收购定价）、一张生卡值不值得送评（PSA 期望值）。其余靠清单防漏。
**注意**：计算器里的数字全部由你自己填，是假设，不是行情。PSA 档位费用和上限见[评级与收藏](/grading/)，送评前以 PSA Japan 官网为准。

## 一、收支平衡计算器

<div class="calc" id="breakeven-calc">
  <label>每月租金（日元）</label><input type="number" id="be-rent" value="250000">
  <label>每月人工（日元）</label><input type="number" id="be-labor" value="300000">
  <label>每月其他固定成本：水电、保险、系统等（日元）</label><input type="number" id="be-other" value="80000">
  <label>综合毛利率（%）</label><input type="number" id="be-margin" value="25">
  <label>平均客单价（日元，可选）</label><input type="number" id="be-ticket" value="3000">
  <p class="result" id="be-result"></p>
</div>

公式：保本月营业额 = 每月固定成本 ÷ 毛利率。算完去看[开店](/open-shop/)的选址部分：保本日均单量在你蹲点数的人流面前成不成立，才是决策依据。

## 二、收购定价计算器

<div class="calc" id="buyback-calc">
  <label>预期售价（日元，先按[市场](/market/)的方法查两个渠道）</label><input type="number" id="bk-price" value="20000">
  <label>目标毛利率（%）</label><input type="number" id="bk-margin" value="25">
  <label>预留费用：评级、平台费、损耗（日元）</label><input type="number" id="bk-fee" value="0">
  <p class="result" id="bk-result"></p>
</div>

公式：建议收购价上限 = 预期售价 ×（1 − 目标毛利率）− 预留费用。结果只是上限，成色或真伪有疑问时先降价或不收。

## 三、PSA 送评期望值计算器

<div class="calc" id="psa-calc">
  <label>送评档位（费用 / 周期 / 申报上限，PSA Japan 2026 年 9–10 月价目）</label>
  <select id="psa-tier">
    <option value="value" selected>Value（バリュー）¥5,980 · 120 个工作日 · ≤¥80,000</option>
    <option value="standard">Standard（スタンダード）¥9,980 · 100 个工作日 · ≤¥150,000</option>
    <option value="priority">Priority（プライオリティ）¥11,980 · 80 个工作日 · ≤¥250,000</option>
    <option value="express">Express（エクスプレス）¥29,980 · 25 个工作日 · ≤¥400,000</option>
    <option value="superexpress">Super Express ¥44,980 · 25 个工作日 · ≤¥750,000</option>
  </select>
  <label>生卡当前售价（日元，不送评直接卖能拿多少）</label><input type="number" id="psa-raw" value="12000" min="0" step="1000">
  <label>PSA10 参考售价（日元，近期多笔成交的中位，不是最高价）</label><input type="number" id="psa-10" value="50000" min="0" step="1000">
  <label>PSA9 参考售价（日元，没拿到 10 时的售价）</label><input type="number" id="psa-9" value="28000" min="0" step="1000">
  <label>自估出 10 分概率（%，自筛严格时填 50–70，普通生卡多在 30–50）</label><input type="number" id="psa-prob" value="50" min="0" max="100" step="5">
  <label>送评总成本（日元 / 张，档位切换时自动填为评级费 + 保险・返送料约 ¥1,900；实际金额以官网为准，可手动改）</label><input type="number" id="psa-cost" value="7880" min="0" step="500">
  <p class="result" id="psa-result"></p>
  <p id="psa-tier-note"></p>
</div>

公式：期望售价 = PSA10 价 × 出 10 概率 + PSA9 价 ×（1 − 出 10 概率）；送评期望净收益 = 期望售价 − 送评总成本 − 生卡价（不送直接卖的机会成本）。默认填的是[评级篇](/grading/)里 Value 的那道例卡：生卡 ¥12,000、PSA10 ¥50,000、PSA9 ¥28,000——改数字就能算你自己的卡。还没算资金占用数周至数月的时间成本：期望收益太薄（比直接卖裸卡多不到 15%）时，直接卖裸卡更划算。档位不会让分数变高，只决定速度、上限和 Crossover / Review 资格，见[评级篇](/grading/)。

## 四、开业清单

<ul class="checklist">
<li><label><input type="checkbox">店型已定，成本表和保本测算做完</label></li>
<li><label><input type="checkbox">古物商许可已启动申请（周期最长，最先办）</label></li>
<li><label><input type="checkbox">租约用途条款、招牌和消防要求已核对</label></li>
<li><label><input type="checkbox">进货渠道谈妥，初始库存结构定好（周转款/招牌款/长尾比例）</label></li>
<li><label><input type="checkbox">展示柜上锁、防盗监控和保险落实</label></li>
<li><label><input type="checkbox">POS 和库存编码规则定好，古物台账备好</label></li>
<li><label><input type="checkbox">Google 商家资料、X 账号建好，开业活动排好</label></li>
<li><label><input type="checkbox">价签模板、收购 SOP、接待话术打印上墙</label></li>
</ul>

## 五、生卡真伪速查表（收购时逐项过）

<ul class="checklist">
<li><label><input type="checkbox">背面图案和颜色与正版一致（日版/国际版背面不同）</label></li>
<li><label><input type="checkbox">字体、字距、能量图标没有模糊或错位</label></li>
<li><label><input type="checkbox">对光看表面纹理和闪膜工艺，与已知真卡一致</label></li>
<li><label><input type="checkbox">卡边分层和厚度手感正常（破坏性测试只用于可疑的低价卡）</label></li>
<li><label><input type="checkbox">编号、稀有度标记与官方卡表对得上</label></li>
<li><label><input type="checkbox">评级卡：认证号已在官网核对，扫描图与实物一致</label></li>
<li><label><input type="checkbox">任何一项存疑：降价、送鉴定或不收，不赌</label></li>
</ul>

## 六、模板索引

- 案例拆解模板：见[店铺案例](/cases/)
- 避坑对照清单：见[避坑篇](/pitfalls/)
- 每周内容日历模板：见[推广获客](/promotion/)
- 一周运营节奏表：见[运营日常](/operate/)
- 查价 SOP：见[市场与价格](/market/)的小行动
