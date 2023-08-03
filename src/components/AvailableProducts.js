import {useEffect,useState} from'react';
import ProductItem from './ProductItem';
import httpclient from '../apiclient/httpclient';
const AvailableProduct = () =>{
const [products,setProducts] = useState([]);
const [filteredProducts,setFilteredProducts] = useState([]);
const [show,setShow] = useState(false);
useEffect(() => {
    const fetchProducts=async()=>{
      const response=await httpclient.get('http://localhost:8888/products');
    setProducts(response);
    setFilteredProducts(response);
    }
    fetchProducts()
},[])
const productList=filteredProducts.map((product)=>(
    <ProductItem key={product.productId} product={product} show={show} />
))

const showOrHideImage=()=>{
  setShow(!show)
}

const searchByProductName = (e)=> {
    //if(e.target.value)
    setFilteredProducts(products.filter(p => p.productName.toLocaleLowerCase().indexOf(e.target.value.toLocaleLowerCase()) !== -1))
    // else if(e.target.value == ''){
    // setTimeout(() => {
    // window.location.reload()
    // },500)}
}

    return(
 
    <div className="panel-group">

    <div className='panel panel-primary'>
    
    <div className="panel panel-header">
    
    Products List
    
    </div>
    
    
    
    
    
    
    
    <div className='panel-body'>
    
    <div className='row'>
    
    <div className='col-md-2'>Filter by:</div>
    
    <div className='col-md-4'>
    
    <input type='text' onChange={searchByProductName} />
    
    
    
    
    </div>
    
    </div>
    
    <div className='table-responsive'>
    <table className="table">
    <thead className="table-dark">
    <tr>
    <th><button onClick={showOrHideImage}>{show? 'Hide ':'Show ' }Image</button></th>
    <th>Product</th>
    <th>Code</th>
    <th>Available</th>
    <th>Price</th>
    <th>StarRating</th>
    
    
    </tr>
    
    </thead>
    <tbody>
    {productList}
    </tbody>
    
    </table>
    </div>
    </div>
    </div>
    </div>
)

}

export default AvailableProduct



// class AvailableProducts extends React.Component{
//     state={
//         products=[]
//     }
    
//     constructor(props){
//     }
//     async componentDidMount(){const response=await httpclient.get('http://localhost:8888/products');
// this.setState(products:response);
//     }
//     render(){
// return{
//     <div>   </div>
// }
//     }
