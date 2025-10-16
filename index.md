---
title: Ultimate Guide to Drying Your 3D Printing Filament
layout: base.njk
tags: [3dprinting, filament, drying, guide]
---

## Introduction

Most FDM/FFF filaments are **hygroscopic** – they absorb moisture from the surrounding air.  When these water molecules are heated during extrusion they turn into steam, creating bubbles and voids inside the melted polymer.  This foaming causes poor surface quality, inconsistent extrusion, weak layer bonding and ultimately weaker parts【503682730116082†L36-L58】【222158135422733†L154-L221】.  Moisture can also catalyse **hydrolysis**, a chemical reaction that breaks polymer chains, further degrading mechanical properties【939033045417979†L237-L244】.  Even newly opened spools can contain significant moisture (e.g. > 0.75 % for many neat nylons【503682730116082†L93-L99】) and hygroscopic materials like nylon can absorb up to **7 % of their weight in water**【416375053914140†L180-L187】.

Drying your filament before printing is one of the simplest ways to improve print quality and ensure parts meet their design strength.  This guide gathers the latest research and manufacturer recommendations to explain why drying matters, which materials are most sensitive, how to dry filament correctly and how to store it to keep it dry.

## Effects of Wet Filament on Print Quality

When filament absorbs moisture the trapped water changes the way the polymer melts and flows.  Common problems include:

1. **Material degradation:** Water causes hydrolysis and oxidation of polymer chains, reducing molecular weight and tensile strength【939033045417979†L237-L244】.  Studies on PLA blends have shown up to a **20 % drop in tensile strength** after moisture absorption【939033045417979†L170-L190】 and ABS composites stored at high humidity lose 10–35 % of their strength【314738915805966†L64-L86】.
2. **Poor surface finish:** Moisture turns to steam inside the nozzle, creating bubbles that leave a rough, pitted surface on prints【503682730116082†L36-L58】.
3. **Extrusion issues:** Hissing or popping sounds during printing are caused by steam escaping the melt.  These bubbles lead to inconsistent extrusion and dimensional inaccuracy【503682730116082†L36-L58】.
4. **Reduced layer adhesion:** Wet filament foams and cannot be compressed properly, leading to weak inter‑layer bonding and warping【222158135422733†L154-L221】.
5. **Stringing and oozing:** Steam increases pressure in the hotend, causing filament to ooze and leave fine strings between travel moves【478432229118986†L100-L111】.

In addition to visible defects, moisture compromises the mechanical performance of printed parts.  For example, drying continuous carbon‑fibre–reinforced nylon at 70 °C for 2 h removed 0.56 % moisture and increased tensile strength by **15 %** and flexural strength by **11.5 %**【788197178887097†L70-L82】.  Keeping filament dry is therefore critical for both aesthetics and structural integrity.

## Moisture Sensitivity by Material

Different polymers absorb water at different rates.  Highly hygroscopic materials require careful storage and regular drying, while more hydrophobic polymers are less affected.  Below is a qualitative ranking from very sensitive to less sensitive:

* **Nylon (PA, Polyamide):** Extremely hygroscopic; can absorb over 7 % water by weight【416375053914140†L180-L187】.  Requires drying before each use and storage in a sealed container with desiccant.
* **PVA/BVOH (Polyvinyl alcohol and similar supports):** Highly hygroscopic; used as a water‑soluble support material and must be kept very dry【222158135422733†L259-L329】.
* **TPU/TPE (Flexible polyurethanes):** Absorbs moisture quickly, leading to bubbles and inconsistent extrusion【533167670938298†L337-L394】.
* **PETG (Polyethylene terephthalate glycol‑modified):** Moderately hygroscopic; prone to stringing if moist【478432229118986†L100-L111】.
* **ABS/ASA/PC:** Less hygroscopic than nylon or PVA but still benefit from drying to improve surface finish and strength【416375053914140†L180-L187】.
* **PLA (Polylactic acid):** Least hygroscopic of common FDM filaments, but prolonged exposure to humidity or poor storage can still degrade properties over time【533167670938298†L337-L394】.

## Recommended Drying Temperatures and Times

While exact conditions depend on the specific brand and formulation, manufacturers and research papers provide guidelines for drying temperatures and durations.  The table below summarizes typical recommendations.  Always verify the upper temperature limit for your spool to avoid deforming the plastic core.  Use a dedicated filament dryer or a convection oven with accurate temperature control; food dehydrators and dehydrating chambers also work well.  Avoid microwaves, which heat unevenly and can damage filament【416375053914140†L204-L353】.

