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
      eType: objData.event,
      domEType: objData.properties.$event_type ? objData.properties.$event_type : 'null',
      commonInfo: strJsonData,
      specialInfo: objData.properties.$elements ? JSON.stringify(objData.properties.$elements) : 'null',
      domText: objData.properties.$el_text ? JSON.stringify(objData.properties.$el_text) : 'null'
    });
    // console.log(new Buffer(objData.properties.$elements).toString('utf8'));
    newLog.save(function(err, res){
      if(err){
        console.log('Err: ' + err);
      }else{
        // console.log('Res: ' + res);
      }
    })
  }

  res.json(0);
  
});


var server = app.listen(9800, function(){
  console.log('kmTrack backend API listen %s', server.address().port);
})