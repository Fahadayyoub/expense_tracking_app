import React, { useContext } from "react";

//import Global Context
import { GlobalContext } from "../context/GlobalState";

//import  Transactions
import { Transactions } from "./Transactions";
export const TransactionHistory = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction) => (
          <Transactions key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
