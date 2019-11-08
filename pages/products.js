import MainLayout from '../layouts/MainLayout';
import AddProductForm from '../components/AddProductForm';
import Product from '../components/Product';
import React, { useState } from 'react';
// const TestProduct = {
//     name: 'Pen',
//     description: 'Write Something',
//     price:10,
//     quantity:100,
//     imageUrl:''
// }
const initProducts = [
    {
        name: 'Pen',
        description: 'Write Something',
        price: 10,
        quantity: 100,
        imageUrl: ''
    },
    {
        name: 'Pencil',
        description: 'Write Something',
        price: 10,
        quantity: 100,
        imageUrl: '',
    },
    {
        name: 'Book',
        description: 'Write Something',
        price: 10,
        quantity: 100,
        imageUrl: ''
    }

]
const ProductsPage = () => {
    const [products, setProducts] = useState(initProducts);
    
    const handleCreate = (data) => {
        initProducts.push(data);
        setProducts([...initProducts])
        console.log(data);
    }
    return (
        <MainLayout>
            <h3>Products</h3>
            <AddProductForm onCreate={handleCreate} />
            <h3>Produc List</h3>
            {
                products.map((item, index) => {
                    return (
                        <Product key={index} data={item} />
                    )
                })
            }
            <style jsx>{`
        `}</style>
        </MainLayout>
    )
}

export default ProductsPage;