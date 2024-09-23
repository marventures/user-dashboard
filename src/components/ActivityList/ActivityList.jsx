// prettier-ignore
import { ActivityContainer, ActivityItem, Timestamp, SectionTitle } from './ActivityList.styled';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { activities } from '../../lib/placeholder-data';
import { formatDate, calculateTimeAgo } from '../../utils';

/**
 * @component ActivityList
 * @version 1.0
 * @copyright (c) 2024, Marvin M. Pacis
 *
 * The Activity List component displays a list of recent activities,
 * each accompanied by a timestamp. It utilizes utility functions to
 * format dates and calculate how long ago each activity occurred.
 * The component supports dark mode, adjusting its styles accordingly.
 *
 * Utilizes:
 * - useDarkMode: Hook to retrieve the dark mode state from the context.
 * - activities: Placeholder data for rendering the list of activities.
 * - formatDate: Utility function to format activity dates.
 * - calculateTimeAgo: Utility function to calculate the time since an activity.
 *
 * @returns {JSX.Element} The rendered activity list component.
 *
 * @example
 * <ActivityList />
 */

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
