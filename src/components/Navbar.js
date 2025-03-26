import { useSelector,useDispatch } from "react-redux";
import { useNavigate,useLocation,Link } from "react-router-dom";
import { setCategory } from "../utils/slices/categorySlice";
import { setInputValue } from "../utils/slices/inputSlice";
import "./Navbar.css"
import logo from "../assets/images/fakeremove.png";
import { useEffect,useState } from "react";
import SearchBar from "./SearchBar";
const Navbar =()=>{
    const dispatch =useDispatch();
    const cartItems = useSelector((state)=>state.cart.items);
    const [showsearchBar,setshowSearchBar]= useState(true);
    const navigate =useNavigate();
    const location = useLocation();
    const handleCrossClick=()=>{
        navigate("/");
        dispatch(setInputValue(""));
    }
    useEffect(()=>{
        if(location.pathname ==="/cart" || location.pathname.startsWith("/product")){
            setshowSearchBar(false);
        }
        else{
            setshowSearchBar(true);
        }
    },[location.pathname]);
    return(
        <>
        <div className="headerbar">
            <Link to="/"><img src={logo} width="110vw" height="90vh" alt="logo" />
            </Link>
            <h3>Fake Store</h3>
            <button className="cartbtn" onClick={()=>navigate("/cart")}>🛒Cart{cartItems.length}</button>
        </div>
        {showsearchBar && (
            <div className="scroll-content">
                <SearchBar />
                <div className="navcontainer">
                    <button className="categorybtn" 
                    onClick={()=>{
                        dispatch(setCategory("electronics"))
                        navigate("/category")
                    }}
                    >Electronics</button>
                    <button id="categorybtn" 
                    onClick={()=>{
                        dispatch(setCategory("jewelery"))
                        navigate("/category")
                    }}
                    >jewelery</button>
                         <button id="categorybtn" 
                    onClick={()=>{
                        dispatch(setCategory("men's%20clothing"))
                        navigate("/category")
                    }}
                    >Men's</button>
                        <button id="categorybtn" 
                    onClick={()=>{
                        dispatch(setCategory("women's%20clothing"))
                        navigate("/category")
                    }}
                    >Women's</button>
                    <button className="categorybtn" onClick={handleCrossClick}>❌</button>
                </div>
            </div>
        )}
        </>
    )
}
export default Navbar;