import React from 'react'
import PropTypes from 'prop-types'

const Filter = (props) =>{
    const {sort,greased,handleSort,toggleGreased}=props

    return(
        <div className ="filters">
            <button onClick={toggleGreased}>
            {greased ? "Show All" : "Show Only Greased"}
            </button>

            <select value={sort} onChange={e=>handleSort(e)}>
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