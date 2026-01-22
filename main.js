document.documentElement.classList.remove('no-js');

// Page loading state - remove as soon as DOM and critical resources are ready
window.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure fonts and critical CSS are applied
    requestAnimationFrame(() => {
        setTimeout(() => {
            document.body.classList.remove('loading');
        }, 100);
    });
});

// Analytics helper function
const trackEvent = (eventName, eventParams = {}) => {
    if (typeof gtag === 'function') {
        gtag('event', eventName, eventParams);
    }
};

const supportedLanguages = ['en', 'fr'];
const translations = {
    en: {
        'lang.en': 'EN',
        'lang.fr': 'FR',
        'nav.product': 'Product',
        'nav.why': 'Why Us',
        'nav.how': 'How it works',
        'nav.solutions': 'Solutions',
        'nav.contact': 'Contact',
        'nav.menuTitle': 'Menu',
        'nav.toggle.open': 'Open menu',
        'nav.toggle.close': 'Close menu',
        'lang.switchToEn': 'Switch to English',
        'lang.switchToFr': 'Switch to French',
        'cta.bookDemo': 'Book a Demo',
        'cta.talkToSales': 'Talk to sales',
        'hero.eyebrow': 'Automotive websites in days',
        'hero.title': 'Automotive Website Builder for Car Dealers with CRM & Lead Management',
        'hero.lead': 'Launch a dealer website with inventory listings, trade-in/finance leads, and a built-in CRM to organize customers, tasks, and follow-ups automatically. Montreal-based team serving Eastern Canada. Launch in 20 days.',
        'hero.point1': '<span>•</span> Personalized, mobile-first pages for inventory and offers.',
        'hero.point2': '<span>•</span> Built-in lead routing with owners, reminders, and notes.',
        'hero.point3': '<span>•</span> AI drafts listings, replies, and follow-up tasks.',
        'hero.point4': '<span>•</span> Go live in days with our team on the build.',
        'hero.point5': '<span>•</span> Performance tracking across sales, leads, inventory, and users.',
        'hero.metric.days': '20 days',
        'hero.metric.launch': 'average launch',
        'hero.metric.calls': 'lift in web-to-call',
        'hero.metric.routing': 'lead routing + nudges',
        'hero.link': 'See the dealer website builder with CRM in action',
        'hero.tag': 'What you get',
        'hero.cardTitle': 'Website + lead desk + AI',
        'hero.cardDesc': 'Branded site, fast landing pages, and a shared inbox with AI support so your team always knows who to call next.',
        'hero.cardWebsiteTitle': 'Website',
        'hero.cardWebsiteDesc': 'Homepage, inventory highlights, financing CTAs.',
        'hero.cardLeadTitle': 'Lead desk',
        'hero.cardLeadDesc': 'Assignments, notes, reminders, AI assist.',
        'hero.cardSample': 'See a sample site',
        'product.eyebrow': 'Product',
        'product.title': 'Everything you need to sell vehicles online without a bulky stack.',
        'product.desc': 'Clean pages, fast response, and a simple CRM-style lead desk with AI support.',
        'product.feature.website.title': 'Website that sells',
        'product.feature.website.desc': 'Car dealership website builder with CRM integration, personalized mobile-first layouts, and inventory highlights that make calling easy.',
        'product.feature.marketplace.title': 'Marketplace automation',
        'product.feature.marketplace.desc': 'AI writes listings, optimizes photos, and posts to Facebook Marketplace so you stay visible.',
        'product.feature.followup.title': 'Follow-up system',
        'product.feature.followup.desc': 'Assignments, reminders, SMS/email notes, and nudges so every inquiry has an owner and a next step.',
        'product.feature.performance.title': 'Performance tracking',
        'product.feature.performance.desc': 'Dashboards for sales, leads, inventory, and user management to keep the team accountable.',
        'why.eyebrow': 'Why LSV Auto Cloud',
        'why.title': 'Built for small dealer teams who want more sales, not more complexity.',
        'why.desc': "We're not another bloated enterprise platform. LSV Auto Cloud combines website, CRM, and AI automation in one affordable package designed for independent dealers.",
        'why.card1.title': 'Launch in 20 days, not months',
        'why.card1.desc': "No drawn-out implementations or technical headaches. We handle setup, hosting, and integrations so you're live and selling fast.",
        'why.card2.title': 'Transparent pricing, no surprises',
        'why.card2.desc': 'We offer packages tailored to your needs. No hidden fees, no forced upgrades. Pay only for what you need as your dealership grows.',
        'why.card3.title': 'Built for automotive, not adapted',
        'why.card3.desc': 'Unlike generic website builders, we understand inventory feeds, trade-in forms, and dealer-specific lead flows.',
        'why.card4.title': 'AI that actually helps you sell',
        'why.card4.desc': 'Auto-post to Facebook Marketplace, draft follow-up messages, and get intelligent reminders—not just chatbots.',
        'why.card5.title': "Mobile-first for today's buyers",
        'why.card5.desc': 'Most shoppers browse on phones. Your site works beautifully on mobile with click-to-call and optimized layouts.',
        'why.card6.title': 'Montreal-based, Eastern Canada focused',
        'why.card6.desc': 'Real support from our Canadian team. We understand Quebec and Atlantic markets, regulations, and dealer challenges.',
        'comparison.title': 'LSV Auto Cloud vs Traditional Dealer Platforms',
        'comparison.lsv': 'LSV Auto Cloud',
        'comparison.other': 'Legacy Platforms',
        'comparison.prefix.lsv': 'LSV: ',
        'comparison.prefix.other': 'Others: ',
        'comparison.feature.launch': 'Launch time',
        'comparison.lsv.launch': '<span class="check">✓</span> 20 days average',
        'comparison.other.launch': '<span class="cross">✗</span> 3-6 months',
        'comparison.feature.crm': 'Built-in CRM',
        'comparison.lsv.crm': '<span class="check">✓</span> Included',
        'comparison.other.crm': '<span class="cross">✗</span> Extra $200+/mo',
        'comparison.feature.ai': 'AI automation',
        'comparison.lsv.ai': '<span class="check">✓</span> Marketplace, listings, follow-ups',
        'comparison.other.ai': '<span class="cross">✗</span> Basic or none',
        'comparison.feature.mobile': 'Mobile optimization',
        'comparison.lsv.mobile': '<span class="check">✓</span> Mobile-first design',
        'comparison.other.mobile': '<span class="partial">~</span> Desktop-first (adapted)',
        'comparison.feature.support': 'Support',
        'comparison.lsv.support': '<span class="check">✓</span> Direct team access',
        'comparison.other.support': '<span class="cross">✗</span> Ticketing system',
        'comparison.feature.contract': 'Contract flexibility',
        'comparison.lsv.contract': '<span class="check">✓</span> Month-to-month',
        'comparison.other.contract': '<span class="cross">✗</span> 12-36 month lock-in',
        'platform.eyebrow': 'Automation + insights',
        'platform.title': 'AI listings, follow-up, and performance in one place.',
        'platform.desc': 'Publish Marketplace listings automatically, simplify follow-ups, and see the numbers that matter.',
        'platform.card1.title': 'AI listing studio',
        'platform.card1.desc': 'Generate AI listing text from your automated inventory data, then polish specs and photos in seconds.',
        'platform.card2.title': 'Auto publishing',
        'platform.card2.desc': 'Auto-post inventory to Facebook Marketplace so your listings stay fresh without effort.',
        'platform.card3.title': 'Advanced follow-up',
        'platform.card3.desc': 'Assignments, reminders, SMS/email notes, and nudges to keep every shopper moving.',
        'platform.card4.title': 'Performance dashboard',
        'platform.card4.desc': 'Track sales, leads, inventory status, and user activity in one view.',
        'solutions.eyebrow': 'Solutions',
        'solutions.title': 'Built to rank for the searches Eastern Canada dealers make.',
        'solutions.desc': 'Dealership website builder, CRM dealership website, and Marketplace automation in one platform.',
        'solutions.card1.title': 'Dealership website builder',
        'solutions.card1.desc': 'Launch a dealer site fast with inventory pages, trade-in and finance CTAs, and mobile-first design.',
        'solutions.card2.title': 'Car dealership website builder',
        'solutions.card2.desc': 'Compare launch speed, CRM integration, and support to pick the best builder for small teams.',
        'solutions.card3.title': 'CRM dealership website',
        'solutions.card3.desc': 'Website forms connect directly to your CRM for lead routing, reminders, and follow-ups.',
        'solutions.card4.title': 'Website builder CRM',
        'solutions.card4.desc': 'All-in-one stack that replaces bolt-on tools and keeps every lead in one inbox.',
        'solutions.card5.title': 'CRM dealership',
        'solutions.card5.desc': 'Pipeline views, tasks, notes, and ownership so no inquiry slips through.',
        'solutions.card6.title': 'Facebook Marketplace auto posting',
        'solutions.card6.desc': 'Auto-post inventory to Marketplace and keep listings refreshed with AI vehicle listing tools.',
        'faq.eyebrow': 'FAQ',
        'faq.title': 'Questions dealers ask before choosing a website builder',
        'faq.desc': 'Short answers to the questions we hear most from Eastern Canada dealers.',
        'faq.q1': 'How long does it take to launch an automotive website with LSV Auto Cloud?',
        'faq.a1': 'The average launch time is 20 days from kickoff to a live site. We handle the setup, hosting, and lead capture configuration so your team can focus on selling.',
        'faq.q2': 'What features are included in LSV Auto Cloud websites?',
        'faq.a2': 'LSV Auto Cloud websites include personalized mobile-first pages, inventory highlights, financing CTAs, built-in lead routing with reminders and notes, AI listing automation for Facebook Marketplace, and performance tracking dashboards for sales, leads, inventory, and users.',
        'faq.q3': 'How does the AI listing automation work?',
        'faq.a3': 'The AI generates listing text from your automated inventory data, optimizes photos, and auto-posts to Facebook Marketplace so your listings stay fresh and visible without manual effort.',
        'faq.q4': 'What kind of results can I expect?',
        'faq.a4': 'Based on early dealer data, customers see 22% faster reply times within 30 days and 15% more booked appointments within 60 days after launch, thanks to unified inbox notifications and lead routing.',
        'faq.q5': 'Who is the best car dealership website maker for small dealers?',
        'faq.a5': 'LSV Auto Cloud specializes in small dealer teams, launching a car dealership website in about 20 days with hosting, Marketplace autoposting, and built-in lead routing.',
        'process.eyebrow': 'How it works',
        'process.title': 'Simple rollout designed for busy automotive teams.',
        'process.desc': 'We do the heavy lifting and keep your team focused on the next conversation.',
        'process.step1.title': 'Show us your brand',
        'process.step1.desc': 'Share your logo, vehicles, and priorities. We draft your homepage and key landing pages.',
        'process.step2.title': 'Launch in days',
        'process.step2.desc': 'We set up hosting, lead capture, and routing rules so every inquiry has an owner.',
        'process.step3.title': 'Work every lead',
        'process.step3.desc': 'Your team uses the lead desk to log calls, add notes, and keep reminders moving.',
        'demo.eyebrow': 'Book a demo',
        'demo.title': 'See LSV Auto Cloud in action',
        'demo.desc': 'Pick a 30-minute slot to walk through the dealer website, CRM, and Marketplace automation. <strong>No credit card required.</strong>',
        'demo.ariaLabel': 'Schedule a demo',
        'contact.eyebrow': 'Get in touch',
        'contact.title': "Let's build something exceptional together.",
        'contact.desc': "Share your vision with us, and our team will reach out to discuss how we can bring your dealership's digital presence to life.",
        'form.name.label': 'Name',
        'form.name.placeholder': 'Your name',
        'form.email.label': 'Email',
        'form.email.placeholder': 'email@example.com',
        'form.phone.label': 'Phone',
        'form.phone.placeholder': '(555) 123-4567',
        'form.business.label': 'Business',
        'form.business.placeholder': 'Your business',
        'form.size.label': 'Team size',
        'form.size.placeholder': 'Select...',
        'form.message.label': 'What do you want to improve?',
        'form.message.placeholder': 'Tell us about your dealership and what you need...',
        'form.privacy': 'By submitting this form, you agree to be contacted by LSV Auto Cloud. We respect your privacy and will never share your information.',
        'form.submit': 'Send message',
        'form.status.incomplete': 'Please complete all required fields.',
        'form.button.sending': 'Sending...',
        'form.error.server': "We're experiencing technical difficulties. Please try again in a few minutes or email us directly at contact@lsvautocloud.com",
        'form.error.generic': 'Sorry, we could not send your message. Please check your connection and try again.',
        'footer.copy': '© <span id="footer-year">2025</span> LSV Auto Cloud. All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms &amp; Conditions',
        'footer.powered': 'Powered by LSV Auto Cloud',
        'modal.title': 'Message sent',
        'modal.body': 'Thanks! We received your request and will reply within one business day.',
        'modal.close': 'Close',
        'backToTop': 'Back to top',
        'cookie.message': '<strong>We use cookies</strong> to improve your experience and analyze site traffic. By continuing, you accept our use of cookies.',
        'cookie.accept': 'Accept',
        'cookie.decline': 'Decline',
        'cookie.ariaLabel': 'Cookie consent',
        'privacy.lastUpdated': 'Last updated: 2026-01-09',
        'privacy.title': 'Privacy Policy',
        'privacy.intro': 'LSV Auto Cloud ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information in compliance with Quebec\'s Act respecting the protection of personal information in the private sector (Law 25), Canada\'s Personal Information Protection and Electronic Documents Act (PIPEDA), and other applicable privacy laws.',
        'privacy.scope.title': 'Scope and application',
        'privacy.scope.desc': 'This Privacy Policy applies to personal information collected through our website (lsvautocloud.com), our automotive website builder and CRM platform ("Services"), and all related interactions with LSV Auto Cloud. By using our Services, you consent to the collection and use of information as described in this Policy.',
        'privacy.responsible.title': 'Responsible party',
        'privacy.responsible.desc': 'LSV Auto Cloud, located in Montreal, Quebec, Canada, is the data controller responsible for your personal information. For privacy-related inquiries, contact us at <a href="mailto:support@lsvautocloud.com">support@lsvautocloud.com</a>.',
        'privacy.collect.title': 'Information we collect',
        'privacy.collect.website.title': 'Website visitors',
        'privacy.collect.website.item1': '<strong>Contact form data:</strong> Name, email address, phone number, business name, team size, and message content when you submit inquiries.',
        'privacy.collect.website.item2': '<strong>Demo bookings:</strong> Name, email address, phone number, and selected time slot when you schedule a demo through Cal.com (subject to Cal.com\'s privacy policy).',
        'privacy.collect.website.item3': '<strong>Analytics data:</strong> Through Google Analytics 4 (GA4), we collect IP address (anonymized), pages viewed, referral sources, approximate geographic location, device type, browser information, and session duration.',
        'privacy.collect.website.item4': '<strong>Cookies and tracking:</strong> Session cookies, preference cookies (language selection), and analytics cookies. See our Cookies section below.',
        'privacy.collect.customers.title': 'Service customers (dealers)',
        'privacy.collect.customers.item1': '<strong>Account information:</strong> Business name, contact person name, email address, phone number, billing address, payment information (processed securely through third-party payment processors).',
        'privacy.collect.customers.item2': '<strong>Platform usage data:</strong> Login credentials, user activity logs, feature usage statistics, CRM data you input (customer names, contact details, vehicle preferences, notes), inventory data (vehicle listings, photos, descriptions), website content you create.',
        'privacy.collect.customers.item3': '<strong>Communication records:</strong> Emails, support tickets, phone call records, and chat messages with our team.',
        'privacy.collect.customers.item4': '<strong>Technical data:</strong> IP addresses, browser type, operating system, access times, and usage patterns for security and service improvement.',
        'privacy.collect.end.title': 'End-user data (your customers)',
        'privacy.collect.end.desc': 'When you use our CRM and lead management features, you may collect personal information about your customers (end-users). You are the data controller for this information, and we act as a data processor. You are responsible for complying with applicable privacy laws when collecting and using this data, including obtaining necessary consents and providing privacy notices to your customers.',
        'privacy.legal.title': 'Legal basis for processing',
        'privacy.legal.intro': 'Under Quebec Law 25, we process your personal information based on the following legal grounds:',
        'privacy.legal.item1': '<strong>Consent:</strong> When you submit contact forms, book demos, or create an account, you provide express consent for us to collect and use your information.',
        'privacy.legal.item2': '<strong>Contract performance:</strong> Processing is necessary to provide the Services you have subscribed to, including website hosting, CRM functionality, and support.',
        'privacy.legal.item3': '<strong>Legal obligations:</strong> We process information to comply with tax, accounting, anti-fraud, and other legal requirements.',
        'privacy.legal.item4': '<strong>Legitimate interests:</strong> We process information for business purposes such as improving our Services, security monitoring, and analytics, provided these interests do not override your privacy rights.',
        'privacy.use.title': 'How we use information',
        'privacy.use.item1': '<strong>Service delivery:</strong> Provide, maintain, and improve our platform, including website building, CRM, lead routing, Facebook Marketplace automation, and AI-powered features.',
        'privacy.use.item2': '<strong>Customer support:</strong> Respond to inquiries, troubleshoot issues, and provide technical assistance.',
        'privacy.use.item3': '<strong>Billing and payments:</strong> Process subscription fees, send invoices, and manage payment records.',
        'privacy.use.item4': '<strong>Communications:</strong> Send service-related notifications, updates, maintenance alerts, and respond to your requests.',
        'privacy.use.item5': '<strong>Marketing:</strong> With your consent, send promotional emails about new features, updates, or offers. You may opt out at any time.',
        'privacy.use.item6': '<strong>Analytics and improvement:</strong> Analyze usage patterns to improve functionality, user experience, and develop new features.',
        'privacy.use.item7': '<strong>Security and fraud prevention:</strong> Detect, prevent, and respond to security incidents, fraud, and violations of our Terms of Service.',
        'privacy.use.item8': '<strong>Legal compliance:</strong> Comply with applicable laws, regulations, legal processes, and enforceable governmental requests.',
        'privacy.sharing.title': 'Information sharing and disclosure',
        'privacy.sharing.intro': 'We do not sell your personal information. We share information only in the following circumstances:',
        'privacy.sharing.providers.title': 'Service providers',
        'privacy.sharing.providers.desc': 'We engage trusted third-party service providers to support our operations. These providers have access to personal information only to perform services on our behalf and are contractually obligated to protect your information:',
        'privacy.sharing.providers.item1': '<strong>Hosting and infrastructure:</strong> Cloud hosting providers for data storage and platform operation.',
        'privacy.sharing.providers.item2': '<strong>Analytics:</strong> Google Analytics for website usage analysis.',
        'privacy.sharing.providers.item3': '<strong>Scheduling:</strong> Cal.com for demo appointment booking.',
        'privacy.sharing.providers.item4': '<strong>Payment processing:</strong> Secure payment processors for subscription billing (they do not share full payment details with us).',
        'privacy.sharing.providers.item5': '<strong>Email and communications:</strong> Email service providers for transactional and marketing communications.',
        'privacy.sharing.providers.item6': '<strong>Customer support:</strong> Support ticketing and communication platforms.',
        'privacy.sharing.legal.title': 'Legal requirements and protection',
        'privacy.sharing.legal.desc': 'We may disclose information if required by law, court order, legal process, or governmental request, or when necessary to protect our rights, property, safety, or that of our users or the public.',
        'privacy.sharing.business.title': 'Business transfers',
        'privacy.sharing.business.desc': 'In the event of a merger, acquisition, reorganization, or sale of assets, personal information may be transferred as part of the transaction. We will notify you of any such change and your choices regarding your information.',
        'privacy.international.title': 'International transfers',
        'privacy.international.desc': 'We operate primarily in Canada, but some of our service providers may be located in other countries, including the United States. When we transfer personal information outside of Quebec or Canada, we ensure appropriate safeguards are in place, such as standard contractual clauses, to protect your information in accordance with Quebec Law 25 and applicable privacy laws.',
        'privacy.security.title': 'Data security',
        'privacy.security.intro': 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, disclosure, alteration, or destruction, including:',
        'privacy.security.item1': '<strong>Encryption:</strong> Data in transit is encrypted using TLS/SSL protocols. Sensitive data at rest is encrypted.',
        'privacy.security.item2': '<strong>Access controls:</strong> Role-based access controls and authentication mechanisms limit access to personal information to authorized personnel only.',
        'privacy.security.item3': '<strong>Security monitoring:</strong> Regular security audits, vulnerability assessments, and monitoring for suspicious activity.',
        'privacy.security.item4': '<strong>Employee training:</strong> Staff are trained on privacy and security practices and are bound by confidentiality obligations.',
        'privacy.security.item5': '<strong>Incident response:</strong> We maintain an incident response plan to detect, respond to, and report security breaches as required by law.',
        'privacy.security.breach': 'In the event of a data breach that poses a risk of serious harm, we will notify affected individuals and the Commission d\'accès à l\'information du Québec (CAI) as required by Quebec Law 25.',
        'privacy.retention.title': 'Data retention',
        'privacy.retention.desc': 'We retain personal information only as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Specific retention periods include:',
        'privacy.retention.item1': '<strong>Active customer accounts:</strong> For the duration of your subscription and for a reasonable period afterward to address support issues or legal obligations.',
        'privacy.retention.item2': '<strong>Cancelled accounts:</strong> We retain certain data for up to 30 days after cancellation to facilitate data export requests, then delete or anonymize it unless required by law.',
        'privacy.retention.item3': '<strong>Financial records:</strong> Billing and payment information is retained for 7 years to comply with tax and accounting regulations.',
        'privacy.retention.item4': '<strong>Marketing data:</strong> Contact information for marketing purposes is retained until you opt out or request deletion.',
        'privacy.retention.item5': '<strong>Analytics data:</strong> Aggregated and anonymized analytics data may be retained indefinitely for statistical purposes.',
        'privacy.cookies.title': 'Cookies and tracking technologies',
        'privacy.cookies.intro': 'We use cookies and similar tracking technologies to operate our website and Services:',
        'privacy.cookies.item1': '<strong>Essential cookies:</strong> Required for website functionality, authentication, and security. These cannot be disabled.',
        'privacy.cookies.item2': '<strong>Preference cookies:</strong> Store your language selection and other preferences.',
        'privacy.cookies.item3': '<strong>Analytics cookies:</strong> Google Analytics cookies help us understand how visitors use our site. These are set only with your consent via our cookie banner.',
        'privacy.cookies.control': 'You can manage cookies through your browser settings. Disabling cookies may affect some features of our website. To opt out of Google Analytics, you can use the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Google Analytics Opt-out Browser Add-on</a>.',
        'privacy.rights.title': 'Your privacy rights',
        'privacy.rights.intro': 'Under Quebec Law 25 and Canadian privacy laws, you have the following rights regarding your personal information:',
        'privacy.rights.item1': '<strong>Right to access:</strong> Request confirmation of what personal information we hold about you and obtain a copy.',
        'privacy.rights.item2': '<strong>Right to rectification:</strong> Request correction of inaccurate or incomplete personal information.',
        'privacy.rights.item3': '<strong>Right to deletion:</strong> Request deletion of your personal information, subject to legal retention requirements.',
        'privacy.rights.item4': '<strong>Right to data portability:</strong> Request a copy of your personal information in a structured, commonly used, machine-readable format.',
        'privacy.rights.item5': '<strong>Right to withdraw consent:</strong> Withdraw consent for processing based on consent at any time (this does not affect the lawfulness of processing before withdrawal).',
        'privacy.rights.item6': '<strong>Right to object:</strong> Object to processing of your personal information for direct marketing or based on legitimate interests.',
        'privacy.rights.item7': '<strong>Right to restrict processing:</strong> Request limitation of processing in certain circumstances.',
        'privacy.rights.item8': '<strong>Right to lodge a complaint:</strong> File a complaint with the Commission d\'accès à l\'information du Québec (CAI) if you believe your privacy rights have been violated.',
        'privacy.rights.exercise': 'To exercise any of these rights, contact us at <a href="mailto:support@lsvautocloud.com">support@lsvautocloud.com</a>. We will respond to your request within 30 days as required by law. We may ask you to verify your identity before processing your request.',
        'privacy.marketing.title': 'Marketing communications and opt-out',
        'privacy.marketing.desc': 'If you receive marketing emails from us, you can opt out at any time by clicking the "unsubscribe" link in the email or by contacting us at <a href="mailto:support@lsvautocloud.com">support@lsvautocloud.com</a>. Note that even if you opt out of marketing communications, we will still send you transactional and service-related messages necessary for your use of our Services.',
        'privacy.automated.title': 'Automated decision-making',
        'privacy.automated.desc': 'Our Services include AI-powered features such as automated vehicle listing generation and communication suggestions. These features provide recommendations and suggestions for your review and approval. We do not use automated decision-making that produces legal effects or similarly significant effects concerning you without human involvement.',
        'privacy.children.title': "Children's privacy",
        'privacy.children.desc': 'Our Services are not directed to individuals under the age of 16, and we do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16 without parental consent, we will take steps to delete that information promptly.',
        'privacy.thirdparty.title': 'Third-party websites and services',
        'privacy.thirdparty.desc': 'Our website and Services may contain links to third-party websites or integrate third-party services (such as Cal.com, Google Analytics, Facebook Marketplace). We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing them with personal information.',
        'privacy.changes.title': 'Changes to this privacy policy',
        'privacy.changes.desc': 'We may update this Privacy Policy from time to time to reflect changes in our practices, Services, legal requirements, or for other operational, legal, or regulatory reasons. The "Last updated" date at the top of this page indicates when the Policy was last revised. We will notify you of material changes by email or through a prominent notice on our website at least 30 days before the changes take effect, as required by Quebec Law 25. Your continued use of our Services after changes take effect constitutes acceptance of the updated Policy.',
        'privacy.cai.title': "Commission d'accès à l'information du Québec (CAI)",
        'privacy.cai.desc': 'If you have concerns about how we handle your personal information or wish to file a complaint, you may contact the Commission d\'accès à l\'information du Québec (CAI):',
        'privacy.cai.contact': "Commission d'accès à l'information du Québec<br>Québec: 525, boul. René-Lévesque Est, bureau 1.20, Québec (Québec) G1R 5S9<br>Montréal: 500, boul. René-Lévesque Ouest, bureau 10.200, Montréal (Québec) H2Z 1W7<br>Telephone: 1-888-528-7741<br>Website: <a href=\"https://www.cai.gouv.qc.ca\" target=\"_blank\" rel=\"noopener\">www.cai.gouv.qc.ca</a>",
        'privacy.contact.title': 'Contact us',
        'privacy.contact.desc': 'If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:',
        'privacy.contact.info': 'LSV Auto Cloud<br>Email: <a href="mailto:support@lsvautocloud.com">support@lsvautocloud.com</a><br>Location: Montreal, Quebec, Canada',
        'terms.lastUpdated': 'Last updated: 2026-01-09',
        'terms.title': 'Terms and Conditions',
        'terms.intro': 'These Terms and Conditions ("Terms") govern your use of the LSV Auto Cloud website and services. By accessing or using our site or services, you agree to these Terms.',
        'terms.services.title': 'Services',
        'terms.services.desc': 'LSV Auto Cloud provides automotive website building, dealer CRM, lead management, Facebook Marketplace automation, AI-powered vehicle listings, and related services ("Services"). Specific service features and availability may vary based on your selected package.',
        'terms.useOfServices.title': 'Use of services',
        'terms.useOfServices.item1': 'You must provide accurate information when submitting forms, booking demos, or signing up for services.',
        'terms.useOfServices.item2': 'You will comply with applicable laws and avoid misuse of the site (including attempting to disrupt, reverse engineer, or gain unauthorized access).',
        'terms.useOfServices.item3': 'You are responsible for all activity conducted through your account.',
        'terms.accounts.title': 'Accounts and security',
        'terms.accounts.item1': 'If we provide you with credentials to access any portal or CRM, you are responsible for keeping them secure and for all activity under your account.',
        'terms.accounts.item2': 'You must notify us promptly of any unauthorized use or security concerns.',
        'terms.accounts.item3': 'We reserve the right to suspend accounts that violate these Terms or pose security risks.',
        'terms.subscription.title': 'Subscription and payment terms',
        'terms.subscription.item1': 'Services are provided on a subscription basis with pricing determined by your selected package.',
        'terms.subscription.item2': 'Payment is due according to the billing schedule agreed upon (typically monthly or annually).',
        'terms.subscription.item3': 'All fees are in CAD unless otherwise specified and are non-refundable except as required by law.',
        'terms.subscription.item4': 'We reserve the right to change pricing with 30 days notice to existing customers.',
        'terms.subscription.item5': 'Late payments may result in service suspension until account balance is current.',
        'terms.subscription.item6': 'You are responsible for all taxes associated with the Services.',
        'terms.delivery.title': 'Service delivery and timelines',
        'terms.delivery.item1': 'We aim to launch new dealer websites within 20 business days of project kickoff, subject to timely provision of required materials (logos, content, inventory data) by you.',
        'terms.delivery.item2': 'Delivery timelines are estimates and may vary based on project complexity and your responsiveness.',
        'terms.delivery.item3': 'You agree to provide necessary content, feedback, and approvals within reasonable timeframes to avoid delays.',
        'terms.delivery.item4': 'Significant scope changes may require timeline and pricing adjustments.',
        'terms.cancellation.title': 'Cancellation and refunds',
        'terms.cancellation.item1': 'Monthly subscriptions may be cancelled at any time with 30 days notice. Service will continue through the end of the current billing period.',
        'terms.cancellation.item2': 'Annual subscriptions may be cancelled with 30 days notice but are non-refundable for unused months.',
        'terms.cancellation.item3': 'Initial setup fees are non-refundable once work has commenced.',
        'terms.cancellation.item4': 'Upon cancellation, your website will be taken offline and you will lose access to the platform, CRM, and all hosted data.',
        'terms.cancellation.item5': 'You may request an export of your data (customer information, inventory records, website content) within 30 days of cancellation, subject to payment of all outstanding fees.',
        'terms.ip.title': 'Intellectual property',
        'terms.ip.item1': 'The LSV Auto Cloud platform, software, branding, and documentation are owned by LSV Auto Cloud or our licensors and are protected by law.',
        'terms.ip.item2': 'You may not copy, modify, or redistribute our software or platform except as allowed by these Terms or with our written permission.',
        'terms.ip.item3': 'You are expressly prohibited from copying, reverse engineering, decompiling, or attempting to extract source code from any websites created by LSV Auto Cloud, whether for your own use or for third parties.',
        'terms.ip.item4': 'We retain all rights to improvements, updates, and derivative works of our platform.',
        'terms.data.title': 'Customer content and data ownership',
        'terms.data.item1': 'You retain ownership of all content you provide (inventory details, logos, images, copy, customer data).',
        'terms.data.item2': 'You grant us a limited license to use your content to deliver Services to you, including hosting, display, and automation features.',
        'terms.data.item3': 'You are responsible for ensuring you have rights to all content you provide and that it does not violate any third-party rights.',
        'terms.data.item4': 'We will not sell or share your customer data with third parties except as required to provide Services or as required by law.',
        'terms.data.item5': 'Upon service termination, we will provide your data in standard formats within 30 days of your request.',
        'terms.ai.title': 'AI and automation features',
        'terms.ai.item1': 'Our AI features (including listing generation and customer communication assistance) are provided as tools to assist your business operations.',
        'terms.ai.item2': 'AI-generated content is provided as suggestions and should be reviewed before publication.',
        'terms.ai.item3': 'You are solely responsible for all content published through our Services, including AI-assisted content.',
        'terms.ai.item4': 'We do not guarantee the accuracy or appropriateness of AI-generated suggestions.',
        'terms.thirdParty.title': 'Facebook Marketplace and third-party platforms',
        'terms.thirdParty.item1': 'Use of Facebook Marketplace auto-posting features requires compliance with Facebook\'s terms of service and policies.',
        'terms.thirdParty.item2': 'You are responsible for maintaining your Facebook account in good standing and for all content posted to Marketplace.',
        'terms.thirdParty.item3': 'We are not responsible for account suspensions, posting restrictions, or policy violations by third-party platforms.',
        'terms.thirdParty.item4': 'Changes to third-party platform APIs or policies may affect service availability without notice.',
        'terms.uptime.title': 'Service level and uptime',
        'terms.uptime.item1': 'We strive to maintain 99% uptime for our Services but do not guarantee uninterrupted availability.',
        'terms.uptime.item2': 'Scheduled maintenance will be communicated in advance when possible.',
        'terms.uptime.item3': 'We are not liable for downtime caused by factors beyond our control (internet issues, hosting provider outages, etc.).',
        'terms.thirdPartyServices.title': 'Third-party services',
        'terms.thirdPartyServices.desc': 'Our site and Services may integrate third-party services (e.g., Cal.com for scheduling, Google Analytics, Facebook APIs). Their respective terms and privacy policies govern your use of those services.',
        'terms.support.title': 'Support and maintenance',
        'terms.support.item1': 'Support is provided via email during business hours (Monday-Friday, 9 AM - 5 PM EST).',
        'terms.support.item2': 'We will maintain and update the platform to ensure security and compatibility.',
        'terms.support.item3': 'Major feature updates and improvements are provided at our discretion.',
        'terms.disclaimers.title': 'Disclaimers',
        'terms.disclaimers.desc': 'The Services are provided "as is" without warranties of any kind. To the fullest extent permitted by law, we disclaim all implied warranties, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the Services will meet your specific business requirements or generate any particular level of sales or leads.',
        'terms.liability.title': 'Limitation of liability',
        'terms.liability.desc': 'To the extent permitted by law, LSV Auto Cloud will not be liable for indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, lost revenue, loss of data, or loss of business opportunities, arising from your use of the Services. Our total liability for any claim arising from the Services will not exceed the total amount you paid to LSV Auto Cloud in the twelve (12) months preceding the claim, or one thousand CAD (CAD $1,000), whichever is less.',
        'terms.indemnity.title': 'Indemnity',
        'terms.indemnity.desc': 'You agree to indemnify, defend, and hold LSV Auto Cloud, its officers, directors, employees, and agents harmless from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys\' fees) arising out of: (a) your use or misuse of the Services, (b) your violation of these Terms, (c) your violation of any third-party rights, including intellectual property rights, (d) content you provide or publish through the Services.',
        'terms.termination.title': 'Termination',
        'terms.termination.item1': 'We may suspend or terminate your access to the Services if you violate these Terms, fail to pay fees, or for security or legal reasons.',
        'terms.termination.item2': 'Upon termination, you must pay all outstanding fees and will lose access to the platform.',
        'terms.termination.item3': 'Provisions regarding intellectual property, disclaimers, limitation of liability, and indemnification survive termination.',
        'terms.changes.title': 'Changes to terms',
        'terms.changes.desc': 'We may update these Terms from time to time to reflect changes in our Services or legal requirements. The "Last updated" date reflects the most recent changes. We will notify you of material changes via email or platform notification. Continued use of the Services after changes take effect constitutes acceptance of the updated Terms.',
        'terms.dispute.title': 'Dispute resolution',
        'terms.dispute.item1': 'If a dispute arises, we encourage you to contact us first to resolve the matter informally.',
        'terms.dispute.item2': 'Any disputes that cannot be resolved informally shall be subject to binding arbitration under the rules of the Canadian Arbitration Association, conducted in Montreal, Quebec.',
        'terms.dispute.item3': 'You agree to arbitrate disputes on an individual basis and waive any right to participate in class actions.',
        'terms.law.title': 'Governing law',
        'terms.law.desc': 'These Terms are governed by the laws of the Province of Quebec and the laws of Canada applicable therein, without regard to conflict of law principles. Any legal action must be brought in the courts located in Montreal, Quebec.',
        'terms.agreement.title': 'Entire agreement',
        'terms.agreement.desc': 'These Terms constitute the entire agreement between you and LSV Auto Cloud regarding the Services and supersede any prior agreements or understandings, whether written or oral.',
        'terms.severability.title': 'Severability',
        'terms.severability.desc': 'If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.',
        'terms.contact.title': 'Contact',
        'terms.contact.desc': 'For questions about these Terms, contact <a href="mailto:support@lsvautocloud.com">support@lsvautocloud.com</a>.'
    },
        fr: {
        'lang.en': 'EN',
        'lang.fr': 'FR',
        'nav.product': 'Produit',
        'nav.why': 'Pourquoi nous',
        'nav.how': 'Comment ça marche',
        'nav.solutions': 'Solutions',
        'nav.contact': 'Contact',
        'nav.menuTitle': 'Menu',
        'nav.toggle.open': 'Ouvrir le menu',
        'nav.toggle.close': 'Fermer le menu',
        'lang.switchToEn': 'Passer en anglais',
        'lang.switchToFr': 'Passer en français',
        'cta.bookDemo': 'Réserver une démo',
        'cta.talkToSales': 'Parler au département des ventes',
        'hero.eyebrow': 'Sites web automobiles en quelques jours',
        'hero.title': 'Vendez plus de véhicules en ligne, sans vous compliquer la vie.',
        'hero.lead': 'LSV Auto Cloud aide les concessionnaires indépendants à publier leurs annonces, gérer leurs prospects et suivre leurs ventes, le tout dans une seule plateforme simple et efficace.',
        'hero.point1': '<span>•</span> Annonces d’inventaire générées avec l’IA',
        'hero.point2': '<span>•</span> Publication automatique sur Facebook Marketplace',
        'hero.point3': '<span>•</span> CRM simple pour ne perdre aucun prospect',
        'hero.point4': '<span>•</span> Mise en ligne rapide, sans casse-tête technique',
        'hero.point5': "<span>•</span> Suivi des performances sur les ventes, prospects, inventaire et utilisateurs.",
        'hero.metric.days': '20 jours',
        'hero.metric.launch': 'lancement moyen',
        'hero.metric.calls': "hausse d'appels web",
        'hero.metric.routing': 'routage + relances',
        'hero.link': 'Voir la plateforme en action',
        'hero.tag': 'Ce que vous obtenez',
        'hero.cardTitle': 'Site web + gestion des prospects + IA',
        'hero.cardDesc': "Site de marque, pages d'atterrissage rapides et boîte de réception partagée avec assistance IA pour toujours savoir qui rappeler en premier.",
        'hero.cardWebsiteTitle': 'Site web',
        'hero.cardWebsiteDesc': "Page d'accueil, inventaire en vedette, appels à l'action financement.",
        'hero.cardLeadTitle': 'Gestion des prospects',
        'hero.cardLeadDesc': 'Affectations, notes, rappels, assistance IA.',
        'hero.cardSample': 'Voir un exemple de site',
        'product.eyebrow': 'Problème / Positionnement',
        'product.title': 'Trop de systèmes. Pas assez de ventes.',
        'product.desc': 'Gérer un concessionnaire aujourd’hui, ça veut souvent dire jongler avec trop d’outils : site web, messages Facebook, suivis clients, tableaux Excel improvisés.<br>LSV Auto Cloud a été créé pour simplifier tout ça.<br>Une seule plateforme, pensée pour la réalité des concessionnaires d’ici.',
        'product.feature.website.title': 'Un site qui vend',
        'product.feature.website.desc': "Créateur de sites pour concessionnaires avec CRM intégré, mises en page optimisées pour mobile et inventaire en vedette qui facilitent les appels.",
        'product.feature.marketplace.title': 'Automatisation Marketplace',
        'product.feature.marketplace.desc': "L'IA rédige les annonces, optimise les photos et publie sur Facebook Marketplace pour maximiser votre visibilité.",
        'product.feature.followup.title': 'Système de suivi',
        'product.feature.followup.desc': 'Affectations, rappels, notes SMS/courriel et relances pour que chaque demande ait un responsable et une prochaine étape.',
        'product.feature.performance.title': 'Suivi de performance',
        'product.feature.performance.desc': "Tableaux de bord pour les ventes, prospects, inventaire et gestion d'équipe pour maximiser la productivité.",
        'why.eyebrow': 'Pourquoi LSV Auto Cloud',
        'why.title': 'Conçu pour les petites équipes de concessionnaires au Québec',
        'why.desc': 'LSV Auto Cloud n’est pas un logiciel d’entreprise compliqué et coûteux. C’est une solution accessible qui combine site web, CRM et automatisation IA pour aider les concessionnaires indépendants à vendre plus, sans embaucher plus.',
        'why.card1.title': 'Mise en ligne rapide',
        'why.card1.desc': 'Votre site est prêt en 20 jours. On s’occupe de la configuration, de l’hébergement et des intégrations.',
        'why.card2.title': 'Tarification transparente, sans surprises',
        'why.card2.desc': 'Forfaits adaptés à vos besoins. Aucun frais caché, aucune mise à niveau forcée. Payez seulement pour ce dont vous avez besoin.',
        'why.card3.title': "Conçu pour l'automobile, pas adapté après coup",
        'why.card3.desc': "Contrairement aux créateurs de sites génériques, nous comprenons les flux d'inventaire, formulaires de reprise et parcours de prospects propres aux concessionnaires.",
        'why.card4.title': 'Une IA qui vous aide vraiment à vendre',
        'why.card4.desc': 'L’IA rédige vos annonces, propose des réponses aux prospects et vous aide à faire les suivis au bon moment.',
        'why.card5.title': 'Pensé pour le mobile',
        'why.card5.desc': 'Vos véhicules, vos offres et vos formulaires sont optimisés pour les clients qui magasinent sur leur téléphone.',
        'why.card6.title': 'Basé à Montréal, axé sur l\'Est du Canada',
        'why.card6.desc': 'Soutien réel de notre équipe canadienne. Nous comprenons les marchés du Québec et des provinces atlantiques, leurs réglementations et leurs défis.',
        'comparison.title': 'LSV Auto Cloud vs plateformes traditionnelles pour concessionnaires',
        'comparison.lsv': 'LSV Auto Cloud',
        'comparison.other': 'Plateformes traditionnelles',
        'comparison.prefix.lsv': 'LSV : ',
        'comparison.prefix.other': 'Autres : ',
        'comparison.feature.launch': 'Délai de lancement',
        'comparison.lsv.launch': "<span class='check'>✓</span> 20 jours en moyenne",
        'comparison.other.launch': "<span class='cross'>✗</span> 3 à 6 mois",
        'comparison.feature.crm': 'CRM intégré',
        'comparison.lsv.crm': "<span class='check'>✓</span> Inclus",
        'comparison.other.crm': "<span class='cross'>✗</span> +200 $/mois en extra",
        'comparison.feature.ai': 'Automatisation IA',
        'comparison.lsv.ai': "<span class='check'>✓</span> Marketplace, annonces, suivis",
        'comparison.other.ai': "<span class='cross'>✗</span> Basique ou inexistant",
        'comparison.feature.mobile': 'Optimisation mobile',
        'comparison.lsv.mobile': "<span class='check'>✓</span> Optimisation mobile",
        'comparison.other.mobile': "<span class='partial'>~</span> Adapté aux ordinateurs de bureau",
        'comparison.feature.support': 'Support',
        'comparison.lsv.support': "<span class='check'>✓</span> Accès direct à l'équipe",
        'comparison.other.support': "<span class='cross'>✗</span> Système de tickets",
        'comparison.feature.contract': 'Flexibilité contractuelle',
        'comparison.lsv.contract': "<span class='check'>✓</span> Mois par mois",
        'comparison.other.contract': "<span class='cross'>✗</span> Engagement 12-36 mois",
        'platform.eyebrow': 'Automatisation + analytique',
        'platform.title': 'Annonces IA, suivi et performance en un seul endroit.',
        'platform.desc': 'Publiez automatiquement sur Marketplace, simplifiez les suivis et consultez les indicateurs qui comptent.',
        'platform.card1.title': "Studio d'annonces IA",
        'platform.card1.desc': 'Générez le texte des annonces à partir de vos données d\'inventaire automatisées, puis peaufinez les spécifications et photos en quelques secondes.',
        'platform.card2.title': 'Publication automatique',
        'platform.card2.desc': "Publication automatique de l'inventaire sur Facebook Marketplace pour garder vos annonces fraîches sans effort.",
        'platform.card3.title': 'Suivi avancé',
        'platform.card3.desc': 'Affectations, rappels, notes SMS/courriel et relances pour faire progresser chaque acheteur potentiel.',
        'platform.card4.title': 'Tableau de bord performance',
        'platform.card4.desc': "Suivez les ventes, prospects, statut d'inventaire et activité des utilisateurs en un coup d'œil.",
        'solutions.eyebrow': 'Solutions',
        'solutions.title': 'Pensé pour les recherches des concessionnaires de l\'Est du Canada.',
        'solutions.desc': 'Créateur de site de concession, CRM concession avec site web, et automatisation Marketplace sur une seule plateforme.',
        'solutions.card1.title': 'Créateur de site de concession',
        'solutions.card1.desc': "Lancez rapidement un site de concession avec pages d'inventaire, CTA reprise et financement, et design mobile d'abord.",
        'solutions.card2.title': 'Créateur de site de concession auto',
        'solutions.card2.desc': 'Comparez la vitesse de lancement, l\'intégration CRM et le support pour choisir le meilleur créateur pour les petites équipes.',
        'solutions.card3.title': 'CRM concession avec site web',
        'solutions.card3.desc': 'Les formulaires du site se connectent directement à votre CRM pour le routage, les rappels et les suivis.',
        'solutions.card4.title': 'Créateur de site CRM',
        'solutions.card4.desc': 'Plateforme tout-en-un qui remplace les outils ajoutés et garde chaque lead dans une seule boîte de réception.',
        'solutions.card5.title': 'CRM concession',
        'solutions.card5.desc': 'Vues pipeline, tâches, notes et propriétaires pour qu\'aucune demande ne se perde.',
        'solutions.card6.title': 'Publication auto Facebook Marketplace',
        'solutions.card6.desc': 'Publiez automatiquement sur Marketplace et gardez des annonces fraîches avec des outils IA pour les véhicules.',
        'faq.eyebrow': 'FAQ',
        'faq.title': 'Questions que les concessionnaires posent avant de choisir un créateur de site',
        'faq.desc': 'Réponses courtes aux questions que nous entendons le plus chez les concessionnaires de l\'Est du Canada.',
        'faq.q1': 'Combien de temps faut-il pour lancer un site automobile avec LSV Auto Cloud ?',
        'faq.a1': 'Le délai moyen est de 20 jours entre le lancement du projet et la mise en ligne. Nous gérons la mise en place, l\'hébergement et la configuration des leads pour que votre équipe se concentre sur les ventes.',
        'faq.q2': 'Quelles fonctionnalités sont incluses dans les sites LSV Auto Cloud ?',
        'faq.a2': 'Les sites LSV Auto Cloud incluent des pages mobile-first personnalisées, des mises en avant d\'inventaire, des CTA financement, un routage des leads avec rappels et notes, l\'automatisation IA des annonces pour Facebook Marketplace, et des tableaux de bord pour ventes, leads, inventaire et utilisateurs.',
        'faq.q3': 'Comment fonctionne l\'automatisation IA des annonces ?',
        'faq.a3': 'L\'IA génère le texte des annonces à partir de vos données d\'inventaire, optimise les photos et publie automatiquement sur Facebook Marketplace pour garder vos annonces visibles sans effort manuel.',
        'faq.q4': 'Quels résultats puis-je attendre ?',
        'faq.a4': 'Selon les premières données, les concessionnaires voient des réponses 22 % plus rapides en 30 jours et 15 % de rendez-vous en plus en 60 jours après la mise en ligne, grâce aux notifications de la boîte de réception unifiée et au routage des leads.',
        'faq.q5': 'Qui est le meilleur créateur de site de concession pour les petits concessionnaires ?',
        'faq.a5': 'LSV Auto Cloud se spécialise dans les petites équipes, avec un lancement en environ 20 jours, hébergement inclus, autoposting Marketplace et routage des leads intégré.',
        'process.eyebrow': 'Comment ça marche',
        'process.title': 'Un déploiement efficace adapté aux équipes automobiles en action.',
        'process.desc': "Nous faisons le gros du travail pour que votre équipe reste concentrée sur la prochaine conversation.",
        'process.step1.title': 'Montrez-nous votre marque',
        'process.step1.desc': "Partagez votre logo, vos véhicules et vos priorités. Nous créons votre page d'accueil et vos pages principales.",
        'process.step2.title': 'Lancement en quelques jours',
        'process.step2.desc': "Nous configurons l'hébergement, la capture de prospects et les règles de routage pour qu'un responsable soit assigné à chaque demande.",
        'process.step3.title': 'Traitez chaque prospect',
        'process.step3.desc': 'Votre équipe utilise le système de gestion pour consigner les appels, ajouter des notes et gérer les rappels.',
        'demo.eyebrow': 'Réserver une démo',
        'demo.title': 'Voyez LSV Auto Cloud en action',
        'demo.desc': "Choisissez une plage horaire de 30 minutes pour découvrir le site pour concessionnaire, le CRM et l'automatisation Marketplace. <strong>Aucune carte de crédit requise.</strong>",
        'demo.ariaLabel': 'Planifier une démo',
        'contact.eyebrow': 'Nous contacter',
        'contact.title': "Bâtissons ensemble quelque chose d'exceptionnel.",
        'contact.desc': 'Partagez-nous votre vision, et notre équipe vous contactera pour discuter de comment donner vie à la présence numérique de votre concessionnaire.',
        'form.name.label': 'Nom',
        'form.name.placeholder': 'Votre nom',
        'form.email.label': 'Courriel',
        'form.email.placeholder': 'email@exemple.com',
        'form.phone.label': 'Téléphone',
        'form.phone.placeholder': '(555) 123-4567',
        'form.business.label': 'Entreprise',
        'form.business.placeholder': 'Votre entreprise',
        'form.size.label': "Taille de l'équipe",
        'form.size.placeholder': 'Sélectionner...',
        'form.message.label': "Qu'aimeriez-vous améliorer?",
        'form.message.placeholder': 'Parlez-nous de votre concessionnaire et de vos besoins...',
        'form.privacy': "En soumettant ce formulaire, vous acceptez d'être contacté par LSV Auto Cloud. Nous respectons votre vie privée et ne partageons jamais vos informations.",
        'form.submit': 'Envoyer le message',
        'form.status.incomplete': 'Veuillez remplir tous les champs obligatoires.',
        'form.button.sending': 'Envoi en cours...',
        'form.error.server': "Nous rencontrons des difficultés techniques. Veuillez réessayer dans quelques minutes ou nous écrire directement à contact@lsvautocloud.com",
        'form.error.generic': "Désolé, nous n'avons pas pu envoyer votre message. Veuillez vérifier votre connexion et réessayer.",
        'footer.copy': '© <span id="footer-year">2025</span> LSV Auto Cloud. Tous droits réservés.',
        'footer.privacy': 'Politique de confidentialité',
        'footer.terms': 'Conditions d\'utilisation',
        'footer.powered': 'Propulsé par LSV Auto Cloud',
        'modal.title': 'Message envoyé',
        'modal.body': 'Merci! Nous avons bien reçu votre demande et vous répondrons dans un délai d\'un jour ouvrable.',
        'modal.close': 'Fermer',
        'backToTop': 'Retour en haut',
        'cookie.message': '<strong>Nous utilisons des cookies</strong> pour améliorer votre expérience et analyser le trafic du site. En continuant, vous acceptez notre utilisation des cookies.',
        'cookie.accept': 'Accepter',
        'cookie.decline': 'Refuser',
        'cookie.ariaLabel': 'Consentement aux cookies',
        'privacy.lastUpdated': 'Dernière mise à jour : 2026-01-09',
        'privacy.title': 'Politique de confidentialité',
        'privacy.intro': 'LSV Auto Cloud (« nous ») s’engage à protéger votre vie privée. Cette politique explique comment nous recueillons, utilisons et protégeons vos renseignements personnels conformément à la Loi 25 du Québec, à la LPRPDE et aux autres lois applicables.',
        'privacy.scope.title': 'Champ d’application',
        'privacy.scope.desc': 'Cette politique s’applique aux renseignements personnels recueillis via notre site (lsvautocloud.com), notre plateforme de création de sites automobiles et CRM (« Services ») et toutes les interactions connexes. En utilisant nos Services, vous consentez aux pratiques décrites ici.',
        'privacy.responsible.title': 'Responsable du traitement',
        'privacy.responsible.desc': 'LSV Auto Cloud, situé à Montréal (Québec, Canada), est responsable de vos renseignements personnels. Pour toute question, écrivez-nous à <a href="mailto:support@lsvautocloud.com">support@lsvautocloud.com</a>.',
        'privacy.collect.title': 'Renseignements que nous recueillons',
        'privacy.collect.website.title': 'Visiteurs du site web',
        'privacy.collect.website.item1': '<strong>Données de formulaires :</strong> Nom, courriel, téléphone, entreprise, taille d’équipe et message lorsque vous soumettez un formulaire.',
        'privacy.collect.website.item2': '<strong>Réservations de démo :</strong> Nom, courriel, téléphone et créneau choisi via Cal.com (soumis à leur politique).',
        'privacy.collect.website.item3': '<strong>Données analytiques :</strong> Via GA4, IP anonymisée, pages vues, sources de référence, localisation approximative, appareil, navigateur, durée de session.',
        'privacy.collect.website.item4': '<strong>Témoins et suivi :</strong> Témoins de session, préférences (langue) et témoins analytiques. Voir la section Témoins.',
        'privacy.collect.customers.title': 'Clients du Service (concessionnaires)',
        'privacy.collect.customers.item1': '<strong>Informations de compte :</strong> Entreprise, personne contact, courriel, téléphone, adresse de facturation, paiement (traité via processeurs sécurisés).',
        'privacy.collect.customers.item2': '<strong>Données d’utilisation :</strong> Identifiants, journaux d’activité, statistiques, données CRM saisies (noms, coordonnées, préférences, notes), inventaire (annonces, photos, descriptions), contenu de site.',
        'privacy.collect.customers.item3': '<strong>Échanges :</strong> Courriels, billets de support, appels et messages avec notre équipe.',
        'privacy.collect.customers.item4': '<strong>Données techniques :</strong> IP, navigateur, système, heures d’accès et schémas d’utilisation pour la sécurité et l’amélioration.',
        'privacy.collect.end.title': 'Données des utilisateurs finaux (vos clients)',
        'privacy.collect.end.desc': 'Quand vous utilisez le CRM et la gestion des leads, vous collectez des données sur vos clients. Vous en êtes responsable; nous agissons comme fournisseur. À vous d’obtenir les consentements requis et d’informer vos clients.',
        'privacy.legal.title': 'Fondements juridiques',
        'privacy.legal.intro': 'Selon la Loi 25, nous traitons vos renseignements sur les bases suivantes :',
        'privacy.legal.item1': '<strong>Consentement :</strong> Formulaires, démos ou comptes créés avec votre accord explicite.',
        'privacy.legal.item2': '<strong>Exécution du contrat :</strong> Nécessaire pour fournir les Services (hébergement, CRM, soutien).',
        'privacy.legal.item3': '<strong>Obligations légales :</strong> Respect des exigences fiscales, comptables, antifraude et autres lois.',
        'privacy.legal.item4': '<strong>Intérêts légitimes :</strong> Amélioration, sécurité et analytique, dans le respect de vos droits.',
        'privacy.use.title': 'Utilisation des renseignements',
        'privacy.use.item1': '<strong>Prestation du Service :</strong> Fournir, maintenir et améliorer la plateforme (site, CRM, routage de leads, Marketplace, IA).',
        'privacy.use.item2': '<strong>Soutien :</strong> Répondre aux demandes et résoudre les problèmes.',
        'privacy.use.item3': '<strong>Facturation :</strong> Traiter les paiements et gérer la facturation.',
        'privacy.use.item4': '<strong>Communications :</strong> Avis liés au service, mises à jour et réponses à vos demandes.',
        'privacy.use.item5': '<strong>Marketing :</strong> Avec consentement, envoi de courriels promotionnels (désabonnement possible en tout temps).',
        'privacy.use.item6': '<strong>Analytique :</strong> Analyse de l’usage pour améliorer et développer de nouvelles fonctionnalités.',
        'privacy.use.item7': '<strong>Sécurité/fraude :</strong> Détecter, prévenir et répondre aux incidents et violations.',
        'privacy.use.item8': '<strong>Conformité :</strong> Respect des lois, règlements et demandes gouvernementales.',
        'privacy.sharing.title': 'Partage et divulgation',
        'privacy.sharing.intro': 'Nous ne vendons pas vos renseignements personnels. Le partage se limite aux situations suivantes :',
        'privacy.sharing.providers.title': 'Fournisseurs de services',
        'privacy.sharing.providers.desc': 'Fournisseurs tiers de confiance, sous obligations contractuelles de protection :',
        'privacy.sharing.providers.item1': '<strong>Hébergement :</strong> Infrastructure infonuagique.',
        'privacy.sharing.providers.item2': '<strong>Analytique :</strong> Google Analytics.',
        'privacy.sharing.providers.item3': '<strong>Planification :</strong> Cal.com pour les démos.',
        'privacy.sharing.providers.item4': '<strong>Paiements :</strong> Processeurs sécurisés (nous ne recevons pas tous les détails).',
        'privacy.sharing.providers.item5': '<strong>Courriel :</strong> Fournisseurs pour communications transactionnelles/marketing.',
        'privacy.sharing.providers.item6': '<strong>Support :</strong> Outils de billetterie et de communication.',
        'privacy.sharing.legal.title': 'Exigences légales et protection',
        'privacy.sharing.legal.desc': 'Divulgation possible si exigée par la loi ou nécessaire pour protéger nos droits, notre sécurité ou celle du public.',
        'privacy.sharing.business.title': 'Transferts d’entreprise',
        'privacy.sharing.business.desc': 'En cas de fusion, acquisition ou vente d’actifs, les renseignements peuvent être transférés. Nous vous informerons des changements et de vos choix.',
        'privacy.international.title': 'Transferts internationaux',
        'privacy.international.desc': 'Certains fournisseurs peuvent être situés hors Québec/Canada (ex. États-Unis). Nous appliquons des garanties appropriées (clauses contractuelles types) conformément à la Loi 25.',
        'privacy.security.title': 'Sécurité des données',
        'privacy.security.intro': 'Mesures pour protéger vos renseignements contre l’accès ou la divulgation non autorisés :',
        'privacy.security.item1': '<strong>Chiffrement :</strong> TLS/SSL en transit; données sensibles chiffrées au repos.',
        'privacy.security.item2': '<strong>Contrôles d’accès :</strong> Accès basé sur les rôles et authentification.',
        'privacy.security.item3': '<strong>Surveillance :</strong> Audits, évaluations de vulnérabilité et surveillance.',
        'privacy.security.item4': '<strong>Formation :</strong> Personnel formé à la confidentialité et tenu à la confidentialité.',
        'privacy.security.item5': '<strong>Réponse aux incidents :</strong> Plan de réponse pour détecter, répondre et signaler selon la loi.',
        'privacy.security.breach': 'En cas d’incident présentant un risque sérieux, nous aviserons les personnes touchées et la CAI conformément à la Loi 25.',
        'privacy.retention.title': 'Conservation des données',
        'privacy.retention.desc': 'Conservation seulement pour les fins prévues, les obligations légales et la résolution de différends. Exemples :',
        'privacy.retention.item1': '<strong>Comptes actifs :</strong> Pendant l’abonnement et une période raisonnable ensuite.',
        'privacy.retention.item2': '<strong>Comptes annulés :</strong> Certaines données jusqu’à 30 jours pour export, puis suppression/anonymisation sauf obligation légale.',
        'privacy.retention.item3': '<strong>Documents financiers :</strong> Conservés 7 ans pour conformité fiscale/comptable.',
        'privacy.retention.item4': '<strong>Données marketing :</strong> Conservées jusqu’à désabonnement ou demande de suppression.',
        'privacy.retention.item5': '<strong>Données analytiques :</strong> Données agrégées/anonymisées conservées à des fins statistiques.',
        'privacy.cookies.title': 'Témoins et technologies de suivi',
        'privacy.cookies.intro': 'Nous utilisons des témoins et technologies similaires pour faire fonctionner notre site et nos Services :',
        'privacy.cookies.item1': '<strong>Témoins essentiels :</strong> Fonctionnement, authentification, sécurité. Indispensables.',
        'privacy.cookies.item2': '<strong>Témoins de préférence :</strong> Langue et préférences.',
        'privacy.cookies.item3': '<strong>Témoins analytiques :</strong> Google Analytics avec votre consentement via la bannière.',
        'privacy.cookies.control': 'Gérez les témoins dans votre navigateur. La désactivation peut limiter certaines fonctions. Pour refuser GA, utilisez le module <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">Opt-out</a>.',
        'privacy.rights.title': 'Vos droits',
        'privacy.rights.intro': 'En vertu de la Loi 25 et des lois canadiennes, vous disposez des droits suivants :',
        'privacy.rights.item1': '<strong>Droit d’accès :</strong> Obtenir confirmation et copie des renseignements détenus.',
        'privacy.rights.item2': '<strong>Droit de rectification :</strong> Corriger les renseignements inexacts ou incomplets.',
        'privacy.rights.item3': '<strong>Droit à l’effacement :</strong> Demander la suppression, sous réserve des obligations de conservation.',
        'privacy.rights.item4': '<strong>Droit à la portabilité :</strong> Recevoir vos données dans un format structuré et lisible par machine.',
        'privacy.rights.item5': '<strong>Droit de retirer le consentement :</strong> Retirer votre consentement à tout moment (sans effet rétroactif).',
        'privacy.rights.item6': '<strong>Droit d’opposition :</strong> Vous opposer au traitement pour le marketing ou fondé sur l’intérêt légitime.',
        'privacy.rights.item7': '<strong>Droit de restriction :</strong> Demander la limitation du traitement dans certains cas.',
        'privacy.rights.item8': '<strong>Plainte :</strong> Déposer une plainte auprès de la Commission d’accès à l’information du Québec (CAI).',
        'privacy.rights.exercise': 'Pour exercer vos droits, écrivez à <a href="mailto:support@lsvautocloud.com">support@lsvautocloud.com</a>. Réponse sous 30 jours, après vérification d’identité au besoin.',
        'privacy.marketing.title': 'Communications marketing',
        'privacy.marketing.desc': 'Vous pouvez vous désabonner des courriels marketing à tout moment via le lien de désabonnement ou en nous écrivant. Les messages transactionnels essentiels continueront.',
        'privacy.automated.title': 'Décisions automatisées',
        'privacy.automated.desc': 'Nos fonctions IA (annonces, suggestions de communication) sont des recommandations soumises à votre validation. Aucune décision automatisée produisant des effets juridiques sans intervention humaine.',
        'privacy.children.title': 'Vie privée des enfants',
        'privacy.children.desc': 'Nos Services ne visent pas les moins de 16 ans et nous ne collectons pas sciemment leurs données. Toute collecte non autorisée sera supprimée.',
        'privacy.thirdparty.title': 'Sites et services tiers',
        'privacy.thirdparty.desc': 'Notre site/Service peut inclure des liens ou intégrations (Cal.com, Google Analytics, Facebook Marketplace). Nous ne sommes pas responsables de leurs pratiques; consultez leurs politiques.',
        'privacy.changes.title': 'Modifications',
        'privacy.changes.desc': 'Cette politique peut être mise à jour pour refléter nos pratiques ou les exigences légales. La date « Dernière mise à jour » l’indique. Nous aviserons des changements importants au moins 30 jours avant. Votre usage continu vaut acceptation.',
        'privacy.cai.title': "Commission d'accès à l'information du Québec (CAI)",
        'privacy.cai.desc': 'Pour toute préoccupation ou plainte concernant vos renseignements personnels, vous pouvez joindre la CAI :',
        'privacy.cai.contact': "Commission d'accès à l'information du Québec<br>Québec : 525, boul. René-Lévesque Est, bureau 1.20, Québec (Québec) G1R 5S9<br>Montréal : 500, boul. René-Lévesque Ouest, bureau 10.200, Montréal (Québec) H2Z 1W7<br>Téléphone : 1-888-528-7741<br>Site web : <a href=\"https://www.cai.gouv.qc.ca\" target=\"_blank\" rel=\"noopener\">www.cai.gouv.qc.ca</a>",
        'privacy.contact.title': 'Nous contacter',
        'privacy.contact.desc': 'Pour toute question ou demande concernant cette politique ou nos pratiques, contactez-nous :',
        'privacy.contact.info': 'LSV Auto Cloud<br>Courriel : <a href="mailto:support@lsvautocloud.com">support@lsvautocloud.com</a><br>Localisation : Montréal, Québec, Canada',
        'terms.lastUpdated': 'Dernière mise à jour : 2026-01-09',
        'terms.title': 'Conditions d\'utilisation',
        'terms.intro': 'Ces Conditions d\'utilisation (« Conditions ») régissent votre utilisation du site Web et des services de LSV Auto Cloud. En accédant ou en utilisant notre site ou nos services, vous acceptez ces Conditions.',
        'terms.services.title': 'Services',
        'terms.services.desc': 'LSV Auto Cloud fournit des services de création de sites Web automobiles, CRM pour concessionnaires, gestion de prospects, automatisation de Facebook Marketplace, annonces de véhicules alimentées par l\'IA et services connexes (« Services »). Les fonctionnalités et la disponibilité des services peuvent varier en fonction du forfait que vous avez sélectionné.',
        'terms.useOfServices.title': 'Utilisation des services',
        'terms.useOfServices.item1': 'Vous devez fournir des informations exactes lorsque vous soumettez des formulaires, réservez des démos ou vous inscrivez à des services.',
        'terms.useOfServices.item2': 'Vous vous conformerez aux lois applicables et éviterez toute utilisation abusive du site (y compris les tentatives de perturbation, de rétro-ingénierie ou d\'accès non autorisé).',
        'terms.useOfServices.item3': 'Vous êtes responsable de toutes les activités menées via votre compte.',
        'terms.accounts.title': 'Comptes et sécurité',
        'terms.accounts.item1': 'Si nous vous fournissons des identifiants pour accéder à un portail ou à un CRM, vous êtes responsable de leur sécurité et de toutes les activités menées via votre compte.',
        'terms.accounts.item2': 'Vous devez nous informer rapidement de toute utilisation non autorisée ou de toute préoccupation en matière de sécurité.',
        'terms.accounts.item3': 'Nous nous réservons le droit de suspendre les comptes qui violent ces Conditions ou présentent des risques de sécurité.',
        'terms.subscription.title': 'Abonnement et modalités de paiement',
        'terms.subscription.item1': 'Les Services sont fournis sur une base d\'abonnement avec une tarification déterminée par le forfait que vous avez sélectionné.',
        'terms.subscription.item2': 'Le paiement est dû selon le calendrier de facturation convenu (généralement mensuel ou annuel).',
        'terms.subscription.item3': 'Tous les frais sont en CAD sauf indication contraire et ne sont pas remboursables sauf si la loi l\'exige.',
        'terms.subscription.item4': 'Nous nous réservons le droit de modifier les prix avec un préavis de 30 jours aux clients existants.',
        'terms.subscription.item5': 'Les retards de paiement peuvent entraîner une suspension du service jusqu\'à ce que le solde du compte soit à jour.',
        'terms.subscription.item6': 'Vous êtes responsable de toutes les taxes associées aux Services.',
        'terms.delivery.title': 'Livraison et délais de service',
        'terms.delivery.item1': 'Nous visons à lancer de nouveaux sites Web de concessionnaires dans les 20 jours ouvrables suivant le lancement du projet, sous réserve de la fourniture en temps opportun des documents requis (logos, contenu, données d\'inventaire) de votre part.',
        'terms.delivery.item2': 'Les délais de livraison sont des estimations et peuvent varier en fonction de la complexité du projet et de votre réactivité.',
        'terms.delivery.item3': 'Vous acceptez de fournir le contenu, les commentaires et les approbations nécessaires dans des délais raisonnables pour éviter les retards.',
        'terms.delivery.item4': 'Des changements importants de périmètre peuvent nécessiter des ajustements de délais et de tarification.',
        'terms.cancellation.title': 'Annulation et remboursements',
        'terms.cancellation.item1': 'Les abonnements mensuels peuvent être annulés à tout moment avec un préavis de 30 jours. Le service se poursuivra jusqu\'à la fin de la période de facturation en cours.',
        'terms.cancellation.item2': 'Les abonnements annuels peuvent être annulés avec un préavis de 30 jours, mais ne sont pas remboursables pour les mois inutilisés.',
        'terms.cancellation.item3': 'Les frais de configuration initiaux ne sont pas remboursables une fois les travaux commencés.',
        'terms.cancellation.item4': 'En cas d\'annulation, votre site Web sera mis hors ligne et vous perdrez l\'accès à la plateforme, au CRM et à toutes les données hébergées.',
        'terms.cancellation.item5': 'Vous pouvez demander une exportation de vos données (informations clients, enregistrements d\'inventaire, contenu du site Web) dans les 30 jours suivant l\'annulation, sous réserve du paiement de tous les frais impayés.',
        'terms.ip.title': 'Propriété intellectuelle',
        'terms.ip.item1': 'La plateforme, les logiciels, l\'image de marque et la documentation de LSV Auto Cloud appartiennent à LSV Auto Cloud ou à nos concédants de licence et sont protégés par la loi.',
        'terms.ip.item2': 'Vous ne pouvez pas copier, modifier ou redistribuer notre logiciel ou plateforme, sauf dans les cas autorisés par ces Conditions ou avec notre autorisation écrite.',
        'terms.ip.item3': 'Il vous est expressément interdit de copier, de procéder à la rétro-ingénierie, de décompiler ou de tenter d\'extraire le code source de tout site Web créé par LSV Auto Cloud, que ce soit pour votre propre usage ou pour des tiers.',
        'terms.ip.item4': 'Nous conservons tous les droits sur les améliorations, mises à jour et œuvres dérivées de notre plateforme.',
        'terms.data.title': 'Contenu client et propriété des données',
        'terms.data.item1': 'Vous conservez la propriété de tout le contenu que vous fournissez (détails d\'inventaire, logos, images, textes, données clients).',
        'terms.data.item2': 'Vous nous accordez une licence limitée pour utiliser votre contenu afin de vous fournir les Services, y compris l\'hébergement, l\'affichage et les fonctionnalités d\'automatisation.',
        'terms.data.item3': 'Vous êtes responsable de vous assurer que vous disposez des droits sur tout le contenu que vous fournissez et qu\'il ne viole aucun droit de tiers.',
        'terms.data.item4': 'Nous ne vendrons ni ne partagerons vos données clients avec des tiers, sauf si cela est nécessaire pour fournir les Services ou si la loi l\'exige.',
        'terms.data.item5': 'À la fin du service, nous vous fournirons vos données dans des formats standard dans les 30 jours suivant votre demande.',
        'terms.ai.title': 'Fonctionnalités d\'IA et d\'automatisation',
        'terms.ai.item1': 'Nos fonctionnalités d\'IA (y compris la génération d\'annonces et l\'assistance à la communication avec les clients) sont fournies en tant qu\'outils pour aider vos opérations commerciales.',
        'terms.ai.item2': 'Le contenu généré par l\'IA est fourni à titre de suggestions et doit être examiné avant publication.',
        'terms.ai.item3': 'Vous êtes seul responsable de tout le contenu publié via nos Services, y compris le contenu assisté par l\'IA.',
        'terms.ai.item4': 'Nous ne garantissons pas l\'exactitude ou la pertinence des suggestions générées par l\'IA.',
        'terms.thirdParty.title': 'Facebook Marketplace et plateformes tierces',
        'terms.thirdParty.item1': 'L\'utilisation des fonctionnalités de publication automatique sur Facebook Marketplace nécessite le respect des conditions d\'utilisation et des politiques de Facebook.',
        'terms.thirdParty.item2': 'Vous êtes responsable du maintien de votre compte Facebook en règle et de tout le contenu publié sur Marketplace.',
        'terms.thirdParty.item3': 'Nous ne sommes pas responsables des suspensions de compte, des restrictions de publication ou des violations de politique par des plateformes tierces.',
        'terms.thirdParty.item4': 'Les modifications apportées aux API ou aux politiques des plateformes tierces peuvent affecter la disponibilité du service sans préavis.',
        'terms.uptime.title': 'Niveau de service et disponibilité',
        'terms.uptime.item1': 'Nous nous efforçons de maintenir une disponibilité de 99 % pour nos Services, mais ne garantissons pas une disponibilité ininterrompue.',
        'terms.uptime.item2': 'La maintenance programmée sera communiquée à l\'avance lorsque cela est possible.',
        'terms.uptime.item3': 'Nous ne sommes pas responsables des temps d\'arrêt causés par des facteurs indépendants de notre volonté (problèmes Internet, pannes de fournisseur d\'hébergement, etc.).',
        'terms.thirdPartyServices.title': 'Services tiers',
        'terms.thirdPartyServices.desc': 'Notre site et nos Services peuvent intégrer des services tiers (par exemple, Cal.com pour la planification, Google Analytics, API Facebook). Leurs conditions et politiques de confidentialité respectives régissent votre utilisation de ces services.',
        'terms.support.title': 'Support et maintenance',
        'terms.support.item1': 'Le support est fourni par courriel pendant les heures de bureau (du lundi au vendredi, de 9 h à 17 h HNE).',
        'terms.support.item2': 'Nous assurerons la maintenance et la mise à jour de la plateforme pour garantir la sécurité et la compatibilité.',
        'terms.support.item3': 'Les mises à jour majeures et les améliorations sont fournies à notre discrétion.',
        'terms.disclaimers.title': 'Avis de non-responsabilité',
        'terms.disclaimers.desc': 'Les Services sont fournis « tels quels » sans garantie d\'aucune sorte. Dans toute la mesure permise par la loi, nous déclinons toute garantie implicite, y compris la qualité marchande, l\'adéquation à un usage particulier et l\'absence de contrefaçon. Nous ne garantissons pas que les Services répondront à vos exigences commerciales spécifiques ou généreront un niveau particulier de ventes ou de prospects.',
        'terms.liability.title': 'Limitation de responsabilité',
        'terms.liability.desc': 'Dans la mesure permise par la loi, LSV Auto Cloud ne sera pas responsable des dommages indirects, accessoires, spéciaux, consécutifs ou punitifs, y compris, mais sans s\'y limiter, la perte de profits, la perte de revenus, la perte de données ou la perte d\'opportunités commerciales, découlant de votre utilisation des Services. Notre responsabilité totale pour toute réclamation découlant des Services ne dépassera pas le montant total que vous avez payé à LSV Auto Cloud au cours des douze (12) mois précédant la réclamation, ou mille CAD (1 000 $ CAD), selon le montant le moins élevé.',
        'terms.indemnity.title': 'Indemnisation',
        'terms.indemnity.desc': 'Vous acceptez d\'indemniser, de défendre et de dégager de toute responsabilité LSV Auto Cloud, ses dirigeants, administrateurs, employés et agents de toute réclamation, dommage, perte, responsabilité et dépense (y compris les honoraires d\'avocat raisonnables) découlant de : (a) votre utilisation ou mauvaise utilisation des Services, (b) votre violation de ces Conditions, (c) votre violation de tout droit de tiers, y compris les droits de propriété intellectuelle, (d) le contenu que vous fournissez ou publiez via les Services.',
        'terms.termination.title': 'Résiliation',
        'terms.termination.item1': 'Nous pouvons suspendre ou résilier votre accès aux Services si vous violez ces Conditions, ne payez pas les frais ou pour des raisons de sécurité ou juridiques.',
        'terms.termination.item2': 'En cas de résiliation, vous devez payer tous les frais impayés et perdrez l\'accès à la plateforme.',
        'terms.termination.item3': 'Les dispositions relatives à la propriété intellectuelle, aux avis de non-responsabilité, à la limitation de responsabilité et à l\'indemnisation survivent à la résiliation.',
        'terms.changes.title': 'Modifications des conditions',
        'terms.changes.desc': 'Nous pouvons mettre à jour ces Conditions de temps à autre pour refléter les changements apportés à nos Services ou aux exigences légales. La date « Dernière mise à jour » reflète les modifications les plus récentes. Nous vous informerons des modifications importantes par courriel ou notification sur la plateforme. L\'utilisation continue des Services après l\'entrée en vigueur des modifications constitue l\'acceptation des Conditions mises à jour.',
        'terms.dispute.title': 'Résolution des différends',
        'terms.dispute.item1': 'En cas de différend, nous vous encourageons à nous contacter d\'abord pour résoudre le problème de manière informelle.',
        'terms.dispute.item2': 'Tout différend qui ne peut être résolu de manière informelle sera soumis à un arbitrage exécutoire conformément aux règles de l\'Association canadienne d\'arbitrage, mené à Montréal, Québec.',
        'terms.dispute.item3': 'Vous acceptez de soumettre les différends à l\'arbitrage sur une base individuelle et renoncez à tout droit de participer à des recours collectifs.',
        'terms.law.title': 'Droit applicable',
        'terms.law.desc': 'Ces Conditions sont régies par les lois de la province de Québec et les lois du Canada qui s\'y appliquent, sans égard aux principes de conflit de lois. Toute action en justice doit être intentée devant les tribunaux situés à Montréal, Québec.',
        'terms.agreement.title': 'Accord intégral',
        'terms.agreement.desc': 'Ces Conditions constituent l\'intégralité de l\'accord entre vous et LSV Auto Cloud concernant les Services et remplacent tous les accords ou ententes antérieurs, qu\'ils soient écrits ou oraux.',
        'terms.severability.title': 'Divisibilité',
        'terms.severability.desc': 'Si une disposition de ces Conditions est jugée inapplicable ou invalide, cette disposition sera limitée ou éliminée dans la mesure minimale nécessaire, et les dispositions restantes resteront pleinement en vigueur.',
        'terms.contact.title': 'Contact',
        'terms.contact.desc': 'Pour toute question concernant ces Conditions, contactez <a href="mailto:support@lsvautocloud.com">support@lsvautocloud.com</a>.'
    },
};

