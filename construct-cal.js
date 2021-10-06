const calendar = [];
const today = moment();
const startDay = today.clone().startOf('month').startOf('week');
const endDay = today.clone().endOf('month').endOf('week');

let date = startDay.clone().subtract(1, 'day');

while (date.isBefore(endDay, 'day')) 
    calendar.push({
        days: Array(7).fill(0).map(() => date.add(1, 'day').clone())
    });