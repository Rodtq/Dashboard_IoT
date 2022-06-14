import './App.css';
import Hamburguer from './components/Hamburger';
import ActionMenu from './components/ActionMenu';
import AddPage from './pages/AddPage';
import DelPage from './pages/DelPage';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Breadcrumbs, Link, Typography } from '@mui/material';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/">
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </header>
      <body>
        <Hamburguer></Hamburguer>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="addPage" element={<AddPage ></AddPage>}/>
            <Route path="delPage" element={<DelPage></DelPage>} />
          </Routes>
        </BrowserRouter>
        <ActionMenu></ActionMenu>
      </body>
    </div>
  );
}

export default App;
