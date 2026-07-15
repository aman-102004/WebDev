import Product from "./Product.jsx";

// function ProductsTab(){
//     let feature=["hi-tech","durable","fast"];
//     // let feature2={a:"hi-tech",b:"durable",c:"fast"};
//     return(
//         <>
//     <Product title="Phone" price={30000}  />
//     <Product title="Laptop" price={40000}/>
//     <Product title="Pen" price={10000}/>
//     </>
//     );
    
// }


//For Acticity
function ProductsTab(){
    let style={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center",

    }
    return(
    <div style={style}>
    
    <Product title="Logitech" idx={0}/>
    <Product title="Apple" idx={1}/>
    <Product title="Zebronics" idx={2}/>
    <Product title="Petronics" idx={3}/>
    </div>
    );
    
}

export default ProductsTab;