import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Products from '../data'


const SingleProduct = () => {
  const navigate = useNavigate();
  const {productId} = useParams();

  //Getting Product
  const singleProduct = Products.find(product => product.id === parseInt(productId))

  const {id, name, price, image, details} = singleProduct;

  console.log('product id', productId)
  console.log(singleProduct)
  return (
    <main>
      <div className="pg-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <h1>{name}</h1>
            </div>
            <div className="col-lg-5">
              <nav aria-label='breadcrumb'>
                <ol className="breadcrumb justify-content-end">
                  <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                  <li className="breadcrumb-item"><Link to='/products'>Products</Link></li>
                  <li className="breadcrumb-item active" aria-current='page'>{name}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-5">
            <img src={image} alt="" className='img-fluid'/>
          </div>
          <div className="col-lg-7">
            <h2>{name}</h2>
            <p className="price"><strong>{price}</strong></p>
            <p>{details}</p>

            <br />
            <button className='btn btn-primary btn-sm' onClick={() => navigate(-1)}>BACK</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SingleProduct