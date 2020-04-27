import React from 'react';




function HogTile(props){
    console.log(props)

    // let name= props.name.toLowerCase().split(' ').join('_') 
    return (
        <div className="pigTile">
            <h1>{props.name}</h1>
            <img src={`/hog-imgs/${props.name.toLowerCase().split(' ').join('_')}.jpg`}/>
        </div>
    )
}

export default HogTile;