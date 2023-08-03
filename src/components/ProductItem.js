import StarRating from "./Starrating.js";
const ProductItem=(props) => {
    return (
       <tr>
        <td>
            {props.show ?
            <img src={props.product.imageUrl} 
            title={props.product.productName} className="avatar"
            style={{width:50,margin:2}}/> :null}
        </td>
        <td> {props.product.productName}   </td>
        <td> {props.product.productCode}   </td>
        <td> {props.product.productAvailable}   </td>
        <td> {props.product.price}   </td>
       <td><StarRating rating={props.product.starRating}/></td>
       </tr>
    )
}

export default ProductItem;