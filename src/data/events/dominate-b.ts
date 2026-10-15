// 325-395 CE, Nicaea to Theodosius

import type { RomeEvent } from '../../types';

export const DOMINATE_B_EVENTS: RomeEvent[] = [
  {
    id: 'nicaea-325ce',
    year: 325,
    era: 'dominate',
    weight: 2,
    reliability: 'well-attested',
    title: 'The Council of Nicaea',
    headline:
      'Constantine summons every bishop in the empire to a lakeside palace at state expense, presides in purple, and makes a theological formula an instrument of government.',
    tags: ['religious', 'constitutional'],
    body: `In the summer of 325 Constantine convened some 250 to 300 bishops at Nicaea in Bithynia — their travel paid on the imperial post, the roads and relays built for armies and tax collectors — to settle a dispute tearing apart the church he had legalized twelve years earlier. Arius, a presbyter of Alexandria, taught that the Son of God was a created being: "there was when he was not." His bishop had condemned him; the quarrel had split congregations across the Greek east. Constantine opened the council in person, robed in purple and gold, urged the bishops toward harmony, and steered them to a creed declaring the Son homoousios — "of one substance" — with the Father. All but a handful signed. Arius and two holdouts went into exile by imperial order, the state now enforcing a doctrine of the church.

The winning word was the awkward part. Homoousios appears nowhere in scripture, and it was pressed on the council by the emperor's circle — his ecclesiastical adviser Ossius of Corduba above all — precisely because it was a line Arius could not sign. The council also detached the date of Easter from the Jewish calendar and issued twenty canons of church discipline. Constantine's own letters show what he wanted: not a metaphysics but a united church praying for a united empire. He called the underlying question a trifle unworthy of so much quarrel.

Unity is not what he got. Within a few years Constantine had recalled Arius and exiled Athanasius, the fiercest champion of Nicaea; on his deathbed in 337 he was baptized by Eusebius of Nicomedia, a bishop of the anti-Nicene party. His son Constantius II backed compromise creeds, and the dispute consumed the century. One late consequence mattered more than any council: the missionary Ulfilas converted the Goths beyond the Danube to the non-Nicene form of the faith — so when the Goths later entered the empire, they arrived not merely as foreigners but, by the standard of 325, as heretics.`,
    whyItMatters: `The theology mattered less than the precedent. An emperor had summoned the church, paid its way, sat at the center of its deliberations, and enforced its conclusions with exile — and the bishops, three years past the last persecution, accepted every part of that. From Nicaea forward, orthodoxy is a category of imperial law and doctrinal dispute is a form of politics with the state as referee: the pattern that runs through Constantinople in 381, Chalcedon in 451, and a thousand years of the eastern empire. The church got the machinery of the state; the price was that its arguments would now be settled, or inflamed, by whoever wore the purple.`,
    misconception: {
      claim: 'The Council of Nicaea decided which books would be in the Bible.',
      correction:
        "The biblical canon was never on the agenda — that story is a modern myth. Nicaea dealt with Arius's teaching about the Son, the date of Easter, and church discipline. The canon of scripture formed gradually over centuries; the closest thing to a decisive list, Athanasius's festal letter naming the 27 New Testament books, came in 367, and no ecumenical council of antiquity fixed it.",
    },
    control: {},
    sources: [
      {
        author: 'Eusebius',
        work: 'Life of Constantine',
        note: "A bishop's panegyric of his patron, written just after the emperor's death; the council appears as pious harmony, with the arm-twisting smoothed away.",
      },
      {
        author: 'Socrates Scholasticus',
        work: 'Ecclesiastical History',
        note: 'Written a century later, compiling earlier accounts now lost.',
      },
      { author: 'Peter Brown', work: 'The Rise of Western Christendom' },
    ],
    connects: ['constantine-sole-324ce', 'milan-313ce', 'christian-growth-170ce'],
  },

  {
    id: 'constantinople-330ce',
    year: 330,
    era: 'dominate',
    weight: 3,
    reliability: 'well-attested',
    title: 'Constantinople Founded',
    headline:
      'Constantine rebuilds the Greek town of Byzantium into a second Rome on the Bosporus — sea-fed, near both dangerous frontiers, and positioned to outlive the west by a thousand years.',
    tags: ['infrastructure', 'constitutional'],
    body: `On 11 May 330 Constantine dedicated his new capital on the site of Byzantium, an old Greek town on the European shore of the Bosporus. He had chosen the ground in 324, after crushing Licinius in battles fought almost within sight of it, and built at furious speed for six years: a land wall enclosing several times the old town, an enlarged hippodrome joined to a new imperial palace, a forum with a porphyry column carrying his own statue, and a senate house for a senate of his own creation. Officially it was New Rome; everyone called it Constantinople, Constantine's city. To feed it, the grain fleet of Egypt — which had provisioned Rome for three and a half centuries — was redirected to the Bosporus.

The site was an administrator's choice, not a sentimental one. A peninsula with sea on two sides and a single short land wall; command of the crossing between Europe and Asia and of every ship moving between the Black Sea and the Mediterranean; and a position within reach of both the lower Danube and the road to the Persian frontier — the two fronts that consumed the late Roman army. Emperors had already migrated toward the work: Diocletian had ruled from Nicomedia, sixty miles away, and the tetrarchs' working capitals — Trier, Milan, Sirmium, Nicomedia — tracked the frontiers, not the Forum. Constantine was perfecting an existing drift, with better geography.

Rome itself lost nothing on paper and everything in fact. It kept its senate, its prefect, its grain dole from Africa, its prestige; emperors simply stopped coming, except as tourists — when Constantius II finally visited in 357 he gaped at the monuments like any provincial. Constantinople's new senators ranked below Rome's at first; within two generations they were equals, and the city had grown from a modest town toward the hundreds of thousands, with everything that follows population: preachers, mobs, dockworkers, and the chariot factions of the hippodrome.

Later legend made the founding a purely Christian act. The reality was mixed, like its founder: churches were begun, but the dedication featured traditional rites, the city received a Tyche — a pagan guardian goddess — and the statue on the porphyry column showed Constantine with the radiate crown of the sun god. What the city genuinely lacked was old temples with old priesthoods; unlike Rome, no ancient cult held ground there, and within a century it read as the Christian capital it had perhaps always been intended to become.`,
    whyItMatters: `This is the decision that decides 476. When the west collapses, the empire survives because its center of gravity had moved to a place that could not be starved or stormed: supplied by sea, walled on its one land approach (impregnably so after 413), sitting on the toll gate between two seas, close enough to manage both the Danube and Persia. The eastern government could lose a field army — it did, at Adrianople — and buy time behind the walls; the western government had no equivalent anchor, only Ravenna, which protected the court and nothing else. Constantine did not divide the empire in 330. He gave one half a capital that could not be killed, and that half is the one still calling itself Rome in 1453.`,
    misconception: {
      claim: 'Constantine moved the capital, abandoned Rome, and split the empire.',
      correction:
        'Rome had not been the emperors\' working residence for decades — Diocletian ruled from Nicomedia and visited Rome perhaps once. Constantinople replaced Nicomedia as the eastern seat, Rome kept its senate and privileges, and the empire remained one state under one law. The division into two courts came sixty-five years later, and even that was administrative, not a secession.',
    },
    control: {},
    markers: [{ type: 'founding', label: 'Constantinople', at: [28.98, 41.01] }],
    sources: [
      {
        author: 'Eusebius',
        work: 'Life of Constantine',
        note: 'Presents the founding as a wholly Christian act; the dedication ceremonies were more traditional than he lets on.',
      },
      {
        author: 'Zosimus',
        work: 'New History',
        note: 'A pagan historian writing around 500 who blamed Constantine for the empire\'s decline; hostile to everything about the man, including his city.',
      },
      { author: 'Averil Cameron', work: 'The Later Roman Empire' },
    ],
    connects: ['constantine-sole-324ce', 'tetrarchy-293ce', 'milvian-312ce'],
  },

  {
    id: 'constantine-sons-337ce',
    year: 337,
    yearEnd: 353,
    era: 'dominate',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Sons of Constantine',
    headline:
      'Constantine dies with three heirs and no plan; the army murders the wider family, the brothers fight, and sixteen years later only Constantius II is left.',
    tags: ['succession', 'military'],
    body: `Constantine died in May 337 leaving the empire to three sons — Constantine II, Constantius II, and Constans — without ranking them or providing for anyone else. The army provided. Within months, soldiers in Constantinople massacred nearly every male relative outside the direct line: two of Constantine's half-brothers and seven nephews died, and contemporaries blamed Constantius II, who was on the spot and profited most. Two small boys of the doomed branch were spared — Gallus and Julian, the younger of whom would remember. The three brothers then partitioned the empire, and the partition lasted three years: in 340 Constantine II invaded his brother Constans's Italy and was killed at Aquileia. In 350 the usurper Magnentius killed Constans in Gaul. Constantius II broke Magnentius at Mursa in 351 — a battle so murderous that men said it gutted the empire's veteran field armies — and by 353 ruled the whole empire alone.

The dynastic principle had done exactly what it always did. Diocletian's tetrarchy had tried succession by appointment and merit; Constantine reverted to blood, and blood delivered a family massacre and two civil wars inside sixteen years. But the massacre itself proved how strong the dynasty's grip was: the soldiers killed every possible claimant not descended from Constantine because armies would follow no one else — a loyalty Magnentius, for all his victories, could never manufacture.`,
    whyItMatters: `The empire's oldest structural flaw — no legal mechanism of succession — survived every reinvention of the office, and the price kept compounding. Mursa killed more trained Roman soldiers than most frontier disasters, in a war that decided nothing except which of Constantine's sons collected the inheritance; those veterans were not standing on the Rhine or the Danube in the decades that followed. The fourth century's real arithmetic is here: an empire that could still beat any external enemy kept spending its best armies on itself, and every succession was a throw of the dice with the frontiers as the stake.`,
    control: {},
    sources: [
      {
        author: 'Julian',
        work: 'Letter to the Athenians',
        note: 'The surviving nephew\'s own account, written while justifying his revolt against Constantius — an accusation, not a history.',
      },
      { author: 'Eutropius', work: 'Breviarium' },
    ],
    connects: ['constantine-sole-324ce', 'tetrarchy-293ce', 'augustus-dies-14ce'],
  },

  {
    id: 'bishops-elite-350ce',
    year: 350,
    dateNote: 'c.',
    era: 'dominate',
    weight: 1,
    reliability: 'well-attested',
    title: 'Bishops Become the Urban Elite',
    headline:
      'As town councils buckle under tax and obligation, the bishop — with money, a court, food, and God — becomes the most powerful man in most Roman cities.',
    tags: ['religious', 'social'],
    body: `By the middle of the fourth century, power in the Roman city was flowing toward a new office. A bishop controlled church wealth swollen by imperial grants and private legacies; he fed registered widows, orphans, and poor from church stores; he judged lawsuits in an episcopal court that Constantine had made legally binding — faster and cheaper than the governor's; and he could intercede with officials on behalf of his city as its recognized spokesman. Clergy were exempt from curial obligations, the crushing civic duties that town councilors owed, and the councils complained bitterly of decurions escaping into ordination. In a great see — Carthage, Antioch, Alexandria — the bishop commanded crowds no governor could raise and no governor wanted to face.

Something older was being repurposed. The classical grandee had displayed his generosity through games, baths, and feasts for his fellow citizens; the bishop redirected the display toward a clientele civic ideology had never counted — the destitute as such. "Love of the poor" became the public virtue, with granaries and hostels as its monuments: Basil built a whole charitable complex outside Caesarea that contemporaries described as a new city. The mechanics, though, were the oldest in Rome — patron and clients, favors down, loyalty up — with the crowd at the church door as the new client body. Within a generation, Ambrose of Milan would use that leverage on emperors themselves.`,
    whyItMatters: `When the western state dissolved in the fifth century, its cities did not fall into a vacuum — they fell to their bishops, who already ran the food, the courts, the buildings, and the loyalties. The medieval bishop-city, and ultimately the papacy, are the late Roman municipal order continued under another name. This is the quiet answer to how Christianity survived Rome: not as a creed that outlasted an empire, but as the one urban institution still solvent, staffed, and trusted when everything else stopped working.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['africa-proconsularis', 'syria', 'asia'],
    sources: [
      {
        author: 'John Chrysostom',
        work: 'Homilies',
        note: 'The Antioch preacher\'s figures for the church\'s poor rolls are a participant\'s claims, made while asking for money.',
      },
      { author: 'Peter Brown', work: 'Power and Persuasion in Late Antiquity' },
    ],
    connects: ['milan-313ce', 'christian-growth-170ce', 'client-patron-460bce'],
  },

  {
    id: 'monasticism-360ce',
    year: 360,
    dateNote: 'c.',
    era: 'dominate',
    weight: 1,
    reliability: 'well-attested',
    title: 'The Desert Alternative',
    headline:
      'Egyptian farmers and Syrian villagers walk out of the ancient city into the desert, and their refusal becomes the most admired life in the empire.',
    tags: ['religious'],
    body: `By the 360s the deserts of Egypt held thousands of monks, and their fame ran ahead of them across the empire. The emblem was Antony, a Coptic farmer who around 270 had given away his land and withdrawn into the wilderness, and who died in 356 at a reported hundred and five. Athanasius's Life of Antony, written within a year or two of the death and quickly translated into Latin, became one of antiquity's runaway bestsellers — thirty years later Augustine heard the story told in Milan and dated his own conversion crisis to the hearing. Alongside the solitaries grew something more organized: from the 320s Pachomius built walled communal monasteries along the Nile, villages of monks with rules, wardens, and work rosters, while Syria bred its own tradition of spectacular individual austerity. Ancient authors inflated the head-counts, but the scale was real and unprecedented.

What the monk renounced was not just comfort but the ancient city itself: marriage, property, the tax rolls, the curial burdens, the whole machinery of civic obligation. With the persecutions ended, the martyr's crown was no longer available; ascetic discipline replaced it as the heroic form of the faith. And the desert did not stay out of politics. Pilgrims sought the holy man as an arbiter and patron standing outside every official hierarchy, bishops recruited monks as allies and enforcers, and by the century's end monastic muscle was demolishing temples in Syria and Egypt.`,
    whyItMatters: `Monasticism looks like withdrawal and worked as power — a parallel society with its own economy, discipline, and prestige, loyal to the church rather than the city. Its institutions proved more durable than the empire that watched them form: when western cities shrank and the tax state vanished, the monastery — self-provisioning, literate, ruled by a written constitution — was the Roman institution that kept functioning, and nearly everything ancient that reached the Middle Ages in the west was copied inside one. The men who walked out of the ancient world ended up carrying it.`,
    control: {},
    nonTerritorial: true,
    spatialFocus: ['aegyptus', 'syria'],
    sources: [
      {
        author: 'Athanasius',
        work: 'Life of Antony',
        note: 'The hagiography that invented the genre; its Antony is also a weapon in Athanasius\'s doctrinal wars, and the biography should be read as advocacy.',
      },
      { author: 'Peter Brown', work: 'The Body and Society' },
    ],
    connects: ['great-persecution-303ce', 'christian-growth-170ce', 'bishops-elite-350ce'],
  },

  {
    id: 'julian-361ce',
    year: 361,
    yearEnd: 363,
    era: 'dominate',
    weight: 2,
    reliability: 'well-attested',
    title: 'Julian, the Last Pagan Emperor',
    headline:
      'A philosopher-nephew of Constantine survives the family massacre, secretly abandons Christianity, wins Gaul, takes the throne — and is dead in Persia at thirty-one.',
    tags: ['religious', 'military'],
    body: `Julian was one of the two boys spared in the dynastic massacre of 337. Raised under guard on remote estates, a church reader in his teens, he was educated in Greek philosophy and somewhere around 351 privately stopped being a Christian, converting to the Neoplatonist paganism he called Hellenism — and telling almost no one for a decade. Constantius II, running out of relatives, made him Caesar in Gaul in 355, expecting a figurehead; the bookish cousin turned out to be a general, smashing the Alamanni at Strasbourg in 357. In 360 his troops in Paris proclaimed him Augustus rather than surrender their best units to the east. Civil war was averted only because Constantius died in Cilicia in November 361, naming Julian heir. Sole emperor at twenty-nine, he declared his paganism openly and set about reversing fifty years of imperial religion.

His method was everything except persecution. He reopened and re-endowed temples, restored the sacrifices, and stripped the church of its subsidies and clerical privileges; he proclaimed toleration and recalled the bishops exiled by Constantius — partly, Ammianus suspected, because he had observed that no beasts are as savage to each other as quarreling Christians. His school edict of 362 barred Christians from teaching the classical authors, on the argument that they should not teach what they did not believe; even Ammianus, his admirer, wrote that the measure deserved to be buried in eternal silence. Strangest of all, he tried to build paganism a church — provincial high priests, moral standards for clergy, organized charity — complaining that the Galileans fed not only their own poor but everyone else's. Antioch, comfortable and Christian, mocked his beard and his austerity; he answered with the Misopogon, a public satire on the city and himself.

Then he spent it all on Persia. In spring 363 he led perhaps 65,000 men down the Euphrates, won a battle under the walls of Ctesiphon but could not besiege it, burned his supply fleet, and turned north up the Tigris in the summer heat, harassed at every march. On 26 June, hurrying unarmored into a skirmish near Samarra, he took a spear through the ribs and died at midnight in his tent — aged thirty-one, discoursing with two philosophers on the nobility of the soul, having named no successor.`,
    whyItMatters: `Julian is the experiment that settles the question of whether Christianization was reversible, and the answer he supplies is: not by these means, and probably not at all. The machinery of imperial favor worked in both directions — he proved that in twenty months — but two generations of patronage had given the church institutions with no pagan equivalent, which is why he was reduced to inventing pagan ones by imitation. His real enemy was not the church but the absence of anything shaped like it on his own side. His death made the experiment unrepeatable: every emperor after him was Christian, and the pagan aristocracy drew the lesson that the contest would not be decided by the throne.`,
    misconception: {
      claim: 'Julian the Apostate persecuted Christians to bring back paganism.',
      correction:
        'He pointedly refused to make martyrs, having seen what persecution did for the church. His weapons were subsidy, satire, and exclusion — temples re-funded, Christians barred from teaching the classics, feuding bishops encouraged to feud. And the famous dying cry "You have won, Galilean" is a Christian invention, first recorded generations later; the eyewitness account has him debating philosophy.',
    },
    control: {},
    markers: [{ type: 'battle', label: 'Samarra — Julian mortally wounded', at: [43.82, 34.2] }],
    sources: [
      {
        author: 'Ammianus Marcellinus',
        work: 'Res Gestae',
        note: 'An officer on the Persian campaign and a pagan admirer of Julian — who nonetheless condemns the school edict outright. The rare source that checks its own hero.',
      },
      { author: 'Julian', work: 'Misopogon and Letters' },
      { author: 'G. W. Bowersock', work: 'Julian the Apostate' },
    ],
    connects: ['constantine-sons-337ce', 'nicaea-325ce', 'state-cult-400bce'],
  },

  {
    id: 'jovian-cession-363ce',
    year: 363,
    era: 'dominate',
    weight: 1,
    reliability: 'well-attested',
    title: 'Jovian Buys the Way Out',
    headline:
      'A guards officer elected emperor mid-retreat trades Nisibis and the Tigris provinces to Persia so the starving army can march home.',
    tags: ['military'],
    body: `With Julian dead and the army starving on the wrong side of the Tigris, the generals elected Jovian, a thirty-two-year-old commander of the household guard, and Shapur II priced the situation precisely. Peace for thirty years, in exchange for: the five trans-Tigris regions Galerius had extorted from Persia in 298, the fortress cities of Nisibis and Singara — surrendered intact but without their inhabitants — and a Roman promise to abandon their ally the king of Armenia. Jovian accepted, and the army marched out. Ammianus, who was in its ranks, thought it would have been better to fight ten battles than to give up Nisibis; he watched the city's whole population driven out weeping, clutching what they could carry, while a Persian standard went up over walls that had beaten off three Sassanid sieges in twenty-five years.

The disgrace outlived the strategic reality, which was less bad. The new line held: shorn of the forward fortresses, the eastern frontier went comparatively quiet for nearly a century and a half, and no Persian army exploited the retreat to take Syria. Jovian himself signed little else — hurrying west that winter to secure his throne, he was found dead in his bedroom in February 364, suffocated, it was said, by the fumes of a charcoal brazier in a freshly plastered room.`,
    whyItMatters: `A humiliating peace that holds can be worth more than a glorious war that will not end, and Jovian's cession is the standing proof. The treaty everyone despised stabilized the empire's most expensive frontier for generations, at the exact moment the real threat was quietly shifting to the Danube — within thirteen years the Goths would be at the river, and the east's freedom to face them owed something to the surrender of 363. It is also a lesson in how empires actually contract: not always by losing battles, but by an accountant's decision, made at spear-point, about which commitments can no longer be carried.`,
    control: { mesopotamia: 'rival-parthia' },
    sources: [
      {
        author: 'Ammianus Marcellinus',
        work: 'Res Gestae',
        note: 'An eyewitness of the retreat; his fury at the treaty is a participant\'s grief, not a strategist\'s audit — the peace he despised held for over a century.',
      },
      { author: 'Eutropius', work: 'Breviarium', note: 'Also served on the campaign.' },
    ],
    connects: ['julian-361ce', 'galerius-mesopotamia-298ce', 'sassanids-224ce'],
  },

  {
    id: 'valentinian-valens-364ce',
    year: 364,
    era: 'dominate',
    weight: 1,
    reliability: 'well-attested',
    title: 'Valentinian and Valens Divide the Work',
    headline:
      'The army picks a hard Pannonian officer, the officer picks his brother, and the empire gets the two-court arrangement that 395 will make permanent.',
    tags: ['constitutional', 'succession'],
    body: `Days after Jovian's death in February 364, the assembled officers chose Valentinian, a Pannonian soldier of no famous family, as emperor. The troops immediately demanded that he name a colleague — two emperors had now died on the road inside eight months, and an army with no spare emperor was an army one accident from civil war. Valentinian gave them his brother Valens, and at Sirmium the two divided the administration: Valens took the east; Valentinian kept the west and the Rhine for himself, judging it the harder front and himself the better soldier. Each half got its own court, army, treasury, and prefects. Laws ran in both names. Nobody considered that anything had been divided except the workload.

The arrangement worked for a decade because both men treated it as one state. Valentinian proved a formidable frontier emperor — the Rhine and upper Danube refortified end to end, the Alamanni beaten — and a savage one; he died in 375 of a stroke, brought on while bellowing at envoys of the Quadi. Valens, the lesser man, held the easier seat, put down a usurper, and skirmished with Persia over Armenia. The brothers' division became the standing template: when historians hunt for the moment the empire split, 364 is the awkward evidence that division was simply how a two-front empire with slow communications was run.`,
    whyItMatters: `The working division of 364 is the rebuttal to the idea that dividing the empire killed it. Two courts and two armies coexisted without a single battle between them, because resources and legitimacy still flowed across the line — proof that the fatal thing in 395 was not division as such. What 364 also quietly fixed was the allocation: the east as one command, the long Rhine-Danube line as the other. Every later crisis would land on that seam, and which half a given emergency belonged to — and who paid for it — became the central question of western survival.`,
    control: {},
    sources: [
      {
        author: 'Ammianus Marcellinus',
        work: 'Res Gestae',
        note: 'Our chief narrative; he admired Valentinian\'s soldiering and catalogued his cruelties with equal care.',
      },
    ],
    connects: ['jovian-cession-363ce', 'tetrarchy-293ce'],
  },

  {
    id: 'goths-admitted-376ce',
    year: 376,
    era: 'dominate',
    weight: 2,
    reliability: 'well-attested',
    title: 'The Danube Opened',
    headline:
      'Fleeing the Huns, tens of thousands of Goths are ferried across the Danube with imperial permission — then starved and swindled by the officials sent to feed them.',
    tags: ['military', 'social'],
    body: `In 376 a Gothic people, the Tervingi under Fritigern and Alavivus, massed on the north bank of the lower Danube and asked to be let into the Roman empire. Behind them was something new from the steppe: the Huns, mounted nomads who had shattered the Greuthungi further east and made the old Gothic lands untenable. Valens, tied down in Antioch by the Persian frontier, said yes — the refugees promised recruits for an army short of men and taxable farmers for Thrace, and admitting displaced barbarians under supervision was established Roman practice with centuries of precedent. Imperial boats worked the river for days. Officials sent to count the crossers gave up; Ammianus reached for Virgil — one might as well count the sands of Libya. A second people, the Greuthungi, were refused — and crossed anyway, unwatched, once the river flotilla was pulled away to manage the first group.

What followed was administrative crime. The Roman commanders on the spot, the comes Lupicinus and the dux Maximus, sold the starving refugees food at extortion prices — Ammianus records dogs collected from across the province and traded at the rate of one dog for one Goth sold into slavery, children of good family among them. Then Lupicinus invited Fritigern and Alavivus to a banquet at Marcianople and tried to have them killed. Fritigern talked his way out; Alavivus vanishes from the record; and Thrace went up. Lupicinus's scratch force was destroyed, the rebels armed themselves from Roman dead and Roman arms factories, and escaped slaves, Gothic units already in the army, and miners who knew the hidden granaries came over to them. By 377 the Balkans held an enemy nation that Rome itself had ferried across the river.`,
    whyItMatters: `The admission was defensible; the handling made the catastrophe. Refugee settlement had worked for centuries because Rome dictated terms from strength — dispersal, disarmament, supervision — and 376 failed at exactly the execution: the Goths were kept concentrated, half-armed, and then given, through starvation and attempted murder, nothing left to lose inside an undefended interior. This is also the first Roman event caused by the Huns, the opening move of a chain — steppe pressure transmitted through displaced peoples onto the frontier — that runs through Adrianople and the treaty of 382 to the Rhine crossing of 406. The frontier's great breaches were policy failures before they were military ones.`,
    misconception: {
      claim: 'Rome fell to barbarian invasions — hordes smashing through the frontier.',
      correction:
        'The Goths of 376 smashed nothing. They were let in by imperial decision, under an established refugee practice, and became enemies only after Roman officials starved them, sold them dog meat at the price of their children, and tried to assassinate their leaders at a dinner. The century of disasters that followed began as a bungled admission, not a breach.',
    },
    control: {},
    sources: [
      {
        author: 'Ammianus Marcellinus',
        work: 'Res Gestae',
        note: 'Our only detailed narrative — and it steers the blame toward corrupt officials rather than the admission policy itself, which is an argument, not a neutral report.',
      },
      {
        author: 'Peter Heather',
        work: 'The Fall of the Roman Empire',
        note: 'Makes the Huns the prime mover; other scholars, Kulikowski among them, doubt the Hunnic domino and give more weight to Gothic choices.',
      },
    ],
    connects: ['valentinian-valens-364ce', 'abritus-251ce', 'army-transformation-270ce'],
  },

  {
    id: 'adrianople-378ce',
    year: 378,
    era: 'dominate',
    weight: 3,
    reliability: 'well-attested',
    title: 'Adrianople',
    headline:
      'Valens attacks the Gothic wagon-camp without waiting for the western army; by nightfall two-thirds of the eastern field army and the emperor himself are dead.',
    tags: ['military'],
    body: `On 9 August 378, outside Adrianople in Thrace, the emperor Valens attacked the Gothic wagon-camp with the eastern field army and was annihilated. His nephew Gratian, the western emperor, was marching to join him with a second army; Valens — told by faulty scouting that only ten thousand Goths were present, and stung by the acclaim Gratian had just won on the Rhine — decided the victory was his if he refused to share it. The army marched eight miles from the city through the August heat and arrived parched, unfed, and still deploying while envoys were actually talking, when two units attacked without orders. At that moment the Gothic cavalry, away foraging, returned and caved in the Roman left. The infantry was compressed into a mass so tight men could not lift their swords, and was butchered until darkness. Perhaps two-thirds of the army died, with thirty-five tribunes and two senior generals. Valens's body was never found. Ammianus, closing his history with the battle, wrote that the annals record no such slaughter since Cannae.

The fiasco was made of small failures stacked: the count was wrong because the Greuthungi horse under Alatheus and Saphrax lay beyond the scouts' reach; Fritigern spun out negotiations while riders galloped to recall that cavalry; the Goths fired the dry fields to cook the Romans in their armor a little longer. Of Valens two stories circulated — an arrow, and an unmarked corpse among thousands; or a fortified farmhouse where the wounded emperor was carried, which the Goths, ignorant of who lay inside, burned with everyone in it.

Victory bought the Goths remarkably little ground. They tried Adrianople itself, where the imperial treasury sat, and were bloodily repulsed; they tried Constantinople and recoiled from the walls. Fritigern had already said it: he kept peace with walls and made war on fields. The Roman response had its own atrocity — in the east, the general Julius quietly ordered the Gothic soldiers and hostages distributed through the cities of Asia assembled and massacred as a precaution. In January 379 Gratian appointed Theodosius, a Spanish officer whose father had been executed in a court purge, as emperor of the east, and four more years of grinding small war followed — no second pitched battle, because Rome could no longer afford to risk one.

That is the real measure of the defeat. What died at Adrianople was not territory — the Goths could take no city — but the trained core of the eastern field army: the long-service units and the officer cadre, the part of a late Roman army that took a generation to grow. Recruits could be conscripted; veterans could not, and landowners increasingly paid gold to keep their laborers out of the levy. An army that cannot replace its dead must eventually hire its enemy, and in 382 it did.`,
    whyItMatters: `Ammianus's own comparison with Cannae is wrong in exactly the way that teaches. In 216 BCE Rome lost more men in an afternoon and replaced them, because the Republic's manpower system was an artesian well and Hannibal stood in a hostile country far from home. In 378 the dead were irreplaceable professionals, the enemy was already inside the frontier with nowhere to be expelled to, and the treasury was spent. So Rome did what it had never done after Cannae: negotiated with an unbeaten enemy on Roman soil and then hired it. Adrianople did not kill the empire — the east recovered — but it forced the precedent that would kill the west: fighting Rome's wars with intact foreign nations under their own kings.`,
    control: { thracia: 'contested', moesia: 'contested' },
    markers: [{ type: 'battle', label: 'Adrianople', at: [26.56, 41.67] }],
    sources: [
      {
        author: 'Ammianus Marcellinus',
        work: 'Res Gestae',
        note: 'The sole detailed account, written within living memory — and he chose to end his entire history here, Cannae comparison and all. The framing is his.',
      },
      { author: 'Alessandro Barbero', work: 'The Day of the Barbarians' },
    ],
    connects: ['goths-admitted-376ce', 'valentinian-valens-364ce', 'abritus-251ce'],
  },

  {
    id: 'thessalonica-380ce',
    year: 380,
    era: 'dominate',
    weight: 2,
    reliability: 'well-attested',
    title: 'The Edict of Thessalonica',
    headline:
      'Theodosius, newly baptized after a near-fatal illness, decrees that all peoples shall hold the faith of Nicaea — and brands everyone else demented heretics.',
    tags: ['religious', 'legal'],
    body: `On 27 February 380 the emperor Theodosius, with his western colleagues as co-signatories, issued from Thessalonica the edict known by its opening words, Cunctos populos: all peoples under imperial rule shall practice the religion the apostle Peter delivered to the Romans — the faith held by Damasus, bishop of Rome, and Peter, bishop of Alexandria: one deity, Father, Son, and Holy Spirit, in equal majesty. Those who follow it may call themselves Catholic Christians. The rest are, in the edict's own words, demented and insane; their meeting places shall not be called churches; and they can expect first divine vengeance and then whatever punishment the emperor's judgment supplies. Sixty-seven years after Constantine legalized Christianity, a particular Christianity was now the established religion of the Roman state.

The circumstances explain the urgency. Theodosius, elevated after Adrianople to salvage the east, had fallen gravely ill at Thessalonica that winter and accepted baptism — a step emperors usually postponed to the deathbed, since it made every subsequent sin a serious accounting problem. And the edict's target was not paganism, which it never mentions. It was other Christians: the eastern churches, above all Constantinople itself, had been dominated for decades by the non-Nicene theology favored under Constantius and Valens. The new emperor was announcing, before he had even entered his capital, which side held the throne. The follow-through was physical: in 381 a council at Constantinople reaffirmed and extended the Nicene creed, and the capital's Arian bishop was ejected, his replacement escorted to his church through hostile crowds by imperial troops.`,
    whyItMatters: `This completes what Nicaea began. In 325 the state refereed the church's arguments; from 380 the state defined the truth in law, and wrong belief became a civil condition — a category of person with fewer rights, attached to a list that imperial constitutions would extend for centuries. Religious uniformity as state business is the lasting invention, inherited by the Byzantine east and the medieval west alike. And the date itself teaches: the sequence 313, 325, 380, 392 shows Christianization as a three-generation ratchet of increments, not a single Constantinian stroke — with each turn aimed first at other Christians before it was aimed at the old gods.`,
    misconception: {
      claim: 'Constantine made Christianity the official religion of the Roman Empire.',
      correction:
        'Constantine legalized and favored it in 313. Establishment came in 380 under Theodosius, sixty-seven years later — and the edict\'s first targets were other Christians, the Arians who dominated the eastern churches. Paganism, unmentioned in 380, remained lawful for another decade.',
    },
    control: {},
    sources: [
      {
        author: 'Codex Theodosianus',
        work: 'Book 16.1.2 (Cunctos populos)',
        note: 'The edict\'s own text, preserved in the law code of 438.',
      },
      { author: 'Sozomen', work: 'Ecclesiastical History' },
      { author: 'Peter Brown', work: 'The Rise of Western Christendom' },
    ],
    connects: ['milan-313ce', 'nicaea-325ce', 'adrianople-378ce'],
  },

  {
    id: 'foederati-382ce',
    year: 382,
    era: 'dominate',
    weight: 2,
    reliability: 'contested',
    title: 'The Gothic Settlement',
    headline:
      'Rome ends a war it cannot win by planting an undefeated Gothic nation on Roman soil, under its own chiefs, owing soldiers instead of taxes.',
    tags: ['military', 'constitutional'],
    body: `On 3 October 382, four years after Adrianople, Theodosius's government made peace with the Goths it could not destroy. No text of the treaty survives; its terms are reconstructed from speeches and later events. The Goths received land to farm in Thrace and along the lower Danube; they kept their own leaders and customs; they paid no ordinary tax; and they owed military service — fighting for the empire as allied contingents under their own commanders when summoned, for pay. They were in the empire but not of it: not citizens, not provincials, not disarmed. The court orator Themistius sold the arrangement to the senate of Constantinople as philanthropy triumphant — better, he said, to fill Thrace with Gothic farmers than with Gothic corpses — which is roughly what a government says when it has run out of soldiers and is calling necessity a policy.

How new this really was is genuinely argued. Rome had settled defeated barbarians inside the frontier for centuries — but those groups arrived broken: disarmed, dispersed among provinces, their men fed individually into regular units under Roman officers. The Goths of 382 arrived unbeaten and stayed concentrated, armed, and under their own command structure, a nation-shaped hole in the provincial map. The arrangement was tested within a decade: Gothic contingents fought Theodosius's civil wars, and at the Frigidus in 394 they were put in the first assault and died by the thousand — a spending of their blood that Gothic leaders noticed and resented. One of the men shaped inside this settlement was a young officer named Alaric, who drew the obvious conclusion about what concentrated, armed, indispensable manpower could demand.`,
    whyItMatters: `This is the precedent that matters — more than Adrianople itself. The treaty established the template by which the western empire would eventually be dismantled: when the state cannot destroy an armed immigrant nation, it converts the nation into the army and pays in land and autonomy. Each later crisis was settled on the same terms with worse leverage — Aquitaine for the Visigoths in 418, Africa conceded to the Vandals — until provinces became the currency in which the west paid its own defenders, and the currency ran out. The east escaped the loop because it had money and walls; the west, poorer, paid in the only asset it had left, which was itself.`,
    control: { thracia: 'provincial', moesia: 'provincial' },
    sources: [
      {
        author: 'Themistius',
        work: 'Orations',
        note: 'A court speech celebrating the treaty as imperial wisdom — the nearest thing we have to the official press release, and exactly as reliable as that sounds.',
      },
      { author: 'Peter Heather', work: 'Goths and Romans 332–489' },
      {
        author: 'Michael Kulikowski',
        work: "Rome's Gothic Wars",
        note: 'Doubts the treaty was as novel as the tradition holds — argues later writers retrojected the arrangements of Alaric\'s era onto 382. The "nation within" reading is contested.',
      },
    ],
    connects: ['adrianople-378ce', 'goths-admitted-376ce', 'army-transformation-270ce'],
  },

  {
    id: 'pagan-ban-392ce',
    year: 392,
    era: 'dominate',
    weight: 1,
    reliability: 'well-attested',
    title: 'Sacrifice Banned',
    headline:
      'Theodosius outlaws pagan worship down to household incense, and the oldest religion in Rome begins a death that takes two hundred years.',
    tags: ['religious', 'legal'],
    body: `On 8 November 392 Theodosius banned pagan worship comprehensively. Public blood sacrifice was already forbidden; the new law reached into the house: no one, of any rank, might honor the lar with fire, the genius with wine, the penates with incense — no garlands, no lamps, no altars, anywhere, on pain of heavy fines and confiscation of the property used. It was the end point of a decade of pressure: Gratian had dropped the ancient imperial title of pontifex maximus and removed the Altar of Victory from the senate house, over the senator Symmachus's celebrated plea that so great a mystery cannot be reached by one road only; laws of 391 had closed the temples to worship; and in Alexandria a Christian crowd led by the bishop had just demolished the Serapeum, one of the most famous sanctuaries in the world.

The death itself was slow and strangely quiet. Enforcement was patchy, especially in the countryside, where the old rites persisted for centuries — paganus, country person, became the Christians' word for the holdouts. Most temples were not burned like the Serapeum but simply locked, quarried, or eventually consecrated: the Parthenon and the Pantheon became churches only in the sixth and seventh centuries, and the philosophy schools of Athens taught until 529. There were no pagan martyr cults, no rebellions in the old gods' name — the battle of the Frigidus in 394, long romanticized as paganism's last armed stand, was at bottom a dynastic usurpation with religious decoration.`,
    whyItMatters: `The revealing thing is not the law but the silence after it. Ninety years — one long lifetime — separate the Great Persecution, when Christianity was the crime, from 392, when sacrifice was; yet the old religion, deprived of state performance, produced no underground and no martyrs. That tells you what Roman civic religion had actually been: an apparatus of public ritual embedded in the state, not a confessional community with its own structures. The church under Diocletian had bishops, funds, scriptures, and solidarity to survive on; paganism stripped of its public ceremonies had nothing organized left to be. It did not lose the argument so much as discover it had never been the kind of thing that could go into opposition.`,
    control: {},
    sources: [
      {
        author: 'Codex Theodosianus',
        work: 'Book 16.10.12',
        note: 'The text of the 392 law itself.',
      },
      {
        author: 'Symmachus',
        work: 'Relationes',
        note: 'The pagan senator\'s plea for the Altar of Victory — dignified, moving, and unsuccessful.',
      },
      {
        author: 'Alan Cameron',
        work: 'The Last Pagans of Rome',
        note: 'Argues the heroic "pagan resistance" of late antiquity is mostly a modern romance; the aristocracy drifted into the church rather than fighting — which undercuts the last-stand framing this event\'s own drama invites.',
      },
    ],
    connects: ['thessalonica-380ce', 'great-persecution-303ce', 'state-cult-400bce'],
  },

  {
    id: 'theodosius-division-395ce',
    year: 395,
    era: 'dominate',
    weight: 3,
    reliability: 'well-attested',
    title: 'The Death of Theodosius and the Permanent Division',
    headline:
      'Theodosius dies in Milan leaving two boy emperors, and a routine division of administration hardens into two courts that will never again answer to one man.',
    tags: ['constitutional', 'succession'],
    body: `Theodosius I died on 17 January 395 in Milan, four months after his victory over the usurper Eugenius at the river Frigidus had briefly made him master of the entire empire — the last man who ever was. He left it to his sons: Arcadius, about seventeen, already installed at Constantinople; and Honorius, ten, in the west under the guardianship of Stilicho, the half-Vandal generalissimo who had married into the dynasty and now claimed — uncheckably, on his own word about a deathbed conversation — that Theodosius had entrusted him with both boys. Dividing the empire between colleagues was routine; it had been done in 286, 337, and 364, and nothing in January 395 marked this division as different. But it was: no one ever ruled both halves again, and the labels historians would later attach — Eastern Empire, Western Empire — hang retroactively from this date.

What made it stick was children. Earlier divisions had joined adult soldier-emperors who could meet, bargain, and campaign; the courts of 395 were regencies, run by ministers — Stilicho in the west, the prefect Rufinus and then the eunuch chamberlain Eutropius in the east — whose survival depended on keeping their emperor, and their emperor's revenue, to themselves. Cooperation across the line became treason to somebody. The eastern government twice declared Stilicho a public enemy; the two courts feuded over the prefecture of Illyricum and its recruiting grounds; and in 397 the commander of Africa transferred his allegiance from Ravenna's emperor to Constantinople's, cutting Rome's grain supply until the west retook its own breadbasket by expedition. Through all of it the fiction of unity held — laws issued in both emperors' names, consuls recognized jointly, one citizenship, and decades later a single law code published simultaneously in both capitals.

The halves were not equal, and everyone in a treasury office knew it. The east held Egypt, Syria, and Asia Minor — the empire's richest, most urbanized, most taxable third — behind a short lower-Danube frontier and a capital that could not be taken. The west held the entire Rhine and upper Danube line, Britain, a thinner and less monetized economy, a senatorial aristocracy expert in tax exemption, and, since 382, an armed Gothic nation inside its recruiting grounds. The same storms hit both halves in the decades that followed. One half could pay, deflect, and wait behind its walls. The other paid in provinces.`,
    whyItMatters: `The division was not fatal because dividing was fatal — 364 disproves that — but because the halves were unequal and stopped compensating each other. For a century the empire's deepest strength had been moving money and men to whichever front was burning; after 395 each court guarded its own, and at the worst moments they aimed threats at each other instead. The west's structural deficit — the long frontier on the weak tax base — had been survivable inside one empire, covered by eastern surplus. Alone, it was terminal within two generations. 476 is best read as an insolvency, and 395 is the year the books were separated.`,
    misconception: {
      claim: 'In 395 the Roman Empire split into an Eastern and a Western Empire.',
      correction:
        'No one in 395 saw two states. There was one empire with two co-emperors — an arrangement over a century old — issuing laws in both names, sharing consuls and citizenship. "Eastern" and "Western Empire" are historians\' shorthand for a fact visible only in hindsight: that no one ever ruled both halves again.',
    },
    control: {},
    sources: [
      {
        author: 'Claudian',
        work: 'Panegyrics and Invectives',
        note: 'Stilicho\'s court poet — praise and character assassination on commission. Much of what we "know" about the eastern ministers Rufinus and Eutropius comes through him, all of it poisoned.',
      },
      {
        author: 'Zosimus',
        work: 'New History',
        note: 'A pagan writing around 500 who blamed Theodosius and Christianity for the empire\'s ruin; hostile throughout.',
      },
      { author: 'Peter Heather', work: 'The Fall of the Roman Empire' },
    ],
    connects: [
      'valentinian-valens-364ce',
      'adrianople-378ce',
      'foederati-382ce',
      'constantinople-330ce',
    ],
  },
];
