import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import stylesAccueil from '../styles/accueil.css'
const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/" style={{color:"#456ABB"} }> Solar Market</NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Accueil </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Nos Produits</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Nos Promotions</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Se Connecter</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> S'inscrire</NavLink>
                        <NavLink to="/cart" className="btn btn-outline m-2"><i className="fa fa-cart-shopping mr-1"></i> <span className='span-panier-text'>Mon Panier</span> {state.length != 0 && <span class="span-panier-number">{state.length}</span>} </NavLink>
                    </div>
                </div>


            </div>
        </nav>
    )
}

export default Navbar