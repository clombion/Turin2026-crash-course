**Example Strategy Section**

# Using Data to Assess Health Infrastructure Vulnerability in Climate-Affected Regions

> This is an example strategy section responding to the crash course practice RFP ("Strengthening Community-Level Disaster Preparedness in Climate-Vulnerable Regions"). It demonstrates the level of specificity, data grounding, and narrative structure expected in the exam. Annotations in blockquotes explain why each part works.

---

## 1. Context

CLI's field staff have deep knowledge of which communities are most vulnerable to climate-related disasters. However, this knowledge exists informally — in field reports, conversations, and institutional memory. There is currently no systematic way to identify which health facilities sit within flood-prone areas, or how the accessibility of those facilities changes during a disaster event.

This gap matters because health facilities are strategic points in disaster preparedness: they are where affected populations go first, they need to remain operational during emergencies, and their staff need to be prepared before a flood season begins. Knowing which facilities are at risk — before a disaster strikes — transforms preparedness from reactive to anticipatory.

A preliminary analysis in Senegal confirms this is a real and measurable problem. Cross-referencing 8 recorded flood events with 1,861 health facility locations identified 9 facilities within 1 kilometre of a flood zone ([view the map](../demos/senegal/index.html)). These are clinics and dispensaries serving populations that lose access to care precisely when they need it most. Open geospatial data — flood records and facility locations — makes this kind of assessment possible for any region where CLI operates, at no cost and with no licensing constraints.

> **Why this works:** The context names the gap (informal knowledge, no systematic tools) without diminishing the funder's expertise. The case study appears in one paragraph — it justifies the angle by showing that health facility vulnerability is a real, measurable problem relevant to the RFP's focus on community-level preparedness. The last sentence pivots from the specific case to the broader proposition.

---

## 2. Objectives

1. **Develop a data-driven monitoring strategy** for CLI's disaster preparedness work, identifying which infrastructure and communities to prioritise and how open data can complement field staff knowledge on an ongoing basis.

2. **Build monitoring tools** — interactive maps that field staff can use to identify at-risk infrastructure before, during, and after disaster events, starting with a pilot on a priority identified with CLI (e.g. health facilities, schools, shelters).

3. **Document the approach as a reusable process** that CLI can apply to new regions and new types of infrastructure, building internal capacity for data-driven preparedness.

> **Why this works:** Three objectives, each concrete. The first is strategic (develop a monitoring strategy), not technical. The second is a deliverable (build tools), but the specific focus is left to CLI — health facilities are offered as an example, not imposed. The third addresses the RFP's "adaptability" criterion. Notice they describe what CLI gains, not what the proposer does.

---

## 3. Approach

Rather than attempting a broad assessment of all disaster risks, this project focuses on **monitoring**: giving CLI the ability to systematically track which infrastructure and communities are exposed to climate hazards, and how that exposure changes over time.

Health facilities illustrate why this matters and what the project would deliver. A facility that floods every rainy season is a preparedness problem that field staff may already know about — but currently have no way to flag systematically, compare across regions, or communicate to decision-makers. By overlaying disaster history with facility locations, we make that knowledge visible and actionable ([see the Senegal pilot](../demos/senegal/index.html)).

The same approach applies to any infrastructure CLI needs to monitor: schools, water points, shelters, access roads. For each target region, the risk threshold is calibrated with field staff, accounting for local topography and flood behaviour. Where the data and field knowledge disagree, we investigate together — sometimes the data reveals a risk that was not on the radar; sometimes field staff know something the data cannot capture.

AI tools make this scalable. Extracting infrastructure data from OpenStreetMap, computing proximity across thousands of facilities, and generating interactive maps are tasks that would take weeks manually but can be completed in hours with AI-assisted scripting. Critically, AI handles the mechanical work — querying APIs, writing code, building interfaces — while analytical decisions (which infrastructure to prioritise, what risk thresholds to use, how to interpret results) remain with CLI staff and the project team. This separation ensures reliability: every script is version-controlled and every result is verifiable.

The tools are designed for non-technical users and run entirely in a web browser — no software installation, no server infrastructure.

> **Why this works:** The approach is framed around monitoring as a capability CLI currently lacks. Health facilities are introduced as an example of why monitoring matters and what the project delivers — not as the entire scope. AI appears where the RFP asks for it: as what makes the approach scalable and efficient. The reliability concern from the RFP is addressed directly — AI does mechanical work, humans make decisions, everything is version-controlled.

---

## 4. Proposed Activities

**Activity 1: Regional risk assessment pilot**

Apply the methodology to a priority region selected with CLI field staff. Retrieve disaster history and health facility locations from open sources. Verify data quality by mapping it and cross-checking with field knowledge. Classify facilities by risk level. Validate the results with field teams: where the data and field knowledge disagree, investigate and document the reason.

**Activity 2: Interactive monitoring tools**

Build interactive maps for each assessed region, published as static web pages (no server infrastructure required). Field staff can toggle layers, click on facilities for details, and identify which facilities need attention before the disaster season. The tools are designed for non-technical users.

**Activity 3: Methodology documentation and capacity building**

Document the full process as a reusable guide: data sources, scripts, quality checks, and decision logic. Deliver training for CLI staff covering how to update the data, rerun the analysis for new regions, and adapt the approach to other infrastructure types.

> **Why this works:** Three activities, each with a clear output. They follow a logical sequence (assess → build → document) without specifying timelines or team composition. Activity 1 explicitly involves field staff in validation. Activity 3 ensures the organisation can continue without the proposer.

---

## 5. Deliverables

| Deliverable | Description |
|---|---|
| **Risk-classified datasets** | For each assessed region: facility data tagged by risk status and distance to nearest disaster event |
| **Interactive monitoring maps** | Web-based maps with toggleable layers, published on GitHub Pages |
| **Methodology guide** | Step-by-step documentation enabling CLI to reproduce and extend the analysis |
| **Training session** | For CLI staff on using and updating the tools |

The Senegal pilot demonstrates the format and quality of these deliverables: the interactive map is operational and can be viewed at the project's GitHub Pages site.

> **Why this works:** The deliverables are tangible. The final line is the "show don't tell" moment: the map already exists. A reviewer can click the link and see exactly what the project would produce. This is the strongest possible proof of feasibility — not a description of what would be built, but an example of what has been built.
