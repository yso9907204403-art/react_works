import { useState } from 'react'

const Drink = () => {
    const [value, setValue] = useState('')

    const [drinks, setDrinks] = useState([])

    const handleInputChanges = (e) => {
        setValue(e.target.value)
    }

    const adddrink = () => {
        const newdrink = value;
        if (newdrink == '') {
            alert('음료를 입력하세요');
            return;
        }
        setDrinks([...drinks, newdrink]);
        setValue('');
    }

    return (
        <div>
            <h2>음료 리스트</h2>
            <input type="text" placeholder="음료를 입력하세요"  value={value}  onChange={handleInputChanges} />
            {/* <p>입력된 음료: {value}</p> */}
            <button onClick={adddrink}>입력값 추가</button>
            <drinkslist drinks={drinks} />
            {/*<ul>
                {drinks.map((drink, index) => (
                    <li key={index}>{drink.join(', ')}</li>
                ))}
            </ul> /*/}
        </div>
    )
}

export default Drink;