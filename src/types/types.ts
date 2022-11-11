export interface answer {
    id: string;
    author: string;
    summary: string;
    questionId?: string;
}

export type getAllQuestionsWithAnswersResponse = {
    id: string;
    author: string | null;
    summary: string | null;
    answers: answer[];
}