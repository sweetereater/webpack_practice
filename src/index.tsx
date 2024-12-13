import React from 'react';
import { createRoot } from 'react-dom/client';

const appHtmlNode = document.getElementById('root');

const appRoot = createRoot(appHtmlNode);

appRoot.render(<h1>Webpack + React are working, yehoo!</h1>);