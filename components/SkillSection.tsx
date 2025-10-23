export default function SkillSection() {
  const skills = {
    'Front-End': ['JavaScript', 'TypeScript', 'React.js', 'HTML/CSS'],
    'Back-End': ['Node.js', 'C#', 'AWS (ECS, S3, Lambda, SQS 등)'],
    'Database': ['MySQL', 'MSSQL', 'Elasticsearch', 'Redis'],
  };

  return (
    <section id="skill">
      <h2 className="text-lg font-bold text-primary mb-6 tracking-wide">SKILLS</h2>
      <div className="space-y-4">
        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <h3 className="text-sm font-semibold text-primary mb-2">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {skillList.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-xs text-primary px-2 py-1 bg-gray-100 rounded font-medium hover:bg-gray-200 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
