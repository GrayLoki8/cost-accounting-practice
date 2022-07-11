import "./Costs.css"
import CostItem from "./CostItem";
import Card from "../ui/Card";
import CostsFilter from "./CostFilter";
import React, {useState} from "react";
const Costs=(props)=> {
 const [selectedYear,setSelectedYear]=useState('2021');
    const yearChangeHandler=(year)=>{
    setSelectedYear(year);
   };
    return(
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>

            <CostItem date={props.costs[0].costDate}
                      description={props.costs[0].costDescription}
                      amount={props.costs[0].costAmount}/>
            <CostItem date={props.costs[1].costDate}
                      description={props.costs[1].costDescription}
                      amount={props.costs[1].costAmount}/>
        </Card>
    )
}
export default Costs;