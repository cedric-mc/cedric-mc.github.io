import '@styles/globals/root.css';
import React from 'react';
import './scss/styles.scss';
import ReactDOM from "react-dom/client";
// Import our custom CSS
import App from './App';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
    <React.StrictMode data-bs-theme="dark">
        <App />
    </React.StrictMode>
);