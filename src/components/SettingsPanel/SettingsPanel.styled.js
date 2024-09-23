import styled from 'styled-components';

export const PanelContainer = styled.div`
  padding: 10px;
  display: flex;
  gap: 30px;
`;

export const ToggleContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ToggleLabel = styled.span`
  font-size: 16px;
`;

export const DarkModeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? '#555' : '#f0f0f0')};
  }

  svg {
    color: ${({ darkMode }) => (darkMode ? '#ffd700' : '#000')};
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: gray;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  input:checked + & {
    background-color: green;
  }

  input:checked + &:before {
    transform: translateX(20px);
  }
`;
