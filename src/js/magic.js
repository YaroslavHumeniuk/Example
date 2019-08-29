$(document).ready(() => {
    $('a').click((event) => {
        alert('clicked here magic 2');
        event.preventDefault();
    });

    function splitWeeks (start, end) {
        const weeks = [];

        const Mstart = moment(new Date(start));
        const Mend = moment(new Date(end));

        weeks.push({
            from: Mstart.startOf('isoWeek'),
            to: Mstart.endOf('isoWeek'),
            fromStr: Mstart.startOf('isoWeek').toDate(),
            toStr: Mstart.endOf('isoWeek').toDate(),
        });
        while (Mend.diff(weeks[weeks.length - 1].to, 'days') > 0) {
            (function(Mdate) {
                weeks.push({
                    from: Mdate.startOf('isoWeek'),
                    to: Mdate.endOf('isoWeek'),
                    fromStr: Mdate.startOf('isoWeek').toDate(),
                    toStr: Mdate.endOf('isoWeek').toDate(),
                });
            }(weeks[weeks.length - 1].from.add(7, 'days')));
        }
        return weeks;
    }

    function paragraph(value) {
        return value.split('|').map(item => `<p>${item}</p>`).join(' ')
    }
    // const weeks = splitWeeks( '01/15/2018', '01/28/2018' );
    // console.log('weeks', weeks.length);
    // weeks.forEach( function (week, i) {
    //     console.log('i_in', i, week.fromStr, week.toStr)
    // });
    moment.locale('ru');

    console.log('moment', moment('01/01/2018', 'DD/MM/YYYY').toDate() );
    console.log('moment', moment('21/01/2018', 'DD/MM/YYYY').toDate() );
    console.log('moment', moment('12/04/2018', 'DD/MM/YYYY').toDate() );
    console.log(paragraph('LTE cell to access the LTE network, the network type of the second LTE cell being the first type. | La présente invention concerne, dans un de ses modes de réalisation, un procédé de '))

    const month = '03/2018';
    const currentMonth = moment().set({year: month.split('/').pop(), month: month.split('/').shift() - 1}).utc();
    const Dm = currentMonth.endOf('month').get('date');
    let count = 0;
    for (var i=currentMonth.endOf('month').get('date'); i> 0; i--) {
        const day = console.log(currentMonth.add(-1, 'days'));
        console.log('day', day);
        if (day >0 && day < 6) {
            count += 1;
        }
    }
    console.log('count', count);
});
