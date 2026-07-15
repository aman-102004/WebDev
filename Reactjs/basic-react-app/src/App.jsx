import "./App.css";
import ProductsTab from "./ProductsTab.jsx";
import Button from "./Button.jsx";
import Form from "./Form.jsx";
// import Title from "./Title.jsx";
// import Msgbox from "./Msgbox.jsx";

//we wont be making components here intead we will be making seperate files for each components
// function Description(){
//   return <h1>Hello this is Description</h1>
// }
// function App() {
//   return (
//     // <div className="container">
//     //   <button className="btn">Hello World</button>
//     //   <Title ></Title>
//     //   <Description></Description>
//     // </div>
    
    
    
//     // this is react fragments
//     <>
//     <Msgbox userName="Aman" textColor="pink"></Msgbox>
//     <Msgbox userName="Aman" textColor="blue"></Msgbox>
//     <Msgbox userName="Aman" textColor="yellow"></Msgbox>
//     <ProductsTab></ProductsTab>
//     </>
    
    
//   );
// }



function App() {
  return (
    <>
    <h2 style={{textAlign:"center"}}>BlockBuster Deals</h2>
    <ProductsTab></ProductsTab>
    <Button></Button>
    <Form></Form>
    </>
  );
}

export default App;