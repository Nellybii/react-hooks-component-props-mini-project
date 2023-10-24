import React from 'react'

import blogData from '../data/blog';
import Article from './Article';


 function ArticleList() {

  //console.log({blogData})

  const articles = blogData.posts.map((article) => (
    <Article key={article.id} val={article} />
  ));
  
  return (
    <main>
      {articles}
    </main>
  )
}
export default ArticleList;
