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
import { Head, Link, useForm, InertiaLink, usePage } from '@inertiajs/inertia-react';

export default function Edit() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        image: '',
        sku: '',
        parent_id: '',
    });

    const { props } = usePage();
    const [inputImage, setInputImage] = useState('');

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);

        if (event.target.type === 'file') {
            const img = event.target.files[0];
            setInputImage(URL.createObjectURL(img));
        }
    };

    useEffect(() => {
        getCategoryById(props.id).then((res) => {
            if (res?.data) {
                setData(res.data);
                setInputImage(props.ziggy.url + '/assets/upload/category/' + res.data.image);
            }
        });
    }, []);

    const handleInputFile = (e) => {
        setData('image', e.target.files[0]);
        setInputImage(URL.createObjectURL(e.target.files[0]));
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('api.category.update', data.id));
    };

    return (
        <>
            <Dashboard>
                <h1>Sửa danh mục</h1>

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
                        <InputLabel forInput="image" value="Hình ảnh" />
                        <input type="file" onChange={handleInputFile} />
                        <img className="input-img" src={inputImage} alt="" />
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
                        Sửa Danh Mục
                    </PrimaryButton>
                </form>
            </Dashboard>
        </>
    );
}
