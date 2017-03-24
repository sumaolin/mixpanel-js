'use strict';

var express = require('express');
var cors = require('cors');

var Log = require('./model/log');

var app = new express();

function corsOptionFunc(req, callback){
  var reqOrigin = req.get('Origin');
  callback(null, {
    origin: reqOrigin, 
    methods: ['GET', 'OPTION'],
    credentials: true
  })
}
app.use(cors(corsOptionFunc));

app.use(function(req, res, next){
  
  if(req.method == 'option'){
    res.send(200);
  }
  next();
})

app.get('/track', function(req, res, next){

  var data = req.query.data;

  if(data){
    var strJsonData = new Buffer(data, 'base64').toString();
    // console.log(jsonData);
    var objData = JSON.parse(strJsonData);

    var newLog = new Log({
      eventType: objData.event,
      commonInfo: objData.properties.$os,
      specialInfo: objData.properties.$event_type ? objData.properties.$event_type : 'init'
    });
    console.log(objData.properties.$event_type);
    newLog.save(function(err, res){
      if(err){
        console.log('Err: ' + err);
      }else{
        console.log('Res: ' + res);
      }
    })
  }

  res.json(0);
  
});


var server = app.listen(9800, function(){
  console.log('kmTrack backend API listen %s', server.address().port);
})