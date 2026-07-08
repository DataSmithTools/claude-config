# Setup mode - initialise or adopt a wiki project

Goal: a working project scaffold plus a scoped mission, with the minimum of questions.

## 1. Detect folder state

Glob the project root (top level only - do not crawl):

- **Empty folder** -> full scaffold (step 3).
- **Existing wiki-builder project** (wiki/SCHEMA.md exists) -> maintenance, not setup. Read
  STATE.md and ask what they want to do next.
- **Existing Obsidian vault** (.obsidian/ anywhere, or folders of .md notes) -> adopt-vault
  (step 4).
- **Existing non-wiki project** (code, docs, .claude/) -> adopt-project (step 4).

## 2. Minimum intake

Ask only what detection could not answer, in one question set: topic (if not stated), and for
ambiguous folders whether the wiki lives in this folder or a subfolder. Then, if wiki/MISSION.md
is missing or the goal is vague, run references/grill.md BEFORE scaffolding note folders - the
interview can change the structure (e.g. an exam-prep wiki wants a pathways MOC on day one).

## 3. Full scaffold (empty folder)

Create with the Write tool (no shell commands needed - works identically on Windows/macOS):

1. `wiki/vault/` with INDEX.md, LOG.md and the eight folders (00-inbox, 01-sources + raw/,
   02-literature-notes, 03-concept-notes, 04-maps-of-content, 05-questions, 06-outputs,
   99-archive). Empty folders need a placeholder: write a one-line `.gitkeep`-style `README.md`
   only in 00-inbox (what to drop here) and 01-sources/raw (do not edit files here).
2. `wiki/SCHEMA.md`, `wiki/STATE.md`, `wiki/MISSION.md`, `wiki/RESEARCH_LOG.md` from
   templates/project/, placeholders filled from the intake/grill answers.
3. `wiki/assets/` and `wiki/exports/`.
4. Root `CLAUDE.md` and `AGENTS.md` from templates/project/ (skip AGENTS.md if the user says
   they will never use Codex; default is to create it).
5. `.claude/commands/` - copy all eight files from templates/commands/.
6. Git (technical users, or on request): `git init`, write .gitignore from
   templates/project/gitignore.txt, initial commit. Light users: skip silently; mention once
   that version history is available later if wanted.
7. Log it: first LOG.md entry `## [date] setup | project initialised`.

## 4. Adopt (existing folder) - add, never overwrite

Toolkit rule: ADD what is missing, REPORT what differs, overwrite nothing.

- Diff the folder against the step-3 inventory. Create only the missing pieces.
- Existing CLAUDE.md/AGENTS.md: do not replace. Show the user a short block (the session-start
  reads, the always-on rules pointer) to append, and append it only with their OK.
- **Adopt-vault**: never impose the numbered folders on an existing vault. Map their existing
  folders to the schema roles in wiki/SCHEMA.md (e.g. "Clippings/ = 00-inbox") and record any
  of their conventions (tags, templates) that override references/schema.md. Only create folders
  for roles that have no home, after confirming with the user.
- Existing notes: leave untouched. Offer to register/ingest them later via the inbox.
- Report at the end: created / skipped-existing / needs-user-decision.

## 5. Obsidian handoff

Tell the user (adjust depth to user type):

- Open the `wiki/vault` folder in Obsidian ("Open folder as vault"). The rest of the project is
  deliberately outside the vault so Obsidian search/graph stays clean.
- Recommended settings: attachment folder -> `../assets` won't work across vault boundary, so
  use in-vault `99-archive/attachments` OR keep default; Web Clipper browser extension saves
  articles straight into 00-inbox. Graph view shows the wiki growing; Dataview plugin is
  optional (frontmatter is designed for it).
- Light users: one line on what Obsidian is (free markdown notes app with linking) and that
  every file is plain text they own.

## 6. Finish

Fill STATE.md (35-line cap), summarise what exists now, and state the next action - usually
"run /research-topic" or "drop your first sources into 00-inbox and run /ingest-source".
