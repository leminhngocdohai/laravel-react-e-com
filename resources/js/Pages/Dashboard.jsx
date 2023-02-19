import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    const [currentTab, setCurrentTab] = useState('1');
    const tabs = [
        {
            id: 1,
            tabTitle: 'Danh Mục',
            title: 'Danh Mục',
            content: 'This is Danh mục',
        },
        {
            id: 2,
            tabTitle: 'Sản Phẩm',
            title: 'Sản Phẩm',
            content: 'This is Sản Phẩm',
        },
        {
            id: 3,
            tabTitle: 'Người dùng',
            title: 'Người dùng',
            content: 'This is Người dùng',
        },
        {
            id: 4,
            tabTitle: 'Đơn Hàng',
            title: 'Đơn Hàng',
            content: 'This is Đơn Hàng',
        },
    ];

    const handleTabClick = (e) => {
        setCurrentTab(e.target.id);
    };

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="container">
                <div className="tabs">
                    {tabs.map((tab, i) => (
                        <button key={i} id={tab.id} disabled={currentTab === `${tab.id}`} onClick={handleTabClick}>
                            {tab.tabTitle}
                        </button>
                    ))}
                </div>
                <div className="content">
                    {tabs.map((tab, i) => (
                        <div key={i}>
                            {currentTab === `${tab.id}` && (
                                <div>
                                    <p className="title">{tab.title}</p>
                                    <p>{tab.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
