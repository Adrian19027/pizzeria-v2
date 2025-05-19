import NotFound from "./components/pages/NotFound/NotFound";
import { Container } from "react-bootstrap";
import Home from './components/pages/Home/Home';
import SingleTable from './components/pages/SingleTable/SingleTable';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Container className="py-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table:id" element={<SingleTable />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
