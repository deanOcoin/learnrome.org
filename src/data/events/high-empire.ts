// 96-180 CE, Nerva to Marcus Aurelius

import type { RomeEvent } from '../../types';

export const HIGH_EMPIRE_EVENTS: RomeEvent[] = [
  {
    id: 'nerva-trajan-96ce',
    year: 96,
    yearEnd: 98,
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: 'Nerva Adopts Trajan at Sword-Point',
    headline:
      'A stopgap emperor besieged by his own guard adopts the general with the biggest army — and later generations dress the surrender up as a principle.',
    tags: ['succession', 'constitutional'],
    body: `After Domitian's assassination in September 96, the conspirators produced Marcus Cocceius Nerva: a childless senator in his sixties, twice consul, acceptable to everyone precisely because he threatened no one. He recalled exiles, swore never to execute a senator, and commanded the personal loyalty of not one soldier. In 97 the Praetorian Guard, still attached to Domitian's memory, mutinied under its prefect Casperius Aelianus, besieged the palace, and forced Nerva to hand over Domitian's killers — and to thank the executioners publicly.

A humiliated emperor needed an heir the army could not ignore. Within weeks Nerva announced, from the Capitol, the adoption of Marcus Ulpius Traianus: governor of Upper Germany, commander of the Rhine legions, born in Spain, and no relation whatever. Nerva died in January 98. Trajan did not hurry to Rome; he settled frontier business first — and summoned Aelianus to him, after which the prefect disappears from the record.

Pliny's Panegyricus later recast the episode as wisdom: the best man in the world chosen over any accident of birth. The recasting stuck — Machiavelli and Gibbon built the "adoptive emperors" on it. The event itself was a capitulation to the one man who could not be resisted.`,
    whyItMatters: `The succession problem Augustus left unsolved had just killed one emperor and nearly broken his replacement, and what fixed it was not a constitutional discovery but a lucky fit between necessity and rhetoric. Adoption would produce four successive competent rulers — yet it worked only because, for eighty years, no reigning emperor had a surviving son to force the issue. The second century's celebrated stability rests on that biological accident, plus the rhetorical cover Pliny supplied, which let each coerced or childless choice look like merit freely rewarded. The year 180 will run the control experiment and show which factor was doing the work.`,
    control: {},
    sources: [
      {
        author: 'Pliny the Younger',
        work: 'Panegyricus',
        note: "Delivered to Trajan's face in 100 CE — the origin of the 'best man' framing, from a man praising the living ruler who could end his career.",
      },
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: 'Survives for these years only in Byzantine epitome; it is Dio who records the guard mutiny that Pliny politely omits.',
      },
    ],
    connects: ['domitian-81ce', 'four-emperors-69ce', 'augustus-dies-14ce'],
  },

  {
    id: 'dacian-wars-101ce',
    year: 101,
    yearEnd: 106,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Trajan Breaks Dacia and Takes Its Gold',
    headline:
      "Two wars destroy Decebalus's mountain kingdom, and the bullion pays for a forum, a column, and a hundred and twenty-three days of games.",
    tags: ['military', 'economic'],
    body: `Trajan crossed the Danube in 101 to settle an inherited humiliation. Domitian's peace of 89 had left the Dacian king Decebalus with Roman engineers, Roman deserters, and an annual subsidy — a settlement that looked uncomfortably like tribute paid to the strongest kingdom on Rome's border. The first war (101–102) was hard: a bloody win at Tapae, a Dacian winter counterthrust into Moesia beaten off at heavy cost. Decebalus submitted, kept his throne as a client, and immediately rearmed. The second war (105–106) was extermination. Apollodorus of Damascus bridged the Danube on stone piers at Drobeta — the longest bridge in the world for a thousand years — and the columns converged on the capital, Sarmizegetusa. It fell; Decebalus fled and cut his own throat as Roman cavalry closed in. The trooper who got there first, Tiberius Claudius Maximus, carried the head to Trajan and later carved the whole story on his tombstone, which survives.

So does the accounting. The royal treasure — part of it recovered from a hiding place under a diverted river, betrayed by a courtier — reached figures in the sources (millions of pounds of gold and silver) that no one believes literally, but even discounted heavily it reset Rome's finances: 123 days of games, ten thousand gladiators, Trajan's Forum with its market complex, and the Column, whose two-hundred-metre spiral frieze is at once our best picture of the Roman army at work and a victory film in which no Roman is ever shown losing.

Dacia became a province — Rome's first significant holding north of the Danube — and was planted thickly with colonists from across the empire; the Romance language spoken in Romania today is the long echo. The same year, 106, the client kingdom of Nabataea was absorbed as Arabia Petraea on the death of its last king: two annexations in one year, one by storm and one by paperwork.`,
    whyItMatters: `Dacia proved that conquest could still pay — the last time in Roman history it unambiguously did. The gold mattered less than the lesson Trajan drew from it: that a decisive, profitable, permanent conquest was a repeatable act rather than a windfall, a belief he would carry east with very different results. And the year 106 itself is a compressed course in how the empire actually grew: Dacia taken with five hundred thousand men mobilized and a king's suicide, Arabia taken with a governor's letter. Most of Rome's map was assembled the second way; the Column commemorates the first because paperwork does not carve well.`,
    control: { dacia: 'provincial', 'arabia-petraea': 'provincial' },
    markers: [{ type: 'battle', label: 'Sarmizegetusa', at: [22.79, 45.52] }],
    sources: [
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: "The main narrative, surviving in epitome; the treasure figures descend from Trajan's doctor Crito and are transparently inflated.",
      },
      {
        author: 'Apollodorus of Damascus (attributed)',
        work: "Trajan's Column frieze",
        note: 'State art — a stone newsreel cut by the victors, and still the most detailed source for the army on campaign.',
      },
      {
        author: 'Julian Bennett',
        work: 'Trajan: Optimus Princeps',
        note: 'Modern biography; reads the war as strategic necessity rather than glory-hunting, which the ancient sources do not settle.',
      },
    ],
    connects: ['domitian-81ce', 'nerva-trajan-96ce', 'danube-frontier-16bce'],
  },

  {
    id: 'army-life-120ce',
    year: 120,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: 'Twenty-Five Years in Boots',
    headline:
      'The frontier army was a career, a pension plan, and a citizenship machine — and its paperwork survives, down to the socks.',
    tags: ['social', 'daily-life'],
    body: `A legionary of Hadrian's day enlisted around age twenty for twenty-five years, at three hundred denarii a year paid in three instalments, with deductions for rations, boots, the burial club, and the compulsory savings account held in the camp strongroom. He was far likelier to come from a frontier province than from Italy. He lived in an eight-man mess room in a stone fortress and spent most of his service digging, building, escorting, and patrolling; many soldiers went a whole career without a pitched battle. An auxiliary — a non-citizen in the supporting regiments — served the same term for less pay, and on discharge received a folding bronze diploma that made him and his children Roman citizens.

The Vindolanda tablets, from a fort south of where the Wall would run, preserve the texture: strength reports with sick lists, requests for more beer for the lads, a package note about socks and underpants, and Claudia Severa inviting her friend Sulpicia Lepidina to her birthday party — the oldest known Latin written by a woman's hand. Soldiers could not legally marry, so around every fort a village of unofficial wives, children, veterans, and taverns grew up anyway, and discharge legitimized the family after the fact.

Retirement brought cash or land and instant respectability: veterans stocked the town councils of the colonies. The army was the state's biggest expense and its most effective engine for manufacturing Romans — citizenship, sold at the price of a quarter-century.`,
    whyItMatters: `Augustus built the standing army as a pension scheme to keep soldiers loyal to the emperor rather than to generals; a century on, it had matured into something no one designed — a hereditary frontier society, recruited locally, married locally, and invested in its own stretch of river. That rootedness is why the frontiers held with so few men: the garrison was defending home. It is also a quiet structural wager: an army that identifies with its province rather than with Italy will, under enough stress, back its province's candidate for emperor. The second century collected the benefit; the third would pay the premium.`,
    misconception: {
      claim: 'The Roman legions were filled with Italians — Romans from Rome.',
      correction:
        'By the second century Italy supplied almost no legionaries; recruits came overwhelmingly from the provinces, and increasingly from the camps themselves. The army guarding the Rhine and Danube was mostly born on the Rhine and Danube — and the emperor it served was, as often as not, Spanish.',
    },
    control: {},
    nonTerritorial: true,
    spatialFocus: ['germania-superior', 'pannonia', 'britannia-south'],
    sources: [
      {
        author: 'The Vindolanda garrison',
        work: 'Writing tablets (Tab. Vindol.)',
        note: 'Quartermasters and officers writing to each other with no idea posterity would read it — the rarest kind of source: one with no agenda.',
      },
      {
        author: 'Vegetius',
        work: 'De Re Militari',
        note: 'A fourth-century idealization looking backward; describes the army as it ought to have been, which is not the same thing.',
      },
      {
        author: 'Adrian Goldsworthy',
        work: 'The Complete Roman Army',
      },
    ],
    connects: ['standing-army-25bce', 'marius-reform-107bce', 'dacian-wars-101ce'],
  },

  {
    id: 'trajan-parthia-114ce',
    year: 114,
    yearEnd: 117,
    era: 'principate',
    weight: 3,
    reliability: 'well-attested',
    title: 'Trajan Reaches the Persian Gulf',
    headline:
      "Rome's largest map lasts three years: Armenia, Mesopotamia, and Assyria annexed, Ctesiphon taken — and the conquest is already dissolving when Trajan dies.",
    tags: ['military'],
    body: `The occasion was Armenia. Since Nero's day the compromise had held: Parthia nominated Armenia's king, Rome crowned him. In 113 the Parthian king Osroes deposed the Roman-approved candidate and installed his own nephew without asking. Trajan — sixty, the conqueror of Dacia, with a full treasury and a professional army at peak strength — refused every offered settlement and marched. In 114 he annexed Armenia outright as a province; its uncrowned king, Parthamasiris, died in Roman custody in circumstances Rome never satisfactorily explained. In 115 the army moved down into northern Mesopotamia, organizing provinces as it went; a fleet was built on the Euphrates and hauled overland to the Tigris. In 116 Ctesiphon, the Parthian capital, fell almost without resistance — Osroes fled, his daughter and his golden throne were captured — and Trajan sailed down to the Persian Gulf at Charax, the only Roman emperor who would ever stand on its shore. Watching a merchantman clear for India, he said openly that he would have crossed too, were he as young as Alexander.

Behind him the conquest caught fire. The new provinces revolted city by city through 116: Seleucia had to be retaken and burned, and the desert fortress of Hatra defied a siege the emperor directed in person, in murderous heat. Simultaneously the Jewish diaspora rose in Cyrenaica, Egypt, and Cyprus (115–117) in a war of massacre and counter-massacre that wrecked the rear areas and pinned down troops the front needed. Trajan bowed to arithmetic without admitting it: rather than garrison what he could not hold, he crowned a puppet, Parthamaspates, at Ctesiphon, and struck coins reading REX PARTHIS DATUS — 'a king given to the Parthians.' Annexation had quietly become theatre.

He never made it home. A stroke took him at Selinus in Cilicia in August 117, en route to a triumph he did not live to celebrate. The adoption of Hadrian was announced only as he died — the papers signed, contemporaries noted, by his wife Plotina — and Hadrian, commanding in Syria, gave up Mesopotamia and Assyria within weeks.

For roughly three years the empire stood at its maximum extent, some five million square kilometres on the conventional reckoning. Parts of that map existed only on paper: Mesopotamia was in revolt within months of being drawn. The eastern war had run the empire's clearest experiment on its own limits — Parthia could be beaten in the field almost at will, but holding the Tigris meant garrisons, and garrisons meant stripping the Rhine and Danube, and the revolts had demonstrated exactly what that cost. Every emperor for the next five hundred years would fight on this same corridor, and nearly all of them would end by making Hadrian's choice.`,
    whyItMatters: `The three-year map is the most instructive object in Roman history, because it separates two things that usually blur together: winning campaigns and digesting provinces. Rome's army could go anywhere; Rome's administration could not stay everywhere, and Mesopotamia — far from the sea, expensive to garrison, next door to the rival's heartland — sat on the wrong side of the line. Trajan's war fixed the shape of Roman–Persian conflict for four centuries: capitals sacked, border towns traded, no decision ever reached, two empires bleeding each other on a corridor neither could keep. When the familiar 'greatest extent' map is shown as if it were the empire, the caption swallows the lesson: the normal empire was the one Hadrian drew, and this one existed for about as long as a consulship.`,
    misconception: {
      claim: 'The famous map of Rome at its greatest extent shows the empire as it was for centuries.',
      correction:
        "That map existed for about three years — 114 to 117 — and parts of it only on paper, since Mesopotamia revolted within months of annexation. Hadrian abandoned the new eastern provinces almost immediately. The durable empire is the Rhine–Danube–Euphrates shape; the poster map is a photograph of a wave at its highest point.",
    },
    control: {
      armenia: 'transient',
      mesopotamia: 'transient',
      osroene: 'transient',
      assyria: 'transient',
    },
    markers: [{ type: 'political', label: 'Ctesiphon', at: [44.58, 33.09] }],
    sources: [
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: "In epitome; supplies the Alexander anecdote and diagnoses the whole war as glory-hunting — a moralist's verdict, not an analysis.",
      },
      {
        author: 'Julian Bennett',
        work: 'Trajan: Optimus Princeps',
        note: "Argues the war had strategic and commercial logic — control of the caravan routes — against Dio's vanity theory. The evidence does not settle it.",
      },
    ],
    connects: ['dacian-wars-101ce', 'carrhae-53bce', 'antony-parthia-36bce'],
  },

  {
    id: 'hadrian-117ce',
    year: 117,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Hadrian Trades Conquest for Frontiers',
    headline:
      "The new emperor abandons Trajan's eastern provinces in weeks, survives the execution of four senior generals, and spends twenty years drawing the empire's final shape.",
    tags: ['military', 'succession'],
    body: `Hadrian's first act as emperor, in the summer of 117, was to give back the largest conquest Rome had ever made. Mesopotamia and Assyria were abandoned to Parthia, Armenia handed back to a client king, Osroene left as a buffer under its own dynasty; his biographer has him citing old Cato on the Macedonians — a people who could not be held should be let go. It was a defensible decision made by a man in an indefensible position: the adoption had been announced only as Trajan died, signed by the empress, and rumor said after the death rather than before. Within a year four ex-consuls — Trajan's senior marshals, the men best placed to object — were executed for an alleged plot while Hadrian was conveniently elsewhere. He swore he had not ordered it. The Senate enrolled the oath and never forgave him.

What followed had no precedent: a reign spent mostly on the road, not to conquer but to inspect. Britain, where he ordered the Wall; the German frontier, fenced with an oak palisade; Africa, where his drill-review speech to the garrison at Lambaesis survives carved in stone; Greece, showered with buildings; Egypt, where his young favorite Antinous drowned in the Nile and grief was institutionalized into a god and a city. The army, denied wars, was kept sharp by ceaseless exercise and the emperor's habit of turning up unannounced.

The policy had a theory underneath it: the empire was full. Land worth taxing lay inside; beyond lay cost. The frontiers were made visible — stone, turf, timber — as statements that expansion was over, and the coinage began celebrating the provinces by name, a family of lands rather than a list of captures.`,
    whyItMatters: `Hadrian converted the empire from a project into an artifact — the most consequential policy change between Augustus and Diocletian, made by an emperor who never fought a major war. Fixed frontiers changed the state's metabolism: the army became a garrison, conquest stopped paying for government, and military glory — the currency every princeps since Augustus had traded on — was withdrawn from circulation, which is partly why the Senate hated him and why insecure successors kept reaching for small wars. But the strategic judgment held. The shape Hadrian drew in 117 is, with trivial adjustments, the shape the empire kept for three centuries, and the lands he returned never stopped being battlefields — the strongest evidence he priced them correctly.`,
    control: {
      armenia: 'client',
      mesopotamia: 'rival-parthia',
      osroene: 'client',
      assyria: 'rival-parthia',
    },
    sources: [
      {
        author: 'Historia Augusta',
        work: 'Life of Hadrian',
        note: 'The collection is part fiction, but this life rests on a lost contemporary biography and is comparatively sober — comparatively is doing real work.',
      },
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: "In epitome; preserves the succession rumor and the Senate's lasting grievance over the four consulars.",
      },
      {
        author: 'Anthony Birley',
        work: 'Hadrian: The Restless Emperor',
      },
    ],
    connects: ['trajan-parthia-114ce', 'teutoburg-9ce', 'nerva-trajan-96ce'],
  },

  {
    id: 'hadrians-wall-122ce',
    year: 122,
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: 'A Frontier You Can Touch',
    headline:
      'Eighty miles of stone and turf from Tyne to Solway announce, in the most durable medium Rome had, that the empire is finished growing.',
    tags: ['military', 'infrastructure'],
    body: `In 122, after inspecting Britain in person, Hadrian ordered a wall from the Tyne to the Solway: eighty Roman miles, about fifteen feet high in its stone sections, with a fortlet every mile, two turrets between each pair, full forts later moved onto the line itself, and a great flat-bottomed earthwork — the vallum — running behind. Three legions built it in about six years and signed their work with inscribed stones. Nothing so elaborate was ever built on any other Roman frontier.

As a fortification it makes little sense, and that is the clue to what it was. The garrison lived in open forts, not on the parapet; gates pierced the barrier every single mile; and no army defends eighty miles of curtain wall against a serious assault. It worked as control: funneling everyday movement through supervised crossings where it could be taxed, disarmed, and watched, while patrols and outpost forts operated well to the north. A police instrument, and a statement — visible for miles in dressed stone — about where Rome had decided to stop. The only ancient sentence about its purpose, that it 'separated the Romans from the barbarians,' comes from a biography written two centuries later.

It anchored a family of such statements: the oak palisade in Germany, the desert clausurae in Africa — the Hadrianic frontier made physical, empire-wide.`,
    whyItMatters: `Walls are what an empire builds when it decides its wars are policing. The Wall made the limit of empire physical and therefore thinkable — a soldier could touch the end of the Roman world — and it quietly redefined 'barbarian' from 'not yet conquered' to 'permanently outside,' a category with a long and ugly future. It also shows how strategy gets misread as fear: Rome north of the Wall remained aggressive, patrolled, and occasionally expansionist. The barrier was not a flinch; it was an administrative decision about where taxable civilization ended, rendered in stone so that no ambitious governor could pretend not to know.`,
    misconception: {
      claim: "Hadrian's Wall marks the border between England and Scotland, built to keep the Scots out.",
      correction:
        'It lies entirely within England — in places seventy miles south of the modern border — and predates both England and Scotland by centuries. Nor was it a desperate defense against invading hordes: it was a customs and movement-control line, with gates every mile, for a frontier Rome patrolled far to the north of it.',
    },
    control: {},
    markers: [{ type: 'founding', label: "Hadrian's Wall", at: [-2.5, 55.0] }],
    sources: [
      {
        author: 'Historia Augusta',
        work: 'Life of Hadrian',
        note: 'Supplies the single ancient statement of purpose, two hundred years after the fact, in a source that invents freely elsewhere.',
      },
      {
        author: 'David Breeze and Brian Dobson',
        work: "Hadrian's Wall",
        note: 'The standard modern account; its functional argument is built from archaeology, because no ancient writer bothered to explain the thing.',
      },
    ],
    connects: ['hadrian-117ce', 'britain-43ce', 'army-life-120ce'],
  },

  {
    id: 'praetor-edict-130ce',
    year: 130,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: "The Praetor's Edict Frozen at Last",
    headline:
      'Hadrian has the jurist Julianus fix the annually reissued edict for good — the moment Roman law stops growing by magistrate and starts growing by professor.',
    tags: ['legal'],
    body: `Around 130 Hadrian commissioned the jurist Salvius Julianus to produce a definitive text of the praetor's edict. For over four centuries the urban praetor, on taking office, had posted the list of legal actions and defenses he would grant that year — inherited mostly from his predecessors, adjusted at the margin. That rolling document, not the venerable Twelve Tables, was where Roman private law actually lived: contract, property, inheritance, fraud, all of it built remedy by remedy as successive magistrates decided which wrongs deserved an action. Julianus's consolidated version, the Edictum Perpetuum, ended the accretion; from now on, change came from the emperor.

Growth shifted to the jurists — a tiny profession of legal intellectuals who wrote commentaries, gave opinions on real cases, and argued with each other in print, some licensed to respond with the emperor's authority. Gaius's Institutes, a student textbook from the 160s that survives almost whole, shows the method: not statutes memorized but distinctions reasoned — persons, things, actions — case against case. The giants, Papinian and Ulpian, were a generation or two ahead.

Rome never had a comprehensive code until the very end. What it had was a method, and when Justinian's compilers built their Digest four centuries later, they assembled it almost entirely from these jurists' books — the channel through which Roman law reached medieval Europe and, through it, half the legal systems on earth.`,
    whyItMatters: `Rome's most durable export was not roads or borders but a way of reasoning about obligations between strangers — and the edict's history shows how Roman institutions actually evolved: not by legislation but by accretion under professional hands, consolidated only when an emperor wanted the growth under his control. Hadrian's freeze looks technical and is constitutional: the law-making power of the republican magistracy, already hollowed, passes formally to the palace, while real intellectual authority migrates to a profession the palace employs. Empires end; the habit of arguing from case to principle turned out to be the part that could not be sacked.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium'],
    sources: [
      {
        author: 'Gaius',
        work: 'Institutes',
        note: "A beginners' textbook — our clearest window into classical law precisely because it simplifies for students.",
      },
      {
        author: 'Justinian',
        work: 'Digest',
        note: "Sixth-century compilation; nearly everything the classical jurists wrote survives only as excerpts its committee chose — and edited.",
      },
    ],
    connects: ['twelve-tables-451bce', 'hadrian-117ce'],
  },

  {
    id: 'bar-kokhba-132ce',
    year: 132,
    yearEnd: 136,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Bar Kokhba and the Erasure of Judaea',
    headline:
      "The last Jewish revolt runs a functioning state for three years; Rome grinds it out village by village and then removes the province's very name.",
    tags: ['military', 'religious'],
    body: `In 132 Judaea rose for the third time in sixty-five years, under Simon bar Kosiba — hailed by supporters, including the great rabbi Akiba, as 'bar Kokhba,' son of the star: a messianic title. The trigger is disputed between our sources: Dio blames Hadrian's decision to rebuild Jerusalem as a Roman colony, Aelia Capitolina, with a temple of Jupiter on the Temple Mount; the Historia Augusta blames a ban on circumcision. Either was combustible; both together were a match in a powder store. The rebels overran the countryside, minted their own coins dated to 'the redemption of Israel,' and ran courts, land leases, and supply depots. We have the documents — recovered from Judaean desert caves, including dispatches from Simon himself: terse, administrative, occasionally threatening his own commanders.

Rome answered with strangulation rather than battle. Hadrian pulled Julius Severus all the way from Britain, and Severus refused pitched engagements, reducing strongpoints one by one and starving the rest. Dio's tally — fifty fortresses razed, 985 villages destroyed, 580,000 dead — has propaganda's round completeness, but the archaeology of burned villages backs the scale. The last stronghold, Betar, fell in 135. Roman losses were severe enough that Hadrian's report to the Senate omitted the customary opening, 'I and the legions are well.'

The aftermath was designed as erasure. Jews were barred from the district of Jerusalem on pain of death; the province was renamed Syria Palaestina, deliberately severing the people's name from the land; the center of Jewish life passed to Galilee and the diaspora. Out of the wreckage the rabbis rebuilt Judaism around text, law, and community rather than Temple and territory — a portable religion, because the fixed kind had just been made impossible.`,
    whyItMatters: `Rome's standard toolkit for provincial revolt stopped at defeat, punishment, and taxation; here, uniquely, it extended to identity — renaming a land to unmake a people's claim on it. That escalation measures the problem: an empire genuinely tolerant of almost any cult could not digest a monotheism with a territorial promise, because the loyalty it demanded was precisely the kind Rome required for itself. The consequences ran in two directions for two thousand years. Judaism, severed from Jerusalem, became rabbinic, textual, and diaspora-hardened; and Christianity, watching Judaea's fate from outside after the revolt (bar Kokhba's followers had treated Christians as defectors), completed its separation — the two religions' paths through the empire divide permanently here.`,
    control: { judaea: 'contested' },
    markers: [{ type: 'siege', label: 'Betar', at: [35.14, 31.73] }],
    sources: [
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: 'The chief narrative, in epitome; his casualty figures are suspiciously round, but the destruction layer in the archaeology is not.',
      },
      {
        author: 'Simon bar Kosiba',
        work: 'Letters from the Judaean desert caves',
        note: 'The leader in his own words — supply orders and discipline problems, with no messianism anywhere in them. The gap between his letters and his title is the whole source problem in miniature.',
      },
      {
        author: 'Eusebius',
        work: 'Ecclesiastical History',
        note: 'Hostile Christian tradition writing two centuries later; remembers the revolt chiefly for its persecution of Christians who refused to join.',
      },
    ],
    connects: ['jerusalem-70ce', 'jewish-revolt-66ce', 'judaea-province-6ce', 'hadrian-117ce'],
  },

  {
    id: 'antoninus-138ce',
    year: 138,
    yearEnd: 161,
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: 'Antoninus Pius: The Empire on Autopilot',
    headline:
      'Twenty-three years without a war of conquest, a purge, or a journey — the least eventful reign in Roman history, which is the achievement.',
    tags: ['constitutional', 'succession'],
    body: `Antoninus came to power in 138 by arrangement of the dying Hadrian, who adopted him on condition that he adopt, in turn, the teenaged Marcus Aurelius and the child Lucius Verus — a succession planned two reigns deep. He then reigned twenty-three years, the longest since Augustus, without leaving Italy. He earned the name 'Pius' by forcing a resentful Senate to deify the hated Hadrian, governed by correspondence, kept taxes level, funded disaster relief from the fisc, and died leaving a reported 2.7 billion sesterces in the treasury. Judaea, garrisoned, renamed, and exhausted, settled back into provincial routine.

Almost nothing happened, and the sources nearly starve: Dio's account is thin, and the Historia Augusta's life runs a few pages — even a collection notorious for invention found little here worth inventing. What fills the gap is the era's self-portrait: Aelius Aristides's oration To Rome (c. 155), the empire as one vast city, its wars a rumor on distant edges, the sea safe, the roads open. It is a beneficiary talking, but the complacency itself is evidence — nobody talks that way during interesting times.

The quiet had a price invisible at the time. Beyond the Danube, peoples were reorganizing; inside it, a generation of soldiers and commanders had never fought a major war, and a government tuned for routine was about to meet two wars and a plague at once.`,
    whyItMatters: `This reign is the control case proving what Augustus's machine had become: government so institutional that it ran for a generation with the emperor as little more than a signature. That is a genuine achievement — most ancient states could not survive an idle ruler — and it is why the second century glows in retrospect. But peak stability is a position you can only hold, not bank. The calm was purchased by Hadrian's fixed frontiers and Trajan's treasure, both wasting assets, and the bill for deferred maintenance — military, fiscal, demographic — was presented in full to the very successors Hadrian had picked so carefully.`,
    control: { judaea: 'provincial' },
    sources: [
      {
        author: 'Historia Augusta',
        work: 'Life of Antoninus Pius',
        note: 'Its brevity is itself evidence: the fabulists had nothing scandalous to work with.',
      },
      {
        author: 'Aelius Aristides',
        work: 'To Rome',
        note: "A panegyric by one of the empire's most comfortable citizens — the view from the villas, not the villages.",
      },
    ],
    connects: ['hadrian-117ce', 'bar-kokhba-132ce', 'nerva-trajan-96ce'],
  },

  {
    id: 'antonine-wall-142ce',
    year: 142,
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: 'Twenty Years Further North',
    headline:
      'The new emperor pushes the British frontier to the Forth–Clyde line — a shorter wall, a cheap victory, and a position held for barely a generation.',
    tags: ['military', 'infrastructure'],
    body: `Between 139 and 142 Antoninus Pius, who never saw Britain, had its frontier moved. His governor Lollius Urbicus campaigned through southern Scotland and built the Antonine Wall: some forty Roman miles of turf rampart on a stone base from the Forth to the Clyde — half the length of Hadrian's line — with forts packed roughly every two miles, a denser garrison per mile than the older wall ever had. Hadrian's Wall was left standing but opened. For this, Antoninus took the only battlefield acclamation of a twenty-three-year reign.

Why advance a frontier a dead emperor had just finished? The fullest ancient explanation is one sentence — he conquered the Britons through his legate — so the reasoning is modern inference, and the best inference is political: a new emperor with no military record needed one victory, and Britain offered the cheapest respectable war in the empire. The shorter line had strategic logic; the longer supply routes and the unpacified hills behind it had logic too, of the opposing kind.

It lasted barely twenty years. In the early 160s the garrison marched back to Hadrian's line for good. Caledonia was invaded repeatedly and held never; Ireland — which Agricola had once claimed a single legion could take — was never attempted. This was the furthest north the tide ever ran.`,
    whyItMatters: `The two walls, sixty years and a hundred miles apart, form a controlled experiment in what frontiers were actually for. Pure geometry preferred the Forth–Clyde line — shorter, cheaper to man per mile — and Rome still went back, because frontiers ran on supply, recruitment, local politics, and the garrison's roots, none of which appear on a map. The episode also prices a constitutional truth: military glory remained a required input for imperial legitimacy even under the most pacific emperor Rome ever had. Antoninus bought his at the empire's remotest edge for almost nothing. Successors with weaker positions would shop in more expensive markets.`,
    misconception: {
      claim: 'Rome conquered Britain.',
      correction:
        'Rome held roughly the southern two-thirds of the island, for under four centuries. Scotland was invaded repeatedly and never held — the Antonine advance lasted about twenty years — and Ireland was never attempted at all.',
    },
    control: { 'britannia-north': 'provincial' },
    markers: [{ type: 'founding', label: 'Antonine Wall', at: [-3.95, 55.98] }],
    sources: [
      {
        author: 'Historia Augusta',
        work: 'Life of Antoninus Pius',
        note: "One sentence — 'he conquered the Britons through his legate Lollius Urbicus' — is the fullest ancient explanation we have.",
      },
      {
        author: 'David Breeze',
        work: 'The Antonine Wall',
        note: 'The standard account; the political reading of the advance is argued here from the silence of the sources.',
      },
    ],
    connects: ['hadrians-wall-122ce', 'antoninus-138ce', 'britain-43ce'],
  },

  {
    id: 'provincial-elite-140ce',
    year: 140,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Two Provincials',
    headline:
      'For a town councilor in Gaul the empire is a career ladder; for a Syrian villager it is a tax bill and a rumor — and both are typical.',
    tags: ['daily-life', 'culture'],
    body: `Consider two subjects of Rome under Antoninus Pius. The first is a decurion of Lugdunum: citizen, Latin-speaking, toga-wearing on council days, one of a hundred councilors who run the city. Rank cost an entrance fee and keeps costing — councilors paved streets, funded games, and endowed baths from their own purses, competitively, because the inscription recording the gift was the point. His ambitions run upward: a priesthood of the imperial cult at the federal altar of the Three Gauls, equestrian rank for his son. Rome asks his loyalty and his money and pays him in status.

The second is a tenant farmer in the Orontes valley. He speaks Aramaic; the administration above him works in Greek, the army above that in Latin — he needs neither. He will never see Rome or an emperor. He meets the empire as the census registrar, the tax in grain, a requisitioned mule, and soldiers on the road — enough of a menace that petitions against their exactions survive from villages like his. His law is custom, his year the harvest, his authorities the village elders and the temple.

Both are the empire working as designed. Rome governed sixty million people with a few hundred senior officials by renting local elites: towns ran themselves, councils collected the taxes — and were personally liable for shortfalls, a detail that would matter enormously later. Beneath that thin crust most of life stayed local, and Rome demanded remarkably little of it: cash, calm, and no rival loyalties.`,
    whyItMatters: `The empire was not a state in the modern sense but a system of subcontracted rule, and that explains both its durability and its shallowness at a stroke. Durability: co-opting ambitious local elites made every provincial notable an investor in Roman order, which is how one city ruled the Mediterranean without mass bureaucracy or police. Shallowness: Romanization was a game elites played for prizes, and it thinned rapidly below the council class and outside the towns. Hold both lives in view and later history clarifies — what could flourish, decay, or fall was the crust of councils, careers, and cities; the village underneath would outlast the empire and barely notice.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['gallia-lugdunensis', 'syria'],
    sources: [
      {
        author: 'Greg Woolf',
        work: 'Becoming Roman',
        note: 'Argues Gallic elites Romanized themselves, competitively, for local advantage — Rome supplied the prizes, not the pressure.',
      },
      {
        author: 'Anonymous',
        work: 'Municipal benefaction inscriptions (CIL XIII)',
        note: 'The councilor class wrote its own record in stone: boasts, not documents. The villager left no record at all, which is also data.',
      },
    ],
    connects: ['romanization-west-75ce', 'imperial-cult-12bce', 'client-patron-460bce'],
  },

  {
    id: 'mystery-religions-150ce',
    year: 150,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: 'Religions of Choice',
    headline:
      'Alongside the civic cults, the initiatory religions of Isis, Mithras, and the Great Mother sell what the state never offered: membership, meaning, and a personal stake in the afterlife.',
    tags: ['religious'],
    body: `Roman civic religion was a contract performed in public: magistrates sacrificing on the community's behalf, correct ritual rather than inner belief, and in return, harvests, victories, and the gods' goodwill toward the state. It asked nothing personal and promised nothing personal. By the second century, religions of a different shape flourished alongside it — cults you joined, individually, by choice and initiation. Isis offered professional clergy, daily liturgy, and rebirth; Mithras met in cave-like chapels, all male, organized in seven grades, favored by soldiers, customs officers, and imperial slaves; the Great Mother had been imported back in 204 BCE. Crucially, membership stacked: an initiate of Isis still sacrificed to the civic gods. No package included exclusivity — except one, still statistically invisible.

What the mysteries sold was belonging and drama in cities full of strangers. Small congregations that knew your name; ritual experience — Apuleius's narrator describes his Isis initiation as approaching the boundary of death and seeing the sun at midnight, and says he can say no more; shared meals; burial; a ladder of spiritual rank open to men who would never hold civic office. The demand was empire-made: soldiers, traders, and freedmen far from ancestral altars needed gods that traveled.

None of this threatened the civic system; it filled a niche inside it. But the niche itself — personal, chosen, salvation-oriented religion — was new at this scale, and mapping it explains the era's most consequential newcomer better than any persecution story does.`,
    whyItMatters: `The mysteries mark a real structural shift in religious demand: imperial mobility created a market for chosen identity that civic religion, wired to place and ancestry, could not serve. Understanding that market is the key to what came next — Christianity grew inside precisely this niche, competing against the mysteries with one structurally unique feature, the demand for exclusive loyalty, which converted membership into identity and made every convert a permanent market share. The comparison also dissolves a false picture: 'paganism' was never a single thing that Christianity fought and beat, but a loose ecology of civic duty and optional devotion — which is why it had no mechanism for fighting back.`,
    misconception: {
      claim: "Mithraism was Christianity's great rival and nearly became the world religion instead.",
      correction:
        'A mithraeum holds a few dozen people; the cult excluded women — half the population — sought no converts, and saw no conflict with the civic gods. It could not have replaced anything and never tried. The famous line that the world came within a hair of being Mithraist is a nineteenth-century flourish, not history.',
    },
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium', 'aegyptus', 'syria'],
    sources: [
      {
        author: 'Apuleius',
        work: 'Metamorphoses (The Golden Ass)',
        note: 'A novel — the fullest insider account of initiation we possess comes wrapped in fiction and comic irony, and its narrator swears he is leaving the secrets out.',
      },
      {
        author: 'Mary Beard, John North, and Simon Price',
        work: 'Religions of Rome',
        note: "Dismantles the old picture of 'oriental cults' answering a spiritual crisis of paganism — the crisis, they argue, is mostly a modern projection.",
      },
    ],
    connects: ['state-cult-400bce', 'imperial-cult-12bce', 'freedmen-class-65ce'],
  },

  {
    id: 'parthian-war-161ce',
    year: 161,
    yearEnd: 166,
    era: 'principate',
    weight: 1,
    reliability: 'well-attested',
    title: "Verus's Parthian War",
    headline:
      "Rome wins its most complete victory over Parthia — and the returning army's baggage carries home the worst enemy the empire ever imported.",
    tags: ['military'],
    body: `In 161, as Marcus Aurelius and Lucius Verus began the first joint reign in Roman history, Parthia struck first for once: King Vologases IV invaded Armenia, installed his own candidate, annihilated a legion at Elegeia — the governor of Cappadocia died with it — and raided Syria. Marcus sent his co-emperor east. Verus presided from Antioch while professionals fought: Statius Priscus stormed into Armenia and took its capital in 163; Avidius Cassius led the main army down the Euphrates, and in 165–166 sacked both Seleucia and Ctesiphon, burning the Parthian palace.

Seleucia — a Greek-speaking city of hundreds of thousands that had opened its gates — was sacked anyway, an act contemporaries flinched at. Later moralists made the plague its punishment: a soldier, the story ran, opened a golden casket in the temple of Apollo and let the pestilence out. What the army actually carried home along the roads in 166 needed no casket.

Verus triumphed alongside Marcus in 166, laden with victory titles. The Historia Augusta paints him as a wastrel who partied through the war his generals won — senatorial gossip, though the generals certainly won it. On its own terms the result was the best Rome ever achieved against Parthia: the enemy capital burned, Armenia restored, and the frontier nudged permanently forward to footholds like Dura-Europos on the middle Euphrates.`,
    whyItMatters: `The war shows Trajan's pattern running on rails: Parthia could always be beaten and never removed, and total victory purchased a few border towns. But its real historical payload was biological. The connectivity that made the empire one market — roads, garrisons, grain fleets — made it one disease pool, and a campaign in Mesopotamia became a demographic event from the Nile to the Rhine within two years. The joint-emperor experiment mattered too: Marcus and Verus proved the empire could be run by two Augusti at once, a precedent filed away until the state's problems outgrew one man again.`,
    control: {},
    sources: [
      {
        author: 'Lucian',
        work: 'How to Write History',
        note: 'A satire on the sycophantic instant-histories this war produced — proof the propaganda was thick enough to be worth mocking.',
      },
      {
        author: 'Historia Augusta',
        work: 'Life of Lucius Verus',
        note: "Hostile gossip about Verus's Antioch winters; even it concedes the war was won.",
      },
    ],
    connects: ['trajan-parthia-114ce', 'hadrian-117ce', 'antoninus-138ce'],
  },

  {
    id: 'antonine-plague-165ce',
    year: 165,
    yearEnd: 180,
    era: 'principate',
    weight: 3,
    reliability: 'well-attested',
    title: 'The Antonine Plague',
    headline:
      'A pestilence out of the Parthian war moves at the speed of Roman roads and shipping, and the state that meets the next century is demographically a different empire.',
    tags: ['social', 'economic'],
    body: `In 165–166 a disease new to the Mediterranean appeared in the army in Mesopotamia and came home with it. Galen, who treated it and fled Rome in 166 to get away from it, recorded the course: fever, then a black pustular rash drying into scabs over about two weeks — most likely an ancestor of smallpox, though retrospective diagnosis can never be certain. Within two years it ran from Egypt to the Rhine; waves recurred for fifteen years and beyond, and in a later outbreak Dio reports two thousand deaths a day in Rome alone. Modern mortality estimates range from a few percent of the empire's population to a quarter of it. Even the low end is millions of people — the deadliest single event in Mediterranean history to that date. Contemporaries had no name for what was happening; Galen simply calls it 'the great plague.'

The plague was empire-shaped. The connectivity Rome had spent three centuries building — roads engineered for all-weather speed, grain fleets on schedule, garrisons rotating between frontiers, cities packed and linked — assembled, for the first time, one continuous disease pool from the Clyde to the Nile, stocked with a population that had never met the pathogen. Army camps were ideal incubators, and the epidemic reached the recruiting stations at the exact moment the Danube frontier began to break.

The traces are administrative, which is how we know it was structural. Egyptian tax registers show villages losing a third of their taxpayers or emptying outright — the scribes' categories are 'dead' and 'fled'; at Soknopaiou Nesos in the Fayum, a register from a single later winter records a third of the adult men dying in two months. Recruitment strained until Marcus enrolled slaves, gladiators, and city policemen; the silver coinage was quietly thinned to pay for war on a shrunken tax base; building inscriptions, a good proxy for civic surplus, dip across the west. None of this is a death toll, and the minimalist historians are right that ancient rhetoric inflates; but the strain shows up in exactly the boring documents that do not exaggerate.

The empire did not fall; this was a wound, not a death, and populations rebuild — over generations, not budget cycles. What changed was the margin. A state whose taxes, rents, and legions were all ultimately levies on human bodies had lost some substantial fraction of them in two years, and every institution downstream — the army's manning, the cities' finances, the currency — now ran closer to the edge, where the next shock would find it.`,
    whyItMatters: `Asked when the Roman good times ended, popular history reaches for a bad emperor; the better answer is a virus. Ancient states ran on bodies — taxpayers, tenants, recruits — so a mortality shock cut everything at once: revenue, rents, and army manning, in the same two years, with no policy response available. The crisis of the third century begins here demographically even though the politics holds for another generation, because thinner margins turned survivable problems into cascading ones. The plague also teaches a lesson about evidence: our narrative sources give it sentences while tax rolls scream — a standing warning that ancient historians wrote about what interested them, not about what mattered.`,
    control: {},
    sources: [
      {
        author: 'Galen',
        work: 'Clinical notices scattered across his works',
        note: 'An eyewitness physician who recorded symptoms, not statistics; every mortality figure is modern inference from tax rolls and papyri.',
      },
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: 'Gives a later outbreak two sentences — ancient narrative history had no category for pandemics, which is why this event was underrated for centuries.',
      },
      {
        author: 'Kyle Harper',
        work: 'The Fate of Rome',
        note: 'The maximalist case, making disease and climate prime movers of Roman history; critics think he pushes thin evidence hard. The argument is live.',
      },
    ],
    connects: ['parthian-war-161ce', 'annona-fleet-30ce', 'roads-italy-220bce'],
  },

  {
    id: 'christian-growth-170ce',
    year: 170,
    dateNote: 'c.',
    era: 'principate',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Compound Interest: Christianity Before Constantine',
    headline:
      'No mass conversions and few martyrs — a small cult grows a few percent a year through households, women, and charity until arithmetic makes it enormous.',
    tags: ['religious', 'social'],
    body: `Around 170 Christians numbered perhaps one Roman in several hundred — invisible in most places, concentrated in the Greek-speaking cities of the east. The growth mechanism was not preaching to crowds but conversion along existing bonds: households following a converted head, spouses, trades, patron networks. The visible converts are mostly modest urban people — artisans, traders, householders — with women conspicuously prominent. The pagan critic Celsus sneered that the movement recruited wool-workers, cobblers, women, and children, inadvertently filing the best demographic report we have.

Three features did the compounding. Exclusivity: joining meant leaving the civic gods, a high cost that produced high commitment — the mystery cults asked nothing so dear and got nothing so durable. Charity as institution: organized support for widows, orphans, prisoners, and the sick, including nursing through epidemics when others fled — visible, practical, and a recruitment engine. And a translocal identity: letters, traveling teachers, and shared scriptures riding Roman roads and Greek, so that a Christian arriving in a strange city found people already obliged to him.

Persecution before 250 was real, local, and sporadic. Pliny, governing Bithynia around 112, had to ask Trajan what the crime even was; the emperor's answer — punish the denounced, seek no one out, accept no anonymous accusations — set the tone for a century. Martyrdoms were remembered and retold far in excess of their number; the memory did more work than the dying.`,
    whyItMatters: `The growth needs no miracle and no bloodbath to explain it — a few percent a year, compounded for two and a half centuries, turns a house-church into millions — but the shape of the growth is everything. Because it spread through households and institutions rather than crowds, Christianity built structure as it grew: funds, offices, bishops, letter networks. When an emperor finally converted, he found not a mood but an organization — the only empire-wide institution that was not the Roman state — ready to be joined to power. That inheritance was compounding quietly here, a century and a half in advance, in rooms our narrative sources never thought worth describing.`,
    misconception: {
      claim: 'Christianity spread because of relentless Roman persecution — or as a movement of slaves and the destitute.',
      correction:
        'Empire-wide persecution began only in 250 CE; before that, enforcement was local, rare, and often reluctant. And the converts we can actually see are mostly modest urban tradespeople and householders, with women prominent — not a slave uprising. The growth curve needs no drama: steady compounding through families and networks did the work.',
    },
    control: {},
    nonTerritorial: true,
    spatialFocus: ['asia', 'syria', 'aegyptus'],
    sources: [
      {
        author: 'Pliny the Younger',
        work: 'Letters 10.96–97',
        note: "A governor genuinely unsure what the crime is, and an emperor telling him not to look for it — the empire's best-documented shrug.",
      },
      {
        author: 'Celsus',
        work: 'The True Word (preserved in Origen, Against Celsus)',
        note: 'A hostile pamphlet surviving only inside its own rebuttal; its sneers at wool-workers and women are our census.',
      },
      {
        author: 'Rodney Stark',
        work: 'The Rise of Christianity',
        note: "A sociologist's arithmetic, not ancient data — the model shows the growth is possible without mass conversion, not that it happened this way.",
      },
    ],
    connects: ['fire-64ce', 'jerusalem-70ce', 'mystery-religions-150ce'],
  },

  {
    id: 'marcomannic-166ce',
    year: 166,
    yearEnd: 180,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Germans at Aquileia',
    headline:
      'For the first time in nearly three centuries a foreign army stands in Italy, and the philosopher-emperor spends his last fourteen years in a camp on the Danube.',
    tags: ['military'],
    body: `In 166–167, with the eastern army still marching home and the plague running ahead of it, the middle Danube broke. Raiders crossed into Pannonia; then, around 170, came the real thing: the Marcomanni and Quadi cut up a Roman force, crossed the Julian Alps, destroyed Opitergium, and laid siege to Aquileia — the first foreign enemy on Italian soil since the Cimbri and Teutones nearly three centuries before. The same years, other peoples raided down the Balkans as far as Eleusis, outside Athens. The shock was not one invasion but the pattern: pressure all along the river at once, from tribes Rome had subsidized for generations, themselves pushed by movements deeper in the interior that Rome could sense but not see.

Marcus Aurelius answered with the total mobilization of a stretched state. Two new legions were raised in Italy; slaves, gladiators, and police were enrolled; the palace treasures were auctioned in the Forum for two months rather than raise taxes mid-plague. Some defeated bands were settled inside the empire as farmers and recruits — a policy with a long future — though after one group rose at Ravenna, Marcus stopped settling them in Italy itself. In these same years Rome cut its losses at the empire's other end, giving up the Antonine Wall for good; the British garrison went back to Hadrian's line.

The emperor spent most of his remaining reign on the river, headquartered at Carnuntum and Sirmium, grinding the tribes into submission — interrupted in 175 by the revolt of Avidius Cassius in the east, proclaimed on a false report of Marcus's death and murdered by a centurion within three months. By 180 the Marcomanni and Quadi were beaten into treaties, Roman garrisons stood across the Danube, and the biographer claims Marcus intended two new provinces, Marcomannia and Sarmatia — a claim historians argue about. Between staff work, in Greek, he wrote private notes to himself: the Meditations, which never mention a single battle.`,
    whyItMatters: `The Marcomannic wars are the dress rehearsal for the third century: simultaneous wars on two frontiers, plague, and fiscal strain — the exact combination of 235–284 — met this time by a state still strong enough to win. What changed permanently mattered more than the victory. The Danube replaced the Rhine as the empire's critical frontier and would stay so for its remaining history; settling defeated barbarians inside the frontier as soldiers and farmers moved from expedient to policy; and the emperor's job description changed — from civil magistrate in Rome to field commander living where the army lived. Marcus was the last emperor for whom that was a sacrifice rather than the definition of the office.`,
    control: { pannonia: 'contested', noricum: 'contested', 'britannia-north': 'lost' },
    markers: [{ type: 'siege', label: 'Aquileia', at: [13.37, 45.77] }],
    sources: [
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: "In epitome; already contains the 'rain miracle' that saved a legion — claimed for an Egyptian magician by pagans and for Christian prayers by Christians, a contested miracle in real time.",
      },
      {
        author: 'Marcus Aurelius',
        work: 'Meditations',
        note: "The war's most famous document contains no war — a private spiritual discipline, not a diary. Using it as history is like reconstructing a battle from the chaplain's prayers.",
      },
      {
        author: 'Historia Augusta',
        work: 'Life of Marcus Aurelius',
        note: 'Source of the Marcomannia-province claim, which may be retrospective invention; the collection fabricates freely.',
      },
    ],
    connects: ['antonine-plague-165ce', 'danube-frontier-16bce', 'antonine-wall-142ce'],
  },

  {
    id: 'marcus-death-180ce',
    year: 180,
    era: 'principate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Marcus Dies, Commodus Chooses Rome',
    headline:
      "The last of the adoptive emperors is succeeded by his nineteen-year-old son — proving the celebrated 'principle' was only ever the absence of sons.",
    tags: ['succession'],
    body: `Marcus Aurelius died on 17 March 180, aged fifty-eight, in camp on the Danube — at Vindobona or Sirmium, the sources differ — possibly of the plague that still circled his armies. The succession had been settled for years: Commodus, his son, the one surviving boy of about fourteen children, made Caesar at five and full co-Augustus at sixteen, was the first Roman emperor ever born to a reigning one. Within months the new emperor made terms with the Marcomanni and Quadi — subsidies, levies, a cleared strip along the bank — abandoned any thought of new trans-Danubian provinces, and went home to Rome and a triumph. The Danube provinces settled back into garrison routine.

Contemporaries split on the peace, and historians still do: the sensible liquidation of an unwinnable commitment, or the throwing away of a conquest nearly complete. Dio, who lived through what followed, chose his image and made it the era's epitaph — the empire passing from a kingdom of gold to one of iron and rust.

The deeper reckoning was dynastic. Nerva, Trajan, Hadrian, and Antoninus had each adopted an heir — and each had no surviving son to pass over. Marcus was the first of the five to face the actual choice, and no Roman emperor ever safely set aside a legitimate adult son: a displaced heir was a standing civil war with a face. He gave Commodus the best tutors alive and a decade of apprenticeship, and named him. Biology, not philosophy, had ended the experiment; philosophy got the blame.`,
    whyItMatters: `The year 180 exposes what the second century's stability had actually rested on: not an institution but a run of childlessness administered by competent men. The moment the dynastic lottery finally produced a legitimate son, the celebrated adoptive 'system' evaporated without anyone violating it — because there had never been a system, only Augustus's old unsolved problem wearing eighty years of good luck. Gibbon called this the end of the happiest age in human history; the sharper reading is that it revealed the happiness had no mechanism. The next contested succession would be settled, like every one after it, by the Guard and the armies — and the price of the throne would now be spoken out loud.`,
    misconception: {
      claim: "The Five Good Emperors chose the best man on principle, and Marcus Aurelius betrayed the system by naming his son.",
      correction:
        'None of the first four had a surviving son to pass over — adoption was necessity styled as virtue. Marcus was the first who faced the real choice, and passing over a legitimate adult heir meant leaving a rallying point for civil war. There was no system to betray; there was a lucky streak, and it ended.',
    },
    control: { pannonia: 'provincial', noricum: 'provincial' },
    sources: [
      {
        author: 'Cassius Dio',
        work: 'Roman History',
        note: "A senator who lived under Commodus — an eyewitness with scores to settle; 'iron and rust' is his verdict, not a neutral measurement.",
      },
      {
        author: 'Herodian',
        work: 'History of the Empire from the Death of Marcus',
        note: 'Opens his whole history at this moment precisely to frame everything after as decline — periodization as argument.',
      },
    ],
    connects: ['augustus-dies-14ce', 'nerva-trajan-96ce', 'marcomannic-166ce', 'antonine-plague-165ce'],
  },
];
