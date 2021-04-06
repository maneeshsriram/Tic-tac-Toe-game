import React from 'react'

const Icons = ({ name }) => {
    switch (name) {
        case 'cross':
            return <i className="fas fa-times fa-3x text-dark bg-warning m-3 icon"></i>

        case 'circle':
            return <i className="far fa-circle fa-3x text-dark bg-warning m-3 icon"></i>

        default:
            return <i className="fas fa-pen-square fa-3x text-dark bg-warning m-3 icon"></i>
    }
}

export default Icons