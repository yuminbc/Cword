const express = require('express')
const Word = require('../../models/Word')
const WordRouter = express.Router()

const word = require('../../models/Word') // word 가져옴
  
//처리로직
// /api/word/ , /api/words/학원 //(파라미터)
WordRouter.route('/(:word)?').get(async(req, res) => {
    let words = []
    const {word} = req.params 
    console.log(req.params.word)
    // res.send(word)

    // 사용자로부터 쿼리가 존재하는 경우
    // db.collection.find({r_word: word}) // 쿼리로 DB검색
    if(word !== "undefined" && word !== undefined){ // 데이터베이스에서 쿼리 단어를 검색
        // res.json({status:200, msg:'특정 단어 검색'})
        console.log(word)
        
        try{
            console.log('단어 쿼리...')
            // words = await Word.find({r_des:{$in:[
            //     {$regex: 법규},
            //     {$regex:"계속"}
            // ]}})
            // words = await Word.find({ r_word: { $regex: `^${word}`}})//데이터 베이스에서 검색어로 시작하는 단어 검색
            // words = await Word.find({ r_word: { $regex: `${word}$`}})// 끝나는 단어로 검색
            words = await Word.find({ r_word: { $regex: `${word}`}})//포함하는 단어 검색
            // words = await Word.find({ r_des: { $regex: `${word}`}}) //설명 부분에서 포함하는단어 검색
            // words = await Word.find({$or:
            //     [
            //     {r_word: {$regex:`${word}`}},
            //     {r_des: {$regex:`${word}`}}
            //     ]
            // })
            .sort({"r_word": 1})//-1 최신순(내림차순) 1과거순 (오름차순)
            // .limit(6)//6개만 검색
        }catch(e){
            console.log(e)
        }

    } else { // 데이터베이스에서 전체 단어 검색
        // res.json({status:200, msg:'전체 단어 검색'})
        // console.log(word)
        words.html = ["no query"]
        // console.log(`word database: ${Word}`)//콘솔에 표시
        try{
        words = await Word.find()
        }catch(e){
            console.log(e)
        }
    }
    res.json({ status:200, words})
}) 


module.exports = WordRouter




 