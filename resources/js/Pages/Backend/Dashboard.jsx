import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const [currentTab, setCurrentTab] = useState('1');
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

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    };

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors} header={<h2>Trang chủ</h2>}>
            <Head title="Trang chủ">
                <Link href={route('dashboard')}>Trang chủ</Link>
            </Head>

            <div className="container">
                <div className="tabs">
                    {tabs.map((tab) => (
                        <>
                            <Link
                                href={route(`${tab.url}`)}
                                key={tab.id}
                                id={tab.id}
                                disabled={currentTab === `${tab.id}`}
                                onClick={handleTabClick}
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
