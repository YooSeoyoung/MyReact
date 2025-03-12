import { useState } from "react";

export function CounterWithState() {
    // return 값이 배열이고 이름만 우리가 붙여서 사용하고 useState의 특성임
    // [상태변수, 세터 함수]
    // 0 => 상태변수의 초깃값
    // 더 많은 상태 변수가 필요하면 하나의 useState를 더 만들어야함
    const [count, setCount] = useState(0);
    const [data1, setData1] = useState(0);
    const [array1, setArray1] = useState([]);
    const [object1, setObject1] = useState({});


    function increase() {
        setCount(count + 1);
    }

    return (
        <>
            <h2>카운터 (상태관리 사용)</h2>
            <p>Count : {count}</p>
            <button onClick={() => { increase(); }}>+</button >
        </>
    );
}