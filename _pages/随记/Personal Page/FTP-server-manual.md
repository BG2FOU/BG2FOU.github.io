---
title: "HIT Volunteer FTP服务器使用须知"
tags:
    - user manual
    - markdown
    - Searching
    - HIT-Volunteer
date: "2025-10-12"
thumbnail: "/assets/img/thumbnail/CRH380BG-5572.png"
bookmark: true
---
# HIT Volunteer FTP服务器使用须知

by BG2FOU

本文发表于我的博客，可以点击[链接](https://i.bg2fou.top/%E9%9A%8F%E8%AE%B0/Personal%20Page/FTP-server-manual.html)在线查看。

## 准备

下载[WinSCP](https://winscp.net/download/WinSCP-6.5.3-Setup.exe/download)并安装。

或是直接使用Windows文件资源管理器。

## WinSCP连接信息

点击“新建站点”后，填写如下会话信息：

- 文件协议：FTP
- 加密：不加密
- 主机名：server.bg2fou.top
- 端口号：21021
- 用户名：HIT_Volunteer
- 密码：
- **不勾选**匿名登陆！

![FTP_manual_1](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/FTP_manual_1.png)

编辑完成后保存登录信息，点击登录。

直接将本地的**db.csv**（必须是这个文件名）覆盖云端的文件即可。

## Windows文件资源管理器FTP使用

在“此电脑”的菜单栏中找到“添加一个网络位置”；

![FTP_manual_2](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/FTP_manual_2.png)

下一步“选择指定网络位置”，在“Internet地址或网络地址”中输入ftp://server.bg2fou.top:21021并点击下一步；

![FTP_manual_3](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/FTP_manual_3.png)

取消匿名登录，用户名使用“HIT_Volunteer”；

![FTP_manual_4](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/FTP_manual_4.png)

下一步输入你喜欢的网络名称；

![FTP_manual_5](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/FTP_manual_5.png)

这样网络便成功创建了；

![FTP_manual_6](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/FTP_manual_6.png)

打开“网络位置”下的文件夹，输入对应的用户名和密码，与上文相同，即可使用，其余操作与上文相同。

![FTP_manual_7](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/FTP_manual_7.png)

![FTP_manual_8](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU.github.io@master/_pages/%E9%9A%8F%E8%AE%B0/Personal%20Page/img/FTP_manual_8.png)
