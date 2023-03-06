import React from 'react';
import { useEffect, useState } from 'react';

import Dashboard from '../Dashboard';
import { Link, usePage } from '@inertiajs/inertia-react';
import { getCategory } from '@/service/Api';
import { baseUrlImage, baseUrlImageProduct } from '@/service/Config';

export default function Index() {
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        getCategory().then((res) => {
            if (res?.data) {
                setCategory(res.data);
            }
        });
    }, []);

    const { props } = usePage();

    return (
        <>
            <Dashboard>
                <h1>Danh mục</h1>
                <Link className="btn" href={route('dashboard.category.create')}>
                    Thêm danh mục +
                </Link>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Tên</th>
                            <th>Hình ảnh</th>
                            <th>Mã SP</th>
                            <th>Ngày tạo</th>
                            <th>Ngày sửa</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((cate, i) => (
                            <tr data-i={i} key={i}>
                                <td>{i + 1}</td>
                                <td>{cate.name}</td>
                                <td>
                                    <img src={props.ziggy.url + '/assets/upload/category/' + cate.image} alt="Image" />
                                </td>
                                <td>{cate.sku}</td>
                                <td>{cate.created_at}</td>
                                <td>{cate.updated_at}</td>
                                <td>
                                    <Link href={route('dashboard.category.edit', cate.id)}>Sửa</Link>
                                </td>
                                <td>
                                    <Link replace href={route('api.category.destroy', cate.id)}>
                                        Xóa
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Dashboard>
        </>
    );
}
