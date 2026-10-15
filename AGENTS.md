# Agent Guidelines

## Skills

This project uses [Anthropic Skills](https://github.com/anthropics/skills) format for specialized task guidance.
Skills are stored in `./skills/<skill-name>/SKILL.md`.

### Discovering Available Skills

Run `./list-skills` to get a JSON array of all available skills:

```json
[
  {
    "name": "frontend-design",
    "description": "Create distinctive, production-grade frontend interfaces...",
    "path": "./skills/frontend-design/SKILL.md"
  },
  {
    "name": "ui-ux-pro-max",
    "description": "UI/UX design intelligence for web and mobile...",
    "path": "./skills/ui-ux-pro-max/SKILL.md"
  }
]
```

### Using a Skill

When a user task matches a skill's description:

1. Read the full `SKILL.md` at the listed path.
2. Follow its guidelines — they are authoritative for that task.
3. Do not mix skill guidelines across unrelated tasks.
4. Do not load skills preemptively; read only when directly relevant.

Skills are discovered lazily. Only YAML frontmatter is read at discovery time;
the full skill body is loaded on demand to keep context efficient.

---

## Skill Trigger Reference

| Task type | Skill |
|---|---|
| Build a web component, page, dashboard, or application | `frontend-design` |
| Style or beautify existing UI | `frontend-design` |
| Create HTML/CSS layouts, React/Vue components, landing pages | `frontend-design` |
| Aesthetic direction, typography, color palette, visual identity | `frontend-design` |
| Review UI for accessibility, interaction quality, or UX issues | `ui-ux-pro-max` |
| Implement animations, transitions, or motion design | `ui-ux-pro-max` |
| Form design, error handling, feedback states | `ui-ux-pro-max` |
| Navigation structure and patterns | `ui-ux-pro-max` |
| Charts, data tables, or data visualization | `ui-ux-pro-max` |
| Pre-delivery UI quality check | `ui-ux-pro-max` |
| Full UI build from brief to code | Both skills |

### When to use both skills together

For a full UI build (brief → production code):
1. Read `frontend-design` → commit to aesthetic direction, token system, signature element
2. Read `ui-ux-pro-max` → apply UX rules, interaction standards, run pre-delivery checklist

---

## General Coding Conventions

- Use CSS custom properties for all design tokens (colors, spacing, type scale).
- Match implementation complexity to the aesthetic vision.
- Produce working, production-grade code — not wireframes or mockups.
- Check responsive behavior down to 375px viewport width.
- Respect `prefers-reduced-motion` and `prefers-color-scheme`.
- Touch targets ≥44×44px on all interactive elements.
