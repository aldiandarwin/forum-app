import React from 'react'
import Forum from '@/Layouts/Forum';
import { useForm } from '@inertiajs/inertia-react';
import Input from '@/Components/Input';
import Button from '@/Components/Button';
import FormThread from '@/Components/FormThread';
export default function Create(props) {
    const { categories } = props;
    const { data, setData, post, reset } = useForm({
        title: '', body: '', category_id: ''
    })

    const handleChange = (e) => {
        setData(e.target.name, e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        post(route('threads.store'));
    }
    return (
        <div>
            <FormThread {...{ data, submitHandler, handleChange, categories, submit: 'Update' }} />
        </div>
    )
}

Create.layout = page => <Forum children={page} title="New Thread" />
