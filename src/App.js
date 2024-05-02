import './App.css';
import React from 'react';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  //지출 항목 객체 배열

  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2024, 3, 23),
    },
    {
      title: 'BBQ치킨',
      price: 21000,
      date: new Date(2024, 5, 21),
    },
    {
      title: '도미노피자',
      price: 35000,
      date: new Date(2024, 7, 4),
    },
  ];

  return (
    <>
      <NewExpense />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
