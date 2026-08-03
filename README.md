# Instagram Web UI Clone (2026 Edition) 📸✨

> A premium, ultra-modern, production-ready **Instagram Web UI Clone** built using only **pure HTML5, CSS3, and Vanilla JavaScript (ES6+)**. 

This project accurately replicates the latest desktop and mobile web experience of Instagram, featuring smooth 60 FPS micro-interactions, dark/light theme engine, glassmorphism UI, story playback, double-click heart animations, live search filtering, messaging threads, vertical reels, and responsive layouts across all viewports (`360px` to `4K`).

---

## 🚀 Live Demo & Repository
- **Live Demo**: 
- **GitHub Repository**: https://github.com/VaraPrasad-225/InstagramUIClone

---

## 🌟 Key Features & Highlights

### 1. 📱 Responsive Layout & Navigation
- **Fixed Left Sidebar**: Logo, search, explore, reels, messages, notifications, create post, profile, and theme toggle.
- **Mobile Collapsible Bar**: Automatically converts into a bottom bar on screens smaller than `768px`.
- **Active State Highlights**: Dynamic item highlights and smooth hover transitions.

### 2. 📖 Stories Bar & Fullscreen Story Viewer
- **20 Demo Users**: Realistic avatars with unseen gradient borders and gray seen borders.
- **Interactive Story Viewer**: Auto-advancing timed progress bar (4s per story), tap to advance/rewind, pause timer on click, keyboard arrow navigation.

### 3. 📰 Realistic Post Feed
- **15 Realistic Posts**: Complete with user avatars, location tags, verified badges, timestamp formatting, multi-line captions, and hashtags.
- **Double-Click Heart Explosion**: Custom keyframe animation on post media double-click/double-tap.
- **Interactive Actions**: Like toggle with counter animation, save/bookmark collection toggle, instant comment posting.

### 4. 👤 Profile Experience (`profile.html`)
- **Header Overview**: Avatar hover ring, verified checkmark, posts count (48), followers (14.2k), following (420), bio links.
- **Story Highlights**: Custom highlight bubbles (Tokyo, Code, Travel, UI/UX, Eats).
- **Tab Navigation**: Grid tabs switching between **Posts**, **Saved**, and **Tagged** content with hover overlays.

### 5. 🔍 Explore Page (`explore.html`)
- **Masonry/Pinterest Grid**: Multi-span grid items for Reels and square posts with badge indicators.
- **Hover Overlays**: Instant view of like and comment metrics.

### 6. 🎬 Reels Experience (`reels.html`)
- **Vertical Viewport Snapping**: TikTok/Reels style vertical card scroll.
- **Spinning Vinyl Disc**: Animated vinyl record spin keyframe.
- **Action Column**: Like counters, comment count, share, bookmark, and follow button.

### 7. 💬 Direct Messaging (`messages.html`)
- **Split Chat Interface**: Active thread list with online indicators + real-time chat bubble area.
- **Interactive Chat Input**: Instant message sending, typing indicator dots animation, voice & image upload action triggers.

### 8. 🔔 Notifications & Live Search Drawers
- **Search Drawer**: Slide-out panel with live instant text filtering, clear query button, and recent search history management.
- **Notifications Drawer & Page**: Categorized into Today and This Week with quick Follow/Following toggles.

### 9. 🌓 Dark / Light Theme Engine
- Default ultra-dark Instagram aesthetic (`#000000` background, `#111111` sidebar, `#1A1A1A` cards, `#262626` borders).
- Instant theme toggle with state persisted in `localStorage`.

### 10. ⚡ Skeletons & Performance
- Skeleton loaders for Stories, Feed, Explore, and Profile items before media loads.
- Native lazy-loading (`loading="lazy"`).
- Keyboard accessibility (`:focus-visible`, `aria-label` tags).

---

## 🛠️ Folder Structure

```
instagram-ui-clone/
│
├── index.html            # Main Feed + Stories + Right Sidebar + Modals + Search/Notif Drawers
├── profile.html          # User Profile, Highlights, Bio, Grid Tabs
├── explore.html          # Masonry Explore Grid & Hover Overlays
├── reels.html            # Vertical Snap Reels Experience
├── messages.html         # Direct Messaging Chat Split View
├── notifications.html   # Dedicated Notifications Feed View
│
├── css/
│   ├── style.css         # Design System, CSS Variables, Typography, Components & Modals
│   ├── responsive.css    # Responsive Breakpoints (360px, 480px, 768px, 1024px, 1440px, 4K)
│   └── animations.css    # Micro-interactions, Heart Bounce, Skeleton Shimmer, Vinyl Spin
│
├── js/
│   ├── script.js         # Core Controller, Feed Generator, Double-click Heart, Toast System
│   ├── theme.js          # Dark / Light Theme Toggle & localStorage state
│   ├── stories.js        # Stories Bar & Fullscreen timed Story Viewer Modal
│   └── search.js         # Search Drawer & Instant Live Filter Engine
│
├── assets/               # Local Media Fallbacks & Brand Icons
│   ├── images/
│   ├── avatars/
│   ├── logos/
│   └── icons/
│
└── README.md             # Project Documentation & Disclosure
```

---

## 💻 Technologies Used

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`), ARIA attributes.
- **CSS3**: Custom CSS Variables, Flexbox, CSS Grid, Glassmorphism, Keyframes, Custom Scrollbars.
- **Vanilla JavaScript (ES6+)**: DOM Manipulation, Event Delegation, Timers, LocalStorage API, ES Modules pattern.
- **Font Awesome 6**: Vector icons for actions and UI navigation.
- **Google Fonts**: Inter font family.

---

## ⚙️ Installation & Usage

No build tools, npm packages, or framework CLI tools are required.

### Method 1: Direct File Execution
1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/instagram-ui-clone.git
   ```
2. Open `index.html` directly in any web browser (Chrome, Edge, Safari, Firefox).

### Method 2: Local Web Server (VS Code Live Server)
1. Open the project folder in VS Code.
2. Click **Go Live** via the Live Server extension.
3. Open `http://127.0.0.1:5500` in your browser.

---

## 🖼️ Screenshots

| Home Feed & Stories | Profile Page |
| :---: | :---: |
| ![Home Feed](assets/images/screenshot_feed.png) | ![Profile View](assets/images/screenshot_profile.png) |

| Explore Masonry | Direct Messages |
| :---: | :---: |
| ![Explore Grid](assets/images/screenshot_explore.png) | ![Messages UI](assets/images/screenshot_messages.png) |

---

## 📝 AI Usage Disclosure (Required by TAP Academy)

> **Disclosure Statement**:
> This project was developed as part of frontend web development practice. Artificial Intelligence (AI) assistance (Google Antigravity / Gemini) was utilized during the development workflow for:
> 1. Formulating clean architectural structure and CSS design system variables.
> 2. Generating realistic demo dataset structures for 15 feed posts, 20 story users, and messaging threads.
> 3. Designing keyframe animation curves for the double-click heart bounce and timed story viewer progress bars.
> 4. Auditing cross-browser responsiveness and accessibility standards.
> 
> All code was thoroughly validated, tested, and customized without external libraries or frameworks to ensure complete compliance with Vanilla HTML/CSS/JS best practices.

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for details.
