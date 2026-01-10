---
title: "解决Ubuntu 24.04 ARM64版部分应用中文乱码问题"
tags:
    - user manual
    - Ubuntu
    - Chinese
date: "2026-1-10"
thumbnail: "/assets/img/thumbnail/CRH380BJ-A-0504-20251026.png"
bookmark: true
---
# 解决Ubuntu 24.04 ARM64版部分应用中文乱码问题

原文：https://github.com/flutter/flutter/issues/90951#issuecomment-3673614872

## 情况

![应用商店中文显示](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU-img-host@master/i-bg2fou-top/%E9%9A%8F%E8%AE%B0/Linux/wechat_2026-01-10_154955_634.png)

## 问题原因

在 ARM 架构（树莓派、飞腾、RK3588、Parallels 虚拟机等）运行 Ubuntu 时，许多由 Flutter 引擎构建的应用会出现 CJK 字符显示为方框。

原因为官方 ARM64 版本 `libflutter_linux_gtk.so` **未链接 Fontconfig 库**。

## 解决方案

[krystic/flutter-arm-cjk-fix: 🚀 Fix Chinese/Japanese/Korean font display issues (squares/tofu) for Flutter apps on ARM64 Linux (Ubuntu/Snap). One-click restoration of CJK characters for App Center, Security Center, and more.](https://github.com/krystic/flutter-arm-cjk-fix)

![修复后](https://testingcf.jsdelivr.net/gh/BG2FOU/BG2FOU-img-host@master/i-bg2fou-top/%E9%9A%8F%E8%AE%B0/Linux/wechat_2026-01-10_160038_397.png)