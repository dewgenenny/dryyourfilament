---
title: Storage & Prevention
layout: base.njk
date: 2020-01-04
description: How to store 3D printing filament after drying — desiccant types, storage containers, in-use dry boxes, humidity targets, and a maintenance schedule.
---

# Storage & Prevention

Drying filament is only half the job. If you return a freshly dried spool to an open shelf, it starts re-absorbing moisture immediately. Proper storage keeps your filament ready to print without re-drying every time.

<div class="callout callout-info">
<span class="callout-title">Storage vs. drying</span>
Storage with desiccant <strong>prevents</strong> moisture absorption — it does not reverse it. If your filament is already wet, dry it with heat first (see <a href="/guides/methods/">Drying Methods</a>), then store it. Sealed storage with desiccant will not rescue wet filament on its own at a practical rate.
</div>

## How Quickly Does Filament Re-Absorb Moisture?

Re-absorption speed depends on the material and ambient humidity. A rough guide:

| Material | Time to noticeable re-absorption (50% RH, ~20 °C) |
|---|---|
| Nylon (PA6) | A few hours to overnight — very fast |
| PVA / BVOH | Hours — can become problematic within a single session |
| Nylon (PA12) | Several hours to a day |
| PC | 1–2 days |
| PETG | 1–3 days (visible effect within a day or two) |
| ABS / ASA | Several days |
| PLA | Days to weeks for noticeable print quality impact |

The key implication: for Nylon and PVA, sealed storage is not optional — it's essential. For PLA, a loose storage habit will cost you in print quality over weeks or months.

---

## Desiccants

Desiccants absorb moisture from the air inside a sealed container. No desiccant lasts forever; all eventually become saturated and need to be recharged or replaced.

### Silica Gel

The most common desiccant for filament storage. Available in loose granule form, sachets, or large packs.

- Absorbs approximately 30–40 % of its own weight in water at typical conditions
- Rechargeable: spread on a baking tray and bake at 120 °C for 2–3 hours until dry (watch for colour change if using indicating type)
- Readily available and inexpensive

**Colour-indicating silica gel:** Granules contain a dye that changes colour when saturated.
- Classic blue (cobalt chloride) → pink when saturated. *Note: cobalt chloride is being phased out in many countries due to health concerns; many modern products use alternatives.*
- Orange → green when saturated (cobalt-free, more common now)

### Molecular Sieve (3A or 4A)

More aggressive than silica gel — achieves lower residual humidity inside a container.

- Can reduce humidity to below 5 % RH (silica gel typically maintains 15–25 % in a reasonably sealed container)
- Better choice for Nylon, PVA, and other very hygroscopic materials
- Rechargeable at higher temperatures (200–300 °C) than silica gel
- More expensive than silica gel

**Recommendation:** Use molecular sieve for Nylon and PVA storage; silica gel is sufficient for PLA, PETG, and ABS.

### Clay Desiccant

Cheap, disposable, and less effective. Fine for short-term protection but not recommended for sensitive materials or long-term storage.

---

## Storage Containers

### Sealed Storage Boxes

The workhorse of filament storage. An airtight clip-seal box with enough desiccant is effective for most materials.

- **Good options:** IKEA 365+ (various sizes), Sterilite clip-top boxes, Really Useful Boxes, Sistema containers
- Holds 1–3 spools depending on size
- Easy to open and reseal
- Check the seal quality — not all "airtight" boxes are truly airtight; add a thin silicone bead around the lid if necessary
- Add a small hygrometer inside to monitor humidity (inexpensive digital versions cost £3–8)

### Vacuum Storage Bags

Excellent for long-term storage or materials you won't use for weeks or months.

- Removes most of the air along with ambient moisture
- Significantly slows re-absorption even with a marginal bag seal
- Works well combined with a small desiccant pack inside the bag
- Reusable with a hand pump or vacuum cleaner

### Zip-Lock / Resealable Bags

Adequate short-term protection (overnight, a few days) but not truly airtight. Better than leaving a spool open on the shelf, but not suitable for Nylon, PVA, or long-term storage of any material.

---

## Humidity Monitoring

Knowing the actual humidity inside your storage containers tells you whether your desiccant is working and when to recharge it.

