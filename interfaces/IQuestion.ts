export interface IQuestion {
    title: string;
    type: QuestionType.RADIO | QuestionType.TEXT;
    rating?: number;
}

export enum QuestionType {
    RADIO = "radio",
    TEXT = "text"
}