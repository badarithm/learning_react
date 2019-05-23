import PropTypes from 'prop-types';
import React from 'react';
import createClass from 'create-react-class';

// const Summary = createClass({
//     displayName: "Summary",
//     getDefaultProps() ,
// ,
//
// });

class Summary extends React.Component{
    render() {
        const {ingredients, steps, title} = this.props;
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients} Ingredients | </span>
                    <span>{steps} Steps</span>
                </p>
            </div>
        )
    }
}

Summary.propTypes = {
    ingredients: PropTypes.number.isRequired,
        steps: PropTypes.number.isRequired,
        title: (props, PropName) => (typeof props[propName] !== 'string') ?
        new Error("A tittle must be a string"):
        (props[propName].length > 20) ?
            new Error("Title is over 20 characters"): null
};

Summary.defaultProps = {
    ingredients: 0,
    steps: 0,
    title: "[Recipe]",
};
//
// const Summary = ({ingredients=0, steps=0, title="[Recipe]"}) => {
//     return <div>
//         // passing default values instateles function component
//     </div>
// }

export default Summary;

