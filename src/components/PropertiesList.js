import React from 'react';
import Property from './Property';
import ArrayChunks from './ArrayChunks';

export default function PropertiesList({ properties }) {
    const rows = ArrayChunks(properties, 3);

    if(properties.length === 0) {
        return (
            <div className="empty-search text-center">
                <h3>Sorry, no properties matched your search...</h3>
            </div>
        )
    }

    return (
        <section className="propertieslist container">
                {rows.map((row, index) => (
                    
                    <div key={index} className="propertieslist-center row">
                        {
                            row.map((col, index) => (
                               <Property key={index} property={col} />
                            ))
                        } 
                    </div>
                    ))
                }
        </section>
    )
}
