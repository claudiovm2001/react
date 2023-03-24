function Btn(){
    function Click(){
        alert('Fui clicado!');
    }

    return(
        <div>
            <button onClick={Click}>Clique!</button>
        </div>
    )
}

export default Btn;