import React from 'react'

function BlogList(props) {

    const list = props.list
    const title = props.title
    const deleteButton = props.deleteButton
  return (
    <>
    <div className="blog-list">
        <h2>{ title }</h2>
        <table border={1} cellPadding={10} cellSpacing={0}>
            <tr>
                <th>Id</th>
                <th>Emri</th>
                <th>Mosha</th>
                <th>Foto</th>
                <th>Veprimet</th>
            </tr>
        { list.map( (item) => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.emri}</td>
                <td>{item.mosha}</td>
                <td><img src={item.foto} alt="" style={{width:90,height:80}}/></td>
                <td>
                   <button onClick={() => props.deleteButton(item.id)}>Delete</button>
                   <button>Edit</button>
                   <button>View</button>
                </td>
            </tr>
        ))
        }
        </table>
    </div>
    </>
  )
}

export default BlogList