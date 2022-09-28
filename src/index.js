import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
       <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
