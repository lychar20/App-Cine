const questions = [
    {
        question: "Qui a écrit 'Harry Potter' ?",
        options: ["J.K. Rowling", "Tolkien", "C.S. Lewis", "Roald Dahl"],
        correct_answer: "J.K. Rowling"
    },
    {
        question: "Dans quel livre voit-on un enfant nommé Holden Caulfield ?",
        options: ["L'Attrape-cœurs", "Le Grand Meaulnes", "Le Jeune Werther", "Franny et Zooey"],
        correct_answer: "L'Attrape-cœurs"
    },
    {
        question: "Qui a écrit '1984' ?",
        options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Philip K. Dick"],
        correct_answer: "George Orwell"
    },
    {
        question: "Dans quel roman voit-on des personnages voyager dans le temps à bord d'une machine ?",
        options: ["La Machine à explorer le temps", "Le Voyage au centre de la Terre", "Vingt mille lieues sous les mers", "De la Terre à la Lune"],
        correct_answer: "La Machine à explorer le temps"
    },
    {
        question: "Qui a écrit 'Le Petit Prince' ?",
        options: ["Antoine de Saint-Exupéry", "Jules Verne", "Victor Hugo", "Albert Camus"],
        correct_answer: "Antoine de Saint-Exupéry"
    },
    {
        question: "Dans quelle série de romans un hobbit nommé Frodo porte-t-il un anneau maléfique ?",
        options: ["Le Seigneur des Anneaux", "Le Hobbit", "Les Chroniques de Narnia", "Eragon"],
        correct_answer: "Le Seigneur des Anneaux"
    },
    {
        question: "Qui a écrit 'Madame Bovary' ?",
        options: ["Gustave Flaubert", "Victor Hugo", "Émile Zola", "Stendhal"],
        correct_answer: "Gustave Flaubert"
    },
    {
        question: "Quel roman de Dumas raconte l'histoire d'Edmond Dantès ?",
        options: ["Le Comte de Monte-Cristo", "Les Trois Mousquetaires", "Vingt ans après", "Le Vicomte de Bragelonne"],
        correct_answer: "Le Comte de Monte-Cristo"
    },
    {
        question: "Qui a écrit 'Germinal' ?",
        options: ["Émile Zola", "Victor Hugo", "Gustave Flaubert", "Guy de Maupassant"],
        correct_answer: "Émile Zola"
    },
    {
        question: "Dans quel roman voit-on un baleinier chassant une baleine blanche ?",
        options: ["Moby Dick", "L'Île au trésor", "Robinson Crusoé", "Le Vieux Homme et la Mer"],
        correct_answer: "Moby Dick"
    },
    {
        question: "Qui a écrit 'L'Étranger' ?",
        options: ["Albert Camus", "Jean-Paul Sartre", "Simone de Beauvoir", "André Gide"],
        correct_answer: "Albert Camus"
    },
    {
        question: "Dans quelle série de livres voit-on un enfant nommé Artemis Fowl ?",
        options: ["Artemis Fowl", "Percy Jackson", "Les Chroniques de Narnia", "Eragon"],
        correct_answer: "Artemis Fowl"
    },
    {
        question: "Qui a écrit 'Don Quichotte' ?",
        options: ["Miguel de Cervantes", "Lope de Vega", "Francisco de Quevedo", "Calderón de la Barca"],
        correct_answer: "Miguel de Cervantes"
    },
    {
        question: "Dans quel roman de Jules Verne voyage-t-on sous les mers ?",
        options: ["Vingt mille lieues sous les mers", "Voyage au centre de la Terre", "De la Terre à la Lune", "L'Île mystérieuse"],
        correct_answer: "Vingt mille lieues sous les mers"
    },
    {
        question: "Qui a écrit 'Crime et Châtiment' ?",
        options: ["Fiodor Dostoïevski", "Léon Tolstoï", "Ivan Tourgueniev", "Anton Tchekhov"],
        correct_answer: "Fiodor Dostoïevski"
    },
    {
        question: "Dans quel roman d'Orwell des animaux dirigent une ferme ?",
        options: ["La Ferme des animaux", "1984", "Le Meurtre de Roger Ackroyd", "Brave New World"],
        correct_answer: "La Ferme des animaux"
    },
    {
        question: "Qui a écrit 'Dracula' ?",
        options: ["Bram Stoker", "Mary Shelley", "Edgar Allan Poe", "Arthur Conan Doyle"],
        correct_answer: "Bram Stoker"
    },
    {
        question: "Dans quelle série de Percy Jackson l'auteur est-il ?",
        options: ["Rick Riordan", "J.K. Rowling", "Suzanne Collins", "Christopher Paolini"],
        correct_answer: "Rick Riordan"
    },
    {
        question: "Qui a écrit 'Les Fleurs du Mal' ?",
        options: ["Charles Baudelaire", "Arthur Rimbaud", "Paul Verlaine", "Stéphane Mallarmé"],
        correct_answer: "Charles Baudelaire"
    },
    {
        question: "Dans quel roman voit-on un scientifique créer un monstre à partir de morceaux de cadavres ?",
        options: ["Frankenstein", "Dracula", "L'Île du Docteur Moreau", "Dr Jekyll et Mr Hyde"],
        correct_answer: "Frankenstein"
    },
    {
        question: "Qui a écrit 'Les Misérables' ?",
        options: ["Victor Hugo", "Alexandre Dumas", "Gustave Flaubert", "Émile Zola"],
        correct_answer: "Victor Hugo"
    },
    {
        question: "Dans quelle saga des adolescents combattent dans un jeu de survie télévisé ?",
        options: ["Hunger Games", "Divergente", "Le Labyrinthe", "La Sélection"],
        correct_answer: "Hunger Games"
    },
    {
        question: "Qui a écrit 'L'Alchimiste' ?",
        options: ["Paulo Coelho", "Gabriel García Márquez", "Jorge Luis Borges", "Mario Vargas Llosa"],
        correct_answer: "Paulo Coelho"
    },
    {
        question: "Dans quel roman Sherlock Holmes apparaît-il pour la première fois ?",
        options: ["Une étude en rouge", "Le Chien des Baskerville", "Le Signe des Quatre", "Les Aventures de Sherlock Holmes"],
        correct_answer: "Une étude en rouge"
    },
    {
        question: "Qui a écrit 'Cent ans de solitude' ?",
        options: ["Gabriel García Márquez", "Pablo Neruda", "Jorge Luis Borges", "Mario Vargas Llosa"],
        correct_answer: "Gabriel García Márquez"
    },
    {
        question: "Dans quel roman d'Huxley une société parfaite contrôle les individus par le plaisir ?",
        options: ["Le Meilleur des Mondes", "1984", "Fahrenheit 451", "We"],
        correct_answer: "Le Meilleur des Mondes"
    },
    {
        question: "Qui a écrit 'Le Rouge et le Noir' ?",
        options: ["Stendhal", "Balzac", "Flaubert", "Zola"],
        correct_answer: "Stendhal"
    },
    {
        question: "Dans quel roman un jeune orphelin découvre qu'il est sorcier à 11 ans ?",
        options: ["Harry Potter à l'École des Sorciers", "Les Chroniques de Narnia", "Eragon", "Percy Jackson"],
        correct_answer: "Harry Potter à l'École des Sorciers"
    },
    {
        question: "Qui a écrit 'L'Odyssée' ?",
        options: ["Homère", "Virgile", "Sophocle", "Euripide"],
        correct_answer: "Homère"
    },
    {
        question: "Dans quel roman de Kafka un homme se réveille transformé en insecte ?",
        options: ["La Métamorphose", "Le Procès", "Le Château", "Amerika"],
        correct_answer: "La Métamorphose"
    }
];

export default questions;
