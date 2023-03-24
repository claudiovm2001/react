import Teste2 from './Teste2'

function Teste({name, age, hobby}){

    return(
        <div>
            ---------
            <Teste2 name={name} age={age} hobby={hobby}/>
            ---------
        </div>
    )
}

export default Teste;