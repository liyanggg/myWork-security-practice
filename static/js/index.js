$(function(){

  function getArticles() {
    $.ajax({
      type:'get',
      url:'/api/get_articles',
      success: data => {
        const articles = data.articles || [];
        let template = '';
        
        for (let index = 0; index < articles.length; index++) {
          const ele = articles[index];
          articles[index].content = COMMON.delHtmlTag(ele.content);
        }

        articles.forEach(article => {
          const date = COMMON.formatDate('MM月DD日hh时', article.date);
          template += `
            <div class="article">
              <img class="cover" src=${article.cover} width="300" height="180" />
              <div class="title"><a href="/detail.html?id=${article.id}">${article.title}</a></div>
              <div class="sub-title">
                <span class="author">${article.author}</span> 于
                <span class="date">${date}</span> 发布
              </div>
              <div class="content">${COMMON.delHtmlTag(article.content)}</div>
            </div>
          `
        }, this);
        $('.articles').append(template);
      }
    })
  }

  function init () {
    getArticles();
  }

  init();

});
