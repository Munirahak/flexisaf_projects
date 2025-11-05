import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StudentList from "./components/StudentList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <StudentList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
