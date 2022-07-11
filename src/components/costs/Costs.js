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
            {props.costs.map((cost)=>(
                <CostItem
                    date={cost.costDate}
                    description={cost.costDescription}
                    amount={cost.costAmount}/>
            ))
            };

        </Card>
    )
}
export default Costs;