# Crescens TTRPG — Development Context

## Core Philosophy
Verisimilitude, lethality, growth. Setting-agnostic core + modules. No classes. No HP. No initiative by default.

## Documents Completed
- `core.md` — basics, stats, skills, glossary
- `character-creation.md` — full pipeline + 12 backgrounds + 12 powers
- `combat.md` — full combat system
- `magic.md` - initial magic module. Introduces new Magic casting skills: Arcane, Faith, Witchcraft, Verdance, Elementalism

## Pending
- `running-the-game.md`
- `swordplay.md` module for equipment/armour of a fantasy setting. Replaces Fighting Skills with more granular Combat skills: Blocking, Bludgeoning, Bowyer, Duelling, Firearms, Great Weapon Fighting, Knife Fighting, Spear Fighting, Throwing, Unarmed Combat.
- `ancestry.md` module for fantasy and/or scifi species options during character creation.
- `cyber.md` module for sci-fi equipment and special rules

---

## Mechanics Reference

### Dice Chain
d2 < d3 < d4 < d6 < d8 < d10 < d12 < d16 < d20
- Stats expressed as die size (d4–d12)
- Skills expressed as flat rank 1–6
- Core roll is Stat + Skill (if any) vs Target Number
- Advantage/Disadvantage = step die up/down. Stacks. Cancel 1:1.

### TNs
| Difficulty | TN |
|---|---|
| Medium | 5 |
| Hard | 8 |
| Very Hard | 12 |
| Legendary | 15 |
| Myth | 20 |
No Easy category — automatic success instead.

### Primary Stats
- **Strength** — power, endurance, contributes to Limit
- **Agility** — speed, precision, default Evasion stat
- **Perception** — awareness physical+social
- **Intelligence** — recall, reasoning, strategy
- **Spirit** — will, connection, gumption. Contributes to Limit

Stats = vectors of approach, not permission gates. Same skill can pair with different stats depending on HOW character acts.

### Secondary Stats
- **Limit** - a.k.a. "Knock Out Limit" - the total rank of Injuries a character can take before becoming "Knocked Out" = Strength die max + Spirit die max.
- **Evasion** - a.k.a. "Passive Defence" - how difficult to be hit = Agility die avg round-down.

### Character Creation
1. Roll 7d6, drop highest+lowest. Left-to-right = Str/Agi/Per/Int/Spi. 1-2-3=d4, 4-5=d6, 6=d8. May swap 1 result (or all, if GM generous).
2. 8 skill ranks, cap 3 per skill at creation.
3. Ancestry (Human default = +1 skill rank, no mechanical traits)
4. Background (suggested skills, granted equipment)
5. Role = 2 starting Powers

### Progression - Powers or Stat Increase or Skill Increase
Instead of levelling: train Powers, Stat Increases (one die step, max d12), or Skill Increases (3 ranks, no single skill >1 above current highest). All require in-fiction training time. No cap on Powers except time/fiction.

---

## Skills
Core list: Animal Handling, Art, Charm, Crafting, Deception, First Aid, Insight, Intimidation, Knowledge (choose field, repeatable), Logic, Persuasion, Piloting, Search, Stealth, Subterfuge, Wilderness.
Fighting Skills: Traditional Weapons (choose, repeatable), Guns

Custom skills allowed with GM approval. Single evocative phrase. Must map to a core skill for Power prerequisites.

Social skills pair with different stats by approach:
- Entertain: Agility (performance) or Spirit (charm)
- Impress: Spirit or Intelligence
- Deceive: Intelligence
- Intimidate: Strength or Intelligence
- Convince: Intelligence or Agility
- Read: Perception

---

## Combat

### Rounds
Simultaneous. GM telegraphs enemy intent (but not for Hidden Actions - players use Discern action to reveal this). Players declare together. Resolve engagements by order of player decisiveness, then movement.

Actions: Attack, Defend, Move, Discern, Assist, Hide, Interact, Grapple, Shove, Heal

Bonus Actions: Go Prone, Stand, Quick Use

### Attack Action
Declare **Attacker's Intent** (attacking what, where). Roll combat skill + stat vs target's Defence. Success - roll damage → generate Injury of "descriptor + rank". Use Intent and example damage-type based tables to define Descriptor. Damage roll is rank.

#### Damage Tables

BLUDGEONING: 0=Glancing Blow/1, 1-2=Heavy Bruising/2, 3-4=Deep Bruising/3, 5-6=Bone Fracture/4, 7-8=Broken Bones/5, 9+=Shattered/6

SLASHING: 0=Superficial Cut/1, 1-2=Gash/2, 3-4=Deep Laceration/3, 5-6=Severed Muscle/4, 7-8=Arterial Cut/5, 9+=Dismemberment/6

