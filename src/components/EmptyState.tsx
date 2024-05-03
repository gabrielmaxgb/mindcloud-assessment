import { LiaGhostSolid } from "react-icons/lia";

function EmptyState() {
  return (
    <div className="w-full flex flex-col items-center justify-center text-justify gap-4">
      <LiaGhostSolid  className="w-10 h-10 animate-bounce" />
      <p className="bg-gray-200 px-2 py-1 rounded-md text-black font-semibold">Nothing to show, come again later</p>
    </div>
  )
}

export default EmptyState;
