# Anuradha Jha - Personal Portfolio Website

A modern, responsive, and visually impressive personal developer portfolio built for **Anuradha Jha**, Computer Science & Engineering (CSE) student and aspiring software developer based in Delhi, India.

---

## 📁 Project Structure

```text
portfolio/
│
├── index.html              # Main HTML structure with semantic sections
├── style.css               # Modern dark-theme styling, typography & responsiveness
├── script.js               # Navigation behavior, scroll spy & contact form logic
│
├── assets/
│   ├── icons/
│   │   └── favicon.svg     # Custom vector favicon (AJ monogram)
│   └── images/
│       └── README.txt      # Guide for future project screenshots & assets
│
└── README.md               # Complete documentation & customization guide
```

---

## 🚀 How to Run the Website Locally

Since this website is built with clean, standards-compliant HTML5, CSS3, and vanilla JavaScript without heavy frameworks or build steps, running it locally is fast and straightforward:

### Method 1: Direct File Open (Easiest)
1. Navigate to the `portfolio` folder on your computer:
   `c:\Users\DELL\Desktop\portfolio`
2. Double-click **`index.html`** or right-click and choose **Open with** -> **Google Chrome** (or Edge, Firefox, Brave, Safari).
3. The portfolio will load immediately in your browser.

### Method 2: Using VS Code Live Server (Recommended for Development)
1. Open the `portfolio` folder in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Right-click on `index.html` and click **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/index.html` with automatic live reloading whenever you save changes.

### Method 3: Using Python Built-in HTTP Server
If you have Python installed, open PowerShell or Terminal in the `portfolio` directory and run:
```powershell
python -m http.server 8000
```
Then open your browser and visit: `http://localhost:8000`

---

## ✏️ How to Edit Your Personal Information Later

All personal information is stored cleanly in semantic elements inside `index.html`. You can open `index.html` in any text editor (VS Code, Notepad, etc.) to make updates:

### 1. Update Name, Subtitle, or Bio
Search for the Hero section (`id="home"`) in `index.html`:
```html
<h1 class="hero-title">
  Hi, I'm <span class="gradient-text">Anuradha Jha</span>
</h1>
<p class="hero-subtitle">
  CSE Student <span class="text-divider">|</span> Aspiring Software Developer
</p>
```

### 2. Update College Name (Education Section)
Search for the Education section (`id="education"`) in `index.html`:
```html
<!-- College Name Placeholder -->
<p class="education-institution">
  College Name — Add Later
</p>
```
Simply replace `"College Name — Add Later"` with your actual institution name (e.g., `Indira Gandhi Delhi Technical University for Women`, `Guru Gobind Singh Indraprastha University`, etc.).

### 3. Update Location or About Me Narrative
Search for the About section (`id="about"`) in `index.html` to modify your story, focus areas, or coursework.

---

## 📂 How to Add or Update Projects Later

### 1. Updating the Featured Project ("AI Study Planner")
When your **AI Study Planner** repository is created or deployed:
1. Open `index.html` and locate the Featured Project card:
   ```html
   <!-- Replace the placeholder with your actual GitHub repository URL -->
   <a href="https://github.com/Anuradhajha07/ai-study-planner" target="_blank" ...>
     GitHub
   </a>
   ```
2. When the project is deployed live:
   Replace the disabled `<button class="btn btn-disabled">Coming Soon</button>` with an active link:
   ```html
   <a href="https://your-deployed-app-url.com" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
     Live Demo
   </a>
   ```
3. Update technologies:
   In the `<div class="tech-tags">` block, add or modify `<span class="tech-pill">TechName</span>`.

### 2. Replacing Placeholder Cards ("Project Coming Soon")
In `index.html` under `id="projects"`, replace one of the placeholder `<article class="project-card placeholder-project">` cards with a full project card:
```html
<article class="project-card">
  <div class="project-card-header">
    <div class="project-badges">
      <span class="badge badge-featured">Web Application</span>
    </div>
  </div>

  <div class="project-card-body">
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">
      Describe what the project does, the problem it solves, and its key features.
    </p>

    <div class="project-tech-wrapper">
      <span class="tech-label">Technologies:</span>
      <div class="tech-tags">
        <span class="tech-pill">HTML</span>
        <span class="tech-pill">CSS</span>
        <span class="tech-pill">JavaScript</span>
      </div>
    </div>
  </div>

  <div class="project-card-footer">
    <a href="https://github.com/Anuradhajha07/your-repo" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-outline">
      GitHub
    </a>
    <a href="https://your-demo-url.com" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
      Live Demo
    </a>
  </div>
</article>
```

