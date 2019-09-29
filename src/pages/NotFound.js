import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

export default function NotFound() {
    return (
        <>
        <Hero />
        <div className="columns">
            <div className="column col-12">
                <div className="empty">
                    <div className="empty-icon">
                        <i className="icon icon-3x icon-mail" />
                    </div>
                    <p className="empty-title h5">404.</p>
                    <p className="empty-subtitle">Sorry, we could not find the page you were looking for</p>
                    <div className="empty-action">
                        {' '}
                        <Link to="/">Back to Homepage</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
