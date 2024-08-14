import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  /*  const [title, setTitle] = useState(props.title);

  const ClickHundler = () => {
    setTitle("Updated");
    console.log({ title });
  };
*/

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">{props.amount} birr</p>
      </div>
      {/* <button onClick={ClickHundler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
