# 思路

## 2017-06-26

### next

  1. 改写现有的mixpanel.js 把domPath 信息写到每次发送的信息里面 ok
  2. 开启加载track-editor的参数

## 2017-06-27

### 新知识点

1. [HTML DOM attributes 属性](http://www.w3school.com.cn/jsref/prop_node_attributes.asp) 原生的attributes获取dom的属性信息
2. [JavaScript reverse() 方法](http://www.w3school.com.cn/jsref/jsref_reverse.asp)

## 开启track-editor 的思路：
>修改代码，通过简单的参数 token:"3e67bc1b668ba131c9d2fcb6d632fe41", action: kmEditor 开启对editor 的展示，通过editor 的初始化init() 绑定 hover 时候获取dom 相关的信息


## autotrack.js 添加函数 _getDomPath(elementsJson)，获取当前的domPath, 添加到$dom_path 信息中

### 问题
1. huggies-2016t3中是移动端的项目，所以事件类型 中使用了 touchend click 同时绑定的写法，但是该事件不触发, 只能单独使用click
> *next*: 添加touch 事件监听的支持
*done*: (autotrack.js line 110) 通过添加判断 touchend 添加默认监听事件


## 2017-06-28

1. 通过URL的hash 动态加载 editor Ok

## 2017-08-28

### 停留时间的统计

参考资料：
1. [各个浏览器中对于beforeunload事件和unload事件的对比](http://sinaad.github.io/xfe/2016/06/29/beforeunlod-vs-unload/)
> beforunload 比 unload 事件支持更好，想接口发送当前页面的信息

2. [previousSibling、previousElementSibling的区别](http://blog.csdn.net/sunlizhen/article/details/73437102)
> 获取当前元素的上一个节点

``` javascript
window.onbeforeunload = function() {
  instance.track('$web_event', {
      '$event_type': 'onbeforeunload'
  });
}
```

统计停留时间的

## 2017-09-08

接口修改 

获取已选择埋点列表

原：http://datalink.kongming-inc.com/wechat/api_test/selectListAlias.php
现：http://datalink.kongming-inc.com/wechat/api/selectListAlias.php

收集埋点信息的接口

原：http://datalink.kongming-inc.com/wechat/api_test/receiveData.php
现：http://datalink.kongming-inc.com/wechat/api/receiveData.php


## 2017-10-10

js get请求因为URL长度的限制不能超过2k, 所以recieveData.php?data= 的参数最好不要超过2k

1. autotrack.js 中 _getPropertiesFromElement 不添加 style 属性的值
2. $el_text 的值只获得点击元素的el.textContent 的值

### commit log 

1. api接口改为线上接口
2. onbeforeunload 页面关闭事件的监听
3. _getPropertiesFromElement 不添加 style 属性的值
4. $el_text 的值只获得点击元素的el.textContent 的值

## 2017-10-13

bug: _.truncate(data, 255)中造成的 dom_path 被截取，后端无法匹配的问题

1. truncate 是深度迭代对象中的每一个attr 值都会进行截取
2. $web_event->$event_type=pageview  是获取埋点信息触发的 晚于 mp_page_view  所以去掉$event_type=pageview 不进行重复的Pv 统计