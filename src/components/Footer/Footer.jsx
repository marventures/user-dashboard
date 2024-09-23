import { useDarkMode } from '../../contexts/DarkModeContext';
import { FooterContainer, FooterLink } from './Footer.styled';

export const Footer = () => {
  const { darkMode } = useDarkMode(); // Access darkMode from context
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer darkMode={darkMode}>
      <p>
        © {currentYear}{' '}
        <FooterLink
          href='https://www.linkedin.com/in/marventures/'
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
