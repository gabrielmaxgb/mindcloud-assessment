interface IButtonProps {
  text: string;
  handleClick: () => void;
}

function Button(props: IButtonProps) {
  return (
    <button 
      type="button" 
      className='bg-purple-100 w-fit px-2 py-1 text-sm rounded-lg text-purple-800 font-semibold'
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  )
}

export default Button;
