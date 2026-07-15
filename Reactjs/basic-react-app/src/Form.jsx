function handleformSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
}
export default function Form(){
    return (
        <form>
        <input type="text" placeholder="Write Something"/>
        <button onClick={handleformSubmit}>Submit</button>

        </form>
    )
}