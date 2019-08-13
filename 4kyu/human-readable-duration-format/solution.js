function formatDuration (seconds) {
  const a = {
    year: 31536000,
    day:  86400,
    hour: 3600,
    min:  60
  }
  let count = {
    year: 0,
    day:  0,
    hour: 0,
    min:  0,
    sec:  seconds
  }
  while(count.sec >= a.min){
    switch(true){
      case (count.sec >= a.year):
        count.year++
        count.sec -= a.year
        break;
      case (count.sec >= a.day): 
        count.day++
        count.sec -= a.day
        break;
      case (count.sec >= a.hour): 
        count.hour++
        count.sec -= a.hour
        break;
      case (count.sec >= a.min): 
        count.min++
        count.sec -= a.min
        break;
    }
  }
  let report = ''
    if(count.year > 0) {
      report += count.year + ' year'
      if(count.year > 1){ report += 's' }
    }
    if(count.day > 0) {
      if(report != ''){
        report = report.replace(' and', ',')
        report += ' and ' 
      }
      report += count.day + ' day'
      if(count.day > 1){ report += 's' }
    }
    if(count.hour > 0) {
      if(report != ''){ 
        report = report.replace(' and', ',')
        report += ' and ' 
      }
      report += count.hour + ' hour'
      if(count.hour > 1){ report += 's' }
    }
    if(count.min > 0) {
      if(report != ''){ 
        report = report.replace(' and', ',')
        report += ' and ' 
      }
      report += count.min + ' minute'
      if(count.min > 1){ report += 's' }
    }
    if(count.sec > 0) {
      if(report != ''){
        report = report.replace(' and', ',')
        report += ' and ' 
      }
      report += count.sec + ' second'
      if(count.sec > 1){ report += 's' }
    }
    if(report == '') {
      report = 'now'
    }
  return report;
}