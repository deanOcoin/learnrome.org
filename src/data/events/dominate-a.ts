// 284-324 CE, Diocletian to Constantine's sole rule

import type { RomeEvent } from '../../types';

export const DOMINATE_A_EVENTS: RomeEvent[] = [
  {
    id: 'diocletian-284ce',
    year: 284,
    era: 'dominate',
    weight: 3,
    reliability: 'well-attested',
    title: 'Diocletian Takes the Throne',
    headline:
      'A Dalmatian soldier of no family is acclaimed emperor by an army that has burned through dozens of his kind — and holds power for twenty-one years, rebuilding the state from the tax rolls up.',
    tags: ['constitutional', 'military'],
    body: `On November 20, 284, outside Nicomedia in Asia Minor, the army of the dead emperor Numerian acclaimed a Dalmatian officer named Diocles — a career soldier of obscure and possibly servile origins who had risen to command the imperial bodyguard. Before the assembled troops he swore he was innocent of Numerian's death, then drew his sword and killed the praetorian prefect Aper, the man the army blamed for it, on the spot. Taking the grander name Diocletian, he defeated Numerian's brother Carinus at the river Margus the following year and was master of the empire. Nothing about the scene was new: the previous fifty years had produced soldier-emperors by exactly this ritual at the rate of one every two years, and the ritual usually ended with the new man murdered by the next. What was new was everything that followed. Diocletian reigned for twenty-one years, restructured nearly every institution the Roman state possessed, and became the first emperor in its history to lay down the office voluntarily and outlive it.

He was a product of the crisis he ended. The third century had burned away the senatorial monopoly on command, and the Danube provinces — militarized, Latin-speaking, poor — had become the empire's officer academy. Diocletian came out of that world with no ancestors worth naming and no illusions about how emperors died. He inherited from Aurelian and Probus an empire whose borders had been roughly reassembled but whose machinery — succession, coinage, provincial command, taxation — was still exactly the machinery that had failed for five decades.

His first structural decision came within a year, and it reveals the cast of mind. Rather than trust his own luck on two frontiers at once, he appointed a colleague: his comrade-in-arms Maximian, first as Caesar, then as full co-Augustus in the west. Rome had seen co-emperors before, but as dynastic courtesy, not as design. This was design — a deliberate division of an impossible job — and it was the seed of the full tetrarchy of 293.

The rest of the program unspooled over two decades, and each piece gets its own entry in this timeline: the provinces halved in size and doubled in number, with soldiers and civilians answering to separate hierarchies; a new census and a tax levied in grain, cloth, and labor because the silver coinage was past saving; a ceremonial monarchy of diadem and prostration; an edict fixing the price of everything; and, at the end, the last and largest persecution of the Christians. The pieces were uneven — the price edict failed utterly — but the sum was a different Roman state: bigger, heavier, more bureaucratic, more openly autocratic, and workable.

Measure the achievement against the inheritance. Between 235 and 284, perhaps two emperors died of natural causes; Diocletian ruled for twenty-one years, faced no successful challenge to his own throne, retired on his own schedule, and died in bed. The state he rebuilt fought on in the west for another century and a half, and in the east for more than a thousand years. Historians reach for the word 'refounding,' and it is barely an exaggeration — though it is worth remembering how thin our sources are: no Tacitus covers this reign, and much of what survives is hostile pamphlet and compressed epitome.`,
    whyItMatters: `Every emperor since Septimius Severus had treated the crisis as a run of emergencies — pay the soldiers more, kill the current rival, march to the current breach. Diocletian is the first ruler since Augustus to treat the empire's problems as design flaws. If emperors are made and unmade by frontier armies, multiply the emperors and station one on each frontier. If governors rebel, shrink the provinces until no governor commands enough to matter. If the coinage cannot be trusted, tax the real economy instead. Almost every institution of the late empire — and through it, of Byzantium — comes out of this one reign's willingness to redesign rather than restore.

His reign also breaks the most persistent false picture people carry of Rome: the long, steady slide from a golden age to 476. There was no slide. There was a near-total collapse, then a deliberate, successful reconstruction — and the empire that emerged was not the Principate patched up but a second, different state. The one flaw Diocletian could not engineer away was succession, and it is the flaw that would dismantle his system within months of his retirement.`,
    misconception: {
      claim:
        'The Roman Empire declined steadily from its golden age until it finally fell.',
      correction:
        'It nearly disintegrated in the fifty years before 284, then was deliberately rebuilt by Diocletian and Constantine into a state that lasted nearly two more centuries in the west and over a millennium in the east. The line from Marcus Aurelius to 476 is not a slope — it is a collapse, a reconstruction, and a second, different empire.',
    },
    control: {},
    connects: ['crisis-begins-235ce', 'aurelian-270ce', 'army-transformation-270ce'],
    sources: [
      {
        author: 'Aurelius Victor',
        work: 'De Caesaribus',
        note: "A brief, moralizing epitome from the 360s. No full narrative history of Diocletian's reign survives; we reconstruct it from summaries like this one.",
      },
      {
        author: 'Lactantius',
        work: 'On the Deaths of the Persecutors',
        note: 'A Christian pamphlet written to show persecutors dying horribly; it casts Diocletian as the villain of the age, and much of his hostile reputation descends from it.',
      },
      {
        author: 'Stephen Williams',
        work: 'Diocletian and the Roman Recovery',
      },
    ],
  },
  {
    id: 'dominus-court-290ce',
    year: 290,
    dateNote: 'c. 290s',
    era: 'dominate',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Diadem, Purple, Prostration',
    headline:
      'The emperor stops pretending to be a magistrate — visitors now kneel to kiss the hem of a jeweled robe, and everything the ruler touches becomes officially sacred.',
    tags: ['constitutional', 'culture'],
    body: `At some point in the 290s, the fiction that had framed Roman monarchy since Augustus was formally retired. Diocletian was styled *dominus noster* — 'our lord' — and those admitted to his rare appearances performed the *adoratio*: kneeling to kiss the hem of the purple. He wore gold-embroidered robes and gemmed shoes where earlier emperors had worn a general's cloak or a senator's toga; he appeared seldom, screened by curtains, chamberlains, and eunuchs; his bedchamber, his treasury, even his correspondence became *sacrum*, sacred. Augustus had performed citizenship — walking to the Senate, refusing crowns, calling himself first among equals. That performance was now abandoned outright, and the emperors branded themselves instead as Jovius and Herculius, earthly agents of Jupiter and Hercules.

The point was not vanity but survival. A century of assassinations had taught a brutal lesson: emperors who were saluted like magistrates got treated like magistrates — replaceable by whoever stood closest. Ceremony manufactures distance, distance manufactures awe, and awe is armor. It even worked, roughly: murder of an emperor by his own intimates, routine in the third century, became rare in the fourth.

Historians later named the whole late empire after this shift — the Dominate, the age of the lord, against the Principate, the age of the first citizen. The label overstates the break, since emperor-worship was as old as Augustus in the provinces, but it marks a real change in what the office claimed to be.`,
    whyItMatters: `The republican mask had always had an audience: a senatorial aristocracy whose cooperation Augustus needed and whose pride he was careful to spare. By 290 that audience no longer had to be persuaded. The men who now mattered — soldiers, bureaucrats, provincial taxpayers — were better governed by majesty than by modesty, and the new ceremony is a precise index of where power had migrated. Reading it as decadence gets the causation backward: the theater of sacred monarchy was not the empire going soft but the empire drawing the practical conclusion from fifty years of murdered emperors. Constantine kept every bit of it, added the diadem, and passed the whole apparatus to Byzantium and, through Byzantium, to every European court that ever practiced kneeling.`,
    misconception: {
      claim:
        'Diocletian turned Rome into an Oriental despotism, importing Persian court ritual wholesale.',
      correction:
        "Nearly every element had Roman precedent — provincial emperor-worship since Augustus, the *dominus* style under Domitian and Aurelian, solar theology already on the coinage. Diocletian systematized a long drift, and the purpose was practical: a distant, sacralized emperor is harder to imagine murdering than a fellow magistrate who happens to hold the office this year.",
    },
    control: {},
    connects: ['diocletian-284ce', 'imperial-cult-12bce', 'first-settlement-27bce'],
    sources: [
      {
        author: 'Eutropius',
        work: 'Breviarium',
        note: 'States that Diocletian was the first to demand adoration and wear gems, where earlier emperors were greeted like magistrates — an epitome compressing a gradual evolution into a single reign.',
      },
      {
        author: 'Peter Brown',
        work: 'The World of Late Antiquity',
      },
    ],
  },
  {
    id: 'tetrarchy-293ce',
    year: 293,
    era: 'dominate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Four Emperors by Design',
    headline:
      'Diocletian installs two junior Caesars under two Augusti, putting a legitimate emperor within reach of every major frontier — and of every army that might otherwise make its own.',
    tags: ['constitutional', 'succession'],
    body: `In 293 Diocletian completed the structure he had been assembling since 285. He had already raised his comrade Maximian to co-Augustus with responsibility for the west; now each Augustus adopted a junior colleague as Caesar — Constantius under Maximian, Galerius under Diocletian — and bound them by marriage into the senior men's families. Four emperors, one college: laws ran in all four names, and Diocletian's seniority held the whole. Their working capitals sat near the frontiers — Trier for the Rhine, Milan for the Alpine passes, Sirmium for the Danube, Nicomedia for the east. Rome remained the ceremonial capital and the home of the Senate, but for the first time in its history no emperor lived there.

The design answered a precise diagnosis. Most third-century usurpations had not been simple treason; they were geography. Distant armies facing invasion needed imperial authority present — pay, command, favor — and when no emperor could come, they manufactured one, which is how the Gallic Empire began. One man cannot stand on the Rhine and the Euphrates at once. Rather than keep fighting that logic, Diocletian institutionalized it: put an emperor everywhere one kept being invented.

The scheme also smuggled in a succession plan, the empire's oldest missing part. The Caesars were adult, tested generals, chosen on merit and marked as heirs — biology cut out of the transfer of power entirely. Legitimacy came from the gods instead: the senior pair ruled as Jovius, under Jupiter, the junior as Herculius, under Hercules.

And it worked, while he ruled. The breakaway regime of Carausius and Allectus in Britain was crushed by 296, Persia was broken in 298, the frontiers held, and for twenty years no tetrarch made war on another — an internal peace the empire had not seen in a century. Whether this was a system, or one man's prestige wearing a system's costume, would be tested in 305.`,
    whyItMatters: `The tetrarchy is the constitutional admission that the empire had outgrown a single ruler, and its later collapse proved the counter-truth: Roman legitimacy had never stopped running through blood, and armies preferred their commander's son to a stranger promoted on merit. But notice what survived the wreck. From 285 onward the empire is almost never again ruled alone — colleges, co-Augusti, and formal east–west divisions become the norm, and the arrangements of 364 and 395 are this design's direct descendants. Diocletian did not split the empire, as the textbook shorthand has it; he taught it to be plural. That habit, more than any battle, is why there could be an eastern empire left standing to outlive the west.`,
    control: {},
    connects: ['diocletian-284ce', 'crisis-begins-235ce', 'gallic-empire-260ce'],
    sources: [
      {
        author: 'Lactantius',
        work: 'On the Deaths of the Persecutors',
        note: "Claims the four courts meant four times the armies and officials, with 'more men receiving than paying' — hostile exaggeration, but pointing at the real cost of the system.",
      },
      {
        author: 'Panegyrici Latini',
        work: 'Panegyrics to Maximian and Constantius',
        note: 'Court flattery delivered to the emperors themselves — worthless as assessment, invaluable as a record of official tetrarchic ideology.',
      },
      {
        author: 'Roger Rees',
        work: 'Diocletian and the Tetrarchy',
      },
    ],
  },
  {
    id: 'provinces-dioceses-295ce',
    year: 293,
    yearEnd: 305,
    era: 'dominate',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Provinces Doubled',
    headline:
      'Some fifty provinces become about a hundred, grouped into twelve dioceses, and for the first time the men who govern Roman subjects do not command Roman troops.',
    tags: ['constitutional', 'legal'],
    body: `Across the tetrarchic years the map of government was redrawn. Provinces were cut into halves and thirds — from roughly fifty to about a hundred — and grouped into twelve new dioceses under vicars, who answered to praetorian prefects now transformed from guard commanders into chief civil ministers. Italy lost its ancient immunity, carved into provinces and taxed like everywhere else after four centuries of the conqueror's privilege. A bare register copied around 314, the Verona List, preserves the new geography.

The sharper change was the separation of powers within it. Civilian governors judged and taxed but commanded no soldiers; new military commanders, the *duces*, led frontier troops across provincial boundaries but governed nothing. Nearly every third-century usurper had been a governor-general — one man holding an army, a treasury, and a tax base. Now rebellion required a conspiracy between two officials who shared neither an office nor a career ladder.

The price was weight. The Principate had administered fifty million people with a few hundred senior officials and the unpaid labor of local elites; the new structure ran on tens of thousands of salaried functionaries. Lactantius sneered that soon there would be more men receiving taxes than paying them — a pamphleteer's arithmetic, but the machine really had grown heavier, and someone had to carry it.`,
    whyItMatters: `As counter-coup engineering, the redesign broadly worked: the fourth century has civil wars between rival emperors, but the classic third-century pattern — a provincial governor raised to the purple by his own garrison — becomes rare, because no governor has a garrison. The cost was permanent: a state that weighed more per taxpayer, pressing on a base the crisis had already bruised. And Italy's quiet demotion did something subtler than raise revenue. Once the homeland was just provinces like any other, the empire stopped being Rome's possessions and became a state with interchangeable parts — which is what made moving its working center to Milan, Trier, and finally Constantinople thinkable at all.`,
    control: {},
    connects: ['tetrarchy-293ce', 'diocletian-284ce', 'crisis-begins-235ce'],
    sources: [
      {
        author: 'Anonymous',
        work: 'Laterculus Veronensis (the Verona List)',
        note: 'A bare provincial register of c. 314 — the administrative skeleton with no narrative attached.',
      },
      {
        author: 'A. H. M. Jones',
        work: 'The Later Roman Empire',
        note: "The standard modern reconstruction; Jones also shows the 'bloated bureaucracy' was tiny by modern standards — the complaint is relative to what Rome had run on before.",
      },
    ],
  },
  {
    id: 'galerius-mesopotamia-298ce',
    year: 298,
    era: 'dominate',
    weight: 1,
    reliability: 'well-attested',
    title: 'Galerius Breaks Persia',
    headline:
      'Beaten once near Carrhae, Galerius destroys the Persian king’s army in Armenia, captures his household, and dictates a peace on the Tigris that holds for forty years.',
    tags: ['military'],
    control: {
      mesopotamia: 'provincial',
      osroene: 'provincial',
      armenia: 'client',
    },
    body: `In 296 or 297 the Persian king Narses attacked Roman Armenia and Mesopotamia. The Caesar Galerius, caught with too small a force, was beaten in the open country between Carrhae and Callinicum — the same ground where Crassus had been destroyed three and a half centuries earlier. A famous story has Diocletian receiving the defeated Caesar by making him walk a mile in his purple robes before the imperial carriage; it comes from later epitomes and may be embroidery, but the humiliation of the campaign was real. In 298 Galerius came back with an army of Danubian veterans, struck through the Armenian highlands, and surprised Narses's camp: the royal treasury, the harem, and the king's wives were captured, and Narses himself fled wounded.

The Peace of Nisibis, concluded in 299, was the most favorable settlement Rome ever imposed on Persia. Rome kept Mesopotamia with the fortress city of Nisibis, gained five satrapies beyond the Tigris, and had Armenia confirmed under its client king Tiridates; Nisibis became the sole legal crossing point for eastern trade, where Rome could tax and watch it.

The result was four decades of quiet on the empire's most expensive frontier — precisely the decades in which the tetrarchic reconstruction, Constantine's civil wars, and the founding of a new eastern capital were possible.`,
    whyItMatters: `The eastern peace is the unglamorous foundation under everything the reformed empire built. Valerian had died a Persian captive because Rome faced usurpers and Persia simultaneously; after 298 the tetrarchs never had to. Forty years without a Persian war is the quiet subsidy behind every reform in this era. But settlements this humiliating are spent, not banked: Persia treated Nisibis as a wound, and when a strong Sassanid king finally met a distracted Rome, the war of revenge came due — and with it, in 363, the surrender of everything Galerius had taken.`,
    connects: ['sassanids-224ce', 'valerian-260ce', 'tetrarchy-293ce'],
    sources: [
      {
        author: 'Eutropius',
        work: 'Breviarium',
        note: 'Preserves the defeat, the carriage story, and the victory in a few compressed sentences — a fourth-century epitome, anecdotal by design.',
      },
      {
        author: 'David Potter',
        work: 'The Roman Empire at Bay',
      },
    ],
  },
  {
    id: 'bureaucracy-tax-300ce',
    year: 300,
    dateNote: 'c.',
    era: 'dominate',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Taxation in Kind',
    headline:
      'With the silver coinage ruined, the state learns to tax wheat, cloth, and labor directly — measured by a census that counts every field, vine, and body in the empire.',
    tags: ['economic', 'legal'],
    nonTerritorial: true,
    spatialFocus: ['aegyptus', 'syria', 'gallia-lugdunensis'],
    control: {},
    body: `By around 300 the Roman state had stopped pretending its money worked. Soldiers and officials were paid largely in rations and issue — the *annona* — and to supply them Diocletian systematized what emergency requisition had improvised. A new empire-wide census graded land into fiscal units by what it grew — vineyard, grain, olive — and counted people as head-units alongside it. Each year the government declared the *indictio*, the levy: so much wheat, so much cloth, so many recruits, adjusted to need. It was the nearest thing antiquity ever produced to an imperial budget, and its fifteen-year assessment cycle became so fundamental that documents were dated by indiction for the next thousand years.

On the ground it was invasive in a way the Principate's taxation had never been. Lactantius describes fields measured clod by clod, vines and trees counted, men beaten until they declared their property — a hostile witness, but Egyptian papyri show the same machinery from the inside: declarations, surveyors, registers, receipts. And because liability attached to registered land and registered persons, the farmer who moved became a fiscal problem. The fourth-century laws that gradually bound tenant farmers, the *coloni*, to the plots where the census had counted them grew out of this bookkeeping.

Fairness cut both ways. Assessment by capacity, predictable and budgeted, was arguably more rational than the Republic's rapacious tax farming. It was also heavier, and much harder to escape.`,
    whyItMatters: `This is the fiscal invention that let the state survive its own currency. When trust in coin failed, Rome learned to requisition the real economy on a ledger — and that ledger, not any battlefield recovery, is what actually funded the fourth-century restoration. The price was paid in freedom at the bottom: binding assessment to the land began binding people to the land, and the constrained late-Roman peasantry emerges from tax administration, not from ideology or conquest. Anyone looking for a single origin point of the medieval countryside — peasants tied to plots, status inherited with the tenancy — will find the census ledger of c. 300 a defensible candidate.`,
    connects: ['debasement-215ce', 'diocletian-284ce', 'provinces-dioceses-295ce'],
    sources: [
      {
        author: 'Lactantius',
        work: 'On the Deaths of the Persecutors',
        note: 'His census-as-torture scene is polemic from an enemy of the regime — but the papyri confirm the machinery he is caricaturing.',
      },
      {
        author: 'A. H. M. Jones',
        work: 'The Later Roman Empire',
        note: 'The standard reconstruction of the system; Jones stresses how much regional variation hides under the tidy labels iugatio and capitatio.',
      },
    ],
  },
  {
    id: 'prices-edict-301ce',
    year: 301,
    era: 'dominate',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Edict on Maximum Prices',
    headline:
      'Diocletian caps the price of over a thousand goods and wages on pain of death, blames inflation on greed, and watches the markets empty.',
    tags: ['economic', 'legal'],
    control: {},
    body: `In 301, after a currency edict retariffing the coinage failed to stop prices rising, Diocletian published maximum prices for more than a thousand items across the whole empire: wheat, wine, and beef; Gallic beer and Egyptian beer, priced separately; purple silk; transport by wagon, camel, and ship; the daily wage of a farm laborer and the monthly fee of a teacher of rhetoric. Exceeding the maxima, or hoarding goods to dodge them, carried the death penalty. The preamble blames the whole crisis on the bottomless *avaritia* — greed — of profiteers preying on soldiers, and the text was carved on stone in forum after forum across the eastern provinces, where fragments still survive.

It failed almost immediately. Lactantius reports blood shed over small and cheap items, goods withdrawn from sale, prices rising worse than before, and the law quietly allowed to lapse. The diagnosis was wrong: prices were being driven not by greed but by the coinage itself, which the state's own mints had spent decades stuffing with billon — and a single empire-wide tariff ignored transport costs, so a maximum workable beside an Egyptian granary was ruinous in a Gallic town.

There is an irony in the stone. As law, the edict was a failure; as evidence, it is priceless — the largest single dataset of prices and wages antiquity ever left us, down to the cost of a haircut and a pair of soldier's boots.`,
    whyItMatters: `The edict shows, with rare clarity, both the reach and the limits of the strongest state the ancient Mediterranean ever produced: it could publish one law from Britain to Egypt and carve it in stone in a hundred cities, and it could not repeal arithmetic. It also shows how that state thought — reading a monetary failure as a moral one, because greed can be punished and debasement would have to be admitted. The failure taught the practical lesson behind the era's two real fixes: taxation shifted onto goods and labor, and Constantine rebuilt trust in gold rather than by decree. After 301 the Roman state stopped ordering its money to work and started routing around it.`,
    connects: ['debasement-215ce', 'bureaucracy-tax-300ce', 'diocletian-284ce'],
    sources: [
      {
        author: 'Diocletian and colleagues',
        work: 'Edict on Maximum Prices (epigraphic fragments)',
        note: 'The preamble is moral propaganda; the tariff schedule attached to it is the best price-and-wage evidence to survive from antiquity.',
      },
      {
        author: 'Lactantius',
        work: 'On the Deaths of the Persecutors',
        note: "Hostile to everything Diocletian did — but on the edict's failure he is corroborated by its silent disappearance from enforcement.",
      },
    ],
  },
  {
    id: 'great-persecution-303ce',
    year: 303,
    era: 'dominate',
    weight: 2,
    reliability: 'well-attested',
    title: 'The Great Persecution',
    headline:
      'On a February morning in 303 the church facing Diocletian’s palace is torn down — the opening act of the empire’s last and largest attempt to erase Christianity.',
    tags: ['religious'],
    control: {},
    body: `On February 23, 303, soldiers demolished the Christian church that stood in full view of Diocletian's palace at Nicomedia. An edict followed the next day: churches were to be destroyed, scriptures surrendered and burned, and Christians stripped of rank and legal protections. Further edicts escalated through the year — clergy arrested until, Eusebius says, the prisons had no room left for actual criminals, then compelled to sacrifice — and in 304 a fourth edict ordered every inhabitant of the empire to sacrifice to the gods on pain of death. It was the first empire-wide persecution since Valerian's, half a century before, and it was far more systematic.

Lactantius blames Galerius for driving a reluctant Diocletian to it, with the oracle of Apollo consulted for divine cover; he is a hostile witness with heroes to protect, but the ideological logic did not need a villain. The tetrarchy had staked its legitimacy on Jupiter and Hercules restoring a broken world, and the gods' favor was state security. A parallel loyalty structure with a bishop in every city — one of its churches staring across the street at the palace — had simply become too visible for a regime of restorers to ignore.

Enforcement exposed the empire's real texture. In Gaul and Britain, Constantius demolished some buildings and killed almost no one — so at least claim Lactantius and Eusebius, both keen to launder the father of Constantine. In the east and Africa it was ferocious: executions, mines, and, just as consequentially, mass compliance. Many clergy handed over scriptures to survive, and the furious question of what to do about these *traditores* would split African Christianity into the Donatist schism for the next century.

The end was an admission. In 311 the dying Galerius issued an edict of grudging toleration, conceding that the coercion had produced neither worshippers of the gods nor obedient Christians, and asking the Christians to pray for him. Persecution sputtered on under Maximinus Daia in the east until 313, then stopped for good.`,
    whyItMatters: `The persecution is the best measurement we have of Christianity's real position by 300: the strongest Roman state ever assembled applied itself for a decade to destroying the church and could not even dent its growth — and the rulers knew it, which is what Galerius's edict concedes in writing. That demonstrated indestructibility is the premise of everything Constantine did next: a community that imperial power could not break was worth enlisting instead. The bitterest legacy fell inside the church itself. The fight over who had lapsed under pressure outlasted the persecution by a hundred years, and it taught the newly favored church of the fourth century its ugliest habit — calling on state power against fellow Christians.`,
    misconception: {
      claim: 'Rome persecuted Christians constantly for three hundred years.',
      correction:
        'Persecution was local, sporadic, and usually mob- or governor-driven until 250; the empire-wide campaigns of Decius, Valerian, and Diocletian together span only a few years out of three centuries. The Great Persecution was the exceptional climax — barely enforced in the west, and abandoned as a failure within a decade in the east.',
    },
    connects: ['christian-growth-170ce', 'persecution-decius-250ce', 'diocletian-284ce'],
    sources: [
      {
        author: 'Lactantius',
        work: 'On the Deaths of the Persecutors',
        note: 'Close to an eyewitness at Nicomedia, and openly a revenge pamphlet — every persecutor dies horribly, on schedule.',
      },
      {
        author: 'Eusebius',
        work: 'Ecclesiastical History; Martyrs of Palestine',
        note: 'Church triumphalism cataloguing the martyrs — yet honest enough to record mass apostasy alongside the heroism.',
      },
    ],
  },
  {
    id: 'abdication-305ce',
    year: 305,
    era: 'dominate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Diocletian Plants Cabbages',
    headline:
      'On May 1, 305, the most powerful man in the world resigns on schedule, retires to a fortified palace on the Dalmatian coast, and watches his system tear itself apart within the year.',
    tags: ['succession', 'constitutional'],
    control: {},
    body: `On May 1, 305, in paired ceremonies at Nicomedia and Milan, Diocletian and a visibly reluctant Maximian laid down the purple — the first voluntary resignation of power in Roman imperial history. The Caesars Constantius and Galerius were promoted to Augusti, and two new Caesars were installed: Severus and Maximinus Daia, both Galerius's men. Passed over, and standing in the crowd at Nicomedia, was Constantine, son of the new senior Augustus Constantius; passed over in Italy was Maxentius, son of Maximian. Lactantius paints the parade-ground scene — the army craning toward Constantine until the moment Daia's name was read — and he is a partisan witness, but the fact of the exclusions is certain, and the armies noticed.

The unraveling took fourteen months. In July 306 Constantius died at York, and his troops immediately proclaimed his son — the dynastic instinct the tetrarchy existed to bypass, reasserting itself in an afternoon. Weeks later Maxentius seized Rome with the Praetorian Guard, and his father Maximian unretired to back him. Severus marched on Rome; his soldiers, veterans of Maximian's campaigns, deserted to their old commander, and Severus was captured and later killed. By 308 there were six or more claimants to a four-man college. At the conference of Carnuntum that year, Diocletian — attending as a private citizen — declined every plea to resume power; the tradition preserves his answer to Maximian, that a man who could see the cabbages planted with his own hands at Salona would not ask him to trade that for power. The anecdote is late and polished, but his refusal is fact.

He lived roughly six more years in the great fortified palace he had built on the Dalmatian shore — long enough to see the persecution he had launched abandoned and his tetrarchy replaced by dynasts fighting toward sole rule. The palace outlasted everything: its walls fill with houses in later centuries and become the core of the modern city of Split.`,
    whyItMatters: `The abdication was the tetrarchy's boldest claim — that supreme power could be transferred by rule rather than by death — and its immediate collapse is the clearest demonstration in Roman history of the empire's one unsolved constitutional problem. The machinery of governing had been rebuilt and it worked; the machinery of succession did not exist, because legitimacy had never stopped being dynastic in the only constituency that counted, the army. Merit-promotion ran exactly one succession, and only while its designer stood beside it. Everything that follows — Constantine's rise from a snubbed son, the return of open hereditary monarchy, the dynastic house that rules to 363 — begins in the gap this failure opened.`,
    connects: ['tetrarchy-293ce', 'diocletian-284ce', 'augustus-dies-14ce'],
    sources: [
      {
        author: 'Lactantius',
        work: 'On the Deaths of the Persecutors',
        note: "Claims an ailing Diocletian was bullied into retiring by Galerius — a hostile reading that undercuts the 'voluntary abdication' framing this event carries.",
      },
      {
        author: 'Anonymous',
        work: 'Epitome de Caesaribus',
        note: 'Source of the cabbages anecdote; late, anonymous, and fond of a good story.',
      },
      {
        author: 'Timothy Barnes',
        work: 'The New Empire of Diocletian and Constantine',
      },
    ],
  },
  {
    id: 'milvian-312ce',
    year: 312,
    era: 'dominate',
    weight: 2,
    reliability: 'well-attested',
    title: 'The Milvian Bridge',
    headline:
      'Constantine storms down Italy, meets Maxentius at the Tiber on October 28, 312, and takes Rome under a sign he would later say came from the Christian God.',
    tags: ['military', 'religious', 'succession'],
    markers: [{ type: 'battle', label: 'Milvian Bridge', at: [12.47, 41.94] }],
    control: {},
    body: `In 312 Constantine crossed the Alps with a picked army, took Susa, Turin, and Verona in quick succession, and marched on Rome. Maxentius, who had held Italy and Africa for six years, could have waited behind the Aurelian Walls — sieges of Rome had already broken two tetrarchic armies. Instead, after consulting the Sibylline Books and receiving the oracle that 'the enemy of the Romans' would perish that day, he led his army out to fight with the Tiber at its back, by the Milvian Bridge on the city's northern approach. His line collapsed; the pontoon bridge behind it gave way; and Maxentius drowned in the river in his armor. His head was carried into Rome on a spear the next day. Among Constantine's first acts in the city was to disband the Praetorian Guard permanently — the corps that had made and unmade emperors for three centuries ends here, its fortified camp demolished.

Then there is the sign, and the sources must be handled like evidence. Lactantius, writing within a few years, says Constantine was commanded in a dream the night before the battle to mark a heavenly monogram on his soldiers' shields. Eusebius, in a life composed after the emperor's death a quarter-century later, reports what Constantine had told him under oath: a cross of light over the sun, seen by the whole army on the march, with the words 'by this, conquer' — a story absent from Eusebius's own earlier history of the period. A pagan panegyrist of 313 credits an unnamed 'divine mind'; the Arch of Constantine, dedicated by the Senate in 315, says only *instinctu divinitatis*, 'by the prompting of divinity,' with studied vagueness — and a panegyric of 310 had already given Constantine a vision, of Apollo. The record is a palimpsest of retellings, each more Christian than the last.

What is certain is what followed. From 312 onward Constantine's patronage flowed openly to the church: restitution, legal privileges for clergy, and on the razed barracks of Maxentius's horse guard, the basilica that became the Lateran cathedral. Whatever happened before the battle, the consequences are documented in brick and law.`,
    whyItMatters: `As a battle, the Milvian Bridge decided only which tetrarch held Italy. As leverage, it changed the Mediterranean world, because the winner publicly attributed his victory to the Christian God and governed accordingly. Christians were perhaps a tenth of the empire's population; what Constantine gave them was not numbers but the patronage machine — money, buildings, legal standing, access — and one convert at the top of a patronage state outweighed three centuries of growth from below. The layered vision accounts teach a second lesson, about evidence: conversion stories are composed backward, by winners, and the emperor's own version grew a sky-cross only after decades and an audience of bishops. The honest summary is that we know exactly what Constantine did and can only guess at what he saw.`,
    misconception: {
      claim:
        'Constantine saw the cross, converted on the spot, and made the empire Christian.',
      correction:
        'The two main accounts conflict — an earlier one describes a private dream, and the sky-vision appears only in a life written after his death. Constantine was baptized on his deathbed in 337, and Christianity became the state religion under Theodosius in 380, sixty-eight years after the battle.',
    },
    connects: ['abdication-305ce', 'great-persecution-303ce', 'christian-growth-170ce'],
    sources: [
      {
        author: 'Lactantius',
        work: 'On the Deaths of the Persecutors',
        note: 'The earliest account of the sign: a dream and a shield-mark, no celestial vision.',
      },
      {
        author: 'Eusebius',
        work: 'Life of Constantine',
        note: "A posthumous panegyric by a bishop, and the sole source for the cross in the sky — which is missing from Eusebius's own earlier Ecclesiastical History.",
      },
      {
        author: 'Timothy Barnes',
        work: 'Constantine and Eusebius',
      },
    ],
  },
  {
    id: 'solidus-312ce',
    year: 312,
    dateNote: 'c.',
    era: 'dominate',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Solidus',
    headline:
      'Constantine mints a gold coin at seventy-two to the pound and never cheapens it — the solidus holds its weight longer than the western empire holds together.',
    tags: ['economic'],
    control: {},
    body: `Around 312 Constantine fixed a new gold coin, the solidus, at seventy-two to the Roman pound — about four and a half grams — replacing Diocletian's heavier and more erratically minted aureus. What made it the most successful currency in western history was not the standard but the discipline: the solidus was never debased. It passed at full weight and fineness through the fall of the western empire and far beyond, continuing as the Byzantine nomisma essentially unchanged into the eleventh century — struck, weighed, and trusted from Gaul to the ports of the Indian Ocean, where a sixth-century merchant could report that the gold piece of the Romans was honored by kings who had never seen Rome.

The gold came from somewhere. War chests of defeated rivals fed the mints, new taxes were made payable in gold — including a hated levy on merchants — and, after Constantine won the east, the accumulated treasures of the pagan temples were inventoried and melted. The state paid its donatives and senior salaries in solidi and increasingly demanded its taxes the same way.

The limit of the achievement was social. The base-metal small change in which ordinary people were paid and shopped went right on inflating. The result was a two-tier economy: stable gold above, sinking bronze below — a state and an elite that had escaped the third-century inflation, floating on top of wage-earners who had not.`,
    whyItMatters: `Debasement had been a slow tax on trust, and Constantine restored trust selectively — exactly where the state needed it: army pay, high finance, tax collection. That selectivity is the point to argue about. The monetary recovery was real but top-loaded, and its geometry mattered for centuries: reliable gold became the fiscal spine of the eastern empire's endurance, a plausible single answer to why Constantinople could always hire another army or ransom another siege long after the goldless west could not. A coin outlasting the state that minted it by six hundred years is the era's quietest, largest fact.`,
    connects: ['debasement-215ce', 'prices-edict-301ce', 'milvian-312ce'],
    sources: [
      {
        author: 'Anonymous',
        work: 'De Rebus Bellicis',
        note: "A late-fourth-century reform pamphlet blaming Constantine's release of temple gold for enriching the rich and grinding the poor — the reform's hostile audit, from within the empire.",
      },
      {
        author: 'Kenneth W. Harl',
        work: 'Coinage in the Roman Economy',
      },
    ],
  },
  {
    id: 'milan-313ce',
    year: 313,
    era: 'dominate',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Edict of Milan',
    headline:
      'Constantine and Licinius grant every cult the freedom to worship and order confiscated Christian property returned — toleration for all, with compensation attached for one.',
    tags: ['religious', 'legal'],
    control: {},
    body: `Early in 313 Constantine met Licinius at Milan, sealed the alliance with a marriage to his half-sister Constantia, and agreed a common religious policy. The text we have survives as a letter of Licinius to his governors, posted at Nicomedia that June: Christians and all others were to have free and unrestricted observance of their religion — the wording is studiedly neutral, invoking 'whatever divinity sits in heaven' — and every church, meeting house, and property confiscated in the persecution was to be returned to the Christian communities immediately, with the treasury compensating purchasers.

Almost everything in the traditional name is wrong. It was not technically an edict; it was issued from Nicomedia, not Milan; and it did not legalize Christianity, which the dying Galerius had already conceded toleration in 311. Its real novelties lay elsewhere. The restitution clause treated churches as corporate bodies that could own, recover, and litigate property — Christianity acquiring a skeleton inside Roman law. And the neutrality was itself new: an empire declining, for the moment, to have an official object of worship at all.

The even-handedness lasted about as long as the ink. Within a few years Constantine had exempted clergy from costly civic obligations, recognized bishops' courts, and begun pouring imperial money into basilicas — toleration for everyone, patronage for one.`,
    whyItMatters: `The restitution clause matters more than the toleration clause, and the distinction is worth pressing: a merely legal belief survives, but a legally embodied institution — one that owns property, receives bequests, and stands in court — accumulates power. The medieval church's legal skeleton is already visible in this document. The sequence also teaches the true tempo of Christianization, which popular history compresses into a single stroke: toleration extracted from a dying persecutor in 311, favor from a victorious convert in 313, establishment under Theodosius in 380. Three generations separate 'legal' from 'official,' and most of the empire's inhabitants lived their whole lives inside that gap.`,
    misconception: {
      claim:
        'The Edict of Milan made Christianity the official religion of the Roman Empire.',
      correction:
        'It granted free worship to every religion and restored confiscated Christian property — toleration and favor, not establishment. Nicene Christianity became the state religion in 380 under Theodosius, sixty-seven years later; and the document itself is a letter of Licinius issued from Nicomedia, since Galerius had already ended the persecution in 311.',
    },
    connects: ['milvian-312ce', 'great-persecution-303ce', 'christian-growth-170ce'],
    sources: [
      {
        author: 'Lactantius',
        work: 'On the Deaths of the Persecutors',
        note: 'Preserves the Latin text of the Nicomedia letter; our knowledge of the "edict" rests on him and on Eusebius’s Greek version.',
      },
      {
        author: 'Eusebius',
        work: 'Ecclesiastical History',
        note: 'Gives a Greek translation with his own framing of providential triumph.',
      },
    ],
  },
  {
    id: 'constantine-sole-324ce',
    year: 324,
    era: 'dominate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Constantine Alone',
    headline:
      'Constantine destroys Licinius at Adrianople and Chrysopolis, and for the first time in forty years one man rules the whole empire — a Christian, laying out a new capital on the Bosporus.',
    tags: ['succession', 'military', 'constitutional'],
    control: {},
    body: `The Milan partnership decayed the way shared supreme power always had. A first war in 316 stripped Licinius of most of the Balkans; the second, in 324, finished him. Constantine framed it as rescue: Licinius, ruling the Christian-dense east, had drifted into low-grade repression — purging Christians from his palace and army, restricting bishops' councils — or so our sources claim, and they are Constantine's sources. The campaign was brief and total. Licinius was beaten at Adrianople in July; his fleet lost the Hellespont to Constantine's eldest son Crispus; and in September the last Licinian army broke at Chrysopolis, on the Asian shore of the Bosporus. Constantia negotiated her husband's surrender on a pledge of comfortable retirement. Within a year he was hanged on a treason charge. For the first time since 285, the empire had a single ruler.

Sole rule immediately took a shape Diocletian would have recognized as the disease he had tried to cure: dynasty. Constantine's sons were made Caesars, and the tetrarchic college of tested generals gave way to a family firm — its theology also swapped, Jupiter and Hercules retired in favor of the Christian God whose favor the house now claimed as its title to rule. Within weeks of Chrysopolis, Constantine walked the line of the walls for a new city on the site of Byzantium, above the strait where the war had ended; within a year he had summoned every bishop in the empire to Nicaea to settle the faith he had just adopted. Unification, a new capital, and a general council inside about eighteen months: a coherent program, executed at speed.

The unity, though, was personal, not structural. At Constantine's death in 337 the empire was divided again among his sons, and after 395 the halves never rejoined. The empire had learned to be plural, and one man's victories could not unteach it.`,
    whyItMatters: `Chrysopolis ends the forty-year experiment in collegial, merit-promoted emperorship with the oldest answer available — a dynasty — now fused to a new religion. That fusion, tested at Nicaea and housed at Constantinople, is the template for the Byzantine millennium and, beyond it, for Christian monarchy in Europe generally: rulers legitimated by the church their office protects. The eastward move deserves equal weight, because it followed the money. The east had the taxpayers, the cities, and the recruits, and Constantine's choice of capital ratified that economic fact. When the halves separated for good in 395, the one holding the treasury, the short frontier, and the capital was the half he had picked — which is why an event in 324 belongs in any honest explanation of 476.`,
    connects: ['milvian-312ce', 'milan-313ce', 'abdication-305ce'],
    sources: [
      {
        author: 'Eusebius',
        work: 'Life of Constantine',
        note: "Turns a power struggle between two ambitious emperors into a holy war of liberation; Licinius's persecution may be enlarged in the telling.",
      },
      {
        author: 'Zosimus',
        work: 'New History',
        note: 'A pagan historian writing c. 500 who blames Constantine for nearly everything thereafter — the hostile counter-tradition to Eusebius, no more neutral than he is.',
      },
      {
        author: 'Averil Cameron',
        work: 'The Later Roman Empire',
      },
    ],
  },
];
