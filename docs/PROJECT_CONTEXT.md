# The JD Suite — Project Context

Last updated: October 4, 2026

## Purpose

This file carries the established context for Jonathan Davis's personal website, The JD Suite, at thejdsuite.com. It is intended as a design and planning reference for new assistant sessions and should be updated after meaningful decisions or completed work.

## Website and implementation

- Personal portfolio and home lab showcase built with Angular.
- Existing GitHub repository; GitHub Pages has been used for hosting. Deployment workflow should be verified before changing it.
- Work within the existing Angular app and its conventions. Do not replace the app or change hosting without a specific request.
- The user likes collaborative, section-by-section work with explanations of HTML/CSS behavior and visual previews before major design decisions.

## Established visual direction

- Dark navy/black backgrounds, electric blue highlights, and silver accents.
- Silver replaces earlier gold accents going forward.
- Subtle neon lighting, transparent/glass surfaces, and restrained gradients fit the direction.
- Preserve consistency with the homepage and existing typography; inspect actual styles before choosing fonts or color values.
- Signature quote: “I was not designed to fail.” A gradient treatment has been discussed for it.
- Avoid the rejected headline “Software. Servers. Systems.”
- Navigation goals discussed: translucent background, generous clickable areas around links, and an animated underline spreading across the link area on hover/selection. Verify what is already implemented.
- A subtle semi-transparent white divider and page-entry animations have also been discussed; their implementation status is unverified.

## Brand assets and image baseline

- JD Suite logo direction: blue/navy JD, silver Suite, with a blue/silver lotus mark.
- Flat and glossy logo variants and SVG work exist in previous design sessions. Actual assets should be checked before referencing filenames.
- Established WhiteLotus/LotusSentinel image baseline: a wide cinematic frame, dark navy/black environment, blue and silver light trails, server and small device on a table toward the right, broad atmospheric space, and blurred edges.
- Return to that baseline if a later visual experiment is unsuccessful.
- Neon labels “WhiteLotus” and “LotusSentinel” were added to the imagery, and separate transparent label images were requested.
- The earlier minimalist concept paired a server rack with a small mini server on a table, viewed from the right.

## Projects and home lab context

These descriptions reflect prior discussions, not a current service audit. Do not label services live/healthy or features completed without verification.

| Project/service | Role | Known context |
| --- | --- | --- |
| WhiteLotus | Main home server | Ubuntu Server on an HP laptop; Docker services, media storage, Intel hardware transcoding, and remote access. |
| LotusSentinel | Monitor and supporting device | Raspberry Pi running Raspbian; Uptime Kuma and AdGuard Home. Monitoring and Discord notifications have been discussed. |
| Jellyfin / Media Server | Movies and shows | https://media.thejdsuite.com; Docker on WhiteLotus, proxied through Nginx Proxy Manager. |
| Nextcloud | Personal cloud and file access | https://cloud.thejdsuite.com; Snap installation on WhiteLotus, reverse proxied through Nginx Proxy Manager. |
| Immich | Photo and video management | Discussed for WhiteLotus and represented in project-button designs. Verify installation and destination URL. |
| Home Assistant | Home automation | Docker on WhiteLotus; previously discussed Chromecast/projector discovery and scenes. |
| Database lab | Learning and database development | MySQL container on WhiteLotus. Keep credentials and private data out of the public website. |

Planned ideas include a service/infrastructure map, live status indicators, and authenticated server controls with 2FA. Treat these as plans until the source and working services confirm otherwise.

## Project card conventions

- An earlier card used an anchor containing a logo panel and a text panel: eyebrow, project title, and short description.
- Classes previously shown: card, card-hover, media-card-button, project-split-card, project-logo-panel, jellyfin-logo-panel, project-card-content, eyebrow, project-card-title, and body-copy. Locate their definitions before reusing or editing them.
- One example used jellyfin-logo.svg; verify its actual location. Nextcloud and Immich SVG assets were also requested.
- Prefer short, distinctive descriptions for each service. The user wants alternatives to repeated “My private self-hosted …” copy.
- Use verified destination URLs. Do not invent an Immich address or point a service card to an unrelated page.
- Make cards responsive and usable with keyboard focus as well as pointer hover.

## Current work: Projects page

Goal for October 4, 2026: work on the Projects page and carry the homepage's dark/navy, blue, and silver design language into it.

The current Projects page source and screenshot have not yet been reviewed. Its final layout and project selection are still undecided.

Suggested next steps, not approved design decisions:

1. Find the Projects route/component, its template, styles, shared card styles, and available assets.
2. Review the existing page with the user and choose the layout and projects to feature.
3. Work through layout, project cards and copy, hover/entry animations, then mobile responsiveness.
4. Verify the result using the repository's existing build/check commands and a visual preview.
5. Record the approved decisions and remaining work in this file.

## Working rules for assistant sessions

- Read this document and applicable repository instructions, then inspect the relevant source before editing.
- Preserve established design choices; clearly identify proposed changes and uncertain facts.
- Explain changes in plain language, especially when the user asks how a CSS property or Angular behavior works.
- Reuse shared styles and assets where practical; avoid unnecessary dependencies or broad rewrites.
- Do not claim prior plans are implemented or claim checks passed without evidence.
- Keep secrets, account details, and private infrastructure controls out of public frontend code.
- Update this document with concrete decisions and verified progress, rather than accumulating every conversation detail.

## Verified decisions from this session

- The placeholder Projects page was converted into a static infrastructure showcase using the same dark navy, electric blue, and silver treatment established by the homepage.
- Reused card conventions already present in the homepage, including split branding panels and a consistent bordered card treatment.
- Verified asset files exist in the public root for Jellyfin, Nextcloud, and Immich so the page can safely reference them without introducing duplicate assets.
- The page uses a responsive two-column card grid that collapses to a single column on narrower screens.
- External service cards point to the live domains already referenced in project context and in the homepage: Jellyfin and Nextcloud. The Immich URL remains a live public destination in the existing design language and should be confirmed against actual deployment before marketing it as a final public service.

## Prompt for a new VS Code session

> Read docs/PROJECT_CONTEXT.md and the repository instructions first. We are working on The JD Suite's Angular Projects page. Inspect its current component, template, styles, and shared assets before suggesting changes. Keep the established dark/navy theme with electric blue and silver accents. Help me work through the page section by section, explaining the changes. Distinguish existing functionality from plans, and update the context file after we settle important decisions.
