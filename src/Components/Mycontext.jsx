import React, { createContext, useState, useContext, useEffect } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [hide, setHide] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [id, setId] = useState(0);
  const [catigs, setCatgs] = useState([]);
  const [newCatig, setnNewCatig] = useState({});
  const [traderExp , setTraderExp] = useState("ex")
  const [submit , setsubmit] = useState("submit")
  const [id2 , setId2] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)


 

  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // 1024px corresponds to large screen sizes
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };

    handleResize(); // Set initial state based on current screen size
    window.addEventListener('resize', handleResize); // Update on screen resize

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const makeHide = (value) => {
    setHide(value);
  };

  const toggleNavbarVisibility = () => {
    window.innerWidth < 1024 && setIsNavbarVisible(prev => !prev);
    
  };

 

  const handleOptionClick = (id, option) => {
    setSelectedOptions((prev) => ({ ...prev, [id]: option }));
    setIsOpen(false);
    
  };

  return (
    <MyContext.Provider value={{
      isNavbarVisible,
      toggleNavbarVisibility,
      makeHide,
      hide,
      isOpen,
      setIsOpen,
      selectedOptions,
      handleOptionClick,
      id,
      setId,
      catigs,
      setCatgs,
      newCatig,
      setnNewCatig,
      traderExp, 
      setTraderExp,
      submit,
      setsubmit, 
      setId2 ,
      id2
    }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);
