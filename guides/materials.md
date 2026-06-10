---
title: Per-Material Drying Guide
layout: base.njk
date: 2020-01-02
description: Moisture sensitivity, drying temperatures, times, and material-specific tips for PLA, PETG, ABS, ASA, Nylon, TPU, PC, PVA, PEEK, and carbon-fibre composites.
---

# Per-Material Drying Guide

Moisture sensitivity varies enormously between filament types. A material's hygroscopicity (ability to absorb water) is determined by its polymer chemistry, and that drives both how urgently it needs drying and what can go wrong when it's printed wet.

<div class="callout callout-info">
<span class="callout-title">Always check your manufacturer's datasheet</span>
The temperatures below are well-supported consensus ranges. Different brands and grades vary — Prusament, Polymaker, eSUN, and others publish specific values for their formulations. When in doubt, use the lower end of the range to protect spool integrity.
</div>

---

<div class="material-header">
<h2>PLA (Polylactic Acid)</h2>
<span class="badge-sensitivity badge-low">Low – Moderate</span>
</div>

PLA is the most common 3D printing filament and is often described as "not very hygroscopic" — but this understates the problem for anything that needs to be structurally reliable.

**What the research says:** A 2024 peer-reviewed study (PMC11442157) found that moisture exposure caused a **~20 % reduction in tensile strength** and a **~50 % increase in melt flow index** in PLA 4043D. The higher melt flow index means the polymer flows more freely than expected, causing stringing, blobs, and dimensional inaccuracy. After three months at room temperature and ambient humidity, tensile strength dropped **24–36 %** across PLA grades studied.

**When wet, PLA shows:**
- Increased stringing — the most common complaint
- Slightly rough or matt surface where it should be smooth
- Brittle filament on the spool (long-term exposure causes hydrolysis — polymer chain scission — which makes the filament snap rather than bend)
- Subtle surface bubbling on slow, thick sections

**Drying parameters:**

| Parameter | Value |
|---|---|
| Temperature | 45–50 °C |
| Time | 4–6 hours |
| Max safe temp | ~55 °C (spool integrity risk above this) |

<div class="callout callout-danger">
<span class="callout-title">PLA and kitchen ovens: a genuine risk</span>
PLA's glass transition temperature is approximately 60 °C. Kitchen ovens typically cycle their heating element on and off, creating temperature swings of 10–25 °C above the set point. If you set a household oven to 50 °C, it may briefly spike to 65–75 °C — hot enough to soften and deform the filament or warp the spool. Many home ovens can't even be set below 80 °C. Use a dedicated dryer or food dehydrator with a verified temperature for PLA.
</div>

---

<div class="material-header">
<h2>PETG (Polyethylene Terephthalate Glycol)</h2>
<span class="badge-sensitivity badge-moderate">Moderate</span>
</div>

PETG is more hygroscopic than PLA and the effects are more visually obvious — wet PETG is one of the easier materials to diagnose.

**When wet, PETG shows:**
- Heavy stringing — often the first symptom noticed
- Visible bubbles and rough texture on top surfaces
- Poor surface finish on outer walls
- Blobs and zits on the perimeter
- Reduced layer adhesion on bridges and overhangs

**Drying parameters:**

| Parameter | Value |
|---|---|
| Temperature | 55–65 °C |
| Time | 4–6 hours |

PETG re-absorbs moisture relatively quickly if left open after drying. If printing a long job, consider a dry box or printing directly from a dryer.

---

<div class="material-header">
<h2>ABS / ASA</h2>
<span class="badge-sensitivity badge-moderate">Moderate</span>
</div>

ABS and ASA have similar moisture sensitivity. Both are used for engineering parts where strength matters, which makes proper drying more important than it might seem for a "moderate" rating.

**When wet, ABS/ASA shows:**
- Rough, irregular surface finish
- Increased warping tendency (moisture affects the thermal behaviour of the melt)
- Poor layer adhesion — parts delaminate under stress
- Faint popping sounds during extrusion
- Subtle colour change in some grades (slightly lighter or greyer)

**Drying parameters:**

| Parameter | Value |
|---|---|
| Temperature | 70–80 °C |
| Time | 4–6 hours |

The higher drying temperature gives more headroom with oven use, but still verify with a separate thermometer if using a household oven.

---

<div class="material-header">
<h2>Nylon (PA6 / PA12 / PA11)</h2>
<span class="badge-sensitivity badge-veryhigh">Very High</span>
</div>

Nylon is the most hygroscopic common FFF filament by a significant margin. Understanding its moisture behaviour is essential for anyone using it for functional parts.

**What the research says:** A 2023 peer-reviewed study (PMC10304609) measured equilibrium moisture content across 13 filament types. Nylon reached **8.127 % by weight** at 97 % RH — compared to ~0.7 % for PLA and ~0.1 % for low-hygroscopic materials. The mechanical impact was proportionate: **83 % reduction in elastic modulus** and **42 % reduction in tensile strength** at saturation — so severe the material was excluded from comparative charts in the study. A nominally strong engineering material becomes dramatically weaker when wet.

**When wet, Nylon shows:**
- Loud, frequent popping and crackling — usually unmistakable
- Extremely rough, foamy surface texture
- Severe stringing
- Near-complete failure on bridges and overhangs
- Parts that are obviously weaker — you can often feel this when handling them

**Drying parameters:**

| Parameter | Value |
|---|---|
| Temperature | ~90 °C |
| Time | 4–6 hours (up to 8 h for PA6) |
| PA11 CF (Prusament) | 90 °C / 6 h |

