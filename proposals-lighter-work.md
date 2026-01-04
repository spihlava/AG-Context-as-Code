# Proposals for Lighter Work (The "Lightning" Tracks)
**Status:** Discussion Draft
**Goal:** Reduce ceremony for tasks that are > 2h (not a hotfix) but < 8h (not a major feature).

---

## 1. Role Bundling (The "Engineer" Persona)
**Concept:** Merge specialized roles into dual-personas to reduce handover friction.

- **The Developer (Architect + Builder):** Handles technical design, data modeling, and implementation. One agent session, one thought process.
- **The Quality Lead (Reviewer + Tester):** Handles code audit, protocol sync, and verification.
- **Benefit:** Reduces 4 handover points to 1. 
- **Usage:** Set as default for **Alpha** maturity or tasks estimated < 4 hours.

---

## 2. Compact Tracks (Single-File Execution)
**Concept:** Replace the 3-file folder structure (`spec`, `plan`, `status`) with a single "All-in-One" track file.

- **Location:** `.antigravity/tracks/compact-[name].md`
- **Structure:**
  ```markdown
  # Compact Track: [Name]
  ## 1. Spec (The Goal)
  [Short AC list]
  ## 2. Plan (The How)
  [Checklist]
  ## 3. Status (Live State)
  [Checklist from Plan]
  ```
- **Benefit:** Faster context loading (1 file read vs 3). Easier for the agent to maintain synchronization between plan and status.

---

## 3. "Self-Correction" Gate (The Ghost Review)
**Concept:** Allow the agent to perform an internal persona-shift for approval without a blocking "Wait for User" event.

- **Instruction:** "Builder: After implementation, adopt the Reviewer persona for one turn. If you find P0 bugs, fix them immediately. If not, mark as 'Self-Approved' and move to the User for final verification."
- **Benefit:** Keeps the "Expert Critic" mindset working but removes the asynchronous bottleneck of waiting for a human during the "Vibe Coding" phase.
- **Usage:** Strictly for **Alpha** maturity and non-breaking UI/Logic changes.

---

## Summary of Track Types (Proposed)

| Type | Complexity | Roles | Docs | Approval |
|------|------------|-------|------|----------|
| **Hotfix** | < 2h | Builder | 1 File | Self-Approve |
| **Lightning** | 2-6h | Engineer + Critic | 1 File (Compact) | Ghost Review |
| **Standard** | > 6h | All (5) | Folder (3+ Files) | User Gate |
