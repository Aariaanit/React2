import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'


function Home() {

     const [list , setList] = useState([])
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);


        const deleteButton = (id) => {
            const newList = list.filter( item => item.id !== id);
            setList(newList);
        }

        useEffect( () => {
            fetch('http://localhost:800/list')

            .then( res => {
                return res.json()
            })
            .then( data => {
                setList(data);
                setLoading(false);
                setError(null);
            })
            .catch( err => {
                console.log(err.message);
                setError('Could not fetch the data');
                setLoading(false);
            })
        }, [] )


  return (
    <>
        <h1>Home Page</h1>
        { loading && <div>Loading...</div>}

        { error && <div>{ error }</div>}

        {list &&<BlogList  list={list} title="Lista Kryesore" deleteButton={deleteButton}/>}

    </>
  )
}

export default Home