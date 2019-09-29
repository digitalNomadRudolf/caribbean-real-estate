import React, { Component } from 'react';
import { FaHome, FaKey, FaSwimmingPool, FaBuilding } from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state = {
        services: [
            {
              icon: <FaHome />,
              title: "your own seaside appartment or villa",
              info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eaque.'
            },
            {
                icon: <FaKey />,
                title: "free repair or create key service and lockservice",
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, voluptatum!'
            },
            {
                icon: <FaSwimmingPool />,
                title: "most of our properties include a swimming pool",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, vero.'
            },
            {
                icon: <FaBuilding />,
                title: "monthly maintenance to the building, including gardening",
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos.'
            }
        ]
    }

    render() {
        return (
            <section className="services container">

                <Title title="services" />
                
                <div className="services-center row">
                    {this.state.services.map((item, i) => {
                        return <article key={i} className="service col-lg-3 col-md-4">
                                    <span>{item.icon}</span>
                                    <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                                </article>
                    })}
                </div>
            </section>
        )
    }
}