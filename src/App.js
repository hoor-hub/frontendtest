import "./App.css";
import MainLayout from "./components/layout/mainLayout";
import Home from "./pages/Home/home";

function App() {
  return (
    <>
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  );
}

export default App;
