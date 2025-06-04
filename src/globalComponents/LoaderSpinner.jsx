import { FiLoader } from "react-icons/fi";
import { TbLoader3 } from "react-icons/tb";

const LoaderSpinner = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="w-10 h-10 animate-spin rounded-full border-4 border-r-[#3B9DF8] border-[#3b9df84b]"></div>
      </div>
    </>
  );
};

export default LoaderSpinner;
