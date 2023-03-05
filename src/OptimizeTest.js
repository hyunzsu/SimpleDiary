// 컴포넌트 재사용하는 실습용
import React, { useState, useEffect } from 'react';

const CounterA = React.memo(({ count }) => {

  useEffect(()=>{
    console.log(`CounterA Update - count : ${count}`);
  })

  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {

  useEffect(()=>{
    console.log(`CounterB update - count : ${obj.count}`);
  })

  return <div>{obj.count}</div>;
};

// 깊은복사 구현
const areEqual = (prevProps, nextProps) => {
  // return true; // 이전 프롭스 현재 프롭스가 같다 -> 리렌더링을 일으키지 않게 된다
  // return false; // 이전과 현재가 다르다 -> 리렌더링을 일으켜라
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
  }
  return false;
  // return prevProps.obj.count === nextProps.obj.count;
}

// CounterB는 areEqual함수의 판단에 따라 리렌더링이 될지말지 결정
const MemoizedCounterB = React.memo(CounterB, areEqual)

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B Button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;

// count state를 받아서 prop으로 활용할 자식 컴포넌트 - CounterA

// CounteA는 동작 안하는데 CounterB 동작함 -> prop인 obj가 객체