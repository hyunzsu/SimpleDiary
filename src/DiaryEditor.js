import { useRef, useState } from 'react';

const DiaryEditor = ({onCreate}) => {

  // useRef 이용
  const authorInput = useRef();
  const contentInput = useRef();

  // useState 이용
  // 동작이 비슷한 state를 하나의 state로 묶어줌
  const [state, setState] = useState({
    // state의 기본값 설정
    author: '',
    content: '',
    emotion: 1,
  });

  // onClick 이벤트에 걸어주는 함수 2개니까 하나로 만들자
  const handleChangeState = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    setState({
      ...state,
      [e.target.name]: e.target.value, // 작성자와 본문 번갈아가면서 업데이트
    });
  };

  // 저장버튼 누르면 이벤트 활성화 함수
  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus(); // focus 이용
      return;
    }
    
    if (state.content.length < 5) {
      contentInput.current.focus(); // focus 이용
      return;
    }
    
    onCreate(state.author, state.content, state.emotion) // 새로 추가시키는 일기
    alert('저장 성공!')
    // 기본값으로 초기화
    setState({
      author: '',
      content: '',
      emotion: 1
    })
  }

  return (
    <div className='DiaryEditor'>
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={authorInput} // useRef 이용할 때
          name='author'
          value={state.author} // useState의 상태
          onChange={handleChangeState} // useState의 상태변화함수
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name='content'
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name='emotion'
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  );
};

export default DiaryEditor;