const normalizeLang = (lang) => (lang || '').toLowerCase().split('-')[0];
const getStoredLanguage = () => {
    try {
        return localStorage.getItem('lsvLang');
    } catch (error) {
        console.warn('Unable to access localStorage for language', error);
        return null;
    }
};

const detectLanguage = () => {
    const stored = getStoredLanguage();
    if (stored && supportedLanguages.includes(stored)) return stored;

    const browserLanguages = (navigator.languages || [navigator.language || navigator.userLanguage || ''])
        .map(normalizeLang)
        .filter(Boolean);

    const match = browserLanguages.find((lang) => supportedLanguages.includes(lang));
    return match || 'en';
};

let currentLanguage = detectLanguage();
let navToggleRef = null;

const translate = (key) => translations[currentLanguage]?.[key] ?? translations.en[key] ?? '';

const updateLangUI = () => {
    const nextLang = currentLanguage === 'en' ? 'fr' : 'en';
    document.querySelectorAll('[data-role="lang-toggle"]').forEach((button) => {
        const codeKey = `lang.${nextLang}`;
        const label = translate(codeKey) || nextLang.toUpperCase();
        button.textContent = label;
        button.dataset.nextLang = nextLang;
        button.classList.add('is-active');
        const ariaLabel = translate(nextLang === 'en' ? 'lang.switchToEn' : 'lang.switchToFr') || 'Change language';
        button.setAttribute('aria-label', ariaLabel);
    });
};

