import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Navbar from './Navbar'

function Application(){
    return(
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home></Home>}/>
                    <Route path="/empresa" element={<Empresa></Empresa>}/>
                    <Route path='/contato' element={<Contato></Contato>}/>    
                </Routes>
            </Router>
        </>
    )
}

export default Application