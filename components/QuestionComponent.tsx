import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import { questions } from "../contants";
import { IQuestion, QuestionType } from "../interfaces/IQuestion";
import { Rating } from "./RatingComponent";


export const QuestionComponent = () => {
    const localStorageAnswerString = "answer";
    const { query, push } = useRouter();
    const questionNumber = parseInt(`${query.questionNumber}`)
    const questionData: IQuestion[] = questions;
    const limit = questionData.length;
    const currentQuestionIndex = questionNumber - 1;
    const [answer, setAnswer] = useState<string>();
    const submitAnswer = () => {
        let submittedAnswers: any = localStorage.getItem("answer");
        const formattedAnswer = {
            questionNumber: questionNumber,
            answer: answer
        }

        if (submittedAnswers != null) {
            submittedAnswers = JSON.parse(submittedAnswers);
            const existingAnswerIndex = submittedAnswers.findIndex((item: any) => {
                return item.questionNumber == questionNumber;
            })
            if ((existingAnswerIndex != null || existingAnswerIndex != undefined) && existingAnswerIndex >= 0) {
                submittedAnswers[existingAnswerIndex] = formattedAnswer;
            }
            else {
                submittedAnswers.push(formattedAnswer);
            }
            localStorage.setItem("answer", JSON.stringify(submittedAnswers));
        }
        else {
            localStorage.setItem("answer", JSON.stringify([formattedAnswer]))
        }
        setAnswer('');
    }
    const populateExistingAnswer = () => {
        let submittedAnswers: any = localStorage.getItem(localStorageAnswerString);
        submittedAnswers = JSON.parse(submittedAnswers);
        if (submittedAnswers) {
            const existingAnswer = submittedAnswers.find((item: any) => {
                return item.questionNumber == questionNumber;
            })
            if (existingAnswer) {
                setAnswer(existingAnswer?.answer);
            }
        }
    }
    const nextQuestion = () => {
        submitAnswer();
        if (questionNumber + 1 > limit) {
            return
        }
        push(`/survey/question/${parseInt(`${questionNumber}`) + 1}`)
    }
    const previousQuestion = () => {
        submitAnswer();
        if (currentQuestionIndex < 1) {
            return;
        }
        push(`/survey/question/${parseInt(`${questionNumber}`) - 1}`)
    }
    const resetQuestion = () => {
        if (questionNumber > limit) {
            push(`/survey/question/${limit - 1}`)
        }
        if (questionNumber < 0) {
            push(`/survey/question/${1}`)
        }
    }
    useEffect(() => {
        resetQuestion()
    }, [query])
    useEffect(() => {
        populateExistingAnswer();
        console.log(questionNumber == limit)

    }, [questionNumber])
    return (
        <>
            <div className="questionComponentContainer">
                <div className="questionComponentSubContainer position-relative d-flex flex-column p-3">
                    <div style={{ flex: 0.1 }}>
                        <h1 className="questionComponentHeading">Customer Survey</h1>
                        <h3 style={{ position: 'absolute', top: 15, right: 25 }}>{`${questionNumber}/${limit}`}</h3>
                    </div>
                    <div style={{ flex: 0.8 }}>
                        <h3>Q{questionNumber}. <span style={{ marginLeft: "10px" }}>{questionData[currentQuestionIndex]?.title}</span></h3>
                        <div className="questionComponentRadioDiv h-50">
                            {
                                questionData[currentQuestionIndex]?.type == QuestionType.RADIO ?
                                    Array.from(Array(questionData[currentQuestionIndex]?.rating), (item, index) => {
                                        return <Rating key={index} onValueChange={(event) => {
                                            setAnswer(event.target.value)
                                        }} name="rate" id={`rating-${index}`} value={index + 1} currentValue={parseInt(answer ? answer : '0')} />
                                    })
                                    :
                                    <textarea onChange={(e) => { setAnswer(e.target.value) }} name="" id="" style={{ width: "90%" }}></textarea>
                            }
                        </div>
                    </div>
                    <div style={{ flex: 0.1 }} className="questionComponentButtons">
                        <button disabled={questionNumber == 1} onClick={previousQuestion} className="questionComponentPrevButton">
                            Prev
                        </button>
                        {
                            questionNumber == limit ?
                                <button className="questionComponentNextButton" onClick={() => {
                                    push(`/survey/submission`)
                                }}>
                                    Submit
                                </button>
                                :
                                <button onClick={nextQuestion} className="questionComponentNextButton">
                                    Next
                                </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}