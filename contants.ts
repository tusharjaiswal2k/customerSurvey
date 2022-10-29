import { IQuestion, QuestionType } from "./interfaces/IQuestion";

export const questions: IQuestion[] = [
    {
        title: "How satisfied are you with our products?",
        type: QuestionType.RADIO,
        rating: 5
    },
    {
        title: "How fair are the prices compared to similar retailers?",
        type: QuestionType.RADIO,
        rating: 5
    },
    {
        title: "How satisfied are you with the value for money of your purchase?",
        type: QuestionType.RADIO,
        rating: 5
    },
    {
        title: "On a scale of 1-10 how would you recommend us to your friends and family?",
        type: QuestionType.RADIO,
        rating: 10
    },
    {
        title: "What could we do to improve our service?",
        type: QuestionType.TEXT
    }
]
