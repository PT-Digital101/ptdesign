// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "PT Design & Dev";
export const SITE_DESCRIPTION =
	"Saw Praise Taw (PT) — UX/UI designer and WordPress developer with 5 years of experience designing and building user-centered websites that are visually appealing and easy to use.";

export const OWNER = {
	name: "Saw Praise Taw",
	nick: "PT",
	role: "Design & Dev",
	avatar: "/images/profile.webp",
};

export const NAV_LINKS = [
	{ label: "Home", href: "/", icon: "home" },
	{ label: "About Me", href: "/about", icon: "user" },
	{ label: "Projects", href: "/projects", icon: "grid" },
	{ label: "Contact Me", href: "/contact", icon: "mail" },
] as const;

export const SOCIALS = [
	{ label: "Facebook", href: "https://www.facebook.com/share/171vcnpeuo/", icon: "facebook" },
	{ label: "Instagram", href: "https://www.instagram.com/ptdesigndev", icon: "instagram" },
	{ label: "LINE", href: "https://lin.ee/ri9tCPT", icon: "line" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/in/saw-praise-taw", icon: "linkedin" },
] as const;

export const SERVICES = ["Branding", "Web Design", "Web Development", "UX/UI", "SEO"];

export const TECH_STACK = [
	{ name: "Figma", logo: "/images/stack/figma.svg" },
	{ name: "WordPress", logo: "/images/stack/wordpress.svg" },
	{ name: "Greenshift", logo: "/images/stack/greenshift.jpg" },
	{ name: "Wix", logo: "/images/stack/wix.svg" },
	{ name: "Canva", logo: "/images/stack/canva.svg" },
	{ name: "Illustrator", logo: "/images/stack/illustrator.svg" },
	{ name: "Airtable", logo: "/images/stack/airtable.svg" },
	{ name: "Meta", logo: "/images/stack/meta.svg" },
];

export const SKILLS = [
	{ title: "User Research & Analysis", icon: "search", text: "Interviews, audits and analytics that show what your users actually need." },
	{ title: "Wireframing & Prototyping", icon: "tablet", text: "Clickable flows in Figma so ideas are tested before a line of code." },
	{ title: "Visual Design", icon: "eye", text: "Interfaces with clear hierarchy, considered type and a look that fits the brand." },
	{ title: "WP Web Development", icon: "monitor", text: "Fast, editable WordPress and WooCommerce sites built with Greenshift." },
	{ title: "Branding", icon: "pen", text: "Logos, color and type systems that stay consistent from web to print." },
	{ title: "Social Content Design", icon: "image", text: "On-brand templates and campaign visuals for Facebook, Instagram and LINE." },
];

export const FAQS = [
	{
		q: "What services do you offer in web design and development?",
		a: "End-to-end: UX/UI design, responsive website development, WordPress and WooCommerce eCommerce, on-page SEO, and ongoing maintenance.",
	},
	{
		q: "How long does it take to build a website?",
		a: "A standard business website usually takes 3–6 weeks. Larger eCommerce sites or custom web apps take around 2–3 months. You get a clear timeline once we've discussed your requirements.",
	},
	{
		q: "Will my website be mobile-friendly?",
		a: "Yes. Every site is fully responsive and tested on desktop, tablet and phone.",
	},
	{
		q: "Do you provide SEO with web design?",
		a: "Yes, I include on-page SEO best practices such as speed optimization, proper headings, metadata, and mobile performance.",
	},
	{
		q: "Can I update my website content myself?",
		a: "Absolutely. If your site is built on a CMS like WordPress, I'll provide easy-to-follow training so you can manage text, images, and products without coding knowledge.",
	},
	{
		q: "What if I already have a website but want a redesign?",
		a: "I can redesign and modernize your existing site while keeping SEO rankings intact. The focus is on creating a more engaging, user-friendly, and conversion-driven experience.",
	},
	{
		q: "Do you provide website maintenance after launch?",
		a: "Yes. I offer ongoing support packages that include updates, backups, security monitoring, and performance optimization to keep your site running smoothly.",
	},
];
