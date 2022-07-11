import Costs from "./components/costs/Costs";
import NewCost from "./components/newCost/NewCost";
const App=() =>{
 const costs=[
     {
           id:'c1',
           costDate : new Date(2021, 2, 12),
           costDescription : 'Холодильник2',
           costAmount : 999.99,
     },
     {
         id:'c2',
         costDate : new Date(2022, 4, 12),
         costDescription : 'Холодильник5',
         costAmount : 100,
     },
     {
         id:'c3',
         costDate : new Date(2021, 1, 22),
         costDescription : 'Холодильник45',
         costAmount : 1220,
     }
 ];
 const addCostHandler=(cost)=>{

 }

  return (
    <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs}/>
    </div>
  );
}

export default App;
