import "./Costs.css"
import CostItem from "./CostItem";
import Card from "../ui/Card";
const Costs=(props)=> {
    return(
        <Card className="costs">
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