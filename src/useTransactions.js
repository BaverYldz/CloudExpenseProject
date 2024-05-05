import { useContext } from 'react'
import { ExpenseTrackerContext } from './context/context'

import { incomeCategories, expenseCategories, resetCategories } from './constants/categories'

const useTransactions = (title) => {
    resetCategories();
    const { transactions } = useContext(ExpenseTrackerContext);

    // Map "Gelir" to "Income" and "Gider" to "Expense"
    let type;
    switch (title) {
        case 'Gelir':
            type = 'Income';
            break;
        case 'Gider':
            type = 'Expense';
            break;
        default:
            type = title;
    }

    const transactionsPerType = transactions.filter(t => t.type === type);
    const total = transactionsPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = type === 'Income' ? incomeCategories : expenseCategories;

    transactionsPerType.forEach((t) => {
        const category = categories.find(c => c.type === t.category);
        if (category) {
            category.amount += t.amount;
        }
    });

    const filteredCategories = categories.filter(c => c.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map(c => c.amount),
            backgroundColor: filteredCategories.map(c => c.color),
        }],
        labels: filteredCategories.map(c => c.type),
    };

    return { total, chartData };
};
export default useTransactions