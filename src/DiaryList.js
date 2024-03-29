import { useContext } from 'react';
import DiaryItem from './DiaryItem';
import { DiaryStateContext } from './App';

const DiaryList = () => {

  const diaryList = useContext(DiaryStateContext)
  return (
    <div className='DiaryList'>
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => ( // it객체에 데이터가 DiaryItem의 props로 전달
          <DiaryItem key={it.id} {...it} />
        ))}
      </div>
    </div>
  );
};

// defaultProps -> undefined로 전달될 것 같은 props를 기본값으로 설정
DiaryList.defaultProps = {
  diaryList: []
}

export default DiaryList;
