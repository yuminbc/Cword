const express = require('express') // express.Router를 생성
const WordRouter = express.Router() 
const word = require('./word')

WordRouter.use('/words',word)//router를 이용해서 하위폴더 하나 더 생성


module.exports = WordRouter    