import { Dashboard } from './components/Dashboard/Dashboard';
import { Layout } from './components/Layout/Layout';
import { DarkModeProvider } from './contexts/DarkModeContext';

export const App = () => {
  return (
    <DarkModeProvider>
      <Layout>
        <Dashboard />
      </Layout>
    </DarkModeProvider>
  );
};
