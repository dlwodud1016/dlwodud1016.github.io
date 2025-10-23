interface Project {
    title: string;
    description: string;
    period: string;
    tech: string[];
    features: string[];
    link?: string;
}

export default function ProjectSection() {
    const projects: Project[] = [
        {
            title: "코인니스(Coinness)",
            description: "암호화폐 정보 뉴스 및 커뮤니티 서비스",
            period: "2021.11 - 현재",
            tech: [
                "Node.js",
                "Javascript",
                "Typescript",
                "NestJS",
                "MySQL",
                "Redis",
                "AWS",
                "OpenSearch",
                "React",
            ],
            features: [
                "MAU 10만 → 100만 달성 (3년간 10배 성장)",
                "실시간 시세 동기화 시스템 (REST API, WebSocket)",
                "인기글 및 이슈 랭킹 알고리즘",
                "LLM 기반 자동 번역 파이프라인 (번역 비용 80% 감소)",
            ],
            link: "https://example.com",
        },
        {
            title: "재생에너지 발전소 통합 관리 플랫폼 (VPP)",
            description: "실시간 발전 데이터 수집 및 관리 시스템",
            period: "2020.10 - 2021.10",
            tech: [
                "Node.js",
                "Javascript",
                "Typescript",
                "NestJS",
                "MySQL",
                "Redis",
                "React",
            ],
            features: [
                "실시간 발전 데이터 수집 및 분석",
                "이상징후 감지 및 자동 알림",
                "입찰 보고서 자동화",
                "CI/CD 파이프라인 구축",
            ],
            link: "https://example.com",
        },
        {
            title: "선물거래 퀀트 투자 및 백테스팅 시스템",
            description: "선물거래 투자 전략 검증 플랫폼",
            period: "2019.01 - 2020.09",
            tech: [
                "Node.js",
                "Javascript",
                "Typescript",
                "NestJS",
                "Python",
                "MySQL",
                "Redis",
                "Azure",
            ],
            features: [
                "주요 증권사 API 연동",
                "Python 기반 백테스팅 플랫폼",
                "Excel 기반 자동 리포트 생성",
                "AWS 인프라 및 배포 자동화",
            ],
            link: "https://example.com",
        },
        {
            title: "법률 지식 검색 및 문서 분류 서비스",
            description: "법률 지식 및 판례데이터 자동 분류 및 검색 서비스",
            period: "2017.03 - 2018.11",
            tech: [
                "Node.js",
                "Javascript",
                "Express.js",
                "MySQL",
                "Elasticsearch",
                "AWS",
                "React",
                "HTML",
                "CSS",
            ],
            features: [
                "Elasticsearch 기반 법률 지식 검색 엔진 구축",
                "형태소 분석 기반 법률용어 사전 개발",
                "CNN 딥러닝 모델을 활용한 문서 자동 분류 (OCR 텍스트 포함)",
                "React 기반 프론트엔드 기능 구현",
            ],
            link: "https://example.com",
        },
        {
            title: "GUI 기반 앱 개발 툴 '엠비즈메이커'",
            description: "어플리케이션을 제작할 수 있는 GUI 기반 개발 프로그램",
            period: "2014.10 - 2015.08",
            tech: ["C#", ".NET Framework", "WinForm", "WPF"],
            features: [
                "WinForm → WPF 단계적 마이그레이션 수행",
                "UI/UX 개선을 통한 사용자 경험 향상",
                "모듈화 구조 개선으로 유지보수성 향상",
            ],
            link: "https://example.com",
        },
        {
            title: "네트워크 통계 관리시스템 데이터베이스 마이그레이션",
            description: "대용량 데이터베이스 마이그레이션 및 성능 최적화",
            period: "2015.09 - 2016.04",
            tech: ["Oracle", "PL/SQL"],
            features: [
                "Oracle 9i → 11g 마이그레이션 수행 및 데이터 정합성 검증",
                "PL/SQL 튜닝 및 호환성 이슈 해결로 성능 개선",
                "롤백 및 복구 계획 수립을 통한 안정적 전환 지원",
            ],
            link: "https://example.com",
        },
        {
            title: "출력물 보안 솔루션",
            description: "엔터프라이즈 출력물 보안 및 통제 시스템",
            period: "2012.07 - 2014.07",
            tech: ["C/C++", "MFC", "MSSQL", "Windows API", "JSP"],
            features: [
                "출력물 개인정보 검출 및 통제 시스템 개발",
                "SSO 기반 인사시스템·그룹웨어 통합 인증 구현",
                "출력물 인가 시스템 및 워터마크 커스터마이징",
                "Windows 8 x64 커널 드라이버 호환성 이슈 해결",
                "보안 CC(Common Criteria) 인증 획득에 기여",
            ],
            link: "https://example.com",
        },
    ];

    return (
        <section id="project">
            <h2 className="text-lg font-bold text-primary mb-6 tracking-wide">
                Projects.
            </h2>
            <div className="space-y-8">
                {projects.map((project, index) => (
                    <div key={index}>
                        {/* 프로젝트 제목 */}
                        <div className="flex justify-between items-start mb-1">
                            <h3 className="text-base font-semibold text-primary">
                                {project.title}
                            </h3>
                            <span className="text-xs text-secondary">
                                {project.period}
                            </span>
                        </div>

                        {/* 프로젝트 설명 */}
                        <p className="text-secondary text-sm font-medium mb-3">
                            {project.description}
                        </p>

                        {/* 주요 기능 */}
                        {project.features && project.features.length > 0 && (
                            <div className="mb-3">
                                <h4 className="text-xs font-semibold text-secondary mb-2 uppercase">
                                    주요 기능
                                </h4>
                                <ul className="space-y-1">
                                    {project.features.map((feature, idx) => (
                                        <li
                                            key={idx}
                                            className="text-primary text-sm flex gap-2"
                                        >
                                            <span className="text-secondary flex-shrink-0">
                                                •
                                            </span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* 기술 스택 */}
                        {project.tech && project.tech.length > 0 && (
                            <div>
                                <h4 className="text-xs font-semibold text-secondary mb-2 uppercase">
                                    기술 스택
                                </h4>
                                <p className="text-sm text-primary border-l-4 border-gray-200 pl-3 py-1">
                                    {project.tech.join(", ")}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
