import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? '#121212' : '#f9f9f9')};
  color: ${({ darkMode }) => (darkMode ? '#ffffff' : '#000000')};
  min-height: 100vh;
  padding: 10px 80px;
  transition: background-color 0.3s, color 0.3s;

  @media (max-width: 768px) {
    padding: 10px 30px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
