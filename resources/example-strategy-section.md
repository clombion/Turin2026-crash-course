**Example Strategy Section**

# Building a Data-Driven Infrastructure Monitoring System for Climate-Vulnerable Regions

> This is an example strategy section responding to the crash course practice RFP ("Strengthening Community-Level Disaster Preparedness in Climate-Vulnerable Regions"). Annotations in blockquotes explain why each part works.

---

## 1. Context

CLI's field staff have deep knowledge of which communities are most vulnerable to climate-related disasters. However, this knowledge exists informally — in field reports, conversations, and institutional memory. There is currently no systematic way to track which critical infrastructure — health facilities, schools, shelters, access roads — sits within disaster-prone areas, or how the accessibility of that infrastructure changes when a disaster strikes.

This gap matters because preparedness depends on knowing what is at risk *before* an event occurs. When field staff can see which facilities are exposed and how that exposure has changed over recent disaster seasons, preparedness shifts from reactive to anticipatory. The data and tools to do this exist in open sources — flood records, infrastructure registries, satellite-derived hazard maps — but CLI currently has no process to bring them together.

A pilot analysis in Senegal demonstrates the approach: overlaying flood history with health facility locations identified facilities within flood-prone areas that serve populations who lose access to care during emergencies ([view the map](../demos/senegal/index.html)). The same method applies to any infrastructure type CLI needs to monitor.

> **Why this works:** The context names the gap (informal knowledge, no systematic tools) without diminishing the funder's expertise — "deep knowledge" comes first. The second paragraph frames monitoring as the strategic capability CLI is missing. The case study reference is brief — it illustrates that the approach works in practice, without turning the proposal into a report.

---

## 2. Objectives

1. **Develop a data-driven monitoring strategy** for CLI's disaster preparedness work, identifying which infrastructure and communities to prioritise and how open data can complement field staff knowledge on an ongoing basis.

2. **Build monitoring tools** — interactive maps that field staff can use to identify at-risk infrastructure before, during, and after disaster events, starting with a pilot on a priority identified with CLI (e.g. health facilities, schools, shelters).

3. **Document the approach as a reusable process** that CLI can apply to new regions and new types of infrastructure, building internal capacity for data-driven preparedness.

> **Why this works:** Three objectives, each concrete. The first is strategic (develop a monitoring strategy), not technical. The second is a deliverable (build tools), but the specific focus is left to CLI — health facilities are offered as an example, not imposed. The third addresses the RFP's "adaptability" criterion. Notice they describe what CLI gains, not what the proposer does.

---

## 3. Approach

For an organisation transitioning to data-driven workflows, the priority is to focus on areas that produce high impact across multiple use cases while being easy to build upon as data maturity progresses. **Monitoring** — systematically tracking which infrastructure and communities are exposed to climate hazards — meets both criteria: it directly supports preparedness planning, emergency response, and resource allocation, and it establishes a data foundation that CLI can extend over time.

Concretely, this means overlaying disaster history with infrastructure locations to make exposure visible and comparable across regions. The approach works for any infrastructure type CLI cares about — health facilities, schools, water points, shelters, access roads — because the underlying logic is the same: where has it flooded, and what is nearby? What changes is the data source, not the method. For each region, risk thresholds are defined with field staff, who bring the local knowledge that data alone cannot provide.

A pilot in Senegal ([see the map](../demos/senegal/index.html)) applied this to health facilities, showing that the approach produces actionable results with open data and no licensing constraints.

AI tools make this scalable. Extracting infrastructure data from OpenStreetMap, computing proximity across thousands of locations, and generating interactive maps are tasks that would take weeks manually but can be completed in hours with AI-assisted scripting. Critically, AI handles the mechanical work — querying APIs, writing code, building interfaces — while analytical decisions (which infrastructure to prioritise, what risk thresholds to use, how to interpret results) remain with CLI staff and the project team. This separation ensures reliability: every script is version-controlled and every result is verifiable.

The tools are designed for non-technical users and run entirely in a web browser — no software installation, no server infrastructure.

> **Why this works:** Opens by explaining *why* monitoring is the right focus for an organisation at CLI's stage — high impact, cross-cutting, and a foundation for future work. This shows strategic thinking about the client's trajectory, not just technical capability. Health facilities appear as one example among others, not as the scope. AI appears where the RFP asks for it: as what makes the approach scalable. The reliability concern is addressed directly — AI does mechanical work, humans make decisions.

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
