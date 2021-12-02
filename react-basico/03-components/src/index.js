import React from 'react'
import ReactDOM from 'react-dom'

import MeuComponente1 from './Componente01'
import MeuComponente2 from './Componente02'

// ReactDOM.render(
//     <>
//         <MeuComponente1 />
//         <MeuComponente2 />
//     </>,
//     document.getElementById('root')
// )

class Principal extends React.Component{
    render(){
        return (
            <div>
                <MeuComponente1 />
                <MeuComponente2 />
            </div>   
        )
    }
}

ReactDOM.render(
    <Principal />, 
    document.getElementById('root')
)