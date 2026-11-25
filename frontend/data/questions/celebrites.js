const questions = [
    {
        question: "Quel est le vrai nom de Coluche ?",
        options: ["Michel Colucci", "Michel Dupont", "Michel Martin", "Michel Bernard"],
        correct_answer: "Michel Colucci"
    },
    {
        question: "Quelle célébrité a fondé la marque 'Fenty Beauty' ?",
        options: ["Rihanna", "Beyoncé", "Kim Kardashian", "Kylie Jenner"],
        correct_answer: "Rihanna"
    },
    {
        question: "Dans quel pays est né Zinédine Zidane ?",
        options: ["France", "Algérie", "Espagne", "Maroc"],
        correct_answer: "France"
    },
    {
        question: "Quel comédien français est connu pour le film 'Intouchables' ?",
        options: ["Omar Sy", "Jamel Debbouze", "Dany Boon", "Gad Elmaleh"],
        correct_answer: "Omar Sy"
    },
    {
        question: "Qui est le fondateur de Tesla et SpaceX ?",
        options: ["Elon Musk", "Jeff Bezos", "Bill Gates", "Steve Jobs"],
        correct_answer: "Elon Musk"
    },
    {
        question: "Quelle actrice a joué dans 'Pretty Woman' (1990) ?",
        options: ["Julia Roberts", "Meg Ryan", "Sandra Bullock", "Demi Moore"],
        correct_answer: "Julia Roberts"
    },
    {
        question: "Quel chanteur français a sorti 'Je vais t'aimer' ?",
        options: ["Michel Sardou", "Claude François", "Johnny Hallyday", "Serge Gainsbourg"],
        correct_answer: "Michel Sardou"
    },
    {
        question: "Qui est le fondateur de Facebook ?",
        options: ["Mark Zuckerberg", "Bill Gates", "Steve Jobs", "Larry Page"],
        correct_answer: "Mark Zuckerberg"
    },
    {
        question: "Quelle célébrité est connue pour son émission 'The Oprah Winfrey Show' ?",
        options: ["Oprah Winfrey", "Ellen DeGeneres", "Barbara Walters", "Tyra Banks"],
        correct_answer: "Oprah Winfrey"
    },
    {
        question: "Quel footballeur argentin a remporté la Coupe du Monde 2022 ?",
        options: ["Lionel Messi", "Sergio Agüero", "Ángel Di María", "Paulo Dybala"],
        correct_answer: "Lionel Messi"
    },
    {
        question: "Quelle est la nationalité de Cristiano Ronaldo ?",
        options: ["Portugaise", "Espagnole", "Brésilienne", "Italienne"],
        correct_answer: "Portugaise"
    },
    {
        question: "Quel comédien est connu pour 'La vérité si je mens' ?",
        options: ["José Garcia", "Gad Elmaleh", "Jamel Debbouze", "Dany Boon"],
        correct_answer: "José Garcia"
    },
    {
        question: "Qui a joué Marilyn Monroe dans le film 'Blonde' (2022) ?",
        options: ["Ana de Armas", "Scarlett Johansson", "Margot Robbie", "Emma Stone"],
        correct_answer: "Ana de Armas"
    },
    {
        question: "Quel chanteur est connu pour 'Thriller' et 'Billie Jean' ?",
        options: ["Michael Jackson", "Prince", "James Brown", "Stevie Wonder"],
        correct_answer: "Michael Jackson"
    },
    {
        question: "Dans quel pays est née Céline Dion ?",
        options: ["Canada", "France", "Belgique", "Suisse"],
        correct_answer: "Canada"
    },
    {
        question: "Qui est le PDG d'Apple depuis 2011 ?",
        options: ["Tim Cook", "Steve Jobs", "Jony Ive", "Craig Federighi"],
        correct_answer: "Tim Cook"
    },
    {
        question: "Quelle actrice a joué Katniss Everdeen dans 'Hunger Games' ?",
        options: ["Jennifer Lawrence", "Emma Watson", "Shailene Woodley", "Kristen Stewart"],
        correct_answer: "Jennifer Lawrence"
    },
    {
        question: "Quel athlète est surnommé 'The Greatest' dans la boxe ?",
        options: ["Muhammad Ali", "Mike Tyson", "Joe Frazier", "Floyd Mayweather"],
        correct_answer: "Muhammad Ali"
    },
    {
        question: "Quelle célébrité est connue pour son empire 'KKW Beauty' et ses réseaux sociaux ?",
        options: ["Kim Kardashian", "Kylie Jenner", "Kendall Jenner", "Khloé Kardashian"],
        correct_answer: "Kim Kardashian"
    },
    {
        question: "Quel chanteur belge est connu pour 'Formidable' ?",
        options: ["Stromae", "Angèle", "Damso", "Romeo Elvis"],
        correct_answer: "Stromae"
    },
    {
        question: "Qui a joué Iron Man dans les films Marvel ?",
        options: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Pratt"],
        correct_answer: "Robert Downey Jr."
    },
    {
        question: "Quelle présentatrice est connue pour l'émission 'Touche pas à mon poste' en France ?",
        options: ["Cyril Hanouna", "Nikos Aliagas", "Arthur", "Laurent Ruquier"],
        correct_answer: "Cyril Hanouna"
    },
    {
        question: "Dans quel pays est né Will Smith ?",
        options: ["États-Unis", "Canada", "Jamaïque", "Royaume-Uni"],
        correct_answer: "États-Unis"
    },
    {
        question: "Quel footballeur est surnommé 'CR7' ?",
        options: ["Cristiano Ronaldo", "Carlos Riquelme", "Carlo Ancelotti", "César Rodríguez"],
        correct_answer: "Cristiano Ronaldo"
    },
    {
        question: "Quelle chanteuse est connue pour l'album '25' et la chanson 'Hello' ?",
        options: ["Adele", "Taylor Swift", "Beyoncé", "Dua Lipa"],
        correct_answer: "Adele"
    },
    {
        question: "Qui est le fondateur d'Amazon ?",
        options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Larry Ellison"],
        correct_answer: "Jeff Bezos"
    },
    {
        question: "Quel acteur français est connu pour jouer dans la saga 'Taxi' ?",
        options: ["Samy Naceri", "Jamel Debbouze", "Omar Sy", "Dany Boon"],
        correct_answer: "Samy Naceri"
    },
    {
        question: "Quelle célébrité a créé la marque 'Skims' ?",
        options: ["Kim Kardashian", "Rihanna", "Kylie Jenner", "Beyoncé"],
        correct_answer: "Kim Kardashian"
    },
    {
        question: "Quel chanteur est connu pour 'Despacito' ?",
        options: ["Luis Fonsi", "Bad Bunny", "J Balvin", "Daddy Yankee"],
        correct_answer: "Luis Fonsi"
    },
    {
        question: "Dans quel pays est né Leonardo DiCaprio ?",
        options: ["États-Unis", "Canada", "Italie", "Australie"],
        correct_answer: "États-Unis"
    }
];

export default questions;
