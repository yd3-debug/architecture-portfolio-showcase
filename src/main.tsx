import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Hide static HTML content once React mounts (keeps it visible for AI crawlers)
const staticContent = document.getElementById('static-content');
if (staticContent) {
  staticContent.style.display = 'none';
}

createRoot(document.getElementById("root")!).render(<App />);
