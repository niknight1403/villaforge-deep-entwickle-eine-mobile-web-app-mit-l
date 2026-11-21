# MVP Scope and Roadmap

## 1. Minimum Viable Product (MVP)

| Feature | Description | Acceptance Criteria |
|---------|-------------|---------------------|
| **Task List** | Display a list of tasks stored in `localStorage`. | List renders on load, shows title and status. |
| **Add Task** | Input field + button to create a new task. | New task appears immediately, persists after refresh. |
| **Toggle Complete** | Clickable checkbox to mark task as done. | Status updates, visual change, persists. |
| **Delete Task** | Button to remove a task. | Task removed from UI and storage. |
| **Responsive Design** | Works on mobile viewport (≤ 480 px). | Layout adapts, touch targets ≥ 48 px. |
| **Accessibility** | WCAG 2.1 AA compliance for core UI. | ARIA labels, keyboard navigation, color contrast ≥ 4.5:1. |
| **Build & Tests** | Production build with `npm run build`, unit tests with `npm test`. | Build succeeds, tests pass. |

## 2. Roadmap

| Release | Milestone | Tasks | Duration |
|---------|-----------|-------|----------|
| **Release 1 – MVP** | Core functionality | • Implement task list, add, toggle, delete
• Responsive & accessible UI
• Unit tests (Jest)
• Production build | 2 weeks |
| **Release 2 – Enhancements** | UX polish | • Edit task title
• Drag‑and‑drop reorder
• Dark mode toggle | 1 week |
| **Release 3 – Extras** | Optional features | • Due dates & reminders
• Sync with IndexedDB
• PWA support | 2 weeks |

## 3. Deliverables

* `docs/MVP_Roadmap.md` – this document
* Updated `package.json` with scripts
* `src/index.html`, `src/app.js`, `src/styles.css`
* Unit tests in `tests/`
* Production build in `dist/`

---

**Next Steps** – Implement the MVP features, run `npm test`, build with `npm run build`, perform smoke test and accessibility audit.
