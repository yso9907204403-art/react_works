import { useState } from 'react';

const Signin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [result, setResult] = useState('');

    const users = [
        { username: 'user1', password: 'pass1' },
        { username: 'user2', password: 'pass2' },
        { username: 'user3', password: 'pass3' },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { username, password } = formData;

        const matched = users.find(
            user =>
                user.username === username &&
                user.password === password
        );

        setResult(matched ? 'success' : 'fail');

        console.log('제출 데이터:', formData);
    };

    return (
        <div>
            <h2>로그인</h2>

            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <input
                            type="text"
                            name="username"
                            placeholder="사용자명"
                            value={formData.username}
                            onChange={handleInputChange}
                        />
                    </li>

                    <li>
                        <input
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                    </li>

                    <li>
                        <button type="submit">로그인</button>
                    </li>
                </ul>
            </form>

            {result === 'success' && <p>로그인 성공!</p>}
            {result === 'fail' && <p>로그인 실패!</p>}
        </div>
    );
};

export default Signin;
