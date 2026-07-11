function Fruitlist(){
    const fruits = ["Apple", "Mango", "Grapes", "Orange"];
    return(
        <>
        <h2>Fruits</h2>

        {fruits.map((fruits) => (
            <p>{fruits}</p>
        ))}
        </>
    );
}

export default Fruitlist;