import React, { useEffect, useState } from 'react'

const Example3 = () => {
    // 객체이기 때문에 null로 초기화
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        sendAPI().then((respone) => {
            console.log("서버로부터 응답 도착");
            setData(respone);
            setLoading(false);
        })
    }, [])
    return (
        <div>
            {loading ? <p>로딩 중...</p> : <p>데이터 :{data.title}</p>}
        </div>
    )
}

const sendAPI = () => {
    //원래는 ajax 또는 axios를 이용하여 rest api 코드를 작성하는 부분
    //지금은 3초 뒤에 데이터를 return하는 코드로 대체
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ title: "게시판제목" })
        }, 3000);  //3초 후에 resolve 함수를 호출함
    });
}

export default Example3
