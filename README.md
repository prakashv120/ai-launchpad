# AI LaunchPad 🚀
### Growth Campaign Web Application for NxtWave Growth Intern Assignment

**AI LaunchPad** is a modern, responsive, high-converting web application designed for a 7-day student growth marketing campaign with a target of **500 final-year engineering student registrations** for the free online workshop: **“Build Your First AI Project in 60 Minutes”** within a **₹2,000 budget**.

Built using **Next.js (App Router)**, **JavaScript (ES6+)**, **React**, and **Tailwind CSS**, this prototype showcases both strong frontend engineering craftsmanship and growth marketing strategy.

---

## 📋 Campaign Architecture & Strategy

| Parameter | Specification | Notes |
| :--- | :--- | :--- |
| **Workshop Name** | Build Your First AI Project in 60 Minutes | Hands-on, beginner-friendly online session |
| **Campaign Goal** | 500 Student Registrations | Proposed planning target |
| **Duration** | 7 Days | Rapid campus distribution sprint |
| **Total Budget** | ₹2,000 INR | Target CPA: ₹4.00 per registration |
| **Target Audience** | Final-Year Engineering Students in India | Placement & project portfolio focused |
| **Core Value Prop** | Overcome AI hesitation and build a real project in 60 min | Zero complex math, practical resume assets |

### Proposed Channel Targets (500 Total Registrations)
- **Student Ambassadors (40% / 200 registrations):** 15 vetted campus leaders across colleges driving batch WhatsApp groups.
- **College Communities (20% / 100 registrations):** Departmental Discord servers, Telegram student rooms, and coding clubs.
- **Project-Sharing Messages (15% / 75 registrations):** Peer virality generated from the interactive Project Matchmaker tool.
- **Campus Social Posts (15% / 75 registrations):** Student LinkedIn posts and Instagram campus page announcements.
- **Follow-up Reminders (10% / 50 registrations):** 24-hour urgency broadcast sequence for warm leads.

### ₹2,000 Lean Budget Allocation
- **Ambassador Micro-Incentives (₹1,200 / 60%):** Milestone rewards for top 4 campus chapters (₹300 each upon batch milestones).
- **Community Visual Assets (₹400 / 20%):** High-converting mobile infographics for WhatsApp statuses and Telegram groups.
- **Targeted Student Network Outreach (₹400 / 20%):** Targeted outreach to seed the initial 50 student registrations.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** JavaScript (`.js`, `.jsx`) — *No TypeScript used as requested*
- **Styling:** Tailwind CSS with custom dark navy palette, neon accents, and responsive typography
- **Icons:** `lucide-react` (clean, modern SVG icons)
- **State Management:** React Local State (`useState`, `useEffect`)
- **Deployment Platform:** Vercel (zero-config static & serverless compatibility)

---

## 📂 Project Structure

```text
ai-launchpad/
├── app/
│   ├── globals.css              # Custom styling, scrollbars, glowing meshes
│   ├── layout.js                # App root layout, SEO metadata & viewport
│   └── page.js                  # Main landing page assembling all 9 sections
├── src/
│   ├── components/
│   │   ├── Navbar.js            # Sticky brand navigation + mobile drawer
│   │   ├── Hero.js              # Headline, key benefits & interactive blueprint
│   │   ├── HowItWorks.js        # 3-step structured student journey
│   │   ├── ProjectMatchmaker.js # Interactive 3-question recommender
│   │   ├── Benefits.js          # 5 verified workshop benefits (no false claims)
│   │   ├── GrowthPlan.js        # 500 target breakdown, ₹2k budget & 7-day timeline
│   │   ├── ShareMessageGenerator.js # Customized peer invite generator
│   │   ├── ReferralDemo.js      # Campus ambassador UTM link generator
│   │   ├── RegistrationCTA.js   # High-converting bottom call to action
│   │   ├── RegistrationModal.js # Transparent registration routing modal
│   │   └── Footer.js            # Footer with transparency disclaimers
│   ├── config/
│   │   └── campaignConfig.js    # Single central config for registration URL & targets
│   └── data/
│       └── projectsData.js      # Curated database for the 4 core student projects
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind theme colors, gradients, and animations
├── postcss.config.js            # PostCSS configuration
├── jsconfig.json                # Module path alias resolver (@/*)
├── package.json                 # Project dependencies and build scripts
└── README.md                    # Project documentation & evaluation guide
```

