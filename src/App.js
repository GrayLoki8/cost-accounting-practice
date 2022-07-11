import Costs from "./components/Costs";
function App() {
 const costs=[
     {
           costDate : new Date(2021, 2, 12),
           costDescription : 'Холодильник2',
           costAmount : 999.99,
     },
     {
         costDate : new Date(2022, 4, 12),
         costDescription : 'Холодильник5',
         costAmount : 100,
     }
 ]

  return (
    <div>
        <h1>Start Learning</h1>
        <Costs costs={costs}/>
    </div>
  );
}

export default App;
