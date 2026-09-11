import {useState, useEffect} from "react";

function App(){
    const [users, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(()=> {
        async function getUsers() {
            try{
                const response = await fetch(url)
            
                if(!response.ok){
                  throw new Error("failed to fetch users")
                }

               const data  = response.json()
            
               console.log(data)
               
               setUser(data)
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