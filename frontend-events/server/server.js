const https = require('https');

const options = {
    hostname: 'web-standards.ru',
    path: '/calendar.ics',
};

const parse = text => text.split('\r\n').reduce((acc, string) => {
    const [key, value] = string.split(':');

    if (key === 'SUMMARY') {
        return [...acc, { [key.toLowerCase()]: value }];
    } else {
        const preAcc = acc.slice(0, acc.length - 1);
        const last = acc[acc.length - 1];

        return [ ...preAcc, { ...last, [key.toLowerCase()]: value } ];
    }
}, []);

https.get(options, res => {
    const body = [];

    res.on('error', error => {
      console.log(error);
    });

    res.on('data', chunk => {
      body.push(chunk);
    });

    res.on('end', () => {
      const text = Buffer.concat(body).toString();
      console.log(parse(text));
    });
});
