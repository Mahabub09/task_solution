
import { Routes, Route } from 'react-router-dom';
import './App.css';
import CalendaR from './Pages/Page/CalendaR';
import Completed from './Pages/Page/Completed';
import Edit from './Pages/Page/Edit';
import Home from './Pages/Page/Home';
import ToDoList from './Pages/Page/ToDoList';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="completed" element={<Completed />} />
        <Route path="calendar" element={<CalendaR />} />
        <Route path="toDo" element={<ToDoList />} />
        <Route path="task/:taskId" element={<Edit />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
