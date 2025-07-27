import { useState } from "react";
import "./App.css";
import { CrosswordPage } from "./pages/CrosswordPage";
import { MainPage } from "./pages/MainPage";

function App() {
  const [page, setPage] = useState(1);

  const setBack = () => {
    setPage(page - 1);
  };
  const setForward = () => {
    setPage(page + 1);
  };

  return (
    <div className="flex justify-center w-full h-full">
      {page == 0 ? (
        <MainPage forwardPage={setForward} />
      ) : page == 1 ? (
        <CrosswordPage backPage={setBack} forwardPage={setForward} />
      ) : (
        <div>Congrats</div>
      )}
    </div>
  );
}

export default App;