const applyTranslations = () => {
    document.documentElement.setAttribute('lang', currentLanguage);
    const dictionary = translations[currentLanguage] || translations.en;

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.dataset.i18n;
        const translation = dictionary[key] ?? translations.en[key];
        if (!translation) return;

        const isFormControl = ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName);
        const attrs = (el.dataset.i18nAttr || '')
            .split(',')
            .map((attr) => attr.trim())
            .filter(Boolean);

        if (attrs.length) {
            attrs.forEach((attr) => el.setAttribute(attr, translation));
        }

        const shouldApplyText = el.dataset.i18nSkipText !== 'true' && !(isFormControl && !el.dataset.i18nAllowText);
        if (shouldApplyText) {
            el.innerHTML = translation;
        }
    });

    document.querySelectorAll('.comparison-lsv').forEach((el) => {
        el.setAttribute('data-label', translate('comparison.prefix.lsv'));
    });

    document.querySelectorAll('.comparison-other').forEach((el) => {
        el.setAttribute('data-label', translate('comparison.prefix.other'));
    });

    updateLangUI();
};

const setLanguage = (lang, { persist = true } = {}) => {
    if (!supportedLanguages.includes(lang)) {
        lang = 'en';
    }

    currentLanguage = lang;

    if (persist) {
        try {
            localStorage.setItem('lsvLang', lang);
        } catch (error) {
            console.warn('Unable to store language preference', error);
        }
    }

    applyTranslations();

    if (navToggleRef) {
        const navIsOpen = document.body.classList.contains('nav-open');
        navToggleRef.setAttribute('aria-label', translate(navIsOpen ? 'nav.toggle.close' : 'nav.toggle.open'));
    }
};

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

