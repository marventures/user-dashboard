// prettier-ignore
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { GraphContainer, SectionTitle } from './StatisticsGraph.styled';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { statistics } from '../../lib/placeholder-data';

/**
 * @component StatisticsGraph
 * @version 1.0
 * @copyright (c) 2024, Marvin M. Pacis
 *
 * The StatisticsGraph component renders a line chart that displays
 * user statistics such as daily logins and profile views. The chart
 * adapts to dark mode, changing the colors of the grid and lines
 * accordingly. It uses the Recharts library for creating responsive
 * and interactive charts.
 *
 * Utilizes:
 * - useDarkMode: Hook to retrieve the dark mode state from the context.
 * - statistics: Placeholder data for rendering the graph.
 *
 * @returns {JSX.Element} The rendered statistics graph with user data.
 *
 * @example
 * <StatisticsGraph />
 */
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
