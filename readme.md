# express 学习资料

部署方式采用 pm2。同时为了运行 typescript 文件，pm2 要进行预先设置。

```shell
pm2 install typescript
```

安装完毕后还需要将 pm2 的 mode 设置为 cluster
