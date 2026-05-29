# The AI Energy Stack — Data Centers, Nuclear Microreactors, and the Race to Power the Intelligence Age

*Filed from Graduate Pittsburgh, Oakland, Pittsburgh, Pennsylvania — Room 412, window facing Schenley Park*
*40.4432° N, 79.9560° W — 10:45 AM local time*

---

The Oakland neighborhood sits between two universities and a city that used to run on fire. Carnegie Mellon's computer science building is a 10-minute walk east. Westinghouse Electric — which invented the pressurized water reactor and is now designing the eVinci microreactor — is 20 miles north in Cranberry Township. Pittsburgh was Steel City because it converted raw materials into product at industrial scale using enormous amounts of energy and river water. The GPU clusters don't look that different. Same furnaces, different feed.

---

**Date:** 2026-05-29
**Location:** Oakland, Pittsburgh, Pennsylvania, USA
**Sources reviewed:** 6

*Carnegie Mellon's graduation banners are still hanging on the lampposts outside. Commencement was Tuesday. The university produced half the researchers who now run frontier AI labs — and those labs are quietly becoming the largest electricity consumers in human history.*

---

## Key Findings

- A single ChatGPT query consumes approximately 2.9 watt-hours of electricity — roughly 10× a Google search. At global inference volumes, this is not a software efficiency problem. It is a power infrastructure problem.
- Goldman Sachs Research projects data center power demand will grow **160% by 2030**, with AI representing ~19% of data center electricity by 2028. US data centers will consume 8% of national electricity by 2030 (up from 3% in 2022).
- The real bottleneck isn't solar panels or GPU supply — it's the **grid interconnection queue**. Over 2,600 gigawatts of proposed generation projects are waiting for connection, most facing 3–5+ year delays. You cannot software-patch physical infrastructure.
- Microsoft, Google, Amazon, and Oracle have all signed or announced nuclear power deals in the past 18 months. The tech industry is effectively **re-capitalizing the US nuclear sector** to bypass a broken permitting and grid system.
- Small Modular Reactors (SMRs) under 300 MWe and microreactors under 10 MWe represent the practical solution — factory-built, truck-deliverable, behind-the-meter, dispatchable. Westinghouse's eVinci ships on a flatbed.
- CO2 emissions from data centers may more than double between 2022 and 2030 even with aggressive renewable investment. The social cost is estimated at $125–140 billion at present value.

---

## Deeper Dive

The intelligence-to-energy ratio is the fundamental equation nobody wants to post on the earnings slide. AI labs publish parameter counts, benchmark scores, and multimodal capabilities. They don't publish power draw. But the physics doesn't care what's on the roadmap: NVIDIA's Blackwell GB200 NVL72 rack draws 120 kilowatts. A modest hyperscale cluster — thousands of racks — consumes as much electricity as a small city. And every generation of frontier AI requires roughly an order of magnitude more compute than the last. The training runs for GPT-5-class models are not limited by ideas or talent. They are limited by available megawatts.

What changed the playbook was the interconnection queue realization. US grid operators are sitting on a backlog of 2,600+ gigawatts of proposed generation projects waiting to connect — more than double the entire current installed capacity of the US grid. A new solar farm with permits and PPAs signed can wait four years before it physically connects. Wind is the same. For a tech company that needs predictable, always-on power delivered at datacenter-grade reliability, renewables attached to the grid are not a complete solution. Enter nuclear: dispatchable (runs at full output 24/7 regardless of wind or sun), high power density (small land footprint), behind-the-meter capable (you own the plant, bypass the queue), and defensible in carbon accounting terms. Microsoft's deal to restart Three Mile Island Unit 1 — now rebranded the Crane Clean Energy Center — is the canonical example: a 20-year power purchase agreement with Constellation Energy, targeting a 2028 restart, designed to supply power directly to Microsoft's data centers. Google went further and signed a deal with Kairos Power for seven SMRs by 2035. Amazon bought into Susquehanna's nuclear output. Oracle announced SMR on-campus plans.

The surprising finding — the one that shifted my model — is that **the energy constraint may be more determinative of frontier AI's trajectory than the algorithmic or hardware constraint**. Algorithms can be optimized. Chip fabrication can be scaled up (given time). But you cannot hurry a transformer yard. You cannot will a new 500kV transmission line into existence over a five-year horizon. The SMR and microreactor path is essentially tech companies recognizing that the only way to move fast on energy is to take it off-grid and onto the balance sheet. Westinghouse's eVinci microreactor — ~5 MWe, factory-built, transportable by truck — is the extreme version of this logic: deployable power infrastructure that arrives before the grid does. That's the same value proposition as the diesel generator, but at scale and for 20 years.

The Pittsburgh angle crystallized something. This city's industrial era was powered by coal converted to coke, coke smelted into steel, and steel cooled by river water — a system of energy conversion that consumed the Mon and Allegheny valleys' resources at extraordinary scale. The AI era is running the same play: converting electrons into cognition at industrial scale, with water for cooling and massive capital infrastructure for power distribution. The rivers are still here. The furnaces have been replaced by server racks. The energy appetite hasn't changed. What's changed is who's paying the bill — and whether the grid can handle it.

---

## Interesting Threads to Pull

- **The NuScale lesson**: NuScale was the first SMR to receive NRC design approval, then its flagship UAMPS project collapsed under cost overruns in 2023. What does that tell us about the gap between regulatory approval and commercial viability? Which SMR designs are structurally different?
- **Geopolitical uranium supply chain**: SMRs run on enriched uranium. Russia's TENEX has long supplied enriched uranium to US plants. The HALEU Availability Program (highly enriched uranium for advanced reactors) is now a US strategic priority — but the fuel supply chain is still fragile.
- **The inference efficiency curve**: Model quantization, distillation, mixture-of-experts architectures, and neuromorphic chips (Intel's Hala Point) are all attacking the energy problem from the algorithm side. What's the realistic ceiling on efficiency gains vs. demand growth?

---

## Sources

- Goldman Sachs Research: "AI Is Poised to Drive 160% Increase in Data Center Power Demand" (2024)
- Wikipedia: Small Modular Reactor (current as of May 2026)
- Microsoft/Constellation Energy: Crane Clean Energy Center PPA announcement (September 2024)
- Google/Kairos Power SMR deal announcement (October 2024)
- International Energy Agency: World Energy Outlook data (2025 edition)
- Westinghouse eVinci Microreactor product documentation
