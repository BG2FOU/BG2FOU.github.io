---
title: "HIT Volunteer Search_local本地查询小程序使用教程"
tags:
    - user manual
    - markdown
    - Searching
    - HIT-Volunteer
date: "2025-9-3"
thumbnail: "/assets/img/thumbnail/CRH380BG-5572.png"
bookmark: true
---
# HIT Volunteer Search_local本地查询小程序使用教程

by BG2FOU

适用于release版本`search_v1.4.exe`。

本文发表于我的博客，可以点击[链接](https://i.bg2fou.top/%E9%9A%8F%E8%AE%B0/Personal%20Page/search_local%20manual.html)在线查看。

## 0. 获取

从QQ群中获取小程序压缩包`search.zip`和对应的数据库文件(例如`0831.csv`)，将压缩包解压到任意你能找到的目录下；

![search_manual_1](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/search_manual_1.png)

需要的文件如下：程序本体`search_v1.4.exe`，word版志愿时长模板`volunteer_template.docx`，数据库文件`db.csv`；

```
HIT-Volunteer/
├── search_v1.4.exe
├── volunteer_template.docx
├── db.csv
```

注意：绝对禁止更改`volunteer_template.docx`的文件内容/格式/文件名！

## 1. 读取数据库与设置输出目录

开始查询前，请将数据库文件放在你能找到的目录（最好是和程序本体在一起），将word版志愿时长模板(禁止修改模板文件的命名)与程序本体放在同一目录；

打开程序，可以从按钮处读入数据库CSV文件，并选择志愿时长证明文件输出目录，也可以从菜单栏的“文件-选择CSV文件”和“文件-选择输出目录”处读入数据库CSV文件和设置证明文件输出目录；

![search_manual_2](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/search_manual_2.png)

![search_manual_3](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/search_manual_3.png)

完成后，可在按钮右侧看到数据库CSV文件的目录与证明文件输出目录；

![search_manual_4](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/search_manual_4.png)

## 2. 查询

在对应输入框中输入姓名或学号或同时输入姓名和学号，点击“查询”按钮，即可完成查询，按条列出所查志愿者的时长信息，并对时长进行了求和计算。小程序支持姓名的模糊查询。使用滑动条可左右滑动进行查看，也可调整列宽；

## 3. 对时长信息进行操作

### 3.1 复制时长结果

点击求和信息下方按钮可一键复制查询到的时长信息，并生成制表格式，可以直接粘贴到EXCEL表格中；

同时，对每条记录可以进行选中或多选，通过右键菜单可以进行复制，并生成制表格式；

![search_manual_5](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/search_manual_5.png)

![search_manual_6](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/search_manual_6.png)

### 3.2 生成证明

点击”生成证明“，可以将查询到的所有信息导出为带有时间戳的志愿时长证明；

![search_manual_7](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/search_manual_7.png)

选中所需记录并右键点击”从所选记录生成证明“或是点击下方按钮”从所选记录生成证明“，可将指定时长记录生成为证明文件；

![search_manual_8](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/search_manual_8.png)

证明文件将按查询到的顺序编号，以`志愿时长证明_姓名_学号-序号.docx`格式命名，输出到第一步中设置的目录；

![search_manual_9](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/search_manual_9.png)

![search_manual_10](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/search_manual_10.png)

以上操作在菜单栏“工具”中均有对应功能；

### 3.3 批量查询

从菜单栏”工具-批量查询“中可进入批量查询窗口；

![search_manual_11](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/search_manual_11.png)

在查询窗口中输入查询序列，每行一个，格式为：`姓名` 或 `学号` 或 `姓名 学号`；

![search_manual_12](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/search_manual_12.png)

点击下方”批量查询“按钮即可完成查询；

![search_manual_13](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/search_manual_13.png)

对于查询结果，提供了详细信息（精确到每条记录）和统计结果（姓名、学号、个人的总时长合计）；可以使用下方按钮组件复制结果。

