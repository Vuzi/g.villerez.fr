
export default {

	info : {
		name : 'Guillaume Villerez',
		job : 'Lead Développeur, ReachFive',
		location : 'Région parisienne, France',
		mail : 'guillaume@villerez.fr',
		linkedin : 'linkedin.com/in/villerez',
		github : 'github.com/Vuzi',
		about : [
			`Software craftsman, FP advocate & technophile`,
			`Curieux et passionné depuis toujours par l'informatique et les nouvelles technologies,
			je travaille actuellement en tant que lead développeur chez ReachFive, après deux années chez Zengularity où je suis tombé dans le fonctionnel.`
		]
	},

	skills : [
		{
			title : 'Backend',
			skills : [
				{
					tech : 'Scala',
					detail : 'FP, Play, Akka (http, streams & actor), ReactiveMongo',
					level : 90
				},
				{
					tech : 'TypeScript',
					detail : 'NodeJS, Express',
					level : 95
				},
				{
					tech : 'Java SE',
					detail : '(Swing, JavaFx, JUnit)',
					level : 100
				},
				{
					tech : 'Java EE',
					detail : '(Tomcat, Glassfish, JPA, JAXB, Hibernate)',
					level : 75
				},
				{
					tech : 'C/C++',
					detail : 'Système Linux, pthread, SDL',
					level : 60
				}
			]
		},
		{
			title : 'Frontend',
			skills : [
				{
					tech : 'HTML5 & CSS3',
					detail : '(Less, Mustache, EJS)',
					level : 90
				},
				{
					tech : 'TypeScript',
					detail : 'React, Redux, Spacelift',
					level : 95
				}
			]
		},
		{
			title : 'Mobile et embarqué',
			skills : [
				{
					tech : 'Java Android',
					detail : '7/8/9',
					level : 60
				},
				{
					tech : 'Notions en Objective-C'
				},
				{
					tech : 'Développement sur RaspberryPi'
				}
			]
		},
		{
			title : 'Base de données',
			skills : [
				{
					tech : 'NoSQL',
					detail : 'MongoDB, ElasticSearch',
					level : 60
				},
				{
					tech : 'SQL',
					detail : 'PostgreSQL, MySQL',
					level : 60
				}
			]
		},
		{
			title : undefined,
			skills : [
				{
					tech : 'Kafka'
				},
				{
					tech : 'Docker',
					detail : 'Mise en place d\'une stack de dev, création de dockerfile & docker compose',
				}
			]
		}
	],


	career : [
		{
			company : 'ReachFive',
			status : 'Lead développeur',
			date : '2018 - Présent',
			logo : 'reachfive-logo.png',
			tags : [ 'FP', 'Scala', 'TypeScript', 'ElasticSearch', 'Kafka' ],
			quote : `La soluon de Customer Identy and Access Management (CIAM) de
							 ReachFive permet aux entreprises une geson complète et sécurisée de leurs
							 clients sur l’ensemble de leurs points de contact, online et offline.`,
			description : [
				`Reprise de la codebase, structuration du développement (revues de code, intégration continue & clean code),
				 lancement de divers chantiers de refactoring pour résorber la dette technique et mise en place des dernières
				 fonctionnalités pour offrir une solution CIAM complète à l'ensemble de nos clients (Boulanger, Engie, Lacoste, etc..).`,

				`Projet réalisé en Scala (Play Framework, Shapeless, Cats & MongoDB) et TypeScript (React).`
			]
		},
		{
			company : 'Zengularity',
			status : 'Architecte logiciel',
			date : '2016 - 2018',
			logo : 'zen-logo.png',
			tags : [ 'FP', 'Scala', 'TypeScript', 'PostgreSQL', 'MongoDB' ],
			quote : `Zengularity est une entreprise française spécialisée dans le web de demain.
							 Adepte des nouvelles technologies celle-ci propose des choix adaptés et
							 modernes aux entreprises souhaitant effectuer leur révolution numérique`,
			description : [
				`Développement d'une plateforme web facilitant la mise en relation des différents acteurs du métier
				 de la mutuelle afin de les accompagner dans leur transition numérique.`,

				`Projet réalisé en Scala (Play Framework, Shapeless, Scalaz & MongoDB) et TypeScript (ReactJS, Flux & Less).
				 Utilisation de l'event-sourcing afin de retranscrire au mieux les événements métier.`,

				`Développement d'une plateforme d'onboarding pour un grand groupe bancaire afin de numériser un processus papier
				 et les accompagner dans leur transition numérique.`,

			  `Projet réalisé en Scala (Play Framework, Cats & Oracle) et TypeScript.`
			]
		},
		{
			company : 'ESGI',
			status : 'Enseignant',
			date : '2017 - 6 mois',
			logo : 'esgi-logo.png',
			quote : `Créée en 1983, l’école d’informatique ESGI forme ses étudiants aux évolutions de l’informatique en
			         s’adaptant aux besoins des entreprises d’un secteur très dynamique.`,
			description : [
				`Cours sur les outils du développeur aux 3ème années spécialisation Architecture Logicielle.`,
				`Cours portant sur les gestionnaires de version (git), les workflow git, le clean code et ses outils associés, et enfin une introduction sur l'intégration continue.`
			]
		},
		{
			company : 'Alter-Frame',
			status : 'Développeur',
			date : '2014 - 2016',
			logo : 'alter-logo.png',
			tags : [ 'Java', 'TypeScript', 'PostgreSQL', 'MongoDB' ],
			quote : `Alter Frame est la structure d’édition de logiciels et de développement
						   au forfait d’Alter Groupe. Cette structure a pour vocation d’apporter une
							 véritable plus value qualitative dans la réalisation de solutions full-web
							 et le développement de projets informatiques.`,
			description : [
				`Développement d’un nouvel outil sur une suite logicielle de dimensionnement de
				 batteries et d’alternateurs pour un constructeur automobile Français.`,

				`Audit de code d'une application Java (JEE & JBE) de gestion de clients et de
				 contrats, pour une entreprise Française d'assurance crédit.`,

				`Réalisation d’une application de visualisation de données satellite (fichier)
				 sur une projection en deux dimensions de la terre.`
			]
		},
		{
			company : 'Scality',
			status : 'Développeur',
			date : '2014 - Stage de 3 mois',
			logo : 'scality-logo.png',
			tags : [ 'C', 'Robot Framework', 'Jenkins' ],
			quote : `Scality développe et propose le Ring, une solution de stockage de très
							 haute capacité et de très haute performance. Cette solution est
							 actuellement utilisée par de nombreuses entreprises comme RTL, Comcast
							 ou encore Dailymotion.`,
			description : [
				`Intervention sur le projet phare de Scality, le RING (une solution de stockage
				 de très haute capacité et de très haute disponibilité), au niveau de la mise
				 en place de tests unitaires et de métriques associées.`,

				`Choix et mise en place d’un framework de tests unitaires dans une solution
				 réalisée en C, avec adaptation des cibles de compilation, portage des tests
				 existants, et ajout de nouveaux tests unitaires.`
			]
		}
	],

	projects : [
		{
			title : 'Cumulus',
			detail : 'Serveur de stockage de fichiers',
			tags : [ 'Scala', 'Play', 'Akka Stream' ],
			quote : `Serveur de stockage de fichiers réalisé en Scala avec Play Framework. Les fichiers stockés
			         peuvent être compressés et chiffrés afin de pouvoir les sécuriser. Les fichiers peuvent
			         également être streamés, rendant possible le streaming vidéos via HTML5 pour les formats pris en
			         charge (MP4, Webm).`,
			description : [
				`Les différentes opérations sur les fichiers ont été réalisées avec Akka Stream,
				 à l'aide de Flows customs permettant de (dé)compresser et/ou de (dé)chiffrer à la volée les données des fichiers.`,

				`Ces fichiers sont organisés dans une arborescence suportant toutes les opérations classiques
				 (déplacement, suppression, etc..) permettant de les organiser comme un file system classique.`,

				`L'arborescence est mise à plat dans une base PostgreSQL, afin d'éviter toute contraintes de récursivité ou de performance.`
			],
			links : [
				{
					type : "github",
					href : "https://github.com/Cumulus-Cloud/cumulus",
					value : "github.com/Cumulus-Cloud/cumulus"
				}
			]
		},
		{
			title : 'Raspi-sensor',
			detail : 'Plugin Node.js C++',
			tags : [ 'Rapsberry Pi', 'C++', 'Node.js' ],
			quote : `Plugin NodeJS réalisé en C++ permettant d’exploiter en JavaScript les
						 	 informations de différents capteurs reliés à un RapsberryPi.
							 Actuellement le DHT22 (température et humidité), le BMP 180 (température
							 et pression) et le TLS261 (luminosité) sont supportés.`,
			description : [
				`Le plugin adopte un fonctionnement asynchrone cher au JavaScript, et
				 propose un mode de récupération unique où à intervalle régulier.`
			],
			links : [
				{
					type : 'github',
					href : 'https://github.com/Vuzi/raspi-sensors',
					value : 'github.com/Vuzi/raspi-sensors'
				},
				{
					type : 'npm',
					href : 'https://npmjs.com/package/raspi-sensors',
					value : 'npmjs.com/package/raspi-sensors'
				}
			]
		},
		{
			title : 'Show Me',
			detail : "Hebergement d'images",
			tags : [ 'Node.js', 'Redux', 'React', 'TypeScript' ],
			quote : `Hébergeur d'images réalisé exclusivement en TypeScript. Il permet
							 d'uploader des images avec des tags, de les servir et également de
							 les rechercher par tags ou nom.`,
			description : [
				`Le front a été réalisé avec la librairie MaterialUI (react), et la
				 logique implémentée à l'aide de Redux et Thunk pour les opérations
				 réseau asynchrones.`,
				`Le back est également en TypeScript, utilisant Express pour la
				 gestion des routes et PostgreSQL pour la persistance. Sharp est
				 utilisé pour les opérations sur les images.`
			],
			links : [
				{
					type : 'github',
					href : 'https://github.com/Vuzi/showMe',
					value : 'github.com/Vuzi/showMe'
				}
			]
		},
		{
			title : 'Vuziks',
			detail : 'Interpréteur & langage',
			tags : [ 'lex/yacc', 'C' ],
			quote : `Langage de scripting et son interpréteur, réalisé en C avec Lex
			         et Yacc. Gestion d'un mode intéractif, des conditions, boucles,
			         fonctions et objets.`,
			description : [ ],
			links : [
				{
					type : "github",
					href : "https://github.com/Vuzi/vuziks",
					value : "github.com/Vuzi/vuziks"
				}
			]
		}
	],

	education : [
		{
			school : 'ESGI',
			diploma : 'Master Architecture logicielle',
			date : '2014 - 2016',
			detail : "Titre niveau I d'expert en ingénierie de l’informatique et des systèmes d’information",
			quote : `La spécialisation en Architecture des logiciels est une formation d'expert sur les méthodes de
							 conception et de réalisation de solutions logicielles répondant aux besoins complexes des
							 entreprises, tous secteurs confondus (finance, industrie, SSII, éditeurs de logiciels…).`,
			link : {
				href : 'http://www.esgi.fr/ecole-informatique/programmes/master-informatique-programmation.html',
				value : 'Informations sur la formation'
			}
		},
		{
			school : 'ESGI',
			diploma : 'Bachelor Architecture logicielle',
			date : '2011 - 2014',
			detail : 'Titre niveau II de chef de projet logiciel et réseaux',
			quote : `Le Cycle Bachelor en informatique de l'ESGI spécialisé en Architecture des Logiciels permet aux
							 étudiants d'acquérir des compétences opérationnelles au travers de nombreux projets pédagogiques
							 , tout en acquérant des compétences d'architecture logicielle (langages, modélisation UML, BDD).`,
			link : {
				href : 'http://www.esgi.fr/ecole-informatique/programmes/bachelor-informatique-programmation.html',
				value : 'Informations sur la formation'
			}
		},
		{
			school : 'École notre Dame Providence',
			diploma : 'Baccalauréat',
			date : '2010',
			detail : 'Baccalauréat Scientifique - Mention assez bien'
		}
	],

	associations : [
		{
			title : "Developer Days",
			status : "ESGI",
			date : "2015",
			description : [ "Présentation aux étudiants du langage Scala, au travers du développement d'un logiciel " +
											"permettant de déchiffrer automatiquement  le code de César en se basant sur la fréquence " +
											"des différentes lettres du message." ],
			links : [
					{
							type : "github",
							href : "https://github.com/Vuzi/CeasarDecoder",
							value : "github.com/Vuzi/CeasarDecoder"
					}
			]
		},
		{
			title : "Code kata",
			status : "ESGI",
			date : "2014",
			description : [ "Association de 'code kata' à l’ESGI, avec réalisation de différents katas en Python." ]
		},
		{
			title : "Association de programmation",
			status : "ESGI",
			date : "2012-2013",
			description : [ "Association de programmation à l’ESGI, langage C et SDL." ]
		}
	],

	publications : [
		{
			title : 'Les limites des langages interprétés',
			date : '2016',
			detail : 'Quelles sont les limites actuelles des langages interprétés, et comment les surmonter ?',
			description : [
				`Mémoire réalisé dans le cadre de la validation de mes études. La montée en puissance récente du monde
				 du web propose également de nouveaux défis à ces langages en pleine période transitoire ; les
				 anciennes technologies meurent ou s’adaptent afin de gommer toujours plus les limites qui les séparent
				 des langages traditionnels, interprétés ou non.`,

				`Ce mémoire tentera de traiter avec le plus de recul possible les limitations actuelles des différents
				 langages interprétés, et les différentes réponses possibles à ces problématiques (qu’elles soient déjà
				 utilisées ou simplement à l’état de projet).`
			],
			link : {
				href : 'files/thesis.pdf',
				value : 'Mémoire au format PDF'
			}
		}
	],

	languages : [
		{
			lang : 'Anglais',
			level : 'professionnel',
			certification : '(TOEIC 970/990)'
		},
		{
			lang : 'Français',
			level : 'langue natale'
		}
	]
}

