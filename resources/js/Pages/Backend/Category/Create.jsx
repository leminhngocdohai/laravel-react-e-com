import React from 'react';
import { useEffect, useState } from 'react';

import Dashboard from '../Dashboard';
import { getCategoryById } from '@/service/Api';

import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

import Table from '@/Components/Table';

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        image: '',
        sku: '',
        parent_id: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('api.category.store'));
    };

    return (
        <>
            <Dashboard>
                <h1>Thêm danh mục</h1>

                <form onSubmit={submit}>
                    <div>
                        <InputLabel forInput="name" value="Tên" />
                        <TextInput
                            type="text"
                            name="name"
                            value={data.name}
                            className=""
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div>
                        <InputLabel forInput="image" value="Hình ảnh" />
                        <TextInput
                            type="text"
                            name="image"
                            value={data.image}
                            className=""
                            autoComplete="image"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div>
                        <InputLabel forInput="sku" value="Mã Sản Phẩm" />
                        <TextInput
                            type="text"
                            name="sku"
                            value={data.sku}
                            className=""
                            autoComplete="sku"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div>
                        <InputLabel forInput="parent_id" value="Cateee" />
                        <TextInput
                            type="text"
                            name="parent_id"
                            value={data.parent_id}
                            className=""
                            autoComplete="parent_id"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <InputError message={errors.name} />
                    </div>

                    <PrimaryButton className="btn" processing={processing}>
                        Tạo Danh Mục
                    </PrimaryButton>
                </form>
            </Dashboard>
        </>
    );
}
