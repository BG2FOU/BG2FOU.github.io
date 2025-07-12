---
title: "Rustdesk相关折腾"
tags:
    - user manual
    - remote control
    - rustdesk
date: "2025-7-12"
thumbnail: "/assets/img/thumbnail/bricks.webp"
bookmark: true
---
# Rustdesk相关折腾
## Rustdesk简介
开源远控软件，需要自建转发服务器
## 中转服务器方案1：Docker

```cmd
sudo docker image pull rustdesk/rustdesk-server
sudo docker run --name hbbs -p 21115:21115 -p 21116:21116 -p 21116:21116/udp -p 21118:21118 -v `pwd`:/root -td --net=host rustdesk/rustdesk-server hbbs -r server.bg2fou.top
sudo docker run --name hbbr -p 21117:21117 -p 21119:21119 -v `pwd`:/root -td --net=host rustdesk/rustdesk-server hbbr
```

报错如下：
```cmd
Registered email required (-m option). Please pay and register on https://rustdesk.com/server
```

## 中转服务器方案2：直接安装组件
- 下载rustedesk-server及npm、pm2：
```cmd
wget https://hub.gitmirror.com/https://github.com/rustdesk/rustdesk-server/releases/download/1.1.14/rustdesk-server-linux-amd64.zip
unzip rustdesk-server-linux-amd64.zip
sudo apt install npm
sudo npm install -g pm2
```

- 进入`amd64`，执行：
```cmd
pm2 start hbbs -- -r xxx.xxx.xxx.xxx或xxx.com -k _
pm2 start hbbr
```

- 端口放行，设置客户端ID Server和Relay Server；
