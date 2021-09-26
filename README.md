# Node 消费 RabbitMQ 写入 ES demo
可作为canal handler.（demo只为跑通流程，测试验证，代码未做优化）

### 测试步骤

修改es和rabbitmq地址和用户名密码

```bash
npm i
node receive.js # 监听消息
node emit.js  # 发送消息
```