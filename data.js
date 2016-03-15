
module.exports = {

    about : "Curieux et passionné depuis toujours par l'informatique et les nouvelles technologies, "+
            "je termine actuellement un master en alternance dans le domaine de l'architecture logicielle",
    contact : [
        {
            logo : "map-marker",
            value : "Deuil-La-Barre, Val-d'Oise"
        },
        {
            logo : "envelope-o",
            href : "mailto:guillaume@villerez.fr",
            value : "guillaume@villerez.fr"
        },
        {
            logo : "phone",
            value : "06 14 86 60 21"
        },
        {
            logo : "external-link",
            href : "http://villerez.fr/",
            value : "g.villerez.fr"
        },
        {
            logo : "lkdn-square",
            href : "https://www.linkedin.com/in/villerez",
            value : "linkedin.com/in/villerez"
        },
        {
            logo : "github",
            href : "https://github.com/Vuzi",
            value : "github.com/Vuzi"
        }
    ],
    education : [
        {
            school : "ESGI",
            diploma : "Master Architecture logicielle",
            date : "2014 - Présent",
            detail : "Titre niveau I d'expert en ingénierie de l’informatique et des systèmes d’information",
            quote : "La spécialisation en Architecture des logiciels est une formation d'expert sur les méthodes de " +
                    "conception et de réalisation de solutions logicielles répondant aux besoins complexes des " +
                    "entreprises, tous secteurs confondus (finance, industrie, SSII, éditeurs de logiciels…).",
            link : {
                href : "http://www.esgi.fr/ecole-informatique/programmes/master-informatique-programmation.html",
                value : "Informations sur la formation"
            }
        },
        {
            school : "ESGI",
            diploma : "Bachelor Architecture logicielle",
            date : "2011 - 2014",
            detail : "Titre niveau II de chef de projet logiciel et réseaux",
            quote : "Le Cycle Bachelor en informatique de l'ESGI spécialisé en Architecture des Logiciels permet aux " +
                    "étudiants d'acquérir des compétences opérationnelles au travers de nombreux projets pédagogiques" +
                    ", tout en acquérant des compétences d'architecture logicielle (langages, modélisation UML, BDD).",
            link : {
                href : "http://www.esgi.fr/ecole-informatique/programmes/bachelor-informatique-programmation.html",
                value : "Informations sur la formation"
            }
        },
        {
            school : "École notre Dame Providence",
            diploma : "Baccalauréat",
            date : "2010",
            detail : "Baccalauréat Scientifique - Mention assez bien"
        }
    ],

    projects : [
        {
            title : "Raspi-sensor",
            status : "Plugin Node.js C++",
            tags : [ "Rapsberry Pi", "C++", "Node.js" ],
            description : [
                "Plugin NodeJS réalisé en C++ permettant d’exploiter en JavaScript les informations de différents " +
                "capteurs reliés à un RapsberryPi. " +
                "Actuellement le DHT22 (température et humidité), le BMP 180 (température et pression) et le TLS261 " +
                "(luminosité) sont supportés.",
                "Le plugin adopte un fonctionnement asynchrone cher au JavaScript, et propose un mode de récupération" +
                " unique où à intervalle régulier."
            ],
            links : [
                {
                    type : "github",
                    href : "https://github.com/Vuzi/raspi-sensors",
                    value : "github.com/Vuzi/raspi-sensors"
                },
                {
                    type : "npm",
                    href : "https://npmjs.com/package/raspi-sensors",
                    value : "npmjs.com/package/raspi-sensors"
                }
            ]
        },
        {
            title : "Blackjack 23",
            status : "Jeu de blackjack",
            tags : [ "React", "Electron", "Node.js" ],
            description : [
                "Application lourde utilisant Electron, avec React " +
                "pour la construction de son interface et la gestion de ses intéractions utilisateur.",
                "Le jeu permet actuellement de jouer une partie complète du célèbre jeu, en implémentant " +
                "la majorité des actions possibles."
            ],
            links : [
                {
                    type : "github",
                    href : "https://github.com/Vuzi/Blackjack-23",
                    value : "github.com/Vuzi/Blackjack-23"
                }
            ]
        },
        {
            title : "Vuziks",
            status : "Interpréteur & langage",
            tags : [ "lex/yacc", "C" ],
            description : [
                "Langage de scripting et son interpréteur, réalisé en C avec Lex et Yacc. Gestion d'un mode " +
                "intéractif, des conditions, boucles, fonctions et objets."
            ],
            links : [
                {
                    type : "github",
                    href : "https://github.com/Vuzi/vuziks",
                    value : "github.com/Vuzi/vuziks"
                }
            ]
        }
    ],

    career : [
        {
            company : "Alter-Frame",
            status : "Développeur",
            date : "2014 - Présent",
            quote : "Alter Frame est la structure d’édition de logiciels et de développement au forfait d’Alter " +
            "Groupe. Cette structure a pour vocation d’apporter une véritable plus value qualitative dans la " +
            "réalisation de solutions full-web et le développement de projets informatiques.",
            description : [
                "Développement d’un nouvel outil sur une suite logicielle de dimensionnement de batteries et " +
                "d’alternateurs pour un constructeur automobile Français.",
                "Réalisation d’un audit de code sur une application de gestion de polices d’assurances pour un " +
                "grand nom de l’assurance-crédit.",
                "Réalisation d’une application de visualisation de données satellite (fichier) sur une " +
                "projection en deux dimensions de la terre."
            ]
        },
        {
            company : "Scality",
            status : "Développeur",
            date : "2014 - Stage de 3 mois",
            quote : "Scality développe et propose le Ring, une solution de stockage de très haute capacité et " +
                    "de très haute performance. Cette solution est actuellement utilisée par de nombreuses " +
                    "entreprises comme RTL, Comcast ou encore Dailymotion.",
            description : [
                "Choix et mise en place d’un framework de tests unitaires dans une solution réalisée en C, avec " +
                "adaptation des cibles de compilation, portage des tests existants, et ajout de nouveaux " +
                "tests unitaires."
            ]
        }
    ],

    skills : [
        {
            content : [
                {
                    name : "Langage C",
                    detail : "(Programmation Linux, pthread, libuv, SDL 1.2/2.0)",
                    level : 80
                },
                {
                    name : "C++",
                    detail : "(C++11, STL, binding V8 de Google)",
                    level : 60
                },
                {
                    name : "Java SE",
                    detail : "(Swing, JavaFx, JUnit)",
                    level : 90
                },
                {
                    name : "Java EE",
                    detail : "(Tomcat, Glassfish, JPA, JAXB, Hibernate, Velocity)",
                    level : 70
                },
                {
                    name : "Node.js",
                    detail : "(Express, mangoose, création plugin C++)",
                    level : 80
                },
                {
                    name : "Python",
                    detail : "(2.7 et 3.5, Robot Framework, PyGame)",
                    level : 60
                },
                {
                    name : "Scala",
                    level : 40
                },
                {
                    name : "Notions en Haskell"
                }
            ]
        },
        {
            title : 'Web (front)',
            content : [
                {
                    name : "HTML5 & CSS3",
                    detail : "(Less, EJS)",
                    level : 90
                },
                {
                    name : "JavaScript",
                    detail : "(ECMAScript 5 & 6, React, jQuery)",
                    level : 80
                }
            ]
        },
        {
            title : 'Mobile et embarqué',
            content : [
                {
                    name : "Java Android",
                    detail : "(4/5/6)",
                    level : 70
                },
                {
                    name : "Notions en Objective-C"
                },
                {
                    name : "Développement sur RaspberryPi"
                }
            ]
        },
        {
            title : 'Base de données',
            content : [
                {
                    name : "SQL",
                    detail : "(MySQL, Oracle)"
                },
                {
                    name : "NoSQL",
                    detail : "(MongoDB)"
                }
            ]
        }
    ],

    language : [
        {
            lang : "Anglais",
            level : "professionnel",
            certification : "(TOEIC 970/990)"
        },
        {
            lang : "Français",
            level : "langue natale"
        }
    ],

    associations : [
        {
            title : "Association de programmation",
            status : "ESGI",
            date : "2012-2013",
            description : [ "Association de programmation à l’ESGI, langage C et SDL" ]
        },
        {
            title : "Code kata",
            status : "ESGI",
            date : "2014",
            description : [ "Association de 'code kata' à l’ESGI" ]
        },
        {
            title : "Developer Days",
            status : "ESGI",
            date : "2015",
            description : [ "Présentation aux étudiants du langage Scala, au travers du développement d'un logiciel " + 
                            "permettant de déchiffrer automatiquement  le code de César en se basant sur la fréquence " +
                            "des différentes lettres du message" ],
            links : [
                {
                    type : "github",
                    href : "https://github.com/Vuzi/vuziks",
                    value : "github.com/Vuzi/vuziks"
                }
            ]
        }
    ]
};
