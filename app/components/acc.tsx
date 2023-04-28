

import React, { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";

function Accordion(props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">

      <button className="accordion__button text-2xl  lg:text-[32px]  font-semibold pb-5 flex text-start" onClick={toggleAccordion}>
        {isOpen ?   <AiOutlineMinus className=' text-4xl mr-3 p-1 rounded bg-cyan-400 text-white'/> : <IoMdAdd className=' text-4xl mr-3 p-1 rounded bg-cyan-400 text-white' />}
        {props.title}
      </button>
      <div
        className={`accordion__content pl-12 ${isOpen ? 'accordion__content--open' : ''}`}
      >
        {props.children}
      </div>
    </div>
  );
}

export default Accordion;
