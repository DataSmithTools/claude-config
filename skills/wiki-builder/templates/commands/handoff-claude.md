---
description: Write a reasoning/research-focused handoff for a fresh Claude session
argument-hint: "what the next session is for"
---

Create a Claude handoff for: $ARGUMENTS. If the wiki-builder skill is available, fill its
templates/handoff/claude.md; otherwise write these sections, 80-line hard cap: Purpose / State
(vault counts, branch if git) / Artifacts (paths + half-line why; wiki/MISSION.md always) /
Gotchas (the only irreplaceable section: constraints discovered, sources rejected and why,
pending contradiction calls, user preferences observed) / Suggested mode (grill, research,
ingestion, maps, or review) / First action (exact first step).

Rules: save to the OS temp dir (Windows $env:TEMP, macOS $TMPDIR) as
handoff-<project>-YYYYMMDD-HHmm.md - never inside the project. Reference project files by path,
duplicate nothing. Redact secrets and personal data; never quote `private: true` sources. Then
update wiki/STATE.md (35-line cap) and add the line `Handoff doc: <full path>` - the next session
reads the doc then deletes that line.
