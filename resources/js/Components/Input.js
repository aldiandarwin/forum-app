import React, { useEffect, useRef } from 'react';

export default function Input({
    type = 'text',
    name,
    value,
    placeholder,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                value={value}
                className={
                    `transition duration-200 w-full border-gray-300 focus:border-blue-400 focus:ring focus:ring-blue-100 rounded-md shadow-sm ` +
                    className
                }
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