---

## 🚀 Running Locally

### Prerequisites
- Node.js (v18.17.0 or later, v20+ recommended)
- npm or yarn

### Quick Start
1. **Navigate to the project folder:**
   ```bash
   cd ai-launchpad
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open in your browser:**
   Visit [http://localhost:3000](http://localhost:3000)

5. **Build and test for production:**
   ```bash
   npm run build
   npm run start
   ```

---

## 🌐 Deploying to Vercel (1-Click Ready)

The project is structured specifically for zero-configuration deployment on **Vercel**:

### Method A: Deploy via GitHub (Recommended)
1. Push this project folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: AI LaunchPad growth campaign web app"
   git remote add origin https://github.com/YOUR_USERNAME/ai-launchpad.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click **"Add New..."** > **"Project"**.
4. Import your `ai-launchpad` repository.
5. Vercel automatically detects **Next.js**. Leave the default build command (`next build`) and output directory (`.next`).
6. Click **Deploy**. Your app will be live with a free `*.vercel.app` domain in less than 60 seconds!

### Method B: Deploy via Vercel CLI
```bash
npm install -g vercel
vercel
```
Follow the interactive prompts to deploy directly from your terminal.

---

## 🔗 Connecting to a Real Registration Form

The project maintains registration URL integrity by centralizing the destination link in **one documented constant**:

1. Open `src/config/campaignConfig.js`.
2. Locate the `CAMPAIGN_CONFIG` object:
   ```javascript
   export const CAMPAIGN_CONFIG = {
     // Replace this placeholder with your live Google Form / Luma / Typeform link:
     REGISTRATION_URL: "https://forms.gle/your-actual-form-id",
     IS_PLACEHOLDER_URL: false, // Set to false once your real form is active
     ...
   };
   ```
3. Save the file. All **"Register Now"**, **"Register for Free"**, and matching modal buttons throughout the website will instantly point to your real live form.

---

## 🧪 Submission Verification Checklist

Before submitting your internship assignment, verify all interactive elements:

- [x] **Navigation Bar:** Logo, smooth-scroll links, and "Register Now" button function on desktop & mobile.
- [x] **Hero Section:** Displays the exact specified headline, supporting text, and the 3 highlights without invented metrics.
- [x] **Project Matchmaker:**
  - Selecting different interests dynamically recommends one of the 4 core projects:
    - *Productivity & studying* → **AI Study Sprint Planner**
    - *Career & resumes* → **AI Resume Bullet Coach**
    - *Campus life* → **Campus Event FAQ Assistant**
    - *Data & analytics* → **Student Survey Insight Tool**
  - Adapts suggested tech stack based on **Python**, **JavaScript**, or **No preference**.
  - Displays 3 achievable milestones for each project.
  - "Share My Project" pre-fills the project name into the Share Message Generator.
- [x] **Workshop Benefits:** Features 5 honest benefits without fake job guarantees or certificates.
- [x] **Growth Plan:** Highlights 500 planning target breakdown across 5 channels, ₹2,000 budget table, and 7-day timeline. Explicitly labeled as proposed targets.
- [x] **Share-Message Generator:** Allows one-click copy and instant sharing to WhatsApp, LinkedIn, or Discord with dynamic project references.
- [x] **Referral Demo:** Generates campus ambassador links with UTM parameters, with clear prototype disclaimers.
- [x] **Registration CTA & Modal:** Directs to the configurable URL and provides instructions on updating it.
- [x] **Transparency & Integrity:** Clearly discloses prototype nature; no fake testimonials, fabricated reviews, or phantom API calls.
- [x] **Production Build:** Passes `npm run build` with zero errors.
