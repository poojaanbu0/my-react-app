import {useState, useEffect} from "react";
import axios from "axios";

function App(){
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
     
    useEffect(()=> {
        async function getUsers() {
            try{
                const response = await axios.get(url)
            
                // if(!response.ok){
                //   throw new Error("failed to fetch users")
                // }
 
               setUser(response.data);
            }catch(err){
                setError(err.message)
            }finally{
                setLoading(false)
            }
        }

        getUsers();
    },[])

    if(loading){
        return <p>...loading</p>
    }
    if(error){
        return <p>{error}</p>
    }
    return (
        <>
          {users.map((user) =>(
          <p key={user.id}>{user.name}</p>
           ))}
        </>
    );
}

// API requests
// database/backend requests
// file operations
// async functions