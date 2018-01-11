class DateHelper {


  static short(day_name) {
    if(day_name) {
      return (day_name.charAt(0).toUpperCase() + day_name.slice(1)).substring(0, 3);
    }

    return '';
  }

  static capitalize(day_name) {
    return day_name.charAt(0).toUpperCase() + day_name.slice(1);
  }

  static dateToStatus(date) {
    var current_date = new Date().toLocaleDateString();
    if (date == current_date) {
      return 'today';
    } else if (date < current_date) {
      return 'overdue';
    }
    return 'afterwards';
  }

  static dayName(day_week) {
    let week = [
      [1, 'sunday'],
      [2, 'monday'],
      [3, 'tuesday'],
      [4, 'wednesday'],
      [5, 'thursday'],
      [6, 'friday'],
      [7, 'saturday']
    ];

    let weekMap = new Map(week);

    return weekMap.get(parseInt(day_week));
  }
  // short(day_name) {
  //   return DateHelper.capitalize().substring(0, 3);
  // }
}
