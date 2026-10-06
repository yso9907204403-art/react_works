const  drinklist = ({ drinks }) => {
    return (
        <div>
            <h2>음료 리스트</h2>
             <ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink}</li>
                ))}
            </ul>
        </div>
    )
}

export default drinklist;
