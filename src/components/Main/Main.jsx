import { useState } from 'react';
import './Main.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/bootstrap-logo.svg.png';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
  const [productName, setProductName] = useState('');
  const [productNameError, setProductNameError] = useState('');
  const [products, setProducts] = useState([]);
  const [uniqueId, setUniqueId] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedFreshness, setSelectedFreshness] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productImage, setProductImage] = useState('');
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const navigate = useNavigate();

  const navigateToDetails = (productId, newProduct) => {
    navigate(`/details/${productId}`, { state: { product: newProduct } });
  };

  const addProduct = () => {
    if (productNameError === '') {
      const newProduct = {
        id: uniqueId,
        productName,
        productCategory: selectedCategory,
        productFreshness: selectedFreshness,
        productPrice,
        productDescription,
        productImage, 
      };
      setProducts([...products, newProduct]);
      setUniqueId(uniqueId + 1);
      setProductName('');
      setProductPrice('');
      setProductDescription('');
      setProductImage('');
    }
  };
  
  const showDeleteConfirmation = (item) => {
    setItemToDelete(item);
    setShowDeleteModal(true);
  };
  const confirmDeleteItem = () => {
    const updatedProducts = products.filter((product) => product.id !== itemToDelete.id);
    setProducts(updatedProducts);
    setShowDeleteModal(false);
  };
  
  const handleProductNameChange = (e) => {
    const newName = e.target.value;
    setProductName(newName);
  
    if (newName.length === 0) {
      setProductNameError('Please enter a valid product name.');
    } else if (newName.length < 10) {
      setProductNameError('Product Name must length than 10 characters.');
    } else if (newName.length > 25) {
    setProductNameError(alert('Product Name must not exceed 25 characters.'));
    }
    else {
      setProductNameError('');
    }
  };
  const article = {
    title: {
      id: "Buat Akun",
      en: "Create Account"
    },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
    },
    produkname:{
        id: "Nama Produk",
        en: "Product Name"
    },
    category:{
        id: "kategori produk",
        en: "product category"
    },
    image:{
        id: "gambar produk",
        en: "image produk"
    },
    kesegaran:{
        id: "kesegaran produk",
        en: "product freshness"
    },
    deskripsi:{
        id: "deskripsi produk",
        en: "product description"
    },
    harga:{
        id: "harga produk",
        en: "product price"
    }
  };
  const [language, setLanguage] = useState('en');
  const [randomNumber, setRandomNumber] = useState(0);
  const [productPrice, setProductPrice] = useState('');

  const generateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newRandomNumber);
    console.log("angka random: ",newRandomNumber);
    setProductPrice(newRandomNumber);
  };
  return (
    <div>
    <Header/>
    <div className="container align-self-center my-3">
    <button className="my-auto bg-primary border-0 rounded-3 text-light mx-auto d-block col-lg-3" onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}>
          Change Language
    </button>
    </div>
    <div className="container align-self-center my-3">
        <img src={logo} className="img-fluid rounded mx-auto d-block" alt="logo" />
        <h1 className="text-center">{article.title[language]}</h1>
        <p className="text-center">{article.description[language]}</p></div>
    <div className="container my-5">
    <Form className="row justify-content-center">
        <div className="col-lg-6 ">
            <Form.Group className="col-md-6 mb-3" controlId="nameProduct">
                <Form.Label>{article.produkname[language]}</Form.Label>
                    <Form.Control
                    type="text"
                    placeholder=""
                    value={productName}
                    onChange={handleProductNameChange}/>
                    {productNameError && (
                    <div className="text-danger">{productNameError}</div>
                )}
            </Form.Group>
            <Form.Group className="col-md-6 mb-3" controlId="categoryProduct">
              <Form.Label>{article.category[language]}</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}>
                <option value=""></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group> 
            <Form.Group className="imageProduct col-md-6 mb-3" controlId="imageProduct">
              <Form.Label>{article.image[language]}</Form.Label>
              <Form.Control
                type="file"
                size="sm"
                onChange={(e) => setProductImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group className="col-md-6 mb-3" controlId="stockProduct">
              <Form.Label>{article.kesegaran[language]}</Form.Label>
                <div>
                  <Form.Check
                    type="radio"
                    id="brandNew"
                    label="Brand New"
                    name="freshness"
                    value="Brand New"
                    checked={selectedFreshness === 'Brand New'}
                    onChange={(e) => setSelectedFreshness(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    id="secondHand"
                    label="Second Hand"
                    name="freshness"
                    value="Second Hand"
                    checked={selectedFreshness === 'Second Hand'}
                    onChange={(e) => setSelectedFreshness(e.target.value)}
                  />
                  <Form.Check
                    type="radio"
                    id="refurbished"
                    label="Refurbished"
                    name="freshness"
                    value="Refurbished"
                    checked={selectedFreshness === 'Refurbished'}
                    onChange={(e) => setSelectedFreshness(e.target.value)}
                  />
                </div>
            </Form.Group>
            <Form.Group className="col-md-6 mb-3" controlId="descriptionProduct">
              <Form.Label>{article.deskripsi[language]}</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="col-md-6 mb-3" controlId="priceProduct">
                <Form.Label>{article.harga[language]}</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="100%"
                value={randomNumber ? productPrice:""}
                onChange={(e) => setProductPrice(e.target.value)}
                 />
                <Button className="d-grid gap-2 my-4 col-md-6 col-4 mb-4 bg-warning text-black"  onClick={generateRandomNumber}>Product Price</Button>
            </Form.Group>
            <Button
              className="d-grid gap-2 col-md-4 col-4"
              as="input"
              type="button"
              value="Submit"
              onClick={addProduct}
              disabled={productNameError !== ''}/>
        </div>
    </Form>
    </div>
    <table className="table">
      <thead>
        <tr>
        <th scope="col">No</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Category</th>
            <th scope="col">Product Freshness</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Description</th>
            <th scope="col">Product Image</th>
            <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={product.id}>
          <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productPrice}</td>
              <td>{product.productDescription}</td> {}
              <td>
                {product.productImage && (
                  <img src={URL.createObjectURL(product.productImage)} alt="Product" width="50" />
                )} {}
              </td>
              <td>
              <button 
                  className="btn btn-primary mx-3" 
                  onClick={() => navigateToDetails(product.id, product)}
                  >
                  Detail
              </button>
              <button
                  className="btn btn-danger"
                  onClick={() => showDeleteConfirmation(product)}
                >
                  Delete
                </button>
              </td>
          </tr>
        ))}
      </tbody>
    </table>
    {}
      {showDeleteModal && (
        <div className="container my-3">
          <div className="delete-modal row justify-content-center">
            <div className="container my-3 row justify-content-center gap-4">
              <p className="text-center">Are you sure you want to delete this item?</p>
              <button className="btn btn-danger d-grid gap-2 col-md-3 col-4" onClick={confirmDeleteItem}>
                Delete
              </button>
              <button className="btn btn-secondary d-grid gap-2 col-md-3 col-4" onClick={() => setShowDeleteModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Main