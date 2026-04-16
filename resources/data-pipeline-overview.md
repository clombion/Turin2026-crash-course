# The Data Pipeline

A reference for the seven-step pipeline that structures all data work in this course.

---

## Overview

The Data Pipeline is a framework for working with data from beginning to end. It was developed by the School of Data under the Open Knowledge Foundation and refined through work with hundreds of nonprofits, governments, and newsrooms. The steps are:

**Define** → **Find** → **Get** → **Verify** → **Clean** → **Analyse** → **Present**

The pipeline is not strictly linear. Two iterative loops appear in practice:

- **Define ↔ Find**: discovering what data exists changes what questions you can answer. You may need to revise your research questions after learning what's available.
- **Verify ↔ Clean ↔ Analyse**: during cleaning you may discover data quality issues that require re-verification. During analysis, something may look wrong and send you back to cleaning.

---

## The Steps

### Define

The starting point. Formulate the specific question you want to answer, a hypothesis about what you expect to find, and a Horizon Table — the empty spreadsheet that would let you test your hypothesis.

A vague question produces a vague project. If your question doesn't tell you what data you need, keep narrowing.

### Find

Locate the data sources that could fill your Horizon Table. This includes open data portals, APIs, web pages, reports, and physical archives. AI tools can help with discovery — comparing databases on coverage, format, and accessibility.

### Get

Retrieve the data from its source and bring it into your workspace. Methods range from manual download to API queries to web scraping. Every retrieval method should produce a documented, reproducible artifact — a script, not a one-off copy-paste.

### Verify

Check that the data you got is what you think it is. Does it cover the time period you need? Are there gaps? Is the methodology of collection documented? Who produced it, and are they a credible source? All data has problems — verification is about understanding how bad they are.

### Clean

Prepare the data for analysis. This includes removing duplicates, standardising formats, correcting errors, and consolidating data from multiple sources. Cleaning is often the most time-consuming step — and the one most underestimated.

### Analyse

Transform your research questions into analysis questions that reference specific columns and values in your data. The Analyse step answers the questions you defined at the start — it does not go looking for new ones. The risk at this stage is analysis scope creep: exploring patterns without a prior purpose.

### Present

Communicate your findings to your audience. The step is called "present," not "visualise" — the right output might be a map, a table, a report, a dataset, or a combination. Ask who the audience is and what format serves them.

---

## The Pipeline and AI

AI tools are most effective at the **Get** and **Clean** steps — tasks that are mechanical, repetitive, and text-based. AI is least reliable at **Define**, **Verify**, and **Analyse** — tasks that require judgment about meaning, context, and purpose.

The pipeline is the harness that makes AI safe to use in data work. By constraining AI to isolated steps with clear inputs and verifiable outputs, you prevent the errors that come from letting AI jump across steps without human checkpoints.

Every AI task should stay within a single pipeline step. If a task crosses step boundaries, it is two tasks.

---

## The Pipeline and This Course

Each day of the crash course maps to the pipeline:

| Day | Primary focus | What you produce |
|---|---|---|
| **Day 1** | Define (+ light Find) | Research questions, horizon table, proposal outline |
| **Day 2** | Find, Get | Collected datasets, documented retrieval process |
| **Day 3** | Verify, Clean | Verified, clean, consolidated dataset |
| **Day 4** | Analyse | Data-informed arguments and visualisations |
| **Day 5** | Present (+ project planning) | Final proposal with data evidence |
