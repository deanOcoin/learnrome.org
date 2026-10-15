// c. 1000-509 BCE. control deltas come from the content manifest, edit them there

import type { RomeEvent } from '../../types';

export const REGAL_EVENTS: RomeEvent[] = [
  {
    id: 'iron-age-villages-1000bce',
    year: -1000,
    yearEnd: -800,
    dateNote: 'c.',
    era: 'regal',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Iron Age Villages Above the Tiber',
    headline:
      'Long before any founding date, Latin herdsmen settled the hills above the last easy crossing of the Tiber — and the site did most of the work.',
    tags: ['economic', 'daily-life'],
    body: `Between about 1000 and 800 BCE, clusters of huts stood on the Palatine and the surrounding hills — post-holes cut into the volcanic rock, cremation urns shaped like the huts themselves, graves in the marshy valley that would one day be the Forum. Nobody founded this place, and it was not a city. It was a scatter of Latin-speaking villages of herders and farmers, much like dozens of others across old Latium, distinguished by a single fact of geography: it overlooked Tiber Island, the last easy crossing of the river before the sea.

Two routes met at that crossing. The north–south land road linking Etruria to Campania — the two richest neighborhoods of early Italy — had to pass the river somewhere, and this was the cheapest somewhere. And the salt from the pans at the river's mouth moved inland along the Tiber valley toward the Apennine pastures, a traffic later remembered in the name of the Via Salaria, the salt road. Whoever sat above the crossing sat on both.

The archaeology shows process, not moment: separate hilltop hamlets, then shared cemeteries, then — across the eighth and seventh centuries — the slow knitting of the hills into one community. The founding legends came much later, composed by people who needed a beginning.`,
    whyItMatters: `Rome's location explains Rome before any Roman does anything. Ask why this cluster of villages, and not Veii or Tibur or Gabii, ended up organizing Italy, and the honest first answer is the river: the crossing meant traffic, traffic meant tolls and contact — with Etruscan cities to the north, Greek colonies to the south — and contact meant early access to writing, weapons, and ideas. Every founding story Rome later told is a back-projection of destiny onto what was originally just good real estate. Keep that in mind for the whole regal period: the legends are doing moral work; the geography was doing the actual work.`,
    control: {},
    spatialFocus: ['latium'],
    sources: [
      {
        author: 'T. J. Cornell',
        work: 'The Beginnings of Rome',
        note: 'The standard modern synthesis of the site archaeology; reconstructs the villages-to-city process that the legends compress into a single day.',
      },
      {
        author: 'Livy',
        work: 'Ab Urbe Condita, Book 1',
        note: 'Livy opens by conceding that the earliest traditions are poetic tales he will neither affirm nor refute — the record starts by disclaiming itself.',
      },
    ],
  },

  {
    id: 'rome-founding-753bce',
    year: -753,
    dateNote: 'traditional',
    era: 'regal',
    weight: 3,
    reliability: 'legendary',
    title: 'The Traditional Founding of Rome',
    headline:
      'Rome dated its own birth to a fratricide — a story the Romans chose to tell, pinned to a date their scholars computed seven centuries later.',
    tags: ['culture', 'religious'],
    body: `Tradition says Rome was founded on 21 April 753 BCE by Romulus, twin son of the war god Mars and a deposed Alban princess — suckled by a she-wolf, raised by a shepherd, and marked out by the gods when twelve vultures crossed his stretch of sky against his brother's six. Romulus ploughed the sacred boundary of his new city; his twin Remus jumped it in mockery, and Romulus killed him. None of this is history. But the eighth century itself is not arbitrary: archaeology shows the hill villages transforming, in just this period, into something organized enough to build walls and drain common ground.

The full legend is a long chain: Aeneas flees burning Troy to Latium; his descendants rule Alba Longa; a usurper forces the princess Rhea Silvia into sacred virginity; Mars intervenes; the twins are exposed on the flooding Tiber and survive. Much of it is stitched from Greek foundation-story patterns, and the Alban dynasty exists to solve an embarrassment of arithmetic: Greek dating put Troy's fall around 1184 BCE, four centuries too early, so a line of otherwise inert Alban kings was invented to bridge the gap. Ancient writers knew rival versions too — Plutarch lists candidate founders named Roma, Romis, and Romanus before settling on the familiar tale.

Romulus's Rome, in the tradition, is a city of the desperate. He declares an asylum on the Capitoline and fills the town with fugitives, debtors, and exiles, then supplies them with wives by abducting the women of the neighboring Sabines at a festival. The war that follows ends not in conquest but in merger: the Sabine king Titus Tatius rules jointly with Romulus, and Sabine clans enter the Roman aristocracy.

The date is scholarship, not memory. The antiquarian Varro fixed 753 in the first century BCE by counting back through the consular lists and allotting conventional spans to seven kings; other Roman scholars computed 751 or 748. From Varro's arithmetic came the *ab urbe condita* era and the city's birthday festival, the Parilia of 21 April, celebrated for as long as there were Romans to celebrate it.

Archaeology grants the legend an odd half-vindication. Excavation at the foot of the Palatine turned up an eighth-century fortification wall — which its excavator, Andrea Carandini, notoriously claimed as the wall of Romulus, a leap almost no colleague accepts. The sober version is enough: in the mid-eighth century, someone organized these villages to build in common. A community was forming. It just had no founder.`,
    whyItMatters: `What Romans believed about their founding did more work than what actually happened. They chose a story in which the city begins as an asylum — populated by fugitives and outsiders, married into its neighbors first by force and then by merger — and that story normalized the habit that actually built the empire: extending citizenship to the conquered and even to the freed slave, which no Greek city ever did at scale. And they chose a story that begins with a brother killing a brother. When the civil wars came, Roman poets reached instinctively for Romulus and Remus: the fratricide read as the city's original curse. A founding myth is a polity's self-diagnosis, and Rome's — open to outsiders, violent at the core — proved exact.`,
    misconception: {
      claim: 'Rome was founded by Romulus on April 21, 753 BCE.',
      correction:
        'There was no founding moment. The site was continuously settled from at least the tenth century BCE, the twins are myth, and 753 is a back-calculation made by the scholar Varro seven hundred years after the supposed event. What the eighth century really shows is hill villages reorganizing into a single community — a process, not a birthday.',
    },
    control: { latium: 'core' },
    markers: [{ type: 'founding', label: 'Rome', at: [12.48, 41.89] }],
    connects: ['iron-age-villages-1000bce'],
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita, Book 1',
        note: 'Writing seven centuries later, and offering the legends explicitly as ennobling tradition rather than record.',
      },
      {
        author: 'Plutarch',
        work: 'Life of Romulus',
        note: 'Compiles the variant founding traditions side by side — inadvertently demonstrating that no canonical account ever existed.',
      },
      {
        author: 'Mary Beard',
        work: 'SPQR',
        note: 'Reads the foundation legend as a story Romans continuously rewrote to argue about their own values — not as a memory of events.',
      },
    ],
  },

  {
    id: 'numa-religion-715bce',
    year: -715,
    yearEnd: -673,
    dateNote: 'traditional',
    era: 'regal',
    weight: 2,
    reliability: 'legendary',
    title: 'Numa Pompilius and the Religious Constitution',
    headline:
      'Tradition gave Rome\'s second king no wars at all — instead a calendar, the priesthoods, and the rulebook for dealing with gods.',
    tags: ['religious', 'constitutional'],
    body: `After Romulus, tradition says, the senate offered the kingship to a Sabine famous for piety: Numa Pompilius. His forty-three-year reign contains no wars at all. Instead he is credited with building Rome's entire religious apparatus — the pontiffs, the flamens, the Vestal Virgins, the fetial priests who ritually sanctioned war — and with reforming the calendar into twelve months. Whether Numa existed is unknowable. The institutions filed under his name are real, and some of them ran for over a thousand years.

The list of attributions is the inventory of Roman state religion. The pontifex maximus, chief supervisor of sacred law. The flamines of Jupiter, Mars, and Quirinus, hedged about with archaic taboos. The Vestals, keeping the city's hearth alight under penalty of live burial. The fetiales, whose ritual demand for redress before any declaration of war let Rome tell itself that every war it ever fought was defensive. The temple of Janus, its gates open in wartime — closed, tradition claimed, for the whole of Numa's reign and almost never afterward. And the calendar: twelve lunar months, with an intercalary month inserted at the pontiffs' discretion to keep the year aligned with the sun.

The scheme is too neat to be memory. Livy's kings alternate like a pattern-book — warlike founder, pious lawgiver, warrior, builder — and Numa is transparently the anti-Romulus. Ancient critics already saw seams: Plutarch demolishes the cherished story that Numa studied under Pythagoras by pointing out that Pythagoras lived a century and a half too late. Numa is best understood as a peg on which Romans hung whatever was old and sacred — and that habit of crediting accreted institutions to a single wise founder is itself a fact about Rome worth knowing.`,
    whyItMatters: `Assigning the whole religious system to a legislating king — not to revelation, not to prophets — captures what Roman religion was: public law. Priesthoods were offices, held by the same men who held magistracies, and that is why they outlived the monarchy and then the Republic itself. Caesar campaigned for the post of pontifex maximus in 63 BCE; Augustus folded it into the imperial bundle; emperors carried the title deep into the Christian fourth century. The calendar mattered just as concretely — whoever controlled intercalation controlled the length of the political year, a lever pontiffs were still pulling for partisan ends until Caesar abolished it with the Julian reform. The legendary king is a fiction; the machinery filed under his name ran for a millennium.`,
    control: {},
    connects: ['rome-founding-753bce'],
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita, Book 1',
        note: 'Written under Augustus, who was consciously reviving "Numa\'s" priesthoods — the account flatters a live political program.',
      },
      {
        author: 'Plutarch',
        work: 'Life of Numa',
        note: 'Preserves, and then dismantles on chronological grounds, the legend that Numa learned from Pythagoras — a rare moment of ancient source criticism.',
      },
      {
        author: 'Beard, North & Price',
        work: 'Religions of Rome',
        note: 'Shows the priestly colleges as gradual accretions later credited to a founder; the attribution, not the institutions, is the invention.',
      },
    ],
  },

  {
    id: 'tullus-alba-673bce',
    year: -673,
    yearEnd: -642,
    dateNote: 'traditional',
    era: 'regal',
    weight: 1,
    reliability: 'legendary',
    title: 'Tullus Hostilius Destroys Alba Longa',
    headline:
      'Rome\'s third king razed the city Romans called their mother — and moved its people, gods, and noble families inside Rome\'s walls.',
    tags: ['military'],
    body: `Rome's third king, Tullus Hostilius, was cast by tradition as pure warrior — fiercer, Livy says, than Romulus himself. His war was against Alba Longa, the Latin city Romans regarded as their own mother-city, and legend settled it by champions: triplet brothers, the Roman Horatii against the Alban Curiatii, with the last Horatius left standing. Alba became Rome's subordinate ally; then, after its commander Mettius Fufetius played traitor mid-battle, Tullus had him torn apart by chariot teams, razed Alba to the ground, and transplanted its entire population to Rome.

The duel is folk tale and the treachery plot is stock drama. But the shape of the story mattered enormously to Romans: Alba's people were not enslaved but absorbed — settled on the Caelian hill, their noble clans enrolled in the patriciate. Centuries later, families still traded on claimed Alban descent; the pedigree of the Julii, and so of Julius Caesar, ran through Alba all the way back to Venus.

No securely identified archaic city has ever been found at Alba's presumed site near Lake Albano, and the single dramatic destruction may compress generations of slow Roman encroachment on Latium into one act.`,
    whyItMatters: `The legend rehearses, at the very start, the move that became Rome's actual engine of expansion: destroy the rival polity, keep the people. Where Greek victors enslaved or expelled the defeated, the Roman story celebrates annexation of population — the citizen body doubled at a stroke. Manpower, not battlefield brilliance, is what would later grind down the Samnites, Pyrrhus, and Hannibal, and Rome's origin legends already treat absorbing the conquered as the natural fruit of victory. That Romans told a story about destroying their own mother-city with pride tells you they understood exactly what kind of state they were.`,
    control: {},
    markers: [{ type: 'siege', label: 'Alba Longa', at: [12.65, 41.75] }],
    connects: ['rome-founding-753bce'],
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita, Book 1',
        note: 'The surviving Horatius is tried for murdering his grieving sister in a scene built from late-republican legal procedure — an anachronism that betrays the story\'s late shaping.',
      },
      {
        author: 'Dionysius of Halicarnassus',
        work: 'Roman Antiquities',
        note: 'A Greek antiquarian writing under Augustus, expanding the same traditions at even greater length and with even more speeches.',
      },
    ],
  },

  {
    id: 'augury-priesthoods-650bce',
    year: -650,
    dateNote: 'c.',
    era: 'regal',
    weight: 1,
    reliability: 'reconstructed',
    title: 'Auspices, Augurs, and the Priestly Colleges',
    headline:
      'Roman religion ran on procedure, not belief — a contract with the gods administered by the same men who ran the state.',
    tags: ['religious'],
    body: `By the mid-seventh century — to give a conventional date to something that formed gradually — Rome's relationship with its gods was running as public administration. Before an assembly met, an election was held, or an army engaged, a magistrate took the auspices: the sky was formally watched for birds or lightning under rules kept by the college of augurs. Sacred law belonged to the pontiffs. None of these priests formed a separate caste — they were aristocrats, senators, and future war-leaders holding a religious office alongside a political career. There was no scripture, no creed, and no requirement to believe anything.

What the gods demanded was correct performance. The operating logic was contractual — *do ut des*, "I give so that you give": vows, sacrifices, and festivals executed precisely, in exchange for harvests and victories. A slip in the formula meant starting the whole ritual over. Prodigies — lightning strikes, monstrous births — were reported to the authorities and expiated like items of state business, which is exactly what they were.

All of this is reconstructed backward from later Republican practice; no seventh-century Roman wrote anything down. But the system's logic is consistent across the entire record, and its origins plainly predate the Republic that inherited it.`,
    whyItMatters: `Because the gods were a government department staffed by politicians, Rome never grew an independent clergy — no temple establishment with its own wealth and agenda, no prophets confronting kings. Religious authority and political authority were the same men, which kept the sacred firmly inside the state and turned ritual into a usable instrument: omens could halt assemblies, and the sacred calendar could shape the political year. It also explains the scale of the shock, eight centuries later, when Christianity arrived carrying everything Roman religion lacked — creed, scripture, and a clergy answerable to no magistrate. That collision was not god against god but system against system.`,
    misconception: {
      claim: 'Roman religion was a faith — Romans believed in Jupiter the way modern believers believe in God.',
      correction:
        'Roman religion had no creed, no scripture, and no test of belief. Piety meant performing the rituals correctly; sincerity was nobody\'s business. Cicero, a serving augur, published a book picking apart divination\'s claims and saw no conflict in continuing to take the auspices. Belief is the wrong lens — procedure was the substance.',
    },
    control: {},
    nonTerritorial: true,
    spatialFocus: ['latium'],
    connects: ['numa-religion-715bce', 'rome-founding-753bce'],
    sources: [
      {
        author: 'Cicero',
        work: 'De Divinatione',
        note: 'Written by a sitting augur who systematically dismantles divination\'s claims — proof that procedure, not belief, was the load-bearing part.',
      },
      {
        author: 'Beard, North & Price',
        work: 'Religions of Rome',
        note: 'The standard modern account; stresses that "belief" is a category imported from later religions and fits Rome badly.',
      },
    ],
  },

  {
    id: 'ancus-ostia-642bce',
    year: -642,
    yearEnd: -617,
    dateNote: 'traditional',
    era: 'regal',
    weight: 1,
    reliability: 'legendary',
    title: 'Ancus Marcius and the Reach to the Sea',
    headline:
      'The fourth king bridged the Tiber and, tradition says, planted Ostia at its mouth — pointing Rome at the one commodity everyone inland needed: salt.',
    tags: ['infrastructure', 'economic'],
    body: `Ancus Marcius, fourth king and in tradition Numa's grandson, is remembered for pointing Rome downriver. He fought the nearer Latin towns and transplanted their people to the Aventine, threw the first bridge across the Tiber — the wooden Pons Sublicius, so sacred that its upkeep was a priestly duty — and, the tradition says, founded Ostia at the river's mouth beside the coastal salt pans. Rome, fifteen miles inland, now reached the sea.

Salt is the detail to hold onto. Every inland community needed it for herds, cheese, and preserving meat, and the pans at the Tiber mouth were the nearest large source for much of central Italy. The route inland along the river — later formalized as the Via Salaria, the salt road — passed directly beneath Rome's crossing. Control the mouth and the bridge, and you tax the artery.

On the founding itself, the archaeology dissents: the earliest known settlement at Ostia is a fourth-century BCE fortress-colony, and the seventh-century foundation is almost certainly back-projection. But the choice to credit it to Ancus shows what Romans thought kingship had been for — bridges, ports, and revenue, not glory.`,
    whyItMatters: `Strip away the names and the regal period shows Rome's first empire as a river monopoly: the crossing, the bridge, the mouth, the salt. Expansion begins as economic geography, and infrastructure — not battle — is its instrument, a pattern Rome would repeat at every scale for a thousand years, from the Via Appia to the grain fleets of Egypt. The Sublicius carries a second lesson: its maintenance belonged to the pontiffs, whose very name Romans derived from bridge-building. At Rome, engineering, religion, and power were never separate files.`,
    control: {},
    markers: [{ type: 'founding', label: 'Ostia', at: [12.29, 41.76] }],
    connects: ['iron-age-villages-1000bce', 'tullus-alba-673bce'],
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita, Book 1',
        note: 'Assigns each king a signature achievement; Ancus gets the port and the bridge — a tidy division of labor that smells of later systematizing.',
      },
      {
        author: 'T. J. Cornell',
        work: 'The Beginnings of Rome',
        note: 'Notes the absence of any seventh-century material at Ostia; the foundation story likely retrojects a fourth-century colony onto a legendary king.',
      },
    ],
  },

  {
    id: 'tarquinius-priscus-616bce',
    year: -616,
    yearEnd: -579,
    dateNote: 'traditional',
    era: 'regal',
    weight: 2,
    reliability: 'legendary',
    title: 'Tarquinius Priscus and the Etruscan Inheritance',
    headline:
      'An Etruscan immigrant took Rome\'s throne, and the city\'s most "Roman" emblems — fasces, triumph, augural science, even the alphabet — arrived as borrowings.',
    tags: ['culture', 'infrastructure'],
    body: `The fifth king arrived as an immigrant. Lucumo, son of a Corinthian exile settled in the Etruscan city of Tarquinii, moved to Rome with his Etruscan wife Tanaquil because — the tradition says — his mixed blood capped his prospects at home, and Rome was a place where a newcomer could rise. He rose all the way: guardian of King Ancus's sons, then king himself as Lucius Tarquinius Priscus. Under him and his house, hill-village Rome acquired the apparatus of a real city — the Circus Maximus laid out in its valley, the Forum drained by the great sewer called the Cloaca Maxima, the enormous Capitoline temple of Jupiter begun.

With the Tarquins comes the visible Etruscan package. The fasces — the axe bound in its bundle of rods that meant lawful power to command and punish — the ivory curule chair, the purple-bordered toga, the triumph with its painted-faced general, and the elaborated science of reading omens all carried Etruscan pedigrees. Behind the Etruscans stood the Greeks, whose alphabet reached Latium through Etruria. Practically every emblem later ages would consider quintessentially Roman is a borrowing.

Older scholarship read all this as an Etruscan conquest — a foreign dynasty imposed on a subject Rome. The current view is less dramatic and more interesting: seventh-century central Italy was a connected elite culture in which aristocrats moved between cities, and the legend itself says as much, making Tarquin a Corinthian's son who could emigrate to Tarquinii and then be chosen king at Rome. Archaic Rome was not dominated by Etruria; it belonged to the same cosmopolitan world.

The engineering was the deepest change. Draining the Forum valley turned a marshy burial ground between separate hill villages into shared, dry, eventually paved civic space — the first pavement dates to around 600. The hills now had a downtown. Rome had become, physically, one city.`,
    whyItMatters: `Two arguments hide in this reign. First: Rome's iconography of power — fasces, triumph, augural handbooks, the very alphabet its laws would be written in — was imported, and imported without the least embarrassment. The willingness to adopt whatever worked, from anyone, was set generations before the Republic existed, and it never left; it is the same reflex that later swallowed Greek philosophy and copied Carthaginian warship design. Second, and less obvious: infrastructure precedes politics. Rome could not have a Forum-centered public life — assemblies, funerals, trials, riots — until an Etruscan-style drain made the Forum dry land. The sewer is older than the constitution, and the constitution presupposes the sewer.`,
    control: {},
    spatialFocus: ['etruria', 'latium'],
    connects: ['ancus-ostia-642bce', 'rome-founding-753bce'],
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita, Book 1',
        note: 'The immigrant-makes-good narrative is suspiciously well shaped, but its assumption that archaic elites moved freely between cities matches the archaeology.',
      },
      {
        author: 'T. J. Cornell',
        work: 'The Beginnings of Rome',
        note: 'Dismantles the old "Etruscan domination" model: elite mobility, not conquest, explains an Etruscan on Rome\'s throne.',
      },
    ],
  },

  {
    id: 'servius-tullius-578bce',
    year: -578,
    yearEnd: -535,
    dateNote: 'traditional',
    era: 'regal',
    weight: 2,
    reliability: 'legendary',
    title: 'Servius Tullius and the Census',
    headline:
      'A king counted his citizens, priced them, and turned wealth into voting weight — building the rigged assembly the Republic would use for its entire life.',
    tags: ['constitutional', 'social'],
    body: `Servius Tullius, the sixth king, reaches us through two incompatible traditions. The Roman one made him the palace-raised son of a slave woman, elevated by omens; an Etruscan tradition — cited from Etruscan sources by the emperor Claudius, himself a working antiquarian, in a speech that survives on bronze at Lyon — knew him as Mastarna, an Etruscan warlord who took Rome by arms. Either way, tradition credits him with the census: the registration of every citizen by wealth, and the sorting of the whole citizen body into voting units called centuries. It was the most consequential act attributed to any king, because the Republic kept the machine and used it for five hundred years.

The developed system — how much of it is genuinely sixth-century is doubtful — put 193 centuries in the assembly. Eighteen centuries of cavalry and eighty of the wealthiest infantry class voted first: ninety-eight, a majority before anyone else had spoken. Voting then proceeded down the wealth classes and stopped the moment a majority was reached, so the lower classes were frequently never called at all. The propertyless — the *capite censi*, "counted by head" because they had nothing else worth counting — made up a single century out of the 193.

The logic was military before it was electoral. The centuries were the army's levy classes, and voting weight tracked a man's ability to arm himself in bronze: those who paid for the war got the say, an archaic bargain embedded openly in the constitution. Servius also drew credit for the city's tribes, an extended sacred boundary, and the great wall bearing his name — though the surviving circuit is fourth-century work built after the Gallic sack.`,
    whyItMatters: `Kings were abolished; the counting-house survived. Every consul the Republic ever elected was chosen by this wealth-weighted assembly, which means "the Roman people decided" always meant, structurally, "the propertied decided first." Reformers from the Gracchi onward were not fighting individual villains so much as arithmetic laid down — tradition insisted — by a king. And the census itself was the deeper invention: a state that registers, classifies, and prices its citizens can conscript and tax them systematically. That administrative habit, more than any legion, is what Rome eventually exported to the whole Mediterranean. The census that moves Joseph and Mary in the Gospel of Luke is Servius's machine, still running six centuries later.`,
    misconception: {
      claim: 'The Roman Republic was a democracy — citizens voted, one man, one vote.',
      correction:
        'No Roman assembly ever weighed individual votes equally. In the centuriate assembly, which elected consuls and declared war, citizens voted inside wealth-ranked blocks; the richest ninety-eight of 193 centuries formed a majority and voted first, and counting stopped once a majority was reached — so the poor often never voted at all. The bias was not a flaw but the advertised design: influence in proportion to property.',
    },
    control: {},
    connects: ['tarquinius-priscus-616bce', 'tullus-alba-673bce'],
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita, Book 1',
        note: 'Presents the census as a single royal act; the system he describes is the fully developed Republican assembly of his own day.',
      },
      {
        author: 'Cicero',
        work: 'De Re Publica, Book 2',
        note: 'Praises the centuriate design precisely because it gave the greatest weight to the wealthy — the bias was not hidden; it was the advertised feature.',
      },
      {
        author: 'T. J. Cornell',
        work: 'The Beginnings of Rome',
        note: 'Argues a sixth-century core (census, classis) is plausible, but the 193-century arithmetic is later elaboration read backward onto the king.',
      },
    ],
  },

  {
    id: 'expulsion-509bce',
    year: -509,
    dateNote: 'traditional',
    era: 'regal',
    weight: 3,
    reliability: 'legendary',
    title: 'The Expulsion of the Kings',
    headline:
      'A rape, a suicide, and an oath ended Rome\'s monarchy — and the oath was against the word *rex*, not against one man ruling.',
    tags: ['constitutional', 'succession'],
    body: `In 509 BCE, by the traditional date, Rome's monarchy ended in a story about a rape. Sextus Tarquinius, son of the seventh king Tarquinius Superbus, raped Lucretia, the wife of his kinsman Collatinus; she summoned her father and husband, exacted their oath of vengeance, named her attacker, and stabbed herself. Lucius Junius Brutus drew the knife from her body and swore that no man would ever again be king in Rome. The city rose, the gates were shut against Superbus, the army abandoned him, and in place of a king Rome instituted two annually elected magistrates. The tale is literary through and through — but the underlying event, an end of monarchy at Rome around 500 BCE, is one piece of the legend most historians accept.

Superbus had been built up by the tradition as the complete Greek tyrant type: a throne seized by murdering Servius Tullius — whose corpse, in the story's most lurid touch, his own daughter Tullia drove her carriage over — rule without consulting the senate, executions of leading men, and free citizens conscripted as labor on the great works, the Capitoline temple and the sewers. How much is memory and how much is stock tyrant-portrait borrowed from Greek writing about Corinth and Athens cannot be untangled. The portrait exists to make the revolution righteous.

The aftermath stories carry a telling crack. Lars Porsenna, Etruscan king of Clusium, marches to restore the Tarquins, and Rome's schoolbook heroes hold him off — Horatius at the bridge, Mucius Scaevola thrusting his hand into the fire, Cloelia swimming the Tiber under arrows. Yet Tacitus and Pliny both let slip an older tradition: that Porsenna actually took the city. If so, the heroics are cover for a surrender, and the monarchy may have ended not in a virtuous uprising but amid an Etruscan power struggle in which Rome changed hands — with the new regime of consuls emerging from the wreckage.

The date is suspiciously tidy. Athens expelled its tyrant Hippias in 510 BCE, and the twin liberations, one year apart, look like the synchronizing hand of later chroniclers. What anchors 509 at all is the dedication of the Capitoline temple, which stood at the head of the consular lists — the Fasti — that Romans maintained from the Republic's first year. The lists are the spine of early Republican chronology and are broadly credible; the precise year, and everything cinematic about the transition, are not.

What replaced the king — annual, collegial, mutually vetoing consuls, with the old royal rites parceled off to a "king of sacred things" barred from politics — belongs to the next era. What this event fixed was something prior: the conviction, renewed by oath in every telling, that the title *rex* was the one unforgivable thing.`,
    whyItMatters: `This story — legendary or not — fixed Rome's political vocabulary for the next thousand years. The fatal accusation in Roman politics became aiming at kingship, *adfectatio regni*: the charge that justified killing the Gracchi and, in the end, Caesar, whose real innovation was making one-man power permanent and letting it be seen. Augustus, who understood the lesson perfectly, assembled an actual monarchy out of republican parts and never once touched the banned word — princeps, imperator, Augustus, anything but *rex*. Notice what governed here: not a statute but a story, about a woman's violated honor and an oath sworn over her body. Polities are ruled by their memories as firmly as by their constitutions, and Rome's most operative memory was probably fiction.`,
    misconception: {
      claim: 'After driving out the kings, the Romans rejected one-man rule forever.',
      correction:
        'The oath was against the title *rex*, not against one man ruling. The Republic kept a fully legal one-man office — the dictatorship, six months of near-absolute power — and used it scores of times without qualm. What Rome could not forgive was the name and the permanence: which is why, in 44 BCE, it was the dictatorship made perpetual and the whiff of a diadem that killed Caesar, and why Augustus ruled as a monarch for four decades while calling himself anything but king.',
    },
    control: {},
    markers: [{ type: 'political', label: 'Rome', at: [12.48, 41.89] }],
    connects: ['servius-tullius-578bce', 'tarquinius-priscus-616bce'],
    sources: [
      {
        author: 'Livy',
        work: 'Ab Urbe Condita, Book 1',
        note: 'The Lucretia narrative is constructed tragedy — exemplary womanhood, tyranny punished — written nearly five centuries after the events it relates.',
      },
      {
        author: 'Tacitus',
        work: 'Histories',
        note: 'Mentions in passing that the city once surrendered to Porsenna — quietly contradicting the heroic siege tradition Livy preserves.',
      },
      {
        author: 'Mary Beard',
        work: 'SPQR',
        note: 'Points to the suspicious synchrony with Athens\'s expulsion of its tyrants, and argues the exit from monarchy was likely longer and messier than a single revolutionary year.',
      },
    ],
  },
];
