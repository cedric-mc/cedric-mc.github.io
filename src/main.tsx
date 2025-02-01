import React from 'react';
import ReactDOM from "react-dom/client";
import '@styles/globals/root.css';
import App from './App';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
    <React.StrictMode data-bs-theme="dark">
        <App />
    </React.StrictMode>
);