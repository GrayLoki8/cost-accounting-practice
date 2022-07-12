import "./Costs.css"
import Card from "../ui/Card";
import CostsFilter from "./CostFilter";
import CostList from "./CostList"
import React, {useState} from "react";
import CostsDiagram from "./CostsDiagram";
const Costs=(props)=> {
 const [selectedYear,setSelectedYear]=useState('2021');
    const yearChangeHandler=(year)=>{
    setSelectedYear(year);
   };
    const filteredCosts=props.costs.filter((cost)=>{
        return cost.date.getFullYear().toString()===selectedYear;
    });

    return(
        <Card className="costs">
            <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}/>
            <CostsDiagram costs={filteredCosts}/>
            <CostList cost={filteredCosts}/>

        </Card>
    )
}
export default Costs;