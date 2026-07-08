# Collaboration - Claude and Codex on one wiki

Applies when the user runs both agents (or any second agent). Solo-Claude projects can ignore
everything except the handoff format, which also works for handing off to a fresh Claude session.

## Ownership split

| Claude owns | Codex owns |
|---|---|
| Topic scoping, grilling, mission | Scripts and repo automation |
| Research strategy, source assessment | Parsers and file transformations |
| Synthesis, note quality, glossary | Validators, tests, lint tooling |
| Review/critique, contradiction calls | Repeatable ingestion tooling (e.g. PDF-to-markdown) |
| User questioning | CI/git plumbing if the project grows any |

Rule of thumb: judgement and prose -> Claude; deterministic and repeatable -> Codex.
Either agent may do small tasks from the other column rather than force a handoff.

## Ground rules

- **One agent task per branch** (git projects). Never let both agents edit the same branch at
  the same time. Non-git projects: one agent active at a time, full stop.
- Both agents read the same files at pickup: CLAUDE.md or AGENTS.md -> wiki/SCHEMA.md ->
  wiki/STATE.md -> any `Handoff doc:` pointer in STATE.md (read the doc, then delete the
  pointer line so it cannot go stale).
- Vault edits follow references/schema.md regardless of which agent makes them.
- Codex setup: AGENTS.md (created by setup) is the Codex wrapper. If Codex needs the project
  commands, copy `.claude/commands/` to wherever its harness reads them - copy, never symlink
  (symlinks break on Windows and cloud-synced folders).

## Handoff protocol

1. Fill the matching template - templates/handoff/codex.md (implementation-focused) or
   templates/handoff/claude.md (reasoning/research-focused). Hard cap 80 lines.
2. Save to the OS temp directory (Windows `$env:TEMP`, macOS `$TMPDIR`), named
   `handoff-<project>-YYYYMMDD-HHmm.md`. Never inside the project - handoffs are disposable
   and must not pollute the vault or git history.
3. Update wiki/STATE.md (35-line cap) and add one line: `Handoff doc: <full path>`.
4. Do not duplicate content that lives in the vault, SCHEMA, MISSION, or git - reference by
   path. The handoff earns its lines with what is NOWHERE else: constraints discovered,
   approaches already rejected, exact next action.
5. Redact secrets and personal data always; remember `private: true` sources stay unreferenced
   in any doc that leaves the project folder.

## Receiving a handoff

Read STATE.md; follow the pointer; delete the pointer line; confirm the branch (git projects)
matches the task; do the First action stated in the doc. If the handoff conflicts with what you
find in the project, trust the project and say so - files outrank stale prose.
