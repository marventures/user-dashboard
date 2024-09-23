import { useDarkMode } from '../../contexts/DarkModeContext';
import { FooterContainer, FooterLink } from './Footer.styled';

/**
 * @component Footer
 * @version 1.0
 * @copyright (c) 2024, Marvin M. Pacis
 *
 * The Footer component renders the footer section of the webpage,
 * displaying dynamic copyright information based on the current year
 * and including a link to the author's GitHub profile. The component
 * adapts its styles to support dark mode.
 *
 *
 * Utilizes:
 * - useDarkMode: Hook to retrieve the dark mode state from the context.
 *
 * External Links:
 * - GitHub: https://github.com/marventures
 *
 * @returns {JSX.Element} The rendered footer component.
 *
 * @example
 * <Footer />
 */
export const Footer = () => {
  const { darkMode } = useDarkMode();
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer darkMode={darkMode}>
      <p>
        © {currentYear}{' '}
        <FooterLink
          href='https://github.com/marventures'
          target='_blank'
          rel='noopener noreferrer'
          darkMode={darkMode}
        >
          Marvin Pacis
        </FooterLink>
        . All rights reserved.
      </p>
    </FooterContainer>
  );
};
