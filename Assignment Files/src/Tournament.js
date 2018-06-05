// This is the tournament class and the second half of the brain of our program (sport being the other)
// takes in a name and has an array called all_My_Sports
class Tournament {
    constructor(new_Name = "") {
        this.name = new_Name;
        this.all_My_Sports = [];
    }
    // Takes in a name and venue, generates a sport from those values and adds it to our array, also returns it for the controller class.
    addSport(parsed_Name = "", parsed_Venue = "") {
        var name = parsed_Name;
        var venue = parsed_Venue;
        var new_Sport = new Sport(name, venue);
        this.all_My_Sports.push(new_Sport);
        return new_Sport;
    }
    // matches has all the info the tournament has, so if you want everything just take that.
    getAll() {
        return this.get("matches");
    }
    // all a tournament owns is a name and a list of sports, so return that.
    toString() {
        return this.name;

    }
    // The beast lives here, a pretty complex answer to the final question of the assignment "8.	Write a getParticipation method that displays which countries are 
    //playing in all three sports, which countries are playing in which combination of two sports and for each sport the countries that are only playing in that sport."
    // lots of math involved here so lets dig in.
    getParticipation() {
        let output = "";
        var everything = [];
        // create an output string and an array called everything.
        // for each sport, then for each team in each sport. push said team to our everything array
        for (let i = 0; i < this.all_My_Sports.length; i++) {
            for (let i2 = 0; i2 < this.all_My_Sports[i].all_My_Teams.length; i2++) {
                everything.push(this.all_My_Sports[i].all_My_Teams[i2]);
            }


        }
        // so now we have an array that contains every team in every sport in our tournament. yay
        // sort that array, then create some variables, current (string), count (int),temp_sports (string),temp_extraspace (string)
        everything.sort();
        var current = null;
        var count = 0;
        var temp_sports = "";
        var temp_extraspace = "";
        // for each index in our everything list
        for (var i = 0; i < everything.length; i++) {
            // if the index we are on does not equal the current index (this fails the first time round as current is null)
            if (everything[i].name != current) {
                // then if count greater than 0
                if (count > 0) {
                    // you see this block of code later on, its basically string formatting based on wether the string should say "sport" or "sports"
                    // so dont worry too much about it.
                    if (count == 1) {
                        output += (current + temp_extraspace + ' is involved in ' + count + ` Sport ${View.SPACE()}(${temp_sports})` + View.NEWLINE());

                    } else {
                        output += (current + temp_extraspace + ' is involved in ' + count + ` Sports (${temp_sports})` + View.NEWLINE());
                    }
                }
                // so this runs if everything[i] != current, so basically if we've reached a new index in our array that doesn't match the last one
                // we need to set current to the new index, set count to 1 (becuase we've just found something new)
                // and setup our tmp variables that will contain the other info that the team object stores (for string formatting)
                current = everything[i].name;
                count = 1;
                temp_sports = everything[i].sport_Name;
                temp_extraspace = everything[i].extraspace;
            } else {
                // if current does equal whats in our array, then simply increase count by one (we've found another team index) and then add the sport that we've found 
                // into our temp_sports string
                count++;
                temp_sports += " , " + everything[i].sport_Name;
            }
        }
        // so this is after the loop has ended, becuase of the way the loop works we search through the next variable in the list while looking at the last variable
        // so we'll get one team left after we've finished searching, so we need to put that team into output too.

        // a good way to describe it is that there are two seperate people doing this problem, one of them is searching through records and passing the records to the second person
        // the second person is working on the record and giving it to us. the person that searches through the records is gonna finish first (becuase they work at the same speed and he gets to start earlier
        // since he finds the inital record) so the second person needs to get told to work on the record even though the first person has stooped looking (as our for loop is sort of tied to the amount of records
        // we possess and therefore tied to the inital person searching through records)

        // why not do for(everthing.length+1) << well becuase part of the first persons job is tied into that loop statement too, and he cant do is job on a record that doesnt exist, we need to specifically single
        // out the second worker and tell him to do his job again so he can pass it to us.
        if (count > 0) {
            if (count == 1) {
                output += (current + temp_extraspace + ' is involved in ' + count + ` Sport ${View.SPACE()}(${temp_sports})` + View.NEWLINE());

            } else {
                output += (current + temp_extraspace + ' is involved in ' + count + ` Sports (${temp_sports})` + View.NEWLINE());
            }
        }
        return output;
    }
    // get takes in a string input, then parses that to a string and creates an output variable.
    get(new_Input) {
        let input = new_Input;
        let output = "";
        // just include the name of the tournament at the top so we know what we're looking at
        output += View.NEWLINE() + "---" + this.name + "---" + View.NEWLINE()
        // for each sport in our list of sports. add that sport to the output and then do a switch based on our input variable.
        for (let i = 0; i < this.all_My_Sports.length; i++) {
            output += View.NEWLINE() + this.all_My_Sports[i].toString() + " ---" + View.NEWLINE() + View.NEWLINE();
            // the rest is pretty much handled by our sport, as you can see. if they didnt input something we recognise then just let them know.
            switch (input) {
                case "sports":
                    output += this.all_My_Sports[i].toString();
                    break;
                case "matches":
                    output += this.all_My_Sports[i].getMatches();
                    break;
                case "matchesP":
                    output += this.all_My_Sports[i].getMatchesSortPools();
                    break;
                case "matchesNZ":
                    output += this.all_My_Sports[i].getMatchesNZ();
                    break;
                case "teams":
                    output += this.all_My_Sports[i].getTeams();
                    break;
                case "pools":
                    output += this.all_My_Sports[i].getPools();
                    break;
                default:
                    output += "Whoops , I couldn't find what you wanted..."
                    break;
            }
        }
        return output;
    }
}