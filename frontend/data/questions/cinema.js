const questions = [
    {
        question: "Quel film a remporté l'Oscar du meilleur film en 1994 ?",
        options: ["Forrest Gump", "Pulp Fiction", "Le Roi Lion", "Speed"],
        correct_answer: "Forrest Gump"
    },
    {
        question: "Qui a réalisé le film 'Inception' (2010) ?",
        options: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Ridley Scott"],
        correct_answer: "Christopher Nolan"
    },
    {
        question: "Dans quel film entend-on la réplique 'Je suis le roi du monde !' ?",
        options: ["Titanic", "Avatar", "Gladiator", "Braveheart"],
        correct_answer: "Titanic"
    },
    {
        question: "Quel acteur joue le personnage de Jack Sparrow dans 'Pirates des Caraïbes' ?",
        options: ["Johnny Depp", "Orlando Bloom", "Brad Pitt", "Tom Cruise"],
        correct_answer: "Johnny Depp"
    },
    {
        question: "En quelle année est sorti le premier film 'Star Wars' ?",
        options: ["1977", "1980", "1975", "1982"],
        correct_answer: "1977"
    },
    {
        question: "Quel film de Disney met en scène une princesse qui se transforme en grenouille ?",
        options: ["La Princesse et la Grenouille", "Cendrillon", "La Belle et la Bête", "Raiponce"],
        correct_answer: "La Princesse et la Grenouille"
    },
    {
        question: "Qui interprète le personnage d'Iron Man dans les films Marvel ?",
        options: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
        correct_answer: "Robert Downey Jr."
    },
    {
        question: "Dans quel pays se déroule l'histoire du film 'Parasite' (2019) ?",
        options: ["Corée du Sud", "Japon", "Chine", "Thaïlande"],
        correct_answer: "Corée du Sud"
    },
    {
        question: "Quel film de Pixar met en scène un robot qui collecte des déchets sur Terre ?",
        options: ["WALL-E", "Cars", "Ratatouille", "Brave"],
        correct_answer: "WALL-E"
    },
    {
        question: "Quelle actrice joue Hermione Granger dans la saga Harry Potter ?",
        options: ["Emma Watson", "Emma Stone", "Keira Knightley", "Natalie Portman"],
        correct_answer: "Emma Watson"
    },
    {
        question: "Quel réalisateur a créé la saga 'Le Seigneur des Anneaux' ?",
        options: ["Peter Jackson", "James Cameron", "Ridley Scott", "Steven Spielberg"],
        correct_answer: "Peter Jackson"
    },
    {
        question: "Dans quel film joue le personnage de Hannibal Lecter ?",
        options: ["Le Silence des Agneaux", "Seven", "Psychose", "American Psycho"],
        correct_answer: "Le Silence des Agneaux"
    },
    {
        question: "Quel est le film le plus rentable de l'histoire du cinéma (2023) ?",
        options: ["Avatar", "Avengers Endgame", "Titanic", "Top Gun Maverick"],
        correct_answer: "Avatar"
    },
    {
        question: "Dans 'Le Roi Lion', quel est le nom du père de Simba ?",
        options: ["Mufasa", "Scar", "Timon", "Pumba"],
        correct_answer: "Mufasa"
    },
    {
        question: "Quel acteur incarne James Bond dans 'Casino Royale' (2006) ?",
        options: ["Daniel Craig", "Pierce Brosnan", "Sean Connery", "Roger Moore"],
        correct_answer: "Daniel Craig"
    },
    {
        question: "Quel film de Tim Burton met en scène Johnny Depp en coiffeur aux ciseaux ?",
        options: ["Edward aux mains d'argent", "Beetlejuice", "Big Eyes", "Dark Shadows"],
        correct_answer: "Edward aux mains d'argent"
    },
    {
        question: "Quelle actrice joue dans 'Léon' (1994) aux côtés de Jean Reno ?",
        options: ["Natalie Portman", "Jodie Foster", "Uma Thurman", "Winona Ryder"],
        correct_answer: "Natalie Portman"
    },
    {
        question: "Quel film se passe principalement dans un parc à thème avec des dinosaures ?",
        options: ["Jurassic Park", "The Lost World", "Dino Crisis", "Prehistoric Park"],
        correct_answer: "Jurassic Park"
    },
    {
        question: "Qui a réalisé la trilogie 'Retour vers le Futur' ?",
        options: ["Robert Zemeckis", "Steven Spielberg", "Ron Howard", "John Hughes"],
        correct_answer: "Robert Zemeckis"
    },
    {
        question: "Dans 'Matrix', quelle pilule Neo choisit-il ?",
        options: ["La pilule rouge", "La pilule bleue", "La pilule verte", "La pilule blanche"],
        correct_answer: "La pilule rouge"
    },
    {
        question: "Quel film met en scène un comptable qui découvre qu'il est un personnage de fiction ?",
        options: ["Stranger Than Fiction", "The Truman Show", "Being John Malkovich", "Adaptation"],
        correct_answer: "Stranger Than Fiction"
    },
    {
        question: "Quelle comédie française avec Louis de Funès parle d'un gendarme à Saint-Tropez ?",
        options: ["Le Gendarme de Saint-Tropez", "La Grande Vadrouille", "Les Aventures de Rabbi Jacob", "L'Aile ou la Cuisse"],
        correct_answer: "Le Gendarme de Saint-Tropez"
    },
    {
        question: "Quel acteur joue le Joker dans 'The Dark Knight' (2008) ?",
        options: ["Heath Ledger", "Joaquin Phoenix", "Jack Nicholson", "Jared Leto"],
        correct_answer: "Heath Ledger"
    },
    {
        question: "Dans quel film Audrey Hepburn chante-t-elle 'Moon River' ?",
        options: ["Breakfast at Tiffany's", "Sabrina", "Roman Holiday", "Funny Face"],
        correct_answer: "Breakfast at Tiffany's"
    },
    {
        question: "Quel film d'animation Japonais raconte l'histoire d'une jeune fille dans un monde des esprits ?",
        options: ["Le Voyage de Chihiro", "Mon Voisin Totoro", "Princesse Mononoké", "Nausicaä"],
        correct_answer: "Le Voyage de Chihiro"
    },
    {
        question: "Quel acteur joue le rôle de Maximus dans 'Gladiator' ?",
        options: ["Russell Crowe", "Brad Pitt", "Mel Gibson", "Liam Neeson"],
        correct_answer: "Russell Crowe"
    },
    {
        question: "Dans quel film Leonardo DiCaprio joue-t-il un arnaqueur se faisant passer pour un pilote ?",
        options: ["Catch Me If You Can", "The Aviator", "Shutter Island", "Django Unchained"],
        correct_answer: "Catch Me If You Can"
    },
    {
        question: "Quel film de Quentin Tarantino se déroule pendant la Seconde Guerre mondiale ?",
        options: ["Inglourious Basterds", "Django Unchained", "The Hateful Eight", "Pulp Fiction"],
        correct_answer: "Inglourious Basterds"
    },
    {
        question: "Quelle actrice française a joué dans 'Amélie Poulain' ?",
        options: ["Audrey Tautou", "Marion Cotillard", "Juliette Binoche", "Sophie Marceau"],
        correct_answer: "Audrey Tautou"
    },
    {
        question: "Dans quel film Tom Hanks joue-t-il un homme bloqué dans un aéroport ?",
        options: ["Le Terminal", "Cast Away", "Forrest Gump", "Philadelphia"],
        correct_answer: "Le Terminal"
    }
];

export default questions;
