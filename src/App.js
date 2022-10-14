import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { LocalePresistProvider } from "./contexts/LocalePresistContext";

function App() {
  return (
    <LocalePresistProvider>
      <div className="flex">
        <Sidebar />
        <Home />
      </div>
    </LocalePresistProvider>
  );
}

export default App;
