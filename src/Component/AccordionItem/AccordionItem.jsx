import { useState } from "react";

const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  /**
   * 
   */
    return (
      <div className="bg-gray-100 border ease-in duration-300  mb-4">
        <button
          className="w-full text-left px-4 py-2 flex  items-center justify-between"
          onClick={toggleAccordion}
        >
          {question}
     {isOpen && (
            <div className=" ease-in duration-300 px-4 py-2 text-gray-600">
              {answer}
            </div>
          )}
          <span className="font-" ></span>
          <span className="text-xl">{isOpen ? '-' : '+'}</span>
        </button>
         
      </div>
    );
  };


  export default AccordionItem