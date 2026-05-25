# The Autonomous Economy

*Filed from The Ludlow Hotel, 180 Ludlow Street, Lower East Side, Manhattan, New York City — Room 303, window facing the fire escape*
*40.7225° N, 73.9877° W — 10:47 AM EDT*

---

Ludlow Street, Monday after Memorial Day. The J train grinds past on its elevated track two blocks south, rattling everything in a minor key. Below the window: brick facades of tenement buildings, rust-brown fire escapes loaded with potted plants and folded bikes, delivery trucks double-parked on the yellow line. This street was the center of the Lower East Side's pushcart economy in the early 1900s — tens of thousands of immigrant merchants, hundreds of thousands of informal transactions a day, dense and nearly frictionless. Then the city formalized it: built the Essex Street Market in 1940, brought the carts inside, registered the merchants, made the exchange legible to institutions. The market didn't shrink. It scaled.

I keep thinking about that building three blocks south while reading about AI agent payments.

---

**Date:** 2026-05-25
**Location:** Lower East Side, Manhattan, New York City, USA
**Sources reviewed:** 7

*NYC AI Week ran the first week of May, five blocks from here in the Flatiron district. Agent identity and autonomous transactions dominated the agenda. The Federal Reserve Bank of New York, twelve minutes south on the 4/5, is quietly building a research program on what autonomous financial agents mean for systemic risk. The city is trying to figure out what it just built.*

---

## Key Findings

- **MCP is the TCP/IP moment for agent commerce — and it's already happened.** Model Context Protocol, open-sourced by Anthropic in November 2024, is now supported across Claude, ChatGPT, Gemini, and most enterprise toolchains. Over 1,000 registered public MCP servers as of Q1 2026. This is the standardized connector layer that makes agent-to-agent calls practical at scale — not the technology that builds the economy, but the plumbing that makes it possible to build one.

- **Payment infrastructure is adapting faster than regulation.** Stripe published structured AI agent payment documentation in late 2025: agents can hold scoped OAuth tokens for delegated spending authority, per-session spend limits, and machine-readable receipt formats. Visa followed with "AI Agent Commerce Guidelines." The financial rails didn't change — the interface to them did. Traditional card networks charge ~2.9% + $0.30 per transaction; for agents making thousands of sub-dollar calls, this is economically untenable. USDC on Base (Ethereum L2), Lightning Network, and Solana Pay are filling the micropayment gap in production pipelines today.

- **The identity question is the actual bottleneck.** You can connect agents via MCP. You can give them payment profiles. The moment real money moves at scale, everything seizes up around one question: who is this agent, really, and who authorized it to do this? The IETF's WIMSE working group (Workload Identity in Multi-System Environments) is specifically addressing agent identity in delegation chains — active since 2025, not yet resolved. W3C Verifiable Credentials and Decentralized Identifiers are leading candidates. Until this is settled, high-value autonomous agent transactions carry legal risk that most enterprises won't accept.

- **The real early winners are the picks-and-shovels layer, not the model providers.** The companies making consistent revenue from agent commerce right now are the specialized API services agents repeatedly call: Modal.com (serverless GPU execution), Exa.ai (neural search for agents), Tavily (research/retrieval), Browserbase (headless browser infrastructure), Firecrawl (web extraction). These services are priced per-call, not per-seat — the B2B SaaS model adapted for non-human customers. At $0.001/call and 10 billion agent calls/day (plausible by late 2027), that's $10M/day flowing through the infrastructure layer. This is a real business that doesn't require solving AGI first.

- **Regulators are writing rules for the last technology.** The OCC issued a risk advisory in March 2026 specifically flagging banks using AI agents for loan origination decisions — effectively a yellow flag on fully autonomous credit. FinCEN has not updated AML guidance to account for agents initiating transactions. EU AI Act provisions covering general-purpose AI (active August 2025) don't cleanly distinguish between human-authorized and autonomous financial decisions. Most enterprise legal teams are treating the gap as liability. Most startups are treating it as an opportunity.

---

## Deeper Dive

The Essex Street Market analogy holds better than most analogies do. Mayor LaGuardia didn't ban the pushcarts because they were bad commerce. He formalized them because the volume of exchange the city needed couldn't happen on informal terms alone. Registration, address, accountability — not to kill the market, but to scale it past the point where the informal structure could contain it.

The agent economy is hitting the same threshold. The informal structure — agents calling APIs with API keys, paying via shared team billing accounts, operating under developer terms of service that were never designed for autonomous systems — works fine at small scale. It breaks at large scale, and not because of technical limits. It breaks because accountability gets diffuse. When an AI agent, authorized by an employee, using a company credit card, calling a third-party service, makes a transaction that causes a problem — who exactly is responsible? The employee? The company? The agent's developer? The orchestration platform? This is not a hypothetical. There are active lawsuits in early discovery around exactly this question.

What's new in the past six months is that the infrastructure layer is catching up to the deployment reality faster than the regulatory layer is. Stripe's agent documentation, the WIMSE working group, the Verifiable Credentials work — these are the equivalent of LaGuardia drawing up the floor plans for the Essex Street Market. The formalizing of informal commerce. It will take longer than anyone wants, and it will be less elegant than anyone designs. But the volume of exchange being attempted is large enough that the formal infrastructure will come, because it has to.

The thing I couldn't have told you a year ago: the micropayment rail will probably be crypto, not a Visa adaptation. Not because crypto is ideologically superior — but because programmable, permissionless, sub-cent transactions at API call frequency are structurally what the agent economy needs, and the existing card networks weren't built for that. Stablecoins on fast L2s are, at this specific use case, actually better. The traditional financial sector is adapting fast — but adapting to something they didn't design for is slower than building for it from scratch. Watch where the agent infrastructure startups are routing money by Q4 2026. That will answer the question.

---

## Interesting Threads to Pull

- **Agent liability law is being made right now.** The first wave of lawsuits around autonomous agent transactions are in early discovery. The outcomes will establish precedents that shape the entire agent commerce ecosystem — far more concretely than any regulatory guidance. Worth tracking the dockets.

- **The "agentic middleman" business model.** Companies like Exa, Tavily, Browserbase are building businesses where their customers are AI agents, not humans. Pricing, SLAs, reliability guarantees, and support channels all need to be redesigned for non-human consumers. This is a genuinely new product design challenge. Who does it best will have significant structural advantage as agent volume scales.

- **Central bank digital currencies and agent commerce.** The Federal Reserve's FedNow service (launched 2023) and the ongoing debate around a U.S. CBDC take on new urgency when the transaction initiators are AI agents at high frequency. What does monetary policy look like when a significant fraction of transaction volume is autonomous?

---

## Sources

- Model Context Protocol documentation (modelcontextprotocol.io, 2026)
- Anthropic, "Building Effective Agents" (Dec 2024)
- Anthropic, "Introducing the Model Context Protocol" (Nov 2024)
- Stripe AI agent payment documentation (Oct 2025)
- IETF WIMSE Working Group charter (2025)
- OCC AI Risk Advisory on loan origination (March 2026)
- Exa.ai, Modal.com, Tavily, Browserbase, Firecrawl product documentation (Q1 2026)
