# vue-gh-pages

> 一个无需生成器的静态博客程序，依托于 GitHub ！

##使用

1. Fork / Clone

2. 修改 `config.js` 文件中的 `REPOS` 信息
3. 依次执行:

    `npm install`

    `npm run build`
4. 将 dist 文件夹下的静态文件放入 gh-pages 分支，搭建完成！🍻

##更新文章
- 切换到`md`分支，使用任意 `MarkDown` 编辑器，在 `markdown` 目录下新建 `.md` 格式文档，再push到`md`分支即可

##自定义域名
- 切换到`gh-pages`分支，修改 `CNAME` 文件中的域名信息，并将您绑定的域名 通过 `cname` 的方式指向 `您的用户名.github.io`


## 截图

![](http://ww4.sinaimg.cn/large/a15b4afegw1f8rl01vmh0j213z0r6gr0)

##预览地址
- https://maybelive.com

##Git 地址
- https://github.com/x-pengg/vue-gh-pages



## TODO
- [ ] 加入 sessionStorage 
- [ ] 文章日期/排序
- [ ] `About` `Friends` 不在主页列表显示
- [x] 样式调整

## 感谢：

参考了以下项目  
- https://github.com/viko16/vue-ghpages-blog/tree/vue-1
- http://vuejs.github.io/vue-router/zh-cn/

