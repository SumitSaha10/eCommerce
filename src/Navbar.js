import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import cartContext from './context/cartContext'
export default function Navbar() {
  const [{ user }, dispatch] = useStateValue()
  const context = useContext(cartContext)
  const { cartItems } = context
  useEffect(() => {
    console.log(user)
  }, [])
  // const showname = (name) => {
  //   let newName = "";
  //   for (let i = 0; i < name.length; i++) {
  //     if (newName.charAt(i) === '@') return newName;
  //     newName = newName + newName.charAt(i);

  //   }
  //   return newName;
  // }
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand text-light fw-bold" to="/">ecommerce</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/product">Products</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/cart">Cart<i className="fa-solid fa-cart-shopping"></i>
                <span>{cartItems.length === 0 ? "" : cartItems.length}</span>
              </Link>
            </li>
            <li className="nav-item">
              {!user ?
                <Link className="nav-link text-light" to="/login">SignIn</Link>
                : <span className="nav-link text-light">{user}</span>}
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

