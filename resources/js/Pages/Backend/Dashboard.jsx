import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const [currentTab, setCurrentTab] = useState(1);
    const tabs = [
        {
            id: 1,
            tabTitle: 'Danh Mục',
            url: 'dashboard.category',
        },
        {
            id: 2,
            tabTitle: 'Sản Phẩm',
            url: 'dashboard.product',
        },
        {
            id: 3,
            tabTitle: 'Người dùng',
            url: 'dashboard.user',
        },
        {
            id: 4,
            tabTitle: 'Đơn Hàng',
            url: 'dashboard.order',
        },
    ];

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <div className="container">
                <div className="tabs">
                    {tabs.map((tab, i) => (
                        <>
                            <Link
                                href={route(`${tab.url}`)}
                                key={i}
                                id={tab.id}
                                disabled={currentTab === `${tab.id}`}
                                onClick={(e) => e.target.id}
                                className="btn"
                            >
                                {tab.tabTitle}
                            </Link>
                        </>
                    ))}
                </div>
                <div className="content">
                    <div>{props.children}</div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
