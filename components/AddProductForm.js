import React, {useState} from 'react';
const AddProductForm = (props) => {

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [price,setPrice] = useState(0);
    const [quantity,setQuantity] = useState(0);
    const [imageUrl,setImageUrl] = useState('');
    const handleCreate = () =>{
        // console.log(name,description,price,quantity,imageUrl);
        props.onCreate({name,description,price,quantity,imageUrl})
    }

    return (
        <div className="add-product-form">
            <label>
                <p>Name</p>
                <input typr="text" placeholder="name" onChange={(e)=>setName(e.target.value)}/>
            </label>
            <label>
                <p>Description</p>
                <textarea onChange={(e)=>setDescription(e.target.value)}/>
            </label>
            <label>
                <p>price</p>
                <input type="number" onChange={(e)=>setPrice(+e.target.value)}/>
            </label>
            <label>
                <p>Quantity</p>
                <input type="number" onChange={(e)=>setQuantity(+e.target.value)}/>
            </label>
            <label>
                <p>image</p>
                <input type='file' />
            </label>
            <div>
            <button onClick={handleCreate}>Arim</button>
            </div>
            <style jsx>{`
            .add-product-form{
                border: 1px solid #cecece;
                display:inline-flex;
                flex-direction:column;
                padding: 10px;
                max-width:300px;
                border-radius:8px;
            }
            button{
                width :80px;  
                background-color:#009DE7;
                border: 1px solid white;
                border-radius:4px;
                padding:4px;
                color:white;
            }
            p{
                margin:0 0 5px 0;
            }
            input{
                border-radius:4px;
                margin-bottom:5px;
                border: 1px solid #cecece;
                padding:4px;
                min-width:200px;
            }
            textarea{
                border-radius:4px;
                border: 1px solid #cecece;
                padding:4px;
                min-width:200px;
            }

            `}</style>
        </div>

    )
}
export default AddProductForm;