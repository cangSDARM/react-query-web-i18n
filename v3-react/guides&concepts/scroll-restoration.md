---
id: scroll-restoration
title: 滚动恢复 scroll-restoration
---

传统上，当您在 Web 浏览器中导航到先前访问的页面时，您会发现该页面将滚动到离开该页面时的确切位置。
这被称为**滚动恢复**。
由于 Web 应用已开始向客户端数据获取转移，因此已经有点退步了。
但是，使用 React Query 不再是这种情况。

开箱即用，对所有查询（包括分页查询和无限查询）进行“滚动恢复”，这是 React Query 中的 Just Works™️。
这样做的原因是查询结果被正确缓存，并且能够在呈现查询时同步检索。
只要您的查询被缓存了足够长的时间（默认时间是 5 分钟）并且还没有被垃圾回收，滚动恢复将一直有效。
