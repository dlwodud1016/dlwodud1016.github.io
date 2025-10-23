export default function ProjectSection() {
  const projects = [
    {
      title: '코인니스(Coinness)',
      description: '암호화폐 정보 뉴스 및 커뮤니티 서비스',
      period: '2021.11 - 현재',
      tech: ['Node.js', 'Javascript', 'Typescript', 'NestJS', 'MySQL', 'Redis', 'AWS', 'React'],
      features: [
        'MAU 10만 → 100만 달성 (3년간 10배 성장)',
        '실시간 시세 동기화 시스템 (REST API, WebSocket)',
        '인기글 및 이슈 랭킹 알고리즘',
        'LLM 기반 자동 번역 파이프라인 (번역 비용 80% 감소)',
      ],
      link: 'https://example.com',
    },
    {
      title: '재생에너지 발전소 통합 관리 플랫폼 (VPP)',
      description: '실시간 발전 데이터 수집 및 관리 시스템',
      period: '2020.10 - 2021.10',
      tech: ['Node.js', 'Javascript', 'Typescript', 'NestJS', 'MySQL', 'Redis', 'React'],
      features: [
        '실시간 발전 데이터 수집 및 분석',
        '이상징후 감지 및 자동 알림',
        '입찰 보고서 자동화',
        'CI/CD 파이프라인 구축',
      ],
      link: 'https://example.com',
    },
    {
      title: '선물거래 퀀트 투자 및 백테스팅 시스템',
      description: '선물거래 투자 전략 검증 플랫폼',
      period: '2019.01 - 2020.09',
      tech: ['Node.js', 'Javascript', 'Typescript', 'NestJS', 'Python', 'MySQL', 'Redis', 'Azure'],
      features: [
        '주요 증권사 API 연동',
        'Python 기반 백테스팅 플랫폼',
        'Excel 기반 자동 리포트 생성',
        'AWS 인프라 및 배포 자동화',
      ],
      link: 'https://example.com',
    },
  ];

  return (
    <section id="project">
      <h2 className="text-lg font-bold text-primary mb-6 tracking-wide">PROJECTS</h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-semibold text-primary">{project.title}</h3>
              <span className="text-xs text-secondary">{project.period}</span>
            </div>
            <p className="text-primary text-sm mb-3">{project.description}</p>

            <div className="mb-3">
              <p className="text-xs font-semibold text-secondary mb-2">Tech: {project.tech.join(', ')}</p>
            </div>

            <ul className="space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx} className="text-primary text-sm flex gap-2">
                  <span className="text-secondary flex-shrink-0">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
