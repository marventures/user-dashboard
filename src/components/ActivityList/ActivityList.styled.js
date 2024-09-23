import styled from 'styled-components';

export const ActivityContainer = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? '#333' : '#fff')};
  color: ${({ darkMode }) => (darkMode ? '#fff' : '#333')};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: left;
`;

export const ActivityItem = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid ${({ darkMode }) => (darkMode ? '#444' : '#eee')};
  cursor: pointer;

  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? '#555' : '#f8f9fa')};
  }
`;

export const Timestamp = styled.span`
  font-size: 0.8rem;
  color: gray;
`;
