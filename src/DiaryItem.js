import { useState, useRef } from 'react';

const DiaryItem = ({
  author,
  content,
  created_date,
  emotion,
  id,
  onRemove,
  onEdit,
}) => {

  // 수정폼 5글자 이하면 focus 하기 위해 useRef 사용
  const localContentInput = useRef();

  // isEdit - true, false 수정중인지 수정중이 아닌지 값을 보관해둠. 
  // true -> jsx에서 수정중으로 간주, false -> 지금처럼 컨텐츠, 삭제, 수정 버튼 렌더
  const [isEdit, setIsEdit] = useState(false);
  const togleIsEdit = () => setIsEdit(!isEdit); // 호출되는 순간 원래 isEdit이 가지고 있는 값을 반전시킴

  // 수정하기 버튼 눌렀을 때 content 상태관리
  const [localContent, setLocalContent] = useState(content); // 수정폼의 input을 핸들링할 state 생성

  // 삭제버튼 함수
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  // 수정취소 누르고 다시 수정하기 누르면 원래의 값으로 되돌아 옴 => 어떻게 해결..?
  // 해결: 수정하기 -> 수정 후 수정취소 -> 수정하기 버튼에서 초기화 됨
  const handleQutiEdit = () => {
    setIsEdit(false)
    setLocalContent(content)
  }

  // 수정완료 눌렀을 때 실행하는 함수
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus(); // 5글자 이하면 수정폼(textarea)에 focus
      return;
    }

    if (window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)) { // 아이템 수정하기전에 물어봐줌
      onEdit(id, localContent)
      togleIsEdit() // 수정폼 닫아줌
    }

  }

  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className='date'>{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className='content'>
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handleQutiEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={togleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;

// true라면 수정중인 jsx, false라면 지금 값 content
