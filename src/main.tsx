import * as React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import '@fontsource/cinzel/400.css'
import '@fontsource/cinzel/600.css'
import '@fontsource/cinzel/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'

createRoot(document.getElementById("root")!).render(<App />);