const questions = [
    {
        question: "Qui est le dieu des dieux dans la mythologie grecque ?",
        options: ["Zeus", "Poséidon", "Hadès", "Apollon"],
        correct_answer: "Zeus"
    },
    {
        question: "Quel héros grec a accompli 12 travaux ?",
        options: ["Héraclès", "Achille", "Ulysse", "Thésée"],
        correct_answer: "Héraclès"
    },
    {
        question: "Qui est le dieu de la mer dans la mythologie grecque ?",
        options: ["Poséidon", "Zeus", "Hadès", "Triton"],
        correct_answer: "Poséidon"
    },
    {
        question: "Quel cheval ailé est associé à la mythologie grecque ?",
        options: ["Pégase", "Bucéphale", "Arion", "Xanthos"],
        correct_answer: "Pégase"
    },
    {
        question: "Qui est l'équivalent romain de Zeus ?",
        options: ["Jupiter", "Mars", "Neptune", "Pluton"],
        correct_answer: "Jupiter"
    },
    {
        question: "Dans la mythologie nordique, qui est le dieu du tonnerre ?",
        options: ["Thor", "Odin", "Loki", "Freyr"],
        correct_answer: "Thor"
    },
    {
        question: "Quel est le nom du labyrinthe dans lequel vivait le Minotaure ?",
        options: ["Le Labyrinthe de Crète", "Le Labyrinthe d'Athènes", "Le Labyrinthe de Minos", "Le Labyrinthe de Dédale"],
        correct_answer: "Le Labyrinthe de Crète"
    },
    {
        question: "Qui est la déesse de la sagesse dans la mythologie grecque ?",
        options: ["Athéna", "Artémis", "Aphrodite", "Héra"],
        correct_answer: "Athéna"
    },
    {
        question: "Quel fleuve faut-il traverser pour entrer aux Enfers dans la mythologie grecque ?",
        options: ["Le Styx", "L'Achéron", "Le Léthé", "Le Phlégéthon"],
        correct_answer: "Le Styx"
    },
    {
        question: "Qui est le dieu de la guerre dans la mythologie grecque ?",
        options: ["Arès", "Athéna", "Hermès", "Apollo"],
        correct_answer: "Arès"
    },
    {
        question: "Dans la mythologie nordique, comment appelle-t-on le monde des dieux ?",
        options: ["Asgard", "Midgard", "Jotunheim", "Valhalla"],
        correct_answer: "Asgard"
    },
    {
        question: "Quel est le nom du chien à trois têtes qui garde les Enfers ?",
        options: ["Cerbère", "Orthros", "Scylla", "Chimère"],
        correct_answer: "Cerbère"
    },
    {
        question: "Qui est la déesse de l'amour dans la mythologie romaine ?",
        options: ["Vénus", "Junon", "Diane", "Minerve"],
        correct_answer: "Vénus"
    },
    {
        question: "Quel héros grec a navigué à bord de l'Argo en quête de la Toison d'Or ?",
        options: ["Jason", "Ulysse", "Thésée", "Persée"],
        correct_answer: "Jason"
    },
    {
        question: "Dans la mythologie égyptienne, qui est le dieu du soleil ?",
        options: ["Rê", "Osiris", "Horus", "Anubis"],
        correct_answer: "Rê"
    },
    {
        question: "Quel est le nom du père d'Achille ?",
        options: ["Pélée", "Priam", "Agamemnon", "Ménélas"],
        correct_answer: "Pélée"
    },
    {
        question: "Qui a tué Méduse dans la mythologie grecque ?",
        options: ["Persée", "Hercule", "Thésée", "Bellérophon"],
        correct_answer: "Persée"
    },
    {
        question: "Dans la mythologie nordique, quel est l'arbre cosmique qui soutient les neuf mondes ?",
        options: ["Yggdrasil", "Bifrost", "Niflheim", "Muspelheim"],
        correct_answer: "Yggdrasil"
    },
    {
        question: "Qui est le dieu du feu dans la mythologie grecque ?",
        options: ["Héphaïstos", "Hestia", "Hélios", "Prométhée"],
        correct_answer: "Héphaïstos"
    },
    {
        question: "Quelle créature mythologique avait le corps d'un lion et la tête d'une femme ?",
        options: ["Le Sphinx", "La Chimère", "Le Griffon", "La Harpie"],
        correct_answer: "Le Sphinx"
    },
    {
        question: "Dans la mythologie grecque, qui a volé le feu des dieux pour le donner aux hommes ?",
        options: ["Prométhée", "Héphaïstos", "Hermès", "Hestia"],
        correct_answer: "Prométhée"
    },
    {
        question: "Quel est le nom de la pomme d'or qui déclencha la guerre de Troie ?",
        options: ["La Pomme de Discorde", "La Pomme d'Or", "La Pomme d'Éris", "La Pomme de Pâris"],
        correct_answer: "La Pomme de Discorde"
    },
    {
        question: "Dans la mythologie nordique, qui sont les guerrières qui emmènent les âmes des guerriers au Valhalla ?",
        options: ["Les Walkyries", "Les Nornes", "Les Alfes", "Les Elfes"],
        correct_answer: "Les Walkyries"
    },
    {
        question: "Quel dieu égyptien a la tête d'un chacal ?",
        options: ["Anubis", "Horus", "Seth", "Thot"],
        correct_answer: "Anubis"
    },
    {
        question: "Qui est le roi des dieux dans la mythologie nordique ?",
        options: ["Odin", "Thor", "Freyr", "Tyr"],
        correct_answer: "Odin"
    },
    {
        question: "Quel est le nom de l'arc magique d'Ulysse ?",
        options: ["L'arc d'Iphitos", "L'arc d'Apollon", "L'arc de Troie", "L'arc d'Éros"],
        correct_answer: "L'arc d'Iphitos"
    },
    {
        question: "Dans la mythologie grecque, qui est la déesse de la chasse ?",
        options: ["Artémis", "Athéna", "Aphrodite", "Perséphone"],
        correct_answer: "Artémis"
    },
    {
        question: "Quel monstre marin est décrit comme une créature à six têtes dans la mythologie grecque ?",
        options: ["Scylla", "Charybde", "La Méduse", "L'Hydre"],
        correct_answer: "Scylla"
    },
    {
        question: "Dans la mythologie romaine, quel dieu est associé aux commencements et aux portes ?",
        options: ["Janus", "Jupiter", "Saturne", "Mercure"],
        correct_answer: "Janus"
    },
    {
        question: "Qui est le dieu du vin dans la mythologie grecque ?",
        options: ["Dionysos", "Bacchus", "Apollon", "Hermès"],
        correct_answer: "Dionysos"
    }
];

export default questions;
