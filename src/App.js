import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: '현지수',
    content: '하이 1',
    emotion: 5,
    created_date: new Date().getTime(), // 현재 시간 기준으로 생성
  },
  {
    id: 2,
    author: '박윤하',
    content: '하이 2',
    emotion: 3,
    created_date: new Date().getTime(), // 현재 시간 기준으로 생성
  },
  {
    id: 3,
    author: '김연주',
    content: '하이 3',
    emotion: 1,
    created_date: new Date().getTime(), // 현재 시간 기준으로 생성
  }
];

function App() {
  return (
    <div className='App'>
      <DiaryEditor />
      <DiaryList diaryList={dummyList}/>
    </div>
  );
}

export default App;
