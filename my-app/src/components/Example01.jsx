const Example01 = () => {
    const isloggedIn = true;
    let result = "";
    if (isloggedIn) {
        result = <h3>로그인 상태입니다.</h3>
    }else {
        result = <h3>로그아웃 상태입니다.</h3>
    }


    return (
        <div>
            <h2>조건부 렌더링</h2>
            <p>{result}</p>
            {isloggedIn ? <h3>로그인 상태입니다.</h3> : <h3>로그아웃 상태입니다.</h3>}
            {isloggedIn && <p>로그인 상태입니다.</p>}
        </div>
    )
}

export default Example01;