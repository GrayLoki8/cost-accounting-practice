import Costs from "./components/costs/Costs";
import NewCost from "./components/newCost/NewCost";
import {useState} from "react";
const INITIAL_COSTS=[
    {
        id:'c1',
        date : new Date(2021, 2, 12),
        description : 'Холодильник2',
        amount : 999.99,
    },
    {
        id:'c2',
        date : new Date(2022, 4, 12),
        description : 'Холодильник5',
        amount : 100,
    },
    {
        id:'c3',
        date : new Date(2021, 1, 22),
        description : 'Холодильник45',
        amount : 1220,
    },
];
const App=() =>{
   const[costs,setCosts]=useState(INITIAL_COSTS);
 const addCostHandler=(cost)=>{
     console.log(cost);
    setCosts(prevState => {
        return [cost,...prevState]
    });
    console.log(costs);
 }

  return (
    <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs}/>

    </div>
  );
}

export default App;
