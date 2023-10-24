import React from 'react'
// import blogData from '../data/blog'

function Article(props) {
  console.log(props.val)
  return (
    <article>
      <h3>{props.val.title}</h3>
      <small>{props.val.date}</small>
      <p>{props.val.preview}</p>
    </article>
  );
}
export default Article
