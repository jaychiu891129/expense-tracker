// src/components/AddTransaction.js

import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>新增紀錄</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">事項</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="輸入事項..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            金額 <br />
            (負數 - 支出金額, 正數 - 收入金額)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="輸入金額..."
          />
        </div>
        <button className="btn">新增</button>
      </form>
    </div>
  );
};

export default AddTransaction;
