import React from 'react';

export default function Table({ rows, cols }) {
    return (
        <>
            <table className="styled-table">
                <thead>
                    <tr>
                        {rows.map((row, index) => (
                            <th key={index}>{row.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Dom</td>
                        <td>6000</td>
                    </tr>
                    <tr className="active-row">
                        <td>Melissa</td>
                        <td>5150</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}
