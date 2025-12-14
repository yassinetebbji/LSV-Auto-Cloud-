 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/index.html b/index.html
new file mode 100644
index 0000000000000000000000000000000000000000..6ea41011265122959632fb42ee152180a4651843
--- /dev/null
+++ b/index.html
@@ -0,0 +1,561 @@
+<!DOCTYPE html>
+<html lang="en">
+<head>
+    <meta charset="UTF-8">
+    <meta name="viewport" content="width=device-width, initial-scale=1.0">
+    <title>LSV Auto Cloud | Modern Dealer Websites & Lead Tracking</title>
+    <link rel="preconnect" href="https://fonts.googleapis.com">
+    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
+    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
+    <style>
+        :root {
+            --navy-900: #0b1a2c;
+            --navy-800: #12263c;
+            --navy-700: #1c3452;
+            --orange-500: #ff6b35;
+            --orange-400: #ff8c5a;
+            --slate-100: #e6eaf0;
+            --slate-300: #cdd6e0;
+            --white: #ffffff;
+            --gradient: radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.2), transparent 35%),
+                        radial-gradient(circle at 80% 0%, rgba(255, 140, 90, 0.18), transparent 35%),
+                        linear-gradient(135deg, #0b1a2c 0%, #0f2337 50%, #0b1a2c 100%);
+        }
+
+        * {
+            box-sizing: border-box;
+        }
+
+        body {
+            margin: 0;
+            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
+            background: var(--navy-900);
+            color: var(--slate-100);
+            line-height: 1.6;
+            -webkit-font-smoothing: antialiased;
+        }
+
+        a {
+            color: inherit;
+            text-decoration: none;
+        }
+
+        header {
+            position: sticky;
+            top: 0;
+            z-index: 10;
+            backdrop-filter: blur(10px);
+            background: rgba(11, 26, 44, 0.9);
+            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
+        }
+
+        .nav {
+            max-width: 1180px;
+            margin: 0 auto;
+            padding: 18px 24px;
+            display: flex;
+            align-items: center;
+            justify-content: space-between;
+            gap: 12px;
+        }
+
+        .brand {
+            display: flex;
+            align-items: center;
+            gap: 10px;
+            font-weight: 700;
+            letter-spacing: 0.3px;
+        }
+
+        .brand-mark {
+            width: 36px;
+            height: 36px;
+            border-radius: 10px;
+            background: linear-gradient(135deg, var(--orange-500), var(--orange-400));
+            display: grid;
+            place-items: center;
+            font-weight: 800;
+            color: var(--navy-900);
+            box-shadow: 0 10px 25px rgba(255, 107, 53, 0.4);
+        }
+
+        .nav-links {
+            display: flex;
+            gap: 18px;
+            font-weight: 500;
+            font-size: 14px;
+        }
+
+        .nav-links a {
+            padding: 8px 12px;
+            border-radius: 8px;
+            transition: background 0.2s ease;
+        }
+
+        .nav-links a:hover {
+            background: rgba(255, 255, 255, 0.06);
+        }
+
+        main {
+            background: var(--gradient);
+        }
+
+        section {
+            max-width: 1180px;
+            margin: 0 auto;
+            padding: 80px 24px;
+        }
+
+        .hero {
+            display: grid;
+            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
+            align-items: center;
+            gap: 40px;
+            padding-top: 60px;
+            padding-bottom: 60px;
+        }
+
+        .hero h1 {
+            font-size: clamp(32px, 5vw, 46px);
+            margin: 0 0 18px;
+            line-height: 1.15;
+            letter-spacing: -0.5px;
+        }
+
+        .hero p.lead {
+            font-size: 18px;
+            color: var(--slate-100);
+            margin-bottom: 26px;
+            max-width: 640px;
+        }
+
+        .badge-row {
+            display: flex;
+            gap: 10px;
+            flex-wrap: wrap;
+            margin-bottom: 18px;
+        }
+
+        .badge {
+            padding: 8px 12px;
+            border-radius: 999px;
+            background: rgba(255, 255, 255, 0.06);
+            border: 1px solid rgba(255, 255, 255, 0.08);
+            font-size: 13px;
+            color: var(--slate-100);
+        }
+
+        .cta-group {
+            display: flex;
+            flex-wrap: wrap;
+            gap: 14px;
+            margin-top: 6px;
+        }
+
+        .btn {
+            padding: 14px 18px;
+            border-radius: 10px;
+            font-weight: 600;
+            font-size: 15px;
+            display: inline-flex;
+            align-items: center;
+            gap: 8px;
+            transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
+        }
+
+        .btn-primary {
+            background: linear-gradient(135deg, var(--orange-500), var(--orange-400));
+            color: var(--navy-900);
+            box-shadow: 0 12px 25px rgba(255, 107, 53, 0.35);
+        }
+
+        .btn-primary:hover { transform: translateY(-1px); }
+
+        .btn-secondary {
+            border: 1px solid rgba(255, 255, 255, 0.14);
+            color: var(--slate-100);
+            background: rgba(255, 255, 255, 0.04);
+        }
+
+        .btn-secondary:hover { transform: translateY(-1px); }
+
+        .hero-visual {
+            position: relative;
+            background: linear-gradient(135deg, rgba(255, 107, 53, 0.08), rgba(255, 255, 255, 0.03));
+            border: 1px solid rgba(255, 255, 255, 0.08);
+            border-radius: 18px;
+            padding: 28px;
+            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
+            min-height: 320px;
+            display: grid;
+            place-items: center;
+            overflow: hidden;
+        }
+
+        .hero-visual::after {
+            content: "";
+            position: absolute;
+            inset: 20px;
+            border-radius: 14px;
+            border: 1px dashed rgba(255, 255, 255, 0.12);
+        }
+
+        .hero-visual span {
+            z-index: 1;
+            color: var(--slate-300);
+            font-weight: 600;
+            letter-spacing: 0.6px;
+            text-transform: uppercase;
+        }
+
+        .section-header {
+            max-width: 720px;
+            margin-bottom: 42px;
+        }
+
+        .section-header h2 {
+            margin: 0 0 10px;
+            font-size: clamp(26px, 4vw, 34px);
+            letter-spacing: -0.2px;
+        }
+
+        .section-header p {
+            margin: 0;
+            color: var(--slate-300);
+        }
+
+        .pill-grid {
+            display: grid;
+            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
+            gap: 18px;
+        }
+
+        .pill {
+            background: rgba(255, 255, 255, 0.05);
+            border: 1px solid rgba(255, 255, 255, 0.08);
+            border-radius: 14px;
+            padding: 18px;
+            display: flex;
+            gap: 12px;
+            align-items: flex-start;
+        }
+
+        .pill .icon {
+            width: 38px;
+            height: 38px;
+            border-radius: 12px;
+            background: rgba(255, 107, 53, 0.15);
+            color: var(--orange-400);
+            display: grid;
+            place-items: center;
+            font-weight: 700;
+        }
+
+        .pill h3 {
+            margin: 0 0 6px;
+            font-size: 18px;
+        }
+
+        .pill p {
+            margin: 0;
+            color: var(--slate-300);
+            font-size: 14px;
+        }
+
+        .card-grid {
+            display: grid;
+            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
+            gap: 20px;
+        }
+
+        .card {
+            background: rgba(255, 255, 255, 0.04);
+            border: 1px solid rgba(255, 255, 255, 0.08);
+            border-radius: 16px;
+            padding: 20px;
+            position: relative;
+            overflow: hidden;
+        }
+
+        .card::before {
+            content: "";
+            position: absolute;
+            inset: 0;
+            background: radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.18), transparent 35%);
+            opacity: 0.5;
+            pointer-events: none;
+        }
+
+        .card h3 {
+            margin: 0 0 8px;
+            font-size: 18px;
+        }
+
+        .card p {
+            margin: 0;
+            color: var(--slate-300);
+            font-size: 14px;
+        }
+
+        .list {
+            display: grid;
+            gap: 12px;
+            margin: 0;
+            padding: 0;
+            list-style: none;
+        }
+
+        .list li {
+            display: flex;
+            gap: 10px;
+            align-items: flex-start;
+            color: var(--slate-100);
+        }
+
+        .list li span {
+            color: var(--orange-400);
+            font-weight: 700;
+        }
+
+        .about {
+            display: grid;
+            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
+            gap: 24px;
+            align-items: center;
+        }
+
+        .about .panel {
+            background: rgba(255, 255, 255, 0.04);
+            border: 1px solid rgba(255, 255, 255, 0.08);
+            border-radius: 16px;
+            padding: 20px;
+            color: var(--slate-100);
+        }
+
+        .contact-form {
+            background: rgba(255, 255, 255, 0.04);
+            border: 1px solid rgba(255, 255, 255, 0.08);
+            border-radius: 18px;
+            padding: 20px;
+            max-width: 540px;
+        }
+
+        .contact-form form {
+            display: grid;
+            gap: 12px;
+        }
+
+        .contact-form label {
+            font-weight: 600;
+            font-size: 14px;
+        }
+
+        .contact-form input,
+        .contact-form textarea {
+            width: 100%;
+            padding: 12px;
+            border-radius: 10px;
+            border: 1px solid rgba(255, 255, 255, 0.12);
+            background: rgba(255, 255, 255, 0.03);
+            color: var(--slate-100);
+            font-family: inherit;
+        }
+
+        .contact-form input:focus,
+        .contact-form textarea:focus {
+            outline: 2px solid rgba(255, 107, 53, 0.7);
+        }
+
+        footer {
+            border-top: 1px solid rgba(255, 255, 255, 0.08);
+            padding: 22px 24px;
+            text-align: center;
+            color: var(--slate-300);
+            background: rgba(0, 0, 0, 0.25);
+        }
+
+        @media (max-width: 640px) {
+            .nav { padding: 16px; }
+            .nav-links { display: none; }
+            section { padding: 60px 16px; }
+            .hero { padding-top: 30px; padding-bottom: 30px; }
+            .hero h1 { font-size: 32px; }
+            .cta-group { width: 100%; }
+            .btn { justify-content: center; flex: 1; }
+        }
+    </style>
+</head>
+<body>
+    <header>
+        <div class="nav">
+            <a class="brand" href="#top">
+                <div class="brand-mark">A</div>
+                <div>LSV Auto Cloud</div>
+            </a>
+            <div class="nav-links">
+                <a href="#how">How it works</a>
+                <a href="#demo">Product demo</a>
+                <a href="#use-cases">Use cases</a>
+                <a href="#about">About</a>
+                <a href="#contact">Contact</a>
+            </div>
+        </div>
+    </header>
+
+    <main id="top">
+        <section class="hero" id="hero">
+            <div>
+                <div class="badge-row">
+                    <span class="badge">Dealer sites in days</span>
+                    <span class="badge">CRM-light for leads</span>
+                </div>
+                <h1>Modern dealer website + simple lead tracking.</h1>
+                <p class="lead">LSV Auto Cloud gives independent car dealers a fast website and a mini CRM so no website lead is ever lost.</p>
+                <div class="cta-group">
+                    <a class="btn btn-primary" href="https://calendly.com/lsv-auto-cloud/demo" target="_blank" rel="noopener">Book a live demo</a>
+                    <a class="btn btn-secondary" href="https://demo.lsvautocloud.com" target="_blank" rel="noopener">View dealer demo site</a>
+                </div>
+                <ul class="list" style="margin-top:18px;">
+                    <li><span>•</span> Lightning-fast pages with inventory highlights and financing CTAs.</li>
+                    <li><span>•</span> Assign every inquiry to a salesperson with reminders and notes.</li>
+                    <li><span>•</span> Built to look great on mobile so shoppers keep browsing.</li>
+                </ul>
+            </div>
+            <div class="hero-visual" aria-hidden="true">
+                <span>Dealer site preview placeholder</span>
+            </div>
+        </section>
+
+        <section id="how">
+            <div class="section-header">
+                <h2>How it works</h2>
+                <p>Launch a polished dealer site and stay on top of every website lead with a workflow that fits independent teams.</p>
+            </div>
+            <div class="pill-grid">
+                <div class="pill">
+                    <div class="icon">1</div>
+                    <div>
+                        <h3>Launch your site</h3>
+                        <p>We set up your dealer website with branded colors, featured vehicles, and financing CTAs in days—not months.</p>
+                    </div>
+                </div>
+                <div class="pill">
+                    <div class="icon">2</div>
+                    <div>
+                        <h3>Capture every lead</h3>
+                        <p>Forms and click-to-call buttons feed directly into your mini CRM so every inquiry is assigned and acknowledged.</p>
+                    </div>
+                </div>
+                <div class="pill">
+                    <div class="icon">3</div>
+                    <div>
+                        <h3>Work the follow-up</h3>
+                        <p>See status, notes, and reminders for each shopper. The simple queue keeps the team focused on the next call or text.</p>
+                    </div>
+                </div>
+            </div>
+        </section>
+
+        <section id="demo">
+            <div class="section-header">
+                <h2>Product demo</h2>
+                <p>Preview the dealer site and the lightweight lead manager that keeps your team in sync.</p>
+            </div>
+            <div class="card-grid">
+                <div class="card">
+                    <h3>Dealer website experience</h3>
+                    <p>Homepage hero with featured vehicles, financing callouts, and prominent click-to-call for shoppers on mobile.</p>
+                </div>
+                <div class="card">
+                    <h3>Lead inbox</h3>
+                    <p>Unified list of web leads with owner, status, and due dates. Open a lead to log calls, texts, and next steps.</p>
+                </div>
+                <div class="card">
+                    <h3>Simple analytics</h3>
+                    <p>See top-performing vehicles, pages, and sources so you can double down on the campaigns that bring buyers in.</p>
+                </div>
+            </div>
+        </section>
+
+        <section id="use-cases">
+            <div class="section-header">
+                <h2>Use cases</h2>
+                <p>Built for independent dealers who need fast time-to-value and a clear view of every inbound shopper.</p>
+            </div>
+            <div class="card-grid">
+                <div class="card">
+                    <h3>Fresh website launches</h3>
+                    <p>Open a new location with a launch-ready site, vehicle gallery, and lead capture tuned for mobile visitors.</p>
+                </div>
+                <div class="card">
+                    <h3>Lead rescue</h3>
+                    <p>Route all web forms into one mini CRM so no one forgets to call back. Notes and reminders keep the team accountable.</p>
+                </div>
+                <div class="card">
+                    <h3>Campaign landing pages</h3>
+                    <p>Pair your ads with high-speed landing pages that spotlight inventory, credit options, and immediate calls to action.</p>
+                </div>
+            </div>
+        </section>
+
+        <section id="about">
+            <div class="section-header">
+                <h2>About LSV Auto Cloud</h2>
+                <p>We're a focused team building the fastest path to a great-looking dealer website with a built-in lead workflow.</p>
+            </div>
+            <div class="about">
+                <div class="panel">
+                    <h3>Built for independents</h3>
+                    <p>We obsess over speed, simplicity, and affordability so small teams can run with modern tools from day one.</p>
+                    <ul class="list">
+                        <li><span>•</span> Fast setup and ongoing support.</li>
+                        <li><span>•</span> Mobile-first layouts that convert.</li>
+                        <li><span>•</span> Transparent pricing with room to grow.</li>
+                    </ul>
+                </div>
+                <div class="panel">
+                    <h3>Why teams choose us</h3>
+                    <p>Dealers need a site that looks premium and a process to work every lead. LSV Auto Cloud gives you both.</p>
+                    <ul class="list">
+                        <li><span>•</span> Seamless site + CRM-light workflow.</li>
+                        <li><span>•</span> Clear owner for every conversation.</li>
+                        <li><span>•</span> Support from people who know dealerships.</li>
+                    </ul>
+                </div>
+            </div>
+        </section>
+
+        <section id="contact">
+            <div class="section-header">
+                <h2>Contact</h2>
+                <p>Tell us about your dealership and we’ll share a tailored preview.</p>
+            </div>
+            <div class="contact-form">
+                <form>
+                    <div>
+                        <label for="name">Name</label>
+                        <input type="text" id="name" name="name" placeholder="Your name" required>
+                    </div>
+                    <div>
+                        <label for="email">Email</label>
+                        <input type="email" id="email" name="email" placeholder="you@dealership.com" required>
+                    </div>
+                    <div>
+                        <label for="dealership">Dealership name</label>
+                        <input type="text" id="dealership" name="dealership" placeholder="Your dealership">
+                    </div>
+                    <div>
+                        <label for="message">What are you looking for?</label>
+                        <textarea id="message" name="message" rows="4" placeholder="Site launch, lead process, specific integrations..."></textarea>
+                    </div>
+                    <button class="btn btn-primary" type="submit">Send message</button>
+                </form>
+            </div>
+        </section>
+    </main>
+
+    <footer>
+        © 2024 LSV Auto Cloud. All rights reserved.
+    </footer>
+</body>
+</html>
 
EOF
)
