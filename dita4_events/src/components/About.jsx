//Krijimi i komponentes duke e perdorur shkurtesen 'SFC'.
import { useState } from "react";

const About = () => {

  const [list , setList] = useState ([
    {id:1, emri:'Arianit', mosha:31},
    {id:2, emri:'Petro', mosha:20},
    {id:3, emri:'Tarik', mosha:17},
    {id:4, emri:'Esma', mosha:17},
    {id:5, emri:'Andi', mosha:21},
  ])
  return ( 
    <>
        <h1>About Page</h1>
        <p>This is the About Page.</p>
        {/* <p>{ list }</p> */}
        { list.map( (item) => (
          <div key={item.id}>
            <h2>Emri: {item.emri}</h2>
            <p>Mosha: {item.mosha}</p>
          </div>
        )) }
    </>
   );
}
 
export default About;