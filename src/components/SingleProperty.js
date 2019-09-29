import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropertyContext } from '../context';
import Title from './Title';
import StyledHero from './StyledHero';

export default class SingleProperty extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: this.props.match.params.slug
        }
    }
    // let's access the context
    static contextType = PropertyContext;

    /* componentDidMount() {

    } */

    render() {
        const { getProperty } = this.context;
        const property = getProperty(this.state.slug);
        if(!property) {
            return ( <div className="error">
                        <h3>property could not be found...</h3>
                            <Link to="/properties" className="btn-primary">
                                Back to homepage
                            </Link>
                    </div> );
        }
        const { name, description, rooms, size, price, extras, swimmingPool, images } = property;
        const [mainImg,...defaultImg] = images;

            return (
                <div>
                    <StyledHero img={mainImg} />
                    <div className="single-section-title">
                        <Title title={name} />
                    </div>
                    <section className="single-property container">
                        <div className="single-property-images row">
                            {defaultImg.map((item, i) => {
                                return  <div key={i} className="col-md-4 single-img">
                                        <img key={i} src={item} alt={name} />
                                        </div>
                            })}
                        </div>
                        <div className="single-property-info">
                            <article className="description">
                                <h3>Some information on this property</h3>
                                <p>{description}</p>
                            </article>

                            <article className="info">
                                <h3>Property Information</h3>
                                <h6>Price: ${price}</h6>
                                <h6>Size: {size} SQFT</h6>
                                <h6>
                                    rooms: {rooms > 1 ? `${rooms} rooms` : `${rooms} room` }
                                </h6>
                                <h6>{swimmingPool && "with Swimming Pool"}</h6>
                            </article>
                        </div>
                    </section>

                    <section className="property-extras">
                        <h6>Extra details</h6>
                        <ul className="extras">
                            {extras.map((item, i) => {
                                return <li key={i}>-{item}</li>
                            })}
                        </ul>
                    </section>
                </div>
            )
    }
}
