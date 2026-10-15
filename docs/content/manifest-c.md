# Manifest C — principate-a.ts, principate-b.ts, high-empire.ts

Same format as manifest A. Control deltas are FIXED.

## File: src/data/events/principate-a.ts — export PRINCIPATE_A_EVENTS (era: 'principate')
Misconception quota: ≥4.

- `egypt-annexed-30bce` | -30 | w2 | Egypt as the emperor's personal preserve: equestrian prefect, senators barred, a third of the grain | aegyptus: provincial
- `first-settlement-27bce` | -27 | w3 | The First Settlement: the provinces with legions kept, the name Augustus taken | —
- `second-settlement-23bce` | -23 | w3 | Tribunicia potestas + imperium maius: republican parts, permanent whole | —
- `standing-army-25bce` | -27..14 | w2 | The standing army: ~28 legions, the Praetorian Guard, the aerarium militare (6 CE) — pensions come from him | —
- `augustus-consolidates-25bce` | -25 | w1 | Client-king housekeeping: Galatia annexed, Juba installed, Thrace aligned | galatia: provincial, mauretania-caesariensis: client, mauretania-tingitana: client, thracia: client
- `women-legal-18bce` | c. -18 | w1 [T] | Women's legal position and real influence; the Augustan marriage laws | — (social, legal; spatialFocus latium)
- `concrete-engineering-20bce` | c. -20 | w1 [T] | Roman concrete, arches, the Pantheon-to-sewer building revolution | — (infrastructure; spatialFocus latium, campania)
- `danube-frontier-16bce` | -16..6 | w2 | The Alpine and Danubian conquests: the empire's future military spine | raetia: provincial, noricum: provincial, pannonia: provincial, dalmatia: provincial, moesia: provincial, illyricum-north: provincial
- `germania-campaigns-12bce` | -12..9 | w2 | Drusus and Tiberius to the Elbe; Germania being organized | germania-magna: transient, germania-inferior: provincial, germania-superior: provincial
- `imperial-cult-12bce` | c. -12 | w1 [T] | The imperial cult: loyalty technology, not theology | — (religious; spatialFocus asia, gallia-lugdunensis)
- `judaea-province-6ce` | 6 | w1 | Judaea becomes a province under a prefect; the census of Quirinius | judaea: provincial
- `teutoburg-9ce` | 9 | w3 | Teutoburg: three legions gone; the Rhine becomes permanent | germania-magna: rival-germanic (marker: battle Teutoburg Forest [8.4, 52.4])
- `augustus-dies-14ce` | 14 | w3 | The unsolved succession problem — no legal mechanism, ever | —

## File: src/data/events/principate-b.ts — export PRINCIPATE_B_EVENTS (era: 'principate')
Misconception quota: ≥5.

- `tiberius-14ce` | 14..37 | w2 | Tiberius: Capri, Sejanus, the maiestas trials begin | cappadocia: provincial
- `caligula-37ce` | 37..41 | w1 | Caligula: four years, then his own guards; the horse story is hostile gossip | —
- `claudius-41ce` | 41 | w2 | Claudius installed by the Praetorians — the first emperor openly made by the army | —
- `annona-fleet-30ce` | c. 30 | w1 [T] | Feeding a million people: the annona, the grain fleets, Ostia | — (economic, infrastructure; spatialFocus aegyptus, africa-proconsularis, latium)
- `britain-43ce` | 43 | w2 | Claudius buys a conquest; client kingdoms absorbed empire-wide | britannia-south: provincial, lycia-pamphylia: provincial, mauretania-caesariensis: provincial, mauretania-tingitana: provincial, thracia: provincial
- `chariot-racing-50ce` | c. 50 | w1 [T] | The Circus dwarfed the Colosseum: racing as the real mass sport | — (spectacle, daily-life; spatialFocus latium)
- `boudica-60ce` | 60..61 | w2 | Boudica burns three cities; the province nearly abandoned | — (spatialFocus britannia-south; marker: disaster Camulodunum [0.9, 51.89])
- `freedmen-class-65ce` | c. 65 | w1 [T] | Manumission and the freedman: slavery with an exit, and what that built | — (slavery, social; spatialFocus latium, campania)
- `fire-64ce` | 64 | w2 | The Great Fire; Nero's rebuilding; Christians as scapegoats | — (marker: disaster Rome [12.48, 41.89])
- `jewish-revolt-66ce` | 66..70 | w2 | The First Jewish Revolt; Vespasian's command | judaea: contested
- `nero-death-68ce` | 68 | w2 | Nero's suicide ends the Julio-Claudian line — and the aura | —
- `four-emperors-69ce` | 69 | w3 | 69 CE: the secret of empire is out | —
- `jerusalem-70ce` | 70 | w2 | Jerusalem and the Temple destroyed; the treasure builds the Colosseum | judaea: provincial (marker: siege Jerusalem [35.23, 31.78])
- `romanization-west-75ce` | c. 75 | w1 [T] | What Romanization did and didn't mean: baths, togas, and the Tacitus quote about servitude | — (culture, daily-life; spatialFocus gallia-lugdunensis, britannia-south, hispania-baetica)
- `vesuvius-79ce` | 79 | w2 | Vesuvius: the catastrophe that preserved daily life | — (marker: disaster Pompeii [14.49, 40.75])
- `baths-daily-life-80ce` | c. 80 | w1 [T] | The baths: hygiene, leisure, and the most democratic space in Rome | — (daily-life; spatialFocus latium, campania)
- `agri-decumates-85ce` | c. 85 | w1 | The Flavian re-entrant between Rhine and Danube shortens the frontier | agri-decumates: provincial
- `domitian-81ce` | 81..96 | w2 | Domitian: dominus et deus, efficient and hated — by the men who wrote the sources (reliability: contested) | —

