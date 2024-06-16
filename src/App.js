import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import Card from "./components/UI/Card";
import Expenses from "./components/Expenses/Expenses";
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Office Rent",
      amount: "28,000 birr",
      date: new Date(2024, 3, 14),
    },
    {
      id: "e2",
      title: "School ",
      amount: "12,000 birr",
      date: new Date(2022, 7, 14),
    },
    {
      id: "e3",
      title: "Graduation",
      amount: "10,000 birr",
      date: new Date(2024, 6, 13),
    },
  ];

  return (
    <div>
      <h2>let's go </h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
