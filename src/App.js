import { Dashboard } from './components/Dashboard/Dashboard';
import { Layout } from './components/Layout/Layout';
import { DarkModeProvider } from './contexts/DarkModeContext';

/**
 * Main application component that sets up the context and layout.
 *
 * The App component wraps the entire application in the DarkModeProvider,
 * allowing all child components to access the dark mode state and toggler.
 * It renders the Layout component, which contains the Dashboard.
 *
 * @returns {JSX.Element} The main application layout with the dashboard.
 *
 * @example
 * <App />
 */
export const App = () => {
  return (
    <DarkModeProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </DarkModeProvider>
  );
};
