import "./Product.css";
import "./Price.jsx";
import Price from "./Price.jsx";
// function Product({title,price}){
//     // const list=feature.map((feature)=><li>{feature}</li>);
//     const styles={backgroundColor:price>30000?"blue":""};
//     return(
//         //Camel case use in class name
//         <div className="Product" style={styles}>
//             <h3 style={{color:"pink"}}>"{title}"</h3>
//             <h5>{price}</h5>
//             {price>30000?<p>"Discount of 5%"</p>:null}
//             {/* <p>{feature?.map((feature)=><li>{feature}</li>)}</p> */}
//             {/* <p>{feature2?.b}</p> */}
//         </div>
//     )
// }


//for activity
function Product({title,idx}){
   let oldPrice=["12,496","11,900","1,599","599"];
   let newPrice=["10,999","9,900","1,199","299"];
   let Description=[["8000 Dpi","5 Programmable"],["Intutive surface","designed for ipad pro"],["designed for ipad pro","Reliable"],["wireless","Fast"]];
    return(
        
        <div className="Product" >
            
            <h1>{title}</h1>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}></Price>
            {/* <p>Product</p> */}

            
        </div>
    )
}

export default Product;