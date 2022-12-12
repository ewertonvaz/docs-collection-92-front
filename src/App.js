import { Toaster } from 'react-hot-toast';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import { AuthContextComponent } from "./contexts/authContext";

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import UploadPage from './pages/UploadPage';
import ErrorPage from "./pages/ErrorPage";
import ProtectRoute from "./components/ProtectRoute";
import Footer from './components/Footer';
import ServerEnvPage from './pages/ServerEnvPage';
import BooksPage from './pages/BooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import BookEditPage from './pages/BookEditPage';
import BookNewPage from './pages/BookNewPage';
import GoogleBooksPage from './pages/GoogleBooksPage';
import Leitura from "./pages/Leitura";
import DocumentsPage from './pages/DocumentsPage';

function App() {


  // TODO: proteger as rotas


  return (
    <div className="App d-flex flex-column h-100">

        <Toaster />

        <AuthContextComponent>
          <Routes>
            {/* Estast rotas ficarão SEM a NavBar */}
            <Route path="/signup" element={<SignUpPage />}></Route>
            {/* Todas as rotas aqui dentro estão COM a NavBar */}
            <Route element={<> <NavBar /> <Outlet /> </>}>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/" element={<ProtectRoute Component={HomePage} />}></Route>
              <Route path="/books" element={<ProtectRoute Component={BooksPage} />}></Route>
              <Route path="/books/new" element={<ProtectRoute Component={BookNewPage} />}></Route>
              <Route path="/books/:bookID" element={<ProtectRoute Component={BookDetailsPage} />}></Route>
              <Route path="/books/:bookID/edit" element={<ProtectRoute Component={BookEditPage} />}></Route>
              <Route path="/books/google" element={<ProtectRoute Component={GoogleBooksPage} />} />
              <Route path="/books/leitura/:livroID" element={<ProtectRoute Component={Leitura} />} />             
              <Route path="/documents" element={<ProtectRoute Component={DocumentsPage} />}></Route>
              <Route path="/profile" element={<ProtectRoute Component={ProfilePage} />} />
              <Route path="/server-env" element={<ProtectRoute Component={ServerEnvPage} />} />
              <Route path="/upload" element={<ProtectRoute Componente={UploadPage} />}></Route>
              <Route path="*" element={<ErrorPage />}></Route>
            </Route>
          </Routes>
      </AuthContextComponent>
      <Footer />
    </div>
  );
}

export default App;
