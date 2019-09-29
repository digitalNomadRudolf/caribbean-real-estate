import React from 'react';
// accessing context through React Hooks
// in function based components we can't use the static type context that's why we use the hook
import { useContext } from 'react';
import { PropertyContext } from '../context';
import Title from './Title';

// function to filter out unique values
const getUnique = (items, value) => {
    // Set only accepts new values
    return [...new Set(items.map(item => item[value]))]
}
 
export default function PropertiesFilter({ properties }) {
    // access the context
    const context = useContext(PropertyContext);
    // destructure the values in the context
    const { handleChange, type, rooms, price, minPrice, maxPrice, minSize, maxSize, swimmingPool } = context;
    let types = getUnique(properties, 'type');
    types = ['all', ...types];
    types = types.map((item, i) => {
        return <option value={item} key={i}>{item}</option>
    });

    let roomselect = getUnique(properties, 'rooms');
    roomselect = roomselect.map((item, i) => (
        <option key={i} value={item}>{item}</option>
    ));

    return (
        <section className="filter-container">
            <Title title="Search Properties" />

            <form className="filter-form">

            <div className="form-group">
                <label htmlFor="type">Property type</label>
                <select name="type" 
                        id="type" 
                        value={type} 
                        className="form-control" 
                        onChange={handleChange}
                >
                    {types}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="rooms">Rooms</label>
                <select name="rooms" 
                        id="rooms" 
                        value={rooms} 
                        className="form-control" 
                        onChange={handleChange}
                >
                    {roomselect}
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="price">
                    Property Price ${price}    
                </label>     
                <input type="range"
                        name="price" 
                        min={minPrice} 
                        max={maxPrice} 
                        id="price" 
                        value={price} 
                        onChange={handleChange}
                        className="form-control" />   
            </div>

            <div className="form-group">
                <label htmlFor="size">
                    Property size {minSize}    
                </label>     
                <div className="size-inputs">
                    <input type="number"
                            name="minSize" 
                            id="size" 
                            value={minSize}
                            onChange={handleChange}
                            className="size-input" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="size">
                    Property size {maxSize}    
                </label>     
                <div className="size-inputs">
                    <input type="number"
                            name="maxSize" 
                            id="size" 
                            value={maxSize}
                            onChange={handleChange}
                            className="size-input" />
                </div>
            </div>

            <div className="form-group">

                    <div className="single-extra">
                        <input type="checkbox" 
                               name="swimmingPool" 
                               id="swimmingPool"
                               checked={swimmingPool}
                               onChange={handleChange} />
                        <label htmlFor="swimmingPool">
                            Swimming Pool Included 
                        </label>  
                    </div>
                </div>

            </form>
        </section>
    )
}
