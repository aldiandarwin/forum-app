import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import Button from './Button';
export default function ReplyBlock({ reply, thread, auth, data, setData, showReplyForm, replyStoreHandler, handleChange }) {
    return (
        <div className="flex gap-x-4 bg-white p-4 my-2.5 lg:my-4 rounded-lg shadow">
            <img className="w-8 h-8 mt-1 rounded-full" src={reply.user.picture} alt={reply.user.name} />
            <div>
                <h4 className="text-sm font-medium">{reply.user.name}</h4>

                <div>{reply.body}</div>
                <div className="flex items-center gap-x-4">
                    <span className="text-gray-500 text-xs">
                        {reply.created_at}
                    </span>
                    {thread.data.answer_id == reply.id &&
                        <div className="bg-green-500 text-white px-2 py-1 rounded">
                            best
                        </div>
                    }
                    {reply.likes_count}
                    {auth.user &&
                        <>
                            <Link href={route('likes.store')} method="POST" data={{ reply: reply.id }} as="button" preserveScroll>
                                Like
                            </Link>
                            {auth.user.id == thread.data.user.id &&
                                <Link href={route('answer.store', thread.data.slug)} data={{ answer_id: reply.id }} method="POST" as="button">
                                    Mark as best
                                </Link>}
                        </>
                    }
                    {auth.user && reply.parent_id == null ?
                        <button className="text-gray-500 text-xs" onClick={() => showReplyForm(reply)}>
                            Reply
                        </button>
                        : ''}
                </div>
                {reply.children.length ? reply.children.map(child => <ReplyBlock key={child.id} {...{ reply: child, thread, auth, data, setData, showReplyForm, replyStoreHandler, handleChange }} />) : ''}

                {data.parent_id ? data.parent_id == reply.id &&
                    <form onSubmit={replyStoreHandler}>
                        <div className="mb-5">
                            <textarea name="body" value={data.body} onChange={handleChange} />
                        </div>
                        <div className="flex items-center">
                            <button onClick={() => setData({ ...data, parent_id: null })}>Cancel</button>
                            <Button>Reply</Button>
                        </div>
                    </form>
                    : ''}
            </div>
        </div>
    );
}
