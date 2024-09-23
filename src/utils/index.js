/**
 * Formats a given date into a localized string.
 *
 * @param {Date} date - The date to format.
 * @returns {string} The formatted date string in 'en-US' locale.
 *
 * @example
 * const formattedDate = formatDate(new Date());
 * // "October 5, 2024, 2:30 PM"
 */
export const formatDate = date => {
  return date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};

/**
 * Calculates how long ago a given date was from the current time.
 *
 * @param {Date} date - The date to compare against the current time.
 * @returns {string} A string representing the time elapsed since the date.
 *
 * @example
 * const timeAgo = calculateTimeAgo(new Date(Date.now() - 7200000));
 * // "2 hours ago"
 */
export const calculateTimeAgo = date => {
  const currentTime = new Date();
  const timeDifference = Math.floor((currentTime - date) / 1000);
  const hours = Math.floor(timeDifference / 3600);
  const minutes = Math.floor((timeDifference % 3600) / 60);

  if (hours > 0) {
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
  return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
};
