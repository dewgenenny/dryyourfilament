---
title: Dry Your Filament — Complete Guide
layout: base.njk
description: Comprehensive guides to drying, storing, and diagnosing moisture problems in FDM 3D printing filament. Covers PLA, PETG, Nylon, ABS, TPU, PC and more.
---

<div class="hero-strip">
<h1>Dry Your Filament</h1>
<p>Most FDM filaments absorb moisture from the air — silently degrading print quality and part strength. This guide explains what happens, how to fix it, and how to prevent it.</p>
</div>

## Quick Reference: Drying Parameters

Always check your filament manufacturer's datasheet for brand-specific values. The figures below represent well-supported consensus ranges.

| Material | Sensitivity | Temperature | Time | Key Notes |
|---|---|---|---|---|
| PLA / rPLA | Low–Moderate | 45–50 °C | 4–6 h | Oven risk: spools can deform above ~60 °C |
| PETG | Moderate | 55–65 °C | 4–6 h | Common cause of unexpected stringing |
| ABS / ASA | Moderate | 70–80 °C | 4–6 h | Higher temps improve layer adhesion |
| TPU / TPE | Moderate | 40–55 °C | 5–12 h | Low temp, long time to avoid deformation |
| Nylon (PA6 / PA12 / PA11) | **Very High** | ~90 °C | 4–6 h | Over-drying risk — PA needs trace moisture |
| Polycarbonate (PC) | High | 80–85 °C | 4–6 h | PC blends recommended at 85 °C / 5 h |
| PVA / BVOH | **Very High** | 50–60 °C | 6–12 h | Dry before every single print |
| PEEK / PEKK / PEI | High | 120–150 °C | 3–6 h | Requires a high-temp capable dryer |
| Carbon-fibre composites | Inherits base polymer | 90 °C (PA-CF) | 6 h | Drying PA-CF raised tensile strength ~15 % |

<div class="callout callout-warning">
<span class="callout-title">Key principle: heat is required to dry filament</span>
Desiccant alone cannot rescue already-wet filament — it lowers ambient humidity, which helps <em>prevent</em> re-absorption, but cannot actively pull moisture out of saturated polymer at a practical rate. Active heat is what drives moisture back out.
</div>

## Explore the Guides

<div class="guide-cards">
<a class="guide-card" href="/guides/detect/">
<h3>Is My Filament Wet?</h3>
<p>Diagnose wet filament from sounds, visual symptoms, and print defects. Includes a quick test.</p>
</a>
<a class="guide-card" href="/guides/materials/">
<h3>Per-Material Guide</h3>
<p>Sensitivity ratings, drying parameters, and specific tips for every common filament type.</p>
</a>
<a class="guide-card" href="/guides/methods/">
<h3>Drying Methods</h3>
<p>Compare dedicated dryers, food dehydrators, ovens, and DIY solutions — with pros and cons.</p>
</a>
<a class="guide-card" href="/guides/storage/">
<h3>Storage & Prevention</h3>
<p>Desiccants, containers, in-use dry boxes, and a maintenance schedule to keep filament dry long-term.</p>
</a>
</div>

## What Moisture Does to Your Prints

When filament absorbs water and is heated during extrusion, that moisture turns to steam. The effects range from cosmetic to structural:

- **Popping and crackling** during printing — the most reliable early warning sign
- **Rough, foamy surface texture** — steam bubbles trapped in the deposited bead
- **Inconsistent extrusion and line width** — voids cause the flow to stutter
- **Increased stringing** — steam pressure in the hotend drives extra ooze on travel moves
- **Weak inter-layer bonding** — voids and porosity reduce the contact area between layers
- **Dimensional inaccuracy** — foaming changes the actual volume of deposited material

The mechanical consequences can be severe. A 2023 peer-reviewed study (PMC10304609) tested 13 filament types under controlled humidity and found Nylon suffered an **83 % reduction in elastic modulus** and a **42 % reduction in tensile strength** at moisture saturation — results so extreme the material was excluded from the comparative charts. Even PLA, often treated as low-risk, loses **24–36 % of its tensile strength** after three months at room temperature and ambient humidity (PMC11442157, 2024). A wet PLA print that looks fine may be significantly weaker than expected.

The good news: drying restores performance. Studies on carbon-fibre-reinforced PA composites showed that drying before printing increased tensile strength by approximately 15 % and flexural strength by 11.5 %.

## The Science in Brief

All hygroscopic polymers absorb water through **Fickian diffusion** — moisture molecules migrate from the surface inward along concentration gradients. The rate depends on humidity, temperature, and the polymer's diffusion coefficient. At equilibrium (left in a controlled humidity chamber) the absorption capacity varies dramatically between materials:

| Material | Equilibrium moisture (97 % RH) |
|---|---|
| Nylon (PA) | ~8.1 % by weight |
| PLA | ~0.7–0.8 % |
| Low-hygroscopic (e.g. Koltron) | ~0.1 % |

Drying reverses this by heating the filament so diffusion runs the other direction — moisture migrates outward. Heat accelerates the diffusion coefficient, which is why a dedicated dryer at the right temperature outperforms a sealed bag with desiccant by orders of magnitude when the filament is already wet.

## About This Site

The content here is grounded in peer-reviewed research, manufacturer technical documentation, and community testing. Key sources:

- **PMC10304609** — *Polymers*, 2023: moisture sorption capacity and mechanical property changes across 13 FFF filament types
- **PMC11442157** — *PubMed Central*, 2024: moisture effects on PLA 4043D tensile strength and melt flow index
- **Prusa Research Knowledge Base** — manufacturer-validated drying temperatures and times
- **3DXTech** — engineering-grade filament manufacturer documentation, including the Nylon over-drying warning
