import type { IBidirectionalPage } from "../types/IPageNavigation";
import { TextWithButton } from "../components/TextWithButton";
import gif1 from "../assets/sticker1.gif";
import gif2 from "../assets/sticker2.gif";

export const QuestionPage: React.FC<IBidirectionalPage> = ({
  forwardPage,
  backPage,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-20 md:gap-30 lg:gap-60 p-4 z-0">
      <img
        src={gif1}
        className="w-2/3 md:w-1/4 h-auto object-contain"
        alt="Sticker 1"
      />
      <TextWithButton
        textFirstLn="What do the words"
        textSecondLn="in order spell?"
        buttonText="Only continue if you know what it is 😃"
        forwardNav={forwardPage}
        backwardNav={backPage}
      />
      <img
        src={gif2}
        className="w-2/3 md:w-1/4 h-auto object-contain"
        alt="Sticker 2"
      />
    </div>
  );
};
