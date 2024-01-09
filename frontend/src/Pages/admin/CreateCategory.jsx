import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

function CreateCategory() {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        // get all category
        const getAllCategory = async () => {
            try {
                const response = await axios.get('http://localhost:3000/category/all');
                if (response.success) {
                    setCategories(response.data);
                }
            } catch (error) {
                console.log(error.message);
                toast.error('Something went wrong in getting category');
            }
        };
        getAllCategory();
    }, []);

    return (
        <div className="container">
            <Table responsive>
                <thead>
                    <tr>
                        <th>Name</th>

                    </tr>
                </thead>
                <tbody>
                    {categories.map((obj) => (
                        <tr key={obj._id}>
                            <td>{obj.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default CreateCategory;
