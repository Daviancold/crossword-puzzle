import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import type { IBackwardPage } from "../types/IPageNavigation";

export const BackHeader: React.FC<IBackwardPage> = ({ backPage }) => {
  return (
    <div
      className="flex flex-row pb-4 gap-2 hover:underline"
      onClick={backPage}
    >
      <ArrowBackIcon />
      <h2>Go Back</h2>
    </div>
  );
};
