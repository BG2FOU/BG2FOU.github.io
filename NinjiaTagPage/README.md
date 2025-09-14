# NinjiaTag page
NinjiaTag前端页面

## 简单使用说明

1.  在前端页面有配置服务器地址选项，填入部署的[https://github.com/zhzhzhy/NinjiaTag-backend](https://github.com/zhzhzhy/NinjiaTag-backend)服务器远程地址

2.  将generate_keys.py硬件设置生成的.json密钥文件在```物品管理```对话框```解析json密钥文件```导入即可

3.  在```数据选择```对话框选择物品数据和时间段进行查询，有几个选项：
  
- 轨迹点：历史的轨迹，鼠标悬停或点击可显示详情。

- 热图： 类似地理信息系统的人流密度显示，经常去过的地方颜色更深，不去或偶尔去的地方颜色浅。
  
- 最新位置： 最新的物品位置，以图标的形式显示。

如果没有获取到位置数据，带着diy的NinjiaTag到人流密集的地方走一圈，等待后台服务器获取到位置数据库并存入数据库。