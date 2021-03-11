let e = true;
function togglesection() {
    if (e == true) {
        document.getElementById("toggle").style.display = "block";
        document.getElementById("explore").innerHTML = "Abandon";
        document.getElementById("bas").style.top = "1122px";
        e = false;
    }
    else if (e == false) {
        document.getElementById("toggle").style.display = "none";
        document.getElementById("explore").innerHTML = "Start exploring";
        document.getElementById("bas").style.top = "622px";
        e = true;
    }
}

let charactername = ["Meredith", "Robert", "Kirael", "Jean", "Johnny", "Kathleen", "Aria", "Alberto", "Antonio", "Eralaya"];
let characterclass = ["Wizard", "Paladin", "Necromancer", "Fighter", "Rogue"];
let race = ["Human", "Orc", "Elf", "Dwarf", "Tiefling"];
let specialisation = [];
let cname = "";
let cclass = "";
let crace = "";


function randomizer() {
    cname = charactername[Math.floor(Math.random() * charactername.length)];
    cclass = characterclass[Math.floor(Math.random() * characterclass.length)];
    crace = race[Math.floor(Math.random() * race.length)];
    $("#result").html("<p>" + cname + "</p> <p>" + crace + "</p> <p>" + cclass + "</p>")
}
