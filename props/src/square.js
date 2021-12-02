import React from 'react'

const Square = ({ color }) => {
    return (
        <div 
            style={{
                height: '100px',
                width: '100px',
                backgroundColor: color
            }} 
            onClick={(e) => {
                alert('olá!')
            }}
        />
    )
}

Square.defaultProps = {
    color: 'red'
}

export default Square