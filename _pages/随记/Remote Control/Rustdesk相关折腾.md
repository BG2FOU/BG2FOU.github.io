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

```bash
sudo docker image pull rustdesk/rustdesk-server
sudo docker run --name hbbs -p 21115:21115 -p 21116:21116 -p 21116:21116/udp -p 21118:21118 -v `pwd`:/root -td --net=host rustdesk/rustdesk-server hbbs -r xxx.xxx.xxx.xxx或xxx.com
sudo docker run --name hbbr -p 21117:21117 -p 21119:21119 -v `pwd`:/root -td --net=host rustdesk/rustdesk-server hbbr
```

或采用`docker-compose.yaml`：

建立`~/rustdesk/compose`，在内操作；

```bash
version: '2.1'
services:
  hbbs:
    container_name: hbbs
    image: rustdesk/rustdesk-server:1.1.11
    command: hbbs
    environment:
      - "RELAY=hbbr:21117"
      - "ENCRYPTED_ONLY=1"
    ports:
      - 21115:21115
      - 21116:21116
      - 21116:21116/udp
      - 21118:21118
    volumes:
      - /home/ecs-assist-user/rustdesk/root:/root
    networks:
      - rustdesk-net
    depends_on:
      - hbbr
    restart: unless-stopped

  hbbr:
    container_name: hbbr
    image: rustdesk/rustdesk-server:1.1.11
    command: hbbr
    ports:
      - 21117:21117
      - 21119:21119
    volumes:
      - /home/ecs-assist-user/rustdesk/root:/root
    networks:
      - rustdesk-net
    restart: unless-stopped

networks:
  rustdesk-net:
    external: false
```

报错如下：

```bash
Registered email required (-m option). Please pay and register on https://rustdesk.com/server
```

## 中转服务器方案2：直接安装组件
- 下载rustedesk-server及npm、pm2：

```bash
wget https://hub.gitmirror.com/https://github.com/rustdesk/rustdesk-server/releases/download/1.1.14/rustdesk-server-linux-amd64.zip
unzip rustdesk-server-linux-amd64.zip
sudo apt install npm
sudo npm install -g pm2
``` 
- 进入`amd64`，执行：

```bash
pm2 start hbbs -- -r xxx.xxx.xxx.xxx或xxx.com -k _
pm2 start hbbr
```
- 端口放行，设置客户端ID Server和Relay Server；

- 或：编辑启动脚本`rustdesk-start.sh`：

```bash
#!/bin/sh
workdir=$(dirname "$0")

cd $workdir
nohup $workdir/hbbs -k _ >> $workdir/nohup.out 2>&1 &
nohup $workdir/hbbr -k _ >> $workdir/nohup.out 2>&1 &

exit 0
```

- 并授权：

```bash
chmod +x ~/rustdesk-server/rustdesk-start.sh
```

- 设置自启动服务`rustdesk-autostart.service`：

```bash
sudo nano /etc/systemd/system/rustdesk-autostart.service
```

```bash
[Unit]
Description=rustdesk-autostart Server 
After=network-online.target

[Service]
Type=simple
ExecStart=/home/ecs-assist-user/rustdesk/rustdesk-start.sh
RemainAfterExit=yes

[Install]
WantedBy=multi-user.target
```

- 设置开机启动并启动脚本：

```bash
sudo systemctl enable rustdesk-autostart.service
sudo systemctl daemon-reload
sudo systemctl start rustdesk-autostart.service
```

- 查看是否启动成功：

```bash
ps -ef | grep hbb
```




