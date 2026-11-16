# Accessibility Statement — haxtheweb/haxcms-desktop

**Last updated:** November 2026  
**Contact:** hax@psu.edu  
**Standard:** WCAG 2.1 AA (with WCAG 2.0 AA baseline)

## Our Commitment

`haxcms-desktop` runs HAXcms as an installed app on Windows, macOS and Linux, so people can build sites without a server. Accessibility is one of the HAX project pillars: **Accessible — built for everyone, by everyone.**

## What is in this repository

- **The app shell this repository owns:** the window, the application menus, and the Legal Notices window.
- **The HAX dashboard and editor** shown in the window come from [`haxcms-nodejs`](https://github.com/haxtheweb/haxcms-nodejs) and [`haxtheweb/webcomponents`](https://github.com/haxtheweb/webcomponents) unchanged. Their accessibility work and testing happen there; see the [webcomponents accessibility statement](https://github.com/haxtheweb/webcomponents/blob/master/ACCESSIBILITY-STATEMENT.md) and the [haxcms-nodejs accessibility statement](https://github.com/haxtheweb/haxcms-nodejs/blob/main/ACCESSIBILITY-STATEMENT.md).

## What we do

- The menus are the operating system's own (Electron role menus: File, Edit, View, Window), so they have the platform's standard keyboard shortcuts and are read by the platform's screen readers.
- The app uses Chromium's accessibility support, so screen readers, zoom (View menu), high contrast and the operating system's reduced-motion setting reach the HAX dashboard and editor the same way they do in a browser.
- The Legal Notices window is a plain HTML page with a document language and title.

## Known Limitations

- **There are no automated accessibility tests in this repository.** The dashboard and editor are tested where they are built (see above); the app shell is not.
- **The menu bar is hidden on Windows and Linux** until you press Alt.
- **Screen reader testing of the installed app has not been recorded.** Reports from NVDA, JAWS, VoiceOver and Orca users are welcome.

## How You Can Help

- **Report accessibility issues** in the unified issue queue, [haxtheweb/issues](https://github.com/haxtheweb/issues/issues), or email hax@psu.edu.
- **Test with assistive technologies** (screen readers, keyboard-only navigation, high contrast modes) and share what you find.

## Support

- **Email:** hax@psu.edu
- **GitHub:** [haxtheweb/issues](https://github.com/haxtheweb/issues)
- **Discord:** [discord.gg/aCGxmRHEJP](https://discord.gg/aCGxmRHEJP) (#accessibility channel)

---

_This statement reflects our current status and commitments. As an evolving open source project, we acknowledge there is always more work to do to ensure accessibility for all users._
