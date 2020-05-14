import React, {Component} from 'react';

export default class HogCard extends Component{
    state= {
        showDetails: false
    }
    handleClick=(event) => {
        this.setState({showDetails: !this.state.showDetails})
        console.log(this.state.showDetails)
    }
    displayDetails = () => {
        if (this.state.showDetails) {
            return (
            <div>
                <div>{this.props.greased? 'Greased' : 'Not Greased'}</div>
                <div>Weight: {this.props.weight}</div>
                <div>Highest Medal Achieved: {this.props.highestMedalAchieved}</div>
                <div>Specialy: {this.props.specialty}</div>
            </div>
            )
        }
    }
    pullImage = () => {
        let picName = this.props.name.replace(/ /g, "_").toLowerCase()
        let pigImage = require(`../hog-imgs/${picName}.jpg`) //how can we dynamically generate the filename?
        return <img src={pigImage} />
    }
    render() {
        const {greased, highestMedalAchieved, name, specialty, weight} = this.props
        return(
            <div onClick={this.handleClick}>
                {name}
                {this.pullImage()}
                {this.displayDetails()}
            </div>
        )
    }
}