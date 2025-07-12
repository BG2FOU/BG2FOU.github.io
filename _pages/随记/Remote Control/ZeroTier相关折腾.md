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

ZeroTier是一款开源的虚拟局域网（VLAN）解决方案，它允许用户在互联网上创建一个私有的、安全的网络，并可以在其中加入任意数量的设备。ZeroTier使用P2P技术，无需服务器即可实现网络连接，因此可以轻松地连接到全球各地的设备。

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

