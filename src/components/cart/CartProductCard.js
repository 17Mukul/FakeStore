import "./cart.css";
import {useDispatch} from "react-redux";
import { removeFromCart,increaseQuantity,decreaseQuantity } from "../../utils/slices/cartSlice";
const CartProductCard = ({cartItem})=>{
    const dispatch = useDispatch();
    return(
        <>
        <div className="container">
        <div className="cart">
            <div className="card-content">
                <img className="cardimg" src={cartItem.image} alt="not-found" width="90px" height="90ps"
                    style={{margin:"20px",objectFit:"contain"}}
                />
                <div className="titleclass">
                    <p style={{margin:"14px"}}>{cartItem.title}</p>


                </div>
                <p style={{margin:"14px"}}>{cartItem.price}</p>

           
            <span style={{margin:"8px"}}>
                <button className="decreasebtn" disabled={cartItem.quantity<1} onClick={()=>{dispatch(decreaseQuantity(cartItem.id))}}>-</button>
                <button className="increasebtn" onClick={()=>{dispatch(increaseQuantity(cartItem.id))}}>+</button>
            </span>
            </div>
            <div className="cartfooterdiv">
                <button className="removebtn" onClick={()=>dispatch(removeFromCart(cartItem.id))}>Remove Item</button>

            </div>
        </div></div>
        </>
    )
}
export default CartProductCard;