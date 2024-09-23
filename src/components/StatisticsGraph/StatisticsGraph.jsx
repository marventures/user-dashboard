// prettier-ignore
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { GraphContainer, SectionTitle } from './StatisticsGraph.styled';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { statistics } from '../../lib/placeholder-data';

export const StatisticsGraph = () => {
  const { darkMode } = useDarkMode();

  return (
    <GraphContainer darkMode={darkMode}>
      <SectionTitle>User Statistics</SectionTitle>
      <ResponsiveContainer width='100%' height={300}>
        <LineChart data={statistics}>
          <CartesianGrid
            strokeDasharray='3 3'
            stroke={darkMode ? '#555' : '#ccc'}
          />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Line
            type='monotone'
            dataKey='daily-logins'
            stroke={darkMode ? '#82ca9d' : '#8884d8'}
            dot={{ fill: darkMode ? '#82ca9d' : '#8884d8' }}
          />
          <Line
            type='monotone'
            dataKey='profile-views'
            stroke={darkMode ? '#ff7300' : '#ff0000'}
            dot={{ fill: darkMode ? '#ff7300' : '#ff0000' }}
          />
          <Legend />
        </LineChart>
      </ResponsiveContainer>
    </GraphContainer>
  );
};
