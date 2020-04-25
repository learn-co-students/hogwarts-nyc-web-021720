import React from 'react'
import PropTypes from 'prop-types'

class HogDetail extends React.Component{

    state={
        toggled :false
    }

    handleToggle = () =>{
        this.setState({
            toggled: !this.state.toggled
        })
    }


renderDetails = () =>{
    const{weight,specialty,greased}=this.props
    return(
        <div>
            <p>Weight: {weight} lbs</p>
            <p>Specialty: {specialty}</p>
            <p>Highest Medal Achieved: {this.props['highest medal achieved']}</p>
            <p>{greased? "Greased" : "Not Greased"}</p>

        </div>
    )
}

    render(){

        const image=`/hog-imgs/${this.props.name.toLowerCase().split(' ').join('_')}.jpg`
        const {name}=this.props
        const {toggled}=this.state

        return(
            <div className="ui eight wide column" onClick={this.handleToggle} >  
            <h1>{name}</h1>
            <img src = {image} alt={name}/>
            <p>
                {toggled && this.renderDetails ()}
                {/* {toggled? this.renderDetails():null} */}
            </p>
            </div>
        )
    }
}


// not sure how spread operator really work in propTypes
// but i can just lay them out,like initially in parent is {...hog} (see below )

HogDetail.PropTypes={
    weight: PropTypes.number.isRequired,
    specialty: PropTypes.string.isRequired,
    greased: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    'highest Medal Achieved':PropTypes.array.isRequired,
}


export default HogDetail