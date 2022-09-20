import React from 'react';

export default function InputLabel({ forInput, value, children }) {
    return <label htmlFor={forInput}>{value ? value : children}</label>;
}
