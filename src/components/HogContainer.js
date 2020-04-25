import React from  'react'
import PropTypes from 'prop-types'
import HogDetail from './HogDetail'


export default class HogContainer extends React.Component {
    

    
    renderHogs = () => {
        const {hog}=this.props
        return (hog.map(hog => {
           return <HogDetail key={hog.name}{...hog} />
        })
        )
    }

    // {...hog} is the equilvalent to code below,
    // is just copy of the hog object with the same key /value  (spread operator)
    
    // name={hog.name}
    // specialty={hog.specialty}
    // greased={hog.greased}
    // weight={hog.weight}
    // highestMedalAchieved={hog['highest medal achieved']}


    render(){
        
        return (

        <div className="ui grid container">
             {this.renderHogs()}
        </div> 

        )
        
    }
}

HogContainer.PropTypes={
    hog: PropTypes.object.isRequired
}

