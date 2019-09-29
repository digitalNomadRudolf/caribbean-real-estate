import React from 'react';
import PropertiesFilter from './PropertiesFilter';
import { withPropertyConsumer } from '../context';
import PropertiesList from './PropertiesList';
import Loading from './Loading';

function PropertyContainer({context}){
    const {loading, sortedProperties, properties} = context;
    if(loading) {
        return <Loading />
    }

    return (
        <div>
        <PropertiesFilter properties={properties} />
        <PropertiesList properties={sortedProperties} />
        </div>
        )
}


export default withPropertyConsumer(PropertyContainer);



/* import React from 'react';
import PropertiesFilter from './PropertiesFilter';
import Listings from './pages/Listings';
import { PropertyConsumer } from '../context';
import Hero from './Hero';
import PropertiesList from './PropertiesList';
import Loading from './Loading';


export default function PropertiesContainer() {
    return (
        // use the PropertyConsumer to access the context
    <>
        <PropertyConsumer>
            {
                (value) => {
                    const { loading, sortedProperties, properties } = value
                    
                    if(loading) {
                        return <Loading />
                    }

                    return (
                    <div>
                    <Hero />
                    <PropertiesFilter properties={properties} />
                    <PropertiesList properties={sortedProperties} />
                    </div>
                    )
                }
            }
        </PropertyConsumer>
    </>
    )
}
 */