---
layout: default
title: 首页
permalink: /
---

<div class="hero" markdown="1">

# 从零开始，在日本开一家宝可梦卡牌店

你不需要先懂宝可梦，也不需要每天追新闻。
这里是一条排好的学习路径：**先学懂宝可梦和卡 → 再懂市场和价格 → 再学开店 → 最后学运营和推广。**

[从学习路径开始 →]({{ "/start/" | relative_url }}){: .btn} [先逛工具箱]({{ "/tools/" | relative_url }}){: .btn .sub}

</div>

## 你现在在哪一步？

| 你的状态 | 先看 |
|---|---|
| 完全零基础，宝可梦只认识皮卡丘 | [认识宝可梦]({{ "/pokemon/" | relative_url }}) → [卡牌入门]({{ "/cards/" | relative_url }}) |
| 能认卡，但不懂为什么有的卡贵 | [评级与收藏]({{ "/grading/" | relative_url }}) → [市场与价格]({{ "/market/" | relative_url }}) |
| 想认真算账、准备开店 | [在日本开店]({{ "/open-shop/" | relative_url }}) → [工具箱]({{ "/tools/" | relative_url }}) |
| 店快开了 / 已经开了 | [运营日常]({{ "/operate/" | relative_url }}) → [推广获客]({{ "/promotion/" | relative_url }}) |

## 全部模块

<div class="cards">
{% for m in site.data.modules %}
  <div class="card"><h3><a href="{{ m.path | relative_url }}">{{ m.name }}</a></h3><p>{{ m.desc }}</p></div>
{% endfor %}
</div>

## 这套站怎么用

1. **按路径学**：[学习路径]({{ "/start/" | relative_url }}) 把全部内容排成 4 个阶段、8 周计划，学完一节勾一节。
2. **遇到词就查**：[术语表]({{ "/glossary/" | relative_url }}) 是中日英对照，逛日本卡店、看收购表时直接拿它对照。
3. **算账用工具**：[工具箱]({{ "/tools/" | relative_url }}) 里有收支平衡和收购定价两个计算器，数字都是你自己填的假设，不替你编行情。
4. **资讯只做辅助**：[信息源]({{ "/sources/" | relative_url }}) 告诉你每周花 1 小时看哪些官方源就够了，不用日更、不用焦虑。

> 本站不预测涨跌、不推荐囤货。教你的是判断方法：为什么贵、怎么查、怎么算、怎么卖。
