import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyCar() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  const [lead, setLead] = useState("sixteen")

  
  const updateColor = () =>{
    setCar(prev => {
        return {...prev, color: "blue",
            brand: "toyota",
            model: "kiyo"

        };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor}>color</button>
    </>
  )
}
 
export default MyCar;