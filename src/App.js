import React, { useState } from "react";
import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSESS = [
  {
    id: "e1",
    title: "Office Rent",
    amount: "28,000 ",
    date: new Date(2024, 3, 14),
  },
  {
    id: "e2",
    title: "School ",
    amount: "12,000 ",
    date: new Date(2022, 7, 14),
  },
  {
    id: "e3",
    title: "Graduation",
    amount: "10,000 ",
    date: new Date(2024, 6, 13),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSESS);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
