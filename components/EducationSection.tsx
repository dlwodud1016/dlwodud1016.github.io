export default function EducationSection() {
  const educations = [
    {
      school: '우송대학교',
      degree: 'IT경영학과',
      period: '2007.02 - 2012.08',
      gpa: null,
      description: '학사 학위',
    },
  ];

  const certifications: Array<{ name: string; issuer: string; year?: number }> = [];

  return (
    <section id="education">
      <h2 className="text-lg font-bold text-primary mb-6 tracking-wide">EDUCATION</h2>

      <div className="space-y-6">
        {educations.map((education, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-base font-semibold text-primary">{education.degree}</h3>
              <span className="text-xs text-secondary">{education.period}</span>
            </div>
            <p className="text-secondary text-sm font-medium">{education.school}</p>
            {education.gpa && <p className="text-xs text-secondary mt-1">GPA: {education.gpa}</p>}
            <p className="text-primary text-sm mt-2">{education.description}</p>
          </div>
        ))}
      </div>

      {certifications.length > 0 && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h3 className="text-base font-semibold text-primary mb-4">Certifications</h3>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="border-l-2 border-gray-200 pl-4">
                <p className="font-medium text-primary text-sm">{cert.name}</p>
                <p className="text-secondary text-xs mt-1">{cert.issuer}</p>
                {cert.year && <p className="text-secondary text-xs mt-1">{cert.year}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
