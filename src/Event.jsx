import { useState } from "react";

function App(){
  const [name, setName] = useState("");

  function handleChange(event){
       setName(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();

    console.log(name);
  }

  function handleClick(){
        setName("");
  }


  return(
    <form onSubmit={handleSubmit}>
    
        <input type = "text" 
        value={name}
        onChange={handleChange}
        />

        <button type = "sumbit">
          submit
        </button>

        <button type = "button" 
        onClick={handleClick}>
          clear
        </button>
          
        <p>Name: {name}</p>

    </form>
  );
}

export default App;
