// match takes in a date, two teams and a pool. and returns those when asked to.
class Match {
    constructor(new_Date = Date, new_Pool = Pool, new_Team_1 = Team, new_Team_2 = Team) {
        this.pool = new_Pool;
        this.team_1 = new_Team_1;
        this.team_2 = new_Team_2;
        this.date = new_Date
    }
    toString() {
        return `Match Date : ${this.date.toDateString() + View.TAB()} Team 1 : ${this.team_1.name + this.team_1.extraspace + View.TAB()} Team 2 : ${this.team_2.name + this.team_2.extraspace} Pool : ${this.pool.name}`;
    }
}