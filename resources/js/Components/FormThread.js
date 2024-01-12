import React from 'react'
import Button from './Button'
import Input from './Input'
import Label from './Label'

export default function FormThread({ data, submitHandler, handleChange, categories, submit }) {
    return (
        <form onSubmit={submitHandler}>
            <div className="mb-5">
                <Label value="Title" />
                <Input placeholder="The title of the thread" type="text" name="title" value={data.title} handleChange={handleChange} />
            </div>
            <div className="mb-5">
                <Label value="Content" />
                <textarea rows="5" placeholder="Your thread content" className="resize-none transition duration-200 w-full border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-100 rounded-md shadow-sm" name="body" value={data.body} onChange={handleChange} />
            </div>
            <div className="mb-5">
                <Label value="Category" />
                <select className="transition duration-200 w-full border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-100 rounded-md shadow-sm" name="category_id" value={data.category_id} onChange={handleChange}>
                    <option>Choose category</option>
                    {categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                </select>
            </div>
            <Button>
                {submit}
            </Button>
        </form>
    )
}
