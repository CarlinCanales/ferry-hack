export const getDateTimeInParts = (
  options: Intl.DateTimeFormatOptions,
  date: Date | null = null,
): { [T in Intl.DateTimeFormatPartTypes]: string } =>
  Intl.DateTimeFormat(navigator.language, options)
    .formatToParts(date ?? new Date())
    .reduce((acc, curr) => {
      acc[curr.type] = curr.value;
      return acc;
    }, {} as { [T in Intl.DateTimeFormatPartTypes]: string });
