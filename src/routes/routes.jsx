import React from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home/Home";
import Cadastro from "../pages/Cadastro/Cadastro";
import NotFoundPage from "../pages/404/404";
import Dashboard from "../pages/Dashboard/Dashboard";
import { UserTechProvider } from "../providers/UserTechContext";
import { ModalTechProvider } from "./../providers/ModalTechContext";
import { UserTechAddProvider } from "./../providers/UserTechAddContext";
import { UserProvider } from "../providers/UserContext";
import { UserEditProvider } from "../providers/UserEditContext";

function AppRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/dashboard"
          element={
            <UserProvider>
              <ModalTechProvider>
                <UserEditProvider>
                  <UserTechProvider>
                    <UserTechAddProvider>
                      <Dashboard />
                    </UserTechAddProvider>
                  </UserTechProvider>
                </UserEditProvider>
              </ModalTechProvider>
            </UserProvider>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AppRoutes;
