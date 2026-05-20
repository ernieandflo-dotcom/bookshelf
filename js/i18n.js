/**
 * i18n.js -- Ernie And Flo
 *
 * All translatable UI strings live here.
 * Keys map 1-to-1 with data-i18n="key" attributes in HTML.
 *
 * Rules:
 *   - Book titles are NEVER translated (they stay as literal HTML).
 *   - Use the "html" suffix convention (e.g. nav.home__html) only when
 *     the value contains markup that must be set via innerHTML.
 *     Plain text keys use textContent -- safer and faster.
 *   - To add Kirundi: duplicate every key under `rn: { ... }`.
 *   - To add a new page: add a new section below and follow the same pattern.
 *   - No em dashes in any value.
 *
 * Language codes: "fr" (default) | "en"
 */

window.EAF_I18N = {

  fr: {

    /* ── Navigation ──────────────────────────────────────────── */
    "nav.home":   "Accueil",
    "nav.books":  "Livres",
    "nav.about":  "A propos",
    "nav.label":  "Navigation principale",
    "nav.mobile": "Menu mobile",
    "nav.toggle": "Menu",

    /* ── Footer ──────────────────────────────────────────────── */
    "footer.copy":    "\u00A9 2026 Ernie And Flo Creations. Tous droits reserves.",
    "footer.contact": "Contact",

    /* ── Book language badges (books.html) ───────────────────── */
    "badge.lang.fr": "Francais",
    "badge.lang.en": "Anglais",

    /* ── index.html ──────────────────────────────────────────── */
    "index.eyebrow":      "Nouveau · Avril 2026",
    "index.subtitle":     "Album psychoeducatif pour mieux comprendre l'itinerance",
    "index.description":  "Xavier croise Oli, un jeune homme sans domicile, en rentrant de l'ecole. Chamboule, il cherche a comprendre. Un recit touchant suivi d'une section documentaire, pour les 6 a 12 ans et pour tous ceux qui posent des questions.",
    "index.tag.illustre": "Illustre par Flo",
    "index.tag.age":      "6 ans et plus",
    "index.tag.pages":    "48 pages",
    "index.tag.price":    "22,95 $ CAD",
    "index.cta.details":  "Voir les details",
    "index.cta.buy":      "Acheter",
    "index.badge":        "Illustre par Flo",

    "index.quote":      "Un incontournable. J'invite tous les elus a en acheter pour les distribuer dans les ecoles, bibliotheques et librairies de leur communaute.",
    "index.quote.cite": "Manon Masse · Deputee, Quebec solidaire · Sainte-Marie-Saint-Jacques",

    "index.about.label":   "Le livre",
    "index.about.heading": "Aborder simplement un enjeu complexe",
    "index.about.p1__html": "L'itinerance prend de l'ampleur un peu partout dans le monde et peut inquieter les enfants. <em>Dans la rue</em> repond a leurs questions avec sensibilite et honnetete : un recit narratif d'abord, puis une section documentaire dense en informations concretes.",
    "index.about.p2__html": "Redige par <strong>L'Engrenage St-Roch</strong>, un organisme a but non lucratif ancre dans le quartier Saint-Roch a Quebec, et illustre avec soin par <strong>Florien Lavoisier Bizimana (Flo)</strong>, l'album cultive des valeurs d'ouverture d'esprit et de tolerance.",
    "index.about.p3__html": "Publie aux <strong>Editions Midi trente</strong>, qui remettront une partie des profits au <strong>Repit Basse-Ville</strong>.",

    "info.pages.value":   "48 pages",
    "info.pages.key":     "Format",
    "info.illus.value":   "Florien Bizimana",
    "info.illus.key":     "Illustrateur",
    "info.author.value":  "L'Engrenage St-Roch",
    "info.author.key":    "Redaction",
    "info.date.value":    "1er avril 2026",
    "info.date.key":      "Parution",
    "info.age.value":     "6 a 12 ans",
    "info.age.key":       "Age cible",
    "info.price.value":   "22,95 $ CAD",
    "info.price.key":     "Prix",

    "index.endorse.label":  "Ce qu'on en dit",
    "index.endorse.q1":     "Ce livre jeunesse sur l'itinerance a conquis le coeur et le portefeuille du depute solidaire Etienne Grandmont.",
    "index.endorse.q1cite": "Le Soleil · avril 2026",
    "index.endorse.q2":     "Un album qui aborde simplement un enjeu complexe.",
    "index.endorse.q2cite": "Mon Saint-Roch · 2026",

    "modal.title":    "Ou l'acheter",
    "modal.subtitle": "Choisissez votre libraire prefere :",
    "modal.close":    "Fermer",
    "modal.lib.label":  "Ou consultez-le gratuitement",
    "modal.miditrente": "Editions Midi trente (editeur)",
    "modal.pantoute":   "Librairie Pantoute",
    "modal.archambault":"Archambault",
    "modal.renaudbray": "Renaud-Bray",
    "modal.bib":        "Bibliotheque de Quebec",

    /* ── books.html ──────────────────────────────────────────── */
    "books.heading":           "Livres",
    "books.dlr.desc":          "Xavier trouve que son quartier a beaucoup change ces dernieres annees. Alors qu'il revient de l'ecole avec sa famille, il croise Oli, un jeune homme en situation d'itinerance. Chamboule, il cherche a comprendre pourquoi certaines personnes vivent dans la rue.",
    "books.dlr.author":        "Auteur :",
    "books.dlr.illustrator":   "Illustrateur :",
    "books.dlr.year":          "Annee :",
    "books.dlr.cta.details":   "Voir les details",
    "books.dlr.cta.buy":       "Acheter",
    "books.iw1hh.author":      "Auteur :",
    "books.iw1hh.year":        "Annee :",
    "books.iw1hh.desc__html":  "Rencontrez Conro, le Professeur Namahoro, et Jacob Jake Johnson Junior. Ils ont tous un point commun : ce sont des robots. Et ils n'hesitent pas a partager leur avis sur mes poemes.<br><br>\"Une sanglante introduction au poeme haiku.\"",
    "books.iw1hh.cta.pdf":     "PDF (5$ CAD)",
    "books.iw1hh.cta.sample":  "Extrait gratuit",
    "books.rnf2.author":       "Auteur :",
    "books.rnf2.year":         "Annee :",
    "books.rnf2.desc__html":   "Un manga canadien avec des designs de personnages createurs, des capacites mysterieuses et jamais vues, et des choregraphies de combat incroyables.<br><br>Beaucoup de n***** qui se battent. Beaucoup de n***** qui meurent.<br><br>Simple et direct.",
    "books.rnf2.cta.read":     "Lire le manga",
    "books.rnf2.note":         "*Gratuit pour une duree limitee*",

    /* ── about.html ──────────────────────────────────────────── */
    "about.heading":    "A propos",
    "about.lead__html": "Ernie et Flo sont deux freres artistes qui cherchent a exprimer leur creativite chacun a leur facon. De la poesie au manga, du hip-hop a la musique indie, ils font tout et refusent d'etre mis dans une boite.<br><br>Ernie And Flo Creations est la reponse a la question : \"Quel editeur est assez fou pour embarquer dans une telle proposition eclectique ?\"",
    "about.form.name":        "Nom",
    "about.form.name.ph":     "Votre nom",
    "about.form.email":       "Adresse courriel",
    "about.form.email.ph":    "votre@courriel.com",
    "about.form.message":     "Message",
    "about.form.message.ph":  "Votre message...",
    "about.form.consent":     "Je consens a l'utilisation de mes informations personnelles a des fins de communication.",
    "about.form.submit":      "Envoyer",
    "about.form.recaptcha":   "Veuillez completer la verification reCAPTCHA.",

    /* ── danslarue.html ──────────────────────────────────────── */
    "dlr.banner":            "Album jeunesse · L'Engrenage Saint-Roch x Midi trente · 2026",
    "dlr.quote":             "Ce projet rappelle que les personnes en situation d'itinerance sont des humains avant tout.",
    "dlr.quote.cite":        "Florien Lavoisier Bizimana - Illustrateur",
    "dlr.project.label":     "Le projet",
    "dlr.project.title":     "Ne d'un besoin du quartier",
    "dlr.project.lead":      "Un comite citoyen, des enseignants, des travailleurs de rue, des personnes touchees par l'itinerance et les enfants eux-memes ont faconne ce livre de bout en bout.",
    "dlr.col1.title":        "L'Engrenage Saint-Roch",
    "dlr.col1.p1":           "Depuis plusieurs annees, des parents et des intervenants du quartier Saint-Roch de Quebec signalaient un manque : les enfants sont temoins de l'itinerance, ils posent des questions, et les adultes ne se sentent pas toujours outilles pour y repondre.",
    "dlr.col1.p2__html":     "L'organisme a d'abord rencontre les eleves de <strong>l'ecole des Berges</strong> pour leur demander de dessiner ce que representait l'itinerance a leurs yeux. Les resultats etaient saisissants : les mots \"drogue\", \"suicide\", \"tristesse\" revenaient sans cesse. Un melange de crainte, de peur, d'incomprehension et de peine.",
    "dlr.col1.p3__html":     "<strong>Florien Lavoisier Bizimana</strong> a ete selectionne par 95 % des eleves comme illustrateur. Ne au Burundi, il a grandi a Saint-Roch - ce projet lui tenait particulierement a coeur.",
    "dlr.col2.title":        "Une voix humaine sur un enjeu complexe",
    "dlr.col2.p1":           "Les livres jeunesse existants sur l'itinerance montraient souvent \"le vieux monsieur barbu du village\". La realite d'aujourd'hui est tout autre : jeunes, femmes, personnes immigrantes, membres des communautes LGBTQ+.",
    "dlr.col2.p2":           "Les personnes en situation d'itinerance ont elles-memes participe au projet, partageant leur point de vue sur l'ouvrage. L'approche voulait tisser des liens de solidarite, pas de charite.",
    "dlr.col2.p3__html":     "Une personne anciennement itinerante a confie apres avoir relu le livre : <strong>\"Comment ca se fait qu'on est rendu a ecrire un livre pour expliquer aux enfants pourquoi il y a autant de misere dans les rues ?\"</strong>",

    "dlr.info.format.value":    "Album jeunesse",
    "dlr.info.format.key":      "Format",
    "dlr.info.age.value":       "Des 6 ans",
    "dlr.info.age.key":         "Public cible",
    "dlr.info.hood.value":      "Saint-Roch, Quebec",
    "dlr.info.hood.key":        "Quartier d'origine",
    "dlr.info.sponsor.value":   "L'Engrenage Saint-Roch",
    "dlr.info.sponsor.key":     "Commanditaire",
    "dlr.info.publisher.value": "Midi trente",
    "dlr.info.publisher.key":   "Maison d'edition",
    "dlr.info.illus.value":     "Florien L. Bizimana",
    "dlr.info.illus.key":       "Illustrateur",

    "dlr.press.label":        "Dans les medias",
    "dlr.press.title":        "Couverture de presse",
    "dlr.press.lead":         "Le livre a ete couvert par Radio-Canada et Mon Saint-Roch des son lancement a la bibliotheque Gabrielle-Roy.",
    "dlr.press1.outlet":      "Radio-Canada · ICI",
    "dlr.press1.headline":    "\"Dans la rue\", un livre sur l'itinerance pour les enfants",
    "dlr.press1.excerpt":     "Des eleves de l'ecole primaire des Berges partagent leur regard sur l'itinerance autour de ce nouveau livre illustre, accompagne de conseils pour les parents et les enseignants. L'organisme espere qu'il deviendra un outil d'education incontournable.",
    "dlr.press1.link":        "Lire l'article",
    "dlr.press2.outlet":      "Mon Saint-Roch",
    "dlr.press2.headline":    "Aborder simplement un enjeu complexe",
    "dlr.press2.excerpt":     "Lance a la bibliotheque Gabrielle-Roy avec musique, echanges et prises de parole, l'album jeunesse Dans la rue met en avant la problematique de l'itinerance a travers les yeux des enfants du quartier Saint-Roch.",
    "dlr.press2.link":        "Lire l'article",

    "dlr.endorse.label":    "Soutien politique",
    "dlr.endorse.title":    "Un \"incontournable\" selon les elus",
    "dlr.endorse.lead":     "Des membres de l'Assemblee nationale du Quebec ont salue le livre et appellent leurs collegues a le distribuer dans leurs communautes.",
    "dlr.card1.tag":        "Quebec solidaire · Sainte-Marie-Saint-Jacques",
    "dlr.card1.quote":      "Un incontournable. J'invite tous mes collegues a faire comme moi et a en acheter pour les distribuer dans leur communaute - ecoles, bibliotheques et librairies.",
    "dlr.card1.name":       "Manon Masse, deputee",
    "dlr.card2.tag":        "Quebec solidaire · Taschereau",
    "dlr.card2.quote__html":"Etienne Grandmont a rejoint Manon Masse dans son appel aux elus pour que <em>Dans la rue</em> trouve sa place dans les milieux scolaires et communautaires a travers le Quebec.",
    "dlr.card2.name":       "Etienne Grandmont, depute de Taschereau",

    "dlr.children.quote":      "Quand je vois quelqu'un dans la rue, ca me fait sentir que j'ai de la chance parce que, moi, j'ai une maison, j'ai des parents qui m'aiment, j'ai de la nourriture.",
    "dlr.children.cite":       "Lou Warnke Lake - eleve, ecole des Berges",

    "dlr.gallery.label":  "Lancement · Bibliotheque Gabrielle-Roy",
    "dlr.gallery.title":  "Journee en images",
    "dlr.gallery.lead":   "Musique, lectures par les eleves, prises de parole et rencontres - une soiree memorable pour un livre ne du quartier.",
    "dlr.gallery.alt1":   "Lancement de Dans la rue a la bibliotheque Gabrielle-Roy",
    "dlr.gallery.alt2":   "Meet and greet avec Florien Bizimana",
    "dlr.gallery.alt3":   "Eleves de l'ecole des Berges au lancement",

    "dlr.final.quote":  "Un outil pour parents, enseignants et intervenants - et un cadeau pour les enfants qui cherchent des mots.",
    "dlr.final.cta":    "Obtenir le livre",

    /* ── iw1hh.html ──────────────────────────────────────────── */
    "iw1hh.subtitle":  "Then Robots Ruthlessly Rated Them",
    "iw1hh.tagline":   "\"Une sanglante introduction au poeme haiku.\"",
    "iw1hh.p1":        "Ce livre ressemble beaucoup a un haiku lui-meme : une histoire courte, mais tres evocatrice. Il cache, sous sa forme simple et son ton humoristique, les nuages omineux qui planent au-dessus de nos tetes : la propagation de l'intelligence artificielle et notre impuissance face a sa practicite et son utilite.",
    "iw1hh.p2":        "Rires, insultes, moments de tendresse et profondes meditations.",
    "iw1hh.p3__html":  "<em>I Wrote 100 Haiku: Then Robots Ruthlessly Rated Them</em> est un court voyage, mais qui vaut le detour !",
    "iw1hh.cta.pdf":   "PDF (5$ CAD)",
    "iw1hh.cta.sample":"Extrait gratuit",
    "iw1hh.sample.click": "Cliquez ici pour recevoir un extrait gratuit du livre.",

    /* ── sample.html ─────────────────────────────────────────── */
    "sample.heading":       "Obtenez un extrait gratuit !",
    "sample.lead__html":    "Entrez vos informations ci-dessous pour recevoir un extrait gratuit de <em>\"I Wrote 100 Haiku: Then Robots Ruthlessly Rated Them.\"</em>",
    "sample.form.name":     "Nom",
    "sample.form.name.ph":  "Votre nom",
    "sample.form.email":    "Adresse courriel",
    "sample.form.email.ph": "votre@courriel.com",
    "sample.form.consent":  "J'accepte l'utilisation de mes informations personnelles a des fins de communication.",
    "sample.form.submit":   "Recevoir l'extrait (GRATUIT)",
    "sample.success":       "Merci ! Votre extrait a ete envoye a votre adresse courriel. Vous allez etre redirige vers la page d'accueil.",

    /* ── message-sent.html ───────────────────────────────────── */
    "msgsent.title": "Merci !",
    "msgsent.p1":    "Votre message nous a bien ete envoye.",
    "msgsent.p2":    "Vous allez etre automatiquement redirige vers la page d'accueil.",

    /* ── sample-sent.html ────────────────────────────────────── */
    "sampsent.title": "En route !",
    "sampsent.p1":    "Votre extrait est en chemin !",
    "sampsent.p2":    "Vous allez etre automatiquement redirige vers la page d'accueil."
  },


  en: {

    /* ── Navigation ──────────────────────────────────────────── */
    "nav.home":   "Home",
    "nav.books":  "Books",
    "nav.about":  "About Us",
    "nav.label":  "Main navigation",
    "nav.mobile": "Mobile navigation",
    "nav.toggle": "Menu",

    /* ── Footer ──────────────────────────────────────────────── */
    "footer.copy":    "\u00A9 2026 Ernie And Flo Creations. All rights reserved.",
    "footer.contact": "Contact",

    /* ── Book language badges ────────────────────────────────── */
    "badge.lang.fr": "French",
    "badge.lang.en": "English",

    /* ── index.html ──────────────────────────────────────────── */
    "index.eyebrow":      "New · April 2026",
    "index.subtitle":     "A psychoeducational picture book to better understand homelessness",
    "index.description":  "Xavier meets Oli, a young homeless man, on his way home from school. Shaken, he tries to understand. A touching story followed by a documentary section, for ages 6 to 12 and for anyone with questions.",
    "index.tag.illustre": "Illustrated by Flo",
    "index.tag.age":      "Ages 6 and up",
    "index.tag.pages":    "48 pages",
    "index.tag.price":    "CAD $22.95",
    "index.cta.details":  "See details",
    "index.cta.buy":      "Buy",
    "index.badge":        "Illustrated by Flo",

    "index.quote":      "A must-have. I invite every elected official to buy copies and distribute them in schools, libraries, and bookstores in their community.",
    "index.quote.cite": "Manon Masse · Member of the National Assembly, Quebec solidaire · Sainte-Marie-Saint-Jacques",

    "index.about.label":   "The book",
    "index.about.heading": "Addressing a complex issue simply",
    "index.about.p1__html": "Homelessness is growing around the world and can worry children. <em>Dans la rue</em> answers their questions with sensitivity and honesty: first a narrative story, then a dense documentary section filled with concrete information.",
    "index.about.p2__html": "Written by <strong>L'Engrenage St-Roch</strong>, a non-profit organization rooted in the Saint-Roch neighbourhood in Quebec City, and carefully illustrated by <strong>Florien Lavoisier Bizimana (Flo)</strong>, the book cultivates values of open-mindedness and tolerance.",
    "index.about.p3__html": "Published by <strong>Editions Midi trente</strong>, who will donate a portion of the proceeds to <strong>Repit Basse-Ville</strong>.",

    "info.pages.value":   "48 pages",
    "info.pages.key":     "Format",
    "info.illus.value":   "Florien Bizimana",
    "info.illus.key":     "Illustrator",
    "info.author.value":  "L'Engrenage St-Roch",
    "info.author.key":    "Written by",
    "info.date.value":    "April 1, 2026",
    "info.date.key":      "Published",
    "info.age.value":     "Ages 6 to 12",
    "info.age.key":       "Target age",
    "info.price.value":   "CAD $22.95",
    "info.price.key":     "Price",

    "index.endorse.label":  "What people are saying",
    "index.endorse.q1":     "This children's book on homelessness won over the heart and the wallet of MNA Etienne Grandmont.",
    "index.endorse.q1cite": "Le Soleil · April 2026",
    "index.endorse.q2":     "A picture book that addresses a complex issue simply.",
    "index.endorse.q2cite": "Mon Saint-Roch · 2026",

    "modal.title":    "Where to buy",
    "modal.subtitle": "Choose your preferred retailer:",
    "modal.close":    "Close",
    "modal.lib.label":  "Or borrow it for free",
    "modal.miditrente": "Editions Midi trente (publisher)",
    "modal.pantoute":   "Librairie Pantoute",
    "modal.archambault":"Archambault",
    "modal.renaudbray": "Renaud-Bray",
    "modal.bib":        "Bibliotheque de Quebec",

    /* ── books.html ──────────────────────────────────────────── */
    "books.heading":           "Books",
    "books.dlr.desc":          "Xavier notices his neighbourhood has changed a lot in recent years. Walking home from school with his family, he meets Oli, a young man experiencing homelessness. Shaken, he tries to understand why some people live on the street.",
    "books.dlr.author":        "Author:",
    "books.dlr.illustrator":   "Illustrator:",
    "books.dlr.year":          "Year:",
    "books.dlr.cta.details":   "See details",
    "books.dlr.cta.buy":       "Buy",
    "books.iw1hh.author":      "Author:",
    "books.iw1hh.year":        "Year:",
    "books.iw1hh.desc__html":  "Come meet Conro, Professor Namahoro, and Jacob Jake Johnson Junior. They all have something in common: they are robots. And they do not shy away when it comes to sharing what they think of my poems.<br><br>\"A bloody introduction to the haiku poem.\"",
    "books.iw1hh.cta.pdf":     "PDF (CAD $5)",
    "books.iw1hh.cta.sample":  "Free sample",
    "books.rnf2.author":       "Author:",
    "books.rnf2.year":         "Year:",
    "books.rnf2.desc__html":   "A Canadian-made manga with creative character designs, mysterious and never-before-seen abilities, and amazing fighting choreographies.<br><br>Lots of n***** fighting. Lots of n***** dying.<br><br>Simple and straight to the point.",
    "books.rnf2.cta.read":     "Read the Story",
    "books.rnf2.note":         "*Free for a limited time only*",

    /* ── about.html ──────────────────────────────────────────── */
    "about.heading":    "About Us",
    "about.lead__html": "Ernie and Flo are two artistic brothers looking to express their creativity in their own respective ways. From poetry, to manga, to hip-hop and indie music, they do it all and refuse to be put in a box.<br><br>Ernie And Flo Creations is an answer to the question: \"What publisher is crazy enough to buy into such an eclectic proposal?\"",
    "about.form.name":        "Name",
    "about.form.name.ph":     "Your name",
    "about.form.email":       "Email Address",
    "about.form.email.ph":    "your@email.com",
    "about.form.message":     "Message",
    "about.form.message.ph":  "Your message...",
    "about.form.consent":     "I consent to the use of my personal information for communication purposes.",
    "about.form.submit":      "Submit",
    "about.form.recaptcha":   "Please complete the reCAPTCHA verification.",

    /* ── danslarue.html ──────────────────────────────────────── */
    "dlr.banner":            "Children's book · L'Engrenage Saint-Roch x Midi trente · 2026",
    "dlr.quote":             "This project is a reminder that people experiencing homelessness are human beings first and foremost.",
    "dlr.quote.cite":        "Florien Lavoisier Bizimana - Illustrator",
    "dlr.project.label":     "The project",
    "dlr.project.title":     "Born from a neighbourhood need",
    "dlr.project.lead":      "A citizen committee, teachers, outreach workers, people affected by homelessness, and the children themselves all shaped this book from start to finish.",
    "dlr.col1.title":        "L'Engrenage Saint-Roch",
    "dlr.col1.p1":           "For several years, parents and community workers in Quebec City's Saint-Roch neighbourhood pointed to a gap: children witness homelessness, they ask questions, and adults don't always feel equipped to answer them.",
    "dlr.col1.p2__html":     "The organization first met with students at <strong>l'ecole des Berges</strong> and asked them to draw what homelessness meant to them. The results were striking: words like \"drugs\", \"suicide\", and \"sadness\" came up repeatedly. A mix of fear, incomprehension, and sorrow.",
    "dlr.col1.p3__html":     "<strong>Florien Lavoisier Bizimana</strong> was chosen by 95% of the students as illustrator. Born in Burundi, he grew up in Saint-Roch -- this project was especially meaningful to him.",
    "dlr.col2.title":        "A human voice on a complex issue",
    "dlr.col2.p1":           "Existing children's books on homelessness often depicted \"the old bearded man in the village.\" Today's reality is very different: young people, women, immigrants, members of LGBTQ+ communities.",
    "dlr.col2.p2":           "People experiencing homelessness participated in the project themselves, sharing their perspective on the work. The approach was about building solidarity, not charity.",
    "dlr.col2.p3__html":     "A formerly homeless person said after reading the book: <strong>\"How did we get to the point of writing a book to explain to children why there is so much misery on our streets?\"</strong>",

    "dlr.info.format.value":    "Children's picture book",
    "dlr.info.format.key":      "Format",
    "dlr.info.age.value":       "Ages 6 and up",
    "dlr.info.age.key":         "Target audience",
    "dlr.info.hood.value":      "Saint-Roch, Quebec City",
    "dlr.info.hood.key":        "Origin neighbourhood",
    "dlr.info.sponsor.value":   "L'Engrenage Saint-Roch",
    "dlr.info.sponsor.key":     "Sponsor",
    "dlr.info.publisher.value": "Midi trente",
    "dlr.info.publisher.key":   "Publisher",
    "dlr.info.illus.value":     "Florien L. Bizimana",
    "dlr.info.illus.key":       "Illustrator",

    "dlr.press.label":        "In the press",
    "dlr.press.title":        "Press coverage",
    "dlr.press.lead":         "The book was covered by Radio-Canada and Mon Saint-Roch from its very first day, launched at the Bibliotheque Gabrielle-Roy.",
    "dlr.press1.outlet":      "Radio-Canada · ICI",
    "dlr.press1.headline":    "\"Dans la rue\", a children's book about homelessness",
    "dlr.press1.excerpt":     "Students from l'ecole des Berges share their perspective on homelessness through this new illustrated book, which comes with guidance for parents and teachers. The organization hopes it will become an essential educational tool.",
    "dlr.press1.link":        "Read the article",
    "dlr.press2.outlet":      "Mon Saint-Roch",
    "dlr.press2.headline":    "Addressing a complex issue simply",
    "dlr.press2.excerpt":     "Launched at the Bibliotheque Gabrielle-Roy with music, readings, and speeches, the children's picture book Dans la rue brings the issue of homelessness to life through the eyes of children from the Saint-Roch neighbourhood.",
    "dlr.press2.link":        "Read the article",

    "dlr.endorse.label":    "Political support",
    "dlr.endorse.title":    "An \"essential\" book, say elected officials",
    "dlr.endorse.lead":     "Members of Quebec's National Assembly have praised the book and are calling on their colleagues to distribute it in their communities.",
    "dlr.card1.tag":        "Quebec solidaire · Sainte-Marie-Saint-Jacques",
    "dlr.card1.quote":      "A must-have. I invite all my colleagues to do as I did and buy copies to distribute in their community -- schools, libraries, and bookstores.",
    "dlr.card1.name":       "Manon Masse, MNA",
    "dlr.card2.tag":        "Quebec solidaire · Taschereau",
    "dlr.card2.quote__html":"Etienne Grandmont joined Manon Masse in calling on elected officials to bring <em>Dans la rue</em> into schools and community spaces across Quebec.",
    "dlr.card2.name":       "Etienne Grandmont, MNA for Taschereau",

    "dlr.children.quote":      "When I see someone on the street, it makes me feel lucky because I have a home, I have parents who love me, I have food.",
    "dlr.children.cite":       "Lou Warnke Lake - student, ecole des Berges",

    "dlr.gallery.label":  "Launch · Bibliotheque Gabrielle-Roy",
    "dlr.gallery.title":  "The day in pictures",
    "dlr.gallery.lead":   "Music, student readings, speeches, and encounters -- a memorable evening for a book born from the neighbourhood.",
    "dlr.gallery.alt1":   "Launch of Dans la rue at the Bibliotheque Gabrielle-Roy",
    "dlr.gallery.alt2":   "Meet and greet with Florien Bizimana",
    "dlr.gallery.alt3":   "Students from l'ecole des Berges at the launch",

    "dlr.final.quote":  "A tool for parents, teachers, and community workers -- and a gift for children looking for words.",
    "dlr.final.cta":    "Get the book",

    /* ── iw1hh.html ──────────────────────────────────────────── */
    "iw1hh.subtitle":     "Then Robots Ruthlessly Rated Them",
    "iw1hh.tagline":      "\"A bloody introduction to the haiku poem.\"",
    "iw1hh.p1":           "This book is much like a haiku itself -- a short, yet very telling story. It hides, in its simple form and humoristic tone, the ominous clouds that loom over our heads: the spread of artificial intelligence and our powerlessness before their practicality and usefulness.",
    "iw1hh.p2":           "Laughters, insults, moments of tenderness and profound meditations.",
    "iw1hh.p3__html":     "<em>I Wrote 100 Haiku: Then Robots Ruthlessly Rated Them</em> is a short journey, but one that's worth the voyage!",
    "iw1hh.cta.pdf":      "PDF (CAD $5)",
    "iw1hh.cta.sample":   "Free sample",
    "iw1hh.sample.click": "Click here to receive a free sample of the book.",

    /* ── sample.html ─────────────────────────────────────────── */
    "sample.heading":       "Get a Free Sample!",
    "sample.lead__html":    "Provide your details below to receive a free sample of <em>\"I Wrote 100 Haiku: Then Robots Ruthlessly Rated Them.\"</em>",
    "sample.form.name":     "Name",
    "sample.form.name.ph":  "Your name",
    "sample.form.email":    "Email Address",
    "sample.form.email.ph": "your@email.com",
    "sample.form.consent":  "I agree to the use of my personal information for communication purposes.",
    "sample.form.submit":   "Get sample (FREE)",
    "sample.success":       "Thank you! Your free sample has been sent to your email. You will be automatically redirected to the home page.",

    /* ── message-sent.html ───────────────────────────────────── */
    "msgsent.title": "Thank you!",
    "msgsent.p1":    "Your message was successfully sent to us.",
    "msgsent.p2":    "You will be automatically redirected to the home page.",

    /* ── sample-sent.html ────────────────────────────────────── */
    "sampsent.title": "On its way!",
    "sampsent.p1":    "Your sample is on the way!",
    "sampsent.p2":    "You will be automatically redirected to the home page."
  }

};
