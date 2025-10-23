export default function SkillSection() {
  const skills = {
    'Backend': {
      proficient: ['Node.js', 'NestJS', 'Express.js', 'C#'],
      familiar: ['Python', 'PL/SQL'],
    },
    'Frontend': {
      proficient: ['JavaScript', 'TypeScript', 'React.js'],
      familiar: ['HTML/CSS', 'Next.js'],
    },
    'Database & Cache': {
      proficient: ['MySQL', 'MSSQL', 'Redis', 'Elasticsearch', 'MongoDB'],
      familiar: ['Oracle', 'OpenSearch'],
    },
    'Infrastructure & DevOps': {
      proficient: ['AWS (ECS, S3, Lambda, SQS, CDN)', 'Kubernetes', 'Docker', 'Kafka'],
      familiar: ['Jenkins', 'Azure'],
    },
    'System Design': {
      proficient: ['WebFlux', 'Coroutine', 'Microservices', 'Event-driven Architecture'],
      familiar: ['Real-time Data Processing', 'Large Scale System Optimization'],
    },
  };

  return (
    <section id="skill">
      <h2 className="text-lg font-bold text-primary mb-6 tracking-wide">SKILLS</h2>
      <div className="space-y-5">
        {Object.entries(skills).map(([category, levelSkills], index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <h3 className="text-sm font-semibold text-primary mb-3">{category}</h3>
            <div className="space-y-2">
              {levelSkills.proficient && (
                <div>
                  <p className="text-xs text-secondary font-medium mb-1">Proficient</p>
                  <div className="flex flex-wrap gap-2">
                    {levelSkills.proficient.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-white px-2.5 py-1 bg-blue-600 rounded font-medium hover:bg-blue-700 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              {levelSkills.familiar && (
                <div>
                  <p className="text-xs text-secondary font-medium mb-1">Familiar</p>
                  <div className="flex flex-wrap gap-2">
                    {levelSkills.familiar.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs text-primary px-2.5 py-1 bg-gray-100 rounded font-medium hover:bg-gray-200 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
