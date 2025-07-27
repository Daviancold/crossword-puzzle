import FastForwardIcon from "@mui/icons-material/FastForward";
import type { IForwardPage } from "../types/IPageNavigation";
import { TextWithButton } from "../components/TextWithButton";
import gif1 from "../assets/sticker1.gif";
import gif2 from "../assets/sticker2.gif";

export const MainPage: React.FC<IForwardPage> = ({ forwardPage }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-40 md:gap-96 lg:gap-96 p-4 z-0">
      <img
        src={gif1}
        className="w-2/3 md:w-1/4 h-auto object-contain"
        alt="Sticker 1"
      />
      <TextWithButton
        textFirstLn="Welcome to Davian's"
        textSecondLn="Crossword Puzzle!"
        buttonText="Click to begin!"
        ButtonIcon={FastForwardIcon}
        forwardNav={forwardPage}
      />
      <img
        src={gif2}
        className="w-2/3 md:w-1/4 h-auto object-contain"
        alt="Sticker 2"
      />
    </div>
  );
};
