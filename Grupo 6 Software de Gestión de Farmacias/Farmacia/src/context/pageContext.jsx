import { createContext, useEffect } from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const PageContext = createContext();

const usePage = () => useContext(PageContext);


function PageProvider({ children }) {


  const [currentPage, setCurrentPage] = useState('med');

  const changePage = (page) => {
    setCurrentPage(page);
  }

  return (
    <PageContext.Provider value={{currentPage, changePage, setCurrentPage}} >
      {children}
    </PageContext.Provider>
  );
}

export { PageContext, PageProvider, usePage };