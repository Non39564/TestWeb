import React, { useEffect } from 'react';
// import axios from 'axios';
import './ProductDetail.css';
import { useSelector, useDispatch } from 'react-redux';
import { detailProduct } from '../actions/product.js';
// import products from '../data.js';

function ProductDetail(props) { // Route path='/product/:id'
  const p = props.product;
  // const product = products.find(p => p._id === props.match.params.id);
  // const [product, setProduct] = useState({});
  const productDetail = useSelector(state => state.productDetail);
  const { product, loading, error } = productDetail;
  const dispatch = useDispatch();

  useEffect( () => {
    //const fetchData = async (id) => {
    //  const {data} = await axios.get(`/api/product/${id}`);
    //  setProduct(data);
    //}
    //fetchData(props.match.params.id);
    dispatch(detailProduct(props.match.params.id));
    return () => {};
  }, []);

  return loading? <div> Loading........ </div> :
          error? <div className="error"> ERRRR {error} </div> : (
    <div>
      <div className="detail">
        <div className="detail-image">
          <img src={product.url} />
        </div>
        <div className="detail-info">
          <ul>
            <li><h4>Name {product.name}</h4></li>
          </ul>
        </div>
        <div className="detail-action">
          <ul>
          <li>ราคา {product.price}</li>
          <li>เวลาเปิดปิด <b>{product.time}</b></li>
          <li>ที่อยู่สวน <i>{product.address}</i></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
