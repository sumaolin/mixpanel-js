api.mixpanel.com/site_media/compiled/reports/collect-everything/editor.js

## 开启editor 选择时参数：
  http://sumaolin.com/#access_token=bwPs9myf1HITdOxiVrVdIEXBNZjDs5&token_type=Bearer&state=%7B%22action%22%3A%22mpeditor%22%2C%22appHost%22%3A%22https%3A%2F%2Fmixpanel.com%22%2C%22projectId%22%3A%221191590%22%2C%22projectOwnerId%22%3A922834%2C%22readOnly%22%3Afalse%2C%22token%22%3A%223e67bc1b668ba131c9d2fcb6d632fe41%22%2C%22userFlags%22%3A%7B%22COLLECT_EVERYTHING_ADD_ELEMENTS_MODAL%22%3A1%2C%22COLLECT_EVERYTHING_CREATED_FIRST_EVENT%22%3A1%2C%22COLLECT_EVERYTHING_INTRO_MODAL%22%3A1%2C%22COLLECT_EVERYTHING_PROPERTIES_MODAL%22%3A1%2C%22COLLECT_EVERYTHING_SKIP_CONFIRM_NAGIVATE_TO_EVENT%22%3A1%7D%2C%22userId%22%3A%22922834%22%7D&expires_in=86400&scope=collect_everything_events+segmentation

JSON.parse(decodeURIComponent('%7B%22action%22%3A%22mpeditor%22%2C%22appHost%22%3A%22https%3A%2F%2Fmixpanel.com%22%2C%22projectId%22%3A%221191590%22%2C%22projectOwnerId%22%3A922834%2C%22readOnly%22%3Afalse%2C%22token%22%3A%223e67bc1b668ba131c9d2fcb6d632fe41%22%2C%22userFlags%22%3A%7B%22COLLECT_EVERYTHING_ADD_ELEMENTS_MODAL%22%3A1%2C%22COLLECT_EVERYTHING_CREATED_FIRST_EVENT%22%3A1%2C%22COLLECT_EVERYTHING_INTRO_MODAL%22%3A1%2C%22COLLECT_EVERYTHING_PROPERTIES_MODAL%22%3A1%2C%22COLLECT_EVERYTHING_SKIP_CONFIRM_NAGIVATE_TO_EVENT%22%3A1%7D%2C%22userId%22%3A%22922834%22%7D'))


## mixpanel.js

   1. init_from_snippet() 中 进行mixpanel 中的引人
   2. extend_mp() 中，封装了loadash 的_的私有方法，通过`mixpanel._.query_dom()`调用

   3. _shouldTrackDomEvent() 返回是否 要监听的事件