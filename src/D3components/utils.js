let DataSource = {
    clone: o => JSON.parse(JSON.stringify(o)),
    grouped: function (max) {
        let tmp = {
            'ON PREM': { Budget: 0, Spent: 0 },
            'AWS': { Budget: 0, Spent: 0 },
            'AZURE': { Budget: 0, Spent: 0 },
            'ORACLE': { Budget: 0, Spent: 0 }
        };
        let keys = Object.keys(tmp);
        keys.forEach(k => {
            tmp[k].Budget = Math.floor(Math.random() * max);
            tmp[k].Spent = Math.floor(Math.random() * max);
        })
        return this.clone(tmp);
    },
    multi_series: function (max) {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            tmp = months.map(month => {
                return {
                    Month: month,
                    Budget: Math.floor(Math.random() * max),
                    Spent: Math.floor(Math.random() * max),
                    Forecast: Math.floor(Math.random() * max)
                }
            });
        return this.clone(tmp);
    }
}


export { DataSource };