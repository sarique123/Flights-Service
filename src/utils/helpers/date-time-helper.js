function timeCompare(timestr1,timestr2){
    let time1 = new Date(timestr1);
    let time2 = new Date(timestr2);
    return time1.getTime() < time2.getTime();
}

module.exports = {
    timeCompare
}