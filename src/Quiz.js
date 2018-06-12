import React, {Component} from 'react';
import PropTypes from 'prop-types';
let quizData = require("./quiz_data.json");

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiz_position:1
        }
    }

    render() {
        const {quiz_questions} = quizData
        return (
            <div className="quizQuestion">
                {quiz_questions[0].instruction_text}
            </div>
        );
    }
}

Quiz.propTypes = {};

export default Quiz;