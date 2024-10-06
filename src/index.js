import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
//CSS
import './index.css';
import './index.scss';
import './responsive.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename='/fetch-studio/'>
        <App />
    </BrowserRouter>
);

// add to github-pages <BrowserRouter basename='/fetch-studio/'>