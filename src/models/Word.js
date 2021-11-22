const mongoose = require('mongoose')

const wordSchema = mongoose.Schema({ // 스키마 정의 
    r_seq: { type: String, trim: true },
    r_word: { type: String, trim: true },
    r_link: { type: String, trim: true },
    r_hanja: { type: String, trim: true }, 
    r_des: { type: String, trim: true },
    r_pos: { type: String, trim: true }
})     
  
//메모리 초기화
const Word = mongoose.model('Word', wordSchema,'kor_dic_coll');
//const Word = mongoose.model('Word', wordSchema) // 스키마로부터 생성된 모델 객체
module.exports = Word;