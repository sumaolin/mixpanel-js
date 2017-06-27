# 基于[Mixpanel.js SDK](https://github.com/mixpanel/mixpanel-js) 实现的web页面数据收集库，[相关API说明](https://mixpanel.com/help/reference/javascript)

## 文档说明
1. [mixpanel相关实现说明](aboutMixpanel.md) 看源码时候的相关函数记载说明

2. [DataLink](http://datalink.kongming-inc.com) 使用该 js-sdk时候 [使用说明](step.md)

3. [进度说明](mile.md)

## 开发说明

1. mixpanel.min.js 库的打包说明：因为初期的配置问题，没有跑通`npm run build`，直接配置了`webpack.prod.config.js`基于webpack使用命令：`npm run wbuild`，对`src`目录的源码进行打包，在`dist`目录下 生产最终的 `mixpanel.min.js`代码。

2. mixpanel-jslib-snippet.js 是在页面中动态引入mixpanel.min.js 得源码， 通过`npm run sbuild` 基于原来的 [Closure Compiler](https://developers.google.com/closure/compiler/) 进行打包压缩的，生成 mixpanel-jslib-snippet.min.js代码，该代码中是DataLink 中 `添加autotrack代码` 的基础代码，只是在末尾添加了初始化后代码 ：`mixpanel.init("${token}");` 