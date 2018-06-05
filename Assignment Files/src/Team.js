// team takes a name, a pool and the name of the sport it belongs to (not the whole sport as that would be a reccurence) and returns its team and pool when asked
class Team {
    constructor(new_Name = "", new_Pool = Pool, new_Sport_Name = "") {
        this.name = new_Name;
        this.pool = new_Pool;
        this.sport_Name = new_Sport_Name;
        // a little thing i put in after making this class, basically it takes 20 minus the length of the name of the team, then creates an array of &nbsp's and then a string of them
        let lengthtmp = 20 - this.name.length;
        this.extraspace = Array(lengthtmp).join(View.SPACE()).toString();
        // adding extraspace when you format the string makes everything look uniform and pretty, which is nice.

    }
    toString() {
        let output = "";
        return `Team : ${this.name + this.extraspace + View.TAB()}Pool : ${this.pool.name}`
    }
}