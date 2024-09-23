// prettier-ignore
import { ActivityContainer, ActivityItem, Timestamp, SectionTitle } from './ActivityList.styled';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { activities } from '../../lib/placeholder-data';
import { formatDate, calculateTimeAgo } from '../../utils';

export const ActivityList = () => {
  const { darkMode } = useDarkMode();

  return (
    <ActivityContainer darkMode={darkMode}>
      <SectionTitle>Recent Activities</SectionTitle>
      {activities.map((activity, index) => (
        <ActivityItem key={index} darkMode={darkMode}>
          {activity.name}{' '}
          <Timestamp>
            {formatDate(activity.date)} ({calculateTimeAgo(activity.date)})
          </Timestamp>
        </ActivityItem>
      ))}
    </ActivityContainer>
  );
};
