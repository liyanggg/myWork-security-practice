/**
* 银行数据模块
*/

const router = require('koa-router')();

let articles = require('./articles-data');

const ArticleModel = {
  getArticles: () => {
    return articles;
  },
  getArticleById: (id) => {
    for (let index = 0; index < articles.length; index++) {
      const element = articles[index];
      if (element.id === id) {
        return element;
      }
    }
  }
}

module.exports = ArticleModel;
