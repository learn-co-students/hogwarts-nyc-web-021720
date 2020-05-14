import React, {Component} from 'react';
import HogCard from "./HogCard"

export default class HogContainer extends Component {
    createHogCard = () => {
        return this.props.hogs.map((hog, index) => {
           return <HogCard key={index} {...hog} />
        })
    }
    render(){
        return(
            <div>
                {this.createHogCard()}
            </div>
        )
    }
}