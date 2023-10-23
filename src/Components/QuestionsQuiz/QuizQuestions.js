import React, { useState } from 'react';
import questionsData from '../../Constants/QuizQuestions';

const QuizQuestions = () => {
    let [questionIdx, setQuestionIdx] = useState(0);
    let [selectedOption, setSelectedOption] = useState();

    const onClickSelectedOption = (checked, options) => {
        if (checked) {
            
            setSelectedOption(options)
        }
        else {
            setSelectedOption();
        }
    }
    return (
        <div>
            <div>
                {questionIdx === 0 && <h2>Start The Quiz</h2>}
                <div className='questionStatement'>
                    <h4>{questionIdx + 1}. {questionsData.quiz[questionIdx]?.question}</h4>
                </div>
                <ul>
                    {questionsData.quiz[questionIdx]?.options.map((options, optidx) => (
                        <li>
                            <input type='checkbox' onClick={(event) => onClickSelectedOption(event.target.checked, options)} />
                            {options}
                        </li>
                    ))}
                </ul>
            </div>
            <button disabled={questionIdx === 0} onClick={() => setQuestionIdx(questionIdx - 1)}>Previous</button>
            <button disabled={questionIdx === questionsData.quiz.length - 1 || !selectedOption} onClick={() => setQuestionIdx(questionIdx + 1)}>Next</button>
        </div>
    )
}

export default QuizQuestions