import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from './routes/App';

const rootElement = document.getElementById('app');
const root = ReactDOMClient.createRoot(rootElement);
root.render(<App />, );