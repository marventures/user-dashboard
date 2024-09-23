import { useState } from 'react';
import { SettingsPanel } from '../SettingsPanel/SettingsPanel';
import { Container, Header } from './Layout.styled';

export const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Container darkMode={darkMode}>
      <Header>
        <h1>User Dashboard</h1>
        <SettingsPanel darkMode={darkMode} setDarkMode={setDarkMode} />
      </Header>
      {children}
    </Container>
  );
};
