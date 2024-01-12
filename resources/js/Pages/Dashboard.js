import Hero from '@/Components/Hero';
import App from '@/Layouts/App';
import React from 'react';

export default function Dashboard() {
    return (
        <Hero>
            <div className="container">
                <h1 className="font-bold text-black tracking-tighter text-xl sm:text-3xl lg:text-6xl">
                    Your Statistic
                </h1>
            </div>
        </Hero>
    );
}

Dashboard.layout = page => <App children={page} />;