---

## 📸 How to Add Instagram Later

In `index.html` under the Contact section (`id="contact"`):
1. Find this block:
   ```html
   <!-- Instagram Placeholder -->
   <div class="contact-item-card item-placeholder">
     <div class="contact-item-icon">...</div>
     <div class="contact-item-content">
       <span class="contact-label">Instagram</span>
       <span class="contact-value">Instagram — Add Later</span>
     </div>
   </div>
   ```
2. Replace it with a clickable link:
   ```html
   <a href="https://instagram.com/your_username" target="_blank" rel="noopener noreferrer" class="contact-item-card">
     <div class="contact-item-icon">
       <!-- keep SVG icon -->
     </div>
     <div class="contact-item-content">
       <span class="contact-label">Instagram</span>
       <span class="contact-value">@your_username</span>
     </div>
   </a>
   ```

---

## 📬 How to Connect the Contact Form to a Backend Later

Currently, the contact form validates input locally and offers a **"Send via Mail App"** direct fallback so you can receive emails immediately with zero setup.

When you want visitors to submit messages directly through your website, you can connect any of the following free services:

### Option A: Using Formspree (Easiest - 2 Minutes)
1. Sign up for a free account at [formspree.io](https://formspree.io).
2. Create a new form and copy your unique Form ID endpoint (e.g., `https://formspree.io/f/xbjnqwez`).
3. In `index.html`, update the `<form>` tag:
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Formspree will forward all form submissions directly to `anuradhajha1303@gmail.com`.

### Option B: Using EmailJS (Send Emails directly from JavaScript)
1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Add your email service (Gmail) and create an email template.
3. Include the EmailJS SDK script tag in `index.html`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
4. In `script.js` inside `initContactForm()`, replace the submit handler with:
   ```javascript
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY')
     .then(() => {
       alert('Message sent successfully!');
       form.reset();
     }, (error) => {
       alert('Failed to send message: ' + JSON.stringify(error));
     });
   ```

### Option C: Using a Custom Node.js / Express or Python Flask API
If you build your own backend API in the future:
```javascript
fetch('https://api.yourdomain.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: nameVal, email: emailVal, message: messageVal })
});
```

---

## 🌐 How to Deploy the Portfolio Later

When you are ready to make your portfolio accessible worldwide, you can deploy it for free using any of these platforms:

### 1. GitHub Pages (Recommended for Students)
1. Push this project to a new repository on your GitHub account (`Anuradhajha07`):
   ```bash
   git init
   git add .
   git commit -m "Initial commit of developer portfolio"
   git branch -M main
   git remote add origin https://github.com/Anuradhajha07/portfolio.git
   git push -u origin main
   ```
2. Go to your repository on GitHub.
3. Click **Settings** > **Pages** (in the left sidebar).
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. Within 1–2 minutes, your website will be live at:
   `https://anuradhajha07.github.io/portfolio/`

### 2. Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **"Add New Project"** and import your `portfolio` repository.
3. Leave default settings and click **Deploy**.
4. Vercel will give you a custom URL (e.g., `anuradhajha-portfolio.vercel.app`) with free SSL and automatic deployments whenever you push to GitHub.

### 3. Netlify
1. Go to [netlify.com](https://www.netlify.com/) and sign up.
2. Either drag-and-drop the `portfolio` folder directly into the Netlify dashboard, or connect your GitHub repository.
3. Your site is deployed in seconds with an instant live link.

---

## 🛡️ Best Practices Followed
- **Zero Heavy Dependencies**: Pure HTML5, modern CSS3, and vanilla JS for instantaneous load times.
- **Accurate & Honest Representation**: Tailored specifically for a CSE student starting freelancing without inflated or misleading claims.
- **Strictly No Fabricated Content**: Contains no fake testimonials, fake client metrics, or fake links.
- **Fully Responsive & Accessible**: Tested across desktop, tablet, and mobile viewport widths with ARIA standards and keyboard navigation support.
- **Dark Theme Aesthetic**: High-contrast, easy on the eyes, and modern developer-oriented design.
