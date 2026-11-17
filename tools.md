---
layout: lesson
title: 工具箱：计算器、清单和模板
module: tools
module_name: 工具箱
permalink: /tools/
---

**结论**：开店要算的账就两笔——开下去能不能保本（收支平衡）、收一张卡该出多少钱（收购定价）。其余靠清单防漏。
**注意**：计算器里的数字全部由你自己填，是假设，不是行情。

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

## 三、开业清单

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

## 四、生卡真伪速查表（收购时逐项过）

<ul class="checklist">
<li><label><input type="checkbox">背面图案和颜色与正版一致（日版/国际版背面不同）</label></li>
<li><label><input type="checkbox">字体、字距、能量图标没有模糊或错位</label></li>
<li><label><input type="checkbox">对光看表面纹理和闪膜工艺，与已知真卡一致</label></li>
<li><label><input type="checkbox">卡边分层和厚度手感正常（破坏性测试只用于可疑的低价卡）</label></li>
<li><label><input type="checkbox">编号、稀有度标记与官方卡表对得上</label></li>
<li><label><input type="checkbox">评级卡：认证号已在官网核对，扫描图与实物一致</label></li>
<li><label><input type="checkbox">任何一项存疑：降价、送鉴定或不收，不赌</label></li>
</ul>

## 五、模板索引

- 案例拆解模板：见[店铺案例](/cases/)
- 每周内容日历模板：见[推广获客](/promotion/)
- 一周运营节奏表：见[运营日常](/operate/)
- 查价 SOP：见[市场与价格](/market/)的小行动
