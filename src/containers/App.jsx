import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import ProtectedRoutes from "../components/ProtectedRoutes";
import '../assets/styles/app.scss';
import '../assets/icons/css/fontawesome.min.css';
import '../assets/icons/css/all.css';
import Layout from "../pages/Layout";
import Consultas from "../pages/Consultas";

const App = () => {
    return (
            <>
                <Header/>
                    <BrowserRouter>
                        <Routes>
                            <Route path="login" element={<Login/>} />
                            <Route element={<ProtectedRoutes/>}>
                                <Route path="/" element={<Layout/>} >
                                    <Route path="consultas" element={<Consultas/>} />
                                </Route>
                            </Route>
                            <Route path="*" element={<NotFound />}/>
                        </Routes>
                    </BrowserRouter>
                <Footer/>
            </>
    )
};

export default App;