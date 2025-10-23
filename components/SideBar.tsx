import { Mail, Phone, MapPin, GitBranch, Briefcase, Globe, Code2 } from 'lucide-react';

export default function SideBar() {
  const contacts = [
    { icon: Mail, label: 'dlwodud1016@gmail.com', href: 'mailto:dlwodud1016@gmail.com', type: 'email' },
    { icon: Phone, label: '010-3222-1508', href: 'tel:010-3222-1508', type: 'phone' },
    { icon: MapPin, label: 'Asia/Seoul', href: '#', type: 'location' },
  ];

  const socials = [
    { icon: Globe, label: 'Blog', href: 'https://blog.example.com', name: 'blog.example.com' },
    { icon: Briefcase, label: 'LinkedIn', href: 'https://linkedin.com', name: 'LinkedIn' },
    { icon: GitBranch, label: 'GitHub', href: 'https://github.com', name: 'GitHub' },
    { icon: Code2, label: 'Stack Overflow', href: 'https://stackoverflow.com', name: 'Stack Overflow' },
  ];

  return (
    <aside className="space-y-8">
      {/* Contact Section */}
      <div>
        <h2 className="text-lg font-bold text-primary mb-4 tracking-wide">CONTACT</h2>
        <div className="space-y-3 border-l-2 border-gray-200 pl-4">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group"
              >
                <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm group-hover:underline">{contact.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h2 className="text-lg font-bold text-primary mb-4 tracking-wide">SOCIAL</h2>
        <div className="space-y-3 border-l-2 border-gray-200 pl-4">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group"
              >
                <Icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm group-hover:underline">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
