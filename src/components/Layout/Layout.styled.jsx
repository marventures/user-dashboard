import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? '#121212' : '#f9f9f9')};
  color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#000000')};
  min-height: 100vh;
  padding: 20px;
  transition: background-color 0.3s, color 0.3s;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
