const questions = [
    {
        question: "Qui est le premier président des États-Unis ?",
        options: ["George Washington", "John Adams", "Thomas Jefferson", "Abraham Lincoln"],
        correct_answer: "George Washington"
    },
    {
        question: "En quelle année a été fondée l'Union Européenne (traité de Maastricht) ?",
        options: ["1992", "1957", "1986", "2004"],
        correct_answer: "1992"
    },
    {
        question: "Qui est le président français élu en 2017 ?",
        options: ["Emmanuel Macron", "François Hollande", "Nicolas Sarkozy", "Marine Le Pen"],
        correct_answer: "Emmanuel Macron"
    },
    {
        question: "Quel mur séparait Berlin-Est et Berlin-Ouest ?",
        options: ["Le Mur de Berlin", "Le Rideau de Fer", "La Muraille", "Le Mur de la Honte"],
        correct_answer: "Le Mur de Berlin"
    },
    {
        question: "Quel pays a le plus grand nombre de membres au Parlement mondial (ONU) ?",
        options: ["L'ONU a 193 membres", "150 membres", "200 membres", "175 membres"],
        correct_answer: "L'ONU a 193 membres"
    },
    {
        question: "Qui était le Premier ministre britannique pendant la Seconde Guerre mondiale ?",
        options: ["Winston Churchill", "Neville Chamberlain", "Clement Attlee", "Anthony Eden"],
        correct_answer: "Winston Churchill"
    },
    {
        question: "Dans quel pays se trouve le Parlement européen (séance plénière) ?",
        options: ["France (Strasbourg)", "Belgique (Bruxelles)", "Luxembourg", "Allemagne (Berlin)"],
        correct_answer: "France (Strasbourg)"
    },
    {
        question: "Qui a été le premier secrétaire général de l'ONU ?",
        options: ["Trygve Lie", "Dag Hammarskjöld", "U Thant", "Kurt Waldheim"],
        correct_answer: "Trygve Lie"
    },
    {
        question: "Quelle est la date de la chute du Mur de Berlin ?",
        options: ["9 novembre 1989", "3 octobre 1990", "13 août 1961", "1er mai 1990"],
        correct_answer: "9 novembre 1989"
    },
    {
        question: "Qui a reçu le prix Nobel de la Paix en 1964 ?",
        options: ["Martin Luther King Jr.", "Nelson Mandela", "Gandhi", "Mère Teresa"],
        correct_answer: "Martin Luther King Jr."
    },
    {
        question: "Quel pays a le régime politique appelé 'monarchie constitutionnelle' parmi ces choix ?",
        options: ["Royaume-Uni", "France", "Allemagne", "États-Unis"],
        correct_answer: "Royaume-Uni"
    },
    {
        question: "En quelle année l'apartheid a-t-il officiellement pris fin en Afrique du Sud ?",
        options: ["1994", "1990", "1980", "2000"],
        correct_answer: "1994"
    },
    {
        question: "Qui était le chef de l'URSS pendant la Seconde Guerre mondiale ?",
        options: ["Staline", "Lénine", "Khrouchtchev", "Brejnev"],
        correct_answer: "Staline"
    },
    {
        question: "Dans quel pays se trouve le gouvernement de l'Union Africaine ?",
        options: ["Éthiopie (Addis-Abeba)", "Afrique du Sud", "Nigéria", "Kenya"],
        correct_answer: "Éthiopie (Addis-Abeba)"
    },
    {
        question: "Quel président américain a lancé le programme 'New Deal' ?",
        options: ["Franklin D. Roosevelt", "Harry Truman", "Woodrow Wilson", "Herbert Hoover"],
        correct_answer: "Franklin D. Roosevelt"
    },
    {
        question: "Quelle révolution a renversé le tsar Nicolas II en 1917 ?",
        options: ["La Révolution russe", "La Révolution bolchevique", "La Révolution d'Octobre", "Toutes ces réponses"],
        correct_answer: "Toutes ces réponses"
    },
    {
        question: "Qui a fondé le Parti nazi en Allemagne ?",
        options: ["Adolf Hitler", "Heinrich Himmler", "Hermann Göring", "Joseph Goebbels"],
        correct_answer: "Adolf Hitler"
    },
    {
        question: "Quel est le nom du système politique où le pouvoir appartient au peuple ?",
        options: ["Démocratie", "Monarchie", "Oligarchie", "Théocratie"],
        correct_answer: "Démocratie"
    },
    {
        question: "Dans quelle ville se trouve le siège de l'OTAN ?",
        options: ["Bruxelles", "Paris", "Washington", "Londres"],
        correct_answer: "Bruxelles"
    },
    {
        question: "Qui a été le premier président noir des États-Unis ?",
        options: ["Barack Obama", "Colin Powell", "Jesse Jackson", "Al Sharpton"],
        correct_answer: "Barack Obama"
    },
    {
        question: "Quelle organisation internationale veille au maintien de la paix mondiale ?",
        options: ["L'ONU", "L'OTAN", "L'UE", "Le G20"],
        correct_answer: "L'ONU"
    },
    {
        question: "En quelle année la France a-t-elle adopté sa Constitution actuelle (Ve République) ?",
        options: ["1958", "1945", "1962", "1968"],
        correct_answer: "1958"
    },
    {
        question: "Qui est Nelson Mandela ?",
        options: ["Premier président noir d'Afrique du Sud", "Président du Nigeria", "Leader de l'ANC et président zimbabwéen", "Révolutionnaire cubain"],
        correct_answer: "Premier président noir d'Afrique du Sud"
    },
    {
        question: "Dans quel pays se trouve le Kremlin ?",
        options: ["Russie", "Ukraine", "Biélorussie", "Kazakhstan"],
        correct_answer: "Russie"
    },
    {
        question: "Quel accord international vise à lutter contre le changement climatique (2015) ?",
        options: ["L'Accord de Paris", "Le Protocole de Kyoto", "L'Accord de Copenhague", "Le Traité de Lisbonne"],
        correct_answer: "L'Accord de Paris"
    },
    {
        question: "Qui est le fondateur de la République populaire de Chine ?",
        options: ["Mao Zedong", "Deng Xiaoping", "Zhou Enlai", "Chiang Kai-shek"],
        correct_answer: "Mao Zedong"
    },
    {
        question: "Quel pays a quitté l'Union Européenne en 2020 ?",
        options: ["Royaume-Uni", "Suisse", "Norvège", "Islande"],
        correct_answer: "Royaume-Uni"
    },
    {
        question: "Qui est le chancelier allemand qui a reunifié l'Allemagne ?",
        options: ["Helmut Kohl", "Gerhard Schröder", "Willy Brandt", "Konrad Adenauer"],
        correct_answer: "Helmut Kohl"
    },
    {
        question: "Quelle est la devise de la France ?",
        options: ["Liberté, Égalité, Fraternité", "Dieu et Mon Droit", "E Pluribus Unum", "In God We Trust"],
        correct_answer: "Liberté, Égalité, Fraternité"
    },
    {
        question: "Dans quel pays se trouve la Cour Pénale Internationale ?",
        options: ["Pays-Bas (La Haye)", "Belgique (Bruxelles)", "France (Strasbourg)", "Suisse (Genève)"],
        correct_answer: "Pays-Bas (La Haye)"
    }
];

export default questions;
