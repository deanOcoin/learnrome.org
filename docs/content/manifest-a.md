# Manifest A — regal.ts, early-republic.ts, middle-republic.ts

Line format: `id` | year(..yearEnd) | w? = weight | title hint | control delta (— = `{}`)
[T] = thematic event: `nonTerritorial: true` + spatialFocus. Control deltas are FIXED.

## File: src/data/events/regal.ts — export REGAL_EVENTS (era: 'regal')
Misconception quota: ≥3.

- `iron-age-villages-1000bce` | -1000..-800 | w1 | Iron Age villages above the Tiber; no founding moment; the crossing site is the point | — (spatialFocus latium)
- `rome-founding-753bce` | -753 | w3 | Traditional founding; Romulus legend vs archaeology | latium: core
- `augury-priesthoods-650bce` | c. -650 | w1 [T] | State religion mechanics: auspices, priestly colleges, religion as procedure not belief | — (religious; spatialFocus latium)
- `numa-religion-715bce` | -715..-673 | w2 | Numa: calendar, priesthoods, the religious constitution | —
- `tullus-alba-673bce` | -673..-642 | w1 | Tullus Hostilius destroys Alba Longa; Rome absorbs its mother-city | —
- `ancus-ostia-642bce` | -642..-617 | w1 | Ancus Marcius; Ostia and the reach to the sea (salt, the river mouth) | —
- `tarquinius-priscus-616bce` | -616..-579 | w2 | Etruscan kings; Circus Maximus, Cloaca Maxima; alphabet/augury/fasces/triumph all Etruscan borrowings | — (spatialFocus etruria, latium)
- `servius-tullius-578bce` | -578..-535 | w2 | Servian census; wealth-graded centuries — the rigged comitia centuriata that governs the whole Republic | — (misconception: one-person-one-vote)
- `expulsion-509bce` | -509 | w3 | Lucretia, Brutus, the oath against *rex* — the word, not one-man rule | —

## File: src/data/events/early-republic.ts — export EARLY_REPUBLIC_EVENTS (era: 'early-republic')
Misconception quota: ≥3.

- `consuls-509bce` | -509 | w2 | Two annual consuls, mutual veto; dictatorship stays legal (six months) | —
- `plebs-secession-494bce` | -494 | w2 | First secession; the tribunate — veto power born from a labor strike | —
- `client-patron-460bce` | c. -460 | w1 [T] | The client–patron bond as THE organizing social relation | — (social; spatialFocus latium)
- `twelve-tables-451bce` | -451..-450 | w2 | First written law; publication as plebeian victory | —
- `lex-canuleia-445bce` | -445 | w1 | Intermarriage between orders legalized | —
- `patria-potestas-440bce` | c. -440 | w1 [T] | The Roman family: patria potestas, marriage, the household as a legal unit | — (daily-life, social; spatialFocus latium)
- `state-cult-400bce` | c. -400 | w1 [T] | Augury and obstruction: religion as a political instrument | — (religious; spatialFocus latium)
- `veii-396bce` | -396 | w2 | Camillus takes Veii after a ten-year siege; Rome's first annexation | etruria: contested
- `gallic-sack-390bce` | -390 (dateNote 'or 387 BCE') | w3 | The Allia; vae victis; the founding trauma | cisalpina: rival-celtic
- `licinio-sextian-367bce` | -367 | w2 | Plebeian consuls; the public-land cap everyone ignores (the exact grievance of 133) | —
- `farming-soldier-350bce` | c. -350 | w1 [T] | The citizen-smallholder: farm, census class, legion — one economic unit | — (economic, social; spatialFocus latium, campania)
- `samnite-wars-343bce` | -343..-290 | w2 | Three Samnite wars; Caudine Forks; Rome loses and keeps coming back | campania: core, samnium: core (marker: Caudine Forks siege/battle ~[14.55, 41.05])
- `via-appia-312bce` | -312 | w1 | Via Appia and Aqua Appia — infrastructure as strategy | —
- `alliance-system-300bce` | c. -300 | w2 | The socii system: manpower, not tax — why Hannibal cannot win | —
- `lex-hortensia-287bce` | -287 | w2 | Plebiscites bind everyone; Conflict of the Orders ends in a new mixed nobility, not democracy | —
- `pyrrhus-280bce` | -280..-275 | w2 | Pyrrhus; Heraclea, Asculum; the Hellenistic world discovers Rome | epirus: rival-hellenistic, macedonia: rival-hellenistic, achaea: rival-hellenistic, aegyptus: rival-hellenistic, syria: rival-hellenistic, asia: rival-hellenistic, africa-proconsularis: rival-carthage, magna-graecia: contested
- `tarentum-272bce` | -272 | w2 | Tarentum falls; Rome holds the peninsula | etruria: core, umbria: core, picenum: core, apulia: core, lucania-bruttium: core, magna-graecia: core

## File: src/data/events/middle-republic.ts — export MIDDLE_REPUBLIC_EVENTS (era: 'middle-republic')
Misconception quota: ≥4.

