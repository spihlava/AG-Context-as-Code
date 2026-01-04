# Antigravity Workflow Guide
> From Greenfield to V1.0: A step-by-step protocol for building with AI agents.

---

## Quick Reference

| Phase | You Say | Agent Does | Artifact |
|:---|:---|:---|:---|
| **Init** | *(create context files)* | — | `context/*.md` |
| **Spec** | `ag start [feature]` | Architect → defines boundaries | `spec.md` |
| **Design** | `ag role designer` *(optional)* | Designer → UX flows | `ux-spec.md` |
| **Plan** | `ag role builder` | Builder → Understanding Checklist | `plan.md` |
| **Approve** | `"Yes, proceed"` or `ag lgtm` | — | — |
| **Build** | *(agent continues)* | Builder → code + status | source code |
| **Review** | `ag review` | Reviewer → audit | `review.md` |
| **Test** | `ag verify` | Tester → validation | `test-report.md` |
| **Ship** | `git commit` | — | Tagged release |

---

## Complete Walkthrough: Tic-Tac-Toe

**Goal:** Build a browser-based Tic-Tac-Toe game from zero to working V1.0.

---

### Phase 0: Project Setup *(Manual)*

Before involving the agent, you create the foundational context:

```
.antigravity/
├── context/
│   ├── product.md      ← "Simple 2-player Tic-Tac-Toe. Maturity: Alpha."
│   ├── stack.md        ← "Vanilla JS, HTML5, CSS3. No frameworks."
│   └── guidelines.md   ← "Clean grid, responsive, dark theme."
└── system-prompt.md    ← Copy from README Section 3
```

**Checkpoint:** Context files exist. Agent has instructions.

---

### Phase 1: Specification

**You:**
```
ag start tic-tac-toe-game
```

**Agent (Architect):**
- Creates `tracks/tic-tac-toe-game/`
- Reads `product.md`, `stack.md`
- Outputs `spec.md`:
  - Game rules (3x3 grid, X/O alternating, win conditions)
  - Data model (`board: string[9]`, `currentPlayer: 'X' | 'O'`)
  - Acceptance Criteria:
    - [ ] Players can place marks
    - [ ] Win detection works
    - [ ] Draw detection works
    - [ ] Game resets

**You:**
```
ag lgtm
```

**Checkpoint:** Spec approved. Ready for implementation plan.

---

### Phase 2: Planning

**You:**
```
ag role builder
```

**Agent (Builder):**
- Reads approved `spec.md`
- Outputs `plan.md` with Understanding Checklist:

```markdown
## Understanding Checklist
I will build:
- [ ] index.html: Game container and grid structure
- [ ] style.css: Dark theme, responsive grid, hover states
- [ ] game.js: State management, win/draw logic, event handlers

Is this correct?
```

**You:**
```
Yes, proceed.
```

**Checkpoint:** Builder understands scope. Implementation authorized.

---

### Phase 3: Implementation

**Agent (Builder):**
- Creates `index.html`, `style.css`, `game.js`
- Updates `status.md` after each file
- On completion, outputs Completion Checklist:

```markdown
## Completion Checklist
- [x] All Understanding Checklist items implemented
- [x] Code runs without errors
- [x] Happy path tested (can play a game)
- [x] Ready for review
```

**Checkpoint:** Code complete. Ready for audit.

---

### Phase 4: Review

**You:**
```
ag review
```

**Agent (Reviewer):**
- Checks code against `spec.md` ACs
- Checks compliance with `stack.md` (no jQuery, no global vars)
- Checks security (no eval, no innerHTML with user input)
- Outputs `review.md`:

```markdown
## Verdict: PASS

### AC Verification
- [x] Players can place marks
- [x] Win detection works
- [x] Draw detection works
- [x] Game resets

### Notes
- Clean separation of concerns
- No issues found
```

**Checkpoint:** Code audited. Ready for testing.

---

### Phase 5: Verification

**You:**
```
ag verify
```

**Agent (Tester):**
- Checks maturity (Alpha → Happy Path only)
- Runs the game in browser
- Outputs `test-report.md`:

```markdown
## Test Results

| Test | Status |
|:---|:---|
| Place X in center | ✅ PASS |
| Place O in corner | ✅ PASS |
| X wins horizontally | ✅ PASS |
| Draw scenario | ✅ PASS |
| Reset button works | ✅ PASS |

**Verdict:** All tests passed.
```

**Checkpoint:** Tested. Ready to ship.

---

### Phase 6: Ship

**You:**
```bash
git add .
git commit -m "feat(tic-tac-toe): V1.0 - core game complete"
git push
```

**Done.** 🎉

---

## Common Patterns

### Skip Designer in Alpha
For logic-heavy features without UI complexity, go directly from Spec → Builder.

### Ghost Review for Speed
In Alpha maturity, Builder can self-review small changes without waiting for user.

### Hotfix Flow
For quick fixes:
```
ag fix broken-reset-button
```
Creates `tracks/hotfix-broken-reset-button.md` (single file, fast lane).

---

## Troubleshooting

| Problem | Solution |
|:---|:---|
| Agent ignores context | Check `system-prompt.md` is in agent's custom instructions |
| Agent skips approval | Verify `product.md` maturity isn't set to Alpha |
| Review fails on deps | Ensure all imports are listed in `stack.md` |
| Agent invents features | Point to `spec.md` and say "Only build what's in the AC list" |
