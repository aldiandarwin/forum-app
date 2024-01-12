import { useForm } from '@inertiajs/inertia-react';
import React from 'react'
import Forum from '@/Layouts/Forum';
import Input from '@/Components/Input'
import Button from '@/Components/Button'
import FormThread from '@/Components/FormThread';

export default function Edit({ thread, categories }) {
    const { data, setData, put } = useForm({
        title: thread.title,
        body: thread.body,
        category_id: thread.category_id,
    })

    const submitHandler = (e) => {
        e.preventDefault();
        put(route('threads.update', thread.slug))
    }

    const handleChange = (e) => setData(e.target.name, e.target.value)

    return (
        <div>
            <FormThread {...{ data, submitHandler, handleChange, categories, submit: 'Update' }} />
        </div>
    )
}

Edit.layout = page => <Forum children={page} />
