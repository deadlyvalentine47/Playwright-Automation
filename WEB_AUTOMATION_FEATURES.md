# Web Automation Features & Example Websites

This document lists common and advanced web features that can be automated using Playwright (or similar tools), along with a suggested real-world website for each feature.

| Feature Category                | Description / Examples                                      | Suggested Website              |
|---------------------------------|------------------------------------------------------------|-------------------------------|
| Authentication/Login            | Login forms, social logins, 2FA                            | https://github.com/login      |
| Registration/Signup             | User registration, email verification                      | https://www.facebook.com      |
| Search Functionality            | Search bars, filters, auto-suggestions                     | https://www.amazon.com        |
| Navigation/Menu                 | Menus, navigation bars, breadcrumbs                        | https://www.wikipedia.org     |
| Forms & Validation              | Input fields, dropdowns, validation messages               | https://www.w3schools.com/html/html_forms.asp |
| File Upload/Download            | Uploading/downloading files, drag-and-drop                 | https://www.dropbox.com       |
| Shopping Cart & Checkout        | Add to cart, remove, checkout, payment flows               | https://www.flipkart.com      |
| Dynamic Content (AJAX/SPA)      | Infinite scroll, lazy loading, dynamic updates             | https://twitter.com           |
| Modal/Popup Handling            | Modals, popups, alerts, confirmations                      | https://getbootstrap.com/docs/4.0/components/modal/ |
| Table/Data Grid Operations      | Sorting, filtering, pagination, editing                    | https://datatables.net/examples/data_sources/ajax.html |
| Multi-language/Localization     | Language switchers, localized content                      | https://www.booking.com       |
| Responsive Design/Viewport      | Mobile/desktop layouts, hamburger menus                    | https://www.apple.com         |
| Accessibility Testing           | ARIA roles, keyboard navigation, screen reader support     | https://www.a11yproject.com/  |
| Performance/Load Testing        | Page load, resource timing, stress tests                   | https://www.webpagetest.org/  |
| API Integration/Mocking         | API calls, mocking responses, error handling               | https://reqres.in/            |
| Payment Gateway                 | Payment forms, 3D Secure, error handling                   | https://www.razorpay.com      |
| Social Sharing/Widgets          | Share buttons, embedded widgets                            | https://www.nytimes.com       |
| Notifications/Toasts            | In-app notifications, browser notifications                | https://www.linkedin.com      |
| Drag and Drop                   | Drag-and-drop UI elements                                  | https://jqueryui.com/droppable/|
| Calendar/Date Picker            | Date selection, range pickers                              | https://www.makemytrip.com    |
| Charts/Graphs                   | Data visualization, tooltips, interactivity                | https://www.tradingview.com   |
| File Preview/Media Playback     | Image, video, audio preview                                | https://www.youtube.com       |
| User Profile/Settings           | Profile update, avatar upload, preferences                 | https://www.instagram.com     |
| Admin Dashboard                 | CRUD operations, analytics, role management                | https://demo.opencart.com/admin/ |
| Email/Inbox Automation          | Reading, sending, deleting emails                          | https://mail.google.com       |
| Map/Geolocation                 | Map interaction, location search, markers                  | https://www.google.com/maps   |
| Captcha Handling                | Captcha detection, bypass (where legal)                    | https://www.google.com/recaptcha |
| Multi-factor Authentication     | OTP, authenticator apps, SMS/email codes                   | https://accounts.google.com   |
| WebSockets/Realtime Updates     | Live chat, notifications, stock tickers                    | https://www.tradingview.com   |
| PDF Generation/Download         | Exporting data to PDF, downloading reports                 | https://www.pdfescape.com     |
| Print Functionality             | Print dialogs, print preview                               | https://www.printfriendly.com |
| Browser Storage                 | LocalStorage, SessionStorage, IndexedDB                    | https://www.localforage.com/demo/ |
| Cookie Management               | Setting, reading, deleting cookies                         | https://www.cookiebot.com/en/ |
| Theme/Dark Mode Toggle          | Switching between light/dark themes                        | https://twitter.com           |
| Custom Context Menus            | Right-click menus, custom actions                          | https://www.w3schools.com/howto/howto_js_context_menu.asp |
| Animation/Transition Testing    | CSS/JS animations, transitions, timing                     | https://animate.style/        |
| Clipboard Operations            | Copy/paste, cut, clipboard API                             | https://clipboardjs.com/      |
| Voice/Audio Input               | Speech-to-text, audio recording                            | https://dictation.io/speech   |
| Video Conferencing              | Video calls, camera/mic permissions                        | https://meet.google.com       |
| Push Notifications              | Browser push, service workers                              | https://webpushdemo.azurewebsites.net/ |
| Progressive Web App (PWA)       | Offline support, install prompts, service workers          | https://www.tinder.com        |
| QR Code Generation/Scanning     | QR code display, scanning via webcam                       | https://webqr.com/            |
| Virtual Scrolling               | Large lists, lazy rendering                                | https://infinite-scroll.com/demo/full-page/ |
| Split Pane/Resizable Layouts    | Drag to resize panels, split views                         | https://www.splitpanes.com/   |
| Multi-tab/Window Handling       | Opening, switching, closing tabs/windows                   | https://www.selenium.dev/selenium/web/multiple_windows.html |
| Download Progress/Status Bars   | Progress indicators for downloads/uploads                  | https://www.speedtest.net/    |
| Gamification Elements           | Badges, points, leaderboards                               | https://www.duolingo.com      |
| E-signature/Canvas Drawing      | Drawing, signing on canvas                                 | https://www.signaturely.com/online-signature/ |
| SVG/Canvas Interactions         | Drawing, zooming, panning                                  | https://www.canva.com         |
| Data Export/Import              | CSV, Excel, JSON import/export                             | https://www.convertcsv.com/   |
| Onboarding/Tour Guides          | Guided tours, tooltips, walkthroughs                       | https://introjs.com/          |
| A/B Testing/Feature Flags       | Feature toggles, experiment groups                         | https://www.optimizely.com    |
| Error/Exception Handling        | Error pages, error modals, logging                         | https://www.github.com/404    |
| Rate Limiting/Throttling        | API rate limits, UI feedback                               | https://developer.twitter.com/en/docs/twitter-api/rate-limits |
| SSO/Enterprise Login            | SAML, OAuth, enterprise login flows                        | https://login.microsoftonline.com |
| Mobile Web Features             | Touch events, swipe, pinch-to-zoom                         | https://m.snapdeal.com        |
| Ad/Popup Blocker Detection      | Detecting ad blockers, anti-popup logic                    | https://www.forbes.com        |
| Real-time Collaboration         | Shared editing, presence indicators                        | https://docs.google.com/spreadsheets |
| Custom Fonts/Icon Fonts         | Font loading, icon rendering                               | https://fontawesome.com/icons |
| WebAssembly Features            | WASM-powered apps, performance                             | https://webassembly.org/demo/ |
| Blockchain/Web3 Interactions    | Wallet connect, smart contract UI                          | https://app.uniswap.org       |
| Biometric Authentication        | Fingerprint, face ID, WebAuthn                             | https://webauthn.io/          |
| Accessibility Auditing Tools    | Automated a11y scans, color contrast                       | https://wave.webaim.org/      |
| Internationalization (i18n)     | RTL support, currency/date formatting                      | https://www.airbnb.com        |
| Custom File Parsers             | Parsing XML, JSON, custom formats                          | https://jsonformatter.org/    |
| Scheduling/Booking Systems      | Calendar booking, time slot selection                      | https://calendly.com/         |
| Loyalty/Rewards Programs        | Points, rewards, redemption flows                          | https://www.starbucks.com/rewards |
| User Feedback/Surveys           | Feedback forms, NPS, star ratings                          | https://www.surveymonkey.com/ |
| Live Streaming                  | Video streaming, chat, reactions                           | https://www.twitch.tv         |
| AI/Chatbot Integration          | Conversational UI, bot responses                           | https://chat.openai.com       |
| Custom Keyboard Shortcuts       | Hotkeys, shortcut overlays                                 | https://www.slack.com         |
| Data Masking/Privacy Features   | Masking sensitive info, GDPR popups                        | https://www.cookiebot.com/en/ |
| Multi-step Workflows/Wizards    | Step-by-step forms, progress tracking                      | https://www.turbotax.com      |
| Document Collaboration/Editing  | Real-time doc editing, comments                            | https://www.notion.so         |
| Custom Error Pages              | 404, 500, maintenance pages                                | https://www.github.com/404    |
| Interactive Maps/Geofencing     | Drawing on maps, geofencing, directions                    | https://www.openstreetmap.org |
| Custom Animations/Transitions   | Lottie, SVG, CSS animations                                | https://lottiefiles.com/      |
| WebGL/3D Graphics               | 3D rendering, interactive models                           | https://threejs.org/examples/ |
| Payment Split/Group Payments    | Splitting bills, group payments                            | https://splitwise.com         |
| Custom Analytics/Tracking       | Event tracking, custom dashboards                          | https://analytics.google.com  |
| Custom Tooltips/Popovers        | Interactive tooltips, popovers                             | https://popper.js.org/        |
| Custom Scrollbars/Scroll Effects| Styled scrollbars, scroll-based animations                 | https://www.nytimes.com/interactive/2020/04/03/upshot/coronavirus-maps.html |
| Custom Loading Spinners         | Loading indicators, skeleton screens                       | https://www.nytimes.com       |
| Custom Audio/Video Players      | Custom controls, playlists                                 | https://www.soundcloud.com    |
| Custom Avatar/Gravatar          | Avatar upload, gravatar integration                        | https://en.gravatar.com/      |
| Custom Rating/Review Systems    | Star ratings, review forms                                 | https://www.imdb.com          |
| Custom Breadcrumbs              | Navigation breadcrumbs, dynamic paths                      | https://www.amazon.com        |
| Custom Accordions/Expanders     | Expand/collapse sections                                   | https://getbootstrap.com/docs/4.0/components/collapse/ |
| Custom Tabs/Tab Navigation      | Tabbed interfaces, dynamic tabs                            | https://material-ui.com/components/tabs/ |
| Custom Carousels/Sliders        | Image sliders, carousels                                   | https://www.slickcarousel.com/|

---
Feel free to expand this list with more features or suggest additional websites for practice! 