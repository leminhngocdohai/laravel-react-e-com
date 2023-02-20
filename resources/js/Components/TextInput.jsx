import React, { useEffect, useRef } from 'react';

export default function TextInput({
    type = 'text',
    name,
    value,
    placeholder,
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
        <div className="">
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
            />
        </div>
    );
}
