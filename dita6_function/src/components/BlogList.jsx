import React from 'react'

function BlogList(props) {

    const list = props.list
    const title = props.title
    const deleteButton = props.deleteButton
  return (
    <>
    <div className="blog-list">
        <h2>{ title }</h2>
        { list.map( (item) => (
          <div key={item.id}>
            <h2>Emri: {item.emri}</h2>
            <p>Mosha: {item.mosha}</p>
            <button onClick={() => props.deleteButton(item.id)}>Delete</button>
          </div>
          
        ))
        }
    </div>
    </>
  )
}

export default BlogList