import React, { useContext } from 'react'
import './Cards.css'

import products from '../product';
import cartContext from '../context/cartContext';
export default function Cards(props) {
  // const { handleAddProduct } = props;
  const context = useContext(cartContext)
  const { handleAddProduct } = context
  return (
    <div className='d-flex justify-content-center flex-wrap  my-5'>
      {
        products.map((element) => {
          return <div key={element.id} className="card" style={{ "width": "18rem", "margin": "8px" }}>
            <img className="card-image" src={element.img} alt=" not loaded" />
            <div className="card-body">
              <h5 className="card-title">{element.name}</h5>
              <p className="card-text">$ {element.price}</p>
              <p className="card-rating">
                {Array(element.rating).fill().map((_, i) => {
                  return <p key={i} className='card-star'>⭐</p>
                })}
              </p>
              <div className='row'>
                <button className="btn btn-primary">Buy Now</button>
                <button className="btn btn-info my-2" onClick={() => handleAddProduct(element)}>Add to Cart</button>
              </div>
            </div>
          </div>
        })
      }


    </div>
  );
}

