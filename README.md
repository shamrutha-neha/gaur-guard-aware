●GAURGUARD AI

●AI-Assisted Human–Wildlife Safety & Monitoring

GAURGUARD AI is an academic prototype designed to promote safer
human–wildlife coexistence by focusing on **wild Gaur (Indian Bison)
safety in and around Ooty, Tamil Nadu**.

The project demonstrates how an AI-assisted digital platform can bring
together wildlife observation, risk analysis, alerts, community reporting,
and safety guidance in a single user-friendly interface.

---

●Prototype

**Live Prototype:**  
https://gaur-guard-aware-git.lovable.app/

> The prototype is an academic demonstration and uses simulated/sample
> data. It is not a real-time wildlife monitoring system.

---

●Problem Statement

Human–wildlife encounters can create safety risks for both people and
animals.

Around Ooty, Gaur may move through areas such as forest edges, roads,
tourist locations, and residential zones. Unexpected encounters can
become risky when people are unsure how to respond.

There is a need for an accessible solution that can help people:

- Understand wildlife activity
- Identify potential risk areas
- Receive safety information
- Report wildlife sightings
- Access practical guidance during Gaur encounters

●Defined Problem

> How might we use AI-assisted technology to improve awareness,
> monitoring, and safety guidance for people encountering wild Gaur
> in and around Ooty, while promoting responsible human–wildlife
> coexistence?

---

●Proposed Solution

GAURGUARD AI combines wildlife observation, risk analysis, alerts,
community reporting, and safety guidance into one platform.

### Core Workflow

**OBSERVE → DETECT → ANALYSE RISK → ALERT → PROTECT**

The system is designed to help users understand potential wildlife
activity and make safer decisions during encounters.

---

● Key Features

### 1. Wildlife Safety Dashboard

The dashboard provides an overview of wildlife safety information,
including:

- Active Alerts
- Gaur Sightings
- High-Risk Zones
- Community Reports
- Recent Wildlife Alerts
- Quick Actions

---

### 2. Wildlife Alerts

The Alerts page demonstrates how wildlife events can be communicated
to users.

Each alert can display:

- Risk level
- Wildlife event
- Location
- Detection confidence
- Time
- Alert status
- Safety recommendation

The prototype includes a simulated **Wild Gaur Detected** high-risk
alert with safety recommendations.

---

### 3. Wildlife Risk Map

The Risk Map provides a simplified visualization of sample wildlife
risk areas.

Current prototype areas include:

| Area | Prototype Risk Level |
|------|----------------------|
| Forest Edge | High Risk |
| Tourist Area | Medium Risk |
| Residential Area | Low Risk |
| Roadside Zone | Medium Risk |

The Risk Map is a prototype visualization and does not use live GPS or
real-time wildlife data.

---

### 4. Gaur Safety Assistant

The Safety Assistant provides quick guidance for common wildlife
encounter situations.

Suggested questions include:

- What should I do if I see a wild gaur?
- How can I stay safe near forest edges?
- What should I do if a gaur is blocking the road?
- How do I report a sighting?

The current prototype uses a small set of predefined safety responses
created specifically for the project.

---

### 5. Report Sighting

The platform provides a pathway for users to report wildlife sightings.

In future versions, community reports could contribute to a larger
wildlife activity database and help identify recurring patterns.

---

### 6. Safety Guidelines

The prototype provides practical safety guidance for wildlife
encounters.

The guidance emphasizes:

- Maintaining a safe distance
- Not approaching wild Gaur
- Not chasing or disturbing wildlife
- Not blocking an animal's movement
- Following local authority instructions

---

● How GAURGUARD AI Works

### STEP 1 — OBSERVE

Collect wildlife observations from users, communities, or future
monitoring systems.

### STEP 2 — DETECT

Identify potential Gaur sightings or wildlife activity.

### STEP 3 — ANALYSE RISK

Consider information such as location, timing, frequency, and
surrounding human activity when assessing potential risk.

### STEP 4 — ALERT

Surface alerts when an area shows increased wildlife activity.

### STEP 5 — PROTECT

Provide practical safety guidance to encourage safer human–wildlife
interaction.

---

☆☆☆ Prototype Architecture

```text
                    USER
                      │
                      ▼
             GAURGUARD AI INTERFACE
                      │
          ┌───────────┼───────────┐
          ▼           ▼           ▼
      DASHBOARD     ALERTS    REPORT SIGHTING
          │           │           │
          └───────────┼───────────┘
                      ▼
                 RISK ANALYSIS
                      │
               ┌──────┴──────┐
               ▼             ▼
           RISK MAP     SAFETY ASSISTANT
               │             │
               └──────┬──────┘
                      ▼
               SAFETY GUIDANCE
                      │
                      ▼
                     USER