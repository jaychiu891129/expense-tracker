// src/components/TransactionList.js

import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>歷史紀錄</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <li
            key={transaction.id}
            className={transaction.amount < 0 ? "minus" : "plus"}
          >
            {transaction.text}{" "}
            <span>
              {transaction.amount < 0 ? "-" : "+"}$
              {Math.abs(transaction.amount)}
            </span>
            <button
              onClick={() => deleteTransaction(transaction.id)}
              className="delete-btn"
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
