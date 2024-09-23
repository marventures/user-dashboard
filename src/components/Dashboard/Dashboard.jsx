import { ProfileCard } from '../ProfileCard/ProfileCard';
import { ActivityList } from '../ActivityList/ActivityList';
import { StatisticsGraph } from '../StatisticsGraph/StatisticsGraph';
import { DashboardContainer } from './Dashboard.styled';

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <ProfileCard />
      <ActivityList />
      <StatisticsGraph />
    </DashboardContainer>
  );
};
