import React, { useEffect, useState } from 'react';

const UnmountTest = () => {

  // 컴포넌트가 unmount 되는 순간 제어
  useEffect(() => {
    console.log('Mount!');

    return () => {
      // Unmount 시점에 실행되게 됨
      console.log('Unmount!');
    }
  },[])

  return <div>Unmount Testing Component</div>
}

const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => setIsVisible(!isVisible)

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest/>}
    </div>
  );
};

export default Lifecycle;

// isVisible이 true일 때만 UnmountTest가 화면에 렌더링
// && -> 1번째 falsy 값이 반환, falsy가 없다면 마지막 값을 반환
