import React from 'react'
import PropTypes from 'prop-types'

const Filter = (props) =>{
    return(

        <div className ="filters">
            <button onClick={props.toggleGreased}>
            {props.greased ? "Show All" : "Show Only Greased"}
            </button>

            <select value={props.sort} onChange={e=>props.handleSort(e)}>
                <option value ="unsorted">Unsorted</option>
                <option value ="name">Sort By Name</option>
                <option value ="weight">Sort By Weight</option>
            </select>

        </div>

    )
    
}

Filter.PropTypes={
    toggleGreased: PropTypes.func.isRequired,
    handleSort:PropTypes.func.isRequired,
    greased:PropTypes.bool.isRequired,
    sort:PropTypes.string.isRequired
}


export default Filter