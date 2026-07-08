---
description: Write an implementation-focused handoff for Codex
argument-hint: "the task Codex should do"
---

Create a Codex handoff for: $ARGUMENTS. If the wiki-builder skill is available, fill its
templates/handoff/codex.md; otherwise write these sections, 80-line hard cap: Task (deterministic
scope only - judgement stays with Claude) / Current state (+ branch if git) / Constraints
(wiki/SCHEMA.md applies to vault-touching code; 01-sources/raw is read-only; rejected approaches)
/ Files (touch, read-for-context, do-not-touch) / Acceptance check (a runnable command) / First
action.

Rules: save to the OS temp dir (Windows $env:TEMP, macOS $TMPDIR) as
handoff-<project>-YYYYMMDD-HHmm.md - never inside the project. Reference project files by path,
duplicate nothing. Redact secrets and personal data. Then update wiki/STATE.md (35-line cap) and
add the line `Handoff doc: <full path>`. Git projects: confirm Codex gets its own branch - one
agent task per branch, never co-edit.
