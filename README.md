# Martin Mamadise - Portfolio Website

Personal portfolio website for Martin Mamadise, a Computer Engineering graduate (BEng Tech Honours Student) at the Cape Peninsula University of Technology (CPUT), Cape Town. Built to showcase embedded systems, IoT, and software engineering projects.

**Live site:** https://martinmamadise.github.io/martin-portfolio/
**LinkedIn:** [linkedin.com/in/martinmamadise](https://www.linkedin.com/in/martin-mamadise-5642b6324)
**GitHub:** [github.com/martinmamadise](https://github.com/martinmamadise)

---

## Features

- **Single-page layout** with smooth scroll navigation and active link highlighting
- **Responsive design** — mobile-friendly with collapsible nav
- **Contact form** powered by [EmailJS](https://www.emailjs.com/) — no backend required
- **Scroll-to-top button** that appears after scrolling 400px
- **Sections:** Hero · About · Skills · Projects · Certificates · Contact

---

## Project Structure

```
portfolio/
├── index.html                  # Main HTML
├── style.css                   # All styles (CSS variables, responsive)
├── script.js                   # Nav highlighting, scroll button, contact form
├── Martin_Mamadise_CV.pdf      # Downloadable CV
└── certificates/               # PDF certificates linked in the Certificates section
    ├── CertificateOfCompletion_Learning IP Addressing.pdf
    ├── CertificateOfCompletion_Cisco Networking Foundations IP Addressing.pdf
    ├── CertificateOfCompletion_Practical SoftwareDefined Networking ...pdf
    └── CertificateOfCompletion_Git Essential Training.pdf
```

---

## Tech Stack

| Layer     | Technology                                   |
|---        |---                                           |
| Markup    | HTML5 (semantic)                             |
| Styling   | CSS3 (custom properties, CSS Grid, Flexbox)  |
| Scripting | Vanilla JavaScript (ES6+)                    |
| Email     | EmailJS Browser SDK v4                       |
| Fonts     | IBM Plex Sans · IBM Plex Mono (Google Fonts) |

---

## Setup & Local Development

No build tools or dependencies required. Just open the project in a browser.

```bash
git clone https://github.com/martinmamadise/<repo-name>.git
cd <repo-name>

# Option 1 — open directly
open index.html

# Option 2 — use a local dev server (recommended to avoid CORS issues with PDFs)
npx serve .
# or
python3 -m http.server 8000
```

---

## EmailJS Configuration

The contact form uses EmailJS to send emails without a backend. To configure it for your own account:

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a **Service** and note the **Service ID**
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — message subject
   - `{{message}}` — message body
4. Note your **Template ID** and **Public Key**
5. Update these values in `script.js`:

```js
emailjs.init('YOUR_PUBLIC_KEY');

var serviceID  = 'YOUR_SERVICE_ID';
var templateID = 'YOUR_TEMPLATE_ID';
```

> **Note:** The public key is safe to expose client-side. Do not expose any private keys.

---

## Deployment

This is a static site and can be deployed on any static host:

- **GitHub Pages** — push to a `gh-pages` branch or enable Pages on `main`
- **Netlify** — drag and drop the folder or connect the repo
- **Vercel** — import the repo and deploy with zero config

---

## Sections Overview

| Section          | Description                                                                        |
|---               |---                                                                                 |
| **Hero**         | Name, tagline, availability status, CTA buttons                                    |
| **About**        | Background, goals, key stats                                                       |
| **Skills**       | 10 technical skill domains across embedded systems, networking, software, and data |
| **Projects**     | 3 featured projects with stack breakdown and results                               |
| **Certificates** | 4 LinkedIn Learning certificates (2025–2026)                                       |
| **Contact**      | Contact info + EmailJS-powered contact form                                        |

---

## License

This portfolio is personal and not licensed for reuse. Feel free to use it as inspiration, but please don't copy content or present it as your own.

---

*© 2026 Martin Mamadise · BEng Tech Honours · CPUT · Cape Town*