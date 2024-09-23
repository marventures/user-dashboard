import { SettingsPanel } from '../SettingsPanel/SettingsPanel';
import { Container, Header } from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header>
        <h1>User Dashboard</h1>
        <SettingsPanel />
      </Header>
      {children}
    </Container>
  );
};
