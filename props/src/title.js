import React from 'react'

// Função pura encurtada
const Title = (props) => <h1>Olá {`${props.name}, você tem ${props.age}`} anos!</h1>

// Função pura
// 
// const Title = () => {
//     return (
//         <h1>Olá Fernando!!</h1>
//     )
// }

// class Title extends React.Component{
//     render() {
//         return (
//             <h1>Olá {this.props.name}! Você tem {this.props.age} anos.</h1>
//         )
//     }
// }

Title.defaultProps = {
    name: 'Desconhecido',
    age: 5
}

export default Title