import { ProfileCard } from '../ProfileCard/ProfileCard';
import { ActivityList } from '../ActivityList/ActivityList';
import { StatisticsGraph } from '../StatisticsGraph/StatisticsGraph';
import { DashboardContainer } from './Dashboard.styled';

/**
 * @component Dashboard
 * @version 1.0
 * @copyright (c) 2024, Marvin M. Pacis
 *
 * The Dashboard component serves as the main content area for the
 * user dashboard. It aggregates and displays various components
 * such as the ProfileCard, ActivityList, and StatisticsGraph.
 * This component organizes the layout of the dashboard's content.
 *
 * @returns {JSX.Element} The rendered dashboard component, containing
 *                        user profile information, recent activities,
 *                        and statistical data.
 *
 * @example
 * <Dashboard />
 */
export const Dashboard = () => {
  return (
    <DashboardContainer>
      <ProfileCard />
      <ActivityList />
      <StatisticsGraph />
    </DashboardContainer>
  );
};
