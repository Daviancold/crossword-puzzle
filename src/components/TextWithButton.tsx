import type { ITextPage } from "../types/IPageNavigation";
import { BackHeader } from "./BackHeader";

export const TextWithButton: React.FC<ITextPage> = ({
  textFirstLn,
  textSecondLn,
  buttonText,
  ButtonIcon,
  forwardNav,
  backwardNav,
  textProps,
}) => {
  return (
    <>
      {backwardNav && <BackHeader backPage={backwardNav} />}
      <div
        className={`absolute ${
          forwardNav ? "top-1/2" : "top-2/3"
        } left-1/2 w-full max-w-[90%] md:max-w-l lg:max-w-xl px-4 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold underline z-10`}
      >
        <h1
          className={`text-3xl md:text-4xl lg:md:text-4xl pb-1 ${
            textProps ?? ""
          }`}
        >
          {textFirstLn}
        </h1>
        <h1
          className={`text-3xl md:text-4xl lg:md:text-4xl pt-1 ${
            textProps ?? ""
          }`}
        >
          {textSecondLn}
        </h1>
        {buttonText && (
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 my-6 rounded inline-flex items-center"
            onClick={forwardNav}
          >
            <span>{buttonText}</span>
            {ButtonIcon && <ButtonIcon />}
          </button>
        )}
      </div>
    </>
  );
};
