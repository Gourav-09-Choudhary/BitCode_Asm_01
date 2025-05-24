import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {

    let navStyle = {
        display: 'flex',
        gap: '100px',
        backgroundColor: "#046169",
        padding: '10px 20px',
        margin: '10px',
        borderRadius: '10px',
        alignItems: 'center',
    };
    let linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '6px 12px',
        borderRadius: '4px',
        transition: 'background-color 0.5s',
    };

    let linkHoverStyle = {
        backgroundColor: '#7b7b7b',
    };

    return (
        <div>
            <h3 style={{ textAlign: "center", paddingTop: "10px" }} >Welcome to Shopping App </h3>
            <ul style={navStyle}>
                <Link to='/' style={linkStyle}
                    onMouseEnter={event => event.target.style.backgroundColor = linkHoverStyle.backgroundColor}
                    onMouseLeave={event => event.target.style.backgroundColor = 'transparent'}
                >Home Page </Link> &nbsp;
                <Link to='/products' style={linkStyle}
                    onMouseEnter={e => e.target.style.backgroundColor = linkHoverStyle.backgroundColor}
                    onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
                >All Products</Link>&nbsp;
                <Link to='/products/create' style={linkStyle}
                    onMouseEnter={e => e.target.style.backgroundColor = linkHoverStyle.backgroundColor}
                    onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
                >Add new Product </Link>&nbsp;
                <Link to='/products/category' style={linkStyle}
                    onMouseEnter={e => e.target.style.backgroundColor = linkHoverStyle.backgroundColor}
                    onMouseLeave={e => e.target.style.backgroundColor = 'transparent'}
                >Search By Category </Link>&nbsp;
            </ul>


        </div>
    )
}

export default Navigation;
