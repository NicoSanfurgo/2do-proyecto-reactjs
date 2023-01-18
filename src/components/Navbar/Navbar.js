import React, { useContext } from 'react'
import logo from '../../images/Logo.png'
import { Link } from 'react-router-dom'
import { DataContext } from "../../Context/Dataprovider"
import './Navbar.css';

export const Header = ({menus, categorias}) => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito



    const toogleMenu = ()=>{
        setMenu(!menu)
    }



    return(
        <div className='navbar'>
            {
                menus.map((menu)=>{
                    return <Link className='navbar__menu' 
                    to={menu.href} >{menu.name}</Link>
                })
            }
            <div className=''>
                {
                    categorias.map((categoria)=>{
                        return <Link to={`/category/${categoria.id}`} className='navbar__category-link'>{categoria.name}</Link>
                    })
    
                }
            </div>
            <div className="cart" onClick={toogleMenu}>
                <box-icon name="cart"></box-icon>
                <span className="item__total"> {carrito.length} </span>
            </div>
        </div>)
}
