(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'klock-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'klock-js'.");
    }
    root['klock-js'] = factory(typeof this['klock-js'] === 'undefined' ? {} : this['klock-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var equals = Kotlin.equals;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var throwCCE = Kotlin.throwCCE;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var hashCode = Kotlin.hashCode;
  var numberToInt = Kotlin.numberToInt;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Comparable = Kotlin.kotlin.Comparable;
  var Regex = Kotlin.kotlin.text.Regex_61zpoe$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Regex_0 = Kotlin.kotlin.text.Regex;
  var numberToLong = Kotlin.numberToLong;
  var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var abs_0 = Kotlin.kotlin.math.abs_s8cxhz$;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  DayOfWeek.prototype = Object.create(Enum.prototype);
  DayOfWeek.prototype.constructor = DayOfWeek;
  Month.prototype = Object.create(Enum.prototype);
  Month.prototype.constructor = Month;
  DateException.prototype = Object.create(RuntimeException.prototype);
  DateException.prototype.constructor = DateException;
  var KLOCK_VERSION;
  function DayOfWeek(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DayOfWeek_initFields() {
    DayOfWeek_initFields = function () {
    };
    DayOfWeek$Sunday_instance = new DayOfWeek('Sunday', 0, 0);
    DayOfWeek$Monday_instance = new DayOfWeek('Monday', 1, 1);
    DayOfWeek$Tuesday_instance = new DayOfWeek('Tuesday', 2, 2);
    DayOfWeek$Wednesday_instance = new DayOfWeek('Wednesday', 3, 3);
    DayOfWeek$Thursday_instance = new DayOfWeek('Thursday', 4, 4);
    DayOfWeek$Friday_instance = new DayOfWeek('Friday', 5, 5);
    DayOfWeek$Saturday_instance = new DayOfWeek('Saturday', 6, 6);
    DayOfWeek$Companion_getInstance();
  }
  var DayOfWeek$Sunday_instance;
  function DayOfWeek$Sunday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Sunday_instance;
  }
  var DayOfWeek$Monday_instance;
  function DayOfWeek$Monday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Monday_instance;
  }
  var DayOfWeek$Tuesday_instance;
  function DayOfWeek$Tuesday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Tuesday_instance;
  }
  var DayOfWeek$Wednesday_instance;
  function DayOfWeek$Wednesday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Wednesday_instance;
  }
  var DayOfWeek$Thursday_instance;
  function DayOfWeek$Thursday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Thursday_instance;
  }
  var DayOfWeek$Friday_instance;
  function DayOfWeek$Friday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Friday_instance;
  }
  var DayOfWeek$Saturday_instance;
  function DayOfWeek$Saturday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Saturday_instance;
  }
  function DayOfWeek$Companion() {
    DayOfWeek$Companion_instance = this;
    this.BY_INDEX = DayOfWeek$values();
  }
  DayOfWeek$Companion.prototype.get_za3lpa$ = function (index) {
    return this.BY_INDEX[index];
  };
  DayOfWeek$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DayOfWeek$Companion_instance = null;
  function DayOfWeek$Companion_getInstance() {
    DayOfWeek_initFields();
    if (DayOfWeek$Companion_instance === null) {
      new DayOfWeek$Companion();
    }
    return DayOfWeek$Companion_instance;
  }
  DayOfWeek.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DayOfWeek',
    interfaces: [Enum]
  };
  function DayOfWeek$values() {
    return [DayOfWeek$Sunday_getInstance(), DayOfWeek$Monday_getInstance(), DayOfWeek$Tuesday_getInstance(), DayOfWeek$Wednesday_getInstance(), DayOfWeek$Thursday_getInstance(), DayOfWeek$Friday_getInstance(), DayOfWeek$Saturday_getInstance()];
  }
  DayOfWeek.values = DayOfWeek$values;
  function DayOfWeek$valueOf(name) {
    switch (name) {
      case 'Sunday':
        return DayOfWeek$Sunday_getInstance();
      case 'Monday':
        return DayOfWeek$Monday_getInstance();
      case 'Tuesday':
        return DayOfWeek$Tuesday_getInstance();
      case 'Wednesday':
        return DayOfWeek$Wednesday_getInstance();
      case 'Thursday':
        return DayOfWeek$Thursday_getInstance();
      case 'Friday':
        return DayOfWeek$Friday_getInstance();
      case 'Saturday':
        return DayOfWeek$Saturday_getInstance();
      default:throwISE('No enum constant com.soywiz.klock.DayOfWeek.' + name);
    }
  }
  DayOfWeek.valueOf_61zpoe$ = DayOfWeek$valueOf;
  function Year(year) {
    Year$Companion_getInstance();
    this.year = year;
  }
  function Year$Companion() {
    Year$Companion_instance = this;
  }
  Year$Companion.prototype.check_za3lpa$ = function (year) {
    if (!(new IntRange(1, 9999)).contains_mef7kx$(year))
      throw new DateException('Year ' + year + ' not in 1..9999');
  };
  Year$Companion.prototype.isLeap_za3lpa$ = function (year) {
    this.check_za3lpa$(year);
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  };
  Year$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Year$Companion_instance = null;
  function Year$Companion_getInstance() {
    if (Year$Companion_instance === null) {
      new Year$Companion();
    }
    return Year$Companion_instance;
  }
  Year.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Year',
    interfaces: []
  };
  function Month(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Month_initFields() {
    Month_initFields = function () {
    };
    Month$January_instance = new Month('January', 0, 1);
    Month$February_instance = new Month('February', 1, 2);
    Month$March_instance = new Month('March', 2, 3);
    Month$April_instance = new Month('April', 3, 4);
    Month$May_instance = new Month('May', 4, 5);
    Month$June_instance = new Month('June', 5, 6);
    Month$July_instance = new Month('July', 6, 7);
    Month$August_instance = new Month('August', 7, 8);
    Month$September_instance = new Month('September', 8, 9);
    Month$October_instance = new Month('October', 9, 10);
    Month$November_instance = new Month('November', 10, 11);
    Month$December_instance = new Month('December', 11, 12);
    Month$Companion_getInstance();
  }
  var Month$January_instance;
  function Month$January_getInstance() {
    Month_initFields();
    return Month$January_instance;
  }
  var Month$February_instance;
  function Month$February_getInstance() {
    Month_initFields();
    return Month$February_instance;
  }
  var Month$March_instance;
  function Month$March_getInstance() {
    Month_initFields();
    return Month$March_instance;
  }
  var Month$April_instance;
  function Month$April_getInstance() {
    Month_initFields();
    return Month$April_instance;
  }
  var Month$May_instance;
  function Month$May_getInstance() {
    Month_initFields();
    return Month$May_instance;
  }
  var Month$June_instance;
  function Month$June_getInstance() {
    Month_initFields();
    return Month$June_instance;
  }
  var Month$July_instance;
  function Month$July_getInstance() {
    Month_initFields();
    return Month$July_instance;
  }
  var Month$August_instance;
  function Month$August_getInstance() {
    Month_initFields();
    return Month$August_instance;
  }
  var Month$September_instance;
  function Month$September_getInstance() {
    Month_initFields();
    return Month$September_instance;
  }
  var Month$October_instance;
  function Month$October_getInstance() {
    Month_initFields();
    return Month$October_instance;
  }
  var Month$November_instance;
  function Month$November_getInstance() {
    Month_initFields();
    return Month$November_instance;
  }
  var Month$December_instance;
  function Month$December_getInstance() {
    Month_initFields();
    return Month$December_instance;
  }
  Object.defineProperty(Month.prototype, 'index0', {
    get: function () {
      return this.index - 1 | 0;
    }
  });
  Month.prototype.days_6taknv$ = function (isLeap) {
    return Month$Companion_getInstance().days_fzusl$(this.index, isLeap);
  };
  Month.prototype.daysToStart_6taknv$ = function (isLeap) {
    return Month$Companion_getInstance().daysToStart_fzusl$(this.index, isLeap);
  };
  Month.prototype.daysToEnd_6taknv$ = function (isLeap) {
    return Month$Companion_getInstance().daysToEnd_fzusl$(this.index, isLeap);
  };
  Month.prototype.days_za3lpa$ = function (year) {
    return Month$Companion_getInstance().days_vux9f0$(this.index, year);
  };
  Month.prototype.daysToStart_za3lpa$ = function (year) {
    return Month$Companion_getInstance().daysToStart_vux9f0$(this.index, year);
  };
  Month.prototype.daysToEnd_za3lpa$ = function (year) {
    return Month$Companion_getInstance().daysToEnd_vux9f0$(this.index, year);
  };
  function Month$Companion() {
    Month$Companion_instance = this;
    this.BY_INDEX0 = Month$values();
    this.DAYS_TO_MONTH_366 = new Int32Array([0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]);
    this.DAYS_TO_MONTH_365 = new Int32Array([0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]);
  }
  Month$Companion.prototype.get_za3lpa$ = function (index1) {
    return this.BY_INDEX0[index1 - 1 | 0];
  };
  Month$Companion.prototype.check_za3lpa$ = function (month) {
    if (!(new IntRange(1, 12)).contains_mef7kx$(month))
      throw new DateException('Month ' + month + ' not in 1..12');
  };
  Month$Companion.prototype.days_fzusl$ = function (month, isLeap) {
    Month$Companion_getInstance().check_za3lpa$(month);
    var days = this.DAYS_TO_MONTH_6taknv$(isLeap);
    return days[month] - days[month - 1 | 0] | 0;
  };
  Month$Companion.prototype.daysToStart_fzusl$ = function (month, isLeap) {
    return this.DAYS_TO_MONTH_6taknv$(isLeap)[month - 1 | 0];
  };
  Month$Companion.prototype.daysToEnd_fzusl$ = function (month, isLeap) {
    return this.DAYS_TO_MONTH_6taknv$(isLeap)[month];
  };
  Month$Companion.prototype.days_vux9f0$ = function (month, year) {
    return this.days_fzusl$(month, Year$Companion_getInstance().isLeap_za3lpa$(year));
  };
  Month$Companion.prototype.daysToStart_vux9f0$ = function (month, year) {
    return this.daysToStart_fzusl$(month, Year$Companion_getInstance().isLeap_za3lpa$(year));
  };
  Month$Companion.prototype.daysToEnd_vux9f0$ = function (month, year) {
    return this.daysToEnd_fzusl$(month, Year$Companion_getInstance().isLeap_za3lpa$(year));
  };
  Month$Companion.prototype.DAYS_TO_MONTH_6taknv$ = function (isLeap) {
    return isLeap ? this.DAYS_TO_MONTH_366 : this.DAYS_TO_MONTH_365;
  };
  Month$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Month$Companion_instance = null;
  function Month$Companion_getInstance() {
    Month_initFields();
    if (Month$Companion_instance === null) {
      new Month$Companion();
    }
    return Month$Companion_instance;
  }
  Month.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Month',
    interfaces: [Enum]
  };
  function Month$values() {
    return [Month$January_getInstance(), Month$February_getInstance(), Month$March_getInstance(), Month$April_getInstance(), Month$May_getInstance(), Month$June_getInstance(), Month$July_getInstance(), Month$August_getInstance(), Month$September_getInstance(), Month$October_getInstance(), Month$November_getInstance(), Month$December_getInstance()];
  }
  Month.values = Month$values;
  function Month$valueOf(name) {
    switch (name) {
      case 'January':
        return Month$January_getInstance();
      case 'February':
        return Month$February_getInstance();
      case 'March':
        return Month$March_getInstance();
      case 'April':
        return Month$April_getInstance();
      case 'May':
        return Month$May_getInstance();
      case 'June':
        return Month$June_getInstance();
      case 'July':
        return Month$July_getInstance();
      case 'August':
        return Month$August_getInstance();
      case 'September':
        return Month$September_getInstance();
      case 'October':
        return Month$October_getInstance();
      case 'November':
        return Month$November_getInstance();
      case 'December':
        return Month$December_getInstance();
      default:throwISE('No enum constant com.soywiz.klock.Month.' + name);
    }
  }
  Month.valueOf_61zpoe$ = Month$valueOf;
  function DateException(msg) {
    RuntimeException.call(this, msg);
    this.name = 'DateException';
  }
  DateException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateException',
    interfaces: [RuntimeException]
  };
  var MILLIS_PER_SECOND;
  var MILLIS_PER_MINUTE;
  var MILLIS_PER_HOUR;
  var MILLIS_PER_DAY;
  var DAYS_PER_YEAR;
  var DAYS_PER_4_YEARS;
  var DAYS_PER_100_YEARS;
  var DAYS_PER_400_YEARS;
  function DateTime() {
    DateTime$Companion_getInstance();
  }
  Object.defineProperty(DateTime.prototype, 'dayOfWeek', {
    get: function () {
      return DayOfWeek$Companion_getInstance().get_za3lpa$(this.dayOfWeekInt);
    }
  });
  Object.defineProperty(DateTime.prototype, 'month0', {
    get: function () {
      return this.month - 1 | 0;
    }
  });
  Object.defineProperty(DateTime.prototype, 'month1', {
    get: function () {
      return this.month;
    }
  });
  Object.defineProperty(DateTime.prototype, 'monthEnum', {
    get: function () {
      return Month$Companion_getInstance().get_za3lpa$(this.month1);
    }
  });
  DateTime.prototype.toUtc = function () {
    return this.utc;
  };
  DateTime.prototype.toLocal = function () {
    return OffsetDateTime$Companion_getInstance().invoke_yatgbp$(this, Klock_getInstance().getLocalTimezoneOffset_s8cxhz$(this.unix));
  };
  DateTime.prototype.addOffset_za3lpa$ = function (offset) {
    return OffsetDateTime$Companion_getInstance().invoke_yatgbp$(this, this.offset + offset | 0);
  };
  DateTime.prototype.toOffset_za3lpa$ = function (offset) {
    return OffsetDateTime$Companion_getInstance().invoke_yatgbp$(this, offset);
  };
  DateTime.prototype.addYears_za3lpa$ = function (delta) {
    return this.add_6svq3l$(delta * 12 | 0, Kotlin.Long.ZERO);
  };
  DateTime.prototype.addMonths_za3lpa$ = function (delta) {
    return this.add_6svq3l$(delta, Kotlin.Long.ZERO);
  };
  DateTime.prototype.addDays_14dthe$ = function (delta) {
    return this.add_6svq3l$(0, Kotlin.Long.fromNumber(delta * MILLIS_PER_DAY));
  };
  DateTime.prototype.addHours_14dthe$ = function (delta) {
    return this.add_6svq3l$(0, Kotlin.Long.fromNumber(delta * MILLIS_PER_HOUR));
  };
  DateTime.prototype.addMinutes_14dthe$ = function (delta) {
    return this.add_6svq3l$(0, Kotlin.Long.fromNumber(delta * MILLIS_PER_MINUTE));
  };
  DateTime.prototype.addSeconds_14dthe$ = function (delta) {
    return this.add_6svq3l$(0, Kotlin.Long.fromNumber(delta * MILLIS_PER_SECOND));
  };
  DateTime.prototype.addMilliseconds_14dthe$ = function (delta) {
    return delta === 0.0 ? this : this.add_6svq3l$(0, Kotlin.Long.fromNumber(delta));
  };
  DateTime.prototype.addMilliseconds_s8cxhz$ = function (delta) {
    return equals(delta, Kotlin.Long.ZERO) ? this : this.add_6svq3l$(0, delta);
  };
  DateTime.prototype.plus_5t6mhc$ = function (delta) {
    return this.add_6svq3l$((delta.years * 12 | 0) + delta.months | 0, Kotlin.Long.fromNumber(delta.days * MILLIS_PER_DAY + delta.hours * MILLIS_PER_HOUR + delta.minutes * MILLIS_PER_MINUTE + delta.seconds * MILLIS_PER_SECOND + delta.milliseconds));
  };
  DateTime.prototype.minus_5t6mhc$ = function (delta) {
    return this.plus_5t6mhc$(delta.unaryMinus());
  };
  DateTime.prototype.toString_61zpoe$ = function (format) {
    return (new SimplerDateFormat(format)).format_mw5vjr$(this);
  };
  function DateTime$Companion() {
    DateTime$Companion_instance = this;
    this.EPOCH_wykxh4$_0 = lazy(DateTime$Companion$EPOCH$lambda);
    this.EPOCH_INTERNAL_MILLIS_8be2vx$_mn0yn7$_0 = lazy(DateTime$Companion$EPOCH_INTERNAL_MILLIS$lambda(this));
  }
  Object.defineProperty(DateTime$Companion.prototype, 'EPOCH', {
    get: function () {
      var $receiver = this.EPOCH_wykxh4$_0;
      new PropertyMetadata('EPOCH');
      return $receiver.value;
    }
  });
  Object.defineProperty(DateTime$Companion.prototype, 'EPOCH_INTERNAL_MILLIS_8be2vx$', {
    get: function () {
      var $receiver = this.EPOCH_INTERNAL_MILLIS_8be2vx$_mn0yn7$_0;
      new PropertyMetadata('EPOCH_INTERNAL_MILLIS');
      return $receiver.value;
    }
  });
  DateTime$Companion.prototype.invoke_ui44o2$ = function (year, month, day, hour, minute, second, milliseconds) {
    if (hour === void 0)
      hour = 0;
    if (minute === void 0)
      minute = 0;
    if (second === void 0)
      second = 0;
    if (milliseconds === void 0)
      milliseconds = 0;
    return new UtcDateTime(UtcDateTime$Companion_getInstance().dateToMillis_cub51b$(year, month, day).add(UtcDateTime$Companion_getInstance().timeToMillis_cub51b$(hour, minute, second)).add(Kotlin.Long.fromInt(milliseconds)), true);
  };
  DateTime$Companion.prototype.invoke_s8cxhz$ = function (time) {
    return this.fromUnix_s8cxhz$(time);
  };
  DateTime$Companion.prototype.fromUnix_s8cxhz$ = function (time) {
    return new UtcDateTime(this.EPOCH_INTERNAL_MILLIS_8be2vx$.add(time), true);
  };
  DateTime$Companion.prototype.fromUnixLocal_s8cxhz$ = function (time) {
    return (new UtcDateTime(this.EPOCH_INTERNAL_MILLIS_8be2vx$.add(time), true)).toLocal();
  };
  DateTime$Companion.prototype.nowUnix = function () {
    return Klock_getInstance().currentTimeMillis();
  };
  DateTime$Companion.prototype.now = function () {
    return this.fromUnix_s8cxhz$(this.nowUnix());
  };
  DateTime$Companion.prototype.nowLocal = function () {
    return this.fromUnix_s8cxhz$(this.nowUnix()).toLocal();
  };
  DateTime$Companion.prototype.createAdjusted_ui44o2$ = function (year, month, day, hour, minute, second, milliseconds) {
    if (hour === void 0)
      hour = 0;
    if (minute === void 0)
      minute = 0;
    if (second === void 0)
      second = 0;
    if (milliseconds === void 0)
      milliseconds = 0;
    var dy = clamp(year, 1, 9999);
    var dm = clamp(month, 1, 12);
    var dd = clamp(day, 1, this.daysInMonth_vux9f0$(dm, dy));
    var th = clamp(hour, 0, 23);
    var tm = clamp(minute, 0, 59);
    var ts = clamp(second, 0, 59);
    return DateTime$Companion_getInstance().invoke_ui44o2$(dy, dm, dd, th, tm, ts, milliseconds);
  };
  DateTime$Companion.prototype.isLeapYear_za3lpa$ = function (year) {
    Year$Companion_getInstance().check_za3lpa$(year);
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  };
  DateTime$Companion.prototype.daysInMonth_fzusl$ = function (month, isLeap) {
    return Month$Companion_getInstance().days_fzusl$(month, isLeap);
  };
  DateTime$Companion.prototype.daysInMonth_vux9f0$ = function (month, year) {
    return this.daysInMonth_fzusl$(month, this.isLeapYear_za3lpa$(year));
  };
  function DateTime$Companion$EPOCH$lambda() {
    var tmp$;
    return Kotlin.isType(tmp$ = DateTime$Companion_getInstance().invoke_ui44o2$(1970, 1, 1, 0, 0, 0), UtcDateTime) ? tmp$ : throwCCE();
  }
  function DateTime$Companion$EPOCH_INTERNAL_MILLIS$lambda(this$DateTime$) {
    return function () {
      return this$DateTime$.EPOCH.internalMillis_8be2vx$;
    };
  }
  DateTime$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTime$Companion_instance = null;
  function DateTime$Companion_getInstance() {
    if (DateTime$Companion_instance === null) {
      new DateTime$Companion();
    }
    return DateTime$Companion_instance;
  }
  DateTime.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DateTime',
    interfaces: []
  };
  function OffsetDateTime(utc, offset, adjusted) {
    OffsetDateTime$Companion_getInstance();
    if (adjusted === void 0)
      adjusted = utc.addMinutes_14dthe$(offset);
    this.utc_omxz7c$_0 = utc;
    this.offset_vvyht7$_0 = offset;
    this.adjusted = adjusted;
    this.deltaTotalMinutesAbs_0 = abs(this.offset);
    this.timeZone_362zv3$_0 = format('GMT%s%02d%02d', [this.positive ? '+' : '-', this.deltaHoursAbs, this.deltaMinutesAbs]);
  }
  Object.defineProperty(OffsetDateTime.prototype, 'utc', {
    get: function () {
      return this.utc_omxz7c$_0;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'offset', {
    get: function () {
      return this.offset_vvyht7$_0;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'positive', {
    get: function () {
      return this.offset >= 0;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'deltaHoursAbs', {
    get: function () {
      return this.deltaTotalMinutesAbs_0 / 60 | 0;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'deltaMinutesAbs', {
    get: function () {
      return this.deltaTotalMinutesAbs_0 % 60;
    }
  });
  function OffsetDateTime$Companion() {
    OffsetDateTime$Companion_instance = this;
  }
  OffsetDateTime$Companion.prototype.invoke_yatgbp$ = function (utc, offset) {
    return new OffsetDateTime(utc.utc, offset);
  };
  OffsetDateTime$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OffsetDateTime$Companion_instance = null;
  function OffsetDateTime$Companion_getInstance() {
    if (OffsetDateTime$Companion_instance === null) {
      new OffsetDateTime$Companion();
    }
    return OffsetDateTime$Companion_instance;
  }
  Object.defineProperty(OffsetDateTime.prototype, 'timeZone', {
    get: function () {
      return this.timeZone_362zv3$_0;
    }
  });
  OffsetDateTime.prototype.add_6svq3l$ = function (deltaMonths, deltaMilliseconds) {
    return OffsetDateTime$Companion_getInstance().invoke_yatgbp$(this.utc.add_6svq3l$(deltaMonths, deltaMilliseconds), this.offset);
  };
  OffsetDateTime.prototype.toString = function () {
    return SimplerDateFormat$Companion_getInstance().DEFAULT_FORMAT.format_mw5vjr$(this);
  };
  Object.defineProperty(OffsetDateTime.prototype, 'dayOfMonth', {
    get: function () {
      return this.adjusted.dayOfMonth;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'dayOfWeek', {
    get: function () {
      return this.adjusted.dayOfWeek;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'dayOfWeekInt', {
    get: function () {
      return this.adjusted.dayOfWeekInt;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'dayOfYear', {
    get: function () {
      return this.adjusted.dayOfYear;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'hours', {
    get: function () {
      return this.adjusted.hours;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'milliseconds', {
    get: function () {
      return this.adjusted.milliseconds;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'minutes', {
    get: function () {
      return this.adjusted.minutes;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'month', {
    get: function () {
      return this.adjusted.month;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'month0', {
    get: function () {
      return this.adjusted.month0;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'month1', {
    get: function () {
      return this.adjusted.month1;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'monthEnum', {
    get: function () {
      return this.adjusted.monthEnum;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'seconds', {
    get: function () {
      return this.adjusted.seconds;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'unix', {
    get: function () {
      return this.adjusted.unix;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'year', {
    get: function () {
      return this.adjusted.year;
    }
  });
  OffsetDateTime.prototype.addDays_14dthe$ = function (delta) {
    return this.adjusted.addDays_14dthe$(delta);
  };
  OffsetDateTime.prototype.addHours_14dthe$ = function (delta) {
    return this.adjusted.addHours_14dthe$(delta);
  };
  OffsetDateTime.prototype.addMilliseconds_14dthe$ = function (delta) {
    return this.adjusted.addMilliseconds_14dthe$(delta);
  };
  OffsetDateTime.prototype.addMilliseconds_s8cxhz$ = function (delta) {
    return this.adjusted.addMilliseconds_s8cxhz$(delta);
  };
  OffsetDateTime.prototype.addMinutes_14dthe$ = function (delta) {
    return this.adjusted.addMinutes_14dthe$(delta);
  };
  OffsetDateTime.prototype.addMonths_za3lpa$ = function (delta) {
    return this.adjusted.addMonths_za3lpa$(delta);
  };
  OffsetDateTime.prototype.addOffset_za3lpa$ = function (offset) {
    return this.adjusted.addOffset_za3lpa$(offset);
  };
  OffsetDateTime.prototype.addSeconds_14dthe$ = function (delta) {
    return this.adjusted.addSeconds_14dthe$(delta);
  };
  OffsetDateTime.prototype.addYears_za3lpa$ = function (delta) {
    return this.adjusted.addYears_za3lpa$(delta);
  };
  OffsetDateTime.prototype.minus_5t6mhc$ = function (delta) {
    return this.adjusted.minus_5t6mhc$(delta);
  };
  OffsetDateTime.prototype.plus_5t6mhc$ = function (delta) {
    return this.adjusted.plus_5t6mhc$(delta);
  };
  OffsetDateTime.prototype.toLocal = function () {
    return this.adjusted.toLocal();
  };
  OffsetDateTime.prototype.toOffset_za3lpa$ = function (offset) {
    return this.adjusted.toOffset_za3lpa$(offset);
  };
  OffsetDateTime.prototype.toString_61zpoe$ = function (format) {
    return this.adjusted.toString_61zpoe$(format);
  };
  OffsetDateTime.prototype.toUtc = function () {
    return this.adjusted.toUtc();
  };
  OffsetDateTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OffsetDateTime',
    interfaces: [DateTime]
  };
  function UtcDateTime(internalMillis, dummy) {
    UtcDateTime$Companion_getInstance();
    this.internalMillis_8be2vx$ = internalMillis;
    this.offset_rmcc3u$_0 = 0;
    this.utc_14qx0z$_0 = this;
  }
  function UtcDateTime$Companion() {
    UtcDateTime$Companion_instance = this;
    this.DATE_PART_YEAR_0 = 0;
    this.DATE_PART_DAY_OF_YEAR_0 = 1;
    this.DATE_PART_MONTH_0 = 2;
    this.DATE_PART_DAY_0 = 3;
  }
  UtcDateTime$Companion.prototype.dateToMillis_cub51b$ = function (year, month, day) {
    Year$Companion_getInstance().check_za3lpa$(year);
    Month$Companion_getInstance().check_za3lpa$(month);
    if (!(new IntRange(1, Month$Companion_getInstance().days_vux9f0$(month, year))).contains_mef7kx$(day))
      throw new DateException('Day ' + day + ' not valid for year=' + year + ' and month=' + month);
    var y = year - 1 | 0;
    Month$Companion_getInstance().daysToStart_vux9f0$(month, year);
    var n = (y * 365 | 0) + (y / 4 | 0) - (y / 100 | 0) + (y / 400 | 0) + Month$Companion_getInstance().daysToStart_vux9f0$(month, year) + day - 1 | 0;
    return Kotlin.Long.fromInt(n).multiply(Kotlin.Long.fromInt(86400000));
  };
  UtcDateTime$Companion.prototype.timeToMillis_cub51b$ = function (hour, minute, second) {
    if (!(new IntRange(0, 23)).contains_mef7kx$(hour))
      throw new DateException('Hour ' + hour + ' not in 0..23');
    if (!(new IntRange(0, 59)).contains_mef7kx$(minute))
      throw new DateException('Minute ' + minute + ' not in 0..59');
    if (!(new IntRange(0, 59)).contains_mef7kx$(second))
      throw new DateException('Second ' + second + ' not in 0..59');
    var totalSeconds = Kotlin.Long.fromInt(hour).multiply(Kotlin.Long.fromInt(3600)).add(Kotlin.Long.fromInt(minute).multiply(Kotlin.Long.fromInt(60))).add(Kotlin.Long.fromInt(second));
    return totalSeconds.multiply(Kotlin.Long.fromInt(MILLIS_PER_SECOND));
  };
  UtcDateTime$Companion.prototype.getDatePart_plstum$ = function (millis, part) {
    var n = millis.div(Kotlin.Long.fromInt(MILLIS_PER_DAY)).toInt();
    var y400 = n / DAYS_PER_400_YEARS | 0;
    n = n - Kotlin.imul(y400, DAYS_PER_400_YEARS) | 0;
    var y100 = n / DAYS_PER_100_YEARS | 0;
    if (y100 === 4)
      y100 = 3;
    n = n - Kotlin.imul(y100, DAYS_PER_100_YEARS) | 0;
    var y4 = n / DAYS_PER_4_YEARS | 0;
    n = n - Kotlin.imul(y4, DAYS_PER_4_YEARS) | 0;
    var y1 = n / DAYS_PER_YEAR | 0;
    if (y1 === 4)
      y1 = 3;
    if (part === this.DATE_PART_YEAR_0)
      return (y400 * 400 | 0) + (y100 * 100 | 0) + (y4 * 4 | 0) + y1 + 1 | 0;
    n = n - Kotlin.imul(y1, DAYS_PER_YEAR) | 0;
    if (part === this.DATE_PART_DAY_OF_YEAR_0)
      return n + 1 | 0;
    var leapYear = y1 === 3 && (y4 !== 24 || y100 === 3);
    var m = n >> 5 + 1;
    while (n >= Month$Companion_getInstance().daysToEnd_fzusl$(m, leapYear)) {
      m = m + 1 | 0;
    }
    return part === this.DATE_PART_MONTH_0 ? m : n - Month$Companion_getInstance().daysToStart_fzusl$(m, leapYear) + 1 | 0;
  };
  UtcDateTime$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UtcDateTime$Companion_instance = null;
  function UtcDateTime$Companion_getInstance() {
    if (UtcDateTime$Companion_instance === null) {
      new UtcDateTime$Companion();
    }
    return UtcDateTime$Companion_instance;
  }
  UtcDateTime.prototype.getDatePart_0 = function (part) {
    return UtcDateTime$Companion_getInstance().getDatePart_plstum$(this.internalMillis_8be2vx$, part);
  };
  Object.defineProperty(UtcDateTime.prototype, 'offset', {
    get: function () {
      return this.offset_rmcc3u$_0;
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'utc', {
    get: function () {
      return this.utc_14qx0z$_0;
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'unix', {
    get: function () {
      return this.internalMillis_8be2vx$.subtract(DateTime$Companion_getInstance().EPOCH.internalMillis_8be2vx$);
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'year', {
    get: function () {
      return this.getDatePart_0(UtcDateTime$Companion_getInstance().DATE_PART_YEAR_0);
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'month', {
    get: function () {
      return this.getDatePart_0(UtcDateTime$Companion_getInstance().DATE_PART_MONTH_0);
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'dayOfMonth', {
    get: function () {
      return this.getDatePart_0(UtcDateTime$Companion_getInstance().DATE_PART_DAY_0);
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'dayOfWeekInt', {
    get: function () {
      return this.internalMillis_8be2vx$.div(Kotlin.Long.fromInt(MILLIS_PER_DAY)).add(Kotlin.Long.fromInt(1)).modulo(Kotlin.Long.fromInt(7)).toInt();
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'dayOfYear', {
    get: function () {
      return this.getDatePart_0(UtcDateTime$Companion_getInstance().DATE_PART_DAY_OF_YEAR_0);
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'hours', {
    get: function () {
      return this.internalMillis_8be2vx$.div(Kotlin.Long.fromInt(MILLIS_PER_HOUR)).modulo(Kotlin.Long.fromInt(24)).toInt();
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'minutes', {
    get: function () {
      return this.internalMillis_8be2vx$.div(Kotlin.Long.fromInt(MILLIS_PER_MINUTE)).modulo(Kotlin.Long.fromInt(60)).toInt();
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'seconds', {
    get: function () {
      return this.internalMillis_8be2vx$.div(Kotlin.Long.fromInt(MILLIS_PER_SECOND)).modulo(Kotlin.Long.fromInt(60)).toInt();
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'milliseconds', {
    get: function () {
      return this.internalMillis_8be2vx$.modulo(Kotlin.Long.fromInt(1000)).toInt();
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'timeZone', {
    get: function () {
      return 'UTC';
    }
  });
  UtcDateTime.prototype.add_6svq3l$ = function (deltaMonths, deltaMilliseconds) {
    if (deltaMonths === 0 && equals(deltaMilliseconds, Kotlin.Long.ZERO))
      return this;
    else if (deltaMonths === 0)
      return new UtcDateTime(this.internalMillis_8be2vx$.add(deltaMilliseconds), true);
    else {
      var year = this.year;
      var month = this.month;
      var day = this.dayOfMonth;
      var i = month - 1 + deltaMonths | 0;
      if (i >= 0) {
        month = i % 12 + 1 | 0;
        year = year + (i / 12 | 0) | 0;
      }
       else {
        month = 12 + (i + 1 | 0) % 12 | 0;
        year = year + ((i - 11 | 0) / 12 | 0) | 0;
      }
      Year$Companion_getInstance().check_za3lpa$(year);
      var days = Month$Companion_getInstance().days_vux9f0$(month, year);
      if (day > days)
        day = days;
      return new UtcDateTime(UtcDateTime$Companion_getInstance().dateToMillis_cub51b$(year, month, day).add(this.internalMillis_8be2vx$.modulo(Kotlin.Long.fromInt(MILLIS_PER_DAY))).add(deltaMilliseconds), true);
    }
  };
  UtcDateTime.prototype.compareTo_mw5vjr$ = function (other) {
    return this.unix.compareTo_11rb$(other.unix);
  };
  UtcDateTime.prototype.hashCode = function () {
    return hashCode(this.internalMillis_8be2vx$);
  };
  UtcDateTime.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    return equals(this.unix, (tmp$_0 = (tmp$ = other) == null || Kotlin.isType(tmp$, DateTime) ? tmp$ : null) != null ? tmp$_0.unix : null);
  };
  UtcDateTime.prototype.toString = function () {
    return SimplerDateFormat$Companion_getInstance().DEFAULT_FORMAT.format_mw5vjr$(this);
  };
  UtcDateTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UtcDateTime',
    interfaces: [DateTime]
  };
  function TimeDistance(years, months, days, hours, minutes, seconds, milliseconds) {
    if (years === void 0)
      years = 0;
    if (months === void 0)
      months = 0;
    if (days === void 0)
      days = 0.0;
    if (hours === void 0)
      hours = 0.0;
    if (minutes === void 0)
      minutes = 0.0;
    if (seconds === void 0)
      seconds = 0.0;
    if (milliseconds === void 0)
      milliseconds = 0.0;
    this.years = years;
    this.months = months;
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.milliseconds = milliseconds;
  }
  TimeDistance.prototype.unaryMinus = function () {
    return new TimeDistance(-this.years, -this.months, -this.days, -this.hours, -this.minutes, -this.seconds, -this.milliseconds);
  };
  TimeDistance.prototype.minus_5t6mhc$ = function (other) {
    return this.plus_5t6mhc$(other.unaryMinus());
  };
  TimeDistance.prototype.plus_5t6mhc$ = function (other) {
    return new TimeDistance(this.years + other.years | 0, this.months + other.months | 0, this.days + other.days, this.hours + other.hours, this.minutes + other.minutes, this.seconds + other.seconds, this.milliseconds + other.milliseconds);
  };
  TimeDistance.prototype.times_14dthe$ = function (times) {
    return new TimeDistance(numberToInt(this.years * times), numberToInt(this.months * times), this.days * times, this.hours * times, this.minutes * times, this.seconds * times, this.milliseconds * times);
  };
  TimeDistance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeDistance',
    interfaces: []
  };
  TimeDistance.prototype.component1 = function () {
    return this.years;
  };
  TimeDistance.prototype.component2 = function () {
    return this.months;
  };
  TimeDistance.prototype.component3 = function () {
    return this.days;
  };
  TimeDistance.prototype.component4 = function () {
    return this.hours;
  };
  TimeDistance.prototype.component5 = function () {
    return this.minutes;
  };
  TimeDistance.prototype.component6 = function () {
    return this.seconds;
  };
  TimeDistance.prototype.component7 = function () {
    return this.milliseconds;
  };
  TimeDistance.prototype.copy_hw4um2$ = function (years, months, days, hours, minutes, seconds, milliseconds) {
    return new TimeDistance(years === void 0 ? this.years : years, months === void 0 ? this.months : months, days === void 0 ? this.days : days, hours === void 0 ? this.hours : hours, minutes === void 0 ? this.minutes : minutes, seconds === void 0 ? this.seconds : seconds, milliseconds === void 0 ? this.milliseconds : milliseconds);
  };
  TimeDistance.prototype.toString = function () {
    return 'TimeDistance(years=' + Kotlin.toString(this.years) + (', months=' + Kotlin.toString(this.months)) + (', days=' + Kotlin.toString(this.days)) + (', hours=' + Kotlin.toString(this.hours)) + (', minutes=' + Kotlin.toString(this.minutes)) + (', seconds=' + Kotlin.toString(this.seconds)) + (', milliseconds=' + Kotlin.toString(this.milliseconds)) + ')';
  };
  TimeDistance.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.years) | 0;
    result = result * 31 + Kotlin.hashCode(this.months) | 0;
    result = result * 31 + Kotlin.hashCode(this.days) | 0;
    result = result * 31 + Kotlin.hashCode(this.hours) | 0;
    result = result * 31 + Kotlin.hashCode(this.minutes) | 0;
    result = result * 31 + Kotlin.hashCode(this.seconds) | 0;
    result = result * 31 + Kotlin.hashCode(this.milliseconds) | 0;
    return result;
  };
  TimeDistance.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.years, other.years) && Kotlin.equals(this.months, other.months) && Kotlin.equals(this.days, other.days) && Kotlin.equals(this.hours, other.hours) && Kotlin.equals(this.minutes, other.minutes) && Kotlin.equals(this.seconds, other.seconds) && Kotlin.equals(this.milliseconds, other.milliseconds)))));
  };
  var get_years = defineInlineFunction('klock-js.com.soywiz.klock.get_years_s8ev3n$', wrapFunction(function () {
    var TimeDistance_init = _.com.soywiz.klock.TimeDistance;
    return function ($receiver) {
      return new TimeDistance_init($receiver);
    };
  }));
  var get_months = defineInlineFunction('klock-js.com.soywiz.klock.get_months_s8ev3n$', wrapFunction(function () {
    var TimeDistance_init = _.com.soywiz.klock.TimeDistance;
    return function ($receiver) {
      return new TimeDistance_init(void 0, $receiver);
    };
  }));
  var get_days = defineInlineFunction('klock-js.com.soywiz.klock.get_days_rcaex3$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var TimeDistance_init = _.com.soywiz.klock.TimeDistance;
    return function ($receiver) {
      return new TimeDistance_init(void 0, void 0, numberToDouble($receiver));
    };
  }));
  var get_hours = defineInlineFunction('klock-js.com.soywiz.klock.get_hours_rcaex3$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var TimeDistance_init = _.com.soywiz.klock.TimeDistance;
    return function ($receiver) {
      return new TimeDistance_init(void 0, void 0, void 0, numberToDouble($receiver));
    };
  }));
  var get_minutes = defineInlineFunction('klock-js.com.soywiz.klock.get_minutes_rcaex3$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var TimeDistance_init = _.com.soywiz.klock.TimeDistance;
    return function ($receiver) {
      return new TimeDistance_init(void 0, void 0, void 0, void 0, numberToDouble($receiver));
    };
  }));
  function TimeSpan(ms) {
    TimeSpan$Companion_getInstance();
    this.ms = ms;
  }
  Object.defineProperty(TimeSpan.prototype, 'milliseconds', {
    get: function () {
      return this.ms;
    }
  });
  Object.defineProperty(TimeSpan.prototype, 'seconds', {
    get: function () {
      return this.ms / 1000.0;
    }
  });
  function TimeSpan$Companion() {
    TimeSpan$Companion_instance = this;
    this.ZERO = new TimeSpan(0);
  }
  TimeSpan$Companion.prototype.fromMilliseconds_za3lpa$ = function (ms) {
    if (ms === 0)
      return this.ZERO;
    else
      return new TimeSpan(ms);
  };
  TimeSpan$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimeSpan$Companion_instance = null;
  function TimeSpan$Companion_getInstance() {
    if (TimeSpan$Companion_instance === null) {
      new TimeSpan$Companion();
    }
    return TimeSpan$Companion_instance;
  }
  TimeSpan.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.ms, other.ms);
  };
  TimeSpan.prototype.plus_fv8bff$ = function (other) {
    return new TimeSpan(this.ms + other.ms | 0);
  };
  TimeSpan.prototype.minus_fv8bff$ = function (other) {
    return new TimeSpan(this.ms - other.ms | 0);
  };
  TimeSpan.prototype.times_za3lpa$ = function (scale) {
    return new TimeSpan(Kotlin.imul(this.ms, scale));
  };
  TimeSpan.prototype.times_14dthe$ = function (scale) {
    return new TimeSpan(numberToInt(this.ms * scale));
  };
  TimeSpan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeSpan',
    interfaces: [Comparable]
  };
  TimeSpan.prototype.component1 = function () {
    return this.ms;
  };
  TimeSpan.prototype.copy_za3lpa$ = function (ms) {
    return new TimeSpan(ms === void 0 ? this.ms : ms);
  };
  TimeSpan.prototype.toString = function () {
    return 'TimeSpan(ms=' + Kotlin.toString(this.ms) + ')';
  };
  TimeSpan.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ms) | 0;
    return result;
  };
  TimeSpan.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ms, other.ms))));
  };
  var get_milliseconds = defineInlineFunction('klock-js.com.soywiz.klock.get_milliseconds_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver) {
      return TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt($receiver));
    };
  }));
  var get_seconds = defineInlineFunction('klock-js.com.soywiz.klock.get_seconds_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver) {
      return TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble($receiver) * 1000.0));
    };
  }));
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var throwNPE = Kotlin.throwNPE;
  function SimplerDateFormat(format) {
    SimplerDateFormat$Companion_getInstance();
    this.format = format;
    this.parts_0 = ArrayList_init();
    this.escapedFormat_0 = Regex_0.Companion.escapeReplacement_61zpoe$(this.format);
    var $receiver = this.escapedFormat_0;
    var regex = SimplerDateFormat$Companion_getInstance().rx_0;
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = regex.find_905azu$($receiver);
      if (match == null) {
        replace_20wsma$result = $receiver.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = $receiver.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = match != null ? match : throwNPE();
        sb.append_ezbsdh$($receiver, lastStart, foundMatch.range.start);
        var tmp$ = sb.append_gw00v9$;
        var $receiver_0 = this.parts_0;
        var element = foundMatch.groupValues.get_za3lpa$(0);
        $receiver_0.add_11rb$(element);
        tmp$.call(sb, '([\\w\\+\\-]+)');
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$($receiver, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    this.rx2_0 = Regex('^' + replace_20wsma$result + '$');
    this.parts2_0 = splitKeep(this.escapedFormat_0, SimplerDateFormat$Companion_getInstance().rx_0);
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function SimplerDateFormat$Companion() {
    SimplerDateFormat$Companion_instance = this;
    this.rx_0 = Regex('[\\w]+');
    this.englishDaysOfWeek_0 = listOf(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']);
    this.englishMonths_0 = listOf(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']);
    var $receiver = this.englishMonths_0;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(substr_0(item, 0, 3));
    }
    this.englishMonths3_0 = destination;
    this.DEFAULT_FORMAT_tm2gek$_0 = lazy(SimplerDateFormat$Companion$DEFAULT_FORMAT$lambda);
  }
  Object.defineProperty(SimplerDateFormat$Companion.prototype, 'DEFAULT_FORMAT', {
    get: function () {
      var $receiver = this.DEFAULT_FORMAT_tm2gek$_0;
      new PropertyMetadata('DEFAULT_FORMAT');
      return $receiver.value;
    }
  });
  function SimplerDateFormat$Companion$DEFAULT_FORMAT$lambda() {
    return new SimplerDateFormat('EEE, dd MMM yyyy HH:mm:ss z');
  }
  SimplerDateFormat$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SimplerDateFormat$Companion_instance = null;
  function SimplerDateFormat$Companion_getInstance() {
    if (SimplerDateFormat$Companion_instance === null) {
      new SimplerDateFormat$Companion();
    }
    return SimplerDateFormat$Companion_instance;
  }
  SimplerDateFormat.prototype.format_s8cxhz$ = function (date) {
    return this.format_mw5vjr$(DateTime$Companion_getInstance().fromUnix_s8cxhz$(date));
  };
  SimplerDateFormat.prototype.format_mw5vjr$ = function (dd) {
    var tmp$, tmp$_0, tmp$_1;
    var out = '';
    tmp$ = this.parts2_0.iterator();
    while (tmp$.hasNext()) {
      var name = tmp$.next();
      tmp$_1 = out;
      if (equals(name, 'EEE'))
        tmp$_0 = capitalize(substr_0(SimplerDateFormat$Companion_getInstance().englishDaysOfWeek_0.get_za3lpa$(dd.dayOfWeek.index), 0, 3));
      else if (equals(name, 'z') || equals(name, 'zzz'))
        tmp$_0 = dd.timeZone;
      else if (equals(name, 'd'))
        tmp$_0 = format('%d', [dd.dayOfMonth]);
      else if (equals(name, 'dd'))
        tmp$_0 = format('%02d', [dd.dayOfMonth]);
      else if (equals(name, 'MM'))
        tmp$_0 = format('%02d', [dd.month1]);
      else if (equals(name, 'MMM'))
        tmp$_0 = capitalize(substr_0(SimplerDateFormat$Companion_getInstance().englishMonths_0.get_za3lpa$(dd.month0), 0, 3));
      else if (equals(name, 'yyyy'))
        tmp$_0 = format('%04d', [dd.year]);
      else if (equals(name, 'YYYY'))
        tmp$_0 = format('%04d', [dd.year]);
      else if (equals(name, 'HH'))
        tmp$_0 = format('%02d', [dd.hours]);
      else if (equals(name, 'mm'))
        tmp$_0 = format('%02d', [dd.minutes]);
      else if (equals(name, 'ss'))
        tmp$_0 = format('%02d', [dd.seconds]);
      else
        tmp$_0 = name;
      out = tmp$_1 + tmp$_0;
    }
    return out;
  };
  SimplerDateFormat.prototype.parse_61zpoe$ = function (str) {
    return this.parseDate_61zpoe$(str).unix;
  };
  SimplerDateFormat.prototype.parseDate_61zpoe$ = function (str) {
    var tmp$, tmp$_0;
    var second = 0;
    var minute = 0;
    var hour = 0;
    var day = 1;
    var month = 1;
    var fullYear = 1970;
    tmp$ = this.rx2_0.find_905azu$(str);
    if (tmp$ == null) {
      throw new RuntimeException("Not a valid format: '" + str + "' for '" + this.format + "'");
    }
    var result = tmp$;
    tmp$_0 = zip(this.parts_0, drop(result.groupValues, 1)).iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_1 = tmp$_0.next();
      var name = tmp$_1.component1()
      , value = tmp$_1.component2();
      if (!equals(name, 'EEE'))
        if (!equals(name, 'z') && !equals(name, 'zzz'))
          if (equals(name, 'd') || equals(name, 'dd'))
            day = toInt(value);
          else if (equals(name, 'MM'))
            month = toInt(value);
          else if (equals(name, 'MMM')) {
            month = SimplerDateFormat$Companion_getInstance().englishMonths3_0.indexOf_11rb$(value.toLowerCase()) + 1 | 0;
          }
           else if (equals(name, 'yyyy') || equals(name, 'YYYY'))
            fullYear = toInt(value);
          else if (equals(name, 'HH'))
            hour = toInt(value);
          else if (equals(name, 'mm'))
            minute = toInt(value);
          else if (equals(name, 'ss'))
            second = toInt(value);
    }
    return DateTime$Companion_getInstance().invoke_ui44o2$(fullYear, month, day, hour, minute, second);
  };
  SimplerDateFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimplerDateFormat',
    interfaces: []
  };
  var formatRegex;
  function format($receiver, params) {
    var paramIndex = {v: 0};
    var $this = formatRegex;
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = $this.find_905azu$($receiver);
      if (match == null) {
        replace_20wsma$result = $receiver.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = $receiver.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = match != null ? match : throwNPE();
        sb.append_ezbsdh$($receiver, lastStart, foundMatch.range.start);
        var tmp$ = sb.append_gw00v9$;
        var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
        var param = params[tmp$_0 = paramIndex.v, paramIndex.v = tmp$_0 + 1 | 0, tmp$_0];
        var size = foundMatch.groupValues.get_za3lpa$(1);
        var type = foundMatch.groupValues.get_za3lpa$(2);
        if (equals(type, 'd'))
          tmp$_4 = numberToLong(Kotlin.isNumber(tmp$_1 = param) ? tmp$_1 : throwCCE()).toString();
        else if (equals(type, 'X')) {
          tmp$_4 = toString(numberToLong(Kotlin.isNumber(tmp$_2 = param) ? tmp$_2 : throwCCE()), 16).toUpperCase();
        }
         else if (equals(type, 'x')) {
          tmp$_4 = toString(numberToLong(Kotlin.isNumber(tmp$_3 = param) ? tmp$_3 : throwCCE()), 16).toLowerCase();
        }
         else
          tmp$_4 = param.toString();
        var str = tmp$_4;
        var prefix = startsWith(size, 48) ? 48 : 32;
        var asize = toIntOrNull(size);
        var str2 = str;
        if (asize != null) {
          while (str2.length < asize) {
            var other = str2;
            str2 = String.fromCharCode(prefix) + other;
          }
        }
        tmp$.call(sb, str2);
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$($receiver, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    return replace_20wsma$result;
  }
  var DIGITS_UPPER;
  var reversed = Kotlin.kotlin.text.reversed_gw00vp$;
  function toString($receiver, radix) {
    var isNegative = $receiver.compareTo_11rb$(Kotlin.Long.fromInt(0)) < 0;
    var temp = abs_0($receiver);
    if (equals(temp, Kotlin.Long.ZERO)) {
      return '0';
    }
     else {
      var out = '';
      while (!equals(temp, Kotlin.Long.ZERO)) {
        var digit = temp.modulo(Kotlin.Long.fromInt(radix));
        temp = temp.div(Kotlin.Long.fromInt(radix));
        out += String.fromCharCode(DIGITS_UPPER.charCodeAt(digit.toInt()));
      }
      var tmp$;
      var rout = reversed(Kotlin.isCharSequence(tmp$ = out) ? tmp$ : throwCCE()).toString();
      return isNegative ? '-' + rout : rout;
    }
  }
  function substr($receiver, start) {
    return substr_0($receiver, start, $receiver.length);
  }
  function substr_0($receiver, start, length) {
    var low = clamp(start >= 0 ? start : $receiver.length + start | 0, 0, $receiver.length);
    var high = clamp(length >= 0 ? low + length | 0 : $receiver.length + length | 0, 0, $receiver.length);
    if (high < low) {
      return '';
    }
     else {
      return $receiver.substring(low, high);
    }
  }
  function clamp($receiver, min, max) {
    return $receiver < min ? min : $receiver > max ? max : $receiver;
  }
  function splitKeep($receiver, regex) {
    var tmp$;
    var str = $receiver;
    var out = ArrayList_init();
    var lastPos = 0;
    tmp$ = regex.findAll_905azu$($receiver).iterator();
    while (tmp$.hasNext()) {
      var part = tmp$.next();
      var prange = part.range;
      if (lastPos !== prange.start) {
        var startIndex = lastPos;
        var endIndex = prange.start;
        var element = str.substring(startIndex, endIndex);
        out.add_11rb$(element);
      }
      var element_0 = substring(str, prange);
      out.add_11rb$(element_0);
      lastPos = prange.endInclusive + 1 | 0;
    }
    if (lastPos !== str.length) {
      var startIndex_0 = lastPos;
      var element_1 = str.substring(startIndex_0);
      out.add_11rb$(element_1);
    }
    return out;
  }
  function Klock() {
    Klock_instance = this;
  }
  Klock.prototype.currentTimeMillis = function () {
    return Kotlin.Long.fromNumber(Date.now());
  };
  Klock.prototype.currentTimeMillisDouble = function () {
    return Date.now();
  };
  Klock.prototype.getLocalTimezoneOffset_s8cxhz$ = function (unix) {
    var rtime = unix.toNumber();
    return -(new Date(rtime)).getTimezoneOffset();
  };
  Klock.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Klock',
    interfaces: []
  };
  var Klock_instance = null;
  function Klock_getInstance() {
    if (Klock_instance === null) {
      new Klock();
    }
    return Klock_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$klock = package$soywiz.klock || (package$soywiz.klock = {});
  Object.defineProperty(package$klock, 'KLOCK_VERSION', {
    get: function () {
      return KLOCK_VERSION;
    }
  });
  Object.defineProperty(DayOfWeek, 'Sunday', {
    get: DayOfWeek$Sunday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Monday', {
    get: DayOfWeek$Monday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Tuesday', {
    get: DayOfWeek$Tuesday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Wednesday', {
    get: DayOfWeek$Wednesday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Thursday', {
    get: DayOfWeek$Thursday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Friday', {
    get: DayOfWeek$Friday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Saturday', {
    get: DayOfWeek$Saturday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Companion', {
    get: DayOfWeek$Companion_getInstance
  });
  package$klock.DayOfWeek = DayOfWeek;
  Object.defineProperty(Year, 'Companion', {
    get: Year$Companion_getInstance
  });
  package$klock.Year = Year;
  Object.defineProperty(Month, 'January', {
    get: Month$January_getInstance
  });
  Object.defineProperty(Month, 'February', {
    get: Month$February_getInstance
  });
  Object.defineProperty(Month, 'March', {
    get: Month$March_getInstance
  });
  Object.defineProperty(Month, 'April', {
    get: Month$April_getInstance
  });
  Object.defineProperty(Month, 'May', {
    get: Month$May_getInstance
  });
  Object.defineProperty(Month, 'June', {
    get: Month$June_getInstance
  });
  Object.defineProperty(Month, 'July', {
    get: Month$July_getInstance
  });
  Object.defineProperty(Month, 'August', {
    get: Month$August_getInstance
  });
  Object.defineProperty(Month, 'September', {
    get: Month$September_getInstance
  });
  Object.defineProperty(Month, 'October', {
    get: Month$October_getInstance
  });
  Object.defineProperty(Month, 'November', {
    get: Month$November_getInstance
  });
  Object.defineProperty(Month, 'December', {
    get: Month$December_getInstance
  });
  Object.defineProperty(Month, 'Companion', {
    get: Month$Companion_getInstance
  });
  package$klock.Month = Month;
  package$klock.DateException = DateException;
  Object.defineProperty(DateTime, 'Companion', {
    get: DateTime$Companion_getInstance
  });
  package$klock.DateTime = DateTime;
  Object.defineProperty(OffsetDateTime, 'Companion', {
    get: OffsetDateTime$Companion_getInstance
  });
  package$klock.OffsetDateTime = OffsetDateTime;
  Object.defineProperty(UtcDateTime, 'Companion', {
    get: UtcDateTime$Companion_getInstance
  });
  package$klock.UtcDateTime = UtcDateTime;
  package$klock.TimeDistance = TimeDistance;
  package$klock.get_years_s8ev3n$ = get_years;
  package$klock.get_months_s8ev3n$ = get_months;
  package$klock.get_days_rcaex3$ = get_days;
  package$klock.get_hours_rcaex3$ = get_hours;
  package$klock.get_minutes_rcaex3$ = get_minutes;
  Object.defineProperty(TimeSpan, 'Companion', {
    get: TimeSpan$Companion_getInstance
  });
  package$klock.TimeSpan = TimeSpan;
  package$klock.get_milliseconds_rcaex3$ = get_milliseconds;
  package$klock.get_seconds_rcaex3$ = get_seconds;
  Object.defineProperty(SimplerDateFormat, 'Companion', {
    get: SimplerDateFormat$Companion_getInstance
  });
  package$klock.SimplerDateFormat = SimplerDateFormat;
  Object.defineProperty(package$klock, 'Klock', {
    get: Klock_getInstance
  });
  UtcDateTime.prototype.toString_61zpoe$ = DateTime.prototype.toString_61zpoe$;
  Object.defineProperty(UtcDateTime.prototype, 'dayOfWeek', Object.getOwnPropertyDescriptor(DateTime.prototype, 'dayOfWeek'));
  Object.defineProperty(UtcDateTime.prototype, 'month0', Object.getOwnPropertyDescriptor(DateTime.prototype, 'month0'));
  Object.defineProperty(UtcDateTime.prototype, 'month1', Object.getOwnPropertyDescriptor(DateTime.prototype, 'month1'));
  Object.defineProperty(UtcDateTime.prototype, 'monthEnum', Object.getOwnPropertyDescriptor(DateTime.prototype, 'monthEnum'));
  UtcDateTime.prototype.toUtc = DateTime.prototype.toUtc;
  UtcDateTime.prototype.toLocal = DateTime.prototype.toLocal;
  UtcDateTime.prototype.addOffset_za3lpa$ = DateTime.prototype.addOffset_za3lpa$;
  UtcDateTime.prototype.toOffset_za3lpa$ = DateTime.prototype.toOffset_za3lpa$;
  UtcDateTime.prototype.addYears_za3lpa$ = DateTime.prototype.addYears_za3lpa$;
  UtcDateTime.prototype.addMonths_za3lpa$ = DateTime.prototype.addMonths_za3lpa$;
  UtcDateTime.prototype.addDays_14dthe$ = DateTime.prototype.addDays_14dthe$;
  UtcDateTime.prototype.addHours_14dthe$ = DateTime.prototype.addHours_14dthe$;
  UtcDateTime.prototype.addMinutes_14dthe$ = DateTime.prototype.addMinutes_14dthe$;
  UtcDateTime.prototype.addSeconds_14dthe$ = DateTime.prototype.addSeconds_14dthe$;
  UtcDateTime.prototype.addMilliseconds_14dthe$ = DateTime.prototype.addMilliseconds_14dthe$;
  UtcDateTime.prototype.addMilliseconds_s8cxhz$ = DateTime.prototype.addMilliseconds_s8cxhz$;
  UtcDateTime.prototype.plus_5t6mhc$ = DateTime.prototype.plus_5t6mhc$;
  UtcDateTime.prototype.minus_5t6mhc$ = DateTime.prototype.minus_5t6mhc$;
  KLOCK_VERSION = '0.2.1';
  MILLIS_PER_SECOND = 1000;
  MILLIS_PER_MINUTE = MILLIS_PER_SECOND * 60 | 0;
  MILLIS_PER_HOUR = MILLIS_PER_MINUTE * 60 | 0;
  MILLIS_PER_DAY = MILLIS_PER_HOUR * 24 | 0;
  DAYS_PER_YEAR = 365;
  DAYS_PER_4_YEARS = (DAYS_PER_YEAR * 4 | 0) + 1 | 0;
  DAYS_PER_100_YEARS = (DAYS_PER_4_YEARS * 25 | 0) - 1 | 0;
  DAYS_PER_400_YEARS = (DAYS_PER_100_YEARS * 4 | 0) + 1 | 0;
  formatRegex = Regex('%([-]?\\d+)?(\\w)');
  DIGITS_UPPER = '0123456789ABCDEF';
  Kotlin.defineModule('klock-js', _);
  return _;
}));

//# sourceMappingURL=klock-js.js.map
