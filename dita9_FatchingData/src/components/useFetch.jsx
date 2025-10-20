import React,{useState, useEffect} from 'react'

function useFetch(url) {
    const [list , setList] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        setTimeout(() => {
            fetch(url)
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
                });
            }, 1000);
        }, [])

  return {
    list,
    loading,
    error
  }
}

export default useFetch