if (form && status) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        status.textContent = '';
        status.className = 'form-status';

        if (!form.checkValidity()) {
            form.reportValidity();
            status.textContent = translate('form.status.incomplete');
            status.classList.add('error');
            return;
        }

        const submitButton = form.querySelector('button[type="submit"]');
        if (submitButton) {
            submitButton.disabled = true;
            submitButton.innerHTML = `<span class="spinner-small"></span> ${translate('form.button.sending')}`;
            submitButton.classList.add('loading');
        }

        const formData = new FormData(form);
        const payload = Object.fromEntries(formData.entries());

        // Honeypot spam protection - reject if honeypot field is filled
        if (payload.website) {
            console.warn('Spam detected via honeypot field');
            // Pretend it worked to avoid giving spammers feedback
            setTimeout(() => {
                form.reset();
                setModalOpen(true);
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = originalButtonText;
                    submitButton.classList.remove('loading');
                }
            }, 1000);
            return;
        }

        // Remove honeypot field from payload
        delete payload.website;

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || `Server error: ${response.status}`);
            }

            status.textContent = '';
            form.reset();
            setModalOpen(true);

            // Track successful form submission
            trackEvent('form_submit', {
                form_name: 'contact_form',
                form_destination: '/api/contact'
            });
        } catch (error) {
            status.textContent = error.message.includes('Server error')
                ? translate('form.error.server')
                : translate('form.error.generic');
            status.classList.add('error');
        } finally {
            if (submitButton) {
                submitButton.disabled = false;
                submitButton.textContent = translate('form.submit');
                submitButton.classList.remove('loading');
            }
        }
    });
}

