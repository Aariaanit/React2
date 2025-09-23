//Krijimi i komponentes duke e perdorur shkurtesen 'SFC'.
import { useState } from "react";

const Contact = () => {

  const [list , setList] = useState ([
    {id:1, emri:'Arianit', mosha:31},
    {id:2, emri:'Petro', mosha:20},
    {id:3, emri:'Tarik', mosha:17},
    {id:4, emri:'Esma', mosha:17},
    {id:5, emri:'Andi', mosha:21},
  ])
  return ( 
    <>
        <h1>Contact Page</h1>
        <p>This is the Contact Page.</p>
        {/* <p>{ list }</p> */}
        <table border={2} style={{marginBottom: '20px'}}>
            <tr>
              <th>Id</th>
              <th>Emri</th>
              <th>Mosha</th>
            </tr>
        { list.map( (item) => (
          
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.emri}</td>
              <td>{item.mosha}</td>
            </tr> 
         
        )) } 
        </table>
    </>
   );
}
 
export default Contact;