export default class Countdown{
  constructor(futureDate){
    this.date = futureDate;
  }
  get _actualDate() {
    return new Date();
  }
  get _futureDate(){
    return new Date(this.date);
  }
  get _timeDiff(){
    return this._futureDate.getTime() - this._actualDate.getTime();
  }
  get days(){
    return (this._timeDiff / (24 * 60 * 60 * 1000)).toFixed();
  }
  get hours(){
    return (this._timeDiff / (60 * 60 * 1000)).toFixed();
  }
  get minutes(){
    return (this._timeDiff / (60 * 1000)).toFixed();
  }
  get seconds(){
    return (this._timeDiff / 1000).toFixed();
  }
  get total(){
    const days = this.days;
    const hours = this.hours % 24;
    const minutes = this.minutes % 60;
    const seconds = this.seconds % 60;
    return{
      days,
      hours,
      minutes,
      seconds
    }
  }
}