import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  > :nth-child(3) {
    grid-column: 1 / -1;
  }
`;
