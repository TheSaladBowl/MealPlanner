export const febDaysForLeap = (year) => ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0) ? 29 : 28
export const always31 = () => 31
export const always30 = () => 30

export const dayCount = (monthNum) => {
    if (monthNum === 2) return febDaysForLeap;
    if ([1, 3, 5, 7, 8, 10, 12].includes(monthNum)) return always31;
    return always30;
}

export const nameForMonth = (num) => {
    return {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December',
    }[num];
}
