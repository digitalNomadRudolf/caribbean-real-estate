import React, { Component } from 'react';
//import items from './data';
import Client from './Contentful';


const PropertyContext = React.createContext();

export default class PropertyProvider extends Component {
    state = {
        properties: [],
        sortedProperties: [],
        featProp: [],
        loading: true,
        type: 'all',
        rooms: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        swimmingPool: false
    }
    //getData
    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: "name",
                //order: "sys.createdAt"
                order: "fields.price"
            });
            let properties = this.formatData(response.items);
            let featProp = properties.filter(property => property.featured === true);
            let maxPrice = Math.max(...properties.map(item => item.price));
            let maxSize = Math.max(...properties.map(item => item.size));

                this.setState({
                    properties,
                    featProp,
                    sortedProperties: properties,
                    loading: false,
                    price: maxPrice,
                    maxPrice,
                    maxSize
                });

        } catch(error) {
            console.log(error);
        }
    }

    // get the data
    componentDidMount() {
        this.getData();
    }

    formatData(data) {
        let tempData = data.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(image => image.fields.file.url);
            let property = { ...item.fields, images, id }
            return property;
        });
        return tempData;
    };

    getProperty = (slug) => {
        let tempProps = [...this.state.properties];
        const property = tempProps.find((property) => property.slug === slug);
        return property;
    };

    handleChange = e => {
        const target = e.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = e.target.name
        
        this.setState({
            [name]: value
        }, this.filterProperties)
    };

    filterProperties = () => {
        // destructure the state values 
        let { properties, type, rooms, price, minPrice, maxPrice, minSize, maxSize, swimmingPool } = this.state;
        // tempProps is an array containing all the properties
        let tempProps = [...properties];
        // parse into an integer
        rooms = parseInt(rooms);
        price = parseInt(price);
        // if type is not equal to all
        if(type !== 'all') {
            // set the tempProps to only contain the properties of the selected type
            tempProps = tempProps.filter(property => property.type === type);
        }
        if(rooms !== 1) {
            tempProps = tempProps.filter(property => property.rooms >= rooms);
        }
        // filter price and size
        tempProps = tempProps.filter(property => property.price <= price);
        tempProps = tempProps.filter(property => property.size >= minSize && property.size <= maxSize);
        // check for swimming pool
        if(swimmingPool) {
            tempProps = tempProps.filter(property => property.swimmingPool === true);
        }
        // now update the state
        this.setState({
            sortedProperties: tempProps
        })
    };

    render() {
        return (
            <PropertyContext.Provider
                value={{
                    ...this.state,
                    getProperty: this.getProperty,
                    handleChange: this.handleChange
                }}>
            {this.props.children}
            </PropertyContext.Provider>
        );
    }
}

const PropertyConsumer = PropertyContext.Consumer;

// context using a higher order function
export function withPropertyConsumer(Component) {
    return function ConsumerWrapper(props) {
        // return the consumer
        return <PropertyConsumer>
                    {value => <Component {...props} context={value} />}
               </PropertyConsumer>
    }
}

export { PropertyProvider, PropertyConsumer, PropertyContext };