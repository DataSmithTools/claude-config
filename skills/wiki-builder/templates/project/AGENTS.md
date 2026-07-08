# AGENTS.md - {{TOPIC}} wiki (Codex wrapper)

Same project rules as CLAUDE.md - if a convention changes, update both wrappers identically or
point both at a shared doc. Codex's usual work here: scripts, parsers, validators, ingestion
tooling. Judgement work (scoping, synthesis, note quality, review) belongs to Claude - see the
collaboration section.

## Session start

Read wiki/STATE.md (over 35 lines: shrink it first) and wiki/SCHEMA.md. Ground all work in
wiki/MISSION.md. If STATE.md has a `Handoff doc:` pointer, read that doc then delete the line.
Confirm the git branch matches the task before editing.

## Always-on rules

- Never modify raw files under wiki/vault/01-sources/raw/.
- Every vault change: update vault INDEX.md, append one LOG.md line.
- Vault note conventions live in wiki/SCHEMA.md - follow them exactly.
- Scripts you write live in scripts/ at the project root; deterministic, tested, no secrets.
- Snapshot (git commit or vault copy to wiki/exports/) before any batch file transformation.
- Before ending a session: update wiki/STATE.md, 35-line hard cap.

## Collaboration

One agent task per branch; never co-edit a branch with Claude. Handoffs: fill the handoff
template, save to the OS temp dir as handoff-<project>-YYYYMMDD-HHmm.md, add a
`Handoff doc: <path>` line to wiki/STATE.md.
