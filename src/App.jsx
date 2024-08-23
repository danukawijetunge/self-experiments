import React, {
  useState,
  useEffect,
  useMemo,
  createContext,
  useContext,
} from "react";
import Reducer from "./Reducer";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  console.log("mounting TheamProvider ", children);

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  console.log("value", value);

  useEffect(() => {
    console.log(`ThemeProvider mounted with theme: ${theme}`);
    return () => {
      console.log(`ThemeProvider unmounted with theme: ${theme}`);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const ThemedComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(`ThemedComponent rendered with theme: ${theme}`);
    return () => {
      console.log(`ThemedComponent cleanup with theme: ${theme}`);
    };
  }, [theme]);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const App = () => {
  const [showThemeComponent, setShowThemeComponent] = useState(true);
  console.log("mounting App");
  return (
    <div>
      {/* <button onClick={() => setShowThemeComponent((prev) => !prev)}>
        Toggle ThemedComponent
      </button>
      {showThemeComponent && (
        <ThemeProvider>
          <ThemedComponent />
        </ThemeProvider>
      )} */}
      <Reducer />
    </div>
  );
};

export default App;
