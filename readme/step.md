## huggies-2016t3中使用 dataLink 功能：添加autotrack代码

### 1 项目结构改变

  测试项目： huggies-2016t3 在项目中通过 gulp-include的插件加入公共的common.html
  ```
  <!--=include common.html -->
  ```
### 2 添加track 代码
  commom.html 中的内容是 datalink 中添加活动是产生的js代码
  ``` Javascript
  <!-- start Mixpanel -->
  <script type="text/javascript">(function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="undefined"!==typeof MIXPANEL_CUSTOM_LIB_URL?MIXPANEL_CUSTOM_LIB_URL:"file:"===e.location.protocol&&"http://datalink.kmsocial.cn/mixpanel.min.js".match(/^\/\//)?"https://datalink.kmsocial.cn/mixpanel.min.js":"http://datalink.kmsocial.cn/mixpanel.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);mixpanel.init("406e992a0c8d5b7a9c58331dd2fbf5b9");</script>
  <!-- end Mixpanel -->
  ```
  > 以上代码的作用是，动态引入全部跟踪js库 mixpanel.min.js 对用户的交互事件进行track，其中`mixpanel.init("406e992a0c8d5b7a9c58331dd2fbf5b9");` 是init(token) 进行初始化

### 3 对每个html页面进行详细的埋点信息添加
  
  ``` Javascript
  <script type="text/javascript">
  mixpanel.register({
      'uid': '', //此处的uid为当前用户的唯一id,如果是微信则为微信授权后的openid,如果是微博则是微博授权后的uid等等。
      'srcuid': '',//此处的srcuid为带来当前uid用户的uid,这个变量微信中多用即来源openid
      'platform': '',//不同渠道，媒体定义在这个变量中
      'urlid': ' '//此变量为当前页面的标志，比如index等等
  });
  </script>
  ```
  > 以上代码需要添加到 mixpanel.init后面，这样每次的统计数据都会带有以上定义的数据