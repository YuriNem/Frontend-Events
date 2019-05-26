const https = require('https');

const parseDate = dt =>
    new Date(`${dt.slice(4, 6)}.${dt.slice(6, 8)}.${dt.slice(0, 4)}`);

const shiftDate = date => new Date(date - 1000 * 60 * 60 * 24);

const parseText = text => text.split('\r\n').reduce((acc, string) => {
    const [key, value] = string.replace(':', '|').split('|');

    if (key === 'BEGIN' && value === 'VEVENT') {
        return [...acc, {}];
    }

    const preAcc = acc.slice(0, acc.length - 1);
    const last = acc[acc.length - 1];

    if (key === 'SUMMARY' || key === 'DESCRIPTION') {
        return [ ...preAcc, { ...last, [key.toLowerCase()]: value } ];
    } else if (key === 'LOCATION') {
        return [ ...preAcc, {
            ...last,
            [key.toLowerCase()]: value.split('\\')[0],
        } ];
    } else if (key === 'DTSTART;VALUE=DATE' || key === 'DTSTART') {
        return [ ...preAcc, {
            ...last,
            [key.split(';')[0].toLowerCase()]: parseDate(value),
        } ];
    } else if (key === 'DTEND;VALUE=DATE' || key === 'DTEND') {
        return [ ...preAcc, {
            ...last,
            [key.split(';')[0].toLowerCase()]: shiftDate(parseDate(value)),
        } ];
    } else {
        return acc;
    }
}, []);

const options = {
    hostname: 'web-standards.ru',
    path: '/calendar.ics',
};

const getEvents = () => {
    return new Promise((resolve, reject) => {
        https.get(options, res => {
            const body = [];

            res.on('error', error => {
              reject(error);
            });

            res.on('data', chunk => {
              body.push(chunk);
            });

            res.on('end', () => {
              const text = Buffer.concat(body).toString();
              resolve(parseText(text));
            });
        });
    });
};

module.exports = getEvents;
