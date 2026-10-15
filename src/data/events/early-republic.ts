// 509-264 BCE

import type { RomeEvent } from '../../types';

export const EARLY_REPUBLIC_EVENTS: RomeEvent[] = [
  {
    id: 'consuls-509bce',
    year: -509,
    dateNote: 'traditional',
    era: 'early-republic',
    weight: 2,
    reliability: 'reconstructed',
    title: 'Two Consuls, One Year',
    headline:
      'Rome replaces its king with two annual magistrates who can each cancel the other — and keeps full one-man power legal, in a drawer, with a six-month fuse.',
    tags: ['constitutional'],
    body: `With the kings gone, Rome split royal power in two. The chief magistracy passed to a pair of consuls, elected for a single year, each holding the full *imperium* a king had held — command in war, jurisdiction, the power of life and death outside the city — and each able to block the other completely. A consul could do almost anything except stop his colleague from stopping him. Add the one-year term, and the design is legible at a glance: no man holds supreme power alone, and no man holds it for long.

The system had a deliberate escape hatch. When divided command threatened disaster — usually an enemy at the gates — a consul could name a dictator: one man, full power, no colleague, no appeal, and a hard limit of six months. Romans used the office dozens of times across the next three centuries and the dictators went home on schedule. The story they told about Cincinnatus, summoned from his plough, victorious in sixteen days, and back at the plough before his term was a tenth spent, is a parable about what the office was for.

How much of this sprang into being in 509 is another question. The consular lists reach back to the founding date, but historians doubt the earliest decades: the office may have evolved through intermediate forms — the sources themselves preserve odd titles like *praetor maximus* — and the tidy origin story looks like later back-projection. What is solid is the outcome. By the time Rome enters reliable history, annual paired magistracies with mutual veto are the operating system, and they stay the operating system for four hundred years.

Collegiality and annuality — the two constraints did the work of a constitution Rome never wrote down. Every later office followed the template: censors, praetors, quaestors, all in colleges, all term-limited. Ambition was legal; monopoly was not.`,
    whyItMatters: `The consulship is an anti-tyranny machine built by people who assumed the worst about ambition, and the astonishing fact is that it ran for four centuries. But notice what it never did: it never made concentrated power illegal, only temporary. The dictatorship kept full one-man rule on the books as a respectable emergency tool — which meant that when Sulla and then Caesar wanted absolute power, they did not have to invent an office, only to remove the time limit from an existing one. The Republic's safeguards were durations, not prohibitions, and durations can be amended.`,
    misconception: {
      claim: 'Roman dictators were tyrants who seized power illegally.',
      correction:
        'For three centuries the dictatorship was a legal, respected emergency office — granted by a consul, capped at six months, and routinely surrendered early. The word only acquired its modern meaning after Sulla and Caesar took the office without the time limit.',
    },
    control: {},
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita II',
        note: 'Annalistic reconstruction written five centuries later; the early consular lists may be partly fabricated.',
      },
      {
        author: 'Polybius',
        work: 'Histories VI',
        note: 'Describes the balanced constitution in its mature second-century form and projects that neatness backward.',
      },
      {
        author: 'T. J. Cornell',
        work: 'The Beginnings of Rome',
        note: 'Argues the consulship likely evolved through transitional forms rather than emerging complete in 509.',
      },
    ],
    connects: ['expulsion-509bce', 'servius-tullius-578bce'],
  },
  {
    id: 'plebs-secession-494bce',
    year: -494,
    dateNote: 'traditional',
    era: 'early-republic',
    weight: 2,
    reliability: 'reconstructed',
    title: 'The Plebs Walk Out',
    headline:
      "Rome's commoners refuse to march until they get officers of their own — and the tribunate is born, a veto wielded by a legally untouchable human shield.",
    tags: ['constitutional', 'social'],
    body: `In 494 the plebeians — the mass of citizens outside the closed patrician aristocracy — staged the first general strike in recorded politics. The grievance was debt: smallholders borrowing to survive bad harvests and war years could be bound over to their creditors under the archaic institution of *nexum*, farming their own land as bondsmen or worse. With enemies in the field and the levy called, the plebs simply left, marching out to the Sacred Mount a few miles from the city and refusing to soldier until something changed. An army that is also the citizenry cannot be conscripted against itself.

The settlement created something no other ancient state had: the tribunes of the plebs. Tribunes were not magistrates of the Roman state — they were officers of the plebeian body, and their power rested on a collective oath that anyone who harmed them was accursed and could be killed with impunity. That sacrosanctity let a tribune do physically what no law yet allowed: interpose his own body between a magistrate and a citizen. From this grew the formal powers — *auxilium*, the rescue of individuals, and eventually *intercessio*, the veto over public acts.

The narrative details are late and embroidered — the fable of the belly and the limbs, told to the strikers by the envoy Menenius Agrippa, is a Greek rhetorical set piece pasted into the story — and the tribunate's early powers were certainly less defined than Livy suggests. But the institution itself is bedrock: for the rest of the Republic's life, ten annually elected tribunes sat inside the Roman state as a licensed opposition, and the plebs maintained their own assembly, their own officials, and their own temple treasury as a state within the state.`,
    whyItMatters: `Rome's constitution was not designed; it was struck, bargain by bargain, under threat — and the tribunate is the pattern case: a labor strike converted into permanent political machinery. That conversion is why Rome survived two centuries of class conflict that broke Greek cities into massacre and counter-massacre. But institutionalizing obstruction has a long tail. The tribune's sacrosanct veto, invented to shield debtors from magistrates, is the same instrument Tiberius Gracchus will wield — and see wielded against him — in 133, and the same power Augustus will quietly collect for life. The Republic's most creative safety valve doubled as its most exploitable office.`,
    control: {},
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita II',
        note: "The Menenius Agrippa fable is a literary commonplace; the secession's date and details are traditional.",
      },
      {
        author: 'Dionysius of Halicarnassus',
        work: 'Roman Antiquities VI',
        note: 'Fullest surviving account, written under Augustus with heavy rhetorical expansion.',
      },
      {
        author: 'T. J. Cornell',
        work: 'The Beginnings of Rome',
        note: "Holds that the tribunate's developed powers were retrojected onto its origins by later annalists.",
      },
    ],
    connects: ['consuls-509bce', 'servius-tullius-578bce'],
  },
  {
    id: 'client-patron-460bce',
    year: -460,
    dateNote: 'c.',
    era: 'early-republic',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Patrons and Clients',
    headline:
      'Roman society runs on a hereditary exchange of protection for loyalty — a vertical bond that organizes politics, welfare, and law long before the state does.',
    tags: ['social', 'daily-life'],
    body: `The organizing social relation of Rome was not class but clientela: the hereditary bond between a patron and his clients. The patron — a man of wealth and standing — supplied what the early state did not: representation in court, loans without ruin, protection from the powerful, a place at the morning reception where favors were asked and granted. The client owed attendance, deference, support in feuds, and above all his vote. The bond was sealed by *fides*, good faith with religious weight; the Twelve Tables put a patron who defrauded his client under a curse.

This is why Roman politics baffles modern categories. There were no parties and no platforms, because elections were contests between networks of obligation — a candidate mobilized his clients, his family's clients, and his allies' clients. Welfare, credit, and legal aid all flowed through the same private channels, which meant the poor were bound to the rich individually rather than opposed to them collectively. The plebeian movement was the great exception: the moment Romans organized horizontally, against the grain of the system.`,
    whyItMatters: `Clientela explains the Republic's deepest political puzzle — why the Roman poor reliably voted for aristocrats — and it never stopped scaling. When generosity is the currency of loyalty, public benefaction becomes a weapon, which is the logic behind every gladiatorial show and grain distribution to come. And when the smallholders who anchored the system lost their farms, the bond migrated to the one patron who could still deliver: the general. A late-Republican legion is a client body with weapons, and Marius, Sulla, and Caesar are patrons before they are warlords.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium'],
    sources: [
      {
        author: 'Dionysius of Halicarnassus',
        work: 'Roman Antiquities II',
        note: 'Presents clientela as a formal invention of Romulus — a founding-charter myth for an evolved social reality.',
      },
      { author: 'Mary Beard', work: 'SPQR' },
    ],
    connects: ['rome-founding-753bce', 'plebs-secession-494bce'],
  },
  {
    id: 'twelve-tables-451bce',
    year: -451,
    yearEnd: -450,
    era: 'early-republic',
    weight: 2,
    reliability: 'reconstructed',
    title: 'The Twelve Tables',
    headline:
      'Rome writes its law down and posts it in the Forum — not because the law was kind, but so that priests and patricians could no longer keep the rules secret.',
    tags: ['legal', 'constitutional'],
    body: `In 451 Rome suspended its normal government and elected a board of ten men, the decemvirs, to do one thing: write the law down. Until then law was custom, and custom was interpreted by patrician priests — which meant a plebeian could lose his farm or his freedom under rules he had no way to read. After two years and a political crisis, the result was published on twelve tablets set up in the Forum: the Twelve Tables, the foundation document of Roman law. Schoolboys were still memorizing them three and a half centuries later; Cicero had chanted them as a child.

The content was anything but a charter of liberties. The Tables were procedure and private law, much of it grim: exact scripts for summoning a defendant to court, the seizure of debtors — with a notorious clause permitting multiple creditors to divide a debtor's body, which Romans themselves later insisted was never applied literally — death for singing defamatory songs, death for night theft, rules for burials, boundaries, and inheritance. One clause banned marriage between patricians and plebeians, freezing the caste line into statute.

The tradition wraps the code in drama: an embassy sent to study the laws of Athens (historians doubt it), and a second college of decemvirs turned tyrannical, brought down when Appius Claudius tried to seize the free girl Verginia and her father killed her rather than surrender her — a story built to rhyme with Lucretia and the fall of the kings. The tablets themselves perished, traditionally in the Gallic sack; what we have are quotations in later authors, enough to reconstruct perhaps a third of the text.`,
    whyItMatters: `Publication, not content, is the revolution. The rules were harsh, but a harsh rule you can read is a different kind of power than a harsh rule your opponent keeps in his head: it can be cited, argued over, and eventually amended — the intermarriage ban lasted only six years. From this act of posting the rules descends the whole Roman legal tradition: the jurists, the praetor's edict, Justinian's codification, and through it the civil law of most of Europe. Rome's most exported artifact is not the legion; it is the idea that law is a public text.`,
    misconception: {
      claim: "Rome's first written laws were a bill of rights protecting ordinary citizens.",
      correction:
        'The Twelve Tables were mostly harsh procedure — debt-bondage, capital penalties, even a ban on intermarriage between the orders. The plebeian victory was not gentle content; it was publication. You cannot fight rules you are not allowed to know.',
    },
    control: {},
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita III',
        note: 'The Verginia narrative is moral drama patterned on Lucretia; the decemviral politics are heavily novelized.',
      },
      {
        author: 'Cicero',
        work: 'De Oratore',
        note: 'On memorizing the Tables at school — testimony to their cultural weight, four centuries on.',
      },
      {
        author: 'T. J. Cornell',
        work: 'The Beginnings of Rome',
        note: 'Doubts the Athenian embassy; treats the code itself as authentic and datable.',
      },
    ],
    connects: ['plebs-secession-494bce', 'consuls-509bce'],
  },
  {
    id: 'lex-canuleia-445bce',
    year: -445,
    era: 'early-republic',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Marriage Across the Orders',
    headline:
      'Five years after the Twelve Tables wrote the caste line into law, a tribune forces through the right of patricians and plebeians to marry — and the line starts to dissolve.',
    tags: ['legal', 'social'],
    body: `The Twelve Tables had done something remarkable and ugly: they took the social boundary between patrician and plebeian and made it statute, banning marriage across the orders. In 445 the tribune Gaius Canuleius carried a law repealing the ban. The stakes were dynastic, not romantic. Roman marriage determined the status of children, and under the ban a wealthy plebeian family could never convert money into lineage, nor a fading patrician house refresh itself with plebeian wealth. Legalized intermarriage opened exactly that trade.

Canuleius had paired the marriage bill with a second demand — that plebeians be eligible for the consulship itself. That one was deflected: rather than admit a plebeian consul, the patricians invented a substitute office, military tribunes with consular power, open to both orders. The evasion held for most of a century, but the marriage law did its quiet work throughout. Elite plebeian and patrician families began to interlock, and the men who later forced open the magistracies were increasingly the cousins and in-laws of the men keeping them shut.`,
    whyItMatters: `Caste systems die by marriage. The Lex Canuleia looks minor beside the great constitutional milestones, but it changed the nature of the conflict: after 445, the struggle of the orders is less an oppressed class against its masters than new money negotiating entry with old blood — a negotiation conducted at dinner tables as much as in assemblies. The merged patrician-plebeian nobility that will run the middle Republic is founded here, in the marriage contracts.`,
    control: {},
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita IV',
        note: "Canuleius's fiery speech is Livy's own composition in the manner of his time.",
      },
      { author: 'T. J. Cornell', work: 'The Beginnings of Rome' },
    ],
    connects: ['twelve-tables-451bce', 'plebs-secession-494bce'],
  },
  {
    id: 'patria-potestas-440bce',
    year: -440,
    dateNote: 'c.',
    era: 'early-republic',
    weight: 1,
    reliability: 'reconstructed',
    title: 'The Father Owns the Household',
    headline:
      'In Roman law the eldest living father holds power over everyone in his line — his adult sons own nothing, and family membership is a legal fact that can be rewritten by adoption.',
    tags: ['daily-life', 'social'],
    body: `The basic unit of Roman society was not the individual but the *familia* — everyone and everything under the power of its eldest living male, the paterfamilias. *Patria potestas* was startling even to other ancient peoples: in principle it included the power of life and death, and in hard law a son of forty, a serving consul, owned nothing while his father lived — whatever he earned belonged to the household, and he managed at most an allowance, a *peculium*, like a slave's. Custom and family councils tamed the extremes, but the legal skeleton was real and Romans were proud of it.

Marriage came in two shapes. In the old form a wife passed into her husband's power like a daughter; but over time Romans came to prefer 'free' marriage, in which she remained in her birth family — meaning her property never merged with her husband's and divorce was simple. And because the familia was a legal construct rather than a bloodline, adoption — even of adults — could transplant a grown man from one family to another completely. A Roman household also included its slaves and its freedmen, who carried the family name outward into the streets.`,
    whyItMatters: `Take the household seriously and much of later Roman history unlocks. Adoption made emperors — Augustus, Trajan, Hadrian, and the Antonines all inherited power through a legal fiction available because family was law, not biology. Free marriage, designed to protect a father's estate, incidentally gave elite Roman women independent property and real leverage, which is how women formally barred from politics became political operators. And the paterfamilias supplied Rome's master metaphor for legitimate power: when Augustus finally accepted the title *pater patriae*, father of the fatherland, everyone understood exactly what was being claimed.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium'],
    sources: [
      {
        author: 'Gaius',
        work: 'Institutes',
        note: 'A second-century CE law textbook describing early institutions at six centuries’ distance; the early forms are reconstructed.',
      },
      { author: 'Mary Beard', work: 'SPQR' },
    ],
    connects: ['twelve-tables-451bce', 'client-patron-460bce'],
  },
  {
    id: 'state-cult-400bce',
    year: -400,
    dateNote: 'c.',
    era: 'early-republic',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Religion as Procedure',
    headline:
      'Roman state religion demanded no belief and promised no salvation — it was a technology of correct procedure, and whoever operated the procedure could stop the state.',
    tags: ['religious'],
    body: `Roman religion was a contract, not a creed. The gods kept the state safe in exchange for exactly performed ritual — the *pax deorum*, peace with the gods, maintained by sacrifices done to the letter. A single stumble in an ancient prayer meant starting the entire ceremony again; there was no scripture, no doctrine to affirm, and nobody asked what you believed. What mattered was that the procedures ran correctly, and the men who ran them were not a priestly caste but the political class itself, holding priesthoods alongside magistracies.

Before any public act — an assembly, an election, a battle — the auspices were taken: the sky watched, the sacred chickens fed, the signs read. This gave ritual a second life as constitutional machinery. A magistrate who announced unfavorable omens could dissolve an assembly; a flaw discovered in the auspices could annul an election after the fact, and consuls actually resigned over a wrongly pitched augural tent. Obstruction by omen was lawful, unanswerable, and available to whoever held the right priesthood.`,
    whyItMatters: `A religion of procedure rather than belief explains two things at once. It explains Roman absorbency — foreign gods could always be added, because adding a cult required only adding rituals, and Rome even formally invited enemy gods to defect. And it explains the later collision with Christianity: Christians refused the procedures, and to Roman magistrates that was not private dissent but sabotage of the state's contract with heaven. Meanwhile the political weaponization of augury never went away — when Bibulus tries to paralyze Caesar's legislation in 59 by watching the sky, he is firing a weapon loaded in this era.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium'],
    sources: [
      {
        author: 'Cicero',
        work: 'De Divinatione',
        note: 'Written by a serving augur who lets his characters argue that divination is false — Roman religion could contain its own skeptics.',
      },
      { author: 'Mary Beard, John North & Simon Price', work: 'Religions of Rome' },
    ],
    connects: ['numa-religion-715bce', 'augury-priesthoods-650bce', 'consuls-509bce'],
  },
  {
    id: 'veii-396bce',
    year: -396,
    era: 'early-republic',
    weight: 2,
    reliability: 'reconstructed',
    title: 'The Fall of Veii',
    headline:
      'After a ten-year siege Rome destroys its Etruscan twin twelve miles up the Tiber — and for the first time keeps the land instead of the loot.',
    tags: ['military'],
    body: `Twelve miles north of Rome stood Veii, the southernmost great city of Etruria: richer than Rome, walled on a superb defensive site, and its rival for a century in the contest over the Tiber crossing and the salt route from the coast. In 396, after a siege tradition stretches to ten years, the dictator Marcus Furius Camillus took the city, killed or enslaved its people, and ended the rivalry permanently. It was the largest thing Rome had ever done, and Rome did something new with the victory: instead of plunder and tribute, annexation. Veii's entire territory became Roman land.

The tradition is dressed in literary costume — a decade-long siege to echo Troy, a prodigy of the rising Alban Lake, a tunnel dug under the walls so Roman soldiers could erupt inside the citadel's temple. Beneath the costume, two details ring true to Roman habits. The army besieging Veii year-round is said to have received military pay, *stipendium*, for the first time — a citizen militia could not otherwise winter in the field. And before the assault, Rome performed an *evocatio*, formally inviting Veii's patron goddess Juno Regina to abandon her city for a better temple in Rome. She accepted; the temple stood on the Aventine for centuries.

The absorption was as thorough as the conquest. The captured territory roughly doubled Rome's land, four new rustic tribes were organized on it, and portions were distributed to Roman citizens — with some of the surviving Veientes eventually enfranchised into the citizen body.`,
    whyItMatters: `Annexation is the innovation that matters. Ancient city-states raided, ransomed, and extracted tribute; they did not normally digest one another. By taking Veii's land and eventually its people into the Roman state, Rome converted victory into permanent capacity — more territory, more farmers, more soldiers — rather than one-time revenue. That is the germ of the entire imperial method. It is also the reason the catastrophe six years later did not end Roman history: a Rome twice its former size could absorb the Gallic sack and reload.`,
    control: { etruria: 'contested' },
    markers: [{ type: 'siege', label: 'Siege of Veii', at: [12.4, 42.02] }],
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita V',
        note: 'The ten-year duration and the tunnel are literary shaping on the Trojan model; the conquest and annexation are solid.',
      },
      {
        author: 'T. J. Cornell',
        work: 'The Beginnings of Rome',
        note: "Archaeology confirms Veii's abrupt eclipse and the absorption of its territory.",
      },
    ],
    connects: ['ancus-ostia-642bce', 'tarquinius-priscus-616bce', 'state-cult-400bce'],
  },
  {
    id: 'gallic-sack-390bce',
    year: -390,
    dateNote: 'or 387 BCE',
    era: 'early-republic',
    weight: 3,
    reliability: 'contested',
    title: 'The Gauls Sack Rome',
    headline:
      "A Gallic war band annihilates Rome's army at the Allia, walks into the open city, and sells Rome its own survival for a thousand pounds of gold.",
    tags: ['military'],
    body: `Around 390 BCE a war band of Senones — Gauls from the Celtic peoples who had settled the Po valley over the previous century — marched south under a chieftain the sources call Brennus. At the little river Allia, eleven miles from Rome, the Roman levy panicked and broke almost without fighting; the survivors fled to recently emptied Veii rather than home. Three days later the Gauls walked into an open, largely abandoned city. The garrison on the Capitoline held out under siege for months while the Gauls burned and looted below, until Rome bought them off with a thousand pounds of gold. At the weighing, tradition says, the Romans complained the Gallic weights were rigged — and Brennus threw his sword onto the scale with the words *vae victis*: woe to the defeated.

Legend accreted thickly. The sacred geese of Juno wake Marcus Manlius to repel a night assault on the Capitol; the old senators, too proud to flee, sit motionless in their doorways in full regalia until the Gauls kill them; and at the climax Camillus, conqueror of Veii, arrives with an army at the precise moment of the weighing to cancel the ransom and destroy the Gauls. That last is patriotic anesthesia, almost universally rejected — the earliest surviving account, Polybius's, has the Gauls simply take the gold and go home, distracted by trouble in their own territory.

Archaeology deflates the material catastrophe further: no general destruction layer marks the date, and the Gauls were raiders after portable wealth, not conquerors seeking territory. The city and its institutions continued. But Romans never processed it that way. July 18, the *dies Alliensis*, was marked accursed in the calendar forever; the Capitol's rescue by geese was annually commemorated; and for centuries the state kept an emergency levy, the *tumultus Gallicus*, that suspended normal exemptions the moment Gauls stirred. In moments of extreme Gallic panic — twice, in the third century — Rome went so far as to bury a Gallic couple and a Greek couple alive in the Forum Boarium, human sacrifice by a state that insisted it never practiced any.

Rebuilding was defensive in every sense. Within a generation Rome ringed itself with the massive circuit misnamed the Servian Wall — eleven kilometers of stone, quarried, with grim economy, from conquered Veii's own tufa beds. Military tradition credits the disaster with spurring the army's transformation as well, away from the rigid hoplite line that had shattered at the Allia and toward the flexible manipular legion. However gradual those reforms actually were, Romans remembered them as lessons of the Allia — the defeat was the founding syllabus of the war machine.

Even the date is unstable: Roman tradition said 390, Greek chronology implies 387 or 386. What no one disputed was the singularity of the thing. Between the founding legends and the year 410 CE, this is the only time a foreign enemy held the city of Rome — a span of eight hundred years bracketed by two sacks.`,
    whyItMatters: `The sack installed a permanent threat-reflex in Roman policy, and that reflex became an engine of expansion. Rome drew a specific conclusion from the Allia: safety lies not in treaties but in walls, distance, and the elimination of the threat's homeland — the only safe neighbor is a subject neighbor. The conquest of the Po valley, the special dread reserved for northern enemies, and ultimately Caesar's decade in Gaul all drew on this memory; Caesar could sell an aggressive war of choice as pre-emption because every Roman knew what Gauls had once done. A three-and-a-half-century foreign policy built on one bad afternoon: few defeats in history have compounded so far.`,
    misconception: {
      claim: 'The Gauls burned Rome to the ground, and the city barely survived.',
      correction:
        'Archaeology shows no citywide destruction layer, and the earliest account has the Gauls simply take a ransom and leave. The sack was a humiliating raid, not an annihilation. The lasting damage was to Roman memory — which is exactly why it shaped policy for centuries.',
    },
    control: { cisalpina: 'rival-celtic' },
    markers: [
      { type: 'battle', label: 'Battle of the Allia', at: [12.6, 42.05] },
      { type: 'disaster', label: 'Sack of Rome', at: [12.48, 41.89] },
    ],
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita V',
        note: "The geese, the seated senators, and Camillus's last-second rescue are patriotic set pieces; the rescue contradicts the earlier Greek tradition.",
      },
      {
        author: 'Polybius',
        work: 'Histories II',
        note: 'The earliest surviving account: the Gauls take the gold and withdraw. No Camillus.',
      },
      {
        author: 'T. J. Cornell',
        work: 'The Beginnings of Rome',
        note: 'Notes the absence of an archaeological destruction layer; reads the sack as a raid magnified by memory.',
      },
    ],
    connects: ['veii-396bce', 'servius-tullius-578bce'],
  },
  {
    id: 'licinio-sextian-367bce',
    year: -367,
    era: 'early-republic',
    weight: 2,
    reliability: 'reconstructed',
    title: 'The Licinio-Sextian Laws',
    headline:
      'Plebeians win the consulship, and Rome caps how much public land one man may hold — a limit the rich then ignore for over two centuries.',
    tags: ['constitutional', 'legal'],
    body: `In 367, after years of obstruction that tradition stretches to a full decade of blocked elections, the tribunes Gaius Licinius Stolo and Lucius Sextius Lateranus carried a package of three laws. One eased the debt crisis that had festered since the Gallic sack, folding paid interest back into the principal. One opened the consulship itself to plebeians — Sextius took office in 366 as the first plebeian consul, and within a generation one consulship each year was effectively reserved for the plebs. And one limited any individual's holding of *ager publicus*, the public land Rome confiscated from conquered peoples, to five hundred iugera — about three hundred acres.

The land law is the one to watch. Conquered land legally belonged to the Roman people, but in practice it was held by whoever occupied it, and the occupiers were the rich, running herds and estates across tracts of nominally public soil. The cap was meant to force land back into circulation for smallholders. It failed from the first day: enforcement depended on magistrates drawn from the very class doing the occupying. Tradition preserves the perfect emblem — Licinius Stolo himself was later fined for holding a thousand iugera through a legal fiction, evading his own law.

The patricians extracted a price for the consulship, detaching its judicial functions into a new office initially reserved for themselves, the praetorship, and adding curule aediles to run the city and its games. The firewall hardly mattered. Within decades plebeians held every major magistracy, and the distinction that remained was social rather than constitutional.`,
    whyItMatters: `The laws of 367 display the Republic's characteristic maneuver in a single frame: defuse crisis by sharing office upward while leaving property relations untouched below. The consulship concession worked brilliantly — it built the merged nobility that governed Rome for centuries. The land cap, never enforced, sat in the statute books like an unexploded shell. When Tiberius Gracchus took it up in 133, proposing merely to enforce a limit two hundred and thirty years old, the possessing class understood the danger precisely because the law was legitimate — and answered, for the first time in the Republic's history, with murder.`,
    control: {},
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita VI',
        note: "The decade-long 'anarchy' of blocked elections is doubted; the laws themselves are accepted as genuine.",
      },
      {
        author: 'Appian',
        work: 'Civil Wars I',
        note: 'Views the land question retrospectively from the Gracchan crisis it eventually detonated.',
      },
      {
        author: 'T. J. Cornell',
        work: 'The Beginnings of Rome',
        note: 'Suspects the 500-iugera figure may be retrojected from later Gracchan debates.',
      },
    ],
    connects: ['gallic-sack-390bce', 'lex-canuleia-445bce', 'plebs-secession-494bce'],
  },
  {
    id: 'farming-soldier-350bce',
    year: -350,
    dateNote: 'c.',
    era: 'early-republic',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Farm, Census, Legion',
    headline:
      'The Roman army is a property qualification with weapons: the same smallholding that feeds a family determines the right — and the duty — to fight for the Republic.',
    tags: ['economic', 'social'],
    body: `The Republic's army was not an institution separate from society; it was society, filtered by the census. Citizens with enough property to arm themselves — the *assidui*, the 'settled men' — owed military service, and the census class a man's farm put him in determined what equipment he brought and where he stood in the line. Below them, citizens with no property worth counting were the *proletarii*, assessed by their offspring alone, and were left out of the legions except in emergencies. The logic was explicit: men defend what they own.

For the farmer himself, the system was one interlocking annual rhythm. War was seasonal — a summer levy raised after sowing, campaigning within a few days' march of home, discharge in time for harvest. Victory paid in booty and, above all, in land: conquered territory went to colonies of smallholder-soldiers, each new settlement a farm belt that was also a garrison. Farm sustained soldier, soldier won farms, farms bred the next census class of soldiers. Landholding, military duty, and political voice formed a single circuit, and every part of Rome's constitution assumed it.`,
    whyItMatters: `This unit — farm, census, legion — is the load-bearing wall of the whole Republican edifice, and its eventual failure is the Republic's crisis compressed into one sentence. The system worked while wars were short and Italian. When wars became overseas and yearslong, the same service that once reinforced the farm destroyed it: the soldier in Spain could not plow, his family sold out to the slave-worked estates of the rich, and the census class that supplied the legions shrank while commitments grew. Every structural account of the Republic's fall — the Gracchan land bills, Marius opening the ranks to the propertyless, armies loyal to paymasters — starts from the breaking of this circuit.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium', 'campania'],
    sources: [
      {
        author: 'Polybius',
        work: 'Histories VI',
        note: 'Describes the levy and census classes as they stood in the second century; the earlier system is inferred backward.',
      },
      { author: 'Mary Beard', work: 'SPQR' },
    ],
    connects: ['servius-tullius-578bce', 'licinio-sextian-367bce', 'client-patron-460bce'],
  },
  {
    id: 'samnite-wars-343bce',
    year: -343,
    yearEnd: -290,
    era: 'early-republic',
    weight: 2,
    reliability: 'contested',
    title: 'The Samnite Wars',
    headline:
      'Half a century of grinding war against the Apennine highlanders — including one of the most humiliating defeats in Roman history — ends with central Italy Roman.',
    tags: ['military'],
    body: `Between 343 and 290 Rome fought three wars against the Samnites, the tough Oscan-speaking confederation of the central-southern Apennines — a people holding more territory and likely more manpower than Rome when the fighting began. The prize between them was Campania, the richest agricultural land in Italy, whose great city Capua appealed to Rome for protection in 343. Fifty years later Samnium was ringed with Roman colonies and bound into the Roman system, and no Italian people could any longer fight Rome alone. It was the longest, hardest thing the Republic had yet done, and Rome lost battles all the way through.

The worst came in 321 at the Caudine Forks, when both consuls led the entire field army into a waterless mountain pass sealed at both ends. The Samnites did not even need to fight. The trapped army surrendered, and the Samnite commander made every Roman soldier — consuls first — strip and pass under a yoke of spears while the Samnite army watched: ritual humiliation in place of massacre. Rome, characteristically, treated the extorted peace as void and resumed the war.

The third war saw the desperate coalition Rome's rise had made logical — Samnites, Etruscans, Umbrians, and Gauls together — beaten at Sentinum in 295, the largest battle Italy had seen, where the consul Decius Mus ritually vowed himself and the enemy army to the gods of the underworld and charged to his death. Roman tradition also credited the Samnite mountains with forcing the army's great reform: the rigid phalanx giving way to the manipular legion, a checkerboard of small flexible blocks that could fight on broken ground. However gradual the reality, the memory encodes something true — the wars were Rome's military education.

The sources are the problem. Livy is our only continuous account, writing three centuries later from patriotic annalists; the First Samnite War may be partly invention, and more than one Roman defeat has plainly been laundered into a draw.`,
    whyItMatters: `What the Samnite Wars proved was not tactical superiority — the Samnites repeatedly out-generaled Rome — but that Rome had built a system whose defeats did not compound. Colonies anchored conquered ground; allies replaced every lost levy; and an aristocracy whose entire prestige economy ran on triumphs would not make peace from weakness. A state like that converts time itself into a weapon: it only has to win last. Pyrrhus and then Hannibal will each rediscover, at mounting cost, what the Samnites learned first — beating Roman armies is not the same thing as beating Rome.`,
    control: { campania: 'core', samnium: 'core' },
    markers: [{ type: 'battle', label: 'Caudine Forks', at: [14.55, 41.05] }],
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita VII–X',
        note: 'The only continuous narrative; parts of the First Samnite War may be annalistic duplication, and Roman reverses are visibly smoothed.',
      },
      {
        author: 'E. T. Salmon',
        work: 'Samnium and the Samnites',
        note: 'The standard modern account; reconstructs the Samnite side the Roman sources erase.',
      },
    ],
    connects: ['veii-396bce', 'gallic-sack-390bce', 'farming-soldier-350bce'],
  },
  {
    id: 'via-appia-312bce',
    year: -312,
    era: 'early-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Appian Way and the Appian Water',
    headline:
      "In a single censorship Appius Claudius builds Rome's first great road and first aqueduct — logistics poured in stone, aimed straight at the Samnite front.",
    tags: ['infrastructure', 'military'],
    body: `In 312, in the middle of the Second Samnite War, the censor Appius Claudius Caecus began two structures that outlasted every battle of it. The Via Appia ran from Rome to Capua — a hundred and thirty-two miles, engineered flat and straight, carried across the Pontine marshes on a causeway — and existed for one reason: to move legions to the Campanian front in days instead of weeks. The Aqua Appia, Rome's first aqueduct, brought clean water ten miles into the city, almost entirely underground where an enemy could not cut it.

Both were war infrastructure before they were anything else. Roman roads were built for armies and official messengers — graded for marching men and wagons, indifferent to commercial convenience — and the Appia became the template: conquer, then build the road, then plant colonies along it like knots on a cord. Later ages extended it to Brundisium, the gateway to Greece, and called it the *regina viarum*, queen of roads. Stretches of its paving still carry traffic.`,
    whyItMatters: `The road made Roman power permanent in a way victories could not. An enemy who beat a legion now faced the fact that the next legion could arrive faster than the victory could be exploited, and that every colony along the road was a fortress that did not go home in winter. Conquest-road-colony became the algorithm by which Italy, and later the provinces, were digested — and the aqueduct began the hydraulic engineering that would let Rome grow into a city of a million people, far past what any local water could support.`,
    control: {},
    sources: [
      {
        author: 'Frontinus',
        work: 'De Aquis',
        note: "By Rome's serving water commissioner, c. 100 CE — a practitioner's history of the aqueducts.",
      },
      {
        author: 'Livy',
        work: 'Ab Urbe Condita IX',
        note: "Hostile to Appius's populist politics; the censorship's works are not in dispute.",
      },
    ],
    connects: ['samnite-wars-343bce', 'tarquinius-priscus-616bce'],
  },
  {
    id: 'alliance-system-300bce',
    year: -300,
    dateNote: 'c.',
    era: 'early-republic',
    weight: 2,
    reliability: 'reconstructed',
    title: 'The Alliance System',
    headline:
      'Rome binds defeated Italy in a web of unequal treaties that demand no tribute — only soldiers — and quietly becomes the largest manpower pool in the Mediterranean.',
    tags: ['constitutional', 'military'],
    body: `Roman Italy around 300 BCE was not an empire on a map; it was a web of separate deals. Closest in were full Roman citizens, in Rome's own territory and in citizen colonies. Then came communities holding *civitas sine suffragio* — citizenship without the vote, its duties without its politics. Then the Latin colonies: self-governing towns of settlers with intermediate rights, planted at strategic points as permanent garrisons. Outermost stood the *socii*, the allies proper — Etruscan, Umbrian, Samnite, Greek — each bound to Rome by its own bilateral treaty, on terms reflecting how it had fought and how it had lost.

Two design choices made the web unbreakable. First, every treaty ran to Rome alone: allies had no formal relations with one another, so the system had a hub and spokes but no rim along which resistance could organize. Second, Rome took no regular tribute. What it demanded was troops — each community's quota, mustered on Roman order and serving under Roman command. Allied elites kept their cities, laws, and local power, and learned that Rome would reliably back them against their own restive lower classes. Loyalty was the cheapest available option.

The result was a state unlike anything in the Mediterranean. When Rome counted the resources of Italy against a Gallic threat in 225, Polybius reports a pool of some seven hundred thousand men able to bear arms — a figure no kingdom on earth could approach. Hellenistic monarchs hired their armies with silver and mourned each loss; Rome had converted every past defeat into a future levy.`,
    whyItMatters: `This is why Hannibal cannot win by winning battles. His entire strategy will be built on a reasonable premise — crush Roman armies, and the subject allies will defect — and the premise fails, because the allies were not taxed subjects waiting for liberation but stakeholders in unequal partnerships, with elites who owed their local positions to Rome. Because Roman power was allied manpower rather than treasure or territory, destroying a Roman army did not touch the thing that produced Roman armies. The alliance system made Rome the first Mediterranean state that could lose indefinitely and still win; every rival strategy of the next century breaks against that fact.`,
    misconception: {
      claim: 'Rome ruled Italy as an empire, taxing its conquered subjects.',
      correction:
        'Conquered Italians paid Rome no regular tribute at all — they owed soldiers. Rome monetized victory as manpower rather than revenue, which is why each conquest enlarged the army instead of the treasury, and why the system grew stronger with every war.',
    },
    control: {},
    sources: [
      {
        author: 'Polybius',
        work: 'Histories II',
        note: 'The manpower count of 225 BCE; the figures are debated, but the order of magnitude is the point.',
      },
      {
        author: 'T. J. Cornell',
        work: 'The Beginnings of Rome',
        note: 'Stresses that the "system" was accumulated improvisation, only later rationalized into design.',
      },
    ],
    connects: ['samnite-wars-343bce', 'veii-396bce', 'via-appia-312bce'],
  },
  {
    id: 'lex-hortensia-287bce',
    year: -287,
    era: 'early-republic',
    weight: 2,
    reliability: 'reconstructed',
    title: 'The Lex Hortensia',
    headline:
      'After one last secession of the plebs, plebiscites become binding law for every Roman — and the two-century Conflict of the Orders ends not in democracy but in a merged ruling class.',
    tags: ['constitutional', 'legal'],
    body: `In 287, in the exhausted aftermath of the Samnite wars, debt drove the plebs to the old weapon one final time: secession, this time to the Janiculum hill across the Tiber. A plebeian dictator, Quintus Hortensius, was appointed to resolve the crisis, and his law settled the constitutional question that had run underneath Roman politics for two centuries. Resolutions of the plebeian assembly — plebiscites — would henceforth bind the entire Roman people, patricians included, without ratification by the Senate. On paper, this is a revolution: the assembly of the plebs, presided over by tribunes, could now simply legislate for the state.

In practice, the revolution had already been absorbed. By 287 the tribunes were no longer strike leaders; they were ambitious young men from wealthy plebeian families, using the office as a rung toward the consulship their fathers and uncles now regularly held. The nobility that governed Rome was patrician-plebeian, fused by marriage and shared office since 445 and 367. And the assemblies themselves were nothing like popular sovereignty in the modern sense: they met only when a magistrate summoned them, voted only on what he put before them, in blocs rather than by head, without debate.

Historians take 287 as the conventional end of the Conflict of the Orders, and the convention is fair — after it, no constitutional distinction between the orders mattered. What the long conflict produced was not a democracy but a widened oligarchy with popular machinery attached, and a Senate whose authority rested on prestige and habit rather than law.`,
    whyItMatters: `The Lex Hortensia shows how Rome metabolized revolution: every plebeian victory was real, and every one was absorbed by co-opting the men who won it into the class they had fought. The result was an oligarchy of extraordinary stability wearing popular clothes. But note what was left lying in the constitution — a legally sovereign assembly that custom, not law, kept subordinate to the Senate. For a century and a half nobody tested the gap between the paper constitution and the real one. When the Gracchi finally did, in 133, both sides discovered that Rome had never actually decided who was in charge — and there was no umpire but violence.`,
    misconception: {
      claim: 'By 287 BCE the plebeians had won equality and Rome became a democracy.',
      correction:
        'Rich plebeians won entry into the ruling class; poor ones got debt relief and symbolism. Assemblies voted in blocs, without debate, only on what magistrates proposed. Rome after 287 was a broadened oligarchy of old and new families — stable, but nothing like a democracy.',
    },
    control: {},
    sources: [
      {
        author: 'Livy',
        work: 'Periochae XI',
        note: "The full narrative fell in Livy's lost books; the ending of the Conflict is reconstructed from late summaries and jurists.",
      },
      {
        author: 'T. J. Cornell',
        work: 'The Beginnings of Rome',
        note: 'Emphasizes that the "closed patriciate" the plebs defeated was itself a fairly recent construction.',
      },
    ],
    connects: ['plebs-secession-494bce', 'licinio-sextian-367bce', 'twelve-tables-451bce'],
  },
  {
    id: 'pyrrhus-280bce',
    year: -280,
    yearEnd: -275,
    era: 'early-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Pyrrhus Invades Italy',
    headline:
      'Tarentum hires the best general of the age; he beats Rome twice, coins a proverb, and discovers that winning battles against this republic purchases nothing.',
    tags: ['military'],
    body: `In 280 Rome collided with the Hellenistic world for the first time. Tarentum, the rich Greek city in Italy's heel, alarmed by Roman garrisons creeping into the Greek south, called in a professional: Pyrrhus, king of Epirus, kinsman of Alexander's line and by reputation the finest battlefield commander alive. He landed with some twenty-five thousand veterans of the Macedonian school and twenty war elephants — animals no Roman had ever seen. At Heraclea that year the elephants broke the Roman cavalry and won him the field, at the cost of casualties he could not spare. At Asculum in 279 he won again, at the same price. Plutarch preserves the remark that named the phenomenon: one more such victory and he would be ruined.

What happened between the battles mattered more. Pyrrhus sent his diplomat Cineas to Rome expecting the normal Hellenistic sequel — a negotiated peace with the loser. The Senate wavered until Appius Claudius Caecus, ancient and blind, had himself carried into the chamber to insist that Rome never negotiate while a foreign enemy stood on Italian soil. The offer died; Rome, its losses already replaced from the allied levy, raised new armies. Meanwhile Rome and Carthage — each alarmed by the king — signed a pact against him, the last time those two powers would ever cooperate.

Pyrrhus detoured to Sicily for three years to fight Carthage, nearly conquered the island, alienated his Greek allies, and returned to Italy weaker. At Beneventum in 275 the Romans finally held him to a standstill, and he sailed home with a third of his army, reportedly observing what a battlefield he was leaving to Rome and Carthage. He died three years later in street fighting in Argos, felled by a roof tile thrown by an old woman. The Hellenistic world took note of the strange Italian republic: in 273 Ptolemy II of Egypt, the richest monarch alive, opened formal diplomatic relations with Rome.`,
    whyItMatters: `The Pyrrhic War is the first controlled experiment matching Hellenistic state design against Roman: the best professional army of the age, twice victorious in the field, and strategically bankrupt within five years — because Rome would not negotiate after losing and could not be made to run out of men. Every Hellenistic war ended in a bargained peace; Rome refused to speak the genre's language, and the refusal hardened into doctrine that Hannibal would meet at its full strength. The Greek east got a clear early warning about what was growing in Italy, and filed it away unread.`,
    misconception: {
      claim: "Rome beat Pyrrhus in battle — that's why we say 'Pyrrhic victory' for a hollow win.",
      correction:
        'Pyrrhus won his two great battles outright; the phrase means a real victory whose cost destroys the victor. Rome won the war, not the battles — by refusing to negotiate and replacing losses from the allied levy faster than the best army of the age could inflict them.',
    },
    control: {
      epirus: 'rival-hellenistic',
      macedonia: 'rival-hellenistic',
      achaea: 'rival-hellenistic',
      aegyptus: 'rival-hellenistic',
      syria: 'rival-hellenistic',
      asia: 'rival-hellenistic',
      'africa-proconsularis': 'rival-carthage',
      'magna-graecia': 'contested',
    },
    markers: [
      { type: 'battle', label: 'Heraclea', at: [16.67, 40.21] },
      { type: 'battle', label: 'Asculum', at: [15.56, 41.21] },
    ],
    sources: [
      {
        author: 'Plutarch',
        work: 'Life of Pyrrhus',
        note: 'Written some 350 years later, drawing on the contemporary historian Hieronymus of Cardia; the famous quotations are literary tradition.',
      },
      { author: 'Mary Beard', work: 'SPQR' },
    ],
    connects: ['samnite-wars-343bce', 'alliance-system-300bce', 'via-appia-312bce'],
  },
  {
    id: 'tarentum-272bce',
    year: -272,
    era: 'early-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Tarentum Falls; Italy Is Roman',
    headline:
      'The Epirote garrison hands over Tarentum, and every community from the Arno to the strait is bound into the Roman system — the peninsula becomes one military organism.',
    tags: ['military'],
    body: `Pyrrhus had sailed home in 275, but his garrison under Milo still held Tarentum. In 272, with a Roman army outside the walls and — ominously for the future — a Carthaginian fleet hovering offshore, Milo negotiated his own withdrawal and handed the city to the consul. Tarentum, the last great independent Greek city of Italy, kept its self-government and its Greek life, lost its foreign policy and stretches of its walls, and entered the alliance as a naval ally, owing Rome ships and crews instead of legionaries. The wars that had begun with Veii four generations earlier were effectively over: everything from Etruria to the strait of Messina was now inside the Roman web.

The mop-up wrote the system's signature across the map. Final Samnite, Lucanian, and Bruttian resistance was extinguished; Picenum was absorbed; and the conventional endpoint came in 264 with the reduction of Etruscan Volsinii. Colonies pinned the new geometry — including Beneventum, planted in Samnite country in 268 at a place called Maleventum, 'ill wind,' which the Romans, superstitious even in town-planning, renamed 'fair wind.' Roman citizens now numbered close to three hundred thousand adult males, with the allied levy behind them: a reservoir of force no Mediterranean state could match.

What Rome now was had no precedent and no name. Not a city-state, not a territorial kingdom, not a league — a hegemonic web whose whole design converted Italian population into deployable armies. One conspicuous gap remained: Rome had almost no fleet. The sea belonged to Carthage, two miles from the peninsula's tip across the strait.`,
    whyItMatters: `Unification made the Punic collision close to inevitable, as a matter of geometry: with the peninsula consolidated, Rome's frontier became a coastline, and across the narrowest strip of water sat the other organizing power of the western Mediterranean. Holding the Greek south also made Rome a Greek-world power, inheriting Greek quarrels and Greek enemies along with Greek cities. When Messana appealed to Rome eight years later, the machine assembled between Veii and Tarentum — the alliance web, the colonies, the bottomless levy — was simply pointed outward. The empire is this system, applied offshore.`,
    control: {
      etruria: 'core',
      umbria: 'core',
      picenum: 'core',
      apulia: 'core',
      'lucania-bruttium': 'core',
      'magna-graecia': 'core',
    },
    markers: [{ type: 'political', label: 'Tarentum surrenders', at: [17.24, 40.47] }],
    sources: [
      {
        author: 'Cassius Dio',
        work: 'Roman History (Zonaras epitome)',
        note: "The surrender narrative survives only in a Byzantine monk's summary of Dio — a reminder of how thin the thread is even for major events.",
      },
      {
        author: 'T. J. Cornell',
        work: 'The Beginnings of Rome',
        note: 'On the census figures and the unprecedented, unclassifiable shape of the Roman commonwealth by 264.',
      },
    ],
    connects: ['pyrrhus-280bce', 'samnite-wars-343bce', 'alliance-system-300bce'],
  },
];
