import type {NextPage} from "next";
import {CommonUILayout} from "../../components/layouts/CommonUILayout";
import {QuizCard} from "../../components/QuizCard/QuizCard"

const Quiz: NextPage = () => {
  return (
    <CommonUILayout>
      <QuizCard title={"Question 1"} text={"Text1"} src="/question-marks.png"/>
      <QuizCard title={"Question 2"} text={"Text2"} src="/question-marks.png"/>
      <QuizCard title={"Question 3"} text={"Text3"} src="/question-marks.png"/>
      <QuizCard title={"Question 4"} text={"Text4"} src="/question-marks.png"/>
      <QuizCard title={"Question 5"} text={"Text5"} src="/question-marks.png"/>
    </CommonUILayout>
  );
};

export default Quiz;
