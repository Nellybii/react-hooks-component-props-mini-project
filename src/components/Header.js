import React from 'react'
import blogData from '../data/blog'
// rules associated with creating components
// beggins with a capital letter
// returns a parent element

export default function Header() {
  return (
    <div>
        <h1>{blogData.name}</h1>
    </div>
  )
}
