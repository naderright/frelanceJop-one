'use client'
import { CircleDashed, EyeClosedIcon, X } from "lucide-react";
import { useEffect } from "react";

const Popup = ({ isOpen, onClose, data }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed bg-opacity-30 top-0 bottom-0 flex justify-center items-center  bg-gray-500 w-screen h-screen z-50">
      <div className="popup px-[2rem] bg-white overflow-auto w-screen h-screen md:w-[80%] md:h-[80%]">
        <div className="close flex justify-end">
          <button className=" mt-5 mr-5 cursor-pointer font-bold " onClick={onClose}><X /></button>
 
        </div>

        <div className="elements grid grid-cols-1 md:grid-cols-3 px-5 justify-between items-start gap-8 pt-2">
          {data?.map((el, index) => <div key={index} className={` border-black rounded-sm border-[1px] w-full p-6 ${el.elements ? 'md:col-span-2' : ''}`}>
            <h3 className="text-[1.3rem] font-thin text-gray-800">{el.name}</h3>
            <div className="slement flex flex-col md:flex-row py-2 justify-between ">
              {el.elements ? el.content.map((el, index) =><div key={index} className="block">
                <div className="list pt-2">
                  <h3 className="text-[1rem] font-bold  text-sky-600 pb-5">{el.name}</h3>

                  {el.content?.map((el, index) => <p key={index} className="flex items-center gap-2 text-[.8rem]" >
                    <CircleDashed color="blue" size={12}/>{el}</p>)}
                </div>
              </div>) : <div className="list">

                  {el.content?.map((el, index) => <p key={index} className="flex items-center gap-2 text-[.8rem]" >
                    <CircleDashed color="blue" size={12}/>{el}</p>)}
                </div> }

            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
