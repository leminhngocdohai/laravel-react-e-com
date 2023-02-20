import React, { useEffect, useState } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import axios from 'axios';
import { getCategory, getCategoryById } from '@/service/Api';

export default function Welcome(props) {
    const [names, setName] = useState([]);

    useEffect(() => {
        getCategory().then((response) => {
            // handle success

            response.data.map((index) => {
                setName((data) => [...data, index.name]);
            });
        });
    }, []);

    return (
        <>
            <Head title="Mantra Store" />
            <div>
                <div>
                    {props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                Register
                            </Link>
                            <Link
                                href={route('home')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline"
                            >
                                HomeEE
                            </Link>
                        </>
                    )}
                </div>
                <div>
                    <h1>Category</h1>
                    <table id="customers">
                        <tr>
                            <th>Name</th>
                        </tr>
                        {names.map((name, index) => (
                            <>
                                <tr>
                                    <td key={index}>{name}</td>
                                    <td>
                                        <button>Edit</button>
                                    </td>
                                    <td>
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </table>
                </div>
            </div>
        </>
    );
}
