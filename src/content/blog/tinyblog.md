---
title: "TinyBlog"
date: 2016-10-14
description: "关于这个博客最初是怎么来的：一个几晚上写成的极简静态博客。"
---

## TinyBlog 有什么特性

1. 完全静态，以至于没有任何生成程序
2. 支持 Markdown 常用语法
3. 支持 Github 用户添加评论

## 为什么要写 TinyBlog

有时候只想简单地写一篇文章，WordPress 毫无疑问过于臃肿，Jekyll 需要安装，而我想要一种更简单的更新博客方式，受到开源项目 [Simple](https://github.com/isnowfy/simple) 的启发，我用几个晚上的时间写了一个极简的静态博客。

每次写文章只有一个步骤，push 写好的 md 文章到 `./blog` 目录下，that's all.

## 评论功能

评论这个功能我是取巧了，利用 Github API 在项目 issues 下新建 comment 来存储，实现了原本需要第三方插件才能完成的功能。

## 迭代方向

- 修复未知 Bug（没有做测试，也没有考虑 Github 通讯不佳的情况）
- 支持响应式布局（第一次写前端，很手生）
- 支持文章按发布时间排序
- 做一个支持 MD 语法的 Chrome 扩展来更新博客

后来这些方向大多用另一种方式解决了，见 [用 Vibe Coding 重写了这个博客](/blog/rebuilding-tinyblog-with-vibe-coding/)。
