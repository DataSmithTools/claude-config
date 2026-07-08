# Handoff to Codex - {{one-line task title}}

<!-- Implementation-focused. HARD CAP 80 lines. Save to OS temp dir as
handoff-<project>-YYYYMMDD-HHmm.md; add "Handoff doc: <path>" to wiki/STATE.md.
Reference project files by path - never duplicate their content. Redact secrets/PII. -->

## Task

{{What to build/automate, in one paragraph. Deterministic scope only - judgement calls go back
to Claude.}}

## Current state

{{What exists and works. Branch name if git.}}

## Constraints

- Follow wiki/SCHEMA.md for anything touching vault notes.
- Never modify wiki/vault/01-sources/raw/.
- {{project/task-specific constraints, rejected approaches and why}}

## Files

- Touch: {{paths}}
- Read for context: {{paths, with half-line why each}}
- Do not touch: {{paths}}

## Acceptance check

{{The runnable check that proves it works, e.g. "node scripts/x.mjs sample.pdf produces a valid
00-inbox markdown file".}}

## First action

{{Exact first command or edit.}}
