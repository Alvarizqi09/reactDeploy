import { useLocation, useParams,useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 
import './ProductDetail.css';

const ProductDetail = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { productId } = useParams();
  
    if (!state || !state.product) {
      return <div>Product not found</div>;
    }
  
    const product = state.product;
  
    return (
      <div className="detail bg-dark-subtle container d-flex-col my-5 rounded-4">
                <div>
                    <h2 className='details text-center py-3 fw-bold my-3'>Product Details</h2>
                    <p>ID: {productId}</p>
                    <p>Name: {product.productName}</p>
                    <p>Category: {product.productCategory}</p>
                    <p>Freshness: {product.productFreshness}</p>
                    <p>Price: {product.productPrice}</p>
                    <p>Description: {product.productDescription}</p>
                    {product.productImage && (
                    <span className="product-image" >image : <img src={URL.createObjectURL(product.productImage)} alt="Product" width="100" /></span>
                    )}
                </div>
                <div className="text-center">
                    <Button className='button col-md-4 my-5 px-5 fw-bold' variant='info' onClick={() => navigate('/Main')}>Back to List</Button>
                </div>
          </div>
    );
  };
  
export default ProductDetail