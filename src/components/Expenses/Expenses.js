import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
        // selected={filteredYear}
        // onChangeFilter={filteredChangeHandler}
        />

        {props.items.map((expense) => (
          //when we do write in dynamic way
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        {/* 
        <ExpenseItem            // these are static way 
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