## File: src/data/events/high-empire.ts — export HIGH_EMPIRE_EVENTS (era: 'principate')
Misconception quota: ≥4.

- `nerva-trajan-96ce` | 96..98 | w1 | Nerva adopts Trajan under Praetorian pressure — necessity, later dressed as principle | —
- `dacian-wars-101ce` | 101..106 | w2 | The Dacian wars; the gold; the Column; Arabia annexed the same year | dacia: provincial, arabia-petraea: provincial (marker: battle Sarmizegetusa [22.79, 45.52])
- `army-life-120ce` | c. 120 | w1 [T] | Life in the frontier army: pay, camp, discharge diploma, veteran colony | — (military→use 'social', 'daily-life'; spatialFocus germania-superior, pannonia, britannia-south)
- `trajan-parthia-114ce` | 114..117 | w3 | Mesopotamia taken; the Gulf reached; maximum extent — for three years | armenia: transient, mesopotamia: transient, osroene: transient, assyria: transient (marker: political Ctesiphon [44.58, 33.09])
- `hadrian-117ce` | 117 | w2 | Hadrian gives it back and walls the world | armenia: client, mesopotamia: rival-parthia, osroene: client, assyria: rival-parthia
- `hadrians-wall-122ce` | 122 | w1 | The Wall: a frontier you can touch; expansion formally over | — (marker: founding Hadrian's Wall [-2.5, 55.0])
- `praetor-edict-130ce` | c. 130 | w1 [T] | The praetor's edict codified; jurists; how Roman law actually grew | — (legal; spatialFocus latium)
- `bar-kokhba-132ce` | 132..136 | w2 | Bar Kokhba: Judaea erased into Syria Palaestina | judaea: contested
- `antoninus-138ce` | 138..161 | w1 | Antoninus Pius: peak stability, almost no narrative — that is the point | judaea: provincial
- `antonine-wall-142ce` | 142 | w1 | The Antonine Wall: twenty years further north, then back | britannia-north: provincial
- `provincial-elite-140ce` | c. 140 | w1 [T] | Two provincial lives: the councilor in Lugdunum and the villager in Syria | — (daily-life, culture; spatialFocus gallia-lugdunensis, syria)
- `mystery-religions-150ce` | c. 150 | w1 [T] | Isis, Mithras, and the mystery cults: religion as choice, not civic duty | — (religious; spatialFocus latium, aegyptus, syria)
- `parthian-war-161ce` | 161..166 | w1 | Verus's Parthian war: victory abroad, plague home in the baggage | —
- `antonine-plague-165ce` | 165..180 | w3 | The Antonine plague: the demographic wound under everything after | —
- `christian-growth-170ce` | c. 170 | w1 [T] | How Christianity actually grew before Constantine: networks, women, charity, cities | — (religious, social; spatialFocus asia, syria, aegyptus)
- `marcomannic-166ce` | 166..180 | w2 | The Marcomannic wars: Germans in Italy; Marcus in camp writing Greek | pannonia: contested, noricum: contested, britannia-north: lost (marker: siege Aquileia [13.37, 45.77])
- `marcus-death-180ce` | 180 | w2 | Marcus dies; Commodus inherits — the adoptive "principle" was biology all along | pannonia: provincial, noricum: provincial