| Material | Typical drying temperature (°C) | Typical time (h) | Notes |
|---|---|---|---|
| **PLA** | 45–55 °C | 4–6 h | Low moisture uptake but drying improves brittleness and surface finish【506882730116082†L58-L110】【432433286134769†L214-L295】. |
| **PETG** | 55–65 °C | 4–6 h | Prevents stringing and bubble formation【222158135422733†L259-L329】【478432229118986†L100-L111】. |
| **ABS/ASA/PC** | 70–80 °C | 4–6 h | Higher temperatures needed for engineering plastics; improves layer adhesion【432433286134769†L214-L295】. |
| **TPU/TPE** | 40–55 °C | 5–12 h | Sensitive to heat; dry at lower temperatures for longer periods【533167670938298†L400-L420】【222158135422733†L259-L329】. |
| **PVA/BVOH** | 50–60 °C | 6–12 h | Very hygroscopic; requires careful storage and drying before use【222158135422733†L259-L329】. |
| **Nylon (PA)** | 70–90 °C | 8–12 h (up to 24 h for PA6) | Extremely hygroscopic; some grades need 24 h at 85 °C【639138930758132†L145-L163】. |
| **Ultem/PEEK/PEKK** | 120–150 °C | 3–6 h | High‑temperature thermoplastics require elevated drying temperatures; follow manufacturer guidelines【243476616907406†L60-L80】【639138930758132†L145-L163】. |

These values are general starting points.  For filled or fibre‑reinforced filaments (e.g. carbon‑fibre nylon), moisture thresholds may be lower; some carbon‑fibre nylons show defects when moisture content exceeds **0.34 %**【503682730116082†L70-L76】.  Always monitor your dryer and adjust conditions as needed.

## Methods for Drying Filament

1. **Dedicated filament dryer:** Commercial dryers circulate hot air around the spool and maintain a stable temperature.  They are designed for 3D printing and often allow continuous drying while printing.
2. **Convection oven or food dehydrator:** A household oven can be used if it can hold a stable low temperature.  Place the spool on a rotating stand or oven‑safe support and monitor with an independent thermometer.  Avoid old ovens with poor temperature control to prevent melting the spool【243476616907406†L84-L143】.
3. **Vacuum oven or drying chamber:** Reducing pressure lowers the boiling point of water and speeds up drying.  Vacuum dryers are often used for high‑temperature plastics like PEEK and Ultem【243476616907406†L60-L80】.
4. **DIY methods:** Some makers use modified food dehydrators or build heated dry boxes with thermostats.  Always ensure good air circulation and temperature accuracy.

Regardless of the method, allow the filament to cool in a sealed container before exposing it to ambient air to prevent reabsorption.  Once dried, print directly from the dryer or store the spool in a sealed dry box with desiccant.

## Research Evidence: Benefits of Dry Filament

Scientific studies confirm that controlling moisture has a measurable impact on part performance:

* **PLA and PLA/PBS blends:** Moisture absorbed during storage reduced tensile strength by **20 %** and increased melt‑flow index by **50 %**; drying before printing helps maintain mechanical integrity【939033045417979†L170-L190】.
* **ABS composites:** Tensile strength of neat ABS dropped from 40.5 MPa at 10 % relative humidity to 36.7 MPa at 90 % humidity; ABS filled with 10 vol % boron nitride fell from 34.1 MPa to 22.3 MPa【314738915805966†L64-L86】.
* **Carbon‑fibre‑reinforced nylon:** Drying removed 0.56 % moisture and improved tensile strength by **15 %** and flexural strength by **11.5 %**【788197178887097†L70-L82】.
* **Nylon filament:** Samples conditioned at high humidity showed drastic reductions in ductility and tensile strength; water acts as a plasticiser and weakens layer bonding【847497578429961†L278-L360】.

The consistent theme across studies is that moisture degrades mechanical performance while drying restores or improves strength and dimensional stability.

## Storage Tips

Drying is only half of the battle—keeping filament dry during storage and printing is just as important.  Follow these best practices:

* **Airtight containers:** Store spools in sealed boxes or vacuum bags with desiccant packs.  Silica gel and molecular sieve desiccants absorb moisture; recharge them in the oven when they change colour.
* **Dry boxes with heaters:** For hygroscopic materials, consider a dry box that continuously heats and circulates air so you can print directly from the enclosure.
* **Monitor humidity:** Use inexpensive hygrometers inside your storage containers to ensure relative humidity stays below ~20 %.  Replace or recharge desiccant when humidity rises.
* **Avoid moisture sources:** Keep filament away from bathrooms, kitchens, and open windows.  Even brief exposure to humid air can increase moisture content quickly【503682730116082†L104-L117】.

By combining proper drying, airtight storage and good printing habits, you can achieve repeatable, high‑quality results from all of your FDM filaments.

## Conclusion

Moisture is the hidden enemy of FDM printing.  It causes foaming, weakens material and spoils surface finish.  Fortunately, drying filament is straightforward: identify the sensitivity of your material, apply the recommended temperature and time, and store dried spools in a sealed container with desiccant.  Evidence from research and manufacturers shows that dry filament produces stronger, more accurate and better‑looking parts【788197178887097†L70-L82】.  Make drying a regular part of your printing workflow and enjoy consistent, professional‑quality prints.

## Sources

This guide synthesises information from manufacturer recommendations, technical blogs and academic research.  Key references include articles by Prusa Research【506882730116082†L58-L110】, BCN3D【222158135422733†L259-L329】, FormFutura【432433286134769†L214-L295】, Drywise【503682730116082†L36-L58】, and 3DGence【639138930758132†L145-L163】, as well as recent studies on the effect of moisture on PLA and ABS【939033045417979†L170-L190】【314738915805966†L64-L86】.