<div class="callout callout-warning">
<span class="callout-title">The over-drying paradox: Nylon needs a small amount of moisture</span>
Water acts as a plasticiser in polyamide polymers — it reduces stiffness while increasing toughness and impact resistance. Fully desiccated Nylon becomes brittle and is more difficult to print. 3DXTech (an engineering-grade filament manufacturer) states explicitly: "nylon actually likes a little bit of moisture in it or it will be brittle and more difficult to process."
<br><br>
<strong>Practical guidance:</strong> dry until the popping stops and the surface is smooth, then use promptly or store with a small amount of desiccant (not in a hard vacuum). Avoid desiccating Nylon to zero humidity for extended periods.
</div>

**PA grade differences:**
- **PA12** is less hygroscopic than PA6 and is often preferred for FFF printing
- **PA6** absorbs moisture fastest and needs the longest drying times
- **PA11** (bio-based) behaves similarly to PA12

---

<div class="material-header">
<h2>TPU / TPE (Flexible Filaments)</h2>
<span class="badge-sensitivity badge-moderate">Moderate</span>
</div>

Flexible filaments absorb moderate amounts of moisture, and their softness at elevated temperatures means you must use a lower drying temperature than you might expect.

**When wet, TPU shows:**
- Foaming and rough surface texture
- Increased stringing and ooze
- Reduced elasticity and bounce in finished parts
- Bubbles visible on the surface

**Drying parameters:**

| Parameter | Value |
|---|---|
| Temperature | 40–55 °C |
| Time | 5–12 hours |

The low temperature ceiling is set by the material's low softening point. Higher temperatures risk permanent deformation of the spool or even the filament strands fusing together. If using a food dehydrator, verify the actual temperature rather than trusting the dial.

---

<div class="material-header">
<h2>Polycarbonate (PC)</h2>
<span class="badge-sensitivity badge-high">High</span>
</div>

Polycarbonate is an engineering material chosen specifically for its high-impact strength and optical clarity. Moisture undermines both properties.

**When wet, PC shows:**
- Visible bubbles and clouding in transparent grades
- **Crazing** — fine surface cracking that appears during or after printing
- Poor layer adhesion and brittle parts despite PC's normally high toughness
- Significant stringing

**Drying parameters:**

| Parameter | Value |
|---|---|
| Temperature | 80–85 °C |
| Time | 4–6 hours |
| PC Blend (Prusament) | 85 °C / 5 h |

Pure PC is rarely printed on hobby machines; most consumer "PC" filaments are blends (PC+ABS, PC+PBT, etc.) with slightly lower drying temperatures than pure PC. Check the manufacturer's datasheet.

---

<div class="material-header">
<h2>PVA / BVOH (Soluble Support Filaments)</h2>
<span class="badge-sensitivity badge-veryhigh">Very High</span>
</div>

PVA and its newer counterpart BVOH are soluble support materials — and because they dissolve in water, they absorb it voraciously. These are among the most demanding materials to handle correctly.

**Dry before every single print.** Even a few hours of open-air exposure in a moderately humid room can render PVA unprintable.

**When wet, PVA shows:**
- Jams — moisture causes PVA to swell and soften in the Bowden tube or extruder
- Brown discolouration and a burnt smell
- Failed support dissolution (paradoxically — wet PVA that jams partway through leaves over-extruded, degraded supports that dissolve poorly)
- Very obvious popping and crackling

**Drying parameters:**

| Parameter | Value |
|---|---|
| Temperature | 50–60 °C |
| Time | 6–12 hours |

After drying, store with desiccant and ideally print from a dry box. PVA stored open on a spool will re-absorb meaningful moisture within hours in typical indoor conditions. Many users dedicate a separate sealed container or in-dryer system just for PVA.

---

<div class="material-header">
<h2>PEEK / PEKK / PEI (High-Performance Polymers)</h2>
<span class="badge-sensitivity badge-high">High</span>
</div>

High-performance thermoplastics like PEEK, PEKK, and PEI (Ultem) require temperatures well above what consumer filament dryers can reach. They are also expensive enough that proper drying pays for itself quickly.

**Drying parameters (indicative — always check manufacturer datasheet):**

| Material | Temperature | Time |
|---|---|---|
| PEEK | 120–150 °C | 3–6 h |
| PEKK | 120–150 °C | 3–6 h |
| PEI / Ultem | 120–150 °C | 4–6 h |

These temperatures are beyond the capability of most consumer filament dryers. Options include industrial drying ovens, laboratory ovens, or the highest-end dedicated filament dryers with verified high-temperature accuracy. If your equipment cannot reliably hold 120 °C, consult the material manufacturer for lower-temperature extended-time protocols.

---

<div class="material-header">
<h2>Carbon-Fibre & Fibre-Reinforced Composites</h2>
<span class="badge-sensitivity badge-high">Inherits base polymer</span>
</div>

CF, glass-fibre, Kevlar, and other reinforced filaments take their moisture sensitivity from the base polymer. PA-CF, PETG-CF, and PLA-CF absorb moisture primarily through the polymer matrix — the fibre fill does not meaningfully change the absorption kinetics.

**Why drying matters more for composites:** A 2023 study on continuous carbon-fibre-reinforced PA found that drying the filament before printing increased tensile strength by approximately **15 %** and flexural strength by **11.5 %**. The effect is larger than for unfilled PA because moisture-induced voids in the matrix reduce fibre-to-matrix load transfer.

**Drying parameters:**

| Material | Temperature | Time |
|---|---|---|
| PA11-CF / PA12-CF | 90 °C | 6 h |
| PETG-CF | 55–65 °C | 4–6 h |
| PLA-CF | 45–50 °C | 4–6 h |

Also note: many CF composites are abrasive and sold sealed with desiccant at high cost. Opening the bag and leaving the spool on the printer overnight before a multi-hour job is a straightforward way to waste the material investment.
