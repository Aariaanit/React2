import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'
import useFetch from './useFetch';


function Home() {

        const {
            list: list,
            loading,
            error
        } = useFetch("http://localhost:800/list");


        const deleteButton = (id) => {
            const newList = list.filter( item => item.id !== id);
            setList(newList);
        }

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