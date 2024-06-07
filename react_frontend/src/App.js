import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ConsultasUsuarios from './components/ConsultasUsuarios';
import PostForm from './components/PostForm';
import PutForm from './components/PutForm';
import Menu from './components/Menu';
import Error from './components/Error';
import Components from './examples/Components';
import ComponentsProps from './examples/ComponentsProps';
import Effect from './examples/Effect';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route
            path="/"
            element={<ConsultasUsuarios />}
          />
          <Route
            path="/crear"
            element={<PostForm />}
          />
          <Route
            path="/actualizar/:id"
            element={<PutForm />}
          />
          <Route
            path="/state"
            element={<Components />}
          />
          <Route
            path="/props"
            element={<ComponentsProps />}
          />
          <Route
            path="/effect"
            element={<Effect />}
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
