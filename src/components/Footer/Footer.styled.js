import styled from 'styled-components';

export const FooterContainer = styled.footer`
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#333')};
  text-align: center;
  padding: 20px;
  position: relative;
  bottom: 0;
  font-size: 14px;

  p {
    margin: 0;
  }
`;

export const FooterLink = styled.a`
  color: ${({ darkMode }) => (darkMode ? '#ffd700' : '#007bff')};
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: ${({ darkMode }) => (darkMode ? '#ffa500' : '#0056b3')};
    text-decoration: underline;
  }
`;
