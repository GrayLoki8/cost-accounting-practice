import CostItem from "./components/CostItem";

function App() {
 const costs=[
     {
           costDate : new Date(2021, 2, 12),
           costDescription : 'Холодильник2',
           costAmount : 999.99,
     }
 ]

  return (
    <div>
        <h1>Start Learning</h1>
        <CostItem date={costs[0].costDate}
        description={costs[0].costDescription}
        amount={costs[0].costAmount}/>
    </div>
  );
}

export default App;
