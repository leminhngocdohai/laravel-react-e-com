import React from 'react';
import { useEffect, useState } from 'react';

import Dashboard from '../Dashboard';
import { Link } from '@inertiajs/inertia-react';
import { getUser } from '@/service/Api';

export default function Index() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUser().then((res) => {
            if (res?.data) {
                setUser(res.data);
            }
        });
    }, []);

    return (
        <>
            <Dashboard>
                <h1>Tài khoản</h1>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Tên</th>
                            <th>email</th>
                            <th>Phone</th>
                            <th>Giới tính</th>
                            <th>Ngày sinh</th>
                            <th>Trạng thái</th>
                            <th>Ngày tạo</th>
                            <th>Ngày sửa</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.gender}</td>
                                <td>{user.birth}</td>
                                <td>{user.status}</td>
                                <td>{user.created_at}</td>
                                <td>{user.updated_at}</td>
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
