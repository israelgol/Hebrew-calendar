import {HebrewCalendar, HDate, Location, Event, HolidayEvent, Zmanim, GeoLocation} from '@hebcal/core';

let nowDate = new Date()
let mYear = nowDate.getFullYear()

// console.log(nowDate, mYear)


let today = new HDate(new Date()).onOrBefore(0).greg() 
let endDate = new HDate(new Date()).onOrAfter(6).greg()

let arr = []

// console.log(today, endDate)

for (let index = 0; index < 7; index++) {

    let latitude = 40.70575470419141 
    let longitude = -73.95267614539294
    const tzid = 'America/New_York';
    let sunday = today 
    const gloc = new GeoLocation(null, latitude, longitude, 0, tzid);
    let zmanim = new Zmanim(gloc, sunday, false)

    const candleLighting = zmanim.sunsetOffset(-18, true);
    const timeStr = Zmanim.formatISOWithTimeZone(tzid, candleLighting);




        


    let chatzus = zmanim.chatzot()
    let shma = zmanim.sofZmanShma()
    let shmaMga = zmanim.sofZmanShmaMGA()
    let tfilla = zmanim.sofZmanTfilla()
    let tfillaMga = zmanim.sofZmanTfillaMGA()



    let timeclass = {
        םוי: sunday.toDateString(),
        קזס: shma.getHours() + ':' + shma.getMinutes() + ':' + shma.getSeconds(),
        ארג_קזס: shmaMga.getHours() + ':' + shmaMga.getMinutes() + ':' + shmaMga.getSeconds(),
        תזס: tfilla.getHours() + ':' + tfilla.getMinutes() + ':' + tfilla.getSeconds(),
        ארג_תזס: tfillaMga.getHours() + ':' + tfillaMga.getMinutes() + ':' + tfillaMga.getSeconds() ,
        תוצח: chatzus.getHours() + ':' + chatzus.getMinutes() + ':' + chatzus.getSeconds(),

    }

    arr.push(timeclass)

    sunday.setDate(sunday.getDate() + 1);


}
console.table(arr)

