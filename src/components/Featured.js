import React, { Component } from 'react';
import { PropertyContext } from '../context';
import Property from './Property';
import Loading from './Loading';
import Title from './Title';

export default class Featured extends Component {
    static contextType = PropertyContext;

    render() {
        let { loading, featProp: properties } = this.context;
        console.log(this.context)
        properties = properties.map(property => {
            return <Property key={property.id} property={property} />;
        });

        return (
            <section className="featured-properties container">
                <Title title="featured-properties" />
                <div className="featured-properties-center row">
                    {loading ? <Loading /> : properties}
                </div>
            </section>
        )
    }
}
