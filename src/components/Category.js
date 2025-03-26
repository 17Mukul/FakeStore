import { useState,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux";
import FadeLoader from "react-spinners/FadeLoader";
import { setProducts } from "../utils/slices/productSlice";
import "./Category.css";
import { setInputValue } from "../utils/slices/inputSlice";
import ProductCard from "./ProductCard";

const Category =()=>{
    const [loading,setLoading]= useState(true);
    const input= useSelector((state)=>state.input.searchInput);
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state)=>state.category.selectedCategory);
    const products = useSelector((state)=>state.product.fetchProducts);
    const fetchProducts = async ()=>{
        setLoading(true);
        try{
            let curl = `https://fakestoreapi.com/products/category/${selectedCategory}`;
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
            dispatch(setInputValue(""));

        },[selectedCategory,dispatch,fetchProducts]);
        const filterProducts = products?.filter((product)=>product.title.toLowerCase().includes(input.toLowerCase()))
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

export default Category;