**Example Strategy Section**

# Building a Data-Driven Infrastructure Monitoring System for Climate-Vulnerable Regions

> This is an example strategy section responding to the crash course practice RFP ("Strengthening Community-Level Disaster Preparedness in Climate-Vulnerable Regions"). Annotations in blockquotes explain why each part works.

---

## 1. Context

CLI's field staff have deep knowledge of which communities are most vulnerable to climate-related disasters. However, this knowledge exists informally — in field reports, conversations, and institutional memory. There is currently no systematic way to track which critical infrastructure — health facilities, schools, shelters, access roads — sits within disaster-prone areas, or how the accessibility of that infrastructure changes when a disaster strikes.

CLI recognises this and is seeking to complement its field expertise with data-driven approaches and AI tools — not to replace what staff know, but to make that knowledge systematic, comparable across regions, and easier to act on. The data to do this exists in open sources: disaster records, infrastructure registries, satellite-derived hazard maps. What is missing is a process to bring them together.

Among the various capabilities that data enables, **monitoring** stands out as a natural fit for CLI: it requires few resources but has a potentially large impact across all aspects of disaster risk management — from preparedness planning to emergency response to resource allocation. Knowing what is at risk *before* an event occurs transforms how field staff plan: instead of reacting to each disaster, they can anticipate which infrastructure is exposed and prioritise accordingly.


> **Why this works:** The context names the gap (informal knowledge, no systematic tools) without diminishing the funder's expertise — "deep knowledge" comes first. The second paragraph restates the client's goal — introducing data-driven practices and AI — showing you understood the RFP. The third paragraph is where the proposer's angle appears: monitoring as the specific capability that serves that goal.

---

## 2. Objectives

1. **Develop a data-driven monitoring strategy** for CLI's disaster preparedness work, identifying which infrastructure and communities to prioritise and how open data can complement field staff knowledge on an ongoing basis.

2. **Build monitoring tools** for a priority category of infrastructure decided with CLI — interactive maps that field staff can use to identify at-risk locations before, during, and after disaster events.

3. **Build CLI staff capacity** to apply the same monitoring principles to other infrastructure categories and regions, so the organisation can extend the approach independently.

> **Why this works:** Three objectives, each concrete. The first is strategic (develop a monitoring strategy), not technical. The second is a deliverable (build tools), but the specific infrastructure category is left to CLI — scoping the choice with the client, not for them. The third addresses the RFP's "adaptability" criterion by focusing on capacity, not documentation. Notice they describe what CLI gains, not what the proposer does.

---

## 3. Approach

For an organisation transitioning to data-driven workflows, the priority is to focus on areas that produce high impact across multiple use cases while being easy to build upon as data maturity progresses. **Monitoring** — systematically tracking which infrastructure and communities are exposed to climate hazards — meets both criteria: it directly supports preparedness planning, emergency response, and resource allocation, and it establishes a data foundation that CLI can extend over time.

As a first step, we recommend focusing on **infrastructure monitoring**: identifying which critical facilities are exposed to climate hazards, and making that information accessible to field teams. Concretely, this means overlaying disaster history with infrastructure locations to make exposure visible and comparable across regions. The approach works for any infrastructure type CLI cares about — health facilities, schools, water points, shelters, access roads — because the underlying logic is the same: where have disasters occurred, and what infrastructure is nearby? What changes is the data source, not the method. For each region, risk thresholds are defined with field staff, who bring the local knowledge that data alone cannot provide.

> To illustrate what this looks like in practice, we explored flood risk and health infrastructure in Senegal using open data ([see the map](../demos/senegal/index.html)). The map shows which health facilities sit near historical flood zones — information that field staff could use to pre-position supplies, alert facility managers before the rainy season, or flag access risks to emergency coordinators. The exercise confirms that open disaster records and infrastructure registries are sufficient to produce this kind of actionable output.

AI makes this practical. Accessing, cleaning, and transforming data from multiple sources — tasks that would otherwise require significant technical capacity — become faster and more accessible with AI-assisted workflows. Beyond data preparation, AI can also power smart alert systems: flagging when new disaster events affect monitored infrastructure, or when risk levels change for a given region. The result is a monitoring capability that stays current without requiring constant manual effort from CLI staff.

> **Why this works:** Opens by explaining *why* monitoring is the right focus for an organisation at CLI's stage — high impact, cross-cutting, and a foundation for future work. This shows strategic thinking about the client's trajectory, not just technical capability. The Senegal exploration appears in a callout — concrete evidence without derailing the argument. AI appears where the RFP asks for it: lowering the barrier to data work and enabling smart alerts that keep monitoring current.

---

## 4. Proposed Activities

**Activity 1: Regional risk assessment pilot**

Apply the methodology to a priority region and infrastructure category selected with CLI field staff. Retrieve disaster history and infrastructure locations from open sources. Verify data quality by mapping it and cross-checking with field knowledge. Classify locations by risk level. Validate the results with field teams: where the data and field knowledge disagree, investigate and document the reason.

**Activity 2: Interactive monitoring tools**

Build interactive maps for each assessed region. Field staff can toggle layers, click on locations for details, and identify which sites need attention before the disaster season. The tools will be tested with staff and improved based on their feedback.

**Activity 3: Capacity building**

Document the process as a reusable guide: data sources, scripts, quality checks, and decision logic. Deliver training for CLI staff covering how to update the data, rerun the analysis for new regions, and apply the monitoring approach to other infrastructure categories.

> **Why this works:** Three activities, each with a clear output. They follow a logical sequence (assess → build → transfer) without specifying timelines or team composition. Activity 1 explicitly involves field staff in validation. Activity 3 ensures the organisation can continue without the proposer.

---

## 5. Deliverables

| Deliverable | Description |
|---|---|
| **Risk-classified datasets** | For each assessed region: infrastructure data tagged by risk status and distance to nearest disaster event |
| **Interactive monitoring maps** | Web-based interactive maps with toggleable layers |
| **Methodology guide** | Step-by-step documentation enabling CLI to reproduce and extend the analysis |
| **Training session** | For CLI staff on using and updating the tools |


> **Why this works:** The deliverables are tangible. The final line is the "show don't tell" moment: the map already exists. A reviewer can click the link and see exactly what the project would produce. This is the strongest possible proof of feasibility — not a description of what would be built, but an example of what has been built.
