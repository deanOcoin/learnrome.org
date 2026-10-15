// 14-96 CE, Julio-Claudians and Flavians

import type { RomeEvent } from '../../types';

export const PRINCIPATE_B_EVENTS: RomeEvent[] = [
  {
    id: 'tiberius-14ce',
    year: 14,
    yearEnd: 37,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Tiberius: The Job Cannot Be Declined',
    headline:
      'The first succession works — and the new emperor spends twenty-three years proving that the office Augustus invented can be neither refused, shared, nor safely held near.',
    tags: ['succession', 'legal'],
    body: `Tiberius was fifty-four when Augustus died in 14 CE: Rome's best living general, the emperor's adopted son, and already holder of the tribunician power and proconsular imperium that were the real substance of the position. There was no interregnum and no rival — which did not stop the accession debate in the Senate from being an agony of feints, with Tiberius protesting that the burden was too great for one man and the senators too frightened to take the protest at face value. He ruled twenty-three years: the frontiers held, the treasury filled, and the machinery Augustus built ran so smoothly that its second operator could govern the empire, from 26 CE onward, without setting foot in Rome. In 17 he annexed Cappadocia when its aged client king died in Rome — a province acquired by probate, not war.

The absence was the problem. From Capri, Tiberius governed through the Praetorian prefect Sejanus, who had already concentrated the guard's nine scattered cohorts into a single fortified camp on the edge of the city — a standing army inside Rome, an innovation whose price would be paid by every later emperor. Sejanus prosecuted his way through the imperial family toward the succession itself until 31, when Tiberius destroyed him with a letter read aloud in the Senate: strangled the same day, his body torn apart by the crowd, his young children executed.

Around these plots grew the maiestas trials — the old treason law stretched to cover words, verses, and disrespect, prosecuted by freelance informers (delatores) who by law kept a quarter of the condemned man's estate. Treason became an industry with commission-based staffing. The lurid Capri of the tradition — the debaucheries Suetonius catalogues — comes from senatorial writers working two generations later, with every reason to blacken the reclusive emperor who had let their class devour itself.`,
    whyItMatters: `The dull fact that the handover worked is the important one: an office assembled for one extraordinary man transferred intact to a second, ordinary one, which is the moment the principate stopped being an emergency and became a constitution. But Tiberius's reign also built the autocracy's standing equipment. The Praetorian camp put the only armed force in Italy inside Rome's walls, where it would murder one emperor, install another, and eventually auction the throne. The maiestas-and-informer economy gave every later emperor a ready-made instrument of terror that needed no invention, only activation. Augustus designed the engine; under Tiberius you can watch it run without its designer — and see exactly which parts will kill people for the next four centuries.`,
    control: { cappadocia: 'provincial' },
    sources: [
      {
        author: 'Tacitus',
        work: 'Annals',
        note: 'The greatest account and a masterpiece of insinuation — Tacitus reads every act of Tiberius as hypocrisy, including the competent ones.',
      },
      {
        author: 'Suetonius',
        work: 'Tiberius',
        note: 'Source of the Capri scandals; gossip collected a lifetime later and unverifiable even then.',
      },
      {
        author: 'Barbara Levick',
        work: 'Tiberius the Politician',
        note: 'Reads him as a capable, legalistic administrator trapped by an impossible role — a direct rebuttal of the Tacitean monster.',
      },
    ],
    connects: ['augustus-dies-14ce', 'second-settlement-23bce', 'standing-army-25bce'],
  },

  {
    id: 'caligula-37ce',
    year: 37,
    yearEnd: 41,
    era: 'principate',
    weight: 1,
    reliability: 'contested',
    title: 'Caligula: Four Years, Then His Own Guards',
    headline:
      'The wildly popular young emperor degrades the aristocracy for four years until the officers sworn to protect him cut him down in a palace corridor.',
    tags: ['succession'],
    body: `Gaius — "Caligula," little boots, a nickname from the army camps of his childhood — succeeded Tiberius in 37 CE at twenty-four, to genuine public joy: son of the beloved Germanicus, a fresh start after the informer years. Within four years he was dead, killed in a palace passageway by officers of his own Praetorian Guard, led by a tribune he had mocked once too often. His wife and infant daughter were murdered within hours. It was the first assassination of a reigning emperor, and the men who did it were the men paid to make it impossible.

What happened in between is genuinely hard to recover, because every surviving account was written by the class he had spent four years humiliating. The sources give us forced suicides, confiscations, senators made to run beside his litter, the bridge of boats at Baiae, the aborted invasion of Britain that ended with soldiers gathering seashells — a catalogue in which illness, tyranny, and hostile invention can no longer be told apart. Some modern historians read the reign not as madness but as method: a young autocrat stripping away the Augustan pretense that the emperor was merely the Senate's first citizen, and making the senators perform their real servility in public. The performance had a cost, and in January 41 it was collected.`,
    whyItMatters: `Caligula's reign exposed the flaw Augustus had built into the system by hiding the monarchy inside republican clothes: there was no lawful way to remove an emperor, however impossible he became. The only instrument left was murder, and the only people positioned to do it were his own guards — so the institution created to protect the emperor became the sole check on him. That is not an anecdote about one unstable young man; it is the structural fact that will govern imperial politics until the end. And what happened the next morning mattered more than the killing itself: the conspirators had no plan beyond the knife, and the vacancy was filled not by the Senate but by the soldiers.`,
    misconception: {
      claim: 'Caligula made his horse a consul.',
      correction:
        'No source says he did it. Suetonius and Dio — hostile writers working decades and centuries later — report that he was said to have planned it, and the story reads best as his own taunt at the Senate: my horse could do your job. The consular lists contain no horse.',
    },
    control: {},
    sources: [
      {
        author: 'Suetonius',
        work: 'Gaius Caligula',
        note: 'The main narrative source, and essentially a dossier for the prosecution — anecdote, rumor, and horror stacked without sorting.',
      },
      {
        author: 'Aloys Winterling',
        work: 'Caligula: A Biography',
        note: 'Argues the "madness" was a deliberate politics of humiliation aimed at the aristocracy — which, if right, dissolves most of the famous stories into theatre.',
      },
    ],
    connects: ['tiberius-14ce', 'standing-army-25bce'],
  },

  {
    id: 'claudius-41ce',
    year: 41,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Claudius: The Guard Picks an Emperor',
    headline:
      'While the Senate debates restoring the Republic, the Praetorians find Caligula’s uncle in the palace, acclaim him, and collect the first purchase price ever paid for the empire.',
    tags: ['succession', 'constitutional', 'military'],
    body: `In the hours after Caligula's murder in January 41 CE, two Roman governments briefly existed. On the Capitol, the consuls convened the Senate, which debated restoring the Republic — or at least choosing the next emperor itself. In the palace, Praetorians ransacking the residence found Claudius, Caligula's fifty-year-old uncle, and carried him to their camp. Tradition says he was hiding behind a curtain and was dragged out trembling; that is the family's own mockery of him, and it may also be roughly what a sensible man does during a palace massacre. In the camp he promised each guardsman 15,000 sesterces — several years' pay — and by the next day the Senate's deliberations had shrunk to ratifying what the soldiers had already decided. The empire had been openly bought from the men with the swords, and the price would be quoted again at every accession.

The dynasty had kept Claudius from public life as an embarrassment — he limped, stammered, and drooled, and his own mother called him a monster half-finished by nature. The disability had left him free to become a scholar: histories of Etruria and Carthage, an essay proposing three new letters for the alphabet. As emperor he proved an obsessive, capable administrator. He built the deep-water harbor at Ostia and the Aqua Claudia, sat personally as a judge to the point of senatorial complaint, ran the empire's correspondence through powerful freedmen secretaries, and — over loud objection, in a speech that survives on bronze at Lyon — brought Gallic nobles into the Senate, arguing that Rome had always ruled by absorbing outsiders.`,
    whyItMatters: `January 41 is the day the Augustan fiction stopped fooling anyone. The theory was that the Senate conferred imperial power; the fact, demonstrated in a single news cycle, was that the army conferred it and the Senate notarized the transfer. Every later acclamation — 69, 193, and onward — is this scene restaged with bigger armies and higher bids, and the accession donative became a standing institution: from now on each reign opens with a payment to the soldiers, which makes the guard a constituency with a financial interest in turnover. That Claudius then governed well only sharpened the lesson, because it proved the method of selection and the quality of the ruler were unrelated — the empire could be competently run by a man chosen in an afternoon by looters.`,
    control: {},
    sources: [
      {
        author: 'Josephus',
        work: 'Jewish Antiquities',
        note: 'Preserves the fullest account of the accession, probably via the Herodian king Agrippa, who brokered between Claudius and the Senate — a participant’s version.',
      },
      {
        author: 'Suetonius',
        work: 'The Deified Claudius',
        note: 'Transmits the dynasty’s contempt for Claudius alongside the record of his competence, without noticing the contradiction.',
      },
      {
        author: 'Barbara Levick',
        work: 'Claudius',
        note: 'Suspects Claudius was closer to the conspiracy than the curtain story allows — if so, the trembling accident of the tradition was a coup with excellent stagecraft.',
      },
    ],
    connects: ['caligula-37ce', 'standing-army-25bce', 'augustus-dies-14ce'],
  },

  {
    id: 'annona-fleet-30ce',
    year: 30,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Feeding a Million People',
    headline:
      'Rome outgrew every farm within reach centuries ago, so the largest city on earth eats by fleet — and the emperor who owns the grain owns the peace.',
    tags: ['economic', 'infrastructure'],
    body: `First-century Rome held somewhere near a million people, and the land around it could not have fed a tenth of them. The city ate by sea: perhaps 200,000 tonnes of grain a year, the bulk of it shipped from Egypt and the African provinces in merchant vessels that ran the Alexandria–Puteoli route each sailing season, some of them enormous by ancient standards. The whole apparatus — requisition, shipping contracts, harbors, warehouses, the registers of roughly 200,000 male citizens entitled to free monthly grain — was the annona, run by an equestrian prefect answering to the emperor. It was the largest logistics operation in the ancient world, and it ran on private shippers working under state contract, sweetened with legal privileges for those who kept their hulls in the service.

The system's weak point was the last mile: Rome's river port could not take seagoing ships, so grain transferred offshore at Puteoli or waited on weather, and a bad season meant riots — a mob once cornered Claudius in the Forum and pelted him with crusts. His answer was the artificial deep-water harbor at Ostia, later perfected under Trajan; the emperors' answer in general was to treat the grain supply as too dangerous to leave to anyone else. Augustus had annexed Egypt as a personal preserve and barred senators from entering it without permission, for exactly this reason: whoever held Alexandria's harvest held a knife at the city's throat.`,
    whyItMatters: `The annona explains more about imperial politics than most battles. A million-person capital that imports its food is permanently hostage to logistics, so control of the grain became a component of the throne itself — it is why Egypt was sealed off as imperial property, why blockading the supply was the standard move of every usurper from Sextus Pompey onward, and why emperors spent fortunes on harbors rather than palaces. The dole was not welfare sentimentality; it was regime security, purchased annually. And the arrangement quietly reversed the old republican relationship between city and empire: the conquering city was now fed, and therefore governed, by its provinces.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['aegyptus', 'africa-proconsularis', 'latium'],
    sources: [
      {
        author: 'Tacitus',
        work: 'Annals',
        note: 'Remarks bitterly that Italy had come to depend on foreign harvests — a moralist’s complaint that doubles as our best statement of the fact.',
      },
      {
        author: 'Peter Garnsey',
        work: 'Famine and Food Supply in the Graeco-Roman World',
        note: 'The tonnage and population figures are modern reconstructions from thin evidence; honest estimates vary by a factor of two.',
      },
    ],
    connects: ['egypt-annexed-30bce', 'grain-dole-58bce', 'lex-gabinia-67bce'],
  },

  {
    id: 'britain-43ce',
    year: 43,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Claudius Buys a Conquest',
    headline:
      'An emperor who owes his throne to soldiers invades Britain for the triumph, and quietly converts client kingdoms into provinces across the whole map.',
    tags: ['military'],
    body: `In 43 CE four legions crossed the Channel to conquer Britain — the invasion Caesar had twice rehearsed and Caligula had aborted. The military logic was thin; the political logic was airtight. Claudius had been put on the throne by the Praetorians two years earlier, had never commanded anything, and needed what every insecure emperor needs: a victory. The professionals under Aulus Plautius broke British resistance at the Medway and the Thames, then paused on instruction so that Claudius himself could arrive — with reinforcements and war elephants — for the last march on Camulodunum. He spent sixteen days in Britain, took the surrender of eleven kings, and went home to a triumph, an arch, and the name Britannicus for his son. The island became a garrisoned province, expensively and permanently: it would tie down three to four legions, a tenth or more of the army, for as long as Rome held it.

The invasion was the loud half of a wider policy: the client kingdoms Augustus had left as buffers were being folded into direct rule. Mauretania, whose king Caligula had executed, was organized into two provinces after a hard war. Lycia lost its autonomy the same year as the invasion; Thrace followed in 46 when its last king died. In one decade the map's fringe of allied monarchies became provincial territory under Roman governors — annexation by administrative tidying, mostly without a battle. In Britain itself the new order took physical form at once: a colony of discharged veterans was planted at Camulodunum on confiscated land, with a great temple of the deified Claudius rising at its center, built with British money — an arrangement the province would shortly have views about.`,
    whyItMatters: `Britain shows the imperial office generating wars for its own internal reasons: the conquest happened not because Britain threatened Rome or promised riches, but because the emperor's legitimacy ran on military glory and the army's loyalty ran on campaigns and donatives. Once the principate existed, its needs — not the Senate's cost-benefit arithmetic — set strategy, and Rome acquired its least profitable province because a man installed by his guards needed a triumph. The quieter client-kingdom absorptions mattered as much: they completed the shift from a hegemony managed through friendly kings to an empire administered directly, trading flexibility for tax revenue and garrison obligations — the shape the empire would keep until it could no longer afford it.`,
    control: {
      'britannia-south': 'provincial',
      'lycia-pamphylia': 'provincial',
      'mauretania-caesariensis': 'provincial',
      'mauretania-tingitana': 'provincial',
      thracia: 'provincial',
    },
    sources: [
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: 'The only connected narrative of the invasion, written 150 years later; the elephants and the sixteen days are his.',
      },
      {
        author: 'Suetonius',
        work: 'The Deified Claudius',
        note: 'Dismisses the campaign as fought "without battle or bloodshed" — palace mockery of a stage-managed triumph, not a military assessment.',
      },
    ],
    connects: ['claudius-41ce', 'gallic-wars-58bce', 'augustus-consolidates-25bce'],
  },

  {
    id: 'chariot-racing-50ce',
    year: 50,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Circus, Not the Colosseum',
    headline:
      'Rome’s real mass sport is chariot racing: a Circus holding a quarter of the city, four corporate teams, star drivers richer than senators — and emperors who know better than to miss a race.',
    tags: ['spectacle', 'daily-life'],
    body: `The largest building in Rome was not the Colosseum but the Circus Maximus: roughly 600 meters of track in the valley between the Palatine and Aventine, seating perhaps 150,000 — three times the amphitheatre's capacity — with standing room beyond. A race day ran two dozen heats of seven laps each, four-horse teams cornering at the turning posts where the crashes happened, and the city emptied into the stands to watch. Racing was organized as permanent business long before the Colosseum existed: four professional stables — the Blues, Greens, Reds, and Whites — owned the horses and contracted the drivers, and fans were partisans of a color for life, from senators down to the men Pliny sneered at for loving a shirt rather than a skill.

The stars were slaves and freedmen who could become the richest performers in the empire; the champion Diocles retired in the next century with winnings recorded, on stone, at close to 36 million sesterces. Emperors attended conspicuously — the Circus was one of the only places the whole city could see its ruler, and shout at him, in person. Requests and grievances were chanted from the stands, and a shrewd emperor listened; the crowd noise at the races was the closest thing the monarchy had to a public opinion poll. Gladiators fought a few days a year; the colors raced all through it.`,
    whyItMatters: `Film has taught everyone that Roman spectacle means gladiators, but the scale ran the other way, and the difference matters for understanding how the monarchy worked. The Circus was where the deal between emperor and populace was performed: he provided grain and games, they provided acclamation — or organized, chanted complaint, which emperors ignored at real cost. Under a regime with no elections left, a crowd of 150,000 with the emperor in visible reach was the last functioning assembly in Rome. The factions themselves — permanent, funded, color-branded, with transferable star talent — are also the recognizable ancestor of every professional sports industry since, which is its own kind of Roman legacy.`,
    misconception: {
      claim: 'Gladiator fights were the most popular entertainment in Rome, with the Colosseum as its greatest venue.',
      correction:
        'Chariot racing outdrew gladiature by every measure: the Circus Maximus held roughly three times the Colosseum’s crowd, race days were far more frequent than games, and the best-paid performers in the empire were drivers, not gladiators. The Colosseum dominates the modern imagination because it survived, not because it dominated Roman life.',
    },
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium'],
    sources: [
      {
        author: 'Pliny the Younger',
        work: 'Letters',
        note: 'His contempt for race fans is a senator’s snobbery — and inadvertent testimony to how completely the sport possessed the city.',
      },
      {
        author: 'Fik Meijer',
        work: 'Chariot Racing in the Roman Empire',
        note: 'Assembles the factions, prize money, and Diocles inscription; capacity figures for the Circus remain estimates.',
      },
    ],
    connects: ['games-politics-70bce', 'grain-dole-58bce'],
  },

  {
    id: 'boudica-60ce',
    year: 60,
    yearEnd: 61,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Boudica Burns the Province',
    headline:
      'A flogged widow leads the Iceni against Roman Britain, burns its three chief towns with their inhabitants, and brings Rome closer to abandoning a province than at any time in the century.',
    tags: ['military'],
    body: `In 60 or 61 CE the client king of the Iceni died, leaving his kingdom jointly to his daughters and the emperor — the standard insurance of a Roman ally. The procurator's men treated the will as forfeiture instead: the kingdom plundered, Roman financiers calling in enormous loans, the widow Boudica flogged and her daughters raped. The Iceni rose, joined by the Trinovantes and others with seventeen years of requisitions and land seizures to avenge, while the governor Suetonius Paulinus and most of the army were away storming the Druid sanctuary on Anglesey. The rebels destroyed Camulodunum, the colony of Roman veterans built on confiscated land, and burned its last defenders in the temple of the deified Claudius — the province's most hated building, paid for by British taxes. Part of the Ninth Legion, marching to the rescue, was ambushed and its infantry annihilated.

Paulinus reached Londinium first but could not hold it, and made the cold call to abandon the town — and Verulamium after it — to the fire. Tacitus puts the dead in the three cities at seventy thousand; the burnt layer is still there under London. On a chosen field somewhere in the Midlands, Paulinus's ten thousand regulars met the vast, encumbered rebel host, wedged between woods with their families watching from a wagon ring, and destroyed it. Boudica died soon after — poison, says Tacitus; illness, says Dio. The procurator whose extortions had lit the fire had long since fled to Gaul; Nero, the same tradition reports, had seriously considered giving up Britain altogether.`,
    whyItMatters: `Boudica's revolt is the clearest demonstration in the early empire that provincial rule rested on consent it had not earned. The rising was not a border war but a customer rebellion: its immediate causes were debt-collection, confiscation, and the arrogance of occupation officials, aimed at the veteran colony and the imperial cult temple — the physical symbols of extraction. Rome's answer afterward conceded the point in practice: the rapacious procurator's successor urged conciliation, and a governor's brutality was quietly curtailed, because the lesson read in Rome was that the province had been provoked into costing more than it produced. It also fixed the pattern of every provincial revolt to come, from Gaul to Judaea: local grievance, spectacular early massacre, then the methodical annihilation of the rebels by an army that never stopped being better at set-piece war.`,
    misconception: {
      claim: 'Boudica led a British national uprising to drive out foreign rule.',
      correction:
        'There was no "Britain" to fight for — the island held dozens of separate peoples, many of whom stayed loyal to Rome or sat out the war, and Boudica’s own Iceni had been a willing client kingdom for a generation. The revolt was a rising of specific wronged tribes against maladministration, debt, and confiscation. The national heroine is a much later construction, largely Victorian.',
    },
    control: {},
    spatialFocus: ['britannia-south'],
    markers: [{ type: 'disaster', label: 'Camulodunum', at: [0.9, 51.89] }],
    sources: [
      {
        author: 'Tacitus',
        work: 'Annals',
        note: 'Written fifty years later, but his father-in-law Agricola served in the campaign — the closest thing to an eyewitness chain we have. The casualty figures are still rhetoric.',
      },
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: 'Adds the atrocity stories and Boudica’s great speech — composed by Dio, as ancient convention allowed, a century and a half later.',
      },
    ],
    connects: ['britain-43ce', 'gallic-wars-58bce'],
  },

  {
    id: 'freedmen-class-65ce',
    year: 65,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Manumission: Slavery With an Exit',
    headline:
      'Rome frees slaves on a scale no other ancient society matched — and the freedman with citizen children, a patron to serve, and a fortune to make becomes a load-bearing part of the social order.',
    tags: ['slavery', 'social'],
    body: `Roman slavery had a feature that startled Greek observers: it ended, routinely, in citizenship. A slave formally freed by a citizen master became a Roman citizen — restricted in office-holding and (for a generation) in rank, but with children born fully free. Manumission was common enough in the cities that emperors legislated to slow it down, capping testamentary freeings and setting minimum ages; common enough that the freedman, the libertus, was a recognized social type with his own dress, tombstone conventions, and stereotype — the vulgar rich parvenu Petronius made immortal in Trimalchio's fictional dinner party, dripping money and insecurity. Real freedmen ran shops, workshops, shipping firms, and banks; their funerary inscriptions crowd Roman cemeteries because the status was worth recording in stone.

Freedom was not a clean break. The freedman owed his former master — now his patron — deference, services, and often a share of his labor, and took the patron's name; manumission converted property into clientele. That was exactly why masters did it: the promise of freedom disciplined slaves more cheaply than chains, and freeing a talented man made him a loyal, rent-paying dependent. At the top, the emperor's own freedmen — Narcissus and Pallas under Claudius — ran the correspondence and the treasury of the empire and became scandalously rich, because the emperor, like any master, trusted his own household over the aristocracy. None of this softened the system underneath: mines and estate gangs saw little manumission; freedom was the carrot that kept the machine profitable.`,
    whyItMatters: `Manumission is the key to how a society that was perhaps one-fifth enslaved avoided being permanently at war with itself. By making freedom attainable and citizenship heritable, Rome gave urban slaves a rational alternative to resistance and constantly recruited its own underclass into stakeholders — the freedman's son could hold office, and nobody could reliably tell, two generations on, who descended from slaves. That porousness is also why Roman slavery never produced an abolitionist argument: a system with an exit ramp reads, to those inside it, as misfortune rather than caste. The contrast with racialized New World slavery — hereditary, closed, and visibly marked — is the single most important thing to understand about the Roman version.`,
    misconception: {
      claim: 'Roman slavery was like Atlantic slavery — a racial caste system.',
      correction:
        'Roman slavery was brutal but not racial: slaves came from every people Rome fought or traded with, looked like everyone else, and once freed became citizens whose descendants merged into the population. There was no color line, no hereditary slave race, and no ideology of biological inferiority — which is precisely why freed slaves could be absorbed rather than segregated.',
    },
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium', 'campania'],
    sources: [
      {
        author: 'Petronius',
        work: 'Satyricon',
        note: 'Trimalchio is satire by a court aristocrat, not sociology — evidence for how elites saw freedmen, not for how freedmen lived.',
      },
      {
        author: 'Henrik Mouritsen',
        work: 'The Freedman in the Roman World',
        note: 'Warns that inscriptions over-represent successful urban freedmen; the countryside majority of slaves rarely saw manumission at all.',
      },
    ],
    connects: ['household-slavery-80bce', 'slavery-captives-195bce', 'client-patron-460bce'],
  },

  {
    id: 'fire-64ce',
    year: 64,
    era: 'principate',
    weight: 2,
    reliability: 'contested',
    title: 'The Great Fire and the First Persecution',
    headline:
      'Nine days of fire gut ten of Rome’s fourteen districts; Nero rebuilds magnificently, takes a palace from the ashes, and hands the blame to an obscure cult.',
    tags: ['religious', 'infrastructure'],
    body: `On the night of 18–19 July 64 CE, fire broke out among the shops at the Circus Maximus and ran through the city for nine days. Of Rome's fourteen districts, three were leveled and seven more heavily damaged: a city of timber-framed apartment blocks, narrow lanes, and no effective firefighting had burned before, but never like this. Nero was at Antium when it started — thirty-five miles away — and returned to organize relief: shelters in his own gardens and public buildings, emergency grain, price caps. The rumor that he had sung of Troy's fall while the city burned attached itself to him anyway, because he was a stage-performing emperor whom it fit too well to check.

The rebuilding was intelligent: wider streets, height limits, fire-resistant stone, mandated water access and party walls — a building code written in ash. It was also self-serving, and Romans noticed the order of operations: out of the cleared acreage Nero took over a hundred acres across three districts for the Domus Aurea, a pleasure-palace-and-park with an artificial lake and a hundred-foot gilded colossus of himself. Whispers that the fire had been convenient hardened into the accusation — repeated by later historians, unresolvable now — that he had ordered it. Tacitus reports that to kill the rumor Nero produced culprits: the Christians, an obscure sect already disliked, of whom a number were torn by dogs, crucified, and burned as human lamps in his gardens. Tacitus despises the cult, and reports that the spectacle's cruelty turned the crowd toward pity — the first time the Roman state and the Christians had noticed each other, and an omen of the next 250 years.`,
    whyItMatters: `The fire matters less for the damage than for the two precedents set in its aftermath. First, the scapegoating: Nero established that Christians could be treated as a criminal category — punishable for the name itself, useful precisely because they were marginal and friendless — and imperial persecution would rerun that logic, sporadically, until Constantine. The Church, in turn, got its founding martyrs and a memory of the Roman state as persecutor, which shaped Christian political thought for centuries. Second, the credibility wound: whether or not Nero burned Rome, enough of Rome believed he had profited from it that the fire marks the start of his slide — the moment the emperor's spectacular self-indulgence stopped reading as generosity and began reading as theft from a homeless city.`,
    misconception: {
      claim: 'Nero fiddled while Rome burned.',
      correction:
        'The fiddle would not exist for another thousand years, and Nero was at Antium when the fire began; on returning he ran a competent relief operation. The durable image comes from a rumor Tacitus reports secondhand — that he sang of Troy — welded to his real reputation as a performer. What actually damaged him was the palace he built on the ruins.',
    },
    control: {},
    markers: [{ type: 'disaster', label: 'Rome', at: [12.48, 41.89] }],
    sources: [
      {
        author: 'Tacitus',
        work: 'Annals',
        note: 'Our earliest account, written fifty years on; he pointedly declines to decide whether the fire was accident or arson — a caution his successors abandoned.',
      },
      {
        author: 'Suetonius',
        work: 'Nero',
        note: 'States flatly that Nero set the fire; by his generation the hostile version had become the fact.',
      },
      {
        author: 'Edward Champlin',
        work: 'Nero',
        note: 'Argues most of the monstrous Nero is posthumous myth-making — and that the fire narrative is where the myth was forged.',
      },
    ],
    connects: ['insulae-urban-100bce', 'chariot-racing-50ce'],
  },

  {
    id: 'jewish-revolt-66ce',
    year: 66,
    yearEnd: 70,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'The First Jewish Revolt',
    headline:
      'A tax protest in Jerusalem becomes the destruction of a Roman legion’s eagle, a full provincial war — and the command that will carry Vespasian to the throne.',
    tags: ['military', 'religious'],
    body: `In 66 CE Judaea went from restive to insurgent in a season. The province had been misgoverned for years by short-term procurators squeezing it for money; the last of them, Florus, took seventeen talents from the Temple treasury, and Jerusalem exploded. The radical priests stopped the daily sacrifice offered for the emperor — a formal declaration that Rome's rule was illegitimate — the small Roman garrison was massacred, and when Cestius Gallus marched the Twelfth Legion down from Syria to restore order, he was ambushed in the pass of Beth Horon on his retreat and lost some six thousand men and the legion's eagle. A punitive expedition had become a war Rome could not decline: an eagle was gone, and every subject people was watching.

Nero gave the command to Titus Flavius Vespasianus — a capable, unglamorous general safely lacking aristocratic connections, available partly because he had offended the emperor by dozing at one of his recitals. Vespasian took three legions and reduced the country methodically from the north: Galilee in 67 (where the rebel commander Josephus surrendered, prophesied Vespasian's rise, and ended as the war's historian), then the coast and the Jordan valley, penning the revolt into Jerusalem — where the defenders meanwhile fought a civil war among themselves, faction against faction inside the walls. Then, in 68, Nero died, Rome's own politics collapsed into civil war, and Vespasian halted operations to watch. The army that had been besieging Judaea began to consider what else an army could do.`,
    whyItMatters: `The revolt shows the empire's provincial machinery at its worst and its military machinery at its most implacable — but its deepest consequence was accidental: it assembled a battle-hardened army in the east under a commander with nothing to lose exactly when the throne fell vacant. Without the Judaean command there is no Emperor Vespasian, no Flavian dynasty, and no Colosseum. The war also broke the institutional center of Judaism and set Rome and the Jews on the road to two further catastrophic wars. And in Josephus it produced something unique: a full-length inside account by a participant from the losing side — our best view anywhere of how a provincial revolt looked from within, written under the patronage of the men who crushed it.`,
    control: { judaea: 'contested' },
    sources: [
      {
        author: 'Josephus',
        work: 'The Jewish War',
        note: 'A rebel general turned Flavian client, writing in his patrons’ house: invaluable, detailed, and structurally incapable of blaming Vespasian or Titus for anything.',
      },
      {
        author: 'Martin Goodman',
        work: 'Rome and Jerusalem',
        note: 'Argues the catastrophe was less inevitable religious collision than escalation driven by bad governors and Roman politics — undercutting the "clash of civilizations" framing the war usually gets.',
      },
    ],
    connects: ['judaea-province-6ce', 'pompey-east-66bce'],
  },

  {
    id: 'nero-death-68ce',
    year: 68,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Nero Falls Without a Battle',
    headline:
      'Abandoned by the guard he could no longer pay to love him, the last Julio-Claudian dies in a villa cellar — and takes the dynasty’s aura, and everyone’s restraint, with him.',
    tags: ['succession'],
    body: `Nero was not overthrown; he evaporated. In March 68 Vindex, a governor in Gaul, rose against him in the name of better government — and was crushed within weeks by the Rhine legions. But Galba, the seventy-year-old governor of Spain, had meanwhile declared for "the Senate and Roman people," and the contagion of declared disloyalty spread faster than any army marched. Nero had alienated every constituency that sustained an emperor: the aristocracy by the executions and forced suicides that followed the Pisonian conspiracy of 65 (which killed, among others, his old tutor Seneca), the armies by never once visiting them — he toured Greek song contests instead — and the treasury by rebuilding Rome and the Domus Aurea at ruinous cost. In June the Praetorian prefect transferred the guard's allegiance to Galba with a promised donative; the Senate, sensing the wind, declared Nero a public enemy. He fled to a freedman's villa outside Rome and, with horsemen approaching, drove a dagger into his throat with secretarial help — repeating, tradition says, "what an artist dies in me."

He was thirty, and the last of his line. A century of matrimonial politics and dynastic murder had pruned the descendants of Augustus to zero; there was no Julio-Claudian left to rally around. The name Caesar — the family surname that had anchored every accession since Actium — now became simply a title, available to whoever could take it. Galba entered Rome that autumn as its first non-Julio-Claudian bearer: old, unloved, and already being measured by the armies that had made him. Three more men would hold the title within the next twelve months.`,
    whyItMatters: `Nero's fall revealed that the principate's stability had been dynastic sentiment all along, not institutional design. For fifty-four years every emperor, however dangerous or absurd, had carried Augustus's blood or name, and the armies' oath had a family to attach to; the moment the family ran out, the oath had no object and the succession reverted to what it had been in the 40s BCE — an open competition among army commanders. Nero also fell without a battle, to a mere cascade of withdrawn consent, which taught the empire's governors a matched pair of lessons: an emperor who loses the armies' belief is already dead, and any governor with legions is a candidate. The civil war of 69 is not a reaction to Nero's tyranny; it is the immediate, mechanical consequence of his lacking an heir.`,
    control: {},
    sources: [
      {
        author: 'Suetonius',
        work: 'Nero',
        note: 'The deathbed scene — the artist line, the trembling freedmen — is vivid, secondhand, and forty years after the fact.',
      },
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: 'Preserves the hostile senatorial tradition in its mature form; by his day Nero was a stock monster.',
      },
      {
        author: 'Miriam Griffin',
        work: 'Nero: The End of a Dynasty',
        note: 'Locates the fall in fiscal collapse and alienated elites rather than madness — the tyrant of the sources was, above all, insolvent.',
      },
    ],
    connects: ['fire-64ce', 'augustus-dies-14ce'],
  },

  {
    id: 'four-emperors-69ce',
    year: 69,
    era: 'principate',
    weight: 3,
    reliability: 'well-attested',
    title: 'The Year of the Four Emperors',
    headline:
      'Galba, Otho, Vitellius, Vespasian: in eighteen months the armies of Spain, the guard, the Rhine, and the East each make an emperor — and the secret that thrones are made in the camps is out for good.',
    tags: ['succession', 'military', 'constitutional'],
    body: `The year after Nero's suicide, four emperors held Rome in succession, each made and unmade by a different army. Galba marched from Spain and reigned seven months: elderly, rigid, and fatally stingy — he refused the donative promised in his name, lectured the soldiers that he levied troops rather than bought them, and passed over the ambitious Otho to adopt a well-born nobody as heir. Five days later, on 15 January 69, the Praetorians hacked Galba to death at the Lacus Curtius in the middle of the Forum and made Otho emperor. By then the Rhine legions had already refused their oath to Galba and acclaimed their own commander, Vitellius, and the armies of Germany were marching on Italy against the armies of the capital.

Otho's forces met the Vitellians at Bedriacum in northern Italy in April and lost; Otho, with reserves still intact, chose suicide over prolonging a civil war — the one act of the year that ancient writers found admirable. Vitellius reigned through the summer, his enormous army quartered on Italy like an occupying force. In July the legions of Egypt, Judaea, and Syria swore to Vespasian, the general Nero had sent against the Jewish revolt; the Danube legions joined, invaded Italy, and destroyed the Vitellian army in a second, night-long battle at Bedriacum, then stormed and sacked Cremona beside it. In Rome, fighting between the factions burned the temple of Jupiter Optimus Maximus on the Capitol — the holiest building in the Roman world, torched by Roman soldiers. In December the Flavian army fought its way into the city street by street; Vitellius was dragged from a hiding place, tortured through the Forum past the spot where Galba had died, and butchered on the Gemonian Stairs. The Senate voted Vespasian everything the same day.

Tacitus, whose Histories open in this year, gave the whole convulsion its epitaph: the secret of empire was out — an emperor could be made elsewhere than at Rome. Nothing about 69 was militarily necessary; the frontiers were quiet and the same empire that fought itself would run smoothly under Vespasian within a year. The war was purely about the fact that four army groups had each discovered they could confer the purple, and no rule existed to say which of them was right.

Vespasian spent his reign answering that discovery: a lex de imperio passed to give his powers statutory form, the army's donative paid but discipline restored, his sons Titus and Domitian advertised everywhere as the succession — because the one thing 69 had proved was that an emperor without an obvious heir was an invitation to audition.`,
    whyItMatters: `69 CE is the control experiment that exposes what the principate actually was. Augustus's system had never solved succession — it had merely hidden the problem inside one family's prestige, and when the family died out, the underlying mechanism showed itself in public: sovereignty lived with the legions, and any army group could nominate. Once demonstrated, the knowledge could not be recalled. The auction of 193, the barracks emperors of the third century, every future march on Rome — all of them are reruns of 69, because the constitutional vacuum it revealed was never filled; no legal rule of succession would ever exist. The year sits, deliberately embarrassing, inside the "Pax Romana": the celebrated two centuries of peace contain a full civil war in which Italy was invaded twice, Cremona was sacked by Roman troops, and the Capitol burned. The peace of the principate was real, but it was always conditional on the throne being uncontested — and 69 showed how fast it dissolved when the throne was not.`,
    misconception: {
      claim: 'The Pax Romana was two centuries of unbroken peace.',
      correction:
        'The Pax Romana contains the year 69: a full-scale civil war with two pitched battles in Italy, the sack of Cremona by Roman legions, and the burning of the Capitol — plus Boudica’s revolt, the Jewish wars, and constant frontier fighting. The phrase describes the interior provinces’ freedom from war, not an empire at peace; the legions were never idle.',
    },
    control: {},
    sources: [
      {
        author: 'Tacitus',
        work: 'Histories',
        note: 'Written thirty years later under the dynasty the war produced — which is why Vespasian’s faction comes off best; the "secret of empire" judgment is his.',
      },
      {
        author: 'Suetonius',
        work: 'Galba, Otho, Vitellius',
        note: 'Three short lives that preserve the year’s grotesque detail — including material hostile to the Flavian victors.',
      },
      {
        author: 'Plutarch',
        work: 'Galba and Otho',
        note: 'A near-contemporary Greek observer, more interested in the moral collapse of the soldiery than in any claimant’s legitimacy.',
      },
    ],
    connects: ['nero-death-68ce', 'claudius-41ce', 'sulla-march-88bce', 'augustus-dies-14ce'],
  },

  {
    id: 'jerusalem-70ce',
    year: 70,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Jerusalem and the Temple Destroyed',
    headline:
      'Titus takes Jerusalem after a five-month siege of famine and crucifixions; the Temple burns, and its treasure pays for the Colosseum.',
    tags: ['military', 'religious'],
    body: `In the spring of 70 CE Titus, Vespasian's twenty-nine-year-old son, closed on Jerusalem with four legions while the city's rebel factions were still fighting each other inside the walls — one faction had burned the city's grain reserves to force the others to fight, a decision that did as much as Rome did to kill Jerusalem. The siege lasted five months and became a horror even by ancient standards: Titus threw a wall of circumvallation around the city so that nothing could enter or leave, refugees who slipped out were crucified in view of the walls — hundreds a day at the worst, until wood ran short — and Josephus, watching from the Roman lines, records famine inside descending through leather and hay to worse. In August the legions broke through to the Temple mount, and the Second Temple, the center of Jewish worship for six centuries, went up in flames — against Titus's orders, Josephus insists, though a Flavian client would have to say that, and other evidence suggests the decision was deliberate.

The city was leveled, its population killed or enslaved — Josephus's totals are impossible, but the destruction was total. The Tenth Legion camped permanently on the ruins; a new tax, the fiscus Judaicus, redirected the half-shekel Jews everywhere had paid to the Temple into Rome's treasury — specifically to rebuilding the burned temple of Jupiter. In Rome, Vespasian and Titus celebrated a lavish joint triumph in 71: the Arch of Titus still shows the menorah and Temple vessels carried through the streets. The plunder and captives funded the dynasty's signature project — the Flavian Amphitheatre, the Colosseum, built where Nero's private lake had been. An inscription recorded that it rose from the spoils of war; the spoils were Jerusalem's.`,
    whyItMatters: `The destruction was, for the Flavians, a legitimacy machine: a new dynasty with no ancestry converted a provincial revolt into a world-historical victory, advertised it in a triumph, an arch, and a colossal amphitheatre pointedly built for the public on ground Nero had taken for himself — the new regime's propaganda written in travertine. For Judaism, the catastrophe was transformative in the opposite direction: sacrificial worship centered on one building ended, and out of the wreckage the rabbinic tradition of text, synagogue, and law slowly took the Temple's place — the pivot on which Jewish history still turns. The event also quietly shaped Christianity, which was already separating from the synagogue and now increasingly read the Temple's fall as vindication, hardening the split. Few single acts of ancient warfare have consequences this alive twenty centuries later.`,
    control: { judaea: 'provincial' },
    markers: [{ type: 'siege', label: 'Jerusalem', at: [35.23, 31.78] }],
    sources: [
      {
        author: 'Josephus',
        work: 'The Jewish War',
        note: 'An eyewitness from the Roman camp — and a Flavian dependent whose account systematically shifts blame from Titus to the rebel factions and fate.',
      },
      {
        author: 'Martin Goodman',
        work: 'Rome and Jerusalem',
        note: 'Reads the Flavians as needing the war to be a great foreign victory — the destruction was amplified, not regretted, because the dynasty’s legitimacy was built on it.',
      },
    ],
    connects: ['jewish-revolt-66ce', 'four-emperors-69ce'],
  },

  {
    id: 'romanization-west-75ce',
    year: 75,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'reconstructed',
    title: 'What Romanization Actually Meant',
    headline:
      'Nobody forced the provinces to build forums and wear togas — local elites bought Roman culture because it purchased rank, and Tacitus called the result servitude.',
    tags: ['culture', 'daily-life'],
    body: `Within a few generations of conquest, the towns of Gaul, Spain, and lowland Britain acquired forums, temples, baths, Latin inscriptions, and town councils on the Italian model. Almost none of this was imposed. Rome sent no missionaries of culture and ran no schools of Latin; what it did was rule through local aristocracies and make the trappings of Roman life the currency of status within its system. A Gallic noble's son who spoke Latin, held a town magistracy, and funded a bath building could become a Roman citizen, then an equestrian, eventually a senator; the same energy that had gone into tribal war and feasting went into competitive municipal architecture. Archaeology shows the result was always a hybrid — Celtic gods with Latin names in classical temples, Roman dress over local metalwork — and it was always thickest in towns and villas, thinnest in the villages where most people went on farming, speaking their own languages, as before.

The sharpest ancient comment on the process comes from Tacitus, describing his father-in-law Agricola encouraging temples, forums, and Latin education in Britain: the Britons took up the toga, the porticoes, baths, and elegant dinners, he writes — and in their inexperience called it civilization, when it was really a part of their enslavement. That is a moralist scoring points off his own society's comforts, but it names the mechanism honestly: cultural adoption made the conquest self-maintaining. Provinces that dressed, built, and litigated like Romans no longer needed garrisoning against their own elites.`,
    whyItMatters: `Romanization explains the empire's most remarkable feature: its durability with a tiny administration. A few hundred senior Roman officials governed fifty million people because the actual work was done by provincial elites who had bought into the system — conquest converted into consent within two or three generations, with the conquered paying for the conversion themselves. It is also why the western empire's fall did not erase Rome: Latin had become the population's own language, Roman law their own custom, so Gaul could stop being governed by Rome without ceasing to be Roman — the deep reason French and Spanish exist. The modern word "Romanization" misleads exactly where Tacitus was precise: this was not a policy Rome performed on subjects, but a bargain subjects performed on themselves.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['gallia-lugdunensis', 'britannia-south', 'hispania-baetica'],
    sources: [
      {
        author: 'Tacitus',
        work: 'Agricola',
        note: 'The "part of their enslavement" passage — a eulogy of his father-in-law that doubles as the most cynical ancient analysis of cultural assimilation.',
      },
      {
        author: 'Greg Woolf',
        work: 'Becoming Roman',
        note: 'Argues "Romanization" is the wrong word entirely — provincials were not copying Rome but competing for standing inside a new imperial culture that Italy itself was also learning.',
      },
    ],
    connects: ['gallic-wars-58bce', 'britain-43ce', 'narbonensis-121bce'],
  },

  {
    id: 'vesuvius-79ce',
    year: 79,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Vesuvius Buries Pompeii and Herculaneum',
    headline:
      'A mountain nobody knew was a volcano kills two towns in a day — and accidentally preserves more of ordinary Roman life than every text combined.',
    tags: ['daily-life', 'culture'],
    body: `In the autumn of 79 CE — the traditional date is 24 August, but the manuscripts disagree and the archaeology of clothing and harvests points later — Vesuvius, a fertile vine-covered mountain that no Roman knew was a volcano, exploded above the Bay of Naples. A column of ash and pumice rose miles high and rained on Pompeii through the day, collapsing roofs and burying streets; most of the town's ten-to-twelve thousand people fled and survived. Then, overnight, the column collapsed and pyroclastic surges — avalanches of gas and rock at hundreds of degrees — rolled over Herculaneum and then Pompeii, killing at a stroke everyone who had stayed. The younger Pliny watched from across the bay and later wrote two letters describing the cloud shaped like an umbrella pine, the earthquakes, the sea sucked back — the first scientific description of such an eruption, made while his uncle, the encyclopedist Pliny the Elder, died taking the fleet in for a closer look and a rescue.

The catastrophe froze two ordinary towns in a single day. Under the ash survived everything time normally destroys: election graffiti and tavern prices painted on walls, bread carbonized in ovens, a dog on its chain, wax tablets recording a freedwoman's loans, brothel price lists, garden roots, the sea-front library of papyri at Herculaneum — and the cavities left by bodies in the ash, which excavators filled with plaster to recover the shapes of the dying. No literary source describes daily life at this resolution, because no Roman thought it worth describing; the eruption preserved precisely what the literature ignored.`,
    whyItMatters: `Vesuvius matters to history mainly for what it stopped: the ordinary. Nearly everything confidently said about Roman streets, shops, houses, wall-painting, diet, and graffiti traces back to these two towns, which is both a gift and a trap — Pompeii was one mid-sized Campanian town at one moment, and it has been made to stand for "Roman daily life" across an empire of thousands of towns and four centuries. The event is also a lesson in how evidence shapes history: we know Pompeii's bar counters better than we know the population of Rome, not because bars mattered more, but because of where the ash happened to fall. Every generalization in this app about Roman daily life should be read with that bias in mind.`,
    misconception: {
      claim: 'Pompeii’s people were all killed instantly, frozen mid-step with no warning.',
      correction:
        'The eruption gave most people the better part of a day: hours of ash-fall preceded the lethal surges, and the majority of Pompeii’s population evidently escaped — the dead found in the town are a minority who stayed or turned back. The "frozen" bodies are plaster casts of ash cavities, and they record the fraction who waited too long, not the fate of the town.',
    },
    control: {},
    markers: [{ type: 'disaster', label: 'Pompeii', at: [14.49, 40.75] }],
    sources: [
      {
        author: 'Pliny the Younger',
        work: 'Letters',
        note: 'Two letters to Tacitus, written ~25 years later at his request — an eyewitness account, but a literary set-piece polished for publication.',
      },
      {
        author: 'Mary Beard',
        work: 'Pompeii: The Life of a Roman Town',
        note: 'Repeatedly warns against the town-under-glass fantasy: Pompeii was half-ruined by an earlier earthquake, partly evacuated, and dug up by centuries of methods good and terrible.',
      },
    ],
    connects: ['freedmen-class-65ce', 'insulae-urban-100bce'],
  },

  {
    id: 'baths-daily-life-80ce',
    year: 80,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Baths: Rome’s Most Democratic Room',
    headline:
      'For a coin or for free, senator and shopkeeper strip, sweat, and gossip in the same heated water — the one daily institution the whole city shares.',
    tags: ['daily-life'],
    body: `By the Flavian era, bathing was the fixed appointment of the Roman day. Mid-afternoon, work done, a Roman of nearly any rank walked to the baths — Rome had hundreds of small commercial establishments and, increasingly, vast imperial complexes given to the city by emperors — paid a trivial entrance fee or nothing, and moved through the sequence: undressing room, warm room, hot room over a hypocaust of raised floors and wall flues fed by furnaces, a scrape-down with oil and a curved strigil instead of soap, then the cold plunge. Around the water clustered everything else — exercise yards, ball games, snack sellers, masseurs, libraries in the grandest complexes, and noise: Seneca, who once lodged over a bathhouse, left a splendidly grumpy catalogue of the grunting weightlifters, the slapping masseurs, the hair-plucker's scream, and the sausage vendor's cry.

The baths ran on the aqueducts and on slave labor stoking the furnaces, and they were where Roman urban life was most itself: senators and shopkeepers naked in the same pools, business gossiped, dinner invitations angled for, patrons met. Emperors built them ever larger precisely because they were the cheapest way to give a million people a daily luxury — marble, heated water, and leisure — that even kings elsewhere lacked. Moralists worried the habit was softening; doctors prescribed it; everyone went. When provincials wanted to show they had become Roman, a bath building was the first thing they raised, from Britain to the Sahara's edge.`,
    whyItMatters: `The baths are the best single answer to "what did Rome actually offer ordinary people?" Political liberty was gone and wealth was brutally unequal, but the daily texture of urban life included an amenity — abundant hot water, heated architecture, free or nearly free — that would not be widely available again in Europe for eighteen centuries. That is why the bathhouse, more than the temple or the forum, marks the empire's cultural footprint on the map: it was the Roman package at its most exportable and most wanted. And as a social instrument it did quiet work no law could do, rehearsing daily, in the flesh, the idea that everyone in the city belonged to one civic body — stratified everywhere else, briefly level in the water.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium', 'campania'],
    sources: [
      {
        author: 'Seneca',
        work: 'Moral Letters',
        note: 'Letter 56, the noise of the bathhouse below his lodgings — a philosopher’s complaint that is also our most vivid soundscape of Roman daily life.',
      },
      {
        author: 'Garrett G. Fagan',
        work: 'Bathing in Public in the Roman World',
        note: 'Cautions that the evidence skews to big imperial complexes; how mixed the bathing of ranks and sexes really was varied by place and remains argued.',
      },
    ],
    connects: ['concrete-engineering-20bce', 'via-appia-312bce'],
  },

  {
    id: 'agri-decumates-85ce',
    year: 85,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'reconstructed',
    title: 'The Agri Decumates: Straightening the Frontier',
    headline:
      'The Flavians annex the awkward salient between the upper Rhine and upper Danube, trading a long river detour for a short fortified land line.',
    tags: ['military', 'infrastructure'],
    body: `The Rhine and the Danube, the empire's two great river frontiers, do not meet. Their headwaters leave a wedge of Black Forest hill country in between — a re-entrant angle that forced Roman lateral communications into a long detour and offered raiders a corridor. Under Vespasian and then Domitian, in a series of unglamorous campaigns culminating in Domitian's war against the Chatti in 83–85, Rome pushed into this wedge — the agri decumates, a name Tacitus uses once and no one can securely translate — and closed the gap. Roads, forts, and watchtowers went in along a new land frontier; over the following decades it hardened into the limes, a continuous line of palisade, towers, and garrisons running from the Rhine to the Danube. Settlers, many from Gaul, filled in behind the soldiers.

The gain was modest land but real geometry: the frontier shortened, the two river armies could reinforce each other quickly, and the angle between them was no longer an invitation. It was empire-building of the Flavian type — engineering and consolidation rather than conquest, worth no triumph. Tacitus duly sneered at Domitian's stage-managed German victory; the forts stayed useful for two centuries regardless, until the frontier they anchored was abandoned in the crisis of the 260s.`,
    whyItMatters: `The agri decumates marks the empire's strategic turn from expansion to perimeter management: the question has stopped being "what next?" and become "what is the cheapest line to hold?" — a full generation before Hadrian made that logic official. It is also a lesson in reading the sources against the archaeology: the literary tradition, written by senators who despised Domitian, dismisses these campaigns as fraud, while the ground shows a coherent, decades-long engineering program that measurably improved the empire's defensive economics. When the region is abandoned in the 260s, it will be the first substantial Roman territory in Europe given up for good — the frontier's first permanent step backward, taken exactly where its last confident step forward had been.`,
    control: { 'agri-decumates': 'provincial' },
    sources: [
      {
        author: 'Tacitus',
        work: 'Germania',
        note: 'The only ancient mention of the name agri decumates, in one opaque sentence; the region’s history is otherwise reconstructed almost entirely from excavation.',
      },
      {
        author: 'C. R. Whittaker',
        work: 'Frontiers of the Roman Empire',
        note: 'Argues the limes was less a defensive wall than a zone of control and customs — undercutting the neat "shorter shield-wall" logic this event is usually given.',
      },
    ],
    connects: ['germania-campaigns-12bce', 'teutoburg-9ce', 'danube-frontier-16bce'],
  },

  {
    id: 'domitian-81ce',
    year: 81,
    yearEnd: 96,
    era: 'principate',
    weight: 2,
    reliability: 'contested',
    title: 'Domitian: Efficient, Autocratic, and Written by His Enemies',
    headline:
      'Fifteen years of sound administration and naked autocracy end with a palace conspiracy, an erased name — and a historical record composed entirely by the men who hated him.',
    tags: ['succession', 'constitutional'],
    body: `Domitian, Vespasian's younger son, ruled for fifteen years — longer than any emperor since Tiberius — and ran the empire conspicuously well. The coinage was restored to a purity not seen in decades; provincial governors were policed so strictly that even hostile sources concede the provinces were never better governed; the frontier wars on the Rhine and Danube were hard-headed, and the army got its first pay raise since Augustus. He rebuilt fire-damaged Rome on a grand scale, including the palace on the Palatine that housed emperors for three centuries. But he ruled without the mask. Where Augustus had performed deference to the Senate, Domitian moved the court to the palace, held office as censor for life, and let himself be addressed — the sources insist — as dominus et deus, master and god. The aristocracy's function shrank to attendance and flattery, and its resentment curdled into conspiracies, real and suspected.

After a governor's revolt in 89, and increasingly through the 90s, Domitian answered fear with terror: treason trials, informers, executions of senators — including relatives, philosophers expelled from Italy, a reign remembered by its survivors as fifteen years of holding one's breath. In September 96 his own household did what the Senate could not: a conspiracy of palace officials, possibly with the empress's knowledge, stabbed him in his bedroom. The Senate exulted, voted his memory damned — his name chiseled off monuments, his arches torn down — and installed the elderly senator Nerva. Every surviving account of Domitian was written after that vote, by men of the class he had terrorized: Tacitus and Pliny, whose careers had prospered under him, wrote the tyrant with a survivor's need to explain their own compliance; Suetonius added the anecdotes. The emperor the provinces and army knew — the one whose administration even his enemies conceded — has to be excavated from between their lines.`,
    whyItMatters: `Domitian is the corpus's clearest lesson in source criticism: the record of an entire reign filtered through a single hostile class with a motive — senators justifying both their hatred and their earlier collaboration. Read that way, "good" and "bad" emperors sort suspiciously well by how they treated the four hundred men who wrote and read history, and barely at all by how the fifty million were governed; Domitian's provinces flourished while Rome's authors suffered, and the verdict followed the authors. His murder also reran the constitutional lesson of 41 and 69 — no lawful way to remove an emperor, so the knife again — but with a new coda: the childless Nerva, installed by the conspirators' Senate and facing a Praetorian mutiny for Domitian's blood, secured himself by adopting the general Trajan. The celebrated "adoptive" age that follows was born not from principle but from a murdered emperor and a frightened old man.`,
    misconception: {
      claim: 'Domitian was a mad tyrant whose reign was a disaster for Rome.',
      correction:
        'The tyranny was real but had a specific target: the senatorial elite, who then wrote all the surviving accounts. Outside their circle the reign looks like one of the best-administered of the century — sound currency, disciplined governors, secure frontiers, a paid and loyal army. "Disaster" describes what the reign was for historians, not for the empire.',
    },
    control: {},
    sources: [
      {
        author: 'Tacitus',
        work: 'Agricola',
        note: 'The portrait of the tyrant watching and hating virtue — written by a man whose own career advanced steadily under that tyrant, a tension Tacitus himself half-admits.',
      },
      {
        author: 'Suetonius',
        work: 'Domitian',
        note: 'Preserves the dominus et deus formula; no document from Domitian’s own chancery uses it, and some scholars think the title is his enemies’ caricature.',
      },
      {
        author: 'Brian W. Jones',
        work: 'The Emperor Domitian',
        note: 'The standard modern reassessment: an able, suspicious autocrat whose real offense was refusing to flatter the Senate — the monster is the sources’ revenge.',
      },
    ],
    connects: ['four-emperors-69ce', 'jerusalem-70ce', 'tiberius-14ce'],
  },
];

