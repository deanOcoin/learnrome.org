// 30 BCE to 14 CE, the Augustan settlement

import type { RomeEvent } from '../../types';

export const PRINCIPATE_A_EVENTS: RomeEvent[] = [
  {
    id: 'egypt-annexed-30bce',
    year: -30,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: "Egypt Becomes the Emperor's Preserve",
    headline:
      "Octavian annexes the richest country in the Mediterranean within weeks of Cleopatra's death — and closes it to senators, because whoever holds Egypt's grain holds Rome.",
    tags: ['economic', 'constitutional'],
    body: `Within weeks of Cleopatra's suicide in August 30 BCE, Octavian annexed Egypt — not as a client kingdom, and not as an ordinary province for the Senate to staff, but as something Rome had never possessed: a territory governed by a prefect of mere equestrian rank, answerable to Octavian alone. Senators and prominent equestrians were forbidden even to enter the country without his personal permission. Below the prefect, the Ptolemaic machine — nome by nome, scribe by scribe, a bureaucracy older than Rome itself — kept running exactly as before; Rome simply installed itself at the top of a three-thousand-year-old extraction apparatus. In the temples, the new ruler was carved as pharaoh. The first prefect was Cornelius Gallus, a poet.

The reasons were bluntly material. Egypt shipped grain on a scale nothing else matched — by the Julio-Claudian period roughly a third of what fed the city of Rome — and the Nile flood made the harvest dependable in a way rain-fed provinces were not. The Ptolemaic treasure Octavian carried home paid his veterans' discharges and his debts; Suetonius says so much money hit Rome at once that interest rates collapsed and land prices soared. Gallus himself demonstrated the office's danger: he plastered Egypt with his own statues and victory inscriptions, was recalled, disgraced, and driven to suicide by 26 BCE. The rule thereafter was understood — Egypt was to make no man great except one.

Formally, Augustus would later write that he had added Egypt to the empire of the Roman people. Practically, the Roman people's representatives could not visit it. The province paid its grain and taxes into the emperor's own administration, was garrisoned by legions under equestrian officers rather than senatorial legates, and functioned as the private endowment of the ruling house — the first and largest demonstration that, under the coming settlement, some parts of the empire would be more the emperor's than others.`,
    whyItMatters: `Egypt is the settlement of 27 BCE stripped of ceremony, three years early. The dangerous assets — grain, treasure, legions — pass to one man; the honors pass to everyone else. Barring senators was not etiquette but arithmetic: whoever held Egypt could starve Rome into agreement, so no senator would ever be allowed the chance. That chokehold logic ran the length of the Principate — when Vespasian bid for empire in 69 CE, his first move was not toward Rome but toward Egypt and the grain. And the annexation set a precedent that outlasted every dynasty: the emperor as landowner of provinces, with revenues no public body ever audited. The Republic's finances had been argued in the Senate; the Empire's were, increasingly, a household's.`,
    misconception: {
      claim: 'After Actium, Egypt became a Roman province like any other.',
      correction:
        "It was annexed immediately — in 30 BCE, not late in the reign — and it was never ordinary. No senator could enter without imperial permission, its governor was an equestrian prefect rather than a senatorial proconsul, and its revenues flowed through the emperor's own administration. Egypt was less a province than the emperor's estate, and it stayed that way for centuries.",
    },
    control: { aegyptus: 'provincial' },
    markers: [{ type: 'political', label: 'Alexandria', at: [29.92, 31.2] }],
    sources: [
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: 'Writing over two centuries later; his explanation of the senatorial ban already assumes the developed imperial system it helped create.',
      },
      {
        author: 'Strabo',
        work: 'Geography',
        note: "Toured Egypt as the friend and guest of an early prefect — a contemporary insider's view, not a critical one.",
      },
      {
        author: 'Augustus',
        work: 'Res Gestae',
        note: "'I added Egypt to the empire of the Roman people' — the official claim of public ownership, for a country the public's representatives were barred from entering.",
      },
    ],
    connects: ['actium-31bce', 'deaths-30bce', 'grain-dole-58bce'],
  },

  {
    id: 'first-settlement-27bce',
    year: -27,
    era: 'principate',
    weight: 3,
    reliability: 'well-attested',
    title: 'The First Settlement',
    headline:
      'Octavian hands the state back to the Senate in a stage-managed session, and the Senate begs him to keep the provinces where the legions are — then names him Augustus.',
    tags: ['constitutional'],
    body: `On 13 January 27 BCE, Octavian rose in the Senate and gave the state back. Every province, every army, every extraordinary power accumulated through the civil wars — returned, he announced, to the discretion of the Senate and the Roman people. The Senate responded as arranged: it begged him to reconsider, and voted him a ten-year command over Hispania, Gaul, and Syria — the provinces that happened to contain the great majority of Rome's legions — with Egypt already his. The remaining, mostly unarmed provinces went back to proconsuls chosen the old way. Three days later the Senate granted him a new name, Augustus, and the Republic was declared restored. He would call himself princeps: first citizen.

Cassius Dio, our fullest source, says flatly that the scene was scripted in advance with his inner circle; the speech survives only as Dio's own reconstruction. But the performance was not simply a lie. Consuls were elected again, the courts sat, the Senate met and debated, governors of the public provinces rotated by lot, and the coinage celebrated the champion of Roman liberty. Men who could remember the proscriptions were entitled to conclude that the forms, at least, had come back — and that the alternative to the forms was more of what the forties had been.

The legal instrument was almost aggressively traditional: a provincia, a defined task voted to a magistrate — exactly what the Republic had given Pompey against the pirates. Augustus governed his provinces from Rome through legati of his own choosing, which was Pompey's Spanish arrangement extended to a third of the world. The division sorted the provinces, in effect, by armament: where legions stood — the Rhine, the Spanish wars, Syria facing Parthia — the governor was Augustus; where they did not, the Senate presided. Africa, which kept a single legion under a proconsul, was the exception that kept the principle decently blurred.

The name was Munatius Plancus's motion. Romulus had been considered and dropped — too regal, too fratricidal. Augustus carried no constitutional meaning at all, which was its perfection: a word from the vocabulary of augury and consecration, suggesting something enlarged, hallowed, slightly more than human. An oak-leaf crown over his door for saving citizens; a golden shield in the Senate house proclaiming his virtues; laurels on the doorposts. Honors, not offices. The offices stayed scrupulously ordinary — he simply held the consulship year after year, as any nobleman theoretically might.

Sulla had shown that power seized by force could be legalized afterward; Caesar had shown that visible, permanent supremacy got you killed in a meeting room. The First Settlement is the synthesis of the two lessons: supremacy total, and totally deniable.`,
    whyItMatters: `The settlement's genius is that the constitutional map and the military map were drawn to coincide. Where there are legions, there is Augustus; where there are none, there is the Senate — so the Republic is restored precisely and only where the Republic cannot bite. Civil war now has no legal on-ramp: to march on Rome a man must first command legions, and to command legions he must be Augustus's own legate, appointed and removable by him. That is the entire constitution, disguised as an administrative convenience. It also explains why the question "when did the Republic end?" has no clean answer — nothing was abolished, and people who lived through 27 BCE could disagree in good faith about what they were now living under. A system you cannot name is a system you cannot organize against; the ambiguity was not a side effect but the design.`,
    control: {},
    sources: [
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: 'The set-piece account, including speeches Dio composed himself, written more than two centuries later by a senator of the Severan monarchy.',
      },
      {
        author: 'Augustus',
        work: 'Res Gestae',
        note: "'I transferred the res publica from my own power to the control of the Senate and people' — the founder's version, carved in bronze across the empire.",
      },
      {
        author: 'Ronald Syme',
        work: 'The Roman Revolution',
        note: 'Reads the settlement as a facade over military despotism; written in 1939 with contemporary dictators visibly in mind — itself an interpretation with a context.',
      },
    ],
    connects: ['actium-31bce', 'egypt-annexed-30bce', 'assassination-44bce', 'sulla-resigns-79bce'],
  },

  {
    id: 'standing-army-25bce',
    year: -27,
    yearEnd: 14,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'The Army Made Permanent',
    headline:
      'Augustus fixes the legions at twenty-eight, invents the Praetorian Guard, and pays every discharge from a treasury he founded — the state now has one patron, and so does every soldier.',
    tags: ['military', 'constitutional'],
    body: `Between Actium and his death, Augustus turned the emergency armies of the civil wars into something Rome had never legally possessed: a permanent, professional, salaried military establishment. Sixty-odd legions were demobilized down to twenty-eight — about 150,000 citizens, matched by roughly as many provincial auxiliaries — and stationed not in Italy but along the Rhine, the Danube, and the eastern frontier. Service became a career: sixteen years at first, soon twenty plus time in reserve, at fixed pay, ending in a bounty of 12,000 sesterces or a land allotment. Nine new Praetorian cohorts, the only substantial armed force in Italy, guarded the princeps. And in 6 CE a dedicated military treasury, the aerarium militare, took over the discharge payments.

The design answered the Republic's fatal defect. Since Marius, soldiers had depended on their generals for their retirement because the Senate would not legislate it; armies had become client bodies, and the clients had marched on Rome roughly once a decade. Augustus nationalized the relationship — in his own person. The military oath was sworn to him; promotion ran through him; and the aerarium militare, seeded with 170 million sesterces of his own money and sustained by new taxes on inheritances and auction sales, made every veteran's pension a benefaction of the domus Augusta. The senatorial class hated the inheritance tax. That was part of the point.

The establishment was also, deliberately, a ceiling. Twenty-eight legions was what the tax base would bear — the army consumed roughly half of imperial revenue — and it left no strategic reserve at all. The system worked as long as nothing was lost; when three legions vanished in Germany in 9 CE, their numbers were retired forever, and the empire's ambitions shrank to match its army.`,
    whyItMatters: `Augustus ended the warlord century not by disarming warlords but by arranging that there could be only one. Everything the Senate had refused the veterans of Marius, Sulla, and Pompey — pay, pension, land, gratitude — now arrived stamped with a single family's name, and loyalty followed the pension. This is the deep structure of the Principate: the emperor is not a magistrate who happens to command the army; he is the army's universal patron, and the constitutional dress is negotiable so long as that relationship holds. The same design handed the Praetorians, the one armed force within reach of the capital, a standing veto over politics — a veto they would first exercise openly in 41 CE and sell outright in 193.`,
    misconception: {
      claim: 'Rome always had its famous professional standing army.',
      correction:
        'For its first seven centuries Rome had no permanent army at all — legions were levied for a campaign and, in theory, disbanded after it. The salaried, pensioned, career army is an Augustan invention, and its cost, about half of all imperial revenue, is a fact that governs the rest of Roman history.',
    },
    control: {},
    sources: [
      {
        author: 'Augustus',
        work: 'Res Gestae',
        note: "Itemizes his payments to soldiers and the treasury with an accountant's pride — the army as personal benefaction is his own framing.",
      },
      {
        author: 'Tacitus',
        work: 'Annals',
        note: 'The mutinies at his death — men held past their terms, paid short, promised swamps for farms — show the distance between the scheme and frontier reality.',
      },
      { author: 'Lawrence Keppie', work: 'The Making of the Roman Army' },
    ],
    connects: ['marius-reform-107bce', 'pompey-disbands-62bce', 'first-settlement-27bce'],
  },

  {
    id: 'augustus-consolidates-25bce',
    year: -25,
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: 'Client-Kingdom Housekeeping',
    headline:
      "A dead king's will turns Galatia into a province, a scholar raised in Rome gets Mauretania, and Thrace stays loyal — the periphery is managed without committing a single new legion.",
    tags: ['military'],
    body: `In 25 BCE the client-king system needed housekeeping. Amyntas of Galatia — a royal secretary who had changed sides to Octavian before Actium and been rewarded with a kingdom — died campaigning against the highlanders of the Taurus, and Augustus, rather than appoint a successor, took the kingdom as the province of Galatia. In the same season he installed Juba II on the throne of Mauretania: son of the Numidian king who had killed himself after Thapsus, raised from infancy in Rome, a scholar who wrote Greek treatises on geography and history, and married to Cleopatra Selene — daughter of Antony and Cleopatra. To the east, the Thracian dynasts were kept aligned as clients watching the road to the Bosporus.

None of this required a new legion. That was the method: where a loyal dynasty functioned, let it govern at its own expense and supply auxiliaries; where one failed — by death, misrule, or extinction — annex, as Rome had once absorbed Pergamon by bequest. Client kingdoms were provinces on probation. Galatia's turn came in 25 BCE; Judaea's would come in 6 CE, Mauretania's in 40, Thrace's in 46.`,
    whyItMatters: `The map of the early empire is misread if every colored region suggests conquest. Much of it was acquired by probate and patience: kingdoms run at a dynast's expense until the dynasty failed, then absorbed by default. This was empire at a discount — the client paid the costs of administration, policed his own hills, and could be blamed for his own failures. The personnel were a message in themselves: Juba and Selene, children of Rome's two most famous defeated enemies, reigning as Augustus's appointees. The empire did not merely defeat its enemies; it raised their children and redeployed them.`,
    control: {
      galatia: 'provincial',
      'mauretania-caesariensis': 'client',
      'mauretania-tingitana': 'client',
      thracia: 'client',
    },
    sources: [
      {
        author: 'Strabo',
        work: 'Geography',
        note: 'A contemporary describing the client arrangements as current events, region by region.',
      },
      { author: 'David Braund', work: 'Rome and the Friendly King' },
    ],
    connects: ['first-settlement-27bce', 'pompey-east-66bce', 'deaths-30bce'],
  },

  {
    id: 'second-settlement-23bce',
    year: -23,
    era: 'principate',
    weight: 3,
    reliability: 'well-attested',
    title: 'The Second Settlement',
    headline:
      "Augustus resigns the consulship he has monopolized and takes instead two nearly invisible powers — a tribune's sacrosanct authority and a command that outranks every governor — for life.",
    tags: ['constitutional'],
    body: `In 23 BCE Augustus nearly died, and then re-founded his position. Gravely ill, he handed his signet ring to Agrippa and his state papers to his fellow consul — pointedly, to no designated heir. On recovering, he resigned the consulship he had held every year since 31, and took in its place the two powers that would define the office of emperor for three centuries: tribunicia potestas, the full authority of a tribune of the plebs without the office itself — personal sacrosanctity, the veto, the right to convene Senate and assemblies and to propose law — and an imperium proconsulare maius, a provincial command that neither expired when he entered Rome nor yielded to any governor it met. Both were his for life.

The consulship had become a liability. Occupying one of the two chief magistracies every single year advertised monopoly and, worse, halved the supply of the nobility's most coveted prize; the conspiracy of that same year — Murena, a consul's kinsman, died for it — suggested what blocked ambition could become. The substitute powers carried the same authority with the costs deleted: no colleague, no election, no year's end. From 23 BCE the count of his tribunician years became the official measure of his reign, stamped on coins and inscriptions, and every emperor after him dated his rule the same way. The imperial calendar is a tribune's.

Every component had a republican pedigree. The tribunician power descended from the plebeian secession of 494 BCE — the office of the Gracchi, the people's protector, the most popularly respectable authority Rome possessed. The overriding proconsular command had its precedents in the extraordinary commissions voted to Pompey against the pirates and Mithridates. Nothing was invented; everything was combined, detached from office, and made permanent — three things no republican power had ever been at once. The tribunate had been annual, collegial, and confined to the city; his potestas was lifelong, unshared, and everywhere.

The presentation was as deliberate as the substance. The tribunician power stood in front: the emperor as the sacrosanct guardian of the people. The maius imperium — the actual command of the armies — stayed decently in the background, rarely named. Cassius Dio, looking back from the third century, drops the pretense and says the arrangements simply were monarchy. Augustus, in the account of his life he left for his tomb, put it otherwise: he exceeded all in influence, but held no more formal power than any colleague. Both sentences are, in their way, accurate. That is the trick.`,
    whyItMatters: `The Second Settlement completes the discovery that a monarchy could be assembled entirely from the Republic's own spare parts. Each power in the bundle had a republican pedigree and republican limits — annual terms, colleagues, geographic bounds — and the settlement kept the pedigrees while deleting the limits. That is why no single act ever "ended" the Republic, and why opposition had nothing to aim at: to attack the bundle was to attack the tribunate or a proconsul's command, institutions older than anyone's grievance. It also made the position transmissible — a successor needs only the same powers voted again, which is exactly how Tiberius would be made. But notice what was never created: an office. The Principate remained a set of personal grants to a named man, expiring with him. Rome got a monarchy without a crown — and therefore, with the bill arriving for four centuries, a monarchy without a law of succession.`,
    misconception: {
      claim: 'Augustus abolished the Republic and declared himself emperor.',
      correction:
        "On paper he abolished nothing and declared nothing. Consuls, Senate, assemblies, and courts all continued; his position was a bundle of familiar republican powers — a tribune's authority, a proconsul's command — voted to him and made lifelong and concurrent. 'Emperor' is our word, grown out of his use of imperator; his own word was princeps, first citizen. The Republic was not overthrown; it was hollowed out and worn as a costume.",
    },
    control: {},
    sources: [
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: 'Our main narrative; the chronology of 23 BCE is partly reconstructed, and Dio reads the year through the finished monarchy of his own day.',
      },
      {
        author: 'Augustus',
        work: 'Res Gestae',
        note: 'Claims he exceeded all in influence but held no more formal power than his colleagues — while never mentioning the overriding imperium.',
      },
      {
        author: 'Mary Beard',
        work: 'SPQR',
        note: 'Stresses that the settlements were improvised experiments stabilized in hindsight, not the unrolling of a master plan.',
      },
    ],
    connects: ['first-settlement-27bce', 'plebs-secession-494bce', 'gracchus-tiberius-133bce', 'lex-gabinia-67bce'],
  },

  {
    id: 'concrete-engineering-20bce',
    year: -20,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Concrete Revolution',
    nonTerritorial: true,
    spatialFocus: ['latium', 'campania'],
    headline:
      'A mix of lime, volcanic ash, and rubble lets Romans pour harbors into the open sea and vault space no cut-stone tradition could span — architecture becomes interior.',
    tags: ['infrastructure'],
    body: `By the 20s BCE the Roman builder's decisive material was mature: opus caementicium — lime mortar mixed with pozzolana, the volcanic ash of the Bay of Naples, binding rubble aggregate into artificial stone. It was cheap, it could be raised by semi-skilled labor, and — the property that astonished contemporaries — it cured underwater: at Caesarea, Herod's engineers were sinking wooden forms into the open sea and pouring a harbor where none existed. Above all it freed architecture from the straight stone beam. Arches, vaults, and eventually domes let Romans enclose space on a scale no column-and-lintel tradition could attempt; the line runs from the old vaulted sewers of the Forum to the Pantheon's forty-three-meter dome, still the largest ever built of unreinforced concrete.

Vitruvius, writing his handbook of architecture in these years, records the recipes. Faced with fired brick, concrete built fast and relatively fire-resistant: warehouses, bath halls, basilicas, amphitheatres, aqueduct arcades, and the tenement blocks of the capital. The marble, where you see it, is mostly skin — Augustus's boast of finding Rome brick and leaving it marble describes a veneer over concrete bones.`,
    whyItMatters: `Roman power is usually explained by legions; a great deal of it was poured. Concrete made the urban equipment of Roman life — baths, basilicas, harbors, aqueducts — reproducible almost anywhere, by ordinary labor using local aggregate, which is how provinces from Britain to Syria could be given Rome-shaped cities within a generation or two. Enclosed public space on a vast scale changed what a city was: the crowd indoors — warm, wet, fed, and entertained — is a Roman invention with a material basis. When people say Rome's works outlasted Rome, they are mostly describing this substance.`,
    misconception: {
      claim: 'Roman concrete is a lost technology, stronger than anything modern engineering can produce.',
      correction:
        'The chemistry is well understood — researchers have even identified the rare minerals that let Roman marine concrete keep strengthening in seawater for centuries. Modern structural concrete is far stronger in compression; Roman buildings survive because they were massively overbuilt, contain no steel reinforcement to rust from within, and — the quiet reason — we only see the ones that lasted.',
    },
    control: {},
    sources: [
      {
        author: 'Vitruvius',
        work: 'De architectura',
        note: 'A working manual dedicated to Augustus; it prescribes best practice, which surviving buildings do not always follow.',
      },
      { author: 'Lynne Lancaster', work: 'Concrete Vaulted Construction in Imperial Rome' },
    ],
    connects: ['via-appia-312bce', 'insulae-urban-100bce', 'tarquinius-priscus-616bce'],
  },

  {
    id: 'women-legal-18bce',
    year: -18,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Women, Property, and the Marriage Laws',
    nonTerritorial: true,
    spatialFocus: ['latium'],
    headline:
      "Citizen women can own, inherit, divorce, and run fortunes — and Augustus's marriage legislation is the state's own confession that it cannot make them behave.",
    tags: ['social', 'legal'],
    body: `A Roman woman never voted, never sat on a jury, never held office. She also never took her husband's name, and by the Augustan age she usually never entered his legal power: in "free" marriage she remained, at law, in her father's household, and at his death she became sui iuris — a person in her own right, owning and inheriting property under a guardianship the jurists themselves came to treat as a formality. She could initiate divorce and recover her dowry. Wealthy widows and daughters ran estates, lent money, and endowed public buildings; Cicero's letters show his wife Terentia managing his finances through his exile, and inscriptions across Italy record women as patrons of towns and guilds.

In 18 BCE Augustus legislated at this world. His marriage laws made wedlock a civic duty: penalties in inheritance for the unmarried and childless, rewards for fertility — a freeborn woman with three children shed her guardian altogether — and adultery converted from a family matter into a public crime with a standing court, exile, and property forfeitures. The elite resisted openly; equestrians demonstrated against the rules at the games, and the legislation had to be patched for a generation. The final version, the Lex Papia Poppaea of 9 CE, was carried by two consuls who were, as Romans noted with relish, both bachelors. The law's most famous casualties were the emperor's own daughter and granddaughter, each exiled under his statute.`,
    whyItMatters: `Rome's arrangement — formal exclusion from politics, real capacity in property — explains how women could matter enormously in a system that never gave them a vote. Wealth was agency, and marriage was the circuitry of political alliance, which made well-connected women the conduits and sometimes the operators of power: Julia's marriages were the Augustan succession plan. The marriage laws, meanwhile, are among our best evidence for the limits of imperial power — the man who reorganized the world could not make the Roman elite marry and breed on command. The state's reach stopped at the household door, a boundary worth remembering whenever the empire looks omnipotent on a map.`,
    misconception: {
      claim: 'Roman women were kept secluded and powerless.',
      correction:
        "Powerless in formal politics, yes — but Roman citizen women owned and inherited property, initiated divorce, appeared in public and in court, and, once independent of a father, ran their own affairs with the guardian's role reduced to rubber-stamping. That is a wider legal capacity than women held in classical Athens, or in much of Europe until the nineteenth century. The real constraint was the absence of any political voice, not seclusion.",
    },
    control: {},
    sources: [
      {
        author: 'Suetonius',
        work: 'The Deified Augustus',
        note: 'Records the laws and the public protests against them; anecdotal by design.',
      },
      {
        author: 'Susan Treggiari',
        work: 'Roman Marriage',
        note: "The standard modern account — which also warns that nearly all our evidence is elite: a senator's widow tells us little about a laundress.",
      },
    ],
    connects: ['patria-potestas-440bce', 'twelve-tables-451bce', 'julia-dies-54bce'],
  },

  {
    id: 'danube-frontier-16bce',
    year: -16,
    yearEnd: 6,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'The Alpine and Danubian Conquests',
    headline:
      "In twenty years of unglamorous campaigning, Augustus's stepsons annex everything from the Alps to the Danube — the military spine the empire will defend for four centuries.",
    tags: ['military'],
    body: `Between 16 BCE and 6 CE, in a series of wars with no famous battles and few remembered names, Rome annexed everything between the Alps and the Danube. Tiberius and his brother Drusus — Augustus's stepsons — took the Alpine lands and Raetia in a single season; Noricum, long a friendly kingdom, was absorbed with hardly a recorded fight; years of grinding campaigns brought Pannonia under control and pushed Roman arms to the middle Danube; downstream, Moesia was organized as a military command covering the river's lower course. The trophy Augustus raised at La Turbie in the Alps above Monaco lists forty-five conquered peoples. It was the largest single expansion in Roman history, and almost nobody remembers it.

The purpose was connective. The conquests gave Italy a mountain shield, opened the land road from northern Italy through the Balkans to the East, and joined the Rhine armies to the Balkan armies along one continuous river line. In 6 CE the system was to be crowned by a pincer against Maroboduus's Marcomannic kingdom in Bohemia — and instead Illyricum rose behind the advancing armies. The revolt of the two Batos took three years to crush and tied down, at its height, ten legions with as many auxiliaries; Suetonius calls it Rome's gravest war since Carthage. Tiberius ground it out. The news of the final surrender reached Rome, Velleius claims, five days before the news of what had happened to Varus in Germany.

The frontier that emerged — from the Alps down the Danube to the Black Sea — became the empire's military center of gravity. Within a century the Danube commands held more legions than any other sector; within three, they were making emperors.`,
    whyItMatters: `The famous conquests — Gaul, Britain, Dacia — are not the strategically decisive ones; this is. The Danube line let troops and information move laterally across the empire's entire northern face, and it decided where the Roman army would live: the Illyrian provinces became the recruiting ground, then the officer corps, then — with Aurelian, Diocletian, and Constantine — the throne itself. Nearly every existential crisis of the next four centuries breaks on this river: the Marcomannic wars, the third-century invasions, Adrianople. And the Illyrian revolt's enormous cost fed directly into the decision, three years later, that Germania was not worth a comparable price — the empire's final shape was set as much in the Bosnian hills as in the Teutoburg mud.`,
    control: {
      raetia: 'provincial',
      noricum: 'provincial',
      pannonia: 'provincial',
      dalmatia: 'provincial',
      moesia: 'provincial',
      'illyricum-north': 'provincial',
    },
    sources: [
      {
        author: 'Velleius Paterculus',
        work: 'Roman History',
        note: 'Served through the Illyrian revolt as an officer under Tiberius — an eyewitness, and a shameless flatterer of his commander.',
      },
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: 'The chief narrative for these decades, surviving with gaps; the unglamorous wars got thin coverage even in antiquity.',
      },
    ],
    connects: ['standing-army-25bce', 'first-settlement-27bce', 'cimbri-teutones-113bce'],
  },

  {
    id: 'germania-campaigns-12bce',
    year: -12,
    yearEnd: 9,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'To the Elbe',
    headline:
      "Drusus reaches the Elbe and dies falling from his horse; twenty years of campaigns leave Germania looking like a forming province — camps, tolls, altars, a governor holding court — until it isn't.",
    tags: ['military'],
    body: `In 12 BCE Drusus crossed the Rhine and began the conquest of Germania. Four campaigns took him by canal and North Sea to the Frisian coast, then overland to the Weser and finally the Elbe, where he died in 9 BCE after a fall from his horse. His brother Tiberius took up the command, transplanted forty thousand Sugambri to the Roman bank, and by 7 BCE could claim the country pacified between Rhine and Elbe. A second round of hard fighting — Romans called it the immensum bellum, the enormous war — filled the years 1 to 5 CE and ended with an army wintering deep inside Germania. By 6 CE Rome treated the conquest as complete and the administration as begun.

Archaeology confirms how seriously Rome meant it. Legionary bases stood far east of the Rhine at Haltern on the Lippe; at Waldgirmes, deep in Hesse, a full civilian town was rising — forum, basilica, a gilded equestrian statue of Augustus — with no rampart worth the name. An altar of the imperial cult for the German tribes was established at the Ubian settlement that would become Cologne, on the model of Lugdunum's altar for Gaul. On the river itself, two great military districts — the future provinces of Lower and Upper Germany — anchored eight legions. Publius Quinctilius Varus, arriving as governor in 7 CE, held assizes and levied tribute: the job description of a peacetime administrator.

The integration machinery worked on people too. Arminius, son of a Cheruscan chief, commanded German auxiliaries in Roman service, held citizenship and equestrian rank, and spoke Latin. He was precisely what the empire manufactured everywhere: the co-opted native aristocrat. In Germania, the co-option ran ahead of the conquest.`,
    whyItMatters: `These campaigns falsify the comfortable story that Germania was unconquerable. It was half-conquered: garrisoned, taxed, building towns — a province in every sense but final. What was destroyed in 9 CE was therefore not an expedition but an investment, which is why the loss proved decisive; Rome does not abandon raids, it abandons ventures that have failed their audit. The campaigns also show the empire's standard method — conquer, co-opt the local elite, administer through them — producing, in Arminius, the one man with the training, rank, and inside knowledge to dismantle it. Rome's strength and Rome's vulnerability were the same policy, and nowhere is that clearer than east of the Rhine.`,
    control: {
      'germania-magna': 'transient',
      'germania-inferior': 'provincial',
      'germania-superior': 'provincial',
    },
    sources: [
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: 'The main connected narrative, written two centuries later.',
      },
      {
        author: 'C. M. Wells',
        work: 'The German Policy of Augustus',
        note: 'Argued from the forts that Rome was building a real province; excavations since — the town at Waldgirmes above all — have strengthened the case.',
      },
    ],
    connects: ['danube-frontier-16bce', 'gallic-wars-58bce', 'standing-army-25bce'],
  },

  {
    id: 'imperial-cult-12bce',
    year: -12,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Imperial Cult',
    nonTerritorial: true,
    spatialFocus: ['asia', 'gallia-lugdunensis'],
    headline:
      'Provincial cities compete for the honor of building temples to Rome and Augustus — worship of the living emperor is a loyalty technology, invented mostly from below.',
    tags: ['religious'],
    body: `In 29 BCE the cities of Pergamon and Nicomedia asked permission to build temples to Octavian; he granted it, on terms — the goddess Roma must share the cult, and Roman citizens resident there should worship the deified Julius instead. In 12 BCE Drusus dedicated an altar of Rome and Augustus at Lugdunum, where representatives of sixty Gallic communities gathered each August for festivals, games, and the election of a high priest: a provincial assembly organized as a religion. In Italy itself, where a living god would have jarred, the forms were subtler — offerings to the emperor's genius, his guardian spirit; neighborhood shrines of the Lares Augusti run by freedmen, giving an ambitious class without citizenship's full honors a civic role; and divinity proper deferred until death made it official.

Little of this was imposed. Cities competed for the honor of temples as they competed for everything; a provincial priesthood was the summit of a local career; the festivals were paid for locally and enjoyed locally. The Greek East had honored kings and even Roman proconsuls this way for centuries — the cult spoke an old language, now with a single addressee.`,
    whyItMatters: `The cult solved a problem no republican institution had faced: how millions of people who would never see Rome could feel themselves part of it. It gave the empire a shared calendar, a festival economy, and a career ladder for provincial elites, all aligned on one household — loyalty made visible, sociable, and locally funded. Asking whether anyone "really believed" the emperor a god misses how ancient religion worked: sacrifice was the grammar of respect for overwhelming power, and the ritual's work was social, not theological. That is also why refusing it would later matter so much — when Christians declined the pinch of incense, contemporaries heard not private doubt but resignation from the human community. The Principate's most effective instrument of rule involved no soldiers at all.`,
    control: {},
    sources: [
      {
        author: 'S. R. F. Price',
        work: 'Rituals and Power',
        note: 'The modern reframing: stop asking whether the worship was sincere and ask what the ritual accomplished.',
      },
      {
        author: 'Suetonius',
        work: 'The Deified Augustus',
        note: 'Preserves the policy — no temples to himself except jointly with Roma, and none at all in Rome.',
      },
    ],
    connects: ['state-cult-400bce', 'first-settlement-27bce', 'virgil-program-38bce'],
  },

  {
    id: 'judaea-province-6ce',
    year: 6,
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: 'Judaea Becomes a Province',
    headline:
      "Rome deposes Herod's son for misrule, sends an equestrian prefect, and counts the population — a census that plants the resistance theology of the next sixty years.",
    tags: ['constitutional', 'religious'],
    body: `In 6 CE Augustus deposed Herod's son Archelaus, whose decade of misrule in Judaea had drawn complaining embassies from his own subjects, and annexed the territory as a province — governed, like Egypt, by an equestrian prefect, seated at Caesarea on the coast rather than at Jerusalem, with a small force of locally raised auxiliaries. Publius Sulpicius Quirinius, the legate of Syria, then did what Rome always did with a new acquisition: he counted and assessed it. The census of Quirinius entered history twice — once as routine provincial bookkeeping, and once in the Gospel of Luke, which ties Jesus's birth to it, though Matthew sets the nativity under Herod the Great, dead ten years earlier; the discrepancy has occupied scholars ever since.

The census also seeded sixty years of trouble. Judas the Galilean raised the cry that registration for Roman taxation was slavery — that God alone was Israel's lord — founding the movement Josephus calls the Fourth Philosophy, ancestor of the Zealots of 66. Rome, by its own standards, governed with unusual tact: no imperial-cult sacrifice was demanded of Jews, the Temple offering sacrifice for the emperor rather than to him, and the prefect ruled through the high-priestly aristocracy. But tact coexisted with control — the prefect appointed the high priests and kept custody of their sacred vestments.`,
    whyItMatters: `Judaea shows the imperial machine meeting the one province its toolkit could not digest. Everywhere else the sequence — client king, then prefect, then census, then tax — worked because local religion could absorb Roman power into its usual honors; here an exclusive God made the standard gestures of submission theologically explosive, and the census turned tax registration into a question about who owned Israel. The annexation also exposes how thin Roman government actually was: one equestrian, a few thousand auxiliaries, and a co-opted priesthood for a notoriously restive country. When that arrangement failed in 66 CE it failed catastrophically. The road to the Temple's destruction begins with an accountant.`,
    control: { judaea: 'provincial' },
    markers: [{ type: 'political', label: 'Caesarea Maritima', at: [34.89, 32.5] }],
    sources: [
      {
        author: 'Josephus',
        work: 'Jewish Antiquities',
        note: 'Nearly our only narrative source: a rebel commander turned Roman client, explaining his people to their conquerors — and his own choices to both.',
      },
      { author: 'E. Mary Smallwood', work: 'The Jews under Roman Rule' },
    ],
    connects: ['pompey-east-66bce', 'augustus-consolidates-25bce', 'imperial-cult-12bce'],
  },

  {
    id: 'teutoburg-9ce',
    year: 9,
    era: 'principate',
    weight: 3,
    reliability: 'well-attested',
    title: 'Teutoburg Forest',
    headline:
      'Arminius, a Roman-trained officer, leads three legions into ambush country and destroys them in four days — and Rome, which could have avenged it, decides Germania is not worth the price.',
    tags: ['military'],
    body: `In September of 9 CE Publius Quinctilius Varus marched three legions — the Seventeenth, Eighteenth, and Nineteenth — with six auxiliary cohorts, three cavalry squadrons, and a long train of baggage and camp families from their summer stations toward winter quarters, detouring to put down a reported rising. The report was the trap. Its author was Arminius of the Cherusci, commander of Varus's own German auxiliaries, a Roman citizen of equestrian rank, who had built a tribal coalition under Rome's nose and now guided the column into wooded, sodden, broken country before riding off to spring it. Over three or four days of running ambush — rain, bog, and a prepared turf rampart at Kalkriese — the army was annihilated. Varus fell on his sword. Perhaps twenty thousand died; captured officers were sacrificed in groves; all three eagles were taken. Every Roman post east of the Rhine was abandoned within weeks.

Warnings had been given. Segestes — Arminius's father-in-law and enemy — denounced the plot and urged Varus to arrest the conspirators at the dinner table; Varus, an experienced administrator who had governed Syria and once crucified two thousand rebels in Judaea, could not believe it of his trusted officer, his dinner guest, Rome's own creation. The disbelief was the system's: Arminius was exactly what imperial policy built everywhere, the loyal native elite — and he used everything Rome had taught him. He never once let the legions form a line of battle.

Augustus took it like a wound. Suetonius has him unshaven and unshorn for months, beating his head against a door and crying, "Quinctilius Varus, give me back my legions!" The three legion numbers were never used again. But Rome was not beaten in any military sense. Tiberius stabilized the Rhine at once, and from 14 to 16 CE Germanicus led eight legions back across the river — burying the dead on the battlefield, recovering two of the three eagles, fighting Arminius to defeat in the open at Idistaviso. Then Tiberius recalled him. The campaigns were costing more than any taxable Germania could ever repay, and the new emperor — the best general Rome had — cancelled the project. The frontier would be the river. Arminius was dead within a few years, murdered by his own kinsmen; Tacitus, no flatterer, calls him without doubt the liberator of Germany.

So the Rhine hardened from a pause into a fact: eight legions in two military districts, watchtowers, fleets, and a frontier culture that would last four centuries. Beyond it, Germania Magna remained what the ambush had made it — outside.`,
    whyItMatters: `What matters is not the defeat but the decision it triggered. Rome had absorbed far worse — Cannae, Arausio — and escalated, because the Republic's competitive politics rewarded conquest and could not stop bidding. The Principate could stop. One man now weighed provinces like investments, and Germania — poor in cities, elites, and taxable surplus — failed the audit; Augustus's posthumous advice to keep the empire within its bounds made the write-off official policy. That is the real watershed: the empire acquired the capacity to say no, and its shape stopped being an accident of ambition. The consequence was a durable line between the Latin-speaking, city-building world inside the rivers and a Germanic world outside it that Rome would raid, trade with, hire, and fear — but never govern. Four centuries later, the peoples of that ungoverned world would cross the line in the other direction.`,
    misconception: {
      claim: 'After the Teutoburg disaster, Rome never crossed the Rhine again.',
      correction:
        'Germanicus took eight legions across it repeatedly in 14–16 CE, devastated the ambush coalition, recovered two of the three lost eagles, and beat Arminius in open battle; punitive expeditions continued for generations, and Rome later held the agri decumates beyond the upper Rhine for a century and a half. What ended in 9 CE was the project of a taxed, governed province of Germania — cancelled by Tiberius on cost, not made impossible by the defeat.',
    },
    control: { 'germania-magna': 'rival-germanic' },
    markers: [{ type: 'battle', label: 'Teutoburg Forest', at: [8.4, 52.4] }],
    sources: [
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: 'The fullest battle narrative, written two centuries later; the four-day shape of the disaster is his.',
      },
      {
        author: 'Tacitus',
        work: 'Annals',
        note: "Germanicus's visit to the bone-strewn battlefield is among the most powerful scenes in Roman literature — written a century after the event, as literature.",
      },
      {
        author: 'Peter S. Wells',
        work: 'The Battle That Stopped Rome',
        note: 'Synthesizes the Kalkriese archaeology; the title overstates — Rome stopped by choice, seven years and several battles later.',
      },
    ],
    connects: ['germania-campaigns-12bce', 'danube-frontier-16bce', 'standing-army-25bce'],
  },

  {
    id: 'augustus-dies-14ce',
    year: 14,
    dateNote: 'August 19',
    era: 'principate',
    weight: 3,
    reliability: 'well-attested',
    title: 'The Death of Augustus',
    headline:
      'After forty-four years of supremacy, the man who invented the job dies leaving no legal way to fill it — an omission that will kill emperors for four hundred years.',
    tags: ['succession', 'constitutional'],
    body: `Augustus died at Nola on 19 August 14 CE, aged seventy-five, in the same room where his father had died, asking his friends — the story is too polished to trust — whether he had played his part in the mime of life well enough to be applauded off. The transfer of power that followed was the smoothest Rome would see for a long time, and it was smooth precisely because none of it was legal inheritance: Tiberius already held the tribunician power and a commander's imperium by grants arranged years in advance, the armies had sworn their oath to him alongside Augustus, and the Senate had only to vote the remaining honors. The one piece of unfinished business was handled in the dark — Agrippa Postumus, the emperor's last surviving grandson, was killed by his guard on orders no one ever admitted giving.

It was the endpoint of forty years of failed succession planning, conducted entirely through the family because no other instrument existed. Marcellus, the nephew, died at nineteen. Agrippa, the indispensable partner, died in 12 BCE. Gaius and Lucius, the adopted grandsons, died at twenty-three and eighteen. Julia, the daughter through whom every plan ran, was exiled under her father's own adultery law. What remained was Tiberius — adopted in 4 CE "for the sake of the state," as Augustus pointedly declared, and required in his turn to adopt his nephew Germanicus. Power was being steered two generations ahead through a chain of adoptions, marriages, and shared powers: a private household doing the work of a public constitution.

There was no law of succession because there was legally nothing to succeed to. The Principate was a bundle of powers voted to a named man, expiring at his death; to create an office of emperor, heritable or electable, would have conceded the monarchy the entire settlement existed to deny. So every transfer, forever after, was an improvisation — pre-mortem power-sharing where possible, adoption where biology failed, the Senate ratifying afterward, the armies acquiescing for a price. The Rhine and Danube legions mutinied within weeks of the death; the soldiers understood that their contract had been with a person, and the person was gone.

Tacitus opens the Annals here, with senators competing in servility while Tiberius hedges every acceptance, and adds the detail that indicts the whole era: how few were still alive, he writes, who had ever seen the Republic. The state Augustus left was stable, solvent, and at peace — and built around a hole where its most important rule should have been.`,
    whyItMatters: `The missing succession law is not an oversight; it is the load-bearing omission. The settlement worked because it denied being a monarchy; the denial ruled out a throne; and without a throne there could be no law of inheritance — so the most dangerous moment in any monarchy's life, the transfer, was left permanently unregulated. Count what filled the vacuum over the next four centuries: adoption while it worked, the Praetorians in 41, open auction in 193, and civil war in 69, 193, 238, and beyond — most Roman emperors died violently, and the pattern begins here, not in some later decadence. Even when Diocletian finally dropped the republican mask, his engineered succession collapsed within a generation. Augustus solved nearly everything else for two hundred years; the one problem he could not solve without confessing what he had built is the one that never stopped killing his successors.`,
    misconception: {
      claim: 'Tiberius inherited the throne as the next in line.',
      correction:
        'There was no throne and no line — Roman law had no crown to bequeath. Augustus could leave Tiberius money and his name; the powers had to be granted afresh, and the real preparation was years of co-regency, adoption, and army oaths arranged in advance. Transfers with that preparation looked like inheritance; transfers without it were settled by the Guard or by civil war — which is what most of them were.',
    },
    control: {},
    sources: [
      {
        author: 'Tacitus',
        work: 'Annals',
        note: 'The classic hostile account, reading the whole Principate backward through the reigns that followed it.',
      },
      {
        author: 'Suetonius',
        work: 'The Deified Augustus',
        note: 'The deathbed scenes are court tradition — vivid, quotable, and unverifiable.',
      },
      {
        author: 'Augustus',
        work: 'Res Gestae',
        note: 'His own account, posted at his tomb: the self-obituary of a man describing absolute power as a series of honors gratefully received.',
      },
    ],
    connects: ['first-settlement-27bce', 'second-settlement-23bce', 'caesars-will-44bce', 'standing-army-25bce'],
  },
];
