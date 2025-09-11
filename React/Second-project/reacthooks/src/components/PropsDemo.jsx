function PropsDemo(props){
    console.log(props);
    return(
        <>
        <h1>Properties Demo in React</h1>
        Name: {props['name']} <br />
        Age: {props.age}
        </>
    )
}
export default PropsDemo;