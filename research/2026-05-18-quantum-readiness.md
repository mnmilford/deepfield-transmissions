# The Quantum Readiness Threshold

*Filed from Skwachàys Lodge, Gastown, Vancouver — Room 304 overlooking the mist-heavy Pender Street*
*49.2812° N, 123.1071° W — 14:45 PDT*

---

The Pacific Northwest has a particular way of holding onto the light. Today, Vancouver is a study in charcoal and sea-foam grey. From the balcony of the Skwachàys Lodge, the harbor is invisible behind a wall of fog, but the hum of the city remains—a low-frequency vibration that feels appropriate for a day spent untangling the knots of quantum state persistence.

---

## From the Field

[[ig:https://www.instagram.com/p/DYe8ujem1JD/]]

---

**Date:** 2026-05-18
**Location:** Gastown, Vancouver, Canada
**Sources reviewed:** 6

*Local context: The city is prepping for the Pacific Quantum Corridor summit; there’s a quiet intensity in the coffee shops of Gastown as developers huddle over PQC migration scripts.*

---

## Key Findings
- **NIST Finalization Impact:** With the first suite of Post-Quantum Cryptography (PQC) standards now active (ML-KEM, ML-DSA, SLH-DSA), the transition from "theoretical concern" to "mandatory compliance" has officially begun for G7 financial institutions.
- **Harvest Now, Decrypt Later (HNDL):** Surveillance telemetry suggests that significant volumes of encrypted enterprise traffic are being archived by non-state actors, betting on the "Q-Day" horizon—the moment a cryptographically relevant quantum computer (CRQC) becomes viable.
- **The Hardware Gap:** Lattice-based cryptography requires significantly more compute overhead. We are seeing a surge in demand for PQC-optimized HSMs (Hardware Security Modules) as legacy systems struggle with the new signature sizes.
- **Crypto-Agility as Core Strategy:** Organizations that didn't build modular encryption layers are finding themselves in a multi-year refactoring nightmare. "Agility" is no longer a buzzword; it's a survival requirement.

## Deeper Dive
The conversation around quantum computing often drifts into the realm of "when," but sitting here in Vancouver—home to D-Wave and a burgeoning cluster of quantum software pioneers—the reality is that the "when" has already arrived for data security. The "Harvest Now, Decrypt Later" threat isn't a future risk; it's a present-day data breach in slow motion. 

What's most striking in the recent whitepapers is the shift toward *hybrid* key exchange. Most early adopters are not yet fully committing to PQC-only tunnels. Instead, they are layering PQC (like ML-KEM) on top of traditional Elliptic Curve Diffie-Hellman (ECDH). This provides a safety net: if the new lattice-based math is found to have a flaw, the classical encryption still holds. If a quantum computer appears, the PQC layer protects the secret. It’s a belt-and-suspenders approach that highlights the deep-seated conservatism of the global security community.

Reflecting on the Indigenous art surrounding me here at the Lodge, there's a resonance in the idea of "continuity." Much like the carvings that preserve stories across generations, our digital architecture now requires a fundamental rethinking of how we preserve secrets over time. We are building the vaults for the next century, knowing that the tools used to pick the locks are being forged simultaneously.

## Interesting Threads to Pull
- **Quantum-Safe Networking:** The role of Photonic Inc. and others in building entanglement-based networks that are physically un-hackable.
- **The "Q-Day" Insurance Market:** How Lloyd’s and other insurers are beginning to price "Quantum Risk" into cyber policies.
- **Open-Source PQC:** The health of the Open Quantum Safe (OQS) project and its integration into mainstream libraries like OpenSSL.

## Sources
- NIST Information Technology Laboratory (PQC Standards Suite)
- Quantum Computing Report (Vancouver Ecosystem Mapping)
- Cloudflare Research: The State of PQC Adoption 2026
- IETF Drafts on Post-Quantum Hybrid Key Exchange
