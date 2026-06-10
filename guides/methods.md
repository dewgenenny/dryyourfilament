---
title: Drying Methods
layout: base.njk
date: 2020-01-03
description: Compare dedicated filament dryers, food dehydrators, kitchen ovens, vacuum chambers, and DIY dry boxes. Includes a method comparison table and practical setup tips.
---

# Drying Methods

There are several ways to dry filament, ranging from purpose-built devices to kitchen appliances to DIY setups. They vary significantly in temperature accuracy, convenience, cost, and risk — especially for temperature-sensitive materials like PLA.

<div class="callout callout-info">
<span class="callout-title">The one non-negotiable: heat</span>
Active heat is required to drive moisture out of filament. Desiccant, vacuum, or sealed storage can prevent re-absorption but cannot rescue already-wet filament at a practical rate. Whatever method you choose, reaching and sustaining the target temperature is what determines whether drying actually works.
</div>

## Dedicated Filament Dryers

**Purpose-built devices with a heating element, fan, and temperature control — the simplest and most reliable option for most users.**

These are compact heated enclosures designed specifically for filament spools. Most include a hole or slot for the filament path, allowing you to print directly from the dryer without removing the spool.

**How they work:** An electric heating element (often PTC, which self-limits to a target temperature) heats air that circulates around the spool. Better models include a fan for more even heat distribution and a humidity readout.

**Pros:**
- Designed for the task — no improvisation needed
- Generally good temperature accuracy if properly calibrated
- Most allow print-while-dry operation (filament feeds directly out)
- Available from ~£25 / $30 upwards
- Portable, small footprint

**Cons:**
- Cheaper models have poorly calibrated temperature dials — the displayed temperature may not match actual temperature
- Many consumer models max out at 70–80 °C, which is not enough for Nylon (90 °C) or high-performance materials
- Only holds 1–2 spools at once in most cases
- PTC heating elements can be slow to reach temperature

**What to look for when buying:**
- Verified maximum temperature — check that it actually reaches 90 °C if you print Nylon
- Fan circulation — passive convection alone is uneven
- Filament path outlet for print-while-drying
- A display showing actual temperature (not just a dial)
- Access for a separate probe thermometer to verify accuracy

**Popular models (as of 2025):** Sunlu FilaDryer S1 / S2 / S4, EIBOS Cyclopes (spins the spool for even drying), Polymaker PolyDryer, Bambu Filament Dryer.

<div class="callout callout-warning">
<span class="callout-title">Calibrate your dryer before trusting it</span>
A cheap thermometer probe placed inside the dryer will often reveal that a dial set to "75 °C" is actually running at 60 °C — or 85 °C. Verify once when you first use the device. This is especially important for Nylon and PC.
</div>

---

## Food Dehydrators

**A popular and cost-effective alternative — often cheaper than dedicated dryers and capable of higher temperatures.**

Food dehydrators work by circulating warm air through multiple trays. Most use a fan at the top or bottom and a heating element with a thermostat.

**Pros:**
- Often cheaper than dedicated filament dryers
- Wide temperature range — many reach 70–75 °C, some up to 80 °C
- Multiple trays = multiple spools simultaneously
- Good airflow for even drying
- Widely available (kitchen appliance retailers)

**Cons:**
- Spools need to fit — standard 200 mm diameter spools often need trays removed, which affects airflow
- No filament path outlet (you need to stop the dryer to remove the spool before printing)
- Temperature accuracy varies by model — always verify
- A round spool in a square tray can create uneven heat distribution

**Setup tips:**
1. Remove the number of trays needed for spool clearance (usually 2–3 trays for a standard spool)
2. Verify temperature at the spool position with a separate thermometer — not just the dial reading
3. Leave the dehydrator in a well-ventilated area — some off-gassing occurs as moisture is driven out
4. Place the spool so the hole is accessible to thread the filament out after drying

**Good choice for:** All materials up to ~75 °C (PLA, PETG, ABS, TPU). Marginal for Nylon unless the dehydrator is rated and verified above 85 °C.

---

## Kitchen / Household Ovens

**Possible for higher-temperature materials, but risky for PLA and PLA-composites. Requires a separate thermometer.**

A conventional kitchen oven can work, but it is the least precise option and the most likely to cause spool deformation if used carelessly.

**Why kitchen ovens are risky for PLA:**

Kitchen ovens regulate temperature by cycling the heating element on and off. This creates temperature swings — typically 10–25 °C above the set point while the element is on. If you set the oven to 50 °C for PLA (glass transition ~60 °C), the actual temperature can briefly spike to 65–75 °C, softening and deforming the filament or warping the spool. Many domestic ovens cannot even be set below 80 °C, making them inappropriate for PLA regardless of technique.

