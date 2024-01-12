import React from 'react';
import { Link } from '@inertiajs/inertia-react';
export default function Pagination({ meta }) {
    return (
        <div className="flex items-center gap-x-1 !mb-10">
            {meta.links.map((link, key) => {
                return link.url == null ? <span key={key} className="text-gray-500 mx-4" dangerouslySetInnerHTML={{ __html: link.label }} /> :
                    <Link key={key}
                        className={`${link.active ? 'text-blue-500' : ''} px-5 py-2 shadow rounded-lg bg-white`}
                        href={link.url || ''}
                        dangerouslySetInnerHTML={{ __html: link.label }} />;
            })}
        </div>
    );
}
