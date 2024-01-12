import React from "react";
import { createRoot } from 'react-dom/client'
import App from "./App";

const conteiner = document.getElementById("root");
const root = createRoot(conteiner);
root.render(<App/>)