import React from "react";
import '../assets/styles/pages/Home.scss'
import Modal from "../components/Modal";
import NavHome from "../components/NavHome";
import MSButtonMenu from "../components/MSButtonMenu";
import { useModal } from "../hooks/useModal";
import { Link, Outlet } from "react-router-dom";
import FormNuevaCaptura from "../components/FormNuevaCaptura";


const Layout = ({ children }) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
    return (
        <div className="home">
            <NavHome>
                <MSButtonMenu type="button" onClick={openModal} icon="fad fa-plus" value="Registro"/>
                <Link to={"consultas"}><MSButtonMenu type="button" icon="fad fa-search" value="Consulta"/></Link>
                <MSButtonMenu type="button" icon="fad fa-analytics" value="Reportes"/>
                <MSButtonMenu type="button" icon="fad fa-cogs" value="configuración"/>
            </NavHome>
            <Modal isOpen={isOpenModal} closeModal={closeModal} >
                <FormNuevaCaptura/>
            </Modal>
            <Outlet />
        </div>
    )
};

export default Layout;