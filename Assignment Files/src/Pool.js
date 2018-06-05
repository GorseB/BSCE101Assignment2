// a pool takes in a name, and when .ToString() it returns Pool : "name"
class Pool {
    constructor(new_Name = ""){
        this.name = new_Name;
    }
    toString()
    {
        return `Pool : ${this.name}`;
    }
}