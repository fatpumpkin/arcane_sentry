// Toggle main page
// Works by checking if the button is at true/false then splits or reassemble the image

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

// This is the randomizer! 
// It works by selecting an array, rolling a random element from this array and sending it back to the DOM. 
// The specialisation selection depends on the random class selection

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
    if (cclass == 'Wizard') {
        specialisation = ['Scribe', 'Arcanist', 'Summoner', 'Pyromancer', 'Cryomancer']
    }
    if (cclass == 'Paladin') {
        specialisation = ['Crusader', 'Divine Guardian', 'Oathbound', 'Holy Tactician']
    }
    if (cclass == 'Necromancer') {
        specialisation = ['Necrolord', 'Soul Stitcher', 'Keeper of Souls', 'Plague Spreader']
    }
    if (cclass == 'Fighter') {
        specialisation = ['Champion', 'Weapon Master', 'Duelist', 'Eldritch Warrior', 'Samurai', 'Cavalier']
    }
    if (cclass == 'Rogue') {
        specialisation = ['Assassin', 'Scout', 'Swashbuckler', 'Thief', 'Arcane Trickster']
    }
    cspecialisation = specialisation[Math.floor(Math.random() * specialisation.length)];
    $("#result").html("<p>" + cname + "</p> <p>" + crace + "</p> <p>" + cclass + "</p> <p>" + cspecialisation + "</p>")
}
