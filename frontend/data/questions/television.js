const questions = [
    {
        question: "Dans quelle série télévisée joue le personnage de Walter White ?",
        options: ["Breaking Bad", "Better Call Saul", "Ozark", "Narcos"],
        correct_answer: "Breaking Bad"
    },
    {
        question: "Dans quelle série voit-on des personnages bloqués sur une île mystérieuse ?",
        options: ["Lost", "Survivor", "The Island", "Cast Away"],
        correct_answer: "Lost"
    },
    {
        question: "Quelle série Netflix raconte l'histoire d'une maison de papier pendant un braquage ?",
        options: ["La Casa de Papel", "Narcos", "Ozark", "Lupin"],
        correct_answer: "La Casa de Papel"
    },
    {
        question: "Dans 'Friends', quel est le prénom de la sœur de Ross ?",
        options: ["Monica", "Rachel", "Phoebe", "Sandra"],
        correct_answer: "Monica"
    },
    {
        question: "Quelle série HBO se déroule dans des royaumes fantastiques avec des dragons ?",
        options: ["Game of Thrones", "The Witcher", "His Dark Materials", "Westworld"],
        correct_answer: "Game of Thrones"
    },
    {
        question: "Dans quelle série télévisée joue le personnage de Sherlock Holmes interprété par Benedict Cumberbatch ?",
        options: ["Sherlock", "Elementary", "Agatha Christie", "Poirot"],
        correct_answer: "Sherlock"
    },
    {
        question: "Quel est le nom du médecin légiste dans la série 'Dexter' ?",
        options: ["Dexter Morgan", "Dexter Holland", "Dexter Russell", "Dexter Wilson"],
        correct_answer: "Dexter Morgan"
    },
    {
        question: "Dans quelle série française joue Omar Sy en tant que cambrioleur inspiré d'Arsène Lupin ?",
        options: ["Lupin", "Le Bureau des Légendes", "Engrenages", "Baron Noir"],
        correct_answer: "Lupin"
    },
    {
        question: "Dans 'The Office', dans quelle ville se trouve le bureau de Dunder Mifflin ?",
        options: ["Scranton", "Stamford", "New York", "Harrisburg"],
        correct_answer: "Scranton"
    },
    {
        question: "Quelle série coréenne sur Netflix a connu un succès mondial en 2021 ?",
        options: ["Squid Game", "Kingdom", "Hellbound", "Sweet Home"],
        correct_answer: "Squid Game"
    },
    {
        question: "Dans 'Stranger Things', dans quelle ville américaine se déroule la série ?",
        options: ["Hawkins", "Springfield", "Riverdale", "Sunnydale"],
        correct_answer: "Hawkins"
    },
    {
        question: "Quel personnage porte le surnom 'The One Who Knocks' dans Breaking Bad ?",
        options: ["Walter White", "Jesse Pinkman", "Gustavo Fring", "Hank Schrader"],
        correct_answer: "Walter White"
    },
    {
        question: "Dans quelle série télévisée voit-on le personnage de Tony Soprano ?",
        options: ["Les Soprano", "Boardwalk Empire", "The Wire", "Lilyhammer"],
        correct_answer: "Les Soprano"
    },
    {
        question: "Quelle série Amazon Prime raconte l'histoire de super-héros corrompus ?",
        options: ["The Boys", "Invincible", "Umbrella Academy", "Jupiter's Legacy"],
        correct_answer: "The Boys"
    },
    {
        question: "Dans 'How I Met Your Mother', quel est le prénom du narrateur ?",
        options: ["Ted", "Marshall", "Barney", "Robin"],
        correct_answer: "Ted"
    },
    {
        question: "Quelle série française parle d'un agent de la DGSE en mission ?",
        options: ["Le Bureau des Légendes", "Lupin", "Engrenages", "Section Zéro"],
        correct_answer: "Le Bureau des Légendes"
    },
    {
        question: "Dans quel État américain se déroule la série 'Dexter' ?",
        options: ["Floride", "Californie", "New York", "Texas"],
        correct_answer: "Floride"
    },
    {
        question: "Quelle série HBO montre la vie dans une prison pour femmes ?",
        options: ["Orange Is the New Black", "Wentworth", "Bad Girls", "Oz"],
        correct_answer: "Orange Is the New Black"
    },
    {
        question: "Dans 'Grey's Anatomy', dans quel hôpital travaille Meredith Grey ?",
        options: ["Seattle Grace", "County General", "Sacred Heart", "Princeton-Plainsboro"],
        correct_answer: "Seattle Grace"
    },
    {
        question: "Quel acteur joue le rôle de Jon Snow dans 'Game of Thrones' ?",
        options: ["Kit Harington", "Richard Madden", "Nikolaj Coster-Waldau", "Peter Dinklage"],
        correct_answer: "Kit Harington"
    },
    {
        question: "Dans quelle série voit-on des enfants avec des pouvoirs surnaturels dans les années 80 ?",
        options: ["Stranger Things", "Dark", "The OA", "Manifest"],
        correct_answer: "Stranger Things"
    },
    {
        question: "Quelle série espagnole parle d'un groupe de braqueurs portant des masques de Dali ?",
        options: ["La Casa de Papel", "Elite", "Gran Hotel", "Velvet"],
        correct_answer: "La Casa de Papel"
    },
    {
        question: "Dans 'Breaking Bad', dans quel État américain se déroule la série ?",
        options: ["Nouveau-Mexique", "Arizona", "Texas", "Nevada"],
        correct_answer: "Nouveau-Mexique"
    },
    {
        question: "Quel personnage de 'Friends' est obsédé par la propreté ?",
        options: ["Monica", "Rachel", "Phoebe", "Ross"],
        correct_answer: "Monica"
    },
    {
        question: "Dans quelle série HBO des robots humanoïdes prennent conscience d'eux-mêmes ?",
        options: ["Westworld", "Humans", "Altered Carbon", "Person of Interest"],
        correct_answer: "Westworld"
    },
    {
        question: "Quel est le nom de l'antihéros de la série 'Dexter' de son métier officiel ?",
        options: ["Analyste en criminalistique", "Détective", "Médecin légiste", "Agent du FBI"],
        correct_answer: "Analyste en criminalistique"
    },
    {
        question: "Quelle série Netflix parle d'une école d'élite en Espagne avec des meurtres ?",
        options: ["Elite", "La Casa de Papel", "Grand Hotel", "Cable Girls"],
        correct_answer: "Elite"
    },
    {
        question: "Dans 'The Crown', quelle famille royale est représentée ?",
        options: ["La famille royale britannique", "La famille royale suédoise", "La famille royale belge", "La famille royale danoise"],
        correct_answer: "La famille royale britannique"
    },
    {
        question: "Quel personnage de 'Game of Thrones' dit 'Winter is Coming' ?",
        options: ["Ned Stark", "Jon Snow", "Robb Stark", "Bran Stark"],
        correct_answer: "Ned Stark"
    },
    {
        question: "Dans quelle série Netflix un adolescent reçoit une cassette d'une camarade décédée ?",
        options: ["13 Reasons Why", "YOU", "Riverdale", "Pretty Little Liars"],
        correct_answer: "13 Reasons Why"
    }
];

export default questions;
