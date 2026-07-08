# CLAUDE.md - {{TOPIC}} wiki

LLM-maintained knowledge wiki (Karpathy llm-wiki pattern), built with the wiki-builder skill.
The human curates sources and asks questions; the agent researches, writes notes, and does all
bookkeeping. Keep this file small - it loads every session.

## Session start

Read wiki/STATE.md (over 35 lines: shrink it first) and wiki/SCHEMA.md. Ground all work in
wiki/MISSION.md. If STATE.md has a `Handoff doc:` pointer, read that doc then delete the line.

## Always-on rules

- Never modify raw files under wiki/vault/01-sources/raw/.
- Every vault change: update vault INDEX.md, append one LOG.md line.
- Every claim cites a [[source]]; nothing from parametric memory alone.
- Index-first reading - never load the vault wholesale; big sources get summarised before
  deep processing.
- Snapshot (git commit or vault copy to wiki/exports/) before any batch rewrite.
- Before ending a session: update wiki/STATE.md, 35-line hard cap.

## Commands

.claude/commands/: grill-me, research-topic, ingest-source, build-map, review-vault, caveman,
handoff-codex, handoff-claude. Full workflows live in the wiki-builder skill if installed;
the commands stand alone if not.

## Collaboration

Claude owns scoping/research/synthesis/note quality/review. Codex owns scripts, parsers,
validators, automation. One agent task per branch; never co-edit a branch. Handoffs go to the
OS temp dir with a pointer in wiki/STATE.md.
