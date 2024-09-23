import { useDarkMode } from '../../contexts/DarkModeContext';
import { SettingsPanel } from '../SettingsPanel/SettingsPanel';
import { Container, Header } from './Layout.styled';

export const Layout = ({ children }) => {
  const { darkMode } = useDarkMode();

  return (
    <Container darkMode={darkMode}>
      <Header>
        <h1>User Dashboard</h1>
        <SettingsPanel />
      </Header>
      {children}
    </Container>
  );
};
