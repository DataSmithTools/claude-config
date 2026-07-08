---
name: project-toolkit
description: >
  Bootstrap or maintain the portable AI-project system (doc chain, homegrown skills, fallow gate,
  third-party skill manifest) from the project-toolkit repo. Use when starting a new project
  ("bootstrap this project", "/project-toolkit new"), retrofitting an existing repo ("adopt"),
  or pushing improved skills/templates back upstream ("sync").
---

# project-toolkit

Toolkit repo (single source of truth): `C:\Users\jackw\OneDrive\Documents\Claude\Claude Code\project-toolkit`
(GitHub: `DataSmithTools/project-toolkit`, private). If missing at that path, ask the user where it
is; if the machine lacks it entirely, `git clone` it first.

The mode is the argument: `new` (default when the repo has no CLAUDE.md), `adopt`, or `sync`.
Read the toolkit's `MANIFEST.md` first - it defines the full inventory; this skill defines only the
procedure. Before any mode: `git -C <toolkit> pull` so you work from the latest toolkit.

## Mode: new (fresh project scaffold)

Ask the user (one question, multi-part): project name, one-paragraph description, stack choices if
not evident, and any isolation rules (other projects/DBs that must never be touched). Then:

1. Docs: copy each `templates/*` per MANIFEST's mapping table; fill every `{{PLACEHOLDER}}` from the
   answers - never leave a placeholder in a written file. Delete sections marked `_OR_DELETE` if not
   applicable. Add `docs/ACTIVE_CONTEXT.md` to `.gitignore`.
2. Homegrown skills: copy `skills/*` to `.claude/skills/`.
3. Third-party skills: run the `npx skills add` command in MANIFEST (writes `skills-lock.json`).
4. Fallow gate (all 4 pieces per `hooks/AGENT_HOOKS.md`): copy `hooks/fallow-gate.sh` to
   `.claude/hooks/`; merge the hooks block from `hooks/settings-hooks-snippet.json` into
   `.claude/settings.json`; `npm i -D fallow`; copy `hooks/scripts/*.mjs` to `scripts/` and add the
   npm script entries (fallow:audit, fallow:clean-temp, sync:skills).
5. Mirror: `npm run sync:skills` (runs `scripts/sync-skills.mjs`). Never symlink between the skill
   trees; Codex-only skills go in the script's `CODEX_ONLY` list.
6. Verify: `/session-start` path works (canon + ACTIVE_CONTEXT.template + roadmap all readable);
   fallow gate fires on a test commit. Report a checklist of what was installed.

## Mode: adopt (retrofit existing repo)

Never overwrite existing project files wholesale - this mode ADDS what is missing and REPORTS drift.

1. Diff the repo against MANIFEST's inventory: docs present? homegrown skills present?
   `skills-lock.json` present and covering the third-party list? all 4 fallow pieces present?
   `.agents/skills/` mirror current? `docs/ACTIVE_CONTEXT.md` gitignored?
2. For each MISSING item, install it as in `new` (fill placeholders from the project's existing
   canon/README rather than asking, where possible).
3. For each PRESENT-but-different homegrown skill/template, do NOT overwrite; report the drift and
   ask: keep project version (candidate for `sync` back), or take toolkit version.
4. Verify + report the same checklist as `new`, marking added / already-present / drifted.

## Mode: sync (project improvements -> toolkit)

1. Diff the project's homegrown skills (`.claude/skills/{ponytail,session-start,session-save,retro,health-audit}`)
   and doc templates against the toolkit's copies.
2. For each difference, judge direction: project improved it -> copy to toolkit; project merely
   specialised it (project names, paths) -> genericise to `{{PLACEHOLDERS}}` before copying, or skip
   if purely local. Show the user the diff summary before writing.
3. Also sync improvements to this skill itself (`bootstrap-skill/project-toolkit/SKILL.md`) and
   remind the user to re-copy it to `~/.claude/skills/project-toolkit/` if it changed.
4. Commit to the toolkit repo with a message naming the source project; push.

## Rules (all modes)

- Toolkit repo edits go through git (commit + push) - it is the upstream; never leave it dirty.
- Never fork third-party skills into the toolkit (MANIFEST rationale); upstream them via
  `npx skills update` instead.
- Respect the target project's AI_WORKFLOW: bootstrap/adopt output is config/docs/tooling only, so
  the low-risk direct-to-main shortcut applies unless the project says otherwise.
- Never print secrets; never touch `.env*` files beyond telling the user which vars to create.
