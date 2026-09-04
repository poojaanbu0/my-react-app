import {createRoot} from 'react-dom/client'

// const fruitlist = ['apple','banana','orange','ae'];
const fruitlist  = [
    {id: 101, brand: 'ford'},
    {id: 102, brand: 'toyota'},
    {id: 103, brand: 'morris garges'}
]
function Mylist(){
    return(
        <>
        <ul>
            {fruitlist.map((fruit) =>
                <li key = {fruit.id}>{fruit.brand}</li>
            )}
        </ul>
        </>
    );
}

export default Mylist;