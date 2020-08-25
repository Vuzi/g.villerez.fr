
export const content = {
    title: `Hello! My name is <span class="colored">Guillaume</span> and I'm a <span class="colored">Software Engineer</span> at <span class="colored">Memo Bank</span><img class="logo-title" src="/img/memo2.png">.`,
    intro1: `
        Je travaille actuellement chez <span class="colored">Memo Bank</span>, une toute nouvelle banque européenne destinée aux PMEs. 
        Ces jours ci je suis principalement sur le backend de notre noyau bancaire, qui s'occupe des toutes les opérations entre notre livre de compte et nos clients.<br/><br/>
        Avant de les rejoindre, j'était à <span class="colored">Ditto Services</span> où j'ai travaillé sur leur solution d'open banking en marque blanche, à <span class="colored">ReachFive</span> où
        j'étais tech lead sur leur solution CIAM et enfin à <span class="colored">Zengularity</span> où j'ai eu l'occasion d'apprendre énormément après mes études et
        de rencontrer beaucoup de gens talentueux.
    `,
    intro2: `
        Avocat du <span class="colored">fonctionnel</span> et ardent défenseur du « <span class="colored">Software craftsmanship</span> », 
        j'ai passé mes 5 dernières années à résoudre des problématiques techniques et métier toutes différentes les unes des autres avec un but commun : 
        proposer la meilleure solution dans la limite des moyens engagés.<br/><br/>
        Je pense que la qualité d'un code n'est jamais optionnelle, et est le reflet de la qualité intrinsèque de la solution apportée. Ainsi je m'efforce
        de toujours proposer une solution de laquelle je peux être fier.
    `,
    menu: {
        work: 'Where did I worked?',
        skills: 'What do I know?',
        projects: 'Any personnal projects?',
        education: 'Where did I studied?'
    },
    skills: {
        title: `What do I <span class="colored" >know</span> ?`,
        list: [
            {
                icon: 'buffer',
                title: 'Software Architecture',
                afterTitle: 'Functionnal Programming',
                tags: [
                    'Micro-services', 'Reactive', 'Stateless', 'Distributed Systems'
                ],
                description: [
                    `J'ai eu l'occasion de voir de nombreuses manières de répondre aux différents problèmatiques concernant l'architecture d'un logiciel ou d'un système. En passant par
                     un client lourd, une simple application web stateless, un système de services communiquant par messages jusqu'à un système d'event streaming composé de nano-services.`,
                    `J'ai enfin pu mettre en oeuvre pour la première fois ce que j'avais appris à <span class="colored">ReachFive</span> où l'application monolithique existante à été modularisée
                     en service. J'ai ainsi eu l'occasion de réduire les interdépendances à leur minimum et d'en sortir des briques fonctionelle presque indépendantes. Certains services ont
                     ensuite été ajouté suivant le même modèle, avec par exemple un système de worker asynchrone dépilant des ordre de tâche à effecter.`,
                    `<span class="colored">Ditto Service</span> et <span class="colored">Memo</span> partagent également cette même approche de découpage en service, mais y répondent de manière 
                     différente. Là où <span class="colored">Ditto</span> était parti sur un découpage très fin à la fonction près, <span class="colored">Memo</span> à fait le choix
                     d'un découpage par domaine ; les deux se servant de messages pour propager les actions dans leurs systèmes respectifs.`
                ]
            },
            {
                icon: 'scala',
                title: 'Scala',
                afterTitle: 'Functionnal Programming',
                tags: [
                    'FP', 'Lightbend (Play, Akka)', 'Typelevel (Cats, Shapeless, Doobie)', 'Scalaz', 'sbt', 'macro'
                ],
                quote: `
                    Scala is a general-purpose programming language providing support for both object-oriented programming and functional programming. 
                    The language has a strong static type system. Designed to be concise, many of Scala's design decisions are aimed to address criticisms of Java.
                `,
                description: [
                    `Le fonctionnel apporte une sécurité supplémentaire à la compilation, permettant de plus se reposer sur une validation statique 
                     là où le Java doit par exemple souvent se reposer sur des tests unitaires et fonctionnels en plus de la compilation afin de valider 
                     son code. Ce paradigme permet également de penser différement son code, et d'écrire un code déclaratif plus clair sur ses intentions.`,
                    `Après avoir découvert le <span class="colored">Scala</span> (et plus largement la programmation fonctionelle) en école, j'ai eu 
                     l'occasion de faire mes armes avec lors de mon passage à <span class="colored">Zengularity</span>, où j'ai pu apprendre à en tirer le 
                     meilleur auprès des mêmes personnes participant activement à la vie de l'écosystème du langage.`,
                    `J'ai ensuite eu l'occasion de m'en servir à <span class="colored">ReachFive</span> puis à <span class="colored">Ditto Services</span> 
                     pour construire des applications à la fois complexes (de part le cadre fonctionnel) et robustes, en m'appuyant sur le langage ainsi que 
                     sur tout l'écosystème qui existe en <span class="colored">Scala</span>.`
                ]
            },
            {
                icon: 'typescript',
                title: 'TypeScript & JavaScript',
                afterTitle: 'Backend & Frontend',
                tags: [
                    'NodeJS', 'Express', 'Webpack', 'React, Redux', 'HTML, CSS'
                ],
                quote: `
                    TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
                `,
                description: [
                    `En plus d'apporter le typage, <span class="colored">TypeScript</span> permet également d'explorer d'une approche plus descriptives dans la 
                     manière de construire des applications (par exemple avec <span class="colored">React</span>).`,
                    `Je l'ai de manière extensive en front, où j'ai eu l'occasion de construire de nombreuses applications web, de tailles variables. Là où le 
                     <span class="colored">JavaScript</span> aurait rendu la tâche difficile, le <span class="colored">TypeScript</span> nous a assuré la cohérence 
                     nécessaire pour travailler en équipe sur des codebase de grande taille.`,
                    `Enfin, j'ai également eu l'occasion de beaucoup m'en servir côté serveur avec <span class="colored">NodeJS</span> sur des projets personnels. 
                     Facile à mettre en place et rapide à dévelloper, le typage assure la clarté et longévité au code. Enfin, l'écosystème 
                     <span class="colored">JavaScript</span> assure de nombreuses librairies matures pour la plupart déjà typées.` 
                ]
            },
            {
                icon: 'kotlin',
                title: 'Kotlin & Java',
                afterTitle: 'Backend & Frontend',
                tags: [
                    'Spring Boot', 'Vert.x', 'JEE', 'Hibernate, JPA', 'Swing, JavaFX', 'Android'
                ],
                quote: `
                    Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, but type inference allows its syntax to be more concise.
                `,
                description: [
                    `A l'image du <span class="colored">Scala</span>, <span class="colored">Kotlin</span> se positionne également comme un « better <span class="colored">Java</span> », enpruntant 
                     des notions de langage fonctionnel tout en restant fortement orienté objet par nature. Contrairement au <span class="colored">Scala</span> celui-ci se positionne plus proche 
                     du <span class="colored">Java</span> dans sa philosophie, et n'a pas vocation à être fonctionnel (même s'il en emprunte de la syntaxe). L'intéroparabilité avec le 
                     <span class="colored">Java</span> participe également à rendre la transition entre les deux langages la plus transparente possible.`,
                    `Après avoir fait près de 2 ans de <span class="colored">Java</span> durant mon alternance et avoir vite délaissé ce langage pour le <span class="colored">Scala</span>, 
                     j'ai eu l'occasion de passer sur du <span class="colored">Kotlin</span> chez <span class="colored">Memo Bank</span>. Simple d'approche après avoir fait du 
                     <span class="colored">Scala</span>, le langage permet de corriger de nombreux soucis du <span class="colored">Java</span> de part son approche plus moderne et son typage plus fort.
                     Il nous permet à Memo de représenter un fonctionnel métier parfois complexe (comme celui de la banque l'est souvent) de manière clair et robuste, maintenant une certaine du code. 
                     L'interopérabilité des librairie <span class="colored">Java</span> permet quant-à-elle de profiter d'un écosystème riche et mature, assurant la meilleur des deux mondes.`
                ]
            },
            {
                icon: 'postgresql',
                title: 'Databases',
                afterTitle: 'SQL & NoSQL',
                tags: [
                    'SQL (PostgreSQL, Oracle DB)', 'ElasticSearch', 'MongoDB', 'Redis'
                ],
                description: [
                    `J'ai utilisé des bases de données SQL dans presque tous mes projets, de <span class="colored">MySQL</span> quand j'étais encore en école, à <span class="colored">Oracle DB</span>
                     pour d'importantes entreprises quand j'étais encore à <span class="colored">Zengularity</span> jusqu'à PostgreSQL à <span class="colored">Memo</span> ; pour des construire des 
                     applications partant d'un service REST à un noyau bancaire.`,
                    `J'ai eu la chance d'utiliser <span class="colored">MongoDB</span> pour la première fois à <span class="colored">Zengularity</span> dans une application particulièrement technique,
                     utilisant l'event sourcing pour tracer les changement d'états de missions assureurs. <span class="colored">Mongo</span> nous a apporté de nombreux avantages (orienté document, nous
                     permettant de directement utiliser du JSON, et des promesses de scalabilité) malgré quelques défauts (principalement le manque de relationnel entre les collections, et 
                     l'impossibilité de lock un document de manière efficiente comme la plupart des bases SQL le permette)`,
                    `J'ai eu une expérience plus contrastée avec <span class="colored">ElasticSearch</span>, où je l'ai malheureusement vu utilisé comme base primaire, apportant des soucis de cohérence
                     (car <span class="colored">ES</span> est éventuellement consistant) et de performance (car nous il avait été nécessaire de forcer un refresh de la base après chaque insertion).
                     Heureusement, nous l'utilison de la bonne manière à <span class="colored">Memo</span> pour indéxer nos opération et construire une moteur de recherche pour notre application frontend,
                     où cette technologie peut enfin briller.`
                ]
            },
            {
                icon: 'docker',
                title: 'DevOps',
                afterTitle: 'Docker & Continuous Integration',
                tags: [
                    'Docker, Docker compose', 'Terraform', 'Linux', 'Jenkins, Hudson, Circle-ci', 'SonarQube'
                ],
                description: [
                    `J'utilise principalement <span class="colored">Docker</span> pour définir des environnement de travail isolés et facilement déployable, permettant de répliquer une 
                     architecture et des services facilement en local. J'ai également eu l'occasion d'en définir certains étant utilisés en production dans un 
                     <span class="colored">Kubernetes</span> lors de mon passage à <span class="colored">Ditto Service</span>.`,
                    `J'ai également eu l'occasion de m'occuper de configuration <span class="colored">Jenkins</span> sur certains projets où j'ai travaillé, que ce soit simplement 
                     sur de l'intégration continue ou du déploiement continu. J'ai également utilisé <span class="colored">Circle-ci</span> et <span class="colored">Travis</span>
                     pour des but similaires.`,
                    `Enfin, je m'occupe moi même de mon serveur <span class="colored">Linux</span> personnel, plus par hobby que par nécéssité, utilisant 
                     <span class="colored">Docker</span> pour isoler mes différents services.`
                ]
            },
        ]
    },
    work: {
        title: `Where did I <span class="colored">worked</span>? <img class="illustration tmp" src="img/mug.png" />`,
        list: [
            {
                icon: 'memo2.png',
                date: '2020 - Now',
                title: 'Memo Bank',
                afterTitle: 'Software Engineer',
                tags: [
                    'Kotlin', 'Elixir', 'TypeScript', 'Distributed Architecture', 'Kafka', 'PostgreSQL'
                ],
                quote: `
                    Memo Bank a un objectif simple mais ambitieux : créer un nouvel établissement bancaire européen en partant de zéro, 
                    pour fournir aux PME les produits et conseils financiers qu’elles méritent.
                    <br/><br/>
                    Trois ans après sa création, Memo Bank a obtenu le feu vert de l’Autorité de contrôle prudentiel et de résolution (ACPR) 
                    et de la Banque Centrale européenne (BCE) pour lancer son offre, devenant la première banque indépendante à voir 
                    le jour en France depuis 50 ans.
                `,
                description: [
                    `Création d'un core banking system depuis zéro, en utilisant des technologies modernes et sûres, en faisant en sorte que ce 
                     banking system respecte toutes les contraintes d'auditabilité, de sécurité et de performance auquel sont soumises les banques. 
                     Intégration à d'autres outils externes pour communiquer avec les autres banques. Event sourcing utilisé pour le coeur de validation 
                     des opérations monnétaires afin d'assurer une totale auditabilité. Export automatique de ces données dans des rapports réglementaires.`,
                    `Projet réalisé en Kotlin (Spring, Hibernate) & Elixir (Partie event sourcing) avec PostgreSQL en base de donnée, ActiveMQ 
                     comme système de message et Kafka comme broker.`
                ]
            },
            {
                icon: 'ditto-logo.png',
                date: '2020 (4 months)',
                title: 'Ditto Services',
                afterTitle: 'Software Engineer',
                tags: [
                    'FP', 'Scala', 'Kafka', 'Event streaming', 'Nano-services'
                ],
                quote: `
                    La plateforme Open Banking de Ditto Services a pour but de permettre aux entreprises de se concentrer sur leur coeur d’activité en 
                    leur donnant accès à une gamme complète d’APIs intégrables facilement et ainsi développer les parcours-clients les plus innovants.
                    <br/><br/>
                    Grâce au partenariat avec la sociétés soeurs Banque Travelex, établissement de crédit agréé par l’Autorité de Contrôle Prudentiel 
                    et de Résolution, ils développent une plateforme technologique de dernière génération pour la banque digitale de demain.
                `,
                description: [
                    `Création de la plateforme nouvelle génération de Ditto Services from scratch, en utilisant une architecture basé sur des micro-services 
                    communiquant entre avec de l'event-streaming, assurant un découplage maximum entre les différentes briques fonctionnelles.`,
                    `Projet réalisé en Scala (Akka-http, Akka-actor, Cats, Fs2, Doobies, Cats-Effect) avec PostgreSQL en base de donnée locale et Kafka comme broker.`
                ]
            },
            {
                icon: 'reachfive-logo.png',
                date: '2018 - 2020',
                title: 'ReachFive',
                afterTitle: 'Lead développeur',
                tags: [
                    'FP', 'Scala', 'TypeScript', 'ElasticSearch', 'Redis', 'Kafka'
                ],
                quote: `
                    La solution de Customer Identy and Access Management (CIAM) de
                    ReachFive permet aux entreprises une gestion complète et sécurisée de leurs
                    clients sur l’ensemble de leurs points de contact, online et offline.
                `,
                description: [
                    `Reprise de la codebase, structuration du développement (revues de code, intégration continue &amp; clean code),
                    lancement de divers chantiers de refactoring pour résorber la dette technique et mise en place des dernières
                    fonctionnalités pour offrir une solution CIAM complète à l'ensemble de nos clients (Boulanger, Engie, Lacoste, etc..).`,
                    `Projet réalisé en Scala (Play Framework, Shapeless, Cats) et TypeScript (React), avec ElasticSearch &amp; PostgreSQL en bases de données.`
                ]
            },
            {
                icon: 'zen-logo.png',
                date: '2016 - 2018',
                title: 'Zengularity (Fabernovel since 2019)',
                afterTitle: 'Architecte logiciel',
                tags: [
                    'FP', 'Scala', 'TypeScript', 'PostgreSQL', 'MongoDB'
                ],
                quote: `
                    Zengularity (qui a rejoint la famille Fabernovel depuis 2019) est une entreprise française spécialisée dans la transformation numérique
                    et le web de demain. Adepte des nouvelles technologies celle-ci propose des choix adaptés et modernes aux entreprises souhaitant 
                    effectuer leur révolution numérique.<br/><br/>
                    Zengularity est également le berceau de Play Framework, mondialement reconnu et utilisé par les plus grandes entreprises.
                `,
                description: [
                    `Développement d'une plateforme web facilitant la mise en relation des différents acteurs du métier
                    de la mutuelle afin de les accompagner dans leur transition numérique.`,
                    `Projet réalisé en Scala (Play Framework, Shapeless, Scalaz) et TypeScript (ReactJS, Flux &amp; Less), avec MongoDB en base de donnée.
                    Utilisation de l'event-sourcing afin de retranscrire au mieux les événements métier.`,
                    `Développement d'une plateforme d'onboarding pour un grand groupe bancaire afin de numériser un processus papier
                    et les accompagner dans leur transition numérique.`,
                    `Projet réalisé en Scala (Play Framework, Cats) et TypeScript.`
                ]
            },
            {
                icon: 'esgi-logo.png',
                date: '2017 (6 months)',
                title: 'ESGI',
                afterTitle: 'Enseignant',
                tags: [
                    'FP', 'Scala', 'TypeScript', 'PostgreSQL', 'MongoDB'
                ],
                quote: `
                    Créée en 1983, l’école d’informatique ESGI forme ses étudiants aux évolutions de l’informatique en
                    s’adaptant aux besoins des entreprises d’un secteur très dynamique.
                `,
                description: [
                    `Cours sur les outils du développeur aux 3ème années spécialisation Architecture Logicielle.`,
                    `Cours portant sur les gestionnaires de version (git), les workflow git, le clean code et ses outils associés, et enfin une introduction sur l'intégration continue.`
                ]
            },
            {
                icon: 'alter-logo.png',
                date: '2014-2016',
                title: 'Alter-Frame',
                afterTitle: 'Développeur',
                tags: [
                    'Java', 'JEE', 'JavaFX', 'Spring'
                ],
                quote: `
                    Alter Frame est la structure d’édition de logiciels et de développement au forfait d’Alter Groupe. Cette structure a pour vocation d’apporter une véritable plus value 
                    qualitative dans la réalisation de solutions full-web et le développement de projets informatiques.
                `,
                description: [
                    `Développement d’un nouvel outil sur une suite logicielle de dimensionnement de batteries et d’alternateurs pour un constructeur automobile Français.`,
                    `Audit de code d'une application Java (JEE & JBE) de gestion de clients et de contrats, pour une entreprise Française d'assurance crédit.`,
                    `Réalisation d’une application de visualisation de données satellite (fichier) sur une projection en deux dimensions de la terre.`
                ]
            },
            {
                icon: 'scality-logo.png',
                date: '2014 (3 months internship)',
                title: 'Scality',
                afterTitle: 'Développeur',
                tags: [
                    'C Language', 'Python', 'Robot Framework', 'Jenkins'
                ],
                quote: `
                    Scality développe et propose le Ring, une solution de stockage de très haute capacité et de très haute performance. Cette solution est actuellement utilisée 
                    par de nombreuses entreprises comme RTL, Comcast ou encore Dailymotion.
                `,
                description: [
                    `Intervention sur le projet phare de Scality, le RING (une solution de stockage de très haute capacité et de très haute disponibilité), 
                     au niveau de la mise en place de tests unitaires et de métriques associées.`,
                    `Choix et mise en place d’un framework de tests unitaires dans une solution réalisée en C, avec adaptation des cibles de compilation, 
                     portage des tests existants, et ajout de nouveaux tests unitaires.`
                ]
            },
        ]
    },
    education: {
        title: `Where did I <span class="colored">studied</span>?
                <img class="illustration tmp" src="img/university.png" />
        `,
        list: [
            {
                date: '2014 - 2016',
                title: 'Master Architecture logicielle',
                afterTitle: 'ESGI',
                detail: "Titre niveau I d'expert en ingénierie de l’informatique et des systèmes d’information",
                quote: `La spécialisation en Architecture des logiciels est une formation d'expert sur les méthodes de
                        conception et de réalisation de solutions logicielles répondant aux besoins complexes des
                        entreprises, tous secteurs confondus (finance, industrie, SSII, éditeurs de logiciels…).`,
                link: {
                    url: "http://www.esgi.fr/ecole-informatique/programmes/master-informatique-programmation.html",
                    text: 'Informations sur la formation'
                }
            },
            {
                date: '2011 - 2014',
                title: 'Bachelor Architecture logicielle',
                afterTitle: 'ESGI',
                detail: "Titre niveau II de chef de projet logiciel et réseaux",
                quote: `Le Cycle Bachelor en informatique de l'ESGI spécialisé en Architecture des Logiciels permet aux
                        étudiants d'acquérir des compétences opérationnelles au travers de nombreux projets pédagogiques
                        , tout en acquérant des compétences d'architecture logicielle (langages, modélisation UML, BDD).`,
                link: {
                    url: "http://www.esgi.fr/ecole-informatique/programmes/bachelor-informatique-programmation.html",
                    text: 'Informations sur la formation'
                }
            },
            {
                date: '2010',
                title: 'Baccalauréat',
                afterTitle: 'École notre Dame Providence',
                detail: "Baccalauréat Scientifique"
            }
        ]
    },
    projects: {
        title: `Any <span class="colored">personnal project</span> to show?`,
        list: [
            {
                title: 'Cumulus',
                afterTitle: 'Serveur de stockage de fichiers',
                tags: [ 'Scala', 'Akka HTTP', 'Akka Streams' ],
                quote: `Serveur de stockage de fichiers réalisé en Scala avec Akk-http. Les fichiers stockés
                    peuvent être compressés et chiffrés afin de pouvoir les sécuriser. Les fichiers peuvent
                    également être streamés, rendant possible le streaming vidéos via HTML5 pour les formats pris en
                    charge (MP4, Webm).
                `,
                description: [
                    `Les différentes opérations sur les fichiers ont été réalisées avec Akka-stream,
                    à l'aide de Flows customs permettant de (dé)compresser et/ou de (dé)chiffrer à la volée les données des fichiers.`,
                    `Ces fichiers sont organisés dans une arborescence suportant toutes les opérations classiques
                    (déplacement, suppression, etc..) permettant de les organiser comme un file system classique.`,
                    `L'arborescence est mise à plat dans une base PostgreSQL, afin d'éviter toute contraintes de récursivité ou de performance.`
                ],
                github: 'Cumulus-Cloud/cumulus'
            },
            {
                title: 'Raspi-sensor',
                afterTitle: 'Plugin Node.js C++',
                tags: [ 'Rapsberry Pi', 'C++', 'Node.js' ],
                quote: `Plugin NodeJS réalisé en C++ permettant d’exploiter en JavaScript les
                        informations de différents capteurs reliés à un RapsberryPi.
                        Actuellement le DHT22 (température et humidité), le BMP 180 (température
                        et pression) et le TLS261 (luminosité) sont supportés.
                `,
                description: [
                    `Le plugin adopte un fonctionnement asynchrone cher au JavaScript, et
                    propose un mode de récupération unique où à intervalle régulier.`
                ],
                github: 'Vuzi/raspi-sensors',
                npm: 'raspi-sensors'
            },
            {
                title: 'Show Me',
                afterTitle: "Hebergement d'images",
                tags: [ 'NodeJS', 'React', 'Redux', 'TypeScript' ],
                quote: `Hébergeur d'images réalisé exclusivement en TypeScript. Il permet
                        d'uploader des images avec des tags, de les servir et également de
                        les rechercher par tags ou nom.
                `,
                description: [
                    `Le front a été réalisé avec la librairie MaterialUI (react), et la
                    logique implémentée à l'aide de Redux et Thunk pour les opérations`,
                    `Le back est également en TypeScript, utilisant Express pour la
                    gestion des routes et PostgreSQL pour la persistance. Sharp est
                    utilisé pour les opérations sur les images.`
                ],
                github: 'Vuzi/showMe',
            },
            {
                title: 'Vuziks',
                afterTitle: "Interpréteur & langage",
                tags: [ 'C Language', 'Lexx/Yacc' ],
                quote: `Langage de scripting et son interpréteur, réalisé en C avec Lex
                        et Yacc. Gestion d'un mode intéractif, des conditions, boucles,
                        fonctions et objets.
                `,
                github: 'Vuzi/vuziks',
            },
        ]
    }
}

export default content
