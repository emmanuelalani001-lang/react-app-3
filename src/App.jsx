import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./routes/home/Landing";
import About from "./routes/about/About";
import Task from "./routes/task/Task";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <main className="flex flex-col     min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/task" element={<Task />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </main>
    </>
  );
}

export default App;
