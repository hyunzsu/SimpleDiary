import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useState, useRef } from 'react';

// const dummyList = [
//   {
//     id: 1,
//     author: '현지수',
//     content: '하이 1',
//     emotion: 5,
//     created_date: new Date().getTime(), // 현재 시간 기준으로 생성
//   },
//   {
//     id: 2,
//     author: '박윤하',
//     content: '하이 2',
//     emotion: 3,
//     created_date: new Date().getTime(), // 현재 시간 기준으로 생성
//   },
//   {
//     id: 3,
//     author: '김연주',
//     content: '하이 3',
//     emotion: 1,
//     created_date: new Date().getTime(), // 현재 시간 기준으로 생성
//   }
// ];

function App() {
  const [data, setData] = useState([]) // 일기 없는 상태로 시작할거니까 빈배열, 일기상태변화함수 - setData

  // id 추가하는거 useRef 이용
  const dataId = useRef(0) // 초기값 0 설정

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime(); // 현재시간 구해버려
    // 새로운 일기아이템으로 추가해야 하는 것
    const newItem = {
      author, 
      content,
      emotion,
      created_date,
      id: dataId.current,
    }
    dataId.current += 1; // 다음 일기 id는 1을 가져야 하니까 증가시킴
    setData([newItem, ...data]) // 원래 배열에 있던 데이터들을 하나하나 나열, 새로 추가할 일기 newItem은 위로 보내야하니까 먼저 씀
  }

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it)=> it.id !== targetId);
    setData(newDiaryList)
  }

  return (
    <div className='App'>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList onDelete={onDelete} diaryList={data}/>   
    </div>
  );
}

export default App;
