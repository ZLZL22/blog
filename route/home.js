//引用express框架
const express = require('express');
//创建博客展示路由
const home = express.Router();
//博客首页展示页面
home.get('/', require('./home/index'));

//博客文章展示页面
home.get('/article', require('./home/article'))


// 实现普通用户退出功能
home.get('/logoutUser', require('./home/logoutUser'))

// 创建评论功能路由
home.post('/comment', require('./home/comment'));

module.exports = home;