---
name: wiki-builder
description: >
  Build and maintain a Karpathy-style LLM wiki as an Obsidian vault: scope the topic with an
  interview, scaffold the project, research and assess sources, ingest them into atomic linked
  notes with provenance, build maps of content, and audit the vault. Use when the user says
  "I want to learn about X", "create a wiki about X", "set up an Obsidian vault", "ingest this
  source/article/paper", "research a topic and collect sources", or invokes /wiki-builder.
---

# Wiki Builder

Turn any folder into a persistent, LLM-maintained knowledge wiki (Karpathy's llm-wiki pattern):
raw sources stay immutable, the vault holds compressed linked notes, and a schema file records
the project's conventions. The human curates sources, asks questions, and thinks; you do the
research, writing, and all of the bookkeeping.

## Route the request

Read the request, check the folder state, then load ONE reference file and follow it:

| Situation | Load |
|---|---|
| Folder needs wiki setup ("create a wiki", "set up a vault", first run) | references/setup.md |
| Goal vague, or wiki/MISSION.md missing/stale ("I want to learn about X") | references/grill.md |
| Find/assess/retrieve sources ("research X", "find current material") | references/research.md |
| Process a provided or inbox-queued source into notes | references/ingestion.md |
| Build/refresh index, MOCs, glossary, learning pathways | references/maps.md |
| Audit vault quality, gaps, duplication, contradictions, drift | references/review.md |
| Hand off to/from Codex, or split work between agents | references/collaboration.md |

Note formats, frontmatter, folder semantics, and provenance rules live in references/schema.md -
load it whenever you create or edit vault notes.

First action in a project each session: read wiki/STATE.md and wiki/SCHEMA.md if they exist.
If STATE.md is over 35 lines, shrink it before trusting it. Never read the vault wholesale.

## Always-on rules

1. Never modify raw source files under 01-sources/raw/. Wiki notes are yours to rewrite freely.
2. Every vault change updates INDEX.md and appends one LOG.md line. No exceptions.
3. Cite or flag: every claim in a note traces to a [[source]] link. Never write from parametric
   memory alone; unsourced background gets `confidence: low` and an entry in 05-questions.
4. Index-first: answer questions by reading INDEX.md, then only the relevant notes.
5. Compress: a note longer than what it summarises is negative value - merge or delete it.
6. Before any batch rewrite or lint pass, snapshot: git commit if a repo, otherwise copy vault/
   to a dated folder under wiki/exports/. Automation must be reversible.
7. Update wiki/STATE.md before ending a session (hard 35-line cap).

## Detect the user type

Technical signals: mentions git, CLI, branches, plugins, frontmatter. Light signals: none of
those, asks what Obsidian is, wants guided steps. Adapt: light users get a one-line explanation
of each tool on first mention, no git jargon, safe defaults chosen for them; technical users get
terse output plus the optional extras (git, Dataview, the lint script). If genuinely unsure, ask
once: "Comfortable with git and the command line, or prefer guided setup?"

## Project layout (created by setup)

wiki/SCHEMA.md (project conventions - propose edits as the domain teaches you), wiki/STATE.md
(session memory), wiki/MISSION.md (why/audience/success criteria), wiki/RESEARCH_LOG.md, and
wiki/vault/ (open this folder in Obsidian): INDEX.md, LOG.md, 00-inbox, 01-sources,
02-literature-notes, 03-concept-notes, 04-maps-of-content, 05-questions, 06-outputs, 99-archive.

Templates for every file type live in this skill's templates/ folder. Copy, then fill in - do
not invent parallel structures. Project-level slash commands are installed by setup from
templates/commands/.
