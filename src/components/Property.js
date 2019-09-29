import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default function Property({ property }) {
    const { name, slug, images, price } = property;
    const defaultImg = 'https://images.unsplash.com/photo-1549490148-d7304e934d25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80';

    
    return <article className="property col-lg-4 col-md-6">
                <div className="img-container">
                    <img src={images[0] || defaultImg} alt="property" />

                    <div className="price-top">
                        <h6>Price: ${price}</h6>
                        <p>view property</p>
                    </div>
                    <Link to={`/properties/${slug}`} className="btn-primary property-link">
                        Property features
                    </Link>
                </div>
                <p className="property-info">{name}</p>
           </article>
}

Property.propTypes = {
    property: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired,
    })
}