- `first-punic-264bce` | -264..-241 | w2 | First Punic War; the corvus; fleets lost to storms and rebuilt | sicilia: contested
- `sicilia-province-241bce` | -241 | w2 | Sicily, the first provincia — the administrative category of empire | sicilia: provincial (marker: battle Aegates [12.06, 37.97])
- `sardinia-seizure-238bce` | -238 | w1 | Sardinia seized during the Mercenary Revolt — opportunism even Romans flinched at | sardinia-corsica: provincial
- `barcid-spain-237bce` | -237..-219 | w2 | The Barcids build a Spanish empire; silver funds the next war | hispania-baetica: rival-carthage, hispania-tarraconensis: rival-carthage
- `roads-italy-220bce` | c. -220 | w1 [T] | The road network: armies and messages, not trade | — (infrastructure; spatialFocus latium, campania, cisalpina)
- `hannibal-alps-218bce` | -218 | w2 | Hannibal crosses the Alps; Trebia | — (marker: battle Trebia [9.6, 45.05])
- `trasimene-217bce` | -217 | w1 | Lake Trasimene; Fabius and the shadowing strategy | etruria: contested (marker: battle Trasimene [12.1, 43.13])
- `cannae-216bce` | -216 | w3 | Cannae | campania: contested, apulia: contested, lucania-bruttium: contested, magna-graecia: contested (marker: battle Cannae [16.13, 41.3])
- `capua-syracuse-215bce` | -215..-211 | w2 | Capua and Syracuse defect and are destroyed; Archimedes dies | sicilia: contested (marker: siege Syracuse [15.29, 37.06])
- `denarius-211bce` | -211 | w1 [T] | The denarius: war finance becomes a currency system | — (economic; spatialFocus latium)
- `scipio-spain-209bce` | -209..-206 | w2 | Scipio takes New Carthage and Spain | hispania-baetica: contested, hispania-tarraconensis: contested
- `zama-202bce` | -202 | w2 | Zama; Masinissa's cavalry; Hannibal beaten at his own game | etruria: core, campania: core, apulia: core, lucania-bruttium: core, magna-graecia: core, sicilia: provincial, numidia: client (marker: battle Zama [9.45, 36.3])
- `peace-201bce` | -201 | w1 | The peace: fleet gone, indemnity, no war without permission; Spain kept | hispania-baetica: provincial, hispania-tarraconensis: provincial
- `slavery-captives-195bce` | c. -195 | w1 [T] | Mass enslavement of war captives transforms slavery's scale and sources | — (slavery, economic; spatialFocus sicilia, campania)
- `cynoscephalae-197bce` | -200..-197 | w2 | Second Macedonian War; legion beats phalanx | — (marker: battle Cynoscephalae [22.57, 39.42])
- `magnesia-190bce` | -192..-188 | w2 | Antiochus III; Magnesia; Treaty of Apamea — Anatolia enters Rome's orbit | bithynia-pontus: rival-hellenistic, cappadocia: rival-hellenistic, cilicia: rival-hellenistic, galatia: rival-celtic (marker: battle Magnesia [27.43, 38.62])
- `pydna-168bce` | -171..-168 | w2 | Third Macedonian War; Pydna; Macedon broken into client republics | macedonia: client, epirus: client, illyricum-north: client (marker: battle Pydna [22.61, 40.37])
- `eleusis-168bce` | -168 | w2 | The Day of Eleusis: a circle in the sand — naked power without administration | —
- `greek-absorption-160bce` | c. -160 | w1 [T] | Captive Greece captures Rome: tutors, art, philosophy, the backlash | — (culture; spatialFocus latium, achaea)
- `viriathus-147bce` | -147..-139 | w1 | Viriathus and the Lusitanian war; a shepherd humiliates consuls; murdered by bribed envoys | lusitania: provincial
- `numantia-143bce` | -143..-133 | w1 | Numantia: dirty war on the Meseta ends with Scipio Aemilianus | hispania-interior: provincial
- `publicani-140bce` | c. -140 | w1 [T] | Tax farming: the state auctions its revenue; the equestrian lobby is born | — (economic, legal; spatialFocus sicilia, asia)
- `third-punic-149bce` | -149..-146 | w2 | Carthago delenda est; the three-year siege | africa-proconsularis: contested
- `carthage-corinth-146bce` | -146 | w3 | Carthage and Corinth destroyed in one year; Macedonia and Africa provinces; the decline debate starts among the victors | africa-proconsularis: provincial, macedonia: provincial, achaea: provincial, epirus: provincial, cisalpina: core, liguria: core, venetia: core (markers: siege Carthage [10.32, 36.85], siege Corinth [22.93, 37.94])
- `latifundia-crisis-180bce` | -200..-130 | w3 | Structural consequence: latifundia, slave estates, the shrinking census class — the root cause of everything after | — (economic, slavery, social; spatialFocus etruria, campania, sicilia)
