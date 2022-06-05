export const formatTime = (date: string): string => {
  const dateType = new Date(date);
  return date ? `${dateType.toLocaleTimeString()}` : "";
};
