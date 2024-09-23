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
