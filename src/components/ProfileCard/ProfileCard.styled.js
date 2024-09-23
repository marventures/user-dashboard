import styled from 'styled-components';

export const ProfileCardContainer = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? '#333' : '#fff')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#333')};
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  box-shadow: ${({ darkMode }) =>
    darkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)' : '0 4px 8px rgba(0, 0, 0, 0.1)'};
  transition: background-color 0.3s, color 0.3s;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const ProfileInfo = styled.div`
  margin-bottom: 20px;
`;

export const ProfileField = styled.div`
  margin-bottom: 10px;

  strong {
    margin-right: 10px;
  }

  input,
  textarea {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: ${({ darkMode }) => (darkMode ? '#555' : '#fff')};
    color: ${({ darkMode }) => (darkMode ? '#fff' : '#333')};
    width: 100%;
    transition: background-color 0.3s, color 0.3s;
  }

  textarea {
    resize: none;
    height: 60px;
  }
`;

export const EditButton = styled.button`
  background-color: ${({ darkMode }) => (darkMode ? '#4caf50' : '#007bff')};
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? '#45a049' : '#0056b3')};
  }
`;
