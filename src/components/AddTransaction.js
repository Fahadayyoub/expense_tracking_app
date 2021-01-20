import React, { useState } from "react";

export const AddTransaction = () => {
  const [description, setdescription] = useState();
  const [transactionAmount, setTransaction] = useState();
  return (
    <div>
      <h1>Add new Transaction</h1>
      <form>
        <div>
          <label>Transaction Amount</label>
          <input
            type="text"
            id="description"
            placeholder="Detail of transaction"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="number"
            id="transactionamount"
            placeholder="Enter transaction amount"
            value={transactionAmount}
            onChange={(e) => {
              setTransaction(e.target.value);
            }}
          />
        </div>
        <div>
          <button>Add Transaction</button>
        </div>
      </form>
    </div>
  );
};
