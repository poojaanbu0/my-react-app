import { useState,createContext, useContext } from 'react';
import { createRoot } from 'react-dom/client';

const UserContent = createContext();

function Component1() {
  const [user, setUser] = useState("Linus");

  return (
    <UserContent.Provider value= {user}>
      <h1>{`Hello ${user}! from comp1`}</h1>
      {/* <Component2 user={user} /> */}
      <Component2 user={user}/>
    </UserContent.Provider>
  )
}
function Component2() {
    const user = useContext(UserContent);
  return (
    <>
      <h1>Component 2</h1>
      <h2>{`hello ${user} in comp2`}</h2>
      <Component3  />
    </>
  );
}
function Component3() {
    const user = useContext(UserContent);
  return (
    <>
      <h1>Component 3</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}
export default Component1;
