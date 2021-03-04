import { Link } from 'react-router-dom';

import './Product.css';

function Product(props) {
    const p = props.product;
    return (
    <div className="product">
      <img className="product-image" src={p.url} alt="product" />
      <div className="product-name">ชื่อ {p.name}</div>
      <div className="product-price">ราคา {p.price}</div>
      <div className="product-day">เวลาเปิดปิด {p.time}</div>
      <div className="product-address">ที่อยู่สวน {p.address}</div>
    </div>
    );
}

export default Product;
