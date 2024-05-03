import { useState } from 'react';
import Step from './Step';
import { FaBeer } from 'react-icons/fa';
import { AiFillAlipaySquare } from "react-icons/ai";
import { AiFillCrown } from "react-icons/ai";
import { IStep } from './types';
import { v4 as uuidv4 } from 'uuid';
import EmptyState from '../EmptyState';
import Button from '../Button';

const STEP_LIST = [
  {
    id: uuidv4(),
    name: 'Merge Employees with Demographics',
    stepNumber: 1,
    pings: 12,
    isError: true,
    icon: <FaBeer />,
  }, 
  {
    id: uuidv4(),
    name: 'Update User',
    stepNumber: 2,
    pings: 27,
    isError: false,
    icon: <AiFillAlipaySquare />,
    options: 100,

  }, 
  {
    id: uuidv4(),
    name: 'step3',
    stepNumber: 3,
    pings: 11,
    isError: false,
    icon: <AiFillCrown />,
  }, 
];

function Stepper() {
  const [stepSelected, setStep] = useState('');
  const [stepList, setStepList] = useState(
    [
      {
        id: uuidv4(),
        name: 'Merge Employees with Demographics',
        stepNumber: 1,
        pings: 12,
        isError: true,
        icon: <FaBeer />,
      }, 
      {
        id: uuidv4(),
        name: 'Update User',
        stepNumber: 2,
        pings: 27,
        isError: false,
        icon: <AiFillAlipaySquare />,
        options: 100,
    
      }, 
      {
        id: uuidv4(),
        name: 'step3',
        stepNumber: 3,
        pings: 11,
        isError: false,
        icon: <AiFillCrown />,
      }, 
    ]
  );

  const handleStepClick = (stepId: string) => {
    setStep(stepId);
  };

  const handleClearListClick = () => {
    setStepList([]);
  };

  return (
    <div className="flex flex-col gap-4 py-6 px-2 w-[100%] max-w-[650px]">
      {
        stepList.length ? (
          <Button
            text="Clear List"
            handleClick={handleClearListClick}
          />
        ) : (
          <Button
            text="Restart"
            handleClick={() => setStepList(STEP_LIST)}
          />
        )
      }
      {
        stepList.length ? (
          stepList.map((stepData: IStep) => 
            <Step handleStepClick={handleStepClick} key={stepData.id} stepData={stepData} stepSelected={stepSelected} />
          )
        ) : (
          <EmptyState />
        )
      }  
    </div>
  )
}

export default Stepper;
