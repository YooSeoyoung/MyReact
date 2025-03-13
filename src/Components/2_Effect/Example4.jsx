import React, { useEffect, useState } from 'react'

const Example4 = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        //addEventListner를 이용하여 이벤트 등록 시 반드시 삭제 이벤트도 함께 구현
        //마운트 시
        const handleResize = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        // 언마운트 시
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return (
        <div>
            <h2>현재 창 너비 : {width}px</h2>
        </div>
    )
}

export default Example4
