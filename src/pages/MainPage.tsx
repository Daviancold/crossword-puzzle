import FastForwardIcon from "@mui/icons-material/FastForward";
import type { IForwardPage } from "../types/IPageNavigation";

export const MainPage: React.FC<IForwardPage> = ({ forwardPage }) => {
  return (
    <div className="content-center text-center font-bold underline">
      <h1 className="text-5xl">Welcome to Davian's</h1>
      <h1 className="text-5xl">Crossword Puzzle!</h1>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 my-6 rounded inline-flex items-center"
        onClick={forwardPage}
      >
        <span>Lets Go!!!</span>
        <FastForwardIcon />
      </button>
    </div>
  );
};
