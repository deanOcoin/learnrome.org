// 60-44 BCE, triumvirate to the Ides

import type { RomeEvent } from '../../types';

export const LATE_REPUBLIC_B_EVENTS: RomeEvent[] = [
  {
    id: 'triumvirate-60bce',
    year: -60,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'The First Triumvirate',
    headline:
      'Three men the Senate has blocked separately — Pompey, Crassus, Caesar — discover it cannot block them together, and Roman politics moves into a private house.',
    tags: ['constitutional'],
    body: `In 60 BCE the three most powerful men in Rome discovered that the Senate could stop each of them separately but not all of them at once. Pompey had come home from the East in 62, disbanded his army as the law required, and then watched the Senate refuse to ratify his settlement or vote land for his veterans. Crassus, the richest man in the city, could not push through relief for the tax syndicates that had overbid their contracts for Asia. Caesar, back from a governorship in Spain, wanted both a triumph and the consulship, and Cato arranged the procedure so that he had to surrender one to have the other. Caesar gave up the triumph — which told anyone watching how he weighed the future against the past — and then brokered the deal.

The bargain was simple: Pompey and Crassus would make Caesar consul for 59, and consul Caesar would deliver what each was owed. No law created the arrangement, no office existed, and it had no name at the time. Romans called such a thing amicitia, friendship — the ordinary word for political alliance. The hostile called it the Three-Headed Monster, after a pamphlet by Varro. What made this friendship new was that it pooled the three separate currencies of late-republican power: Pompey's veterans and prestige, Crassus's money, and Caesar's willingness to break procedure. In 59 it was sealed the traditional way, with a wedding — Julia, Caesar's only child, married Pompey.

Cato said afterward that the ruin of the Republic was not the eventual quarrel between Caesar and Pompey but their friendship. He was well placed to know. It was his own strategy of total obstruction, applied to all three men at once, that taught them they needed one another.`,
    whyItMatters: `The Senate's weapons — the veto, the religious technicality, the filibuster — were built to stop individuals, and they worked so well that they pushed power outside the constitution entirely. A body that could humiliate the conqueror of the East, the richest man in Rome, and the rising Caesar one at a time could do nothing against their cartel, because the cartel operated in a dining room where no veto reached. After 60 the assemblies and the Senate increasingly ratified decisions already taken in private; the Republic's institutions kept meeting, but the deciding had moved. Obstruction, not ambition alone, manufactured the thing it feared.`,
    misconception: {
      claim: 'The First Triumvirate was an official three-man government that ruled Rome.',
      correction:
        'It was a private bargain with no legal standing, no office, and no name — contemporaries called it a friendship or a conspiracy depending on taste. The formal, legally constituted board of three came later: the Second Triumvirate of 43 BCE was an actual magistracy ratified by law.',
    },
    control: {},
    sources: [
      { author: 'Cicero', work: 'Letters to Atticus', note: 'Real-time testimony; Cicero was invited to join and refused, and his letters swing between contempt and temptation.' },
      { author: 'Suetonius', work: 'Divus Julius', note: 'Writing 150 years later, with the outcome known — the pact looks more deliberate in hindsight than it did in 60.' },
      { author: 'Erich Gruen', work: 'The Last Generation of the Roman Republic', note: 'Argues the alliance was an ad hoc fix, not a planned march on autocracy — against the conspiracy reading this event invites.' },
    ],
    connects: ['pompey-disbands-62bce', 'pompey-crassus-70bce', 'catiline-63bce'],
  },
  {
    id: 'caesar-consul-59bce',
    year: -59,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: "Caesar's Consulship",
    headline:
      'Caesar rams the pact\'s agenda through over every obstruction, and his colleague Bibulus spends eight months indoors watching the sky for omens.',
    tags: ['constitutional'],
    body: `As consul in 59 Caesar paid the pact's debts in full: a land law for Pompey's veterans, ratification of the eastern settlement, a third off the price of the Asian tax contracts for Crassus's friends. When the Senate balked he took the bills straight to the assembly, where Pompey's veterans filled the Forum. His colleague Marcus Bibulus tried to block the voting, was pelted with dung and had his fasces smashed, and withdrew to his house for the remaining eight months of the year — announcing that he was watching the sky for omens, a religious device meant to render every law passed in the interval invalid. Wits dated documents to "the consulship of Julius and Caesar."

The reward came by tribunician law. The Lex Vatinia gave Caesar Cisalpine Gaul and Illyricum for five years with three legions, and the Senate itself added Transalpine Gaul with a fourth when its governor conveniently died — reasoning that what would otherwise be seized had better be given. But obstruction ignored is prosecution stored. Everything enacted over Bibulus's omens was legally contestable, and Caesar's enemies said openly that they would try him the moment he laid down imperium. He could no longer afford to become a private citizen.`,
    whyItMatters: `The year 59 built both halves of the machine that breaks in 49: the command that let Caesar create an army, and the docket of challengeable acts that made surrendering that army legal suicide. Nothing about the final crisis was improvised — the trap was set a decade early, and both sides watched it close in slow motion. The standoff at the Rubicon is this consulship, matured.`,
    control: {},
    sources: [
      { author: 'Suetonius', work: 'Divus Julius', note: 'Retails the year\'s scandals with relish; hostile gossip and fact are not always separable.' },
      { author: 'Cassius Dio', work: 'Roman History 38', note: 'Writing 250 years later, but preserves the procedural detail.' },
    ],
    connects: ['triumvirate-60bce', 'pompey-disbands-62bce'],
  },
  {
    id: 'grain-dole-58bce',
    year: -58,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'Clodius Makes the Grain Dole Free',
    headline:
      'A tribune abolishes the price of the state grain ration, and feeding the capital becomes a permanent political contract no ruler can ever cancel.',
    tags: ['economic', 'social'],
    body: `As tribune in 58, Publius Clodius made the grain distribution free. Rome had sold subsidized grain to its citizens since Gaius Gracchus — a fixed low price, for adult male citizens resident in the city — but Clodius abolished the price altogether, converting a subsidy into an entitlement. The rolls swelled; by the time Caesar audited them a decade later they carried 320,000 names, and he cut the list to 150,000. The cost was enormous — on some estimates a fifth of state revenue — and Rome annexed Cyprus the same year partly to pay for it.

The dole was politics in its purest Roman form. Free grain bound the urban plebs to whoever provided it, which in 58 meant Clodius, whose organized street gangs made him for several years the most powerful man inside the city walls. And it made the food supply itself a strategic fact: the capital now lived permanently on ships from Sicily and Africa, so any commander who could touch the grain routes held Rome by the throat. The annona — the whole apparatus of supply, later stretching to Egypt — dates its political weight from this law.`,
    whyItMatters: `The free dole changed what rulers owed the city of Rome, forever. Augustus considered abolishing it and concluded he could not; every emperor after him counted the grain fleet among the foundations of his rule, and the annexation of Egypt was in large part a decision about who controlled Rome's breakfast. A tribune's bid for street power in 58 hardened into a structural obligation of the Roman state for six centuries.`,
    misconception: {
      claim: '"Bread and circuses" means the Roman masses lived idle on free government handouts.',
      correction:
        'The dole was a fixed monthly ration for a closed list of adult male citizens resident in Rome — a fraction of the city, and nothing at all for the rest of Italy or the provinces. It was a perquisite of citizenship and an instrument of politics, not poor relief; recipients still had to earn everything except the wheat.',
    },
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium', 'sicilia', 'aegyptus'],
    sources: [
      { author: 'Cicero', work: 'Pro Sestio', note: 'Cicero is the least neutral witness alive — Clodius drove him into exile the same year.' },
      { author: 'Peter Garnsey', work: 'Famine and Food Supply in the Graeco-Roman World', note: 'On the scale and limits of the dole; paraphrased.' },
    ],
    connects: ['gracchus-gaius-123bce', 'sicilia-province-241bce'],
  },
  {
    id: 'gallic-wars-58bce',
    year: -58,
    yearEnd: -53,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'The Gallic Wars',
    headline:
      'Caesar turns a frontier governorship into the unauthorized conquest of Gaul — self-financed, self-reported, and demographically catastrophic for the conquered.',
    tags: ['military'],
    body: `In the spring of 58 the Helvetii began migrating west across Gaul, and Caesar — newly arrived as governor with enormous debts and a need for glory — declared them a danger to the Roman province and attacked, destroying them at Bibracte and marching the survivors home. Before the year was out he had also crushed the German warlord Ariovistus, whom the Senate had recently named a friend of Rome. Within two seasons he was operating hundreds of miles beyond his province: the Belgae in 57, where the battle on the Sambre nearly killed him; the maritime Veneti in 56; a bridge thrown over the Rhine in ten days in 55, crossed, demonstrated, and dismantled; Britain raided in 55 and again in 54, both landings nearly wrecked by storms; and in the winter of 54–53 the revolt of Ambiorix, which wiped out fifteen cohorts in their winter quarters — the worst Roman loss of the whole war.

None of this was mandated. His command was to govern two frontier provinces; the conquest was his own initiative, financed by plunder and the slave trade, its army expanded on his own authority from four legions to ten — one of them, the Alaudae, recruited from non-citizen Gauls and paid from his own pocket. When he massacred two German tribes during a truce in 55, Cato proposed in the Senate that Caesar be handed over to the enemy.

The scale is the thing to hold onto. Plutarch's figures — a million killed, a million enslaved, from a population of perhaps five million — are propaganda arithmetic, but the archaeology of abandoned settlements and the glut in the slave markets say the order of magnitude is not fantasy. This was conquest as demographic catastrophe, and Rome cheered it in installments.`,
    whyItMatters: `Gaul is Marius's reform operating at full scale: a proconsul recruiting, paying, and enriching his own legions for a decade, until the army was in every practical sense his. The war turned a bankrupt politician into the richest man in Roman politics and its most experienced general, with ten veteran legions that had never been the Senate's. It also moved Rome's center of gravity permanently — after Caesar the frontier of the Roman world was the Rhine, not the Alps, a fact that would organize European history for five centuries.`,
    misconception: {
      claim: 'Julius Caesar conquered Britain.',
      correction:
        'He raided it twice, in 55 and 54 BCE, took hostages and a promise of tribute, and left no garrison. Britain stayed outside the empire for nearly another century, until Claudius invaded in 43 CE.',
    },
    control: {
      'gallia-lugdunensis': 'contested',
      'gallia-belgica': 'contested',
      'gallia-aquitania': 'contested',
      'britannia-south': 'rival-celtic',
    },
    sources: [
      { author: 'Caesar', work: 'Commentarii de Bello Gallico', note: 'The only continuous account of the war is the perpetrator\'s own dispatches, written to justify it.' },
      { author: 'Plutarch', work: 'Life of Caesar', note: 'Source of the million-dead figure; ancient casualty numbers are rhetoric as much as count.' },
      { author: 'Adrian Goldsworthy', work: 'Caesar: Life of a Colossus', note: 'Modern narrative and a sober audit of the numbers; paraphrased.' },
    ],
    connects: ['caesar-consul-59bce', 'narbonensis-121bce', 'cimbri-teutones-113bce', 'marius-reform-107bce'],
  },
  {
    id: 'commentarii-56bce',
    year: -58,
    yearEnd: -50,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Commentarii: War as Serial Publication',
    headline:
      'While conquering Gaul, Caesar narrates it — seven books of plain third-person prose aimed straight at the Roman reader and voter.',
    tags: ['culture'],
    body: `While Caesar conquered Gaul he also narrated it. The Commentarii de Bello Gallico — seven books, one per campaigning year, apparently released as the war went on — are written in plain, fast, third-person prose: "Caesar" does things; the author never says "I." The choice of genre was itself the trick. A commentarius was a magistrate's raw field notes, a form that claimed artlessness — this is not literature, merely the record — while every sentence was built for effect. Cicero, no friend of the project, called the books naked, straight, and graceful, and said they had scared off anyone who might write the history properly.

Not everyone was fooled. Asinius Pollio, who fought under Caesar and later wrote his own history, said the Commentarii were composed carelessly and with too little regard for truth, and that Caesar meant to rewrite them. Modern readers can watch the technique: enemy numbers swell, the defeat at Gergovia becomes a subordinate's error, the massacre of German migrants during a truce becomes regrettable necessity. Rome had no press; this was the news from Gaul, and its author was its subject.`,
    whyItMatters: `For ten years the most talked-about man in Rome was five hundred miles away, and that was a literary achievement before it was a military one. The Commentarii kept Caesar's glory current, his enemies on the defensive, and his version canonical — so that when the war over his legitimacy began in 49, half of Italy already knew the Gallic war entirely from Caesar's own telling. There is a historiographical sting for us too: most of what anyone "knows" about the conquest of Gaul is the weapon itself.`,
    control: {},
    sources: [
      { author: 'Cicero', work: 'Brutus', note: 'The famous praise — from a rival stylist with his own reasons to flatter in 46 BCE.' },
      { author: 'Suetonius', work: 'Divus Julius', note: 'Transmits Pollio\'s verdict that the books are careless with the truth — a serving officer\'s dissent that undercuts the whole account.' },
    ],
    connects: ['gallic-wars-58bce', 'caesar-consul-59bce'],
  },
  {
    id: 'cicero-thought-55bce',
    year: -55,
    dateNote: 'c.',
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'Cicero Builds Latin Philosophy',
    headline:
      'Sidelined by the dynasts, Cicero starts turning Greek philosophy into Latin books — and manufactures the vocabulary Europe still thinks with.',
    tags: ['culture'],
    body: `By the mid-50s Cicero, the most famous voice in Rome, had discovered that in a politics run by three men a voice was not enough. Pushed to the margins, he began writing books instead: De Oratore in 55, on what an orator must know; De Re Publica soon after, a dialogue on the best constitution — meaning Rome's old one — composed while that constitution was visibly failing. Over the following decade, much of it in the enforced leisure of Caesar's dictatorship, he produced the body of work that made philosophy speak Latin, coining words where none existed: qualitas, moralis, and dozens more that survive in every European language as "quality," "morals," and their kin.

This was appropriation as a deliberate project. Greek philosophy had been in Rome for a century, but as a Greek possession, studied in Greek with Greek tutors. Cicero claimed it for Latin on purpose, and said so — Rome should not have to borrow its thinking. He was also perfecting a second invention: himself. His speeches were published, circulated, and studied as models; he is the first politician in Western history whose collected words are the career.`,
    whyItMatters: `Cicero lost his Republic and won the language. Through his dialogues Greek thought reached Augustine, the medieval schools, and the Renaissance — Petrarch's rediscovery of Cicero's letters is a plausible starting gun for humanism — so that when Europe does ethics or politics in Latin-derived categories, it is thinking through him. The deeper lesson is about what the 50s were doing to the Republic: its greatest orator turned to books precisely because speech had stopped mattering, and the books outlived every army in this file.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium'],
    sources: [
      { author: 'Cicero', work: 'De Oratore; De Re Publica', note: 'The self-portrait is part of the product; Cicero is his own best publicist.' },
      { author: 'Plutarch', work: 'Life of Cicero', note: 'Anecdote-hungry and moralizing, two centuries on.' },
    ],
    connects: ['greek-absorption-160bce', 'catiline-63bce', 'triumvirate-60bce'],
  },
  {
    id: 'julia-dies-54bce',
    year: -54,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'Julia Dies',
    headline:
      'Caesar\'s daughter — Pompey\'s wife — dies in childbirth, and the marriage that held the two men together is gone.',
    tags: ['social', 'constitutional'],
    body: `In 54 Julia — Caesar's only child, married to Pompey to seal the pact of 60 — died in childbirth; the baby followed within days. What had begun as pure politics had become, by every account, a real attachment: Pompey had scandalized senatorial opinion by preferring his young wife's company to his provinces. The Roman crowd understood what her body meant. It seized the funeral procession and buried her on the Campus Martius, the field of honor, over the magistrates' objections — the mob giving a state funeral to a marriage because it sensed the peace depended on it.

Caesar, in Gaul, proposed a replacement tie at once, offering a new dynastic marriage. Pompey declined. In 52 he married instead Cornelia, daughter of Metellus Scipio — one of Caesar's most determined enemies — and took her father as his consular colleague. The signal needed no decoding. When Crassus died at Carrhae the following year, nothing connected the two surviving dynasts but memory and a fading account book of favors.`,
    whyItMatters: `By the 50s the Republic's real constitution was a web of personal bonds, and Julia is the proof: one death in childbirth measurably moved Rome toward civil war, because a marriage had been doing the work institutions no longer could. When historians say the late Republic had contracted into private hands, this is what that means concretely — the peace of the Roman world had a single point of failure, and it was a twenty-two-year-old woman.`,
    control: {},
    sources: [
      { author: 'Plutarch', work: 'Life of Pompey', note: 'Romanticizes the marriage; the politics beneath the sentiment are inference.' },
      { author: 'Velleius Paterculus', work: 'Roman History 2', note: 'Compressed, and written under the emperors with hindsight built in.' },
    ],
    connects: ['triumvirate-60bce', 'caesar-consul-59bce'],
  },
  {
    id: 'carrhae-53bce',
    year: -53,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Carrhae: Crassus Destroyed',
    headline:
      'Crassus invades Parthia for glory he has not earned, loses seven legions to horse archers who never run out of arrows, and dies at a parley.',
    tags: ['military'],
    body: `In 53 Crassus — sixty years old, richer than the state, and hungry for a military reputation to match his partners' — invaded Parthia with seven legions and cavalry that was outnumbered and outclassed. There was no cause worth the name; Parthia had a treaty, and the tribune Ateius Capito had formally cursed the expedition at the city gate. Near Carrhae, in the dry country of upper Mesopotamia, the Parthian commander Surena met him with ten thousand horse archers, a thousand armored cataphracts, and the detail that decided everything: a camel train carrying spare arrows, so the shooting never stopped. The legions formed square and stood all day under archery they could not answer. Crassus's son Publius led the Gallic cavalry out to drive the archers off and was cut off and killed; his head came back on a spear-point. Perhaps twenty thousand Romans died and ten thousand were marched into captivity, and the legionary eagles were taken.

Crassus himself was forced by his own mutinous survivors to attend a parley, where a scuffle broke out and he was killed. The story that molten gold was poured down his throat is later embroidery; what Plutarch does report is that his head reached the Parthian court while the king was watching Euripides' Bacchae, and was carried on stage as a prop — a Greek tragedy performed for a Parthian king with a Roman triumvir's head, which is the eastern Mediterranean of the first century BCE in a single scene.

Rome now had something it had never had: a neighbor it could not digest. The frontier settled onto the Euphrates, and the lost eagles became a standing national humiliation that Roman policy would spend three decades trying to redeem.`,
    whyItMatters: `Carrhae fixed Rome's eastern limit for seven centuries — Parthia, and Persia after it, is the one rival in this entire story that never goes away — and it simultaneously broke the balance of Roman politics. The triumvirate had been stable because it was a triangle; with Crassus dead it was two men, one of whom had to end up first. Julia's death and Carrhae, twelve months apart, dismantled the pact of 60 more thoroughly than any senatorial maneuver ever had. The road to 49 runs through a Mesopotamian dust cloud.`,
    control: {},
    markers: [{ type: 'battle', label: 'Carrhae', at: [39.03, 36.87] }],
    sources: [
      { author: 'Plutarch', work: 'Life of Crassus', note: 'Shaped as a morality play about greed; the Bacchae scene is almost too good to check.' },
      { author: 'Cassius Dio', work: 'Roman History 40', note: 'Reports the molten-gold story explicitly as a story.' },
    ],
    connects: ['triumvirate-60bce', 'pompey-east-66bce', 'julia-dies-54bce'],
  },
  {
    id: 'clodius-52bce',
    year: -52,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'Clodius Murdered; the Senate House Burns',
    headline:
      'Rome\'s gang politics ends with Clodius dead on the Appian Way and the Senate House burned down as his funeral pyre — so the Senate hands the city to Pompey alone.',
    tags: ['constitutional', 'social'],
    body: `In January 52 Clodius met his rival gang-leader Milo on the Appian Way near Bovillae; the brawl between their escorts ended with Clodius dragged from an inn and finished off. His followers carried the body to the Forum and cremated it inside the Senate House itself, which burned to the ground with the pyre. Rome had already failed to hold elections for the year — rioting had prevented them — and now, with the Curia in ashes and no magistrates, the Senate turned to the one man with soldiers and made Pompey sole consul: an office with no republican precedent, invented on the spot because "dictator" was the word everyone was avoiding.

Pompey restored order his way. Milo was tried for the murder under a new emergency procedure, with troops ringing the court; Cicero, defending, lost his nerve in front of the soldiers, and Milo went into exile at Massilia — where he reportedly said he was glad the published version of Cicero's speech had never actually been delivered, or he would never have tasted the local mullet. Beneath the anecdote is the structural fact: for years the city's politics had been fought between organized street armies, and the Republic could no longer conduct an election, a trial, or a funeral without one man's legions standing by.`,
    whyItMatters: `The year 52 is the dress rehearsal for monarchy, staged by the monarchy's future opponents. The same constitutionalists who would refuse Caesar everything suspended the Republic's oldest rule — two colleagues, always — the moment order required it, and discovered that government by one indispensable man worked. Every argument later made against Caesar had already been conceded for Pompey; 52 taught Rome that legality bends to whoever is indispensable, and both dynasts were taking notes.`,
    control: {},
    sources: [
      { author: 'Asconius', work: 'Commentary on the Pro Milone', note: 'Near-contemporary, dry, and drawing on the official record — the best-documented street murder in Roman history.' },
      { author: 'Cicero', work: 'Pro Milone', note: 'The polished published speech is not the one that faltered in court; even the defense is a revision.' },
    ],
    connects: ['grain-dole-58bce', 'julia-dies-54bce'],
  },
  {
    id: 'alesia-52bce',
    year: -52,
    era: 'late-republic',
    weight: 3,
    reliability: 'well-attested',
    title: 'Alesia',
    headline:
      'Caesar walls Vercingetorix inside Alesia, walls himself against the relieving army, and wins the two-front siege that decides Gaul — and, in the long run, the shape of western Europe.',
    tags: ['military'],
    body: `In 52 BCE Gaul finally rose behind Caesar as one enemy. Vercingetorix of the Arverni united tribes that had never cooperated, burned Gaul's own towns to starve the legions, and handed Caesar his first clear defeat of the war at Gergovia — then, after losing a cavalry battle, shut himself with eighty thousand men inside the hilltop town of Alesia. Caesar answered with engineering. His legions built a wall around the town: eleven miles of double trench, rampart, palisade, and towers. Then word came that all Gaul was raising a relief army, and Caesar built a second wall facing outward — thirteen miles of the same — and put his army between them, besiegers and besieged at once. When the relief force arrived, the fighting ran on both walls simultaneously; at the crisis Caesar led his last reserves in person, conspicuous in the red commander's cloak, and his German cavalry broke the attackers from behind. The relief army dissolved, Alesia starved, and Vercingetorix rode out, circled his enemy once on horseback, and laid down his arms at Caesar's feet. Gaul never again fought Rome as one.

The campaign that led there had been ferocious on both sides. The revolt opened with the massacre of Roman traders at Cenabum; Caesar stormed Avaricum and killed, by his own account, nearly everyone in it; Vercingetorix's scorched-earth strategy was the coldest kind of arithmetic, trading Gallic towns for Roman hunger. His retreat into Alesia remains the war's great puzzle — a mobile war leader voluntarily accepting a siege, presumably to anchor Caesar in place until the relief army could crush him against the walls. It nearly worked.

The siege works themselves deserve their fame. Beyond the double ring stood twenty-three forts, and in front of the lines the legions sowed belts of traps the soldiers nicknamed with gallows humor: lilies — sharpened stakes in covered pits — and stimuli, barbed iron spikes. The grimmest episode is in Caesar's own account: the Mandubii of Alesia expelled their women and children to save food, Caesar refused them passage, and they starved to death in the no-man's-land between the walls. Our source for this is the man who watched it and wrote it down as sound procedure.

Vercingetorix was kept alive six years to walk in the triumph of 46, then executed in the prison beneath the Capitol. Caesar spent the next two seasons on pacification — conspicuous mercy for the great tribes, and at Uxellodunum the severed hands of every defender who had borne arms. By 50 Gaul was disarmed, assessed for tribute, and administered as conquered territory; the map turns provincial here, though the formal provinces would wait for Augustus.`,
    whyItMatters: `Alesia decided that western Europe would be Mediterranean — Latin-speaking, Roman-lawed, town-organized — rather than Celtic; the reason France speaks a Romance language today is the outcome on those two walls. No other single Roman battle has cultural consequences of that depth. And for Rome the victory closed a trap: Caesar now possessed a completed conquest, a fortune in plunder, ten veteran legions with nothing left to fight, and enemies at home publicly sharpening prosecutions for the day his command expired. Alesia did not cause the civil war, but it ended every version of the future in which Caesar was safely ordinary. After 52 the only question was timing.`,
    control: {
      'gallia-lugdunensis': 'provincial',
      'gallia-belgica': 'provincial',
      'gallia-aquitania': 'provincial',
    },
    markers: [{ type: 'siege', label: 'Alesia', at: [4.5, 47.54] }],
    sources: [
      { author: 'Caesar', work: 'Commentarii de Bello Gallico 7', note: 'The relief army\'s quarter-million men are the victor\'s own figure; the excavated siege works at Alise-Sainte-Reine confirm the engineering, not the arithmetic.' },
      { author: 'Plutarch', work: 'Life of Caesar', note: 'Adds the surrender tableau; the horseback circling may be literary staging.' },
      { author: 'Adrian Goldsworthy', work: 'Caesar: Life of a Colossus', note: 'On the logistics and the plausible numbers; paraphrased.' },
    ],
    connects: ['gallic-wars-58bce', 'commentarii-56bce', 'caesar-consul-59bce'],
  },
  {
    id: 'standoff-50bce',
    year: -50,
    yearEnd: -49,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Standoff',
    headline:
      'The Senate votes 370 to 22 for mutual disarmament by Caesar and Pompey — and the twenty-two win.',
    tags: ['constitutional'],
    body: `Through 50 BCE the crisis was, on its face, a technicality: could Caesar pass straight from his Gallic command into a second consulship without an interval as a private citizen — the interval in which his enemies had publicly promised to prosecute him? Cato had sworn it in so many words. A law of 52 permitted Caesar's candidacy in absentia; Pompey's own legislation the same year had muddied it; and beneath the lawyers' argument sat the real stakes, which everyone understood: conviction meant exile and political extinction. The tribune Curio, lately and expensively acquired by Caesar, proposed the symmetrical solution — both dynasts disarm at once — and in December 50 the Senate voted for it 370 to 22. Then the presiding consul dismissed the meeting, spread the rumor that Caesar was already marching, and handed Pompey a sword. The twenty-two had beaten the three hundred and seventy.

In the first days of January 49 Caesar's final compromise offers — shrinking, by the end, to one province and a single legion — were refused without a vote. The Senate passed its ultimate decree; the tribunes Antony and Cassius, vetoing, were threatened and fled north to Caesar disguised in a hired cart. The man who would cross the Rubicon now carried a constitutional grievance: the tribunate, the plebs' sacrosanct office, violated.`,
    whyItMatters: `The standoff shows what actually failed in the Republic: not consensus — the Senate's own vote for peace was overwhelming — but arbitration. No institution existed that could bind Caesar, Pompey, and the irreconcilables at once, so a dozen men who wanted a reckoning could close every legal exit against a majority that wanted none of it. Wars are supposed to happen when great forces collide; this one happened because a small group used law as a weapon until the law had no neutral ground left.`,
    control: {},
    sources: [
      { author: 'Cicero', work: 'Letters to Atticus', note: 'Day-by-day despair from inside; Cicero judged that victory for either side would produce a master.' },
      { author: 'Caesar', work: 'Bellum Civile 1', note: 'Opens with the injured-legality case for war — advocacy from the first sentence.' },
      { author: 'Appian', work: 'Civil Wars 2', note: 'Preserves the December vote count.' },
    ],
    connects: ['caesar-consul-59bce', 'alesia-52bce', 'clodius-52bce'],
  },
  {
    id: 'rubicon-49bce',
    year: -49,
    dateNote: 'January',
    era: 'late-republic',
    weight: 3,
    reliability: 'well-attested',
    title: 'The Rubicon',
    headline:
      'Caesar brings one legion across a trivial stream into Italy — the step, not the decade of conquest behind it, that makes him an outlaw.',
    tags: ['military', 'constitutional'],
    body: `On a January night in 49 Caesar led the Thirteenth Legion across the Rubicon, the small stream dividing his province of Cisalpine Gaul from Italy proper — where a proconsul at the head of troops was, by that single step, a public enemy. Suetonius has him pause on the bank and say the die was cast — alea iacta est; Plutarch has him say it in Greek, quoting a comic playwright, a gambler's line. Either way the point of the scene survives the staging: the crossing, not Gaul, was the crime. His command had been legally voted and legally extended; the conquests, however unauthorized in spirit, had been absorbed and celebrated. What no law could forgive was the army coming home attached to its general — the exact outcome the property-less legions of Marius had made structurally likely forty years before, and Sulla had twice demonstrated in practice.

What followed was speed as strategy. Caesar had one legion in Italy and winter on his side; the towns opened their gates, garrisons defected, and recruitment ran ahead of the march. Pompey — whose strength was real but elsewhere, in Spain's legions and the East's money and fleets — had boasted he need only stamp his foot in Italy for armies to rise. None rose. The government abandoned Rome in such panic that it left the treasury behind, and at Corfinium Caesar took the first opposing army whole and then did the thing that defined the war: he let everyone go, commanders included, with their money. Clementia was policy, advertised as the anti-Sulla — no proscriptions, no lists, no confiscations — and it worked; Italy did not fight him.

In March Caesar reached Brundisium and tried to bottle the harbor with a mole; Pompey slipped the blockade and ferried his forces across to Greece. The strategic logic was sound — the East was Pompey's client-world, full of his money, his fleets, and kings who owed him their thrones, and Sulla had proved a general could lose Italy and return with the East behind him — but the politics were ruinous: the Republic's champion had abandoned the Republic's homeland to its invader, and sixty days had settled Italy without a single pitched battle. When Caesar entered Rome weeks later and a tribune barred him from the treasury, he brushed the veto aside — the man whose declared cause was the sanctity of tribunes — and took the gold. The mask of legality was thin, and he wore it anyway, summoning what remained of the Senate and insisting on forms.`,
    whyItMatters: `The Rubicon is the Republic's structural failure compressed into one act. Follow the incentives: for Caesar, laying down command meant prosecution and exile; keeping it meant war with a veteran army that was personally his. The constitution itself had arranged those options — a Senate that made compromise impossible, courts that made retirement fatal, and legions whose loyalty followed their paymaster. Sulla's march had shown the way and Sulla's afterlife had shown you could legalize it later. The lesson is not that Caesar was uniquely wicked; it is that a system had been built, amendment by amendment and precedent by precedent, in which the rational move for its most successful servant was to invade it.`,
    misconception: {
      claim: 'Caesar broke the law by conquering Gaul without authorization.',
      correction:
        'The Gallic command was legally granted — by the Lex Vatinia and a senatorial addition, then extended. The aggression outran the mandate and outraged opponents, but the act that made Caesar an outlaw was crossing the Rubicon into Italy under arms in 49.',
    },
    control: {},
    markers: [{ type: 'political', label: 'Rubicon', at: [12.4, 44.09] }],
    sources: [
      { author: 'Suetonius', work: 'Divus Julius', note: 'The riverbank scene is drama written 150 years on; even the stream\'s exact identity is disputed.' },
      { author: 'Caesar', work: 'Bellum Civile', note: 'Caesar\'s own narrative never mentions the Rubicon — the illegal step is absent from the perpetrator\'s account.' },
      { author: 'Plutarch', work: 'Life of Caesar' },
    ],
    connects: ['standoff-50bce', 'sulla-march-88bce', 'marius-reform-107bce', 'alesia-52bce'],
  },
  {
    id: 'ilerda-49bce',
    year: -49,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'Ilerda',
    headline:
      'Caesar destroys Pompey\'s Spanish armies almost without a battle — by maneuver, thirst, and the promise that surrendering to him is safe.',
    tags: ['military'],
    body: `With Pompey across the Adriatic, Caesar turned west, saying — the line is reported by his own partisans — that he was off to fight an army without a general, and would then deal with a general without an army. Pompey's legates Afranius and Petreius held five legions in northeastern Spain around the town of Ilerda. Caesar beat them almost without fighting: outmaneuvered them, survived a flood that cut his own supply lines, then stripped the countryside and blocked their retreat until thirst and desertion did the work of a battle. Midway through, the two armies simply began fraternizing — soldiers wandering between camps looking for friends — until Petreius put a stop to it by executing the Caesarians caught in his lines. When the surrender came, Caesar killed no one, dismissed the rank and file to their homes, and took the willing into his own legions.

The same season his officers took Massilia by siege, and Further Spain changed sides without a fight. Within a year of the Rubicon, Caesar held Italy, Gaul, and Spain — the entire western Mediterranean — and the nearly bloodless Spanish campaign was the advertisement: competence plus clemency, against a party promising proscriptions.`,
    whyItMatters: `Ilerda proved that a civil war could be won by logistics and mercy rather than massacre, and the proof was itself a weapon: every soldier Caesar released walked home as a living argument that surrender was survivable, which dissolved enemy armies before battles could happen. It also stripped Pompey of his oldest recruiting ground — his Spanish clientele dated from the Sertorian war — and guaranteed that the decisive campaign of 48 would be fought on a single front, on ground of Caesar's choosing.`,
    control: {},
    sources: [
      { author: 'Caesar', work: 'Bellum Civile 1', note: 'The only detailed account is the winner\'s, and the clemency theme is its argument as much as its record.' },
      { author: 'Appian', work: 'Civil Wars 2' },
    ],
    connects: ['rubicon-49bce', 'sertorius-80bce'],
  },
  {
    id: 'pharsalus-48bce',
    year: -48,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Dyrrhachium, Pharsalus, and a Beach in Egypt',
    headline:
      'Beaten at Dyrrhachium, Caesar destroys Pompey\'s great army at Pharsalus — and Pompey is murdered by his own clients as he steps ashore in Egypt.',
    tags: ['military'],
    body: `Caesar crossed the Adriatic in midwinter through Pompey's blockade, gambled on besieging a larger army at Dyrrhachium, and lost — badly enough that he remarked the enemy would have won the war that day if their commander had known how to win. Pompey did not press. Weeks later, on 9 August 48, the armies met on a plain in Thessaly near Pharsalus: Pompey with some forty-five thousand men and a mass of cavalry under Labienus, Caesar with barely half that in veterans. Pompey's plan was orthodox and good — swamp Caesar's right with seven thousand horse. Caesar had hidden a fourth line of cohorts behind his own, with orders to hold their javelins and use them as spears, thrusting at the riders' faces; the young aristocratic cavalry broke, the exposed flank was rolled up, and by evening Caesar's men were in Pompey's camp among the dinner services laid out for a victory. Surveying the Roman dead, Caesar said: they would have it so — after all he had done, he would have been condemned had he not turned to his army. The line comes from Asinius Pollio, who heard it.

Pompey rode from the field before the end, and made for Egypt, whose boy-king owed his throne to Pompey's patronage. The regents did the client's arithmetic: a defeated patron is a liability, and the winner was coming. As Pompey stepped into the landing boat off Pelusium — the day before his fifty-eighth birthday — a Roman officer who had once served under him stabbed him in front of his wife and son, watching from the ship. The head was kept for Caesar, who wept at the sight, or performed weeping; the scene reaches us through his own partisans.`,
    whyItMatters: `Pharsalus ended the possibility of a restored Pompeian republic, and the beach at Pelusium showed what the client-king system really ran on: not gratitude but a running calculation of Roman power, updated the moment the news arrived. From here the war was Caesar against remnants, and the great political question inverted — no longer who would win, but what the winner would be. Rome spent the next four years discovering that nobody, including Caesar, had an answer, and the Ides of March is what an unanswered question looks like.`,
    control: {},
    markers: [{ type: 'battle', label: 'Pharsalus', at: [22.38, 39.3] }],
    sources: [
      { author: 'Caesar', work: 'Bellum Civile 3', note: 'Advocacy throughout; Dyrrhachium is handled with notable brevity.' },
      { author: 'Plutarch', work: 'Life of Pompey', note: 'The murder scene is shaped as tragedy, complete with spectator family — affecting, and unverifiable.' },
    ],
    connects: ['rubicon-49bce', 'ilerda-49bce', 'pompey-east-66bce'],
  },
  {
    id: 'alexandrian-war-48bce',
    year: -48,
    yearEnd: -47,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Alexandrian War and Cleopatra',
    headline:
      'Handed Pompey\'s head, Caesar stays in Alexandria, backs Cleopatra in the Ptolemaic civil war, survives a six-month siege — and leaves behind a client queen and a son.',
    tags: ['military'],
    body: `Caesar reached Alexandria days behind Pompey with four thousand men, was presented with his rival's head, and — instead of leaving — stayed, to collect old Ptolemaic debts and arbitrate the dynasty's civil war between the boy-king Ptolemy XIII and his sister Cleopatra. Cleopatra had herself smuggled through the siege lines to reach him, hidden in bedding — Plutarch says a laundry sack; the rolled carpet is later decoration. Caesar backed her claim, and the king's faction and the Alexandrian mob penned him in the palace quarter for six months of street fighting, during which fire spread from the harbor and burned part of the great Library's book stock in the dockside warehouses, and Caesar at one point swam for his life in the harbor. A relief army from the east broke the siege in 47; Ptolemy XIII drowned in the Nile, and Caesar installed Cleopatra — with a younger brother as nominal co-ruler — before sailing off after a Nile cruise that scandalized Rome. In June 47 she bore a son, Ptolemy Caesar; the Alexandrians called him Caesarion.

Egypt was pointedly not annexed. It was the richest prize in the Mediterranean, and that was exactly the problem: any senator sent to govern its grain and treasure would become an instant rival. A bound client queen was safer than a Roman governor — a judgment Augustus would later ratify in his own way.`,
    whyItMatters: `Two long fuses are lit here. Egypt's wealth enters Rome's civil-war arithmetic as a personal, not a public, resource — the calculation that runs straight to Antony, Actium, and annexation. And Caesarion: a son of Caesar's body would one day stand against a son of Caesar's name, and the boy's execution in 30 BCE is this event's arithmetic completed. The Alexandrian interlude looks like romance and is really the discovery that whoever holds Egypt holds a private empire.`,
    misconception: {
      claim: 'Cleopatra was an Egyptian queen.',
      correction:
        'She was Macedonian Greek — the last of the Ptolemies, the dynasty founded by Alexander\'s general three centuries earlier. Plutarch says she was the first of her line to bother learning the Egyptian language; the pharaonic imagery was statecraft, not ancestry.',
    },
    control: { aegyptus: 'client' },
    sources: [
      { author: 'Plutarch', work: 'Life of Caesar', note: 'The smuggling anecdote is irresistible and uncheckable.' },
      { author: 'Unknown officer', work: 'Bellum Alexandrinum', note: 'A staff continuation of Caesar\'s commentaries — partisan, but an eyewitness war record.' },
    ],
    connects: ['pharsalus-48bce', 'pompey-east-66bce'],
  },
  {
    id: 'zela-47bce',
    year: -47,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'Zela: Veni, Vidi, Vici',
    headline:
      'Caesar annihilates the son of Mithridates in a few hours and files the whole war in three words.',
    tags: ['military'],
    body: `While Caesar was pinned down in Alexandria, Pharnaces II — son of Mithridates the Great — came down from his Crimean kingdom to reclaim his father's Pontus, crushed a Roman army at Nicopolis, and mutilated the Roman prisoners. In August 47 Caesar met him at Zela, in the same hills where Mithridates had once slaughtered a Roman army a generation before. Suetonius' arithmetic: the campaign was over within five days of Caesar's arrival, the battle within four hours of sighting the enemy. Pharnaces attacked uphill — scythed chariots against entrenched veterans — and his army ceased to exist by midday. He fled, and was dead within the year at the hands of a rebellious governor.

Then the report. Veni, vidi, vici — I came, I saw, I conquered — written, Plutarch says, in a letter to a friend in Rome, and later carried on placards in the Pontic triumph of 46. The three words were policy, not just wit: Pompey had spent years and a career's worth of glory subduing Mithridates. Caesar's dispatch said, in effect, that what took the great Pompey a decade had taken him a morning.`,
    whyItMatters: `Zela closed the Mithridatic ledger for good, but its real product was a style. War reported as personal epigram — the state nowhere in the sentence, three first-person verbs and no subject but the commander — is the imperial voice arriving early. The distance between veni, vidi, vici and the Republic's old formula of commander-and-Senate-and-people measures precisely how far military glory had become one man's private property.`,
    control: {},
    markers: [{ type: 'battle', label: 'Zela', at: [35.88, 40.3] }],
    sources: [
      { author: 'Suetonius', work: 'Divus Julius', note: 'Places the three words on triumphal placards; the aphorism may postdate the battle it summarizes.' },
      { author: 'Plutarch', work: 'Life of Caesar' },
    ],
    connects: ['pompey-east-66bce', 'mithridates-88bce', 'alexandrian-war-48bce'],
  },
  {
    id: 'thapsus-cato-46bce',
    year: -46,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Thapsus, and Cato at Utica',
    headline:
      'Caesar destroys the republican army in Africa — and Cato, refusing even to be pardoned, kills himself at Utica and hands the dead Republic its martyr.',
    tags: ['military', 'constitutional'],
    body: `The republican cause regrouped in Africa: Metellus Scipio with ten legions, King Juba of Numidia with his own army and war elephants, the defector Labienus, and Cato holding the city of Utica. In April 46 Caesar brought them to battle at Thapsus. His slingers and archers panicked the elephants, which trampled back through their own lines — the Fifth Legion took the elephant as its emblem for standing against the charge — and the battle became a rout, then a massacre. Caesar's soldiers, hardened past obedience, butchered perhaps ten thousand men, many trying to surrender, and cut down even a few officers of their own side they suspected of softness. The clemency of Ilerda was fraying. Scipio died at sea; Juba fought a duel-suicide with a Roman companion; Numidia was annexed as the province of Africa Nova — its first governor the historian Sallust, who plundered it thoroughly.

Cato, commanding at Utica, refused the one thing still on offer: pardon. To accept Caesar's mercy was to concede Caesar's right to grant it. He spent his last evening at dinner arguing Stoic paradoxes, read Plato's dialogue on the soul, slept, and stabbed himself before dawn; his household found him alive, and a physician sewed the wound; he waited, then tore it open with his hands. Caesar, arriving, said: Cato, I begrudge you your death, as you begrudged me the saving of your life.

The pamphlet war began at once — Cicero published a eulogy called Cato; Caesar answered with an Anticato, arguing with a ghost and losing. Under the emperors, Cato became the icon of republican virtue it was safe to praise precisely because he was dead.`,
    whyItMatters: `Thapsus won Caesar the war in Africa; Utica lost him the argument, permanently. By refusing pardon itself, Cato exposed what clemency actually was — a sovereign's power, whose acceptance makes you a subject — and turned his own corpse into the one position Caesar could not capture. The Republic's most durable afterlife is this moral one: for centuries, under emperors who ruled everything else, Cato remained the standard by which they could be silently judged. Martyrdom, it turned out, was the only republican institution Caesar couldn't dissolve.`,
    control: { numidia: 'provincial' },
    sources: [
      { author: 'Plutarch', work: 'Life of Cato the Younger', note: 'Hagiography by a Platonist — the deathbed is staged as a philosophical passion play, and should be read as one.' },
      { author: 'Unknown officer', work: 'Bellum Africum', note: 'A Caesarian soldier\'s rough campaign narrative; no sympathy for the other side.' },
    ],
    connects: ['pharsalus-48bce', 'catiline-63bce', 'ilerda-49bce'],
  },
  {
    id: 'calendar-46bce',
    year: -46,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Julian Calendar',
    headline:
      'Caesar stretches 46 BCE to 445 days to fix a calendar the priests had politicized into nonsense — and every date after it runs on his clock.',
    tags: ['religious', 'culture'],
    body: `The Roman year was 355 days long, kept roughly in step with the sun by an extra month inserted at the discretion of the pontiffs — and the pontiffs were politicians. Intercalation could stretch a friendly consul's term or shorten an enemy's, and through the chaos of the civil wars it had simply lapsed, until by 46 the civic calendar ran some three months ahead of the seasons: harvest festivals falling in what the sky insisted was spring. Caesar — pontifex maximus for seventeen years, and now dictator with the power to act on what every pontifex had known — brought in the Alexandrian astronomer Sosigenes and rebuilt time. The year 46 was stretched to 445 days, with two extra months wedged in — Romans called it the last year of confusion — and from 1 January 45 the year became 365 days, with one day added every fourth year. It is, with one later trim, the calendar this app's dates are written in.

The rollout had Roman touches. The month Quintilis was renamed Julius — July — while its namesake lived. After his death the priests botched the leap rule by counting inclusively, adding a day every third year, and Augustus had to suspend leap years to drain the error. The residual eleven minutes per year accumulated for sixteen centuries until Pope Gregory trimmed it in 1582.`,
    whyItMatters: `The calendar is the best small answer to the question of what a dictatorship was for, and why parts of it were welcomed. Rome's competitive politics could never have fixed time, because time itself was a partisan instrument — the reform required someone with nothing to gain from cheating the length of a year. It is also Caesar's only conquest that never needed a garrison: the empire fell, the language died in the streets, and January kept coming.`,
    control: {},
    sources: [
      { author: 'Suetonius', work: 'Divus Julius' },
      { author: 'Macrobius', work: 'Saturnalia', note: 'Our clearest technical account, written some 450 years after the reform.' },
    ],
    connects: ['augury-priesthoods-650bce', 'alexandrian-war-48bce'],
  },
  {
    id: 'munda-45bce',
    year: -45,
    era: 'late-republic',
    weight: 1,
    reliability: 'well-attested',
    title: 'Munda',
    headline:
      'The last army of the civil war dies in a frontal slog in southern Spain — the battle Caesar said he fought not for victory but for his life.',
    tags: ['military'],
    body: `The war's last army gathered in southern Spain around Pompey's sons Gnaeus and Sextus and the defector Labienus — thirteen legions, many filled with men Caesar had already beaten and pardoned once or twice before, which is why this time nobody expected mercy. At Munda, on 17 March 45, there was no room left for maneuver: a frontal uphill fight, the ugliest of the whole war. The line wavered badly enough that sources describe Caesar seizing a shield and fighting in the front rank, and he said afterward that he had often fought for victory, but at Munda for his life. It ended as annihilation — some thirty thousand dead on the Pompeian side, Labienus killed on the field, Gnaeus hunted down and executed within weeks. Only Sextus escaped, to become the next generation's problem.

Back in Rome, Caesar triumphed — officially over "Spain." The city was not fooled and did not like it. His earlier triumphs had worn fig leaves (Gaul, Egypt, Pontus, "Juba's" Africa); this one celebrated the killing of Romans by Romans, sons of Pompey among them, and even friendly observers recorded the resentment. He had eleven months to live.`,
    whyItMatters: `Munda ended the fighting without ending anything else. Total victory dissolved the last external check on Caesar and with it the last excuse for postponing the constitutional question — with no enemy left to define him, "what is Caesar now?" had to be answered, and the honors avalanche and perpetual dictatorship followed within months. The battlefield had gone silent, which meant the only instruments left for opposing him were arguments and daggers.`,
    misconception: {
      claim: 'Caesar came back from Gaul, took over Rome, and that was that.',
      correction:
        'Between the Rubicon and unchallenged power lie four years of empire-wide civil war — Italy, Spain twice, Greece, Egypt, Pontus, and Africa — ending only at Munda in March 45, eleven months before his assassination.',
    },
    control: {},
    markers: [{ type: 'battle', label: 'Munda', at: [-4.55, 37.29] }],
    sources: [
      { author: 'Unknown soldier', work: 'Bellum Hispaniense', note: 'An eyewitness account in the roughest Latin to survive antiquity — vivid, partisan, and barely literate.' },
      { author: 'Plutarch', work: 'Life of Caesar', note: 'Source of the fighting-for-my-life remark and the resentment at the triumph.' },
    ],
    connects: ['pharsalus-48bce', 'thapsus-cato-46bce', 'ilerda-49bce'],
  },
  {
    id: 'dictator-perpetuo-44bce',
    year: -44,
    era: 'late-republic',
    weight: 2,
    reliability: 'well-attested',
    title: 'Dictator Perpetuo',
    headline:
      'The emergency office becomes permanent, a living Roman\'s face appears on the coinage for the first time — and at the Lupercalia Caesar theatrically refuses a crown.',
    tags: ['constitutional'],
    body: `In early 44 Caesar's dictatorship — an office that was legal precisely because it expired — was made perpetual: dictator perpetuo. The mint struck silver bearing his portrait, the first time a living Roman's face had appeared on Rome's coins, where gods and dead ancestors belonged. A competitively servile Senate stacked the honors: a month renamed for him, a statue among the old kings, a gilded chair, his person declared sacrosanct, a priesthood established for his cult with Antony as its priest — divine honors trembling on the edge of the explicit. At the Lupercalia festival on 15 February, Antony, consul that year, three times offered him a royal diadem before the crowd. The crowd groaned; Caesar refused it, ordered the refusal entered in the public record, and sent the diadem to Jupiter — the only king in Rome. Whether the scene was a test of opinion, a staged renunciation, or Antony improvising has been argued from that afternoon to this one.

What Caesar intended is the oldest open question in Roman history. What he did is documented: he filled magistracies years in advance by personal designation, expanded the Senate to nine hundred with his officers and even Gauls — graffiti joked about senators in trousers asking the way to the Senate House — deposed two tribunes who removed a diadem from his statue, and reportedly said that Sulla had shown himself a political illiterate by resigning the dictatorship, and that the Republic was a name without a body. Elections became ratifications; the Senate met to discover what it had decided. And he was leaving: departure for a three-year Parthian war was fixed for 18 March, after which Rome would be governed by dispatch from the East.`,
    whyItMatters: `Perpetuo dissolved the one distinction the Roman constitution had preserved through every previous convulsion: between emergency and normality. Sulla had taken unlimited power and given it back; Caesar took it forever, and thereby stripped away the fiction — load-bearing for four and a half centuries — that the Republic's institutions were merely sleeping. The assassination follows from the title as much as the power. Senators had endured the substance of one-man rule for years; it was permanence, wrapped in regal and divine symbolism and about to become government-by-absentee, that told them waiting was no longer a strategy.`,
    misconception: {
      claim: 'Julius Caesar was the first Roman emperor.',
      correction:
        'Caesar was never emperor — no such office existed. He was dictator, a republican emergency magistracy whose time limit he removed, and he publicly refused the diadem of a king. The imperial system was built a generation later by Augustus, who learned from the Ides to take Caesar\'s power while avoiding Caesar\'s titles.',
    },
    control: {},
    sources: [
      { author: 'Suetonius', work: 'Divus Julius', note: 'The catalog of honors is compiled with hostile relish; some items may be senatorial flattery Caesar never sought.' },
      { author: 'Cicero', work: 'Philippics 2', note: 'The fullest Lupercalia account — retold as invective against Antony, by a witness with a war to win.' },
    ],
    connects: ['munda-45bce', 'sulla-dictator-82bce', 'sulla-resigns-79bce'],
  },
  {
    id: 'assassination-44bce',
    year: -44,
    dateNote: 'March 15',
    era: 'late-republic',
    weight: 3,
    reliability: 'well-attested',
    title: 'The Ides of March',
    headline:
      'Sixty senators kill the dictator at the foot of Pompey\'s statue — and discover within days that they had a tyrant\'s corpse and no plan for the morning after.',
    tags: ['constitutional'],
    body: `On 15 March 44, at a Senate meeting in the Curia attached to Pompey's theater complex, some sixty senators killed the dictator with daggers they had carried in under their togas. Tillius Cimber pulled Caesar's toga down as the signal; Casca struck first and glancingly, and cried out for his brother; the rest crowded in. Caesar took twenty-three wounds and fell at the base of Pompey's statue. The Greek words "you too, child?" are reported by Suetonius only as a rumor — and "Et tu, Brute" is Shakespeare, not Rome. The conspirators, led by Brutus and Cassius — most of them pardoned Pompeians, several his own trusted officers — marched to the Capitol proclaiming liberty restored. The city did not rise to join them. Within days an uneasy compromise gave amnesty to the assassins while confirming every one of Caesar's acts — the murder condemned and ratified in a single motion — and within a week his funeral had raised a mob that burned the body in the Forum and firebrands drove the liberators from Rome.

The plot itself was a coalition of the pardoned and the disappointed, and its trigger was the calendar as much as the crown: Caesar was leaving for Parthia on 18 March, after which he would be untouchable for years, governing Rome by dispatch. The famous warnings — the soothsayer Spurinna, Calpurnia's dream, the sacrifices gone wrong — are the sources' dramatic scaffolding, but they preserve something real: the conspiracy leaked, and only haste saved it. It was Decimus Brutus, a conspirator Caesar trusted like family, who talked him out of staying home.

Brutus imposed the plot's fatal shape on principle. This was to be an execution of a tyrant, not a coup: Antony would not be touched — Brutus overruled the proposal — no treasury would be seized, no legions summoned, no machinery of government taken in hand. The assumption underneath was that with the tyrant dead, the res publica would resume of its own accord, like a spring released. It was the most expensive political science error in Roman history.

The morning after belonged to other men. Antony was consul, alive, and holding Caesar's papers and war chest; Lepidus had troops on the Tiber island; tens of thousands of veterans in Italy held land titles that depended on Caesar's acts remaining law. At the funeral Antony's oration — and a wax effigy of the body, raised on a mechanism and rotated to show all twenty-three wounds, as Appian describes it — did the rest, and the reading of the will completed it: Caesar's gardens left to the public, a cash gift to every citizen, and his eighteen-year-old great-nephew Octavian, away across the Adriatic, adopted as his son. Cicero, who had applauded the deed, wrote its epitaph within weeks: done with the courage of men, he said, and the planning of children.`,
    whyItMatters: `The assassination is the strongest evidence in Roman history that personalizing a structural problem does not solve it. The conspirators' diagnosis was that autocracy was one man's ambition; but by 44 it was a structure — client armies bound to paymasters since Marius, the Sullan precedent for marching on the city, veterans owed land only autocrats could deliver, provinces functioning as private power bases, a capital bonded to patrons by grain and games. Killing the man left the structure standing and merely advertised the vacancy. Thirteen more years of civil war produced not the Republic but a better autocrat — Augustus, who studied the corpse and took the power without the title. Remove a tyrant without changing the incentives that produced him, and you have scheduled the next one.`,
    misconception: {
      claim: 'By 44 BCE the Senate and the Republic were long dead anyway, so the assassination changed nothing.',
      correction:
        'The machinery was functioning — Caesar was killed at a Senate meeting, in a working Senate, in a city with sitting courts and scheduled elections, however managed. The murder mattered enormously; what it could not do was what its authors intended, because the Republic\'s problem was structural, not personal.',
    },
    control: {},
    markers: [{ type: 'political', label: 'Rome', at: [12.48, 41.89] }],
    sources: [
      { author: 'Suetonius', work: 'Divus Julius', note: 'The death scene is a mosaic of rumors that Suetonius himself flags as such.' },
      { author: 'Cicero', work: 'Letters to Atticus', note: 'Real-time reaction — exultant in March, despairing by April; the verdict on the planning is his.' },
      { author: 'Appian', work: 'Civil Wars 2', note: 'Fullest account of the funeral and the crowd\'s turn; written two centuries later.' },
    ],
    connects: ['dictator-perpetuo-44bce', 'rubicon-49bce', 'sulla-resigns-79bce', 'marius-reform-107bce'],
  },
];
