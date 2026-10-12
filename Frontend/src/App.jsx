import Navbar from "./Components/Ui/Navbar";
import { AppProvider } from "./Context/AppContext";
import { ThemeProvider } from "./Context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <AppProvider>
        <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
          <Navbar />
        </div>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
