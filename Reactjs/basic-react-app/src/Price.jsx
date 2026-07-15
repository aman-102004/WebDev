export default function Price({oldPrice,newPrice}){
    let oldstyle={
        textDecorationLine:"line-through",
    };
    let newstyle={
        fontWeight:"bold",
    }
    let style={
        backgroundColor:"#e0c367",
        height:"20px",
        marginBottom:"5px",
        borderBottomLeftRadius:"14px",
        borderBottomRightRadius:"14px"

    }
    return (
        <div style={style}>
            <span style={oldstyle}>{oldPrice}</span>
            &nbsp;&nbsp;
            <span style={newstyle}>{newPrice}</span>
        </div>
    )
}