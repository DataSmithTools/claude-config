# wiki-builder

A Claude Code skill that builds and maintains Karpathy-style LLM wikis as Obsidian vaults:
scope the topic by interview, scaffold the project, research and assess sources, ingest them
into atomic linked notes with full provenance, build maps of content, and audit the vault.
Based on Andrej Karpathy's llm-wiki pattern (gist 442a6bf555914893e9891c11519de94f) plus
field-tested community conventions.

## Install

Copy this whole folder to your user skills directory (works on Windows and macOS):

- Windows: `%USERPROFILE%\.claude\skills\wiki-builder\`
- macOS/Linux: `~/.claude/skills/wiki-builder/`

That's it - no dependencies. Node.js is optional (enables `scripts/lint-vault.mjs`; the review
workflow has a built-in fallback without it). Obsidian is recommended but optional: the vault is
plain markdown and works with any editor.

## Use

Open any folder (empty or existing) in Claude Code, the desktop app, or a compatible IDE, then:

- "Create a wiki about X" / "Set up an Obsidian vault for X" - setup + scoping interview
- "I want to learn about X" - scoping interview first
- "Research current material on X" - search, assess, register sources
- "Ingest this" (paste text, give a URL or file) - source to structured notes

Setup installs eight project slash commands: `/grill-me`, `/research-topic`, `/ingest-source`,
`/build-map`, `/review-vault`, `/caveman`, `/handoff-codex`, `/handoff-claude`. The commands are
self-contained, so a scaffolded project keeps working even for collaborators without this skill.

## Layout it creates

`wiki/vault/` (open this folder in Obsidian) holds INDEX.md, LOG.md and numbered note folders
(inbox, sources, literature notes, concept notes, maps of content, questions, outputs, archive).
Project files around it: MISSION.md (the goal), SCHEMA.md (conventions), STATE.md (35-line
session memory), RESEARCH_LOG.md, plus thin CLAUDE.md/AGENTS.md wrappers.

## Design notes

- Raw sources are immutable; notes compress, cite, and interlink; every change updates the
  index and log. Contradictions are recorded, never silently overwritten.
- Token discipline is structural: the skill loads one workflow file at a time, state lives in a
  capped STATE.md instead of chat history, and answering questions reads the index first, never
  the whole vault.
- Claude/Codex split: Claude does scoping, research, synthesis, review; Codex does scripts and
  automation. One agent task per branch; handoffs via capped temp-dir docs.
- Safety: no paywall bypassing (users supply content they have rights to); `private: true`
  sources are never exported or quoted outside the vault; batch passes snapshot first.
