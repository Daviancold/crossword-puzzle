import Crossword, {
  ThemeProvider,
  type CrosswordProviderImperative,
} from "@jaredreisinger/react-crossword";
import { crossword1 } from "../data/crossword1";
import { useEffect, useRef, useState, type Ref } from "react";
import { BackHeader } from "../components/BackHeader";
import AlertDialogSlide from "../components/Dialog";
import { IBidirectionalPage } from "../types/IPageNavigation";

const lightTheme = {
  allowNonSquare: true,
};

const darkTheme = {
  allowNonSquare: true,
  gridBackground: "#333333",
  cellBackground: "#b8b8b8",
  cellBorder: "#444",
  textColor: "black",
  numberColor: "black",
  focusBackground: "#d19e44",
  highlightBackground: "#569fc9",
};

export const CrosswordPage: React.FC<IBidirectionalPage> = (props) => {
  const [theme, setTheme] = useState(lightTheme);
  const [isSolved, setIsSolved] = useState(false);
  const crosswordRef: Ref<CrosswordProviderImperative> | undefined =
    useRef(null);

  const handleClear = () => {
    crosswordRef.current?.reset();
  };

  const handleCheck = () => {
    if (crosswordRef.current?.isCrosswordCorrect()) {
      setIsSolved(true);
    }
  };

  // Handle light and dark mode changes
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const applyTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      setTheme(e.matches ? darkTheme : lightTheme);
    };

    applyTheme(darkModeMediaQuery);

    darkModeMediaQuery.addEventListener("change", applyTheme);
  }, []);

  useEffect(() => {
    if (isSolved) {
      crosswordRef.current?.fillAllAnswers();
    }
  }, []);

  return (
    <div className="content-center w-full h-full mx-10 md:mx-20">
      <BackHeader backPage={props.backPage} />
      <div className="flex flex-col md:flex-row flex-grow mt-16">
        <ThemeProvider theme={theme}>
          <Crossword data={crossword1} theme={theme} ref={crosswordRef} />
        </ThemeProvider>
      </div>
      <div className="flex justify-center pt-6 gap-6">
        <AlertDialogSlide
          puzzleStatus={isSolved}
          checkPuzzle={handleCheck}
          nextPage={props.forwardPage}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClear}
        >
          Clear
        </button>
      </div>
    </div>
  );
};
