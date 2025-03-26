import { useNavigate } from "react-router-dom";
import "./ProductCard.css"
const ProductCard =({products})=>{
    const navigate = useNavigate();
   const handleProductCard =(id)=>{
    navigate(`/product/${id}`);
   }
    return(
        <>
        <div className="card" onClick={()=>handleProductCard(products.id)}>
            <div className="card-content">
                <img src={products.image} alt="notfound" width="90px" height="90px" />
                <p>{products.title}</p>
                <p>{products.price}$</p>
            </div>

        </div>
        </>
    )
}
export default ProductCard;