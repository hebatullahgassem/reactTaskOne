import './Card.css';
import React, {useState} from 'react';

export default function Card ({children}){
  const [isOpen, setIsOpen] = useState(false);
  const [className, setClassName] = useState('card');

  function displayContent (){
    //toggle
    setIsOpen(!isOpen);
    {isOpen ? setClassName('card') : setClassName('card2')}
  }

  return(
    <>
    <div className={className} onClick={displayContent}>
      <div className='head'>
      <p className="number">{children[0]}</p> 
      <h1 className="title">{children[1]}</h1>
      <button onClick={displayContent}>{isOpen ? '-' : '+'}</button>
      </div>
        {isOpen && <p className="content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspematur veniam repellendus.</p>}
    </div>
    </>
  );
}