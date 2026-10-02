const Example02 = () => {
    const items = ['사과', '바나나', '포도'];

    return (
        <div>   
            <h2>리스트 렌더링</h2>
            <ul className="list">
                {items.map((item, index) => (
                    <li key={index}> {item} </li>
                ))}
            </ul>
        </div>
    )
}

export default Example02;