const navLinks = document.querySelectorAll('a[href^="#"]');
const header = document.querySelector('header');
const navToggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
const navBackdrop = document.getElementById('nav-backdrop');
const body = document.body;
const successModal = document.getElementById('success-modal');
const successBackdrop = document.getElementById('success-backdrop');
const successClose = document.getElementById('success-close');

const setNavOpen = (isOpen) => {
    if (!navToggle || !mobileNav) return;
    body.classList.toggle('nav-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', translate(isOpen ? 'nav.toggle.close' : 'nav.toggle.open'));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));

    if (isOpen) {
        // Focus trap: focus first link when menu opens
        const firstLink = mobileNav.querySelector('a');
        if (firstLink) {
            setTimeout(() => firstLink.focus(), 100);
        }
    } else {
        // Return focus to toggle button when menu closes
        navToggle.focus();
    }
};

const setModalOpen = (isOpen) => {
    if (!successModal || !successBackdrop) return;
    body.classList.toggle('modal-open', isOpen);
    successModal.setAttribute('aria-hidden', String(!isOpen));
    successBackdrop.setAttribute('aria-hidden', String(!isOpen));
};

if (navToggle) {
    navToggle.addEventListener('click', () => {
        const isOpen = body.classList.contains('nav-open');
        setNavOpen(!isOpen);
    });
}

