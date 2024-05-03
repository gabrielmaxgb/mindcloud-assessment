import classNames from "classnames";
import { IStep } from "./types";
import { AiOutlineOrderedList } from "react-icons/ai";

interface IStepProps {
  stepData: IStep;
  handleStepClick: (stepId: string) => void;
  stepSelected: string;
}

function Step(props: IStepProps) {
  return (
    <div 
      onClick={() => props.handleStepClick(props.stepData.id)} 
      className={classNames('flex items-center justify-between border-[2px] rounded-md px-3 py-2 cursor-pointer', {
        'border-purple-300': props.stepData.id === props.stepSelected,
      })}
    >
      <section className="flex items-center">
        <div className="mr-1">
          {props.stepData.icon}
        </div>
        <div className="flex items-center justify-center bg-gray-100 rounded-md text-xs font-semibold text-gray-600 mx-1 p-1">
          {props.stepData.pings}
        </div>
        <span className="ml-1">
          {props.stepData.name}
        </span>
      </section>
      {
        props.stepData.options && (
          <section>
            <div className="flex items-center bg-gray-200 bg-opacity-80 rounded-sm px-2 py-1">
              <AiOutlineOrderedList className="mr-2" />
              <span className="text-xs font-semibold">{props.stepData.options}</span>
            </div>
          </section>
        )
      }
      {
        props.stepData.isError && (
          <section className="flex items-center justify-center bg-red-200 rounded-full text-md w-6 h-6 text-red-700 font-bold">
            !
          </section>
        )
      }
    </div>
  )
}

export default Step;
