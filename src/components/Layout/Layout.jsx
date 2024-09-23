import { useDarkMode } from '../../contexts/DarkModeContext';
import { Footer } from '../Footer/Footer';
import { SettingsPanel } from '../SettingsPanel/SettingsPanel';
import { Container, Header } from './Layout.styled';

/**
 * @component Layout
 * @version 1.0
 * @copyright (c) 2024, Marvin M. Pacis
 *
 * The Layout component serves as the main structure for the user
 * dashboard. It includes the Header, SettingsPanel, and Footer
 * components, and wraps the main content passed as children.
 * The component adapts its styling based on the dark mode state.
 *
 * @param {object} props - The props for the Layout component.
 * @param {JSX.Element} props.children - The child components to be
 *                                        rendered within the layout.
 *
 * @returns {JSX.Element} The rendered layout component, including
 *                        the header, child content, and footer.
 *
 * @example
 * <Layout>
 *   <Dashboard />
 * </Layout>
 */
export const Layout = ({ children }) => {
  const { darkMode } = useDarkMode();

  return (
    <Container darkMode={darkMode}>
      <Header>
        <h1>User Dashboard</h1>
        <SettingsPanel />
      </Header>
      {children}
      <Footer />
    </Container>
  );
};
