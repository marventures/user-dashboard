import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../../contexts/DarkModeContext';
// prettier-ignore
import { PanelContainer, ToggleContainer, ToggleLabel, DarkModeButton, Switch, Slider } from './SettingsPanel.styled';

/**
 * @component SettingsPanel
 * @version 1.0
 * @copyright (c) 2024, Marvin M. Pacis
 *
 * The SettingsPanel component provides user interface elements
 * for managing settings such as email notifications and dark mode.
 * It includes a toggle for email notifications and a button to switch
 * between light and dark modes. The component dynamically reflects
 * the current dark mode state.
 *
 * Utilizes:
 * - useDarkMode: Hook to retrieve and toggle the dark mode state from the context.
 *
 * @returns {JSX.Element} The rendered settings panel with toggles for settings.
 *
 * @example
 * <SettingsPanel />
 */
export const SettingsPanel = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
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
        <DarkModeButton onClick={toggleDarkMode} darkMode={darkMode}>
          {darkMode ? <Moon size={24} /> : <Sun size={24} />}
        </DarkModeButton>
      </ToggleContainer>
    </PanelContainer>
  );
};
