import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {

    handleClick (buttonText) {
        if (this.props.quiz_question.answer === buttonText) {
            this.props.showNextQuestionHandler()
        }
    }

    render () {
        return (<main>
            <section>
              <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>
                {this.props.quiz_question.answer_options.map(function (answer_option, index) {
                    return <QuizQuestionButton button_text={answer_option} key= {index} clickHandler= {this.handleClick.bind(this)} />
                }.bind(this))}
                
              </ul>
            </section>
          </main>)
    }

}

export default QuizQuestion