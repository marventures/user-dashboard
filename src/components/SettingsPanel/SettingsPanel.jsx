import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
// prettier-ignore
import { PanelContainer, ToggleContainer, ToggleLabel, DarkModeButton, Switch, Slider } from './SettingsPanel.styled';

export const SettingsPanel = ({ darkMode, setDarkMode }) => {
  const [emailNotifications, setEmailNotifications] = useState(true);

  return (
    <PanelContainer>
      {/* Email Notifications Toggle */}
      <ToggleContainer>
        <ToggleLabel>Email Notifications: </ToggleLabel>
        <Switch>
          <input
            type='checkbox'
            checked={emailNotifications}
            onChange={() => setEmailNotifications(!emailNotifications)}
          />
          <Slider />
        </Switch>
      </ToggleContainer>

      {/* Dark Mode Toggle */}
      <ToggleContainer>
        <DarkModeButton
          onClick={() => setDarkMode(!darkMode)}
          darkMode={darkMode}
        >
          {darkMode ? <Moon size={24} /> : <Sun size={24} />}
        </DarkModeButton>
      </ToggleContainer>
    </PanelContainer>
  );
};
