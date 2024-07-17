import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
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
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
