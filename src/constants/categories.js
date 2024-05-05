const incomeColors = ['#87A922', '#4F6F52', '#557A46', '#AFD198', '#76885B', '#1A5D1A', '#9BCF53', '#8EAC50', '#00ff9d', '#A5DD9B'];
const expenseColors = ['#FF204E', '#A0153E', '#5D0E41', '#D04848', '#A73121', '#952323', '#F11A7B', '#A94438', '#FA7070', '#D895DA', '#f55b5f', '#EE4266'];

export const incomeCategories = [
  { type: 'İş', amount: 0, color: incomeColors[0] },
  { type: 'Yatırımlar', amount: 0, color: incomeColors[1] },
  { type: 'Ek gelir', amount: 0, color: incomeColors[2] },
  { type: 'Yatırımlar', amount: 0, color: incomeColors[3] },
  { type: 'Loto', amount: 0, color: incomeColors[4] },
  { type: 'Hediyeler', amount: 0, color: incomeColors[5] },
  { type: 'Maaş', amount: 0, color: incomeColors[6] },
  { type: 'Tasarruflar', amount: 0, color: incomeColors[7] },
  { type: 'Kira geliri', amount: 0, color: incomeColors[8] },
  { type: 'Borsa Geliri', amount: 0, color: incomeColors[9] },
];

export const expenseCategories = [
  { type: 'Faturalar', amount: 0, color: expenseColors[0] },
  { type: 'Araç', amount: 0, color: expenseColors[1] },
  { type: 'Kıyafetler', amount: 0, color: expenseColors[2] },
  { type: 'Seyahat', amount: 0, color: expenseColors[3] },
  { type: 'Yiyecek', amount: 0, color: expenseColors[4] },
  { type: 'Alışveriş', amount: 0, color: expenseColors[5] },
  { type: 'Ev', amount: 0, color: expenseColors[6] },
  { type: 'Eğlence', amount: 0, color: expenseColors[7] },
  { type: 'Telefon', amount: 0, color: expenseColors[8] },
  { type: 'Evcil Hayvanlar', amount: 0, color: expenseColors[9] },
  { type: 'Borsa Giderleri', amount: 0, color: expenseColors[11] },
  { type: 'Diğer', amount: 0, color: expenseColors[10] },
];

export const resetCategories = () => {
  incomeCategories.forEach((c) => c.amount = 0);
  expenseCategories.forEach((c) => c.amount = 0);
};