**Target:** < 15 % RH inside sealed storage. For Nylon and PVA, target < 10 % RH.

**Hygrometers:** Small digital hygrometer/thermometers (often sold as "mini hygrometer" or "cigar humidor hygrometer") are accurate to ±3–5 % RH and cost £3–8. Place one inside each storage container.

- When the reading creeps above 20 %, recharge or replace the desiccant
- Readings above 30 % mean your container seal has failed or the desiccant is exhausted

---

## Print-While-Dry: In-Use Dry Boxes

Even with proper sealed storage, removing a spool and mounting it on an open spool holder exposes it to ambient air during the print. For sensitive materials and multi-hour prints, a dry box or in-dryer printing setup solves this.

### Option 1: Print Directly from a Filament Dryer

Several dedicated filament dryers are designed for this:
- The spool stays inside the dryer throughout the print
- A small filament exit port allows the filament to feed directly to the extruder
- The dryer keeps the spool at the target temperature, actively preventing re-absorption
- Good models for this: EIBOS Cyclopes (rotates the spool for even drying while printing), Sunlu S2, most other dryers with a filament outlet

### Option 2: DIY Dry Box

A sealed container with a feedthrough for the filament path.

**What you need:**
- An airtight container large enough for your spool (standard spools are 200 mm diameter × 70 mm wide)
- Desiccant inside
- A small hole with a PTFE tube pressed through it — the filament threads through the tube and into the Bowden or directly to the extruder
- Optional: small hygrometer inside to monitor conditions

**Tips:**
- The hole should be small enough to press-fit the PTFE tube snugly — this prevents air exchange
- Route the PTFE tube so there is minimal friction on the filament
- Check desiccant regularly during long print sessions

### Option 3: Commercial Dry Boxes

Products like the Polymaker PolyBox, eSUN eBOX, and similar are purpose-built dry boxes with filament path outlets, built-in hygrometers, and sometimes heating elements. They sit between your filament storage and the printer and maintain a low-humidity environment around the spool during printing.

---

## Maintenance Schedule

Desiccant management is the key maintenance task. A suggested schedule:

| Task | Frequency |
|---|---|
| Check hygrometer readings | Every 1–2 weeks |
| Recharge silica gel (< 5 % weight gain or colour change) | Monthly in humid climates; every 2–3 months in dry climates |
| Recharge molecular sieve | Every 3–6 months |
| Inspect spool condition (check for brittleness in PLA) | Each time you open storage |
| Vacuum-seal long-term stored spools | Before any spool expected to sit unused for > 1 month |

<div class="callout callout-success">
<span class="callout-title">Weigh your desiccant packs</span>
The most reliable way to know when silica gel needs recharging is to weigh it. Write the dry weight on the bag with a marker when you first recharge it. When the weight has increased by more than 20–30 %, it is time to recharge.
</div>

---

## Storage for Specific Materials

### Nylon and PVA — strict protocol required

- Seal immediately after drying, before the spool has time to cool in open air
- Use molecular sieve desiccant if available
- Store in a vacuum bag or genuinely airtight container
- For PVA, consider a dedicated sealed container that is only opened immediately before printing

### PLA — practical storage

- Sealed storage with silica gel is more than adequate
- Old PLA that has become brittle on the spool has likely undergone hydrolytic degradation (polymer chain scission from moisture over time) — drying will help with print quality but cannot reverse the brittleness entirely

### PETG, ABS, ASA — standard storage

- Sealed storage with silica gel
- Reasonable tolerance for being left open for a typical printing session (a few hours)
- Sensitive enough that overnight or multi-day exposure is worth avoiding

---

## What to Do With Old, Questionable Filament

If you find a spool that has been left open for weeks or months:

1. **Dry it first** at the appropriate temperature for the material
2. **Test print a small object** and evaluate surface quality and any sounds during extrusion
3. **Check for brittleness** by bending a short length — PLA that has been wet for a long time may snap rather than bend even after drying, indicating hydrolytic degradation has occurred
4. **If quality is acceptable** after drying, seal it with fresh desiccant and note the date it was dried
5. **If quality remains poor** after a full drying cycle, the polymer may be permanently degraded — at that point, reserve it for non-critical prints or discard
