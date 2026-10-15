import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    // 폼 데이터(객체) 상태 관리
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        description: ""
    });

    // 페이지 이동 훅
    const navigate = useNavigate();

    // 입력값 변경 함수
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        // 입력값 상태 업데이트
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // 폼 제출 처리 함수
    const handleSubmit = (e) => {
        e.preventDefault(); 

        console.log("상품 추가: ", formData);
        alert("상품이 등록되었습니다.");
        navigate("/products");  //상품 등록 후 목록 페이지로 이동
    }

    return(
        <div>
            <h2>상품 등록</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">상품명</label>
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="상품명을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="price">가격</label>
                    <input 
                        type="number" 
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        placeholder="가격을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="description">설명</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="상품 설명을 입력하세요"
                    />
                </div>
                <div>
                    <button type="submit">등록</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;