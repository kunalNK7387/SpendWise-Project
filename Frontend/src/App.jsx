import Navbar from "./Components/Ui/Navbar";
import { AppProvider } from "./Context/AppContext";
import { ThemeProvider } from "./Context/ThemeContext";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
          <Navbar />
          <HomePage />
        </div>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
