const questions = [
    {
        question: "Dans quel dessin animé voit-on un enfant avec une queue de singe qui combat des ennemis ?",
        options: ["Dragon Ball Z", "Naruto", "One Piece", "Bleach"],
        correct_answer: "Dragon Ball Z"
    },
    {
        question: "Quel est le nom du détective enfant dans 'Détective Conan' ?",
        options: ["Conan Edogawa", "Shinichi Kudo", "Heiji Hattori", "Kogoro Mouri"],
        correct_answer: "Conan Edogawa"
    },
    {
        question: "Dans quel anime un garçon avec une cicatrice en forme d'éclair combat-il un sorcier ?",
        options: ["Harry Potter", "Fairy Tail", "The Seven Deadly Sins", "Black Clover"],
        correct_answer: "Black Clover"
    },
    {
        question: "Quel studio japonais a créé 'Mon Voisin Totoro' ?",
        options: ["Studio Ghibli", "Toei Animation", "Madhouse", "Sunrise"],
        correct_answer: "Studio Ghibli"
    },
    {
        question: "Dans 'One Piece', quel est le fruit du démon mangé par Luffy ?",
        options: ["Fruit du Gomu Gomu", "Fruit de l'Akuma", "Fruit du Mera Mera", "Fruit du Hie Hie"],
        correct_answer: "Fruit du Gomu Gomu"
    },
    {
        question: "Dans quel anime des titans géants attaquent l'humanité retranchée derrière des murs ?",
        options: ["L'Attaque des Titans", "Kabaneri of the Iron Fortress", "Knights of Sidonia", "Guilty Crown"],
        correct_answer: "L'Attaque des Titans"
    },
    {
        question: "Quel est le nom du personnage principal de 'Naruto' ?",
        options: ["Naruto Uzumaki", "Sasuke Uchiha", "Sakura Haruno", "Kakashi Hatake"],
        correct_answer: "Naruto Uzumaki"
    },
    {
        question: "Dans quel dessin animé américain voit-on une famille jaune avec 5 membres ?",
        options: ["Les Simpson", "Futurama", "Family Guy", "Bob's Burgers"],
        correct_answer: "Les Simpson"
    },
    {
        question: "Quel anime met en scène des chasseurs qui affrontent des monstres dans différents rangs ?",
        options: ["Hunter x Hunter", "Demon Slayer", "My Hero Academia", "Black Clover"],
        correct_answer: "Hunter x Hunter"
    },
    {
        question: "Dans 'Dragon Ball Z', quel est le nom de la planète d'origine de Goku ?",
        options: ["Vegeta", "Namek", "Freezer", "Kaio"],
        correct_answer: "Vegeta"
    },
    {
        question: "Quel anime raconte l'histoire d'un garçon sans pouvoir dans un monde de super-héros ?",
        options: ["My Hero Academia", "One Punch Man", "Tiger & Bunny", "Vigilante"],
        correct_answer: "My Hero Academia"
    },
    {
        question: "Dans quel dessin animé voit-on un éponge jaune qui vit sous la mer ?",
        options: ["Bob l'Éponge", "Nemo", "Les Pingouins de Madagascar", "Octonauts"],
        correct_answer: "Bob l'Éponge"
    },
    {
        question: "Quel anime met en scène des ninjas avec des pouvoirs élémentaires ?",
        options: ["Naruto", "Bleach", "One Piece", "Fairy Tail"],
        correct_answer: "Naruto"
    },
    {
        question: "Dans quel anime un chasseur de démons combat-il des créatures avec une épée à eau ?",
        options: ["Demon Slayer", "Bleach", "Jujutsu Kaisen", "Tokyo Ghoul"],
        correct_answer: "Demon Slayer"
    },
    {
        question: "Quel est le nom du protagoniste de 'Death Note' ?",
        options: ["Light Yagami", "L Lawliet", "Misa Amane", "Near"],
        correct_answer: "Light Yagami"
    },
    {
        question: "Dans 'Pokémon', quel est le premier Pokémon de Sacha ?",
        options: ["Pikachu", "Bulbizarre", "Salamèche", "Carapuce"],
        correct_answer: "Pikachu"
    },
    {
        question: "Quel anime raconte l'histoire de pirates qui cherchent le trésor ultime 'One Piece' ?",
        options: ["One Piece", "Dragon Ball", "Fairy Tail", "Toriko"],
        correct_answer: "One Piece"
    },
    {
        question: "Dans quel dessin animé voit-on des robots qui se transforment en voitures ?",
        options: ["Transformers", "Gundam", "Macross", "Mazinger Z"],
        correct_answer: "Transformers"
    },
    {
        question: "Quel est le nom de la fée compagne de Link dans 'Zelda' (dessin animé) ?",
        options: ["Navi", "Tatl", "Ciela", "Midna"],
        correct_answer: "Navi"
    },
    {
        question: "Dans quel anime des sorciers utilisent des esprits célestes avec des clés dorées ?",
        options: ["Fairy Tail", "Magi", "Black Clover", "The Seven Deadly Sins"],
        correct_answer: "Fairy Tail"
    },
    {
        question: "Quel dessin animé français met en scène un gaulois irréductible ?",
        options: ["Astérix", "Tintin", "Lucky Luke", "Iznogoud"],
        correct_answer: "Astérix"
    },
    {
        question: "Dans quel anime un lycéen découvre un cahier qui tue quiconque dont il écrit le nom ?",
        options: ["Death Note", "Mirai Nikki", "Another", "Higurashi"],
        correct_answer: "Death Note"
    },
    {
        question: "Quel studio a créé 'Akira', le film d'animation de 1988 ?",
        options: ["TMS Entertainment", "Studio Ghibli", "Gainax", "Sunrise"],
        correct_answer: "TMS Entertainment"
    },
    {
        question: "Dans quel anime des humains combattent-ils dans des combinaisons mécaniques géantes ?",
        options: ["Neon Genesis Evangelion", "Gundam", "Macross", "Code Geass"],
        correct_answer: "Neon Genesis Evangelion"
    },
    {
        question: "Quel est le nom du méchant principal de 'Dragon Ball Z' ?",
        options: ["Freezer", "Cell", "Majin Buu", "Vegeta"],
        correct_answer: "Freezer"
    },
    {
        question: "Dans quel dessin animé voit-on un enfant nommé Shin-chan très impertinent ?",
        options: ["Crayon Shin-chan", "Doraemon", "Nobita", "Chi's Sweet Home"],
        correct_answer: "Crayon Shin-chan"
    },
    {
        question: "Quel anime raconte l'histoire d'un jeune garçon qui devient médecin dans un monde de jeu ?",
        options: ["Sword Art Online", "Log Horizon", "No Game No Life", "Overlord"],
        correct_answer: "Sword Art Online"
    },
    {
        question: "Dans quel anime voit-on un robot chat venu du futur ?",
        options: ["Doraemon", "Astro Boy", "Gigantor", "Tetsujin 28"],
        correct_answer: "Doraemon"
    },
    {
        question: "Quel est le prénom du personnage principal de 'Bleach' ?",
        options: ["Ichigo", "Rukia", "Orihime", "Renji"],
        correct_answer: "Ichigo"
    },
    {
        question: "Dans quel anime des adolescents combattent-ils des sorciers maléfiques grâce à des cartes ?",
        options: ["Yu-Gi-Oh!", "Card Captor Sakura", "Beyblade", "Duel Masters"],
        correct_answer: "Yu-Gi-Oh!"
    }
];

export default questions;
