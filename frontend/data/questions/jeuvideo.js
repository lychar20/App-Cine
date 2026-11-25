const questions = [
    {
        question: "Dans quel jeu incarne-t-on un plombier qui sauve une princesse ?",
        options: ["Super Mario Bros", "Donkey Kong", "Sonic", "Crash Bandicoot"],
        correct_answer: "Super Mario Bros"
    },
    {
        question: "Quel est le nom du protagoniste de la série 'The Legend of Zelda' ?",
        options: ["Link", "Zelda", "Ganon", "Navi"],
        correct_answer: "Link"
    },
    {
        question: "Quelle société a créé la PlayStation ?",
        options: ["Sony", "Nintendo", "Microsoft", "Sega"],
        correct_answer: "Sony"
    },
    {
        question: "Dans quel jeu peut-on construire des maisons et miner des ressources en mode bac à sable ?",
        options: ["Minecraft", "Terraria", "Roblox", "Fortnite"],
        correct_answer: "Minecraft"
    },
    {
        question: "Quel jeu de combat met en scène des personnages de licences variées comme Mario et Pikachu ?",
        options: ["Super Smash Bros", "Street Fighter", "Mortal Kombat", "Tekken"],
        correct_answer: "Super Smash Bros"
    },
    {
        question: "Dans quel jeu incarne-t-on un chasseur de primes dans un monde futuriste ?",
        options: ["Metroid", "Halo", "Doom", "Prey"],
        correct_answer: "Metroid"
    },
    {
        question: "Quelle franchise de jeux de rôle est développée par Square Enix et connue pour ses personnages aux cheveux fous ?",
        options: ["Final Fantasy", "Dragon Quest", "Tales of", "Xenoblade"],
        correct_answer: "Final Fantasy"
    },
    {
        question: "Dans quel jeu en ligne des milliers de joueurs s'affrontent dans un monde médiéval fantastique ?",
        options: ["World of Warcraft", "Guild Wars", "Elder Scrolls Online", "Final Fantasy XIV"],
        correct_answer: "World of Warcraft"
    },
    {
        question: "Quel est le nom du personnage principal de 'Red Dead Redemption 2' ?",
        options: ["Arthur Morgan", "John Marston", "Dutch van der Linde", "Bill Williamson"],
        correct_answer: "Arthur Morgan"
    },
    {
        question: "Dans quel jeu incarne-t-on un Spartiate nommé Kratos ?",
        options: ["God of War", "Assassin's Creed Odyssey", "Hades", "Titan Quest"],
        correct_answer: "God of War"
    },
    {
        question: "Quel jeu battle royale est développé par Epic Games ?",
        options: ["Fortnite", "PUBG", "Apex Legends", "Warzone"],
        correct_answer: "Fortnite"
    },
    {
        question: "Dans quelle ville se déroule 'GTA V' ?",
        options: ["Los Santos", "Liberty City", "Vice City", "San Fierro"],
        correct_answer: "Los Santos"
    },
    {
        question: "Quel Pokémon est le numéro 1 dans le Pokédex national ?",
        options: ["Bulbizarre", "Salamèche", "Carapuce", "Pikachu"],
        correct_answer: "Bulbizarre"
    },
    {
        question: "Quelle console Nintendo utilisait des cartouches en forme de losange ?",
        options: ["Game Boy", "NES", "SNES", "N64"],
        correct_answer: "Game Boy"
    },
    {
        question: "Dans quel jeu incarne-t-on un soldat qui se bat contre des Locuste ?",
        options: ["Gears of War", "Halo", "Call of Duty", "Killzone"],
        correct_answer: "Gears of War"
    },
    {
        question: "Quel personnage emblématique de Sega court plus vite que la lumière ?",
        options: ["Sonic", "Shadow", "Knuckles", "Tails"],
        correct_answer: "Sonic"
    },
    {
        question: "Dans quel jeu peut-on explorer des donjons en solo ou avec des amis et l'appeler 'BG'?",
        options: ["Baldur's Gate", "Divinity", "Pillars of Eternity", "Neverwinter Nights"],
        correct_answer: "Baldur's Gate"
    },
    {
        question: "Quelle société a créé la Xbox ?",
        options: ["Microsoft", "Sony", "Nintendo", "Atari"],
        correct_answer: "Microsoft"
    },
    {
        question: "Dans quel jeu incarne-t-on un assassin dans différentes époques historiques ?",
        options: ["Assassin's Creed", "Hitman", "Dishonored", "Thief"],
        correct_answer: "Assassin's Creed"
    },
    {
        question: "Quel jeu de stratégie en temps réel met en scène des civilisations à travers l'histoire ?",
        options: ["Civilization", "Age of Empires", "Starcraft", "Command & Conquer"],
        correct_answer: "Civilization"
    },
    {
        question: "Dans 'Among Us', quel est le but des imposteurs ?",
        options: ["Éliminer les équipiers", "Saboter le vaisseau", "Voler les ressources", "Pirater les systèmes"],
        correct_answer: "Éliminer les équipiers"
    },
    {
        question: "Quel jeu de sport électronique est organisé sous forme de ligue avec des équipes achetées ?",
        options: ["Overwatch League", "League of Legends", "CS:GO", "Valorant"],
        correct_answer: "Overwatch League"
    },
    {
        question: "Dans quel jeu incarne-t-on un chevalier de lumière appelé 'Hollow Knight' ?",
        options: ["Hollow Knight", "Ori and the Blind Forest", "Shovel Knight", "Celeste"],
        correct_answer: "Hollow Knight"
    },
    {
        question: "Quel est le nom du protagoniste de 'The Witcher 3' ?",
        options: ["Geralt de Riv", "Ciri", "Yennefer", "Triss"],
        correct_answer: "Geralt de Riv"
    },
    {
        question: "Dans quel jeu doit-on survivre contre des zombies avec des ressources limitées ?",
        options: ["The Last of Us", "Resident Evil", "Days Gone", "Dead Island"],
        correct_answer: "The Last of Us"
    },
    {
        question: "Quelle franchise de jeux de course est développée par Nintendo ?",
        options: ["Mario Kart", "F-Zero", "Wave Race", "Diddy Kong Racing"],
        correct_answer: "Mario Kart"
    },
    {
        question: "Dans quel jeu en ligne des équipes de 5 joueurs s'affrontent pour détruire la base adverse ?",
        options: ["League of Legends", "Dota 2", "Heroes of the Storm", "Smite"],
        correct_answer: "League of Legends"
    },
    {
        question: "Quel est le nom du protagoniste de 'Cyberpunk 2077' ?",
        options: ["V", "Johnny Silverhand", "Jackie Welles", "T-Bug"],
        correct_answer: "V"
    },
    {
        question: "Dans quel jeu incarne-t-on un guerrier viking nommé Eivor ?",
        options: ["Assassin's Creed Valhalla", "God of War", "Valheim", "For Honor"],
        correct_answer: "Assassin's Creed Valhalla"
    },
    {
        question: "Quelle console portable Nintendo a été lancée en 2017 ?",
        options: ["Nintendo Switch", "Nintendo 3DS", "Nintendo DS", "Game Boy Advance"],
        correct_answer: "Nintendo Switch"
    }
];

export default questions;
