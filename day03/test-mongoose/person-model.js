//person 모델 생성하기

var mongoose = require('mongoose');//호이스팅 일어나도록 var로 지정
var Schema = mongoose.Schema;//몽구스 스키마 구조 가져옴

const personSchema = new Schema({//create table sql문 적는 것과 흡사함

    name : String,
    age : Number,
    email : {type:String, require:true},//require:true 옵션 주면 not null

    }
);

module.export('Person', personSchema);//personSchema구조로 Person 모델 객체 생성