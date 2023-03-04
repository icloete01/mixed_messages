//Mixed Messages generator program. Creates random messages when run.

string1 = ['You are a','Why must you be a','Every time I look at you I see a'];
string2 = ['zombie','beautiful being','animal','crazy person'];
string3 = ['from the planet mars','from the planet earth','from the farm','from the asylum'];

string1random = Math.floor(Math.random() * string1.length);
string2random = Math.floor(Math.random() * string2.length);
string3random = Math.floor(Math.random() * string3.length);

console.log(string1[string1random]+" "+string2[string2random]+" "+string3[string3random]+".");