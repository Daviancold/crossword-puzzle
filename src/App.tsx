import { useState } from "react";
import "./App.css";
import { CrosswordPage } from "./pages/CrosswordPage";
import { MainPage } from "./pages/MainPage";
import { QuestionPage } from "./pages/QuestionPage";
import { RecoilRoot } from "recoil";

function App() {
  const [page, setPage] = useState(2);
  const [isSolved, setIsSolved] = useState(false);

  const setBack = () => {
    setPage(page - 1);
  };
  const setForward = () => {
    setPage(page + 1);
  };

  return (
    <RecoilRoot>
      <div className="flex justify-center w-full h-full relative">
        {page == 0 ? (
          <MainPage forwardPage={setForward} />
        ) : page == 1 ? (
          <CrosswordPage backPage={setBack} forwardPage={setForward} />
        ) : page == 2 ? (
          <QuestionPage backPage={setBack} forwardPage={setForward} />
        ) : (
          <h1>hello</h1>
        )}
      </div>
    </RecoilRoot>
  );
}

export default App;
