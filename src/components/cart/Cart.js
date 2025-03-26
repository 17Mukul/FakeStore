import CartProductCard from "./CartProductCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = ()=>{
    const cartItems = useSelector((state)=>state.cart.items);
    const navigate = useNavigate();
    const totalprice = cartItems.reduce((total,item)=>total + item.price*item.quantity ,0);
    return(
        <>
        {cartItems.length===0 &&(
            <div className="emptycartimg" style={{marginTop:"25vh"}}>
                <img alt="not-found" src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png" onClick={()=>navigate("/")} />

            </div>
        )}
        <div className="cartContainer" >
            {cartItems.map((p)=>(
                <CartProductCard cartItem={p} key={p.id} />
            ))}

        </div>
        {cartItems && cartItems.length>0 && (
            <div className="totalprice">
                <h5>Total:{totalprice}$ <p>To Pay</p></h5>
                <button className="checkoutBtn" onClick={()=>alert("Checkout Functionality work in progress")}>Checkout</button>
            </div>
        )}
        </>
    )
}
export default Cart;