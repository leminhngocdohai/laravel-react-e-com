import React from 'react';
import { useEffect, useState } from 'react';

import Dashboard from '../Dashboard';
import { Link } from '@inertiajs/inertia-react';
import { getProduct } from '@/service/Api';

export default function Index() {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        getProduct().then((res) => {
            if (res?.data) {
                setProduct(res.data);
            }
        });
    }, []);

    return (
        <>
            <Dashboard>
                <h1>Sản Phẩm</h1>
                <Link className="btn" href={route('dashboard.product.create')}>
                    Thêm sản phẩm +
                </Link>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Tên</th>
                            <th>Hình ảnh</th>
                            <th>Mã SP</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Giới thiệu</th>
                            <th>Danh mục</th>
                            <th>Ngày tạo</th>
                            <th>Ngày sửa</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((prd, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{prd.name}</td>
                                <td>{prd.image}</td>
                                <td>{prd.sku}</td>
                                <td>{prd.price}</td>
                                <td>{prd.quantity}</td>
                                <td>{prd.description}</td>
                                <td>{prd.category_id}</td>
                                <td>{prd.created_at}</td>
                                <td>{prd.updated_at}</td>
                                <td>
                                    <Link href={route('dashboard')}>Sửa</Link>
                                </td>
                                <td>
                                    <Link href={route('dashboard')}>Xóa</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Dashboard>
        </>
    );
}
