const addZero = (str: number) => `${str}`.padStart(2, '0');

export const formatting = (date: Date): string => {
    const nDate = new Date(+date);
    const year = nDate.getFullYear();
    const month = addZero(nDate.getMonth() + 1);
    const d = addZero(nDate.getDate());
    const hour = addZero(nDate.getHours());
    const min = addZero(nDate.getMinutes());
    const sec = addZero(nDate.getSeconds());

    return `${year}.${month}.${d} ${hour}:${min}:${sec}`;
};
