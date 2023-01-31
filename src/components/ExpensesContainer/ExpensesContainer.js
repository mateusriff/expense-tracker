import { useState } from "react";
import "./ExpensesContainer.css"
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpenseFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

export default function ExpensesContainer(props) {

    const [year, setYear] = useState("2020"); 
    const expensesData = props.expensesData;

    function handleYearSelected(yearSelected) {
        setYear(yearSelected);
    }

    const filteredExpenses = expensesData.filter(expense => {
        return expense.date.getFullYear().toString() === year;
    })

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onYearSelected={handleYearSelected}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );

}