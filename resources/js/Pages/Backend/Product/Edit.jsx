import React from 'react';
import { useEffect, useState } from 'react';

import Dashboard from '../Dashboard';
import { Link } from '@inertiajs/inertia-react';
import { getCategoryById } from '@/service/Api';

import Table from '@/Components/Table';

export default function Edit() {
    return (
        <>
            <Dashboard>
                <h1>Sửa Sản Phẩm</h1>
            </Dashboard>
        </>
    );
}
