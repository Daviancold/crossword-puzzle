import type { ITextPage } from "../types/IPageNavigation";
import { BackHeader } from "./BackHeader";

export const TextWithButton: React.FC<ITextPage> = ({
  textFirstLn,
  textSecondLn,
  buttonText,
  ButtonIcon,
  forwardNav,
  backwardNav,
}) => {
  return (
    <div className="content-center text-center font-bold underline">
      {backwardNav && <BackHeader backPage={backwardNav} />}
      <h1 className="text-5xl">{textFirstLn}</h1>
      <h1 className="text-5xl">{textSecondLn}</h1>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 my-6 rounded inline-flex items-center"
        onClick={forwardNav}
      >
        <span>{buttonText}</span>
        {ButtonIcon && <ButtonIcon />}
      </button>
    </div>
  );
};
