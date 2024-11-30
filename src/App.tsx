import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import QuoteListPage from "./pages/quote-list/Quote-List-Page";
import QuoteCreationPage from "./pages/quote-creation/Quote-Creation-Page";
import { initiateAxiosInterceptor } from "./utils/methods";

function App() {
  initiateAxiosInterceptor();

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route index path="login" element={<LoginPage />}></Route>
        <Route index path="quotes" element={<QuoteListPage />}></Route>
        <Route index path="create" element={<QuoteCreationPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
