// Alright so this is the sports class, it holds matches, teams and pools. and does stuff with them.
class Sport {
    // A sport needs a name and a venue, and also has an array with all of its matches,teams and pools inside it.
    constructor(new_Name = "", new_Venue = "") {
        this.name = new_Name;
        this.venue = new_Venue;
        this.all_My_Matches = [];
        this.all_My_Teams = [];
        this.all_My_Pools = [];
    }
    // if the user wants to get a string from sport, then return this.
    toString() {
        return `Sport Name : ${this.name}${View.TAB()}Sport Venue : ${this.venue}`;
    }
    // these two methods just sort theyre respective arrays, its good to keep all the functions that change sport INSIDE sport so that they are contained.
    teams_To_ABC() {
        this.all_My_Teams.sort();
    }
    pools_To_ABC() {
        this.all_My_Pools.sort();
    }
    // create a variable called output (string) then sort the all_My_Pools array, then for each index in that array, add it to output, then for each index in my teams, if the team pool is the same
    // as the pool we are iterating through, then add that team to output also. (with some string editing.)

    // in the end we should get something like Pool A, Team 1 , Team 2, Team 3, Pool B, Team 4 , Team 5 .... etc.
    getPools() {
        let output = "";
        this.pools_To_ABC();
        for (const index in this.all_My_Pools) {
            output += View.NEWLINE() + this.all_My_Pools[index].toString() + ` -- ${View.NEWLINE()}${View.NEWLINE()}`;
            for (let i = 0; i < this.all_My_Teams.length; i++) {
                if (this.all_My_Teams[i].pool.name == this.all_My_Pools[index].name) {
                    output += this.all_My_Teams[i].toString() + View.NEWLINE();
                }

            }
        }
        return output;

    }

    // for each index in pools, add that to the output, then for each index of match, add that to the output.
    getMatches() {
        let output = "";
        // Why was this here VVV????
        //for (const index in this.all_My_Pools) {
        //output += View.NEWLINE() + this.all_My_Pools[index].toString() + ` -- ${View.NEWLINE()}${View.NEWLINE()}`;
        for (let i = 0; i < this.all_My_Matches.length; i++) {
            output += this.all_My_Matches[i].toString() + View.NEWLINE();

        }
        //}
        return output
    }

    // Whoops i didnt read one of the questions properly ^^ explains that code
    //"Write a getMatches method that for each Sport, and then for each Pool lists details for each match."
    getMatchesSortPools() {
        let output = "";
        this.pools_To_ABC();
        for (const index in this.all_My_Pools) {
            output += View.NEWLINE() + this.all_My_Pools[index].toString() + ` -- ${View.NEWLINE()}${View.NEWLINE()}`;
            for (let i = 0; i < this.all_My_Matches.length; i++) {
                // this if statement was what was missing.....
                if (this.all_My_Matches[i].pool.name == this.all_My_Pools[index].name) {
                    output += this.all_My_Matches[i].toString() + View.NEWLINE();

                }
            }
        }
        return output
    }
    // sort our teams and then for each team, add it to the output.
    getTeams() {
        let output = "";
        this.teams_To_ABC();
        for (let i2 = 0; i2 < this.all_My_Teams.length; i2++) {
            output += (this.all_My_Teams[i2].toString() + View.NEWLINE());
        }
        return output;
    }
    // for each match, and then if one of the matches teams has a name of New Zealand, then add it to the output.
    getMatchesNZ() {
        let output = "";
        for (let i = 0; i < this.all_My_Matches.length; i++) {
            if (this.all_My_Matches[i].team_1.name == `New Zealand` || this.all_My_Matches[i].team_2.name == `New Zealand`) {
                output += this.all_My_Matches[i].toString() + View.NEWLINE();
            }
        }
        return output
    }
    // takes in heaps of data and then do stuff with it.
    addMatch(new_Year = 0, new_Month = 0, new_Day = 0, new_Hour24 = 0, new_Minute = 0, new_Pool = "", new_Team_1 = "", new_Team_2 = "") {
        let year = new_Year;
        let month = new_Month;
        let day = new_Day;
        let hour24 = new_Hour24;
        let minute = new_Minute;
        // all that data we just took, put it into an object called a Date.
        let date = new Date(year, month, day, hour24, minute);
        let pool_parse = new_Pool;
        // create a pool object from the name we gave you.
        let pool = this.addAPool(pool_parse);
        let team_1 = new_Team_1;
        let team_2 = new_Team_2;
        // run a function called addTeamAndPool and then put whatever it gives back into an object.
        let twoTeams = this.addTeamAndPool(team_1, team_2, pool);
        // create a match from our finished product.
        var new_Match = new Match(date, pool, twoTeams[0], twoTeams[1]);
        // add that match to our list of matches.
        this.all_My_Matches.push(new_Match);
    }
    // so this function takes in a string, and then creates a pool from that string
    addAPool(pool_parse) {
        var pool = new Pool(pool_parse);
        // if our list of pools is 0, then add this new pool into it
        if (this.all_My_Pools.length == 0) {
            this.all_My_Pools.push(pool);
        }
        // otherwise for each index in pools, if that index.name is equal to the pool we just made, break, otherwise if we are at the end of the list
        // then add it to our list of pools. (so that our list of pools will be unqiue)
        else
            for (const i2 in this.all_My_Pools) {
                if (this.all_My_Pools[i2].name == pool.name) {
                    break;
                } else if (this.all_My_Pools[this.all_My_Pools.length - 1] == this.all_My_Pools[i2]) {
                    this.all_My_Pools.push(pool);
                }
            }
        // then return the pool we just made.
        return pool;
    }
    // takes in two team names and a pool object
    addTeamAndPool(new_T1Name, new_T2Name, new_Pool) {
        let t1_Name = new_T1Name;
        let t2_Name = new_T2Name;
        let pool = new_Pool;
        let output = [];
        // create team objects from our team names
        var new_Team_1 = new Team(t1_Name, pool, this.name);
        var new_Team_2 = new Team(t2_Name, pool, this.name);
        // add those to our output array
        output.push(new_Team_1);
        output.push(new_Team_2);
        // if the length of our teams list is 0 then push our teams to our list
        if (this.all_My_Teams.length == 0) {
            this.all_My_Teams.push(new_Team_1)
            this.all_My_Teams.push(new_Team_2)
        }
        // otherwise for each index in our teams list, if that index is equal to either of our team names then break
        else
            for (const index in this.all_My_Teams) {
                if (this.all_My_Teams[index].name == new_Team_1.name || this.all_My_Teams[index].name == new_Team_2.name) {
                    break;
                } else if (this.all_My_Teams[this.all_My_Teams.length - 1] == this.all_My_Teams[index]) {
                    // otherwise if we are at the end of our list then push our teams to our list of teams.
                    this.all_My_Teams.push(new_Team_1)
                    this.all_My_Teams.push(new_Team_2)
                }
            }
        // always return the two teams we made
        return output;
    }
}