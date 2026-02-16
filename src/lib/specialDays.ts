/**
 * Special days and holidays recognised across the year.
 * Format: month (1–12), day (1–31), name, and banner message.
 * Tanzania public holidays plus international days.
 */

export type SpecialDay = {
  month: number;
  day: number;
  name: string;
  message: string;
};

export const specialDays: SpecialDay[] = [
  // January
  { month: 1, day: 1, name: "New Year's Day", message: "Happy New Year! Wishing you a prosperous year ahead." },
  { month: 1, day: 12, name: "Zanzibar Revolution Day", message: "Commemorating Zanzibar Revolution Day." },
  // February
  { month: 2, day: 14, name: "Valentine's Day", message: "Happy Valentine's Day! With love from Onyango Construction." },
  // March
  { month: 3, day: 8, name: "International Women's Day", message: "Celebrating International Women's Day and honouring women everywhere." },
  { month: 3, day: 17, name: "Magufuli Day", message: "Commemorating Magufuli Day. Honouring the legacy of the late President." },
  // April
  { month: 4, day: 7, name: "Karume Day", message: "Commemorating Karume Day (Zanzibar)." },
  { month: 4, day: 26, name: "Union Day", message: "Happy Union Day! Celebrating the Union of Tanzania." },
  // May
  { month: 5, day: 1, name: "Workers' Day", message: "Happy Workers' Day! Saluting all workers and their contributions." },
  // July
  { month: 7, day: 7, name: "Saba Saba (Peasants' Day)", message: "Commemorating Saba Saba, Peasants' Day." },
  // August
  { month: 8, day: 8, name: "Nane Nane (Farmers' Day)", message: "Happy Nane Nane, Farmers' Day! Celebrating our farmers." },
  // October
  { month: 10, day: 14, name: "Nyerere Day", message: "Commemorating Nyerere Day. Honouring Mwalimu Julius Nyerere." },
  // December
  { month: 12, day: 9, name: "Independence Day", message: "Happy Independence Day! Celebrating Tanzania's independence." },
  { month: 12, day: 25, name: "Christmas Day", message: "Merry Christmas! Wishing you joy and peace." },
  { month: 12, day: 26, name: "Boxing Day", message: "Happy Boxing Day! Hope you're enjoying the festive season." },
];

/**
 * Returns the special day for the given date, if any.
 */
export function getSpecialDayForDate(date: Date): SpecialDay | null {
  const month = date.getMonth() + 1; // 0-indexed in JS
  const day = date.getDate();
  return specialDays.find((d) => d.month === month && d.day === day) ?? null;
}
