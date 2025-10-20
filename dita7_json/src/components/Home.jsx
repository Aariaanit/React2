import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'


function Home() {

     const [list , setList] = useState([])
        const deleteButton = (id) => {
            const newList = list.filter( item => item.id !== id);
            setList(newList);
        }

        useEffect( () => {
            fetch('http://localhost:8000/list')

            .then( res => {
                return res.json()
            })
            .then( data => {
                setList(data);
            })
            .catch( err => {
                console.log(err.message);
            })
        }, [] )


  return (
    <>
        <h1>Home Page</h1>
        
        {/* { list.map( (item) => (
          <div key={item.id}>
            <h2>Emri: {item.emri}</h2>
            <p>Mosha: {item.mosha}</p>
          </div>
        )) } */}
        <BlogList  list={list} title="Lista Kryesore" deleteButton={deleteButton}/>

    </>
  )
}

export default Home