import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import Expenses from "./components/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Office Rent",
      amount: 93.22,
      date: new Date(2024, 3, 14),
    },
    {
      id: "e2",
      title: "School ",
      amount: 993.22,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e3",
      title: "Graduation",
      amount: 103.22,
      date: new Date(2024, 6, 13),
    },
  ];

  return (
    <div>
      <h2>let's go </h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
