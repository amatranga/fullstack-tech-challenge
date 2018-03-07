import React from 'react';

const Transaction = props => {
  const transaction = props.info;
  if (transaction.amount > 0) {
    return (
      <tr>
        <td>{new Date(transaction.date).toDateString()}</td>
        <td>{transaction.type}</td>
        <td>{transaction.destination.description}</td>
        <td>${transaction.amount}</td>
        <td>${transaction.balance}</td>      
      </tr>
    );
  } else {
    transaction.amount *= -1;
    return (
      <tr>
        <td>{new Date(transaction.date).toDateString()}</td>
        <td>{transaction.type}</td>
        <td>{transaction.destination.description}</td>
        <td>$-{transaction.amount}</td>
        <td>${transaction.balance}</td>      
      </tr>
    );
  }
};

export default Transaction;
