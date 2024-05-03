import { useState } from 'react';
import './App.css';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';

const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일 마스터하기',
  },
  {
    id: 'g2',
    text: 'UI 프로그래밍 고수되기',
  },
];

const App = () => {
  return (
    <div>
      <AddUsers />
      <UserList />
    </div>
  );
};

export default App;
