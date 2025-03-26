import React from "react";
import ProductCard from "./ProductCard";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";
import "./../App.css"
import { setProducts } from "../utils/slices/productSlice";
const Home =()=>{
    const [loading,setLoading]= useState(true);
    const input= useSelector((state)=>state.input.searchInput);
    const products = useSelector((state)=>state.product.fetchProducts);
    console.log(products)
    const dispatch = useDispatch();
    const fetchProducts = async ()=>{
        setLoading(true);
        try{
            let curl = `https://fakestoreapi.com/products`;
            const response = await fetch(curl);
            const result = await response.json();
            dispatch(setProducts(result));
            setLoading(false);
        }
        catch{

        }
        finally{
            setLoading(false);
        } }
        useEffect(()=>{
            fetchProducts();
        },[]);
        const filterProducts = products?.filter((product)=>product.title.toLowerCase().includes(input.toLowerCase()));
        console.log(filterProducts)
        return(
            <>
              {loading ?(
            <div className="loading-spinner">
                <FadeLoader />
            </div>
        ):
        filterProducts && filterProducts.length>0 ? (
            <div className="cardcontainermain">
                {filterProducts.map((p)=>(
                    <ProductCard key={p.id}  products={p} />
                ))}
            </div>
        ):<div>
            <h1>No products found for your search</h1>
        </div>
    }
            </>
        )
}

export default Home;