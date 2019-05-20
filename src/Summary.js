import PropTypes from 'prop-types';
import React from 'react';
import createClass from 'create-react-class';

const Summary = createClass({
    displayName: "Summary",
    getDefaultProps() {
        return {
            ingredients: 0,
            steps: 0,
            name: "[Untitled Recipe]",
        };
    },
    propTypes: {
        ingredients: PropTypes.number.isRequired,
        steps: PropTypes.number.isRequired,
        title: PropTypes.string,
    },
    render() {
        const {ingredients, steps, title} = this.props;
        return (
            <div className="summary">
                <h1>{title}</h1>
                <p>
                    <span>{ingredients.length} Ingredients</span>
                    <span>{steps.length} Steps</span>
                </p>
            </div>
        )
    }
});

export default Summary;

