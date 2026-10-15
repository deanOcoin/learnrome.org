// 133-62 BCE, Tiberius Gracchus to Pompey's return. deltas follow manifest B exactly

import type { RomeEvent } from '../../types';

export const LATE_REPUBLIC_A_EVENTS: RomeEvent[] = [
  {
    id: 'pergamon-133bce',
    year: -133,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Attalus III Wills Pergamon to Rome',
    headline: 'A childless Greek king leaves his entire kingdom to the Roman people in his will, and the richest province Rome ever acquired arrives without a war.',
    tags: ['economic', 'constitutional'],
    body: `In 133 BCE Attalus III of Pergamon, childless king of one of the wealthiest states in the Greek east, died and named the Roman people his heir. Rome had annexed territory by conquest, by treaty, and by opportunistic seizure; it had never before inherited a kingdom. After putting down a four-year rising led by the pretender Aristonicus — who armed slaves and proclaimed a utopian "City of the Sun" — Rome organized western Asia Minor as the province of Asia: dense with old Greek cities, commerce, and taxable wealth, and acquired without a single Roman campaign of conquest.

Why a king would give his state away is less strange than it sounds. The Attalids owed their position to Rome since the Treaty of Apamea in 188 had carved up Seleucid Asia Minor in their favor. Attalus had no heir; a contested succession would have invited exactly the war of neighbors that the will forestalled. Handing the kingdom to Rome converted an inevitable absorption into an orderly one — though the fact that Aristonicus found an army among the poor and unfree suggests how the countryside felt about the arrangement.

What Rome did with the gift mattered more than the gift. Tiberius Gracchus immediately proposed spending the Attalid treasury on his land commission — trespassing on the Senate's traditional control of finance and foreign policy in the same motion. A decade later, Gaius Gracchus's legislation put the right to collect Asia's tithe up for auction at Rome. Companies of publicani — private tax contractors drawn from the equestrian order — bid a lump sum in advance, then went east to recover it from the provincials with a margin, and with interest on arrears. Governors who obstructed the companies made powerful enemies; most partnered with them or looked away.

Asia became the great prize of the equestrian order: the place where Roman money was made, and the reason a class of wealthy non-senators acquired a direct financial stake in how the empire was run.`,
    whyItMatters: `The bequest changed what a province was for. Sicily had been a strategic acquisition that happened to pay; Asia was a revenue stream with a garrison attached, and it created a Roman interest group — the publicani and their equestrian backers — whose fortunes depended on extraction and who would fight in the courts and assemblies for the right to keep extracting. Nearly every institutional battle of the next generation, from jury composition to tax-contract relief, is a fight over who profits from Asia. The invoice for the squeeze arrived in 88 BCE, when the province's cities helped massacre their Roman residents in a single day.`,
    control: { asia: 'provincial' },
    connects: ['magnesia-190bce', 'publicani-140bce', 'carthage-corinth-146bce'],
    sources: [
      { author: 'Livy', work: 'Periochae 58–59', note: 'Only a late epitome survives for these years; the narrative is skeletal.' },
      { author: 'Sallust', work: 'Histories (fragments)', note: 'Preserves a letter of Mithridates claiming Rome forged such royal wills — enemy propaganda, but a reminder of how conveniently the bequest served Rome.' },
      { author: 'Mary Beard', work: 'SPQR' },
    ],
  },
  {
    id: 'gracchus-tiberius-133bce',
    year: -133,
    era: 'late-republic',
    weight: 3,
    reliability: 'well-attested',
    title: 'Tiberius Gracchus Is Killed',
    headline: 'A tribune pushing land reform stands for re-election and is beaten to death by senators wielding broken bench-legs — the first lethal political violence in Rome in three centuries.',
    tags: ['constitutional', 'social'],
    body: `In 133 BCE the tribune Tiberius Sempronius Gracchus proposed a land law enforcing an old and universally ignored cap on holdings of public land, with the surplus to be distributed in small plots to landless citizens. When a fellow tribune, Marcus Octavius, vetoed it, Tiberius had the assembly vote Octavius out of office — something no one had ever done — and passed the law. When he then stood for an immediate second tribunate to protect it, a crowd of senators led by his own cousin, the pontifex maximus Scipio Nasica, clubbed him and some three hundred of his followers to death with benches and staves on the Capitol. The bodies went into the Tiber by night. Rome had not seen a citizen killed over politics in three centuries.

The grievance Tiberius took up was real and old. The public land Rome had confiscated across Italy was supposed to be capped at roughly 500 iugera per holder under the Licinio-Sextian rules of 367; in practice the rich had absorbed it into vast estates worked increasingly by slaves. Ancient writers connected this to a shrinking class of smallholder-soldiers and a recruitment crisis — Plutarch has Tiberius radicalized by riding through Etruria and seeing barbarian slave gangs where citizen farmers should have been. That journey is a literary set piece, and modern historians argue about how far the census figures record demographic collapse rather than registration failure. But the political charge of the issue in 133 is not in doubt.

What made Tiberius lethal to his opponents was method, not policy. Taking a bill straight to the assembly without the Senate's blessing was legal but confrontational. Deposing Octavius broke the tribunate's basic convention. Proposing to fund his commission from Attalus's bequest reached into the Senate's control of finance and foreign affairs. Standing for re-election looked like a bid for permanent personal power. Each step had an arguable precedent; the sequence looked like a man dismantling every check that applied to him.

The response had no legal form at all. There was no emergency decree, no trial, no magistrate acting under any recognized power — the chief priest of the Roman state led a lynch mob. Yet the aftermath is telling: the land commission went on functioning, distributing land for years. The Senate had objected to the man and his momentum more than to his policy. Nasica, awkwardly, was sent on a mission to Asia, where he died; no one was ever prosecuted.`,
    whyItMatters: `The Republic had no police force and no soldiers inside the city; its politics ran on self-restraint, and the restraint held for three hundred years because no one had tested it. In 133 the test came back: killing a tribune of the plebs — the sacrosanct office built to be untouchable — cost the killers nothing. Once political murder proved cost-free, every subsequent actor priced it in, and the escalation runs in a straight line: an emergency decree and three thousand dead in 121, street gangs and lynched tribunes in 100, an army marching on the city in 88. The furniture came first; the legions were the same logic with better equipment.`,
    misconception: {
      claim: "Tiberius Gracchus was a dangerous revolutionary trying to overthrow the Republic.",
      correction: "He was a well-connected aristocrat using the tribunate's real legal powers for a reform the Senate half-accepted — his land commission kept working for years after his death. What was genuinely new in 133 was not the land bill but the response: the Republic's first political massacre.",
    },
    control: {},
    connects: ['latifundia-crisis-180bce', 'licinio-sextian-367bce', 'numantia-143bce', 'pergamon-133bce'],
    sources: [
      { author: 'Plutarch', work: 'Life of Tiberius Gracchus', note: 'Written over two centuries later, from partisan pamphlets on both sides; the Etruria journey is a literary set piece.' },
      { author: 'Appian', work: 'Civil Wars I', note: 'Appian chose 133 as the opening of his history of the civil wars — the framing of this event as "the beginning of the end" is partly his design.' },
      { author: 'Mary Beard', work: 'SPQR', note: 'Cautions that the manpower-crisis explanation the ancient sources give for the land bill is weaker than it looks.' },
    ],
  },
  {
    id: 'insulae-urban-100bce',
    year: -125,
    dateNote: 'c.',
    era: 'late-republic',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Insulae: Housing a Pre-Industrial Megacity',
    headline: 'Most Romans lived stacked in rented apartment blocks that burned and collapsed routinely, while the rich lived at street level behind windowless walls.',
    tags: ['daily-life', 'social'],
    body: `By the late second century BCE Rome was growing toward half a million people, swollen by migrants from an Italian countryside being reorganized into slave-worked estates. Almost none of them lived in houses. The typical Roman home was a rented room in an insula — a timber-and-rubble apartment block of four, five, or more storeys, with shops on the ground floor and the poorest tenants at the top, farthest from the water supply and nearest the fires. The wealthy lived in the domus: a single-family courtyard house, inward-facing and nearly windowless, often standing directly beside the tenements. Rome had no zoning.

The economics were brutal. Land inside the city was scarce, so landlords built high and cheap; collapses and fires were ordinary events, and rent consumed much of a poor family's income. Crassus famously built part of his fortune buying burning and collapsed properties at panic prices. Subletting chains meant the person you paid was rarely the person who owned the building.

Honesty requires a caveat: the well-preserved insulae archaeologists actually walk through are at Ostia and date from the empire. The Republic-era city is reconstructed from literary complaints, legal texts on collapse and rent, and fragments — the picture is confident in outline, thin in detail.`,
    whyItMatters: `Late-republican politics is a competition for the people who lived in these buildings. Rent-burdened, fire-prone, dependent on grain shipped in and sold by others, the insula population was the constituency behind the grain laws, the street gangs, and the games — and its precariousness is why those tools worked. You cannot understand why a free grain dole or a spectacular set of games translated into political power until you know how the electorate lived.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium'],
    connects: ['latifundia-crisis-180bce', 'slavery-captives-195bce'],
    sources: [
      { author: 'Plutarch', work: 'Life of Crassus', note: 'The fire-sale anecdote is moralizing biography; treat the mechanism as real, the details as polished.' },
      { author: 'Mary Beard', work: 'SPQR', note: 'Emphasizes how much of our physical evidence for ordinary housing is imperial-era Ostia projected backward.' },
    ],
  },
  {
    id: 'gracchus-gaius-123bce',
    year: -123,
    yearEnd: -121,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Gaius Gracchus and the First Emergency Decree',
    headline: 'Ten years after his brother’s murder, Gaius Gracchus builds a legislative coalition the Senate cannot outvote — so the Senate invents a decree that licenses killing him.',
    tags: ['constitutional', 'social'],
    body: `Gaius Gracchus, tribune in 123 and again in 122 BCE, was a more dangerous proposition than his brother because he thought in systems. His legislation stabilized the price of grain in the city, built roads, planted colonies — including one, provocatively, on the cursed site of Carthage — transferred the juries of the extortion court from senators to equestrians, and auctioned the tax contracts of Asia at Rome. Each measure recruited a constituency: the urban poor, the Italian businessmen, the equestrian order. He also proposed extending citizenship to the Latins. That measure failed, and the failure would return with interest a generation later.

In 121, with Gaius out of office and his colonial law under attack, a scuffle at a public meeting left a consul's attendant dead. The Senate passed something new: the senatus consultum ultimum, a resolution instructing the consul Opimius to "see to it that the state comes to no harm." Under its cover Opimius raised armed men, stormed the Aventine where Gaius and his ally Fulvius Flaccus had gathered, and killed them — Gaius by the hand of his own slave, at his order, as the hunters closed in. Roughly three thousand of their followers were executed afterward, without trial. Opimius was prosecuted, and acquitted; he then built a temple of Concord in the Forum, on which someone scratched that discord had built it.

The pattern set in 133 was now armored in legal form. The Republic had found a way to authorize, retroactively and vaguely, the killing of citizens — and had established that a magistrate who used it would walk.`,
    whyItMatters: `The senatus consultum ultimum is the constitutional legacy of the Gracchi, and it belonged to their enemies. From 121 onward the Republic possessed a tool for converting political crisis into licensed violence — used against Saturninus in 100, against Catiline's men in 63, brandished against Caesar in 49 — and every use taught populares politicians that the Senate would kill rather than lose. Gaius's other legacy cut just as deep: by handing the equestrians the courts and the Asian taxes, he built a permanent structural rivalry between the two rich classes of Rome, which every later crisis would exploit.`,
    control: {},
    connects: ['gracchus-tiberius-133bce', 'pergamon-133bce', 'publicani-140bce'],
    sources: [
      { author: 'Plutarch', work: 'Life of Gaius Gracchus', note: 'Paired and shaped as tragedy with his brother’s life; the dramatic arc is Plutarch’s.' },
      { author: 'Appian', work: 'Civil Wars I', note: 'Opimius’s acquittal, which Appian records, suggests contemporaries accepted the decree’s legality — the outrage is partly retrospective.' },
    ],
  },
  {
    id: 'narbonensis-121bce',
    year: -121,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Province: Gallia Narbonensis',
    headline: 'Rome annexes the Mediterranean coast of Gaul to secure the land road to Spain — and calls it simply “the Province,” a name the region still wears as Provence.',
    tags: ['military', 'infrastructure'],
    body: `In the 120s BCE Rome answered appeals from its old ally Massilia (Marseille) against raiding Gallic neighbors, and the answering campaigns hardened into annexation. Roman armies broke the Saluvii, then the Allobroges and the Arverni — the last in a battle at the Rhône in 121 in which the Arvernian king Bituitus was captured — and the coastal strip from the Alps to the Pyrenees became the province later called Gallia Narbonensis. At the time Romans mostly called it provincia, the province, which is all it needed to be: the land bridge between Italy and the Spanish provinces.

What Rome built there says what it wanted. The Via Domitia, the first Roman road in Gaul, ran the length of the coast toward Spain; the citizen colony of Narbo Martius (Narbonne) followed in 118, planted on the road. In the same decade Metellus subdued the Balearic islands, clearing pirate bases and settling Roman colonists — the western sea lanes and the land route now both ran under Roman control.

Beyond the province, Gaul remained a patchwork of independent Celtic peoples — Aedui, Arverni, Sequani and the rest — now with a Roman border to trade across, borrow from, and eventually be invaded from.`,
    whyItMatters: `Narbonensis is annexation as infrastructure: the province existed to carry a road, and the road existed because empire in Spain demanded a secure route to it. Conquest was beginning to generate its own necessities — each acquisition requiring the next — and the new frontier did double work in the sequel. It gave the migrating Cimbri a Roman target within reach in 105, and it gave Caesar the legal platform and the launching ramp from which he entered free Gaul in 58.`,
    control: {
      'gallia-narbonensis': 'provincial',
      baleares: 'provincial',
      'gallia-aquitania': 'rival-celtic',
      'gallia-lugdunensis': 'rival-celtic',
      'gallia-belgica': 'rival-celtic',
    },
    connects: ['scipio-spain-209bce', 'gallic-sack-390bce'],
    sources: [
      { author: 'Strabo', work: 'Geography', note: 'Writing under Augustus, when the province was long settled; his picture is retrospective.' },
      { author: 'Livy', work: 'Periochae 61', note: 'The epitome preserves little more than the victories and the triumphs.' },
    ],
  },
  {
    id: 'jugurthine-112bce',
    year: -112,
    yearEnd: -105,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Jugurtha: A City for Sale',
    headline: 'A Numidian usurper buys acquittals and delays in Rome itself, until a massacre of Italian traders forces a war that makes Marius and Sulla.',
    tags: ['military'],
    body: `Numidia, the Berber kingdom bordering Rome's African province, had been a loyal client since its founder Masinissa fought beside Scipio at Zama. When the succession fractured in the 110s BCE, the ruthless and Roman-educated prince Jugurtha killed one co-heir, besieged another in the city of Cirta, and in taking it in 112 massacred the Italian merchants who had helped defend it. That made war unavoidable — but for years it was a war Rome conducted with astonishing limpness, and the explanation contemporaries reached for was bribery. Commissions sent to divide the kingdom came back rich; a commander granted Jugurtha absurdly gentle terms; summoned to Rome under safe conduct, Jugurtha arranged the murder of a rival claimant inside the city and left unpunished. Sallust gives him the exit line: a city for sale, and doomed the moment it finds a buyer.

The war sharpened when a Roman army under Aulus Postumius was defeated and sent under the yoke in 109 — a humiliation Rome had not swallowed in living memory. Metellus, a competent aristocrat, ground Jugurtha down without catching him. His ambitious legate Gaius Marius, a novus homo — the first man of his family to reach the Senate — campaigned for the consulship on the claim that the nobility was prosecuting the war for its own convenience. Elected for 107, he received the African command not by senatorial assignment but by a vote of the people, an ominous novelty.

The end came by treachery rather than battle. Marius's quaestor, a dissolute young patrician named Lucius Cornelius Sulla, persuaded King Bocchus of Mauretania to betray his son-in-law. Jugurtha was handed over in 105, walked in Marius's triumph in 104, and was strangled in the Tullianum prison. Sulla commemorated the capture on his seal ring — the first scene in a rivalry that would one day fill Rome with corpses.`,
    whyItMatters: `The Jugurthine War mattered less for Africa than for what it did to Roman politics. It made the career of Marius and gave Sulla his start; more corrosively, it made "the nobility is for sale" a winning electoral argument and established that the people could strip the Senate of its most jealously guarded prerogative — assigning military commands — and hand one to their favorite. The extraordinary commands of the next generation, from Pompey's pirate war to Caesar's Gaul, all walk through the door opened in 107.`,
    control: { numidia: 'contested' },
    connects: ['zama-202bce', 'carthage-corinth-146bce'],
    sources: [
      { author: 'Sallust', work: 'The Jugurthine War', note: 'Our main narrative, written decades later by a partisan of Caesar; the corruption of the nobility is his thesis as much as his finding.' },
      { author: 'Plutarch', work: 'Life of Marius' },
      { author: 'Adrian Goldsworthy', work: 'In the Name of Rome' },
    ],
  },
  {
    id: 'cimbri-teutones-113bce',
    year: -113,
    yearEnd: -101,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'The Cimbri and Teutones',
    headline: 'Migrating northern peoples destroy five Roman armies in twelve years — and at Arausio Rome loses more men in a day than it lost at Cannae.',
    tags: ['military'],
    body: `In 113 BCE a Roman army was mauled at Noreia, in the eastern Alps, by peoples no Roman had heard of: the Cimbri and Teutones, whole nations on the move with wagons, families, and herds, probably from the Jutland peninsula — though the sources wrote long afterward and guessed. For the next decade they wandered along Rome's northern margins, and every army sent against them was beaten. The catastrophe came at Arausio (Orange) in the new Gallic province in 105: two consular armies whose commanders — one an arrogant noble, the other a new man the noble refused to obey — camped apart and were destroyed separately. Ancient figures claim eighty thousand dead or more. The numbers are unverifiable, but even discounted, Arausio stood with Cannae, and this time there was no Hannibal to negotiate with — only a moving wall of people who might turn toward Italy at any season.

Rome panicked in an old key: the terror of the Gauls who had burned the city in 390 revived and attached itself to the newcomers. What saved Rome, in the short run, was luck — the victors turned toward Spain instead of Italy, buying years Rome had done nothing to earn. What saved it in the longer run was the panic itself, which swept aside constitutional scruple: Marius, the people's general, was re-elected consul year after year, in absentia and against law and custom, to rebuild the army.

The disaster also had a domestic casualty list. The noble commander at Arausio, Caepio — already notorious for the disappearance of a fabulous captured treasure, the Gold of Tolosa — was stripped of his imperium and later convicted, his fortune confiscated: aristocratic incompetence now carried a political price the assemblies were willing to exact.`,
    whyItMatters: `Arausio, not any reformer's argument, is why Rome accepted Marius's serial consulships and his propertyless volunteer legions: existential fear suspends constitutional habit, and what the emergency normalizes stays normal. The invasion also fixed a template in the Roman mind — the north as a bottomless reservoir of huge, terrifying peoples — that shaped policy for centuries. When Caesar needed a pretext against the Helvetii and Ariovistus in 58, he reached for the Cimbri; the fear was still good.`,
    control: { 'germania-magna': 'rival-germanic' },
    markers: [
      { type: 'battle', label: 'Arausio, 105 BCE', at: [4.81, 44.14] },
    ],
    connects: ['gallic-sack-390bce', 'narbonensis-121bce'],
    sources: [
      { author: 'Livy', work: 'Periochae 67', note: 'The epitome preserves the casualty figure; ancient battle numbers of this size are conventionally inflated.' },
      { author: 'Plutarch', work: 'Life of Marius', note: 'Written two centuries later; the ethnography of the invaders is already half legend.' },
    ],
  },
  {
    id: 'marius-reform-107bce',
    year: -107,
    era: 'late-republic',
    weight: 3,
    reliability: 'well-attested',
    title: 'Marius Recruits the Head Count',
    headline: 'Needing troops for Africa with the draft pool exhausted, Marius enrolls volunteers who own nothing — and the legions begin their long migration from the state’s army to somebody’s army.',
    tags: ['military', 'constitutional', 'social'],
    body: `In 107 BCE the new consul Gaius Marius, raising troops for the war against Jugurtha, set aside the property qualification that had always defined the Roman levy and accepted volunteers from the capite censi — the "head count," citizens with nothing to their name but themselves. The change looked administrative. It was the most consequential single decision of the late Republic: it began the conversion of Rome's citizen militia into a professional army whose loyalty followed its paymaster.

The property qualification had a logic. The Republic's army was a militia of stakeholders: men fought because they owned a piece of what was being defended, equipped themselves, and went home to their farms when the campaign ended. But the qualification assumed a countryside of smallholders, and that countryside had been eroding for a century — eaten by the growth of slave-worked estates, by ruinously long service in Spain, by migration to the city. The censors had already lowered the property threshold repeatedly during the second century. Marius did not so much break a rule as stop pretending it still described anything. Modern scholars debate how deep the demographic crisis actually ran — the census figures may record a failure to register more than a failure to exist — but the recruiting officer's problem in 107 was real either way.

What Marius created was a career. His volunteers served not for a season but for years on end — sixteen or more became normal — as long-service professionals equipped by the state. The accompanying reforms, completed over the following decade, made the profession recognizable: the cohort replacing the maniple as the tactical unit, the silver eagle as each legion's single sacred standard, and the soldier's pack redesigned so an army could move without a mule train — the men called themselves Marius's mules. For a man from the head count, the bargain was real: pay, however thin, a share of plunder, a trade, and standing in a unit that became his family. Against a rented room in the insulae and day labor at the docks, sixteen years under the eagle could look like a rise in the world.

The fatal omission was the pension. The Senate never created any regular provision for discharged veterans; land grants for old soldiers were fought through, bill by bitter bill, as partisan measures — Marius needed the demagogue Saturninus to force his veterans' settlements through in 100, at the cost of riots. So every general who wanted his men provided for had to extort the provision personally, from a hostile Senate, by political muscle. The soldier's future depended not on Rome but on his commander's success — and the soldier understood this perfectly.`,
    whyItMatters: `The reform is usually told as Marius's act, but the Senate's inaction is the half that killed the Republic. Opening the legions to the poor changed who served; the refusal to fund their discharge decided whom they would serve. For the next seventy years the army was a chain of private client bodies wearing state insignia, and each showdown — Sulla's march, Caesar's Rubicon — is at bottom a pension negotiation conducted with legions. No law of the old constitution was repealed. The incentive structure beneath the constitution simply inverted, which is why no one could point to the moment the Republic broke: on paper, nothing had changed.`,
    misconception: {
      claim: "The Roman legions were always a professional standing army of career soldiers.",
      correction: "For nearly four centuries the legions were a conscript militia of property-owning citizens who supplied their own gear and went home after the campaign. The career volunteer army only begins here, in 107 BCE — and it took another 75 years, until Augustus, to build the state pension system that made such an army safe to have.",
    },
    control: {},
    connects: ['latifundia-crisis-180bce', 'gracchus-tiberius-133bce', 'cimbri-teutones-113bce', 'jugurthine-112bce'],
    sources: [
      { author: 'Sallust', work: 'The Jugurthine War', note: 'Near-contemporary and hostile to the senatorial nobility; he presents the enrollment as ambition, not necessity.' },
      { author: 'Plutarch', work: 'Life of Marius' },
      { author: 'P. A. Brunt', work: 'Italian Manpower 225 BC–AD 14', note: 'Argues the census evidence undermines the simple story of a destroyed peasantry — the reform formalized a long drift more than it broke a dam.' },
    ],
  },
  {
    id: 'marius-consulships-104bce',
    year: -104,
    yearEnd: -100,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Five Consulships in a Row',
    headline: 'With the Cimbri loose in the west, Rome re-elects Marius year after year — saving itself by normalizing the indispensable man.',
    tags: ['military', 'constitutional'],
    body: `From 104 to 100 BCE Gaius Marius held the consulship five years running — six in all counting 107 — in flat contradiction of the rules on iteration and, at first, in absentia, both supposedly impossible. Nobody pretended this was regular; the defense was simply that only Marius could stop the Cimbri, and the defense was accepted. He used the years to finish remaking the army: cohort tactics, the eagle standards, standardized state-issued equipment, the marching pack. Then he delivered. In 102 the Teutones were annihilated at Aquae Sextiae in southern Gaul — the ground reportedly so enriched with the dead that the local vineyards became famous. In 101, at Vercellae in northern Italy, Marius and his patrician colleague Catulus destroyed the Cimbri. The northern terror was over; the credit fight between the two commanders was just beginning.

Numidia, meanwhile, was settled the Roman way — no annexation, but a compliant client on the throne and King Bocchus of Mauretania rewarded for his betrayal of Jugurtha with a slice of the kingdom.

Victory left Marius with the problem his own reform had created: thousands of landless veterans owed farms. The Senate would not act, so Marius allied with the tribune Saturninus, a genuine street-fighting demagogue, whose land bills passed through intimidation and riot. In 100 the alliance curdled: Saturninus's men clubbed a rival candidate to death in open assembly, the Senate passed the emergency decree, and Marius — the popular hero — found himself obliged to suppress his own allies. Saturninus and his followers surrendered to Marius's custody and were lynched anyway, tiles torn from the Senate house roof raining down on them. Marius's political credit died with them, and he spent the next decade in eclipse.`,
    whyItMatters: `The five consulships proved the Republic would trade any rule for security — iteration bans, election in absence, collegial equality, all waived under fear, and all waived for one man rather than for an institution. And the sordid end of 100 BCE completed the demonstration begun in 133: veterans' land could not pass without violence, the Senate would honor no promise it could evade, and the emergency decree could devour even the men who had ridden the mob. Sulla served under Marius through these years and missed none of it.`,
    control: { numidia: 'client' },
    markers: [
      { type: 'battle', label: 'Aquae Sextiae, 102 BCE', at: [5.44, 43.53] },
    ],
    connects: ['marius-reform-107bce', 'cimbri-teutones-113bce'],
    sources: [
      { author: 'Plutarch', work: 'Life of Marius', note: 'Hostile to Marius’s later ambition; the arc from savior to spent force is Plutarch’s tragic design.' },
      { author: 'Mary Beard', work: 'SPQR' },
    ],
  },
  {
    id: 'social-war-91bce',
    year: -91,
    yearEnd: -88,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'The Social War',
    headline: 'Rome’s Italian allies, refused citizenship for a generation, secede and build a rival state called Italia — and win the franchise by losing the war.',
    tags: ['military', 'constitutional', 'social'],
    body: `In 91 BCE the tribune Livius Drusus proposed enfranchising Rome's Italian allies — the socii who had supplied half or more of every Roman army for two centuries — and was assassinated for it. The allies, who had watched citizenship proposals raised and strangled since the Gracchi, stopped asking. Across the central and southern peninsula — the Marsi, the Samnites, Picenum, the hill peoples who had fought Rome's wars — a confederacy declared itself: Italia, with a capital at Corfinium renamed Italica, a senate of its own, and coinage showing the Italian bull goring the Roman wolf. The war that followed was among the deadliest Rome ever fought, and it was fought against armies trained, equipped, and led exactly like Rome's own, because they had been Rome's own.

The allies' grievance was precise. They shared conquest's blood price without its protections: no vote, no appeal against a Roman magistrate's rods, land confiscations when Roman politics demanded them. Rome won the war by conceding its cause. The lex Julia of 90 offered citizenship to allies who had stayed loyal; the lex Plautia Papiria of 89 extended it to those who laid down arms. The coalition split, the Samnites fought on alone and bitterly, and by 88 the peninsula was Roman in the fullest sense: nearly every free Italian south of the Po was now a citizen.

The sequel was immediate. The new citizens were to be registered in a rigged handful of voting tribes, diluting their votes to nothing — and the fight over their fair enrollment became the issue on which the tribune Sulpicius and the consul Sulla collided in 88, with consequences no one imagined.`,
    whyItMatters: `Rome's citizenship is often praised as uniquely expansive, and it was — but the decisive extension was extorted at swordpoint, conceded strategically to split a coalition that was winning. The war unified Italy politically: within a generation "Roman" stopped meaning a city and started meaning a nation, and the armies that fought the coming civil wars were recruited from these new citizens, many with fresh memories of fighting Rome. The unresolved detail — how fully to count the new voters — was the immediate fuse of Sulla's march on Rome.`,
    misconception: {
      claim: "Rome generously shared its citizenship as it expanded, and that openness built the empire.",
      correction: "Openness was real at the edges — freed slaves became citizens, elites were co-opted — but the one mass enfranchisement of the Republic came only after the allies revolted and Rome was losing. The Senate had blocked every peaceful citizenship proposal for forty years; the franchise was a weapon of war before it was a gift.",
    },
    control: {},
    spatialFocus: ['samnium', 'picenum', 'campania'],
    connects: ['alliance-system-300bce', 'gracchus-gaius-123bce', 'latifundia-crisis-180bce'],
    sources: [
      { author: 'Appian', work: 'Civil Wars I', note: 'Our only continuous narrative, written two centuries later and heavily compressed.' },
      { author: 'Henrik Mouritsen', work: 'Italian Unification', note: 'Argues the allies fought for independence from Rome, not admission to it — the citizenship-demand story may be Roman retrospect.' },
    ],
  },
  {
    id: 'sulla-march-88bce',
    year: -88,
    era: 'late-republic',
    weight: 3,
    reliability: 'well-attested',
    title: 'Sulla Marches on Rome',
    headline: 'Stripped of his command by a vote in the assembly, Sulla asks his legions to march on their own city; his officers refuse almost to a man — the soldiers go.',
    tags: ['military', 'constitutional'],
    body: `In 88 BCE the consul Sulla held the command every Roman general wanted: the war against Mithridates, king of Pontus, who had just overrun Roman Asia — the richest war in a generation. The tribune Sulpicius Rufus, needing muscle for his bill to enroll the new Italian citizens fairly, made a bargain with the aging Marius: his street support in exchange for a law transferring the Mithridatic command to Marius. The law passed. Sulla left Rome for his army, six legions besieging Nola in the last embers of the Social War, and put the situation to the troops. Then came the moment that split Roman history: his officers, career aristocrats, refused to march on Rome — all but one quaestor. The soldiers stoned the military tribunes sent by Marius to take over the legions, and marched.

The soldiers' arithmetic was simple. The Asian war meant plunder that would set a man up for life; under Marius, Marius's veterans would get it. These men were Marian-model volunteers with no farms behind them — their futures were embodied in Sulla, and they chose their futures. The officers, whose careers ran through the Senate and its norms, chose the norms. One army, two loyalty systems, and the newer one won.

No army had ever entered Rome under arms. The city had no garrison and no walls that mattered; resistance was improvised — Marius promising freedom to slaves who would fight, and finding almost no takers. Sulla took the city in a day, had Sulpicius's laws annulled as passed by violence, and pushed through something without precedent: twelve men, Marius and Sulpicius at their head, were declared hostes — public enemies — Roman citizens formally stripped of legal existence, killable on sight. The device would be reused by every faction for the next sixty years. Sulpicius was hunted down and killed, betrayed by a slave whom Sulla freed for the service and then had thrown from the Tarpeian Rock for the treachery. Marius escaped south in a fugitive's odyssey the Romans never tired of retelling — hiding in the Minturnae marshes, facing down the slave sent into his cell to kill him: the man fled, crying that he could not kill Gaius Marius.

Then Sulla did the strangest thing: having seized Rome, he held elections — which promptly returned his enemies — extracted oaths he must have known were worthless, and sailed east to fight Mithridates anyway. The precedent stayed behind, available to anyone.`,
    whyItMatters: `The march is the empirical test of what 107 BCE had done, and the result was unambiguous: when the constitution and the army's interest pointed in opposite directions, the army followed its interest. Everything constitutional in Rome ultimately rested on "no one would ever" — and now someone had, at the cost of nothing, because the state possessed no force capable of stopping a Roman army except another Roman army. Within months Cinna reopened the road; within a decade Sulla took it twice. Caesar's Rubicon in 49 is not an innovation but a re-enactment, and every actor in between — Senate included — planned around the new fact that political defeats could be reversed by whoever kept legions.`,
    control: {},
    connects: ['marius-reform-107bce', 'social-war-91bce', 'marius-consulships-104bce'],
    sources: [
      { author: 'Appian', work: 'Civil Wars I', note: 'The fullest account, written two centuries on.' },
      { author: 'Plutarch', work: 'Life of Sulla', note: 'Draws heavily on Sulla’s own memoirs — much of what we “know” about 88 is Sulla explaining himself.' },
      { author: 'Mary Beard', work: 'SPQR' },
    ],
  },
  {
    id: 'mithridates-88bce',
    year: -88,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'The Asiatic Vespers',
    headline: 'On a single arranged day, Mithridates of Pontus has tens of thousands of Roman and Italian residents of Asia massacred — and the Greek cities help willingly.',
    tags: ['military', 'economic'],
    body: `In 88 BCE Mithridates VI Eupator, the Hellenistic king of Pontus on the Black Sea coast of Asia Minor, swept Roman power out of the east in a single season. Rome had invited the war — a senatorial commission had pushed the king of Bithynia into raiding Pontic territory, confident Mithridates would swallow it — and discovered too late that Pontus had been building an army and a fleet for years while Rome bled itself in the Social War. Bithynia fell, then the province of Asia, where cities opened their gates to the king as a liberator. Then Mithridates sent sealed letters to the cities: on an appointed day, kill every Roman and Italian among you — men, women, children, freedmen. Tradition puts the dead at eighty thousand; one source says one hundred fifty thousand. The figures are beyond checking, but the scale and the coordination are not in doubt, and neither is the participation. Ordinary Greeks dragged neighbors out of temple sanctuaries to kill them. Slaves who killed their Italian masters were freed; debtors who killed creditors kept half the debt.

The massacre was policy, not frenzy: complicity in an atrocity bound the cities irrevocably to the king. But its enthusiasm was a verdict. Two generations of publicani tax-farming, debt at compound interest, and governors who partnered with the extractors had made Roman rule in Asia hated to a degree Rome had not bothered to notice.

Mithridates' armies crossed to Greece, where Athens declared for him. Rome's answer — Sulla's five legions — was at that moment marching on Rome itself.`,
    whyItMatters: `The Vespers made the eastern command the most valuable object in Roman politics — wealth, glory, and vengeance in one package — and it was precisely this prize that Sulla and Marius were willing to break the state to hold, in the same year. The massacre is also the clearest measure of what Roman provincial government had become: the first great revolt against the empire was aimed not at Roman armies but at Roman businessmen, and it found a hundred thousand willing hands. Rome eventually punished Asia savagely — and changed almost nothing about how it was taxed.`,
    control: { 'bithynia-pontus': 'rival-hellenistic', asia: 'contested' },
    connects: ['pergamon-133bce', 'publicani-140bce'],
    sources: [
      { author: 'Appian', work: 'Mithridatic Wars', note: 'The death tolls — 80,000 in one tradition, 150,000 in another — are ancient guesses; no census of the victims ever existed.' },
      { author: 'Adrienne Mayor', work: 'The Poison King', note: 'A sympathetic modern portrait of Mithridates; useful precisely because it reads the massacre from the provincial side.' },
    ],
  },
  {
    id: 'household-slavery-80bce',
    year: -85,
    dateNote: 'c.',
    era: 'late-republic',
    weight: 1,
    reliability: 'reconstructed',
    title: 'The Slaves in the House',
    headline: 'Urban slavery ran on proximity, skill, and the real prospect of freedom — a design that made the system more durable, not gentler.',
    tags: ['slavery', 'daily-life'],
    body: `Alongside the chain gangs of the estates, Rome ran a second slave system with a different logic. The urban household of any substantial family was staffed by slaves: cooks, secretaries, tutors, midwives, doctors, business agents, child-minders. They lived close to their owners, could be trained, trusted, and even loved — Cicero's letters to his slave secretary Tiro are genuinely affectionate — and they lived under the same absolute power as any field hand: sale, beating, sexual use, and torture (a slave's court testimony was admissible only under torture) were all legal.

What made the urban system distinctive was the exit. Roman owners freed slaves at a rate that startled Greek observers, and — uniquely in the ancient world — a formally freed slave of a citizen became a citizen. Many slaves could hold a peculium, an informal fund with which they might eventually buy themselves. The freedman remained bound to his former master as a client, carrying his name, owing services: manumission converted property into loyal dependents, and it gave every enslaved secretary and shopkeeper a reason to cooperate for years.

Almost everything we know comes from the owners — their letters, their laws, their epitaphs. The enslaved left no account of their own.`,
    whyItMatters: `Manumission is a large part of why Rome, a society more dependent on slavery than almost any in history, never produced an abolitionist argument: the system co-opted its ablest victims, and successful freedmen became slaveholders themselves. It also quietly transformed the citizen body — within a few generations a substantial share of Rome's citizens descended from slaves, which is a fact about Roman identity worth carrying through the rest of this story.`,
    misconception: {
      claim: "Roman slavery was like Atlantic slavery — organized around race.",
      correction: "Roman slavery had no racial theory: slaves came from every people Rome defeated, Greeks and fellow Italians included, and a freed slave became a Roman citizen whose descendants bore no legal mark. It was not milder for that — its logic was total ownership justified by conquest and misfortune, not by ancestry.",
    },
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium', 'campania'],
    connects: ['slavery-captives-195bce', 'latifundia-crisis-180bce', 'carthage-corinth-146bce'],
    sources: [
      { author: 'Cicero', work: 'Letters', note: 'Warmth toward Tiro sits beside unexamined ownership; the sources for slavery are the masters’ own words.' },
      { author: 'Keith Bradley', work: 'Slavery and Society at Rome', note: 'Reconstructs the slave’s-eye view from evidence written almost entirely by owners — and is candid about the limits of doing so.' },
    ],
  },
  {
    id: 'marius-cinna-87bce',
    year: -87,
    yearEnd: -86,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'Marius and Cinna Take Rome Back',
    headline: 'A year after Sulla’s march, the men he outlawed re-enter Rome behind an army of their own and hunt his friends through the streets.',
    tags: ['military', 'constitutional'],
    body: `Sulla had barely sailed east in 87 BCE when his settlement collapsed. The consul Cinna, expelled from the city for reviving the new citizens' cause, did what Sulla had taught everyone to do: he raised an army, recruiting heavily among the recently enfranchised Italians. Old Marius returned from African exile with a scratch force and a grievance, and together they blockaded Rome, starved it, and took it. Then came something new — not a seizure of the city but a purge. Sulla's friends and Marius's old enemies were hunted down; for the first time, the severed heads of senators and consuls were displayed on the speaker's platform in the Forum, where Romans were accustomed to seeing their leaders' faces alive. Plutarch describes Marius's bodyguard of freed slaves killing anyone whose greeting Marius failed to return.

Marius entered his seventh consulship in January 86 — the fulfillment of an old prophecy he had carried for decades — and died in bed within three weeks, at seventy. Cinna ruled for the next three years through repeated consulships without real elections, a period contemporaries simply called the Cinnae dominatio. Rome outlawed Sulla, confiscated his property, and stripped his command; Sulla, with five legions and the Mithridatic war in hand, ignored the decrees entirely and kept fighting under his own authority — a Roman army abroad now answerable, in practice, to no one but its general.`,
    whyItMatters: `Within eighteen months Sulla's march had stopped being an outrage and become a move in the repertoire, available to both sides. The heads on the rostra mattered as much as the armies: once political defeat meant death rather than retirement, no armed man could ever again safely disarm on a legal promise — a logic that runs straight through Sulla's return, the proscriptions, and Caesar's refusal to surrender his province in 49.`,
    control: {},
    connects: ['sulla-march-88bce', 'social-war-91bce', 'marius-consulships-104bce'],
    sources: [
      { author: 'Appian', work: 'Civil Wars I' },
      { author: 'Plutarch', work: 'Life of Marius', note: 'The lurid detail of the terror is Plutarch’s tragic climax for Marius; the scale of the killing was real but selective, not general.' },
    ],
  },
  {
    id: 'sulla-returns-83bce',
    year: -83,
    yearEnd: -82,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Sulla Comes Back',
    headline: 'Having beaten Mithridates on deliberately soft terms, Sulla lands in Italy with a veteran army, wins the first full Roman civil war — and posts lists of citizens anyone may kill for a reward.',
    tags: ['military'],
    body: `Sulla ended the Mithridatic war in 85 BCE on terms that scandalized Rome: the king who had massacred eighty thousand Italians paid an indemnity, surrendered his conquests and part of his fleet, and kept his throne. Sulla was honest about the reason — he wanted to go home and settle accounts. Asia was made to pay instead: twenty thousand talents in back taxes and indemnities, with troops billeted on households, a squeeze that drove the province's cities into debt to Roman financiers for a generation. The province returned to Roman control; its punishment for the massacre was to be taxed harder by the same system that had provoked it.

In 83 Sulla landed at Brundisium with five veteran legions and marched on Rome for the second time in five years. What followed showed how thoroughly the rules had dissolved. Young men brought him private armies: Marcus Crassus, whose father had died in the Marian terror, and Pompey, twenty-three years old and holding no office whatever, who raised three legions from his father's clients in Picenum and was saluted imperator by a man with no more legal authority than himself. One government army defected entire when its general's soldiers walked over to Sulla's camp. The war ended at the Colline Gate, at the very wall of Rome, in November 82 — a night battle against the last Marian army and its Samnite allies, fighting, as their commander put it, to tear out the wolf's throat at last. Sulla won it, barely.

Then came the invention: proscription. Lists posted in the Forum named citizens who could be killed by anyone, for a reward from the state; their property was confiscated and auctioned, their sons and grandsons barred from office. The lists grew by the day — enemies first, then simply the rich, added for their estates. Crassus laid the foundation of the largest private fortune in Rome buying proscribed property at auction prices. Several thousand died, though the sources' figures wobble; while prisoners from the Colline Gate were executed within earshot of the temple where Sulla addressed the Senate, he advised the fathers to attend to his words — the noise was only some criminals being dealt with.`,
    whyItMatters: `The proscriptions turned political murder into an administrative procedure — with paperwork, price lists, and profit-sharing — and thereby gave thousands of ordinary Romans a financial stake in the new order's permanence: every buyer of a dead man's farm was now a Sullan partisan. Just as corrosive was what the war revealed about legitimacy: armies defected to the likely winner, boys with client networks outranked magistrates with laws, and the state's authority proved to be whatever the strongest army said it was. The Republic was restored in name the following year; every ambitious man in Italy had watched how.`,
    control: { asia: 'provincial' },
    markers: [
      { type: 'battle', label: 'Colline Gate, 82 BCE', at: [12.5, 41.92] },
    ],
    connects: ['sulla-march-88bce', 'marius-cinna-87bce', 'mithridates-88bce'],
    sources: [
      { author: 'Plutarch', work: 'Life of Sulla', note: 'Rests substantially on Sulla’s own memoirs; the Colline Gate drama and the famous one-liners come to us through his self-portrait.' },
      { author: 'Appian', work: 'Civil Wars I', note: 'Gives the fullest proscription narrative; his casualty figures differ from other sources and none can be verified.' },
    ],
  },
  {
    id: 'sulla-dictator-82bce',
    year: -82,
    yearEnd: -79,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Dictator Without a Time Limit',
    headline: 'Sulla revives an emergency office dead for 120 years, deletes its six-month clock, and rewrites the constitution — to prevent the rise of anyone like himself.',
    tags: ['constitutional', 'legal'],
    body: `In late 82 BCE a cowed assembly passed the lex Valeria, naming Sulla dictator "for writing laws and settling the state" — with no term of office. The dictatorship itself was ancient and legal: a six-month emergency magistracy Rome had used for centuries and shelved after the war with Hannibal. Sulla's innovation was the missing clock, and the fact that the office was created for him by a law passed under the eyes of his army. Every form was observed. That was the point: he wanted his settlement to be law, not occupation.

The settlement aimed to make the last fifty years impossible to repeat. The tribunate — the office of the Gracchi, of Saturninus, of Sulpicius — was gutted: its legislative initiative stripped, its veto trimmed, and its holders barred from all higher office, making it a career dead end no ambitious man would touch. The Senate, thinned by war and terror, was doubled to six hundred with Sulla's men, and juries went back to senators. The ladder of offices was fixed in law — minimum ages, mandatory intervals, no repeated consulships within ten years. Governors were forbidden to lead armies out of their provinces or start wars on their own authority: the crime, precisely, that Caesar would one day commit at the Rubicon.

Outside the law courts, Sulla secured the settlement demographically. Something like a hundred thousand of his veterans were planted in colonies across Italy, on land confiscated from communities that had opposed him — Etruria and Samnium above all, which were punished to the edge of ruin. Ten thousand freed slaves of the proscribed, all bearing his name, became a personal voting bloc in the city. The guarantee of the constitution was not its text but this armed and propertied class of beneficiaries salted through the peninsula.`,
    whyItMatters: `Sulla's reforms diagnosed the Republic's sickness as wicked tribunes and disobedient governors — symptoms, both. The actual solvent, the client army that had carried him to power twice, he not only left intact but expanded, because it was his instrument; his veteran colonies made the personal army a permanent feature of the Italian landscape. The constitution he built to be permanent was dismantled within a decade by his own lieutenants, Pompey and Crassus. What endured was the demonstration: the full sequence — march, terror, legalization — could be run start to finish, and the state's institutions would ratify each step.`,
    misconception: {
      claim: "Sulla seized the title of dictator — an illegal tyranny Rome had banned.",
      correction: "Rome had banned kings, not dictators. The dictatorship was a legal emergency office with a six-month limit, used routinely for centuries and last held in 202 BCE. Sulla's dictatorship was created by a duly passed law with the time limit removed — and that legality is the real lesson: the constitution could be made to license its own suspension.",
    },
    control: {},
    connects: ['sulla-returns-83bce', 'sulla-march-88bce', 'marius-reform-107bce'],
    sources: [
      { author: 'Appian', work: 'Civil Wars I' },
      { author: 'Plutarch', work: 'Life of Sulla' },
      { author: 'Arthur Keaveney', work: 'Sulla: The Last Republican', note: 'Reads Sulla as a sincere, if brutal, restorer of senatorial government — a corrective to the pure-cynic portrait, though not everyone is convinced.' },
    ],
  },
  {
    id: 'sulla-resigns-79bce',
    year: -79,
    era: 'late-republic',
    weight: 3,
    reliability: 'well-attested',
    title: 'Sulla Resigns and Dies in Bed',
    headline: 'The man who marched on Rome twice lays down supreme power, walks the Forum as a private citizen, and dies of natural causes — proving the whole enterprise survivable.',
    tags: ['constitutional'],
    body: `Having rebuilt the state to his own design, Sulla did the one thing nobody expected: he gave power back. He resigned the dictatorship — the exact year is argued, 81 to 79, with his second consulship in 80 bridging the transition — dismissed his lictors, and walked in the Forum as a private citizen, offering, by the convention of the old office, to answer for his acts to anyone who asked. No one asked. He retired to a villa in Campania to hunt, drink with actors, and finish his memoirs — the last lines written, the tradition insists, days before the end — and died there in 78, probably of liver failure, in his bed. The state gave him the grandest funeral in its history: the body borne by his veterans, two thousand golden crowns, the matrons contributing so much incense that the procession smelled of it for miles. His monument on the Campus Martius carried an epitaph he composed himself — no friend had ever outdone him in kindness, no enemy in harm.

Appian preserves the perfect coda: a boy followed the retired dictator through the streets hurling abuse, unpunished — the man who had posted death lists shrugged that this loudmouth would keep any future holder of such power from ever laying it down. The story is almost too good, written by a man who knew what Caesar did next, and should be enjoyed with suspicion. But it distills what Rome concluded.

Why could the most hated man in the Roman world simply walk away? Because the terror had been thorough. His enemies were dead, exiled, or ruined; his veterans held their farms by his settlement and would fight for it; his freedmen filled the city; his laws bound the courts. Resignation was not an act of restraint but of confidence — the dictatorship had become redundant. The retirement was safe precisely because nothing about the preceding five years had been.

The men who mattered drew their conclusions in different directions. Pompey built a career on the Sullan template minus the terror: extraordinary commands, extorted ratifications, indispensability. Caesar, a young survivor of the proscription era whom Sulla had spared over the objections of his own advisers — remarking, the story goes, that there were many Mariuses in that boy — concluded decades later that Sulla's resignation only showed he had never understood power. One or the other of them was right.`,
    whyItMatters: `Sulla's quiet death was among the most consequential natural deaths in Roman history, because it certified the precedent his life had set: the recorded penalty for seizing the Roman state by force was now nothing — dying rich, old, and honored. Constitutions deter usurpation by making it fatal; after 78 BCE the worst documented outcome was a comfortable retirement. Every subsequent gambler — Catiline, Caesar, the dynasts after him — ran his odds against that data point. The bitter joke of the Sullan settlement is that its author legislated obsessively against future Sullas while being, himself, the proof of concept.`,
    control: {},
    connects: ['sulla-dictator-82bce', 'sulla-march-88bce'],
    sources: [
      { author: 'Plutarch', work: 'Life of Sulla', note: 'The deathbed and funeral scenes draw on Sulla’s memoirs and Sullan tradition — the serenity may be curated.' },
      { author: 'Appian', work: 'Civil Wars I', note: 'The boy-in-the-street anecdote is told with Caesar in hindsight; prophecy after the fact is cheap.' },
      { author: 'Suetonius', work: 'Life of the Deified Julius', note: 'Source for Caesar’s verdict that Sulla was a political illiterate for resigning — reported a century later.' },
    ],
  },
  {
    id: 'sertorius-80bce',
    year: -80,
    yearEnd: -72,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Sertorius: The Other Rome',
    headline: 'A Marian survivor builds a rival Roman state in Spain — complete with its own senate — and outfights every army sent against him for eight years.',
    tags: ['military', 'constitutional'],
    body: `Quintus Sertorius, a one-eyed Sabine soldier of genuine brilliance and a survivor of the Marian cause, escaped Sulla's victory to Spain — and in 80 BCE, at the invitation of the Lusitanians, returned to build something Rome had never seen: a rival Roman government in the provinces. He organized a counter-senate of three hundred Roman exiles, appointed magistrates with Roman titles, and founded a school at Osca where the sons of Iberian chiefs learned Latin and the toga — partly integration, partly a supply of well-treated hostages, and Sertorius saw no contradiction. To his Iberian followers he was something close to a holy leader; he kept a tame white fawn, a gift he presented as his line to the goddess Diana, and used its "prophecies" with cheerful cynicism to steady morale.

Militarily he was the finest guerrilla commander Rome ever produced, and he fought Rome's own methods to a standstill. Metellus Pius, one of Sulla's best marshals, could not corner him. In 77 the Senate reinforced Spain with Pompey — a private citizen in his twenties who had held no elected office, granted proconsular command because he had troops and prestige and could not safely be refused. Sertorius handled them both roughly for years, and at one point negotiated an alliance with Mithridates, taking the king's money and ships while refusing — so Plutarch insists — to cede Roman Asia to him: even his treason had constitutional scruples, or his biographer wanted it so.

The end came from within. In 73 his lieutenant Perperna, a jealous aristocrat, murdered him at a banquet. The army largely melted away rather than follow the assassin; Pompey destroyed Perperna within weeks, and — in the war's shrewdest stroke — burned Sertorius's captured correspondence unread, extinguishing the evidence of how many prominent men in Rome had been writing to the rebel.`,
    whyItMatters: `Sertorius previewed the empire's recurring failure mode two centuries early: a capable Roman commander plus a provincial base plus a personal army equals a functioning rival Rome — the same formula as the breakaway Gallic and Palmyrene empires of the third century. And the cure previewed the disease. To beat a warlord claiming legality, the Senate handed an extraordinary command to a young man with no legal standing at all: suppressing Sertorius meant normalizing Pompey, and the cursus honorum never recovered its monopoly on military power.`,
    control: {
      lusitania: 'breakaway',
      'hispania-tarraconensis': 'breakaway',
      'hispania-interior': 'breakaway',
    },
    connects: ['marius-cinna-87bce', 'sulla-returns-83bce', 'sulla-dictator-82bce'],
    sources: [
      { author: 'Plutarch', work: 'Life of Sertorius', note: 'Our only full narrative, and openly romantic — Sertorius as the last honest Roman. The fawn, the scruples, and the pathos are his portrait.' },
      { author: 'Sallust', work: 'Histories (fragments)', note: 'The contemporary account survives only in scraps.' },
    ],
  },
  {
    id: 'spartacus-73bce',
    year: -73,
    yearEnd: -71,
    era: 'late-republic',
    weight: 2,
    reliability: 'contested',
    title: 'Spartacus',
    headline: 'Seventy gladiators break out of a barracks in Capua and become an army of tens of thousands; ending it takes both future triumvirs and six thousand crosses.',
    tags: ['slavery', 'military'],
    body: `In 73 BCE about seventy gladiators — Thracians, Gauls, and Germans led by a Thracian named Spartacus, who had reportedly once served with Roman forces — broke out of a training barracks in Capua armed with kitchen implements, seized a wagonload of gladiatorial weapons, and camped on Vesuvius. When a Roman force blockaded the only path, they descended the cliffs on ladders of vine rope and destroyed it. The victory drew the enslaved of the Campanian and Lucanian estates in a flood; within a year Spartacus commanded tens of thousands — ancient figures run to 120,000, and are unverifiable like all such numbers — and had beaten four Roman armies, including those of both consuls of 72.

What the rebels wanted is genuinely unclear, because no rebel account exists. They marched north to the Alps as if to disperse homeward, then turned back into Italy — a decision the sources cannot explain and neither can we; perhaps the men preferred plunder in Italy to poverty beyond the mountains, perhaps crossing was never the plan. A deal with Cilician pirates to ferry a force to Sicily, where two previous slave wars had burned, collapsed when the pirates took payment and sailed off.

Rome's response revealed its fear. Command went to Marcus Crassus, the richest man in Rome, with six new legions; he revived decimation — beating to death every tenth man of a unit that had fled — to remind his soldiers that he was more dangerous than the enemy, and walled the rebels into the toe of Italy with a ditch and rampart across the peninsula. Spartacus broke out, but in 71 the army was cornered in Lucania and destroyed. Spartacus died in the fighting, reportedly cutting his way toward Crassus himself; his body was never identified. Six thousand prisoners were crucified at intervals along the Appian Way from Capua to Rome — a hundred and twenty miles of instruction. Pompey, marching back from Spain, slaughtered a column of fugitives and wrote to the Senate that he had finished the war at its roots — a claim Crassus never forgave.`,
    whyItMatters: `The revolt terrified the owners' republic because it exposed the arithmetic beneath it: Italy now held slaves in the millions, concentrated on the estates the conquest economy had built, and they had just proved they could beat consular armies. Yet the aftermath is the more instructive fact — no reform followed, no rethinking, only crosses; the system's answer to its largest revolt was advertising. The war's political residue mattered too: it handed Crassus and Pompey armies, glory, and a rivalry at the precise moment they could jointly convert all three into the consulship of 70.`,
    misconception: {
      claim: "Spartacus led a revolution to abolish slavery.",
      correction: "No ancient source attributes any abolitionist aim to him; the rebels sought escape, revenge, and plunder, and reportedly forced Roman prisoners to fight as gladiators for their amusement. The freedom-fighter Spartacus is a modern creation — Enlightenment pamphlets, then Marx, then Hollywood. Antiquity produced slave revolts; it never produced an argument against slavery itself.",
    },
    control: {},
    spatialFocus: ['campania', 'lucania-bruttium'],
    connects: ['slavery-captives-195bce', 'latifundia-crisis-180bce', 'household-slavery-80bce'],
    sources: [
      { author: 'Plutarch', work: 'Life of Crassus', note: 'Spartacus survives only as an episode in his enemies’ biographies; every detail we have passed through hostile hands.' },
      { author: 'Appian', work: 'Civil Wars I' },
      { author: 'Barry Strauss', work: 'The Spartacus War', note: 'A full modern reconstruction — honest that it is built from perhaps a dozen pages of ancient text.' },
    ],
  },
  {
    id: 'games-politics-70bce',
    year: -70,
    dateNote: 'c.',
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Games as Political Currency',
    headline: 'Roman politicians borrowed fortunes to stage spectacles, because the crowd’s memory was the one constituency that money could reliably buy.',
    tags: ['spectacle', 'social'],
    body: `Rome had no political parties, no campaign advertising, and an electorate of hundreds of thousands. What it had instead was the aedileship — the junior magistracy charged with staging the public games — and an unwritten rule that a man's generosity in that office would be remembered when he stood for higher ones. The state budget for the festivals was deliberately inadequate; the shortfall was the candidate's opportunity. An ambitious aedile borrowed ruinously, staged games the city talked about for years, and planned to recoup the debt later from a provincial command — which meant the provincials ultimately paid for the entertainment of the Roman voter.

Caesar's aedileship of 65 BCE became the standard case: three hundred and twenty pairs of gladiators in silvered armor, nominally funeral games for a father twenty years dead — even commemoration bent into campaigning — plus theatrical shows and banquets, all on credit, much of it ultimately underwritten by Crassus. The Senate was alarmed enough to cap by law the number of gladiators one man could keep in the city; the stated fear was armed slaves so soon after Spartacus, but the political arithmetic of one man owning a small army of trained killers escaped nobody.

The shows themselves ranged from chariot racing and stage plays at the state festivals to gladiatorial munera, which remained in this period technically private funeral offerings — death as the pretext, electioneering as the purpose.`,
    whyItMatters: `The games were where private wealth, mass politics, and spectacular violence fused into a single instrument: high office became a leveraged investment, recouped by squeezing provinces, which made extraction abroad the exhaust of electioneering at home. The emperors later nationalized the mechanism — an imperial near-monopoly on great games, bread and circuses as statecraft — but they invented nothing; they simply bought out the competition that had once bid for the crowd.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium'],
    connects: ['client-patron-460bce', 'insulae-urban-100bce'],
    sources: [
      { author: 'Suetonius', work: 'Life of the Deified Julius', note: 'Reports the scale of Caesar’s games and the Senate’s gladiator cap; Suetonius trades happily in gossip, but the legislation is solid.' },
      { author: 'Mary Beard', work: 'SPQR' },
    ],
  },
  {
    id: 'pompey-crassus-70bce',
    year: -70,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Consulship of Pompey and Crassus',
    headline: 'Two Sullan generals keep their armies camped outside Rome, take the consulship together, and repeal the Sullan constitution they rose under.',
    tags: ['constitutional'],
    body: `In 71 BCE the two victorious generals of the moment — Pompey back from Spain, Crassus from the slave war — both declined to disband their armies, keeping them camped outside the city "awaiting triumphs" while their candidacies for the consulship went forward. Pompey was under age, had held none of the required offices, and was not even a senator; the requirements were waived by special dispensation, the alternative being unattractive to contemplate. The two men despised each other and cooperated anyway, and their joint consulship of 70 dismantled what remained of Sulla's political architecture: the tribunate's full powers were restored, and the courts were recomposed with mixed juries of senators, equestrians, and a third property class, ending the Senate's monopoly. The same year's censors expelled sixty-four senators and enrolled the new Italian citizens at last in all the voting tribes — the Social War's promise finally kept, eighteen years late.

That year's great show trial pointed the same direction: Cicero's prosecution of Verres, the plunderer-governor of Sicily, laid out in humiliating documentary detail what provincial government had become, and made the orator's career. Spain, meanwhile, was reorganized after Sertorius's fall and returned to ordinary provincial administration.

Sulla's constitution had lasted barely ten years, and its demolition crew was led by his own two most successful lieutenants.`,
    whyItMatters: `The restoration of the tribunate is the pivot hidden inside this unglamorous year: every extraordinary command of the next decade — Gabinius's pirate law, Manilius's eastern law, Vatinius's Gallic law for Caesar — would be tribunician legislation, rammed through assemblies over senatorial objection on behalf of a dynast. Pompey and Crassus did not restore the tribunate out of principle; they restored the tool their kind of career required, and proved in passing that Sulla's parchment barriers meant nothing to men with armies at the gates.`,
    control: {
      lusitania: 'provincial',
      'hispania-tarraconensis': 'provincial',
      'hispania-interior': 'provincial',
    },
    connects: ['sulla-dictator-82bce', 'sertorius-80bce', 'spartacus-73bce'],
    sources: [
      { author: 'Plutarch', work: 'Life of Pompey' },
      { author: 'Cicero', work: 'Against Verres', note: 'A prosecutor’s brief, not a neutral audit — but the documentary detail of provincial extortion it preserves is unmatched.' },
    ],
  },
  {
    id: 'lex-gabinia-67bce',
    year: -67,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Lex Gabinia',
    headline: 'Handed the whole Mediterranean and unprecedented resources against the pirates, Pompey wins in three months a war Rome had fumbled for thirty years.',
    tags: ['military', 'constitutional'],
    body: `By the 60s BCE piracy had grown from nuisance to strategic threat. Based in the coves of Cilicia and Crete and fattened by decades of eastern war — and by Rome's own bottomless appetite for the slaves the pirates supplied — the fleets kidnapped magistrates on the Appian Way, raided Ostia itself and burned a consular fleet in harbor, and choked the grain routes until the city went hungry. Every conventional, short, local command had failed.

In 67 the tribune Gabinius proposed a command designed like the problem: one commander for three years over the entire sea and fifty miles inland, with hundreds of ships, thousands of troops, twenty-four senior legates, and an enormous budget. The Senate fought it with something near panic — this was a kingdom of the sea, and everyone knew it was drawn for Pompey. The assembly passed it anyway; grain prices reportedly fell the day the law carried, on confidence alone. Pompey then delivered the most efficient campaign in Roman history: the sea swept clear west to east in about three months, the pirate strongholds in Cilicia reduced, and — the genuinely original stroke — thousands of captured pirates resettled inland as farmers rather than crucified, on the theory that men become pirates from desperation and stop when given something better. Crete, already half-subdued by Metellus in a rival command, was folded into the provincial system alongside Cilicia.

Rome drew the obvious conclusion, the one it could least afford: concentrated power worked.`,
    whyItMatters: `The pirate war was the argument for one-man rule conducted as a live demonstration: the Republic's committee-of-annual-amateurs model had failed for a generation, and a single commander with wide powers and a long clock fixed it in a season. The next year the same coalition transferred the whole eastern war to Pompey on the same logic, and the Principate, when it came, was institutionally the Gabinian formula made permanent. Note what the Senate objected to: not that the command would fail, but that it would succeed — and about that they were exactly right.`,
    control: { creta: 'provincial', cilicia: 'provincial' },
    connects: ['pompey-crassus-70bce', 'mithridates-88bce', 'slavery-captives-195bce'],
    sources: [
      { author: 'Plutarch', work: 'Life of Pompey', note: 'The instant fall in grain prices is the kind of perfect detail that improves with retelling.' },
      { author: 'Cicero', work: 'On the Command of Gnaeus Pompeius', note: 'A campaign speech for extending Pompey’s powers — contemporary evidence and open advocacy in the same document.' },
      { author: 'Philip de Souza', work: 'Piracy in the Graeco-Roman World', note: 'Argues “pirate” was partly a label Rome applied to inconvenient maritime communities — the enemy was real, but so was the framing.' },
    ],
  },
  {
    id: 'pompey-east-66bce',
    year: -66,
    yearEnd: -62,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Pompey Reorganizes the East',
    headline: 'Handed the Mithridatic war by the Manilian law, Pompey finishes it in two campaigns — then redraws the political map of the eastern Mediterranean by personal decision.',
    tags: ['military', 'economic'],
    body: `In 66 BCE the tribune Manilius — following the Gabinian template exactly — transferred the war against Mithridates to Pompey, folding in the eastern provinces and armies wholesale. Cicero, angling as praetor, supported it in a surviving speech; the Senate's objectors were the same men, making the same argument, and they lost the same way. The previous commander, Lucullus, had actually broken Pontus's power in years of brilliant, unrewarded campaigning, but his own soldiers — denied plunder by his discipline — had mutinied under political encouragement from Rome. Pompey inherited a nearly won war and won it: Mithridates was beaten on the Lycus, fled to his Crimean holdings, and died in 63, ordering a bodyguard to run him through after a lifetime of prophylactic poison-taking had made poison useless — a detail too perfect to trust entirely. Tigranes of Armenia laid his diadem at Pompey's feet and got it back as a Roman client.

Then, for four years, Pompey governed as a state of one. He annexed Bithynia-Pontus and Syria — extinguishing the last ghost of the Seleucid monarchy on the grounds that no one worth taking seriously still held it — took Jerusalem after a three-month siege of the Temple mount when Judaea's civil war invited him in, and walked into the Holy of Holies, touching nothing: Judaea became a client under a high priest of his choosing. Galatia, Cappadocia, Armenia, and a dozen lesser thrones were assigned to kings he picked. He founded or refounded some forty cities, set tribute schedules, and nearly doubled Rome's annual public revenue. All of it was arranged on his sole authority, subject to ratification at Rome that everyone assumed would be a formality.

Across the Euphrates now stood Parthia — the Iranian empire that had absorbed everything between Roman Syria and India. Pompey's settlement made the two empires neighbors with no buffer worth the name.`,
    whyItMatters: `For four years one Roman made war, peace, kings, cities, and tax law across half the known world by personal fiat, and the arrangement worked — his eastern settlement outlived the Republic and structured Rome's east for centuries. That durability was the most subversive fact of the age: it proved personal rule could govern better than the Senate's rotation of annual amateurs, exactly as the pirate war had hinted. The settlement also created the Parthian frontier by stripping away every buffer state — the border that would kill Crassus at Carrhae and occupy Roman armies for three hundred years. And it left one loose thread: all of it still needed the Senate's signature.`,
    control: {
      'bithynia-pontus': 'provincial',
      syria: 'provincial',
      judaea: 'client',
      galatia: 'client',
      cappadocia: 'client',
      armenia: 'client',
      cyrenaica: 'provincial',
      cyprus: 'provincial',
      'rhodes-aegean': 'provincial',
      'parthia-core': 'rival-parthia',
      media: 'rival-parthia',
      mesopotamia: 'rival-parthia',
    },
    connects: ['lex-gabinia-67bce', 'mithridates-88bce', 'sulla-returns-83bce'],
    sources: [
      { author: 'Plutarch', work: 'Life of Pompey', note: 'The set-piece deaths and diadem scenes come through admiring tradition; the administrative facts are better grounded than the theatre.' },
      { author: 'Josephus', work: 'The Jewish War', note: 'Our source for the Temple siege — a Judaean author writing under Roman patronage a century and a half later.' },
      { author: 'Robin Seager', work: 'Pompey the Great' },
    ],
  },
  {
    id: 'catiline-63bce',
    year: -63,
    era: 'late-republic',
    weight: 2,
    reliability: 'contested',
    title: 'Cicero, Catiline, and the Executions',
    headline: 'A bankrupt aristocrat turns to insurrection; the consul Cicero exposes him — then has five citizens strangled without trial on the strength of a Senate vote.',
    tags: ['constitutional', 'legal'],
    body: `Lucius Sergius Catilina — patrician, former Sullan enforcer, twice defeated for the consulship — ran in 63 BCE on the one platform the Roman establishment could never tolerate: cancellation of debts. His coalition was the wreckage the past twenty years had made — Sullan veterans who had failed at farming and mortgaged their allotments, dispossessed Etrurians, and indebted aristocrats with nothing left but pedigree. Defeated again, he turned to arms: a rising in Etruria under his lieutenant Manlius, and, allegedly, plans for arson and murder in the city. The consul Cicero, working from informers, could prove little — until the conspirators made the mistake of recruiting envoys of the Allobroges, a Gallic people in Rome to complain about debt, who reported everything and obligingly collected signed, sealed letters. Seized at the Milvian Bridge, the documents converted suspicion into evidence.

Cicero had already driven Catiline from the city with the speech every Roman schoolchild would later memorize — quo usque tandem, how long will you abuse our patience — and now held five ranking conspirators, including a sitting praetor. On December 5 the Senate debated their fate. Julius Caesar, in the speech that made his political persona, argued against execution: imprisonment instead, and a warning about precedents created in fear. Cato the Younger answered for death and carried the house. Cicero had the five strangled in the Tullianum that evening, announcing their deaths to the crowd with a single euphemistic word: vixerunt — they have lived. In January Catiline died in battle at Pistoria, found far forward among the enemy dead; even the hostile Sallust gave him that.

The legal problem never went away. The Senate's ultimate decree was not a court, and provocatio — the citizen's right of appeal against execution — was the oldest liberty Rome claimed. Five years later a tribune named Clodius drove Cicero into exile for killing citizens uncondemned, and the saviour of the Republic watched his house demolished and a shrine to Liberty erected on the lot.`,
    whyItMatters: `The Catilinarian affair brought the emergency-decree problem of 121 to its sharpest point: the Republic's only remedy for internal conspiracy was to suspend the very citizen rights that defined it, and the man who applied the remedy was ruined for it within five years — proof that the constitution could neither tolerate the cure nor agree it was legal. Caesar's December speech deserves attention: the future dictator built his populist credit as the defender of due process against senatorial summary killing, an irony that would structure the politics of the next twenty years. And the whole episode reaches us through Cicero's own megaphone — he spent the rest of his life advertising his consulship — so the conspiracy's true scale is genuinely uncertain.`,
    control: {},
    connects: ['gracchus-gaius-123bce', 'sulla-dictator-82bce'],
    sources: [
      { author: 'Cicero', work: 'Against Catiline', note: 'The prosecution’s own press release, delivered mid-crisis by its chief beneficiary.' },
      { author: 'Sallust', work: 'The Conspiracy of Catiline', note: 'A moral essay on Roman decline wearing a history’s clothes; hostile to Catiline, yet grants him a hero’s death.' },
      { author: 'Mary Beard', work: 'SPQR', note: 'Points out how completely our Catiline is Cicero’s creation, and how little independent evidence survives to check the consul’s account.' },
    ],
  },
  {
    id: 'pompey-disbands-62bce',
    year: -62,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Pompey Disbands His Army',
    headline: 'The most powerful man in the world comes home, dismisses his legions as the law requires — and the Senate spends the next two years making sure he regrets it.',
    tags: ['constitutional', 'military'],
    body: `When Pompey landed at Brundisium late in 62 BCE, Rome braced for Sulla's return replayed: a conquering general, a veteran army, a state with no force to oppose him. Instead he dismissed his legions on the dock and traveled up the Italian roads as a private citizen, mobbed by well-wishers. The gesture was the Republican constitution working exactly as designed — the greatest imperator of the age voluntarily reverting to civilian. His triumph in 61 lasted two days, paraded the names of conquered nations from Spain to the Caucasus, and displayed a giant portrait of himself made of pearls; he was, and knew he was, without rival.

He asked the Senate for two things, both ordinary: ratification of his eastern settlement as a package, and land for his discharged veterans. The optimates — led by Lucullus, nursing the grudge of his stolen command; Cato, on inflexible principle; and Metellus Celer, avenging Pompey's divorce of his half-sister — refused both. The settlement would be examined clause by clause, meaning never; the land bills were talked out and died. The same clique simultaneously alienated Crassus by refusing the Asian tax contractors a renegotiation of a contract they had overbid, and then blocked Caesar — back from a governorship in Spain — from standing for the consulship in absentia while awaiting a triumph, forcing him to choose. He gave up the triumph, entered the city, and began talking to the two other men the Senate had just taught a lesson.

Cato and his allies believed they were defending the Republic by humbling its over-mighty citizens. Each refusal was individually defensible. Together they demonstrated to the three most powerful men in Rome that the constitution, operated in this spirit, was a machine for denying them everything they had earned — separately.`,
    whyItMatters: `This is the Republic's great unforced error. Pompey disbanding his army was the system's dream outcome — the indispensable man submitting to law — and the Senate punished him for it, teaching every observer that obedience forfeits leverage while extortion is rewarded. The First Triumvirate was not a conspiracy against a healthy constitution; it was manufactured by the optimates themselves, who took three men with separate, satisfiable grievances and welded them into a bloc. Cato's principled obstruction, aimed at saving the Republic from dynasts, is what created the dynasts' cartel — the cleanest demonstration in Roman history that a constitution which cannot say yes will be bypassed by men who can.`,
    control: {},
    connects: ['pompey-east-66bce', 'marius-reform-107bce', 'sulla-march-88bce'],
    sources: [
      { author: 'Plutarch', work: 'Life of Pompey', note: 'Plutarch shapes the return as the tragedy of a man too respectful of rules his rivals ignored.' },
      { author: 'Cassius Dio', work: 'Roman History, Book 37', note: 'Written 250 years later with the Principate in full view; his hindsight makes the drift to monarchy look tidier than it was.' },
      { author: 'Erich Gruen', work: 'The Last Generation of the Roman Republic', note: 'Argues the system was still functioning in the 60s and the triumvirate was ordinary coalition politics — a deliberate brake on the doom narrative this event otherwise tells.' },
    ],
  },
];

