import {useState} from 'react';

const Create = () => {
    const [flag,setFlag]=useState(false);
    const link ="Blog created";
    return ( 
        <div className="create">
            <h2>Create New Blogs here</h2>
            <button onClick={()=>setFlag(true)}>create</button>
            {flag  && <p>{link}</p>}
        </div>
     );
}
 
export default Create;