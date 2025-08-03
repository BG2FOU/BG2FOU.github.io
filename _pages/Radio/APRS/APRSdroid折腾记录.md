---
title: "APRSdroid折腾记录"
tags:
    - Amateur Radio
    - APRS
    - Software
date: "2025-8-3"
thumbnail: "/assets/img/thumbnail/CRH1E-1063.png"
bookmark: true
---
# APRSdroid折腾记录
## 相关链接
1. 应用下载: [APRSdroid - Downloads - builds](https://aprsdroid.org/download/builds/)
2. 使用呼号生成验证码: [APRS Passcode Generator](https://apps.magicbug.co.uk/passcode/)
3. APRS台站地图: [APRS.TV](https://aprs.tv/)
4. APRS台站地图: [APRS.FI](https://aprs.fi/)
5. [D-PRS Calculator](https://www.aprs-is.net/DPRSCalc.aspx)

## 应用设置
1. 设置呼号与上文得到的验证码, 此处呼号不带后缀;
2. 设置基站的SSID: SSID决定了台站地图中显示的呼号的后缀;
   - 主台站: 无后缀
   - 其他网络(如:D-Star, 3G): -5
   - 手持无线电台: -7
   - APRS-IS(非无线电台): -10 
3. 连接设置: 如电台不支持APRS, 连接协议暂设为互联网(APRS-IS); 修改TCP服务器设置为china.aprs2.net;
4. (可选)APRS符号: 选择喜好者即可;
5. (可选)语音频率: 设置频率;
6. (可选)注释字段: 添加注明等, 默认为https://aprsdroid.org/;
7. 位置设置: 可设置低速/高速时信标刷新频率以及速度阈值;
8. 位置隐私: 设置定位精度, 是否发送速度&方位, 是否发送海拔;
9. 设置屏幕是否常亮、通知选项;
10. 地图载入.map(例如OSM地图)与主题载入.xml
    - 可从 下载地图
    - 将地图保存到手机后重命名为`APRSdroid.map`并根据提示载入