**When ovens are more appropriate:**
- For ABS, ASA, PC, and Nylon (70–90 °C targets) the margins are larger and temperature spikes are less likely to cause damage
- A convection oven (fan-assisted) has more even temperature distribution and smaller swings than a conventional oven

**If using an oven:**
1. Place a separate oven thermometer at spool level — do not trust the oven's own display
2. Prop the door open slightly with a wooden spoon to allow moisture to escape and to help prevent overheating
3. Allow the oven to stabilise at temperature for at least 15 minutes before placing the spool
4. Let the spool cool inside the oven with the door closed to prevent sudden thermal shock
5. Do not use a microwave oven — uneven heating and metal spool cores are both hazards

---

## Convection / Toaster Ovens

**A middle ground — better temperature distribution than a conventional oven, and often able to be set lower.**

A countertop convection oven (fan-forced) maintains more even temperatures than a conventional oven and is typically more controllable at the lower end of the range. Many can be set to 50 °C with better reliability than a full-size kitchen oven.

Still verify with a separate thermometer. The same spool-propping and cool-down-in-oven advice from the kitchen oven section applies.

---

## Vacuum Chambers

**An emerging and still unresolved method — not yet validated for typical hobbyist use.**

The theory: reducing air pressure lowers the boiling point of water (to approximately 40 °C at 75 mbar, for example), enabling moisture to vaporise at lower temperatures. This could theoretically allow effective drying of temperature-sensitive materials at safe temperatures.

**What community testing shows (as of early 2026):** A Hackaday article from March 2026 tested a rotary vane pump achieving 10–20 mbar vacuum. Moisture was extracted from food samples under vacuum, but silica desiccant showed no measurable weight gain, suggesting that **cold vacuum alone does not effectively drive desiccant-assisted drying**. The authors concluded that heat remains necessary even with vacuum, and that the primary benefit of vacuum may be in combination with heat, not as a replacement for it.

**Current verdict:** Vacuum combined with heat is plausible and used industrially, but the combination equipment is expensive and the benefit over heat-only drying at the right temperature is not clearly established for filament. Until more rigorous testing is published, this remains an advanced/experimental approach.

---

## DIY Dry Box (Passive Storage During Printing)

**Not a drying method — a storage-and-prevention system. Keeps already-dry filament dry during a print.**

A dry box is a sealed container (typically a clip-seal storage box or repurposed airtight food container) with desiccant inside and a small hole for the filament path. It prevents moisture re-absorption during a long print where the spool would otherwise sit exposed on the printer.

**How to build one:**
1. Choose a container large enough for your spools — IKEA 365+ (4 L) or similar airtight boxes work well
2. Add silica gel or molecular sieve desiccant packs (enough to maintain <15 % RH inside)
3. Drill or melt a small hole for a PTFE tube to pass through — the filament feeds out through the tube
4. Optionally add a small hygrometer to monitor the internal humidity

**Dry boxes do not dry filament** — they maintain the condition of filament that was already dry when loaded. If the filament is wet, dry it first with heat, then transfer it to the dry box.

---

## Method Comparison

| Method | Temp accuracy | Max temp | Cost | Print-while-dry | Best for |
|---|---|---|---|---|---|
| Dedicated dryer | Good (verify first) | 70–90 °C | £25–100 | Yes (most models) | Most users |
| Food dehydrator | Moderate (verify) | 70–80 °C | £30–80 | No | Multi-spool, higher volume |
| Kitchen oven | Poor (cycling swings) | 80 °C+ | Free (existing) | No | ABS/ASA/Nylon only; avoid for PLA |
| Convection oven | Moderate | 50 °C+ | Free / £40+ | No | Better than conventional oven |
| Vacuum chamber | Experimental | Varies | £100–500+ | No | Advanced users; combine with heat |
| DIY dry box | N/A (ambient) | N/A | £5–20 | Yes | Prevention / in-use storage only |

## Drying Checklist

- [ ] Verify dryer temperature with a separate probe thermometer before trusting the display
- [ ] Use the temperature recommended for your specific filament — see the [Per-Material Guide](/guides/materials/)
- [ ] Ensure adequate time — most materials need at least 4–6 hours at temperature
- [ ] Allow the spool to cool in a sealed environment after drying to prevent immediate re-absorption
- [ ] Transfer to sealed storage with desiccant if not printing immediately — see [Storage](/guides/storage/)
