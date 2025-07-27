import FastForwardIcon from "@mui/icons-material/FastForward";
import type { IForwardPage } from "../types/IPageNavigation";
import { TextWithButton } from "../components/TextWithButton";

export const MainPage: React.FC<IForwardPage> = ({ forwardPage }) => {
  return (
    <TextWithButton
      textFirstLn="Welcome to Davian's"
      textSecondLn="Crossword Puzzle!"
      buttonText="Click to begin!"
      ButtonIcon={FastForwardIcon}
      forwardNav={forwardPage}
    />
  );
};
