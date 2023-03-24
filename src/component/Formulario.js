function Formulario(){
    function cadastrar(event){
        event.preventDefault()
        alert('Cadastrado!')
    }

    return(
        <div>
            <h1>Cadastrar pessoa:</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <input type="text" placeholder="Informe o nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    )
}

export default Formulario;