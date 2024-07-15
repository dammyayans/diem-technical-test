export const getBadgeVariant = (availabilityStatus) => {
  if (!availabilityStatus) return 'default';

  const status = availabilityStatus.toLowerCase();
  if (status.includes('low')) return 'danger';
  else if (status.includes('high')) return 'success';
  else return 'default';
};
