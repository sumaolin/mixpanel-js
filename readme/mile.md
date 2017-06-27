# 思路

## 2017-06-26

### next

  1. 改写现有的mixpanel.js 把domPath 信息写到每次发送的信息里面
  2. 开启加载track-editor的参数

## 2017-06-27

### 新知识点

1. [HTML DOM attributes 属性](http://www.w3school.com.cn/jsref/prop_node_attributes.asp) 原生的attributes获取dom的属性信息


## 开启track-editor 的思路：
>修改代码，通过简单的参数 token:"3e67bc1b668ba131c9d2fcb6d632fe41", action: kmEditor 开启对editor 的展示，通过editor 的初始化init() 绑定 hover 时候获取dom 相关的信息