navToggleRef = navToggle;

document.querySelectorAll('[data-role="lang-toggle"]').forEach((button) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const targetLang = button.dataset.nextLang || (currentLanguage === 'en' ? 'fr' : 'en');
        setLanguage(targetLang, { persist: true });
    });

    button.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            const targetLang = button.dataset.nextLang || (currentLanguage === 'en' ? 'fr' : 'en');
            setLanguage(targetLang, { persist: true });
        }
    });
});

setLanguage(currentLanguage, { persist: false });

if (navBackdrop) {
    navBackdrop.addEventListener('click', () => setNavOpen(false));
}

if (mobileNav) {
    mobileNav.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            setNavOpen(false);
        }
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && body.classList.contains('nav-open')) {
        setNavOpen(false);
    }
    if (event.key === 'Escape' && body.classList.contains('modal-open')) {
        setModalOpen(false);
    }
});

if (successBackdrop) {
    successBackdrop.addEventListener('click', () => setModalOpen(false));
}

if (successClose) {
    successClose.addEventListener('click', () => setModalOpen(false));
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let activeScrollAnimation = null;
let lastScrollTop = null;

const cancelScrollAnimation = () => {
    body.classList.remove('is-scroll-animating');
    if (!activeScrollAnimation) return;
    activeScrollAnimation.cancelled = true;
    if (activeScrollAnimation.rafId) {
        cancelAnimationFrame(activeScrollAnimation.rafId);
    }
    activeScrollAnimation = null;
};

const scrollToTop = (top) => {
    const clampedTop = Math.max(0, top);
    const nextTop = Math.round(clampedTop);
    if (nextTop === lastScrollTop) return;
    lastScrollTop = nextTop;
    window.scrollTo(0, nextTop);
};

const easeInOutSmootheststep = (t) => {
    // 7th-order S-curve: smooth position, velocity, and acceleration at ends.
    // 35t^4 - 84t^5 + 70t^6 - 20t^7
    const t2 = t * t;
    const t4 = t2 * t2;
    return t4 * (35 + t * (-84 + t * (70 - 20 * t)));
};

window.addEventListener('wheel', cancelScrollAnimation, { passive: true });
window.addEventListener('touchstart', cancelScrollAnimation, { passive: true });

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;

        const target = document.querySelector(targetId);
        if (!target) return;

        event.preventDefault();
        cancelScrollAnimation();

        if (body.classList.contains('nav-open')) {
            setNavOpen(false);
        }

        const headerOffset = header ? header.offsetHeight : 0;
        const elementTop = target.getBoundingClientRect().top + window.scrollY;
        const scrollTo = elementTop - headerOffset;

        if (prefersReducedMotion) {
            scrollToTop(scrollTo);
            return;
        }

        // Smooth scroll with balanced duration using custom easing
        const startPosition = window.scrollY;
        const distance = scrollTo - startPosition;
        const duration = 1600; // Slightly longer: 1600ms (1.6 seconds) for extra smoothness
        let startTime = null;

        if (Math.abs(distance) < 1) return;

        const scrollAnimation = { cancelled: false, rafId: null };
        activeScrollAnimation = scrollAnimation;
        lastScrollTop = null;
        body.classList.add('is-scroll-animating');

        function animation(currentTime) {
            if (scrollAnimation.cancelled) return;
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutSmootheststep(progress);

            scrollToTop(startPosition + distance * ease);

            if (progress < 1) {
                scrollAnimation.rafId = requestAnimationFrame(animation);
            } else {
                activeScrollAnimation = null;
                body.classList.remove('is-scroll-animating');
            }
        }

        scrollAnimation.rafId = requestAnimationFrame(animation);
    });
});

