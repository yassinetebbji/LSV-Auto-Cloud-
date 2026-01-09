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
        'nav.results': 'Results',
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
        'hero.lead': 'Launch a dealer website with inventory listings, trade-in/finance leads, and a built-in CRM to organize customers, tasks, and follow-ups automatically. Montreal-based team. Launch in 20 days.',
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
        'product.feature.website.desc': 'Car dealership website builder with CRM integration, personalized mobile-first layouts, inventory highlights, and financing CTAs that make calling easy.',
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
        'why.card3.desc': 'Unlike generic website builders, we understand inventory feeds, trade-in forms, financing CTAs, and dealer-specific lead flows.',
        'why.card4.title': 'AI that actually helps you sell',
        'why.card4.desc': 'Auto-post to Facebook Marketplace, draft follow-up messages, and get intelligent reminders—not just chatbots.',
        'why.card5.title': "Mobile-first for today's buyers",
        'why.card5.desc': 'Most shoppers browse on phones. Your site works beautifully on mobile with click-to-call and optimized layouts.',
        'why.card6.title': 'Montreal-based, North America-focused',
        'why.card6.desc': 'Real support from our Canadian team. We understand US and Canadian markets, regulations, and dealer challenges.',
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
        'solutions.title': 'Built to rank for the searches dealers make.',
        'solutions.desc': 'Automotive website builder, dealer CRM with website, lead routing, and Marketplace automation in one platform.',
        'solutions.card1.title': 'Automotive website builder',
        'solutions.card1.desc': 'Launch a car dealership website fast with inventory pages, financing CTAs, and mobile-first design.',
        'solutions.card2.title': 'Car dealer website builder',
        'solutions.card2.desc': 'Purpose-built templates and CRM hooks so dealers convert more web traffic into calls and appointments.',
        'solutions.card3.title': 'Dealer CRM with website',
        'solutions.card3.desc': 'Integrated CRM, lead routing, and reminders tied directly to your website forms and calls.',
        'solutions.card4.title': 'Facebook Marketplace auto posting',
        'solutions.card4.desc': 'Auto-post inventory to Marketplace and keep listings refreshed with AI vehicle listing tools.',
        'solutions.card5.title': 'Dealer lead management system',
        'solutions.card5.desc': 'Assign leads, capture notes, and trigger follow-ups automatically so every inquiry has an owner.',
        'solutions.card6.title': 'Serving Canada & US dealers',
        'solutions.card6.desc': 'Montreal-based team supporting car dealers across Canada and the US with local-ready sites.',
        'process.eyebrow': 'How it works',
        'process.title': 'Simple rollout designed for busy automotive teams.',
        'process.desc': 'We do the heavy lifting and keep your team focused on the next conversation.',
        'process.step1.title': 'Show us your brand',
        'process.step1.desc': 'Share your logo, vehicles, and priorities. We draft your homepage and key landing pages.',
        'process.step2.title': 'Launch in days',
        'process.step2.desc': 'We set up hosting, lead capture, and routing rules so every inquiry has an owner.',
        'process.step3.title': 'Work every lead',
        'process.step3.desc': 'Your team uses the lead desk to log calls, add notes, and keep reminders moving.',
        'proof.eyebrow': 'Dealer proof',
        'proof.title': 'Real lift for small dealer teams',
        'proof.desc': 'Based on early LSV, golf cart, and independent auto dealers after launch.',
        'proof.stat1.title': '22% faster replies in 30 days',
        'proof.stat1.desc': 'Average first-response time across web leads after setup.',
        'proof.stat1.because': 'Because unified inbox and notifications.',
        'proof.stat2.title': '15% more booked appointments in 60 days',
        'proof.stat2.desc': 'For service and test drives from web and phone leads.',
        'proof.stat2.because': 'Because lead routing and lead ownership.',
        'proof.quote.text': '"We can see which ads drive calls, so we double down fast."',
        'proof.quote.attribution': 'Owner, 50-vehicle independent dealer, Midwest',
        'proof.microCta': 'Want to compare your numbers? <a href="#book-demo">Book a Demo.</a>',
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
        'cookie.ariaLabel': 'Cookie consent'
    },
        fr: {
        'lang.en': 'EN',
        'lang.fr': 'FR',
        'nav.product': 'Produit',
        'nav.why': 'Pourquoi nous',
        'nav.how': 'Comment ça marche',
        'nav.results': 'Résultats',
        'nav.contact': 'Contact',
        'nav.menuTitle': 'Menu',
        'nav.toggle.open': 'Ouvrir le menu',
        'nav.toggle.close': 'Fermer le menu',
        'lang.switchToEn': 'Passer en anglais',
        'lang.switchToFr': 'Passer en français',
        'cta.bookDemo': 'Réserver une démo',
        'cta.talkToSales': 'Parler au département des ventes',
        'hero.eyebrow': 'Sites web automobiles en quelques jours',
        'hero.title': 'Créateur de sites web pour concessionnaires avec CRM et gestion des prospects',
        'hero.lead': "Lancez un site de concessionnaire avec annonces d'inventaire, prospects d'échange/financement et CRM intégré pour organiser clients, tâches et suivis automatiquement. Équipe basée à Montréal. Mise en ligne en 20 jours.",
        'hero.point1': "<span>•</span> Pages personnalisées, conçues pour mobile pour l'inventaire et les offres.",
        'hero.point2': "<span>•</span> Routage automatique des prospects avec responsables, rappels et notes.",
        'hero.point3': "<span>•</span> L'IA rédige les annonces, réponses et tâches de suivi.",
        'hero.point4': "<span>•</span> Mise en ligne en quelques jours avec notre équipe.",
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
        'product.eyebrow': 'Produit',
        'product.title': 'Tout ce dont vous avez besoin pour vendre des véhicules en ligne sans système complexe.',
        'product.desc': 'Pages épurées, réponse rapide et gestion des prospects style CRM avec assistance IA.',
        'product.feature.website.title': 'Un site qui vend',
        'product.feature.website.desc': "Créateur de sites pour concessionnaires avec CRM intégré, mises en page optimisées pour mobile, inventaire en vedette et appels à l'action financement qui facilitent les appels.",
        'product.feature.marketplace.title': 'Automatisation Marketplace',
        'product.feature.marketplace.desc': "L'IA rédige les annonces, optimise les photos et publie sur Facebook Marketplace pour maximiser votre visibilité.",
        'product.feature.followup.title': 'Système de suivi',
        'product.feature.followup.desc': 'Affectations, rappels, notes SMS/courriel et relances pour que chaque demande ait un responsable et une prochaine étape.',
        'product.feature.performance.title': 'Suivi de performance',
        'product.feature.performance.desc': "Tableaux de bord pour les ventes, prospects, inventaire et gestion d'équipe pour maximiser la productivité.",
        'why.eyebrow': 'Pourquoi LSV Auto Cloud',
        'why.title': 'Conçu pour les petites équipes de concessionnaires qui veulent plus de ventes, pas plus de complexité.',
        'why.desc': "Nous ne sommes pas une autre plateforme d'entreprise surchargée. LSV Auto Cloud combine site web, CRM et automatisation IA dans une solution abordable conçue pour les concessionnaires indépendants.",
        'why.card1.title': 'Lancement en 20 jours, pas en mois',
        'why.card1.desc': "Pas d'implémentations interminables ni de casse-têtes techniques. Nous gérons la configuration, l'hébergement et les intégrations pour que vous vendiez rapidement.",
        'why.card2.title': 'Tarification transparente, sans surprises',
        'why.card2.desc': "Forfaits adaptés à vos besoins. Aucun frais caché, aucune mise à niveau forcée. Payez seulement pour ce dont vous avez besoin à mesure que votre concessionnaire grandit.",
        'why.card3.title': "Conçu pour l'automobile, pas adapté après coup",
        'why.card3.desc': "Contrairement aux créateurs de sites génériques, nous comprenons les flux d'inventaire, formulaires de reprise, appels à l'action financement et parcours de prospects propres aux concessionnaires.",
        'why.card4.title': 'Une IA qui vous aide vraiment à vendre',
        'why.card4.desc': 'Publication automatique sur Facebook Marketplace, rédaction de messages de suivi et rappels intelligents—pas seulement des chatbots.',
        'why.card5.title': "Conçu pour mobile pour les acheteurs d'aujourd'hui",
        'why.card5.desc': 'La plupart des acheteurs naviguent sur mobile. Votre site fonctionne parfaitement sur mobile avec appel en un clic et mises en page optimisées.',
        'why.card6.title': 'Basé à Montréal, focalisé sur l\'Amérique du Nord',
        'why.card6.desc': 'Soutien réel de notre équipe canadienne. Nous comprenons les marchés américain et canadien, les règlementations et les défis des concessionnaires.',
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
        'comparison.lsv.mobile': "<span class='check'>✓</span> Conçu pour mobile d'abord",
        'comparison.other.mobile': "<span class='partial'>~</span> Adapté du bureau",
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
        'solutions.title': 'Pensé pour les recherches des concessionnaires.',
        'solutions.desc': 'Créateur de site automobile, CRM concessionnaire, routage de leads et Marketplace auto dans une seule plateforme.',
        'solutions.card1.title': 'Créateur de site automobile',
        'solutions.card1.desc': "Lancez rapidement un site de concession avec pages d'inventaire, CTA financement et design mobile d'abord.",
        'solutions.card2.title': 'Créateur de site pour concession',
        'solutions.card2.desc': 'Modèles dédiés et connexions CRM pour convertir plus de trafic web en appels et rendez-vous.',
        'solutions.card3.title': 'CRM concession avec site web',
        'solutions.card3.desc': 'CRM intégré, routage des leads et rappels liés directement à vos formulaires et appels du site.',
        'solutions.card4.title': 'Publication auto Marketplace',
        'solutions.card4.desc': 'Publiez automatiquement sur Marketplace et gardez des annonces fraîches avec des outils IA pour les véhicules.',
        'solutions.card5.title': 'Système de gestion des leads',
        'solutions.card5.desc': 'Assignez les prospects, consignez les notes et déclenchez des suivis automatiques pour chaque demande.',
        'solutions.card6.title': 'Pour le Canada et les États-Unis',
        'solutions.card6.desc': "Équipe basée à Montréal qui accompagne les concessionnaires au Canada et aux États-Unis avec des sites prêts pour le marché local.",
        'process.eyebrow': 'Comment ça marche',
        'process.title': 'Un déploiement simple conçu pour les équipes automobiles occupées.',
        'process.desc': "Nous faisons le gros du travail pour que votre équipe reste concentrée sur la prochaine conversation.",
        'process.step1.title': 'Montrez-nous votre marque',
        'process.step1.desc': "Partagez votre logo, vos véhicules et vos priorités. Nous créons votre page d'accueil et vos pages principales.",
        'process.step2.title': 'Lancement en quelques jours',
        'process.step2.desc': "Nous configurons l'hébergement, la capture de prospects et les règles de routage pour qu'un responsable soit assigné à chaque demande.",
        'process.step3.title': 'Traitez chaque prospect',
        'process.step3.desc': 'Votre équipe utilise le système de gestion pour consigner les appels, ajouter des notes et gérer les rappels.',
        'proof.eyebrow': 'Résultats de concessionnaires',
        'proof.title': 'De vrais résultats pour les petites équipes de concessionnaires',
        'proof.desc': 'Basé sur les premiers concessionnaires LSV, voiturettes de golf et concessionnaires automobiles indépendants après le lancement.',
        'proof.stat1.title': '22 % de réponses plus rapides en 30 jours',
        'proof.stat1.desc': 'Délai moyen de première réponse pour les prospects web après la mise en place.',
        'proof.stat1.because': 'Grâce à la boîte de réception unifiée et aux notifications.',
        'proof.stat2.title': '15 % de rendez-vous réservés en plus en 60 jours',
        'proof.stat2.desc': "Pour l'entretien et les essais routiers à partir des prospects web et téléphoniques.",
        'proof.stat2.because': 'Grâce au routage des prospects et à l\'attribution de responsabilité.',
        'proof.quote.text': '"Nous voyons quelles publicités génèrent des appels, alors nous investissons davantage rapidement."',
        'proof.quote.attribution': 'Propriétaire, concessionnaire indépendant 50 véhicules, Midwest',
        'proof.microCta': 'Envie de comparer vos chiffres? <a href="#book-demo">Réservez une démo.</a>',
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
        'cookie.ariaLabel': 'Consentement aux cookies'
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
