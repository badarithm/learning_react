import React from 'react';
import Star from './Star';
import PropTypes from 'prop-types';
import createClass from 'create-react-class';


const StarRating = createClass({
    displayName: 'StarRating',
    propTypes: {
        totalStars: PropTypes.number
    },
    getDefaultProps(){
        return {
            totalStars: 5,
        }
    },
    getInitialState() {
        return {
            starsSelected: 0,
        }
    },
    componentWillMount(){
        const {starsSelected} = this.props
        if(starsSelected){
            this.setState({starsSelected})
        }
    },
    change(starsSelected) {
        this.setState({starsSelected})
    },
    render() {
        const {totalStars} = this.props
        const {starsSelected} = this.state
        return (
            <div className="star-rating">
                {[...Array(totalStars)].map((n, i) =>
                <Star key={i}
                    selected={i < starsSelected}
                    onClick={() => this.change(i + 1)}
                />)}
            <p>{starsSelected} of {totalStars} stars</p>
            </div>
        )
    }
});

// class StarRating extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             starsSelected: 0,
//         }
//         this.change = this.change.bind(this);
//     }
//
//     change(starsSelected) {
//         this.setState({starsSelected})
//     }
//
//     render() {
//         const {totalStars} = this.props
//         const {starsSelected} = this.state
//         return (
//             <div className="star-rating">
//                 {[...Array(totalStars)].map((n, i) =>
//                     <Star key={i}
//                           selected={i < starsSelected}
//                           onClick={() => this.change(i + 1)}
//                     />)}
//                 <p>{starsSelected} of {totalStars} stars</p>
//             </div>
//         )
//     }
// }
//
// StarRating.propTypes = {
//     totalStars: PropTypes.number
// }
//
// StarRating.defaultProps = {
//     totalStars: 5,
// }


export default StarRating;