const footerYear = document.getElementById('footer-year');
if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
}

// Track demo button clicks
document.querySelectorAll('a[href*="calendly.com"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('click', {
            event_category: 'CTA',
            event_label: 'Book Demo',
            link_url: link.href
        });
    });
});

// Track Talk to Sales clicks
document.querySelectorAll('a[href="#contact"]').forEach(link => {
    link.addEventListener('click', () => {
        trackEvent('click', {
            event_category: 'CTA',
            event_label: 'Talk to Sales',
            link_url: '#contact'
        });
    });
});

// Track social media link clicks
document.querySelectorAll('.nav-social, .nav-social-mobile').forEach(link => {
    link.addEventListener('click', () => {
        const platform = link.href.includes('instagram') ? 'Instagram' : 'Facebook';
        trackEvent('click', {
            event_category: 'Social',
            event_label: platform,
            link_url: link.href
        });
    });
});

const revealOnScroll = (elements, options = {}) => {
    const elementList = Array.from(elements);
    if (!elementList.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        elementList.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    if (!('IntersectionObserver' in window)) {
        elementList.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                obs.unobserve(entry.target);
            });
        },
        {
            threshold: 0.2,
            rootMargin: '0px 0px -10% 0px',
            ...options,
        }
    );

    elementList.forEach((el) => observer.observe(el));
};

