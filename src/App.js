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

  // ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (newExpense) => {
    console.log('App 컴포넌트에서 응답함!');
    console.log('newExpense: ', newExpense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
