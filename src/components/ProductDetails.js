import "./ProductDetails.css"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addTocart,removeFromCart } from "../utils/slices/cartSlice";
const ProductDetails=()=>{
    const [products,setProducts]= useState([]);
    const dispatch =useDispatch();
    const cartItems = useSelector((state)=>state.cart.items);
    const isIncart = cartItems.some((item)=>item.id===products.id);
    const handleCartClick =()=>{
        if(isIncart){
            dispatch(removeFromCart(products.id))
        }else{
            dispatch(addTocart(products))
        }
    }
    const {id}= useParams();
    const fetchData= async()=>{
        try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const result = await response.json();
        setProducts(result);
        }
        catch{

        }
    }
    useEffect(()=>{
        fetchData();
    },[id,fetchData])
    return(
        <>
        <div className="pdpContainer">
            <div className="pdpImage" style={{overflow:"hidden"}}>
                <img src={products.image} alt="not-found"/>

            </div>
            <div className="carddescription" style={{overflow:"hidden"}}>
                    <h4>{products.title}</h4><br></br>
                    <p>{products.description}</p>
                    <p>Price :{products.price}$</p>
                    <button className="addtoCart-btn" onClick={handleCartClick}>
                        {isIncart?<h3>Remove Product</h3>:<h4>ADD TO CART</h4>}
                    </button>
            </div>

        </div>
        </>
    )
}
export default ProductDetails;