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