// prettier-ignore
import { ActivityContainer, ActivityItem, Timestamp, SectionTitle } from './ActivityList.styled';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { activities } from '../../lib/placeholder-data';

export const ActivityList = () => {
  const { darkMode } = useDarkMode();

  return (
    <ActivityContainer darkMode={darkMode}>
      <SectionTitle>Recent Activities</SectionTitle>
      {activities.map((act, index) => (
        <ActivityItem key={index} darkMode={darkMode}>
          {act.activity} <Timestamp>{act.time}</Timestamp>
        </ActivityItem>
      ))}
    </ActivityContainer>
  );
};
