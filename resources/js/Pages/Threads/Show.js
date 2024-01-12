import React from 'react';
import { Head, Link, usePage } from '@inertiajs/inertia-react';
import Forum from '@/Layouts/Forum';
import Reply from '@/Components/Reply';
export default function Show({ thread }) {
    const { auth } = usePage().props;
    return (
        <div>
            <Head title={thread.data.title} />
            <div class="bg-white rounded-lg shadow">
                <div className="flex p-6">
                    <div className="flex-shrink-0 mr-3">
                        <img className="w-8 h-8 rounded-full" src={thread.data.user.picture} alt={thread.data.user.name} />
                    </div>
                    <div>
                        <h1>{thread.data.title}</h1>
                        <div>
                            {thread.data.created_at}
                        </div>
                        <div className="leading-relaxed">
                            {thread.data.body}
                        </div>
                    </div>
                </div>
                <div className="border-t px-6 py-3">
                    {auth.user ?
                        <div className="flex items-center justify-between">

                            <Link className="px-3 space-x-2 py-0.5 text-sm rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-500 transition duration-200" href={route('likes.store')} method="POST" data={{ thread: thread.data.id }} as="button" preserveScroll>
                                <span>Like</span>
                                <span>{thread.data.likes_count}</span>
                            </Link>

                            {auth.user.id === thread.data.user.id &&
                                <Link href={route('threads.destroy', thread.data.slug)} method="delete" as="button">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-trash2" viewBox="0 0 16 16">
                                        <path d="M14 3a.702.702 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.703.703 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2zM3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5c-1.954 0-3.69-.311-4.785-.793z" />
                                    </svg>
                                </Link>}
                        </div>
                        : ''}
                </div>
            </div>

            <Reply {...{ auth, thread }} />
        </div>
    );
}
Show.layout = page => <Forum children={page} />;
