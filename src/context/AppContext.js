const React = require('react');

export const AppContext = React.createContext(null);

export default function AppProvider({ children }) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const handleChangeSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <AppContext.Provider value={{ currentSlide, handleChangeSlide }}>
      {children}
    </AppContext.Provider>
  );
}
