---
title: Diagnosing Wet Filament
layout: base.njk
date: 2020-01-01
description: How to tell if your 3D printing filament has absorbed moisture — symptoms during printing, signs on finished parts, and a quick diagnostic test.
---

# Diagnosing Wet Filament

Wet filament produces a consistent set of symptoms. Some show up during printing, others only on the finished part. This page walks through all of them, from the most reliable indicators to the subtler signs that are easy to misattribute to other causes.

## The Quickest Test: Listen

The single fastest way to check is to extrude a short length of filament (50–100 mm) at normal printing temperature and listen carefully. Dry filament extrudes silently or with a faint hiss of hot air. Wet filament **pops, crackles, or hisses** distinctly as trapped moisture turns to steam inside the hotend.

**You can do this from the printer's Move Filament or Load Filament menu — no need to start a print.**

If you hear popping: the filament has absorbed meaningful moisture. The louder and more frequent the sounds, the wetter it is.

<div class="callout callout-info">
<span class="callout-title">Why it pops</span>
Water dispersed through the polymer reaches ~100 °C (or lower under pressure) in the melt zone, vaporises suddenly, and the steam bubble ruptures the molten bead. Each pop is a micro-explosion in the nozzle.
</div>

## Symptoms During Printing

### Sound-based signs

| Sound | Likely cause |
|---|---|
| Intermittent popping / crackling | Moisture in the filament — most reliable indicator |
| Continuous faint hissing | Moderate moisture or very humid filament |
| No sound changes | Filament is probably dry |

### Visual signs at the nozzle

Watch the filament as it extrudes:

- **Bubbling or foaming** in the extruded bead — steam bubbles are visible as it exits the nozzle
- **Rough, uneven surface** on the bead rather than a smooth glossy strand
- **Inconsistent width** — the bead swells and narrows as bubbles form and burst
- **Stringing and oozing on travel moves** more than expected — steam pressure inside the hotend pushes molten material out when the extruder is idle

## Symptoms on Finished Prints

### Surface quality

- **Rough, matt, or pitted surface texture** on what should be smooth walls
- **Visible bubbles or craters** on flat top surfaces
- **Foamy appearance** — parts look like the surface was sandblasted
- **Unexplained stringing** between features even after tuning retraction

### Structural signs

- **Visible layer lines that are not bonding well** — press firmly on the side of the print; wet-filament parts delaminate more easily
- **Brittleness** — wet PLA prints in particular can snap rather than bend under stress
- **White speckling or hazing** on clear PETG or PC — water vapour trapped in the material

### Dimensional accuracy

Wet filament can produce parts that are slightly **over-dimensioned** (steam expands the bead) or have irregular dimensions if the extrusion varies across a layer.

## Quick Diagnostic Steps

1. **Extrude 100 mm at print temperature** — listen for popping (most reliable)
2. **Inspect the extruded strand** — smooth and consistent = dry; foamy or bubbled = wet
3. **Check a recent print** — rough top surface or unexpected stringing = likely wet
4. **Feel the spool** — PLA that has been absorbing moisture for months can become **brittle** and snap when bent, even before printing

<div class="callout callout-warning">
<span class="callout-title">Don't confuse wet filament with a temperature problem</span>
Stringing can be caused by too-high print temperature, too-slow travel, or insufficient retraction. Before blaming moisture, verify your print temperature is within the recommended range. If you've already eliminated temperature and retraction as causes, moisture is the next suspect.
</div>

## Material-Specific Patterns

Different materials express moisture problems in different ways:

| Material | Most obvious symptom |
|---|---|
| **PLA** | Increased stringing, subtle surface roughness; long-stored PLA becomes brittle |
| **PETG** | Heavy stringing, bubbling, poor surface finish — very obvious when wet |
| **Nylon** | Loud popping, extremely rough surface, near-total failure to bridge or produce fine detail |
| **ABS / ASA** | Rough surface, increased warping tendency, poor layer adhesion |
| **TPU** | Foaming, rough surface, increased ooze and stringing |
| **PVA** | Jams, failed dissolution, brown discolouration — PVA is so hygroscopic it can turn gummy |
| **PC** | Crazing, bubbles, loss of clarity in transparent grades |

## How Quickly Does Filament Absorb Moisture?

This depends on the material and ambient humidity. Nylon is the extreme case — at high humidity it can absorb a significant fraction of its capacity within hours. PLA is slower, but over days to weeks in an unsealed environment the effects accumulate. The key practical rule:

- **Leave any open spool overnight in humid conditions** and you may already have a problem with Nylon or PVA
- **PLA left open for a few days** will typically be fine; left for weeks or months at typical indoor humidity, degradation accumulates
- **PETG and ABS left open for a typical printing session** (a few hours) are usually fine; overnight or longer becomes a concern in humid climates

## After Diagnosis

If you've confirmed the filament is wet, see the [Drying Methods](/guides/methods/) guide for how to dry it effectively, and [Storage](/guides/storage/) for how to prevent re-absorption.
