import React from 'react';

export default function MainFeatures({ features }) {
    return (
        <>
            <p className="text-bold">
                Property Features
            </p>
            <ul className="mt-0 mb-0">
                {features.map(feature => (
                    <li key={feature}>
                        <small>{feature}</small>
                    </li>
                ))}
            </ul>
        </>
    )
}