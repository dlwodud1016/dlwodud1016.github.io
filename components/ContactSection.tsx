import { Mail, Phone, MapPin, GitBranch, Briefcase } from 'lucide-react';
import { env } from '@/lib/env';

export default function ContactSection() {
  const contacts = [
    { icon: Mail, label: 'Email', value: 'jylee@example.com', href: 'mailto:jylee@example.com' },
    ...(env.isDevelopment ? [{ icon: Phone, label: 'Phone', value: '+82-10-1234-5678', href: 'tel:+82101234567' }] : []),
    { icon: MapPin, label: 'Location', value: 'Seoul, South Korea', href: '#' },
    { icon: GitBranch, label: 'GitHub', value: 'github.com/jylee', href: 'https://github.com' },
    { icon: Briefcase, label: 'LinkedIn', value: 'linkedin.com/in/jylee', href: 'https://linkedin.com' },
  ];

  return (
    <section id="contact" className="mb-16">
      <h2 className="section-title">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="card flex items-start gap-4 hover:translate-y-[-2px]"
            >
              <Icon className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <p className="text-sm font-semibold text-secondary">{contact.label}</p>
                <p className="text-primary font-medium">{contact.value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
