import PropTypes from 'prop-types'

function Teste2({name, age, hobby}){
    return(
        <div>
            <p>Nome: {name}</p>
            <p>Idade: {age}</p>
            <p>Passatempo: {hobby}</p>
        </div>
    )
}

Teste2.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hobby: PropTypes.string.isRequired
}

Teste2.defaultProps = {
    name: '<NOME NAO INFORMADO>',
    age: '<IDADE NAO INFORMADA>',
    hobby: '<PASSATEMPO N INFORMADO>'
}

export default Teste2;