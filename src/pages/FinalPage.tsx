import type { IBackwardPage } from "../types/IPageNavigation";
import { TextWithButton } from "../components/TextWithButton";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

export const FinalPage: React.FC<IBackwardPage> = ({ backPage }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 p-4 z-0">
        <img
          src={image1}
          className="w-full sm:w-1/2 md:w-1/3 h-auto object-contain"
          alt="Image 1"
        />
        <img
          src={image2}
          className="w-full sm:w-1/2 md:w-1/3 h-auto object-contain"
          alt="Image 2"
        />
        <img
          src={image3}
          className="w-full sm:w-1/2 md:w-1/3 h-auto object-contain"
          alt="Image 3"
        />
      </div>

      <TextWithButton
        textFirstLn="❤️ Yay!! You said YES! 🫶🏻"
        textSecondLn="To many more beautiful memories 🥹"
        backwardNav={backPage}
        textProps="bg-black bg-opacity-60 text-white underline"
      />
    </>
  );
};
