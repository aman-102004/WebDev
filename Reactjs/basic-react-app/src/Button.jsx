function printHello(){
    console.log("Hello");
}

function printBye(){
    console.log("Bye");
}
export default function Button(){
    return(

        <div>
            <button onClick={printHello}>Click me</button>
            <p onMouseOver={printBye}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores maiores vero deserunt nobis eos quisquam, nulla fuga qui sunt nihil, cum molestiae ipsam ex omnis exercitationem veritatis. Non, consequatur?</p>
        </div>
        
    )
}