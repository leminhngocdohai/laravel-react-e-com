import React from 'react';
import { useEffect, useState } from 'react';

import Dashboard from '../Dashboard';
import { Link } from '@inertiajs/inertia-react';
import { getOrder } from '@/service/Api';

export default function Index() {
    const [orders, setOrder] = useState([]);

    useEffect(() => {
        getOrder().then((res) => {
            if (res?.data) {
                setOrder(res.data);
            }
        });
    }, []);

    return (
        <>
            <Dashboard>
                <h1>Đơn hàng</h1>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Code</th>
                            <th>Tên người mua</th>
                            <th>Số Đt</th>
                            <th>Địa Chỉ</th>
                            <th>Sản Phẩm</th>
                            <th>Số lượng</th>
                            <th>Trạng Thái</th>
                            <th>Ngày tạo</th>
                            <th>Ngày sửa</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{order.code}</td>
                                <td>{order.user_name}</td>
                                <td>{order.user_phone}</td>
                                <td>{order.user_address}</td>
                                <td>{order.product_name}</td>
                                <td>{order.quantity}</td>
                                <td>{order.status}</td>
                                <td>{order.created_at}</td>
                                <td>{order.updated_at}</td>
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
