import React from 'react';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/inertia-react';

export default function App({ title, children }) {
    return (
        <div className="min-h-screen bg-gray-50">
            <Head title={title ?? 'Forum'} />
            <Navbar />
            {children}

            <footer className="border-t py-8 lg:py-16 mt-16 bg-white">
                <div className="container">
                    <div className="text-center">
                        &copy; 2021 Forum
                    </div>
                </div>
            </footer>
        </div>
    );
}
