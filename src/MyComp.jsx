/* 
1. let과 const
2. 화살표 함수 () = > {}
3. 구조 분해 할당(destructuring)
4. spread 연산자 ...
5. map, filter, find
6. async/await - > 비동기
7. import/ export
*/

//외부 파일의 컴포넌트가 임포트를 할수 있음
export function MyComp() {
    const colors = ["black", "white", "blue"];
    const [first, second] = colors; // 배열의 구조분해 할당(대괄호 사용) , 순서가 중요함

    const user = {
        name: "Steve",
        age: 25
    };
    const { name, age } = user; // 객체의 구조분해할당 (중괄호 사용_)

    console.log(first + " " + second); // 두번씩 로그가 찍힘
    console.log(name + " " + age); // 두번씩 로그가 찍힘

    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const array3 = [...array1, ...array2];
    console.log(array3);
    // 스프레드 연산자의 유용한 사용법
    //배열에 새로운 데이터를 추가하는데 항상 제일 앞에 추가
    const array4 = [10, ...array3]; // 제일 앞에 10을 추가
    console.log(array4);
    const array5 = [...array4, 100]; // 제일 뒤에 100을 추가
    console.log(array5);

    //참조복사 아닌 값복사하는 방법
    const array6 = array1; // 참조복사
    const array7 = [...array1]; // 값 복사
    console.log(array6); // 1,2,3
    console.log(array7); //1,2,3
    array1[0] = 10;
    console.log(array6);// 10,2,3
    console.log(array7);//1,2,3

    const numbers = [1, 2, 3];
    const mapResult = numbers.map((num) => num * 2);
    console.log(mapResult); // 2,4,6
    const filterResult = numbers.filter((num) => num % 2 === 0);
    console.log(filterResult); //2
    const users = [
        { id: 1, name: "Kim" },
        { id: 2, name: "Lee" }
    ];
    const findResult = users.find((user) => user.id === 2);
    console.log(findResult);

    function method1(x) {
        console.log("method1함수의 출력 : " + x);
    }

    const isLoggedIn = false;
    const itemList = [
        {
            id: 1,
            name: "사과",
            description: "맛있는  빨간 사과"
        },
        {
            id: 2,
            name: "바나나",
            description: "맛있는 노란 바나나"
        },
        {
            id: 3,
            name: "포도",
            description: "신선한 포도"
        },
    ];

    return (<>
        <p>나의 컴포넌트</p>
        <MyCompOnly />
        {/* 화살표 함수 */}
        <div onClick={() => method1("1000")}>여기를 클릭하시오!</div>
        {isLoggedIn ? <p>당신은 로그인 상태입니다.</p> : <p>로그인 해주세요.</p>}
        {isLoggedIn && <p>true면 보여주세요.</p>}
        <h2>과일 목록</h2>
        {
            itemList.map((item) => <p key={item.id}>{item.name} : {item.description}</p>)
        }

    </>);
}

function MyCompOnly() {
    //export 키워드가 없으면 같은 파일에서만 사용 가능
    return (
        <>
            <p>내부 컴포넌트</p>
        </>
    )
}