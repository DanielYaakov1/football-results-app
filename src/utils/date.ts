export const formatDate = (isoString: Date | string | number) => {
  const date = new Date(isoString);
  const options: any = {
    weekday: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return date.toLocaleString('en-US', options);
};
