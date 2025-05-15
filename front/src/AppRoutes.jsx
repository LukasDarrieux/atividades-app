import Atividade from './pages/atividades/Atividade';
import Cliente from './pages/clientes/Cliente';
import NotFound from './pages/notFound/NotFound';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';

function AppRoutes() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/atividade/*" element={<Atividade />} />
        <Route path="/cliente/*" element={<Cliente />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
