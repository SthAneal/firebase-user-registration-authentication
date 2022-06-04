import React, {useState, useEffect} from 'react';
import Axios from '../api/Axios';

type productType = {}

export const Coles = ()=>{
    const [product, setProduct] = useState<productType>({} as productType);

    useEffect(()=>{
        getProduct();
    }, [])


    const getProduct = async ()=>{
        const response = await Axios.get('/api/coles');
        // const response = await Axios.get('/api/login');

        console.log(response);
        setProduct({product:response.data.single});
    }

    return(
        <div>Coles: {JSON.stringify(product)}</div>
    )
}