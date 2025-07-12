---
title: "ZeroTier相关折腾"
tags:
    - user manual
    - remote control
    - ZeroTier
date: "2025-7-13"
thumbnail: "/assets/img/thumbnail/bricks.webp"
bookmark: true
---
# ZeroTier相关折腾

## ZeroTier简介

略

## 自建Planet中转节点

按照以下链接操作：https://www.cnblogs.com/xiaotie666/p/18928992/zerotier

先安装docker和1Panel，其中1Panel正确的安装命令如下：

```bash
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
```

需要开放端口后才能下载moon和planet配置文件；

安装ZeroTier-cli：

```bash
curl -s https://install.zerotier.com/ | sudo bash -s -- --force
```

