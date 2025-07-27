import FastForwardIcon from "@mui/icons-material/FastForward";
import type { IBidirectionalPage } from "../types/IPageNavigation";
import { TextWithButton } from "../components/TextWithButton";

export const QuestionPage: React.FC<IBidirectionalPage> = ({
  forwardPage,
  backPage,
}) => {
  return (
    <TextWithButton
      textFirstLn="What do the words in"
      textSecondLn="order spell?"
      buttonText="Only continue if you know what it is :))"
      ButtonIcon={FastForwardIcon}
      forwardNav={forwardPage}
      backwardNav={backPage}
    />
  );
};
