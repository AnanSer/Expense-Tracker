import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const title = props.title;

  const ClickHundler = () => {
    console.log("clicked");
    let title = "updated";
    console.log({ title });
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">{props.amount}</p>
      </div>
      <button onClick={ClickHundler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
