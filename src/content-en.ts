
export const content = {
    title: `
        Hello! My name is <span class="colored">Guillaume</span> and I'm a <span class="colored">Software Engineer</span> 
        at <span class="colored">Memo Bank</span><img class="logo-title" src="/img/memo2.png">`,
    intro1: `
        I'm currently working at <span class="colored">Memo Bank</span>, helping them build a brand new European bank for SMEs. These days I'm working on 
        our banking core, which is responsible for handling everything between our ledger and our customers.<br/><br/>Before joining them, I was at 
        <span class="colored">Ditto Services</span> building a white label open banking solution, at <span class="colored">ReachFive</span> helping to build 
        & scale their CIAM solution and before that at <span class="colored">Zengularity</span> where I had the opportunity to learn plenty and
        meet a lot of talented people.
    `,
    intro2: `
        <span class="colored">Functional programming</span> advocate since my time at <span class="colored">Zengularity</span> and ardent defender of 
        « <span class="colored">Software craftsmanship</span> », I spent the last 5 years solving diverse technical and business challenges with a common goal:
        <span class="darker">offer the best solution within the limits of the resources involved</span>.<br/><br/>
        I think that the quality of piece of a code is never optional, and is a reflection of the intrinsic quality of the provided solution. I thus strive
        to always come up with a solution that I can be proud of.
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
                    `I had the opportunity to see many ways of responding to different technical challenges about the architecture of a software or system ; ranging from
                     a heavy client, a simple stateless web application, services communicating by messages to an event streaming system composed of hundreds of nano-services.`,
                    `I was finally able to implement for the first time what I had learned at <span class="colored">ReachFive</span>, where the existing monolithic software was modularized
                     in services. I thus had the opportunity to reduce interdependencies to a minimum and end with almost independent specialized modules. Some services
                     would then be added following the same model (for example an asynchronous worker, unstacking tasks ready to be performed). This was done along with a 
                     more classical refactgring of the codebase to reduce and contain the technical debt.`,
                    `<span class="colored">Ditto Service</span> and <span class="colored">Memo</span> also share this same service decoupling approach, but have different way of overcoming that
                    challenge. Where <span class="colored">Ditto</span> has made the choice of using function-sized nano-services, <span class="colored">Memo</span> made the choice of
                    a breakdown by domain; both using a message broker to propagate actions in their respective systems.`
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
                    Scala is a general-purpose programming language providing support for both object-oriented programming and functional programming. The language has 
                    a strong static type system. Designed to be concise, many of Scala's design decisions are aimed to address criticisms of Java.
                `,
                description: [
                    `Functional programming brings additional security to compilation, allowing to rely solely on static validation where <span class="colored">Java</span>,
                     for example, often has to rely on testing in addition to compilation to validate the validity of its code. This paradigm also allows you to think differently 
                     about your code, and to write a clearer declarative code more representative of your intentions.`,
                    `After discovering <span class="colored">Scala</span> (and more broadly functional programming) in school, I had the opportunity to building up 
                     my knowledge during my time at <span class="colored">Zengularity</span>, where I learned how to get the best out of it from the same people actively 
                     participating in the life of the language ecosystem.`,
                    `I then had the perfect occasion to use my knowledge at <span class="colored">ReachFive</span> and then later at <span class="colored">Ditto Services</span>
                     to build applications that are both complex (due to their respective functional scope) and robust, by relying on the <span class="colored">Scala</span> 
                     language, its paradigm, and as well as on the entire ecosystem that revolves around it.`
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
                     `In addition to providing typing, <span class="colored">TypeScript</span> also allows for a more descriptive approach to be explored in the
                      way of building applications (for example with <span class="colored">React</span> which use a declarative way of defining components).`,
                     `I used it extensively in frontend development (along with <span class="colored">JavaScript</span>) to build many web applications, of 
                      varying sizes and scopes. Where the <span class="colored">JavaScript</span> would have made it difficult, the usage of 
                      <span class="colored">TypeScript</span> gave us the consistency necessary to work in team with a large codebase on a complex domain.`,
                     `Finally, I have also had the opportunity to use it on the server side with <span class="colored">NodeJS</span> on many personal projects.
                      Easy to set up and quick to develop, typing ensures code clarity and longevity. Finally, the <span class="colored">JavaScript</span> 
                      ecosystem ensures that many libraries are mature enough (and for the most part already typed).` 
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
                    `Like <span class="colored">Scala</span>, <span class="colored">Kotlin</span> is also positioned as a « better <span class="colored">Java</span> », borrowing
                     notions of functional language while remaining strongly object oriented by nature. Unlike the <span class="colored">Scala</span> it is positioned closer to 
                     <span class="colored">Java</span> in its philosophy, and is not intended to be a functional language (even if it borrows some syntax from it). Interoparability with
                     <span class="colored">Java</span> also helps to make the transition between the two languages as transparent and quick as possible.`,
                    `After having spent almost 2 years of <span class="colored">Java</span> during my work-study program and having quickly abandoned this language in favor of <span class="colored">Scala</span>,
                     I had the opportunity to discover and learn <span class="colored">Kotlin</span> at <span class="colored">Memo Bank</span>. Easy to approach after having use
                     <span class="colored">Scala</span>, the language corrects many <span class="colored">Java</span> limitations and flaws due to its more modern approach and stronger typing.
                     It allows us at Memo to represent a complex business domain (as banks often are) in a clear and robust way, maintaining a high-quality code.
                     The interoperability with <span class="colored">Java</span> libraries allow us to take advantage of a rich and mature ecosystem, ensuring the best of both worlds.`
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
                    `I've used SQL database in almost all my projects, from <span class="colored">MySQL</span> when I still was learning the ropes, to <span class="colored">Oracle DB</span>
                     for larger companies when I was at <span class="colored">Zengularity</span> to PostgreSQL at <span class="colored">Memo</span> ; in application ranging from a 
                     REST service to a core banking system.`,
                    `I had the chance of using <span class="colored">MongoDB</span> for the first time at <span class="colored">Zengularity</span> in the particularly challenging application,
                     using event sourcing to trace all modifications on missions. <span class="colored">Mongo</span> brought us a lot of usefull features (like being document oriented, allowing 
                     us to direclty use JSON, and the scaling promises), altough with a few drawback (mainly not being able to have relationship and not being able to efficiently lock a document like
                     SQL bases usually allow it)`,
                    `I had a more mixed experience with <span class="colored">ElasticSearch</span>, as I sadly saw it used as a main database, bringing issues on the data consistency (as
                     <span class="colored">ES</span> is by default eventually consistent) and on its performance (since they had to force the refresh after each operation). Fortunately, we use 
                     it as intended at <span class="colored">Memo</span> to index and build
                     a search engine for our frontend application, where it can finally show all its power.`
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
                    `At my current job I mainly use <span class="colored">Docker</span> to define isolated and easily deployable work environments, allowing to replicate an 
                     architecture and associated services locally. I also had the opportunity to define containers used in production in a <span class="colored">Kubernetes</span> 
                     during my time at <span class="colored">Ditto Service</span>.`,
                    `I also had the opportunity to work on the <span class="colored">Jenkins</span> configuration on some projects where I worked, whether simply
                     on continuous integration or continuous deployment. I also used <span class="colored">Circle-ci</span> and <span class="colored">Travis</span>
                     for similar purposes.`,
                    `Finally, I take care of my <span class="colored">Linux</span> server myself, more by hobby than by necessity, using <span class="colored">Docker</span> 
                     to isolate my different services. This server host, among other things, the page you're currently reading.`
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
                    <span class="colored">Memo Bank</span> has a simple but ambitious goal: to create a new European banking establishment from scratch, 
                    to provide SMEs with the financial products and advice they deserve.
                    <br/><br/>
                    Three years after its creation, <span class="colored">Memo Bank</span> has obtained the green light from the Autorité de contrôle 
                    prudentiel et de résolution (ACPR) and the European Central Bank (ECB) to launch its offer, becoming the
                    first independent bank to emerge in France for 50 years.
                `,
                description: [
                    `Creation of a core banking system from scratch, using modern and secure technologies, ensuring that our banking system complies 
                     with all the auditability, security and performance constraints to which banks are subjected to. Integration with other external tools 
                     to communicate with other banks.`,
                    `Event sourcing is used for the ledger handling validation of currency operations on accounts in order to ensure total auditability and 
                     strong consistency on our data. Automatic export of this data in regulatory reports.`,
                    `Project developed in Kotlin (Spring, Hibernate) & Elixir (Event sourcing part) with PostgreSQL as our main database, ActiveMQ 
                    as our messaging queue and Kafka as our message broker.`
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
                    The <span class="colored">Ditto Services</span> Open Banking platform aims to allow companies to focus on their core business by
                    giving them access to a full range of easily integrated banking APIs, and thus develop the most innovative customer journeys.
                    <br/><br/>
                    Thanks to the partnership with the sister company Travelex Bank, a credit institution approved by the l’Autorité de Contrôle Prudentiel 
                    et de Résolution, they are developing the latest generation technological platform for the digital bank of tomorrow.
                `,
                description: [
                    `Creation of the <span class="colored">Ditto Services</span> new generation platform from scratch, using a micro-services based architecture
                     communicating with event-streaming, ensuring maximum decoupling between the different functional bricks.`,
                    `Project developed in Scala (Akka-http, Akka-actor, Cats, Fs2, Doobie, Cats-Effect) with PostgreSQL as our main database 
                     and Kafka as our message broker.`
                ]
            },
            {
                icon: 'reachfive-logo.png',
                date: '2018 - 2020',
                title: 'ReachFive',
                afterTitle: 'Lead developer',
                tags: [
                    'FP', 'Scala', 'TypeScript', 'ElasticSearch', 'Redis', 'Kafka'
                ],
                quote: `
                    The Customer Identy and Access Management (CIAM) solution of
                    <span class="colored">ReachFive</span> enables companies to have a complete and secure management of their
                    customers across all their points of contact, online and offline.
                `,
                description: [
                    `Strengthening of the codebase, structuring development (code reviews, continuous integration & clean code), launch of various 
                     refactoring projects to reduce technical debt and implementation of the latest features to provide a complete CIAM solution to 
                     our customers (Boulanger, Engie, Lacoste, etc.).`,
                    `Project developed in Scala (Play Framework, Shapeless, Cats) and TypeScript (React), with ElasticSearch & PostgreSQL as our databases.`
                ]
            },
            {
                icon: 'zen-logo.png',
                date: '2016 - 2018',
                title: 'Zengularity (Fabernovel since 2019)',
                afterTitle: 'Software architect',
                tags: [
                    'FP', 'Scala', 'TypeScript', 'PostgreSQL', 'MongoDB'
                ],
                quote: `
                    <span class="colored">Zengularity</span> (who joined the <span class="colored">Fabernovel</span> family in 2019) is a French 
                    company specializing in digital transformation and the web of tomorrow. Adept of new technologies, they offers adapted and modern 
                    solutions to companies wishing to carry out their digital revolution.<br/><br/>
                    <span class="colored">Zengularity</span> is also the birthplace of the Play Framework, known worldwide and used by the largest companies.
                `,
                description: [
                    `Development of a web platform facilitating the communication of the various parties in the mutual insurance business, 
                     in order to support them in their digital transition. Made using event sourcing to reflect the state changes of an insurance mission, and
                     to provide an auditable history.`,
                    `Project developed in Scala (Play Framework, Shapeless & Scalaz) and TypeScript (ReactJS, Flux & Less), with MongoDB as our main database.`,
                    `Development of an onboarding platform for the BNP Banking group, in order to digitize a lengthy and complicated paper process, 
                     and support them in their digital transition.`,
                    `Project developed in Scala (Play Framework & Cats) and TypeScript, using Oracle DB as our main database.`
                ]
            },
            {
                icon: 'esgi-logo.png',
                date: '2017 (6 months)',
                title: 'ESGI',
                afterTitle: 'Freelance teacher',
                tags: [
                    'FP', 'Scala', 'TypeScript', 'PostgreSQL', 'MongoDB'
                ],
                quote: `
                    Founded in 1983, the <span class="colored">ESGI</span> school trains its students in software developments to match the expectations 
                    and needs of companies in a very dynamic and moving sector.
                `,
                description: [
                    `Course on the « developer Tools » given to 3rd year students specializing in Software Architecture.`,
                    `Course on version management software (git), git related workflows, clean code and related tools, and an introduction on continuous integration.`
                ]
            },
            {
                icon: 'alter-logo.png',
                date: '2014-2016',
                title: 'Alter-Frame',
                afterTitle: 'Developer',
                tags: [
                    'Java', 'JEE', 'JavaFX', 'Spring'
                ],
                quote: `
                    <span class="colored">Alter Frame</span> is <span class="colored">Alter</span> Group’s software publisher and development structure. This structure aims to bring quality as an added value  
                    in the realization of full-web solutions and in the development of IT projects.
                `,
                description: [
                    `Development of a new tools within an existing software suite for the French car manufacturer PSA. A battery and alternator sizing tool 
                     (used to size electrical component according to the car's configuration and target climate), and an electrical diagram designer software.`,
                    `Code audit of a Java application (JEE & JBE) made for managing customers and contracts, for the French credit insurance company Euler Hermes.`,
                    `Realization of a satellite data visualization application (from plain file data) plotted on a two-dimensional projection of the earth for Eutelsat,
                     with the goal to display satellite coverage on earth in a comprehensive way.`
                ]
            },
            {
                icon: 'scality-logo.png',
                date: '2014 (3 months internship)',
                title: 'Scality',
                afterTitle: 'Developer',
                tags: [
                    'C Language', 'Python', 'Robot Framework', 'Jenkins'
                ],
                quote: `
                    <span class="colored">Scality</span> is a pioneering innovator of file & object storage, multi cloud data storage. 
                    Offering best scale out and multi cloud data management solutions.
                    The <span class="colored">Scality</span> RING, their main product, is a scale-out object storage software platform 
                    that delivers petabyte-scale software-defined storage designed to run on commodity hardware. Therefore, providing 
                    cost-effective scaling, performance, and auto-recovery.
                `,
                description: [
                    `Intervention on <span class="colored">Scality</span>'s flagship project, the RING (a very high capacity and very high availability storage solution),
                     on its implementation of unit tests and associated metrics (reports, code coverage).`,
                    `Choice and implementation of a unit testing framework for a C language based software, with adaptation of compilation targets,
                     porting of existing tests, and addition of new unit tests.`
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
                title: "Master's degree in Software Architecture",
                afterTitle: 'ESGI',
                detail: "« Titre niveau I d'expert en ingénierie de l’informatique et des systèmes d’information »",
                quote: `The Software Architecture specialization at <span class="colored">ESGI</span> is an expert training on the design methods and realization of software 
                        solutions meeting the complex needs of companies from all the sectors (finance, industry, IT services companies, software publishers, etc.).`,
                link: {
                    url: "http://www.esgi.fr/ecole-informatique/programmes/master-informatique-programmation.html",
                    text: 'Information about the specialization'
                }
            },
            {
                date: '2011 - 2014',
                title: "Bachelor's degree in Software Architecture",
                afterTitle: 'ESGI',
                detail: "« Titre niveau II de chef de projet logiciel et réseaux »",
                quote: `The Bachelor Degree at <span class="colored">ESGI</span> specialized in Software Architecture allows
                        students to acquire operational skills through numerous educational projects, while acquiring theoretical software architecture skills (languages, UML modeling, databases).`,
                link: {
                    url: "http://www.esgi.fr/ecole-informatique/programmes/bachelor-informatique-programmation.html",
                    text: 'Information about the specialization'
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
                afterTitle: 'Secure File Storage Server',
                tags: [ 'Scala', 'Akka HTTP', 'Akka Streams' ],
                quote: `File storage server made in Scala with Akka-http. Stored files can be compressed and encrypted. Files can also be streamed, make it possible to stream 
                        videos via HTML5 for supported formats (MP4, Webm).
                `,
                description: [
                    `The various operations on the files were carried out with Akka-stream,
                    using custom Flows allowing to (de)compress and/or (de)encrypt files on the fly.`,
                    `These files are organized in a tree structure supporting all the classical operations
                    (move, delete, etc.) allowing them to be organized like a classic file system.`,
                    `The tree structure is flattened in a PostgreSQL database, in order to avoid any recursion or performance constraints.`
                ],
                github: 'Cumulus-Cloud/cumulus'
            },
            {
                title: 'Raspi-sensor',
                afterTitle: 'Node.js C++ Plugin',
                tags: [ 'Rapsberry Pi', 'C++', 'Node.js' ],
                quote: `NodeJS plugin made in C ++ allowing the use in JavaScript of
                        information from different sensors connected to a RapsberryPi.
                        Currently DHT22 (temperature and humidity), BMP 180 (temperature
                        and pressure) and TLS261 (brightness) are supported.
                `,
                description: [
                    `The plugin adopts an asynchronous operation dear to JavaScript, and
                     offers a one-of recovery mode or at regular intervals.`
                ],
                github: 'Vuzi/raspi-sensors',
                npm: 'raspi-sensors'
            },
            {
                title: 'Show Me',
                afterTitle: "Image hosting",
                tags: [ 'NodeJS', 'React', 'Redux', 'TypeScript' ],
                quote: `Image hosting service made exclusively in TypeScript. It allows
                        to upload images with tags, to serve them and finally to
                        search them by tags or name.
                        `,
                description: [
                    `The frontend was made with the MaterialUI library (react), and the
                     logic implemented using Redux and Thunk for asynchronous operations.`,
                    `The backend is also in TypeScript, using Express for it controller
                     and PostgreSQL for persistence. Sharp is
                     used for operations on images.`
                ],
                github: 'Vuzi/showMe',
            },
            {
                title: 'Vuziks',
                afterTitle: "Scripting language",
                tags: [ 'C Language', 'Lexx/Yacc' ],
                quote: `Scripting language and its interpreter, made in C with Lex
                        and Yacc. Built with an interactive mode, conditions, loops,
                        functions and objects.
                        `,
                github: 'Vuzi/vuziks',
            },
        ]
    }
}

export default content