PIERCING: 0=Graze/1, 1-2=Puncture/2, 3-4=Deep Puncture/3, 5-6=Impalement/4, 7-8=Organ Damage/5, 9+=Transfixion/6

FIRE: 0=Singed/1, 1-2=Scorched/2, 3-4=Burns/3, 5-6=Deep Burns/4, 7-8=Charred/5, 9+=Immolation/6

PSYCHIC (mind, no location): 0=Unsettled/1, 1-2=Rattled/2, 3-4=Fractured Thoughts/3, 5-6=Dissociation/4, 7-8=Mind Shattered/5, 9+=Ego Death/6

FORCE (systemic, no location): 0=Unsettled/1, 1-2=Weakened/2, 3-4=Fraying/3, 5-6=Deteriorating/4, 7-8=Unravelled/5, 9+=Unmade/6

PENDING: Thunder, Acid, Poison, Cold, Lightning, Dark, Light

### Defence
Powers can shift Evasion to Strength/Perception/Intelligence/Spirit base.

**Defend Action** = roll Defence stat + relevant skill. Cannot be lower than Evasion. Skills vary by approach (dodge=Stealth/Subterfuge, read attacks=Insight, brace=combat skill).

### Armour
Reduces attacker's Damage by armour value (1–6). Floor = 1. Targeting unarmoured locations ignores armour entirely but probably adds Disadvantage stacks

### Injuries (instead of HP system)
An Injury = Descriptor + location + rank.

Rank = negative modifier to relevant rolls. Accumulate freely.

**Knock Out**  When total Injury ranks ≥ Limit - can't act, needs aid. Not necessarily Unconscious or Dying.

### Dying & Fatal Injuries
GM marks Injury rank 4+ as Fatal → character is Dying. End of each Round: Spirit roll vs TN=current rank for each Fatal Injury. Failure ticks Injury up 1 rank. "Rank 7"=dead (as you can't get above rank 6 in a skill either). 

A Rank 6 single Injury = instant death.

Character can act while Dying.

Heal Action = removes Fatal tag and if last Fatal Injury, removes Dying. Doesn't reduce rank.

### Wounds Table
If a character is Knocked Out, roll on Wounds Table.

1=Dramatic Death (one final action then die), 2-5=Facial Injury (d6: 1=L.Eye, 2=R.Eye, 3=Tongue, 4=Nose, 5=L.Ear, 6=R.Ear), 6-7=Facial Disfigurement, 8-9=Lose Arm, 10-11=Lose Leg, 12-15=Deep Scarring (GM Disadvantage token/session), 16-19=Scarred (Advantage on Intimidation), 20=Walked Away

### Recovery
Per Fight = resets after each combat. Rest = full night, make Recovery Roll, clears temporary conditions, refreshes per-fight abilities.

Recovery Roll=str/spi dice roll (no skill) number of injuries recovered by 1 rank.

### Conditions (brief)
Bleeding(rank), Blinded, Charmed, Deafened, Dying, Exhausted(rank=Injury), Flanked(Advantage on attacks vs pre-engaged enemy), Hidden (Advantage on enemies), Immobilised, Incapacitated, Knocked Out, Pained(Spirit roll or lose Action), Frightened/Poisoned(a Disadvantage on attacks+skills), Prone, Restrained, Sluggish(Action OR Bonus Action), Stunned(Incapacitated 1 Round), Unconscious

---

## Damage Types
Physical: Bludgeoning, Slashing, Piercing, Thunder
Organic: Acid, Poison, Psychic
Energy: Fire, Cold, Lightning
Mystical: Dark, Light, Force

---

## 12 Core Backgrounds
Privileged, Labourer, Poor, Merchant, Performer, Servant, Artisan, Mariner, Wanderer, Criminal, Scholar, Military. Each: 2 suggested skills, 4 ranks to distribute, equipment kit.

## 12 Example Core Powers
Action Surge, Blind Fighting, Camouflage, Cursed, Danger Sense, Durable, Inspiring Leader, Jack of All Trades, Keen Senses, Lucky, Martial Arts, Unhindered Movement.

Many more to be added via Modules.

Stat Increase and Skill Increase are NOT Powers - but part of progression.

---

## Terminology
- No "short/long rest" → Per Fight / Rest
- No "HP" → Injuries + Knock Out Limit
- No "initiative" → simultaneous, contested Agility roll only when order matters
- No "Necrotic/Radiant" → Dark/Light
- No "Unconscious/Dying" conflated → distinct conditions
- No "Defence stat" → Defend action + passive Defence
- No em dashes in rules text (AI tell)
- No numbered lists in prose rules text