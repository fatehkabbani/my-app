import "../../style/progress.css";
import WordInBackground from "../WordInBackground";
function SkillProgress(props) {
  return (
    <div className="m-10 flex flex-col w-2/12 gap-y-10">
      <div className="flex flex-row justify-between">
        <p>{props.skill}</p>
        <p>{props.progress} <span className="text-orange-500">%</span></p>
      </div>
      <p>{props.description}</p>
      <div className="progress-container">
        <div className="progress" style={{ width: `${props.progress}%` }} />
      </div>
      <WordInBackground word='SKILL' left="50" top="95" moreLighter="true" />
    </div>
  );
}
export default SkillProgress;