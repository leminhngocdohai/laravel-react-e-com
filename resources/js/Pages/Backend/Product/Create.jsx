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
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react';

import Table from '@/Components/Table';

export default function Create() {
    const [inputImage, setInputImage] = useState('');

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        image: null,
        sku: '',
        price: '',
        quantity: '',
        description: '',
        category_id: '',
        drone: '',
    });

    const { props } = usePage();

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);

        if (event.target.type === 'file') {
            const img = event.target.files[0];
            setInputImage(URL.createObjectURL(img));
        }
    };

    const handleInputFile = (e) => {
        setData('image', e.target.files[0]);
        setInputImage(URL.createObjectURL(e.target.files[0]));
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('api.product.store'), data, {
            forceFormData: true,
        });
    };

    return (
        <>
            <Dashboard>
                <h1>Thêm Sản phẩm</h1>

                <form onSubmit={submit} encType="multipart/form-data">
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
                        <InputLabel forInput="sos" value="sos" />
                        <TextInput
                            type="text"
                            name="sos"
                            value={data.sos}
                            className=""
                            autoComplete="sos"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <InputError message={errors.sos} />
                    </div>

                    <div>
                        <InputLabel forInput="sku" value="Mã Code" />
                        <TextInput
                            type="text"
                            name="sku"
                            value={data.sku}
                            className=""
                            autoComplete="sku"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <InputError message={errors.sku} />
                    </div>

                    <div>
                        <InputLabel forInput="image" value="Hình ảnh" />
                        <input type="file" onChange={handleInputFile} />
                        <img className="input-img" src={inputImage} alt="" />
                        <InputError message={errors.image} />
                    </div>

                    <div>
                        <InputLabel forInput="price" value="Giá" />
                        <TextInput
                            type="number"
                            name="price"
                            value={data.price}
                            className=""
                            autoComplete="price"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <InputError message={errors.price} />
                    </div>

                    <div>
                        <InputLabel forInput="quantity" value="Số lượng" />
                        <TextInput
                            type="number"
                            name="quantity"
                            value={data.quantity}
                            className=""
                            autoComplete="quantity"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <InputError message={errors.quantity} />
                    </div>

                    <div>
                        <InputLabel forInput="description" value="Mô tả" />
                        <TextInput
                            type="text"
                            name="description"
                            value={data.description}
                            className=""
                            autoComplete="description"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                        <InputError message={errors.description} />
                    </div>

                    {/* <div>
                        <InputLabel forInput="category_id" value="Thuộc danh mục nào" />
                        <div>
                            {props.categories.map((category, index) => (
                                <div>
                                    <input
                                        type="radio"
                                        name="category_id"
                                        id={category.name}
                                        key={index}
                                        defaultValue={category.id}
                                    />
                                    <label htmlFor={category.name}>{category.name}</label>
                                </div>
                            ))}
                        </div>

                        <InputError message={errors.category_id} />
                    </div> */}

                    <select name="category_id" id="category_id">
                        {props.categories.map((category, index) => (
                            <option key={index} value={category.id}>
                                {category.id}
                                {category.name}
                            </option>
                        ))}
                    </select>

                    <PrimaryButton className="btn" processing={processing}>
                        Thêm Sản Phẩm
                    </PrimaryButton>
                </form>
            </Dashboard>
        </>
    );
}
