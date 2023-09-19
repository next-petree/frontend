import axios from 'axios';
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

interface QuestionResponse {
  data: { questions: IQuestion[] };
  status: 'SUCCESS' | 'FAIL';
}

interface SubmitResponse {
  score: number;
  passed: boolean;
  explanations: IExplanation[];
}

export interface IExplanation {
  explanationText: string;
  questionId: number;
}

export interface IQuestion {
  id: number;
  questionText: string;
  choices: Choice[];
}

export interface Choice {
  id: number;
  choiceText: string;
}

export interface IOutletContext {
  questions: IQuestion[];
  selectAnswer: (questionId: number, selectedChoiceId: number) => void;
  setAnswers: React.Dispatch<React.SetStateAction<Answer[]>>;
  answers: Answer[];
  submitTest: () => void;
  selected: Answer[];
  testResult: SubmitResponse | null;
  reset: () => void;
  fetchQuestions: () => void;
}

export interface Answer {
  questionId: number;
  selectedChoiceId: number;
}

export default function Certification() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [testResult, setTestResult] = useState<SubmitResponse | null>(null);

  const fetchQuestions = async () => {
    try {
      const { data: res } = await axios.get<QuestionResponse>('api/basic-test/start');

      setQuestions(res.data.questions);
    } catch (e) {
      const err = e as any;
      console.log(err.response.data.data);
    }
  };

  const submitTest = async () => {
    try {
      const { data } = await axios.post<SubmitResponse>('api/basic-test/submit', { answers });

      setTestResult(data);
      navigate('/certification/result');
    } catch (e) {
      const err = e as any;
      console.log(err.response.data.data);
    }
  };

  const selectAnswer = (questionId: number, selectedChoiceId: number) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      const index = newAnswers.findIndex((ans) => ans.questionId === questionId);
      if (index === -1) {
        newAnswers.push({ questionId, selectedChoiceId });
      } else {
        newAnswers[index] = { questionId, selectedChoiceId };
      }
      return newAnswers;
    });
  };

  const reset = () => {
    setAnswers([]);
    setTestResult(null);
  };

  return (
    <Outlet
      context={{
        questions,
        selectAnswer,
        setAnswers,
        answers,
        submitTest,
        selected: answers,
        testResult,
        fetchQuestions,
        reset,
      }}
    />
  );
}