revealOnScroll(document.querySelectorAll('.feature-grid .feature'));

// Back to Top Button
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mobile Sticky CTA
const mobileStickyCta = document.getElementById('mobile-sticky-cta');
if (mobileStickyCta) {
    window.addEventListener('scroll', () => {
        // Show after scrolling past hero section (approximately 600px)
        if (window.scrollY > 600) {
            mobileStickyCta.classList.add('visible');
        } else {
            mobileStickyCta.classList.remove('visible');
        }
    }, { passive: true });

    // Track clicks on mobile sticky CTA
    mobileStickyCta.addEventListener('click', () => {
        trackEvent('click', {
            event_category: 'CTA',
            event_label: 'Mobile Sticky Book Demo',
            link_url: '#book-demo'
        });
    });
}

// Cookie Consent
const cookieConsent = document.getElementById('cookie-consent');
const acceptCookies = document.getElementById('accept-cookies');
const declineCookies = document.getElementById('decline-cookies');

const showCookieConsent = () => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
        setTimeout(() => {
            cookieConsent.classList.add('show');
        }, 1000);
    }
};

if (acceptCookies) {
    acceptCookies.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.classList.remove('show');

        // Enable analytics if consent is given
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
        }
    });
}

if (declineCookies) {
    declineCookies.addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        cookieConsent.classList.remove('show');

        // Disable analytics if consent is declined
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
        }
    });
}

showCookieConsent();

// Phone Number Formatting
const formatPhoneNumber = (value) => {
    // Remove all non-digit characters
    const phoneNumber = value.replace(/\D/g, '');

    // Format based on length
    if (phoneNumber.length <= 3) {
        return phoneNumber;
    } else if (phoneNumber.length <= 6) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    } else if (phoneNumber.length <= 10) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    } else {
        // Limit to 10 digits
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    }
};

const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        const cursorPosition = e.target.selectionStart;
        const oldLength = e.target.value.length;
        const formatted = formatPhoneNumber(e.target.value);
        e.target.value = formatted;

        // Adjust cursor position after formatting
        const newLength = formatted.length;
        const diff = newLength - oldLength;
        e.target.setSelectionRange(cursorPosition + diff, cursorPosition + diff);
    });

    // Prevent non-numeric input (except backspace, delete, arrow keys, etc.)
    phoneInput.addEventListener('keydown', (e) => {
        const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];
        if (!allowedKeys.includes(e.key) && !/^\d$/.test(e.key)) {
            e.preventDefault();
        }
    });
}

// Form Data Persistence
const saveFormData = () => {
    if (!form) return;
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        // Don't save honeypot field or message body to avoid persisting user text
        if (key === 'website' || key === 'message') return;
        data[key] = value;
    });

    localStorage.setItem('contactFormData', JSON.stringify(data));
};

const loadFormData = () => {
    if (!form) return;
    const savedData = localStorage.getItem('contactFormData');

    if (savedData) {
        try {
            const data = JSON.parse(savedData);

            // Ensure no stale message text persists from older saves
            if (data.message) {
                delete data.message;
                localStorage.setItem('contactFormData', JSON.stringify(data));
            }

            Object.keys(data).forEach(key => {
                const field = form.elements[key];
                if (field && data[key]) {
                    field.value = data[key];
                }
            });
        } catch (e) {
            console.error('Error loading form data:', e);
        }
    }
};

// Save form data on input
if (form) {
    const formInputs = form.querySelectorAll('input:not([type="submit"]), textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('input', saveFormData);
        input.addEventListener('change', saveFormData);
    });

    // Load saved data on page load
    loadFormData();

    // Clear saved data on successful submission
    const originalFormSubmit = form.addEventListener;
    form.addEventListener('submit', async (event) => {
        const wasSuccessful = await new Promise(resolve => {
            setTimeout(() => {
                // Check if form was reset (indicates success)
                const isEmpty = Array.from(formInputs).every(input => !input.value);
                if (isEmpty) {
                    localStorage.removeItem('contactFormData');
                }
                resolve(true);
            }, 2000);
        });
    });
}
