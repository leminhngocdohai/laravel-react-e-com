import React from 'react';
import Dashboard from '../Dashboard';

import Table from '@/Components/Table';

const rows = [{ name: 'Tên' }, { name: 'Ga' }];
const cols = [
    {
        id: 9,
        name: 'Chuông Đài Loan 9',
        image: 'ga.jpg',
        slug: 'chuong-dai-loan-9',
        parent_id: 0,
        created_at: '2023-02-20T07:28:23.000000Z',
        updated_at: null,
    },
    {
        id: 8,
        name: 'Chuông Đài Loan 8',
        image: 'ga.jpg',
        slug: 'chuong-dai-loan-8',
        parent_id: 0,
        created_at: '2023-02-20T07:28:23.000000Z',
        updated_at: null,
    },
];
console.log(rows.name);

export default function Index() {
    return (
        <>
            <Dashboard>
                <h1>Danh sách sản phẩm</h1>
                <Table rows={rows} />
            </Dashboard>
        </>
    );
}
