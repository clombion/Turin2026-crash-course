# The Horizon Table

A reference guide for designing data tables before you search for data.

---

## What is a Horizon Table?

The Horizon Table is the empty spreadsheet you design **before** finding any data. It is the output shape — the exact table you would need to test your hypothesis.

You design it before searching for data. This forces you to be specific: what is a row, what are the columns, what units, what sources.

An empty table with clear column names and a defined unit of observation is not a blank page. It is a research plan.

---

## Why it matters

**1. It forces Define before Find.**
You must articulate what you need before searching. If you jump to collecting data before defining what you need, you waste time gathering things that don't answer your question.

**2. It creates the output shape for AI tasks.**
The Horizon Table columns are the schema the AI must fill. No schema means no constraint, and no constraint means hallucination. When you give an AI a clear table structure, it knows exactly what to extract. When you don't, it invents.

**3. It makes absence visible.**
When you ask "What can't this table capture?" you practice the critical thinking that separates a strong proposal from a naive one. The table's limits are your project's limits.

---

## How to build one

### Step 1: Start with the question and hypothesis

What would you need to see in a spreadsheet to confirm or reject your hypothesis? The question tells you what data you need. The hypothesis tells you what "interesting" looks like — and what would surprise you.

A research question without a hypothesis leads to fishing for patterns. A hypothesis without a research question leads to confirmation bias. You need both.

### Step 2: Define the unit of observation

What is one row? A district? A health facility? A disaster event? A community?

This is the single most clarifying decision in table design. If you can't say what one row represents, your table isn't ready.

### Step 3: Define the columns

What do you need to know about each unit to test the hypothesis? Each column should serve the research question. If a column doesn't help answer the question, it doesn't belong — at least not yet.

### Step 4: Add metadata columns

Every table needs provenance:

- `source` — where did this value come from?
- `date_retrieved` — when was it collected?
- `confidence` — how reliable is this value? (optional but valuable)

Metadata columns make verification possible later. Without them, you can't trace a number back to its origin.

### Step 5: Name columns clearly

Lowercase, no spaces, descriptive:

- Good: `population_under_5`, `district_name`, `flood_events_2020_2024`
- Bad: `Data2`, `Column F`, `misc`

Column names are for machines as much as humans. Clear names make formulas, scripts, and AI tasks less error-prone.

---

## Worked example 1: Flood exposure and health access

A development organisation wants to assess which communities are most exposed to flooding and farthest from health facilities, to prioritise disaster preparedness investments.

**Research question:** In a selected region, which districts combine high flood exposure with low access to health infrastructure?

**Hypothesis:** Districts with the highest frequency of flood events are also the ones with the fewest health facilities per capita — preparedness resources do not follow risk.

**Unit of observation:** One district.

| Column | Purpose |
|---|---|
| `district_name` | Geographic unit |
| `population` | Denominator for per-capita calculations |
| `population_under_5` | Vulnerable population indicator |
| `flood_events_2015_2024` | Exposure measure — count of recorded flood events |
| `health_facilities_count` | Infrastructure availability |
| `health_facilities_per_10k` | **Key column** — access relative to population |
| `nearest_hospital_km` | Distance to higher-level care |
| `source` | Where each value comes from |
| `year` | Time period of the data |

**What the empty table already tells you:**

- **What data you need to find** — population by district (including age breakdown), flood event records with locations, health facility locations.
- **Where the hard parts are** — `flood_events_2015_2024` depends on how floods are recorded and by whom. Small, localised floods may not appear in global databases.
- **What analysis you'll do** — compare `health_facilities_per_10k` against `flood_events_2015_2024` across districts. Do the most exposed districts have the least access?
- **What the output will look like** — a table with one row per district, mappable by coordinates.

---

## Worked example 2: Shelter proximity for displaced populations

An NGO working with displaced communities wants to know whether emergency shelters are located close to where displaced populations actually live, or whether shelter placement follows administrative convenience rather than need.

**Research question:** How does the distance between displacement sites and the nearest emergency shelter vary across districts in a selected region?

**Hypothesis:** Shelter locations correlate with urban centres and administrative capitals, not with displacement sites — the most displaced communities are the farthest from shelters.

**Unit of observation:** One displacement site.

| Column | Purpose |
|---|---|
| `site_name` | Identification |
| `district` | Geographic grouping |
| `latitude` | Location |
| `longitude` | Location |
| `displaced_population` | Scale of need |
| `nearest_shelter_name` | Closest shelter |
| `nearest_shelter_km` | **Key column** — distance to nearest shelter |
| `shelter_in_urban_area` | Whether the nearest shelter is in a town/city |
| `source` | Where each value comes from |

**What the empty table tells you:**

- You need displacement site locations with population estimates — these may come from UNHCR or OCHA.
- You need shelter locations — these may come from a different organisation entirely.
- The distance calculation is something you compute, not something you find in a dataset. That's a task for AI-assisted scripting.
- Mapping `nearest_shelter_km` against `displaced_population` will show visually whether the biggest sites are the worst served.

---

## The critical question

After designing your Horizon Table, ask:

> **"What can't this table capture? Who is invisible?"**

In the flood exposure example: communities in areas where no one is recording flood events. Informal settlements not captured in population data. Health facilities that exist on paper but are not operational.

In the shelter proximity example: displaced people not registered at official sites. People who gave up trying to reach a shelter. Communities where the road to the nearest shelter is impassable during the rainy season — the distance in kilometres is not the distance in practice.

There is no right answer. The point is to develop the reflex. Ask this every time you design a Horizon Table.

---

## Common mistakes

- **Too many columns.** Every column you add is a column you need to fill and verify. Start minimal.
- **Vague column names.** `data`, `info`, `other` tell you nothing. Name the content.
- **No unit of observation.** If you can't say what one row is, the table isn't ready.
- **Forgetting source columns.** Without provenance, you can't verify or reproduce.
- **Designing the table after finding data.** The Horizon Table is built before you search. If you design it around what you already have, it serves the data instead of the question — and that defeats the purpose.
