import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
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
      <h2>let's go ahead , it is simple</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
