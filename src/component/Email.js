import { useState } from "react"

function Email(){
    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] = useState()

    function enviarEmail(event){
        event.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastro de email:</h2>
            <form>
                <input
                type="email"
                placeholder="Digite seu email..."
                onChange={(event) => setEmail(event.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>
                    Enviar
                </button>
                {userEmail &&(
                    <div>
                        <p>Seu email é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Email