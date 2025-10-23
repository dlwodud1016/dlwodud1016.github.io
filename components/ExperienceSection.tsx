// 총 경력 계산 함수
function calculateTotalExperience(experiences: Company[]): string {
    let totalMonths = 0;

    experiences.forEach((company) => {
        const [startYear, startMonth] = company.startPeriod
            .split(".")
            .map(Number);

        let endYear: number, endMonth: number;

        // 각 회사의 마지막 역할의 끝 날짜 계산
        const lastRole = company.roles[company.roles.length - 1];
        const [, endStr] = lastRole.period.split(" - ");

        if (endStr === "현재") {
            const now = new Date();
            endYear = now.getFullYear();
            endMonth = now.getMonth() + 1;
        } else {
            [endYear, endMonth] = endStr.split(".").map(Number);
        }

        totalMonths += (endYear - startYear) * 12 + (endMonth - startMonth);
    });

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    if (years === 0) {
        return `${months}개월`;
    } else if (months === 0) {
        return `${years}년`;
    } else {
        return `${years}년 ${months}개월`;
    }
}

interface Role {
    position: string;
    period: string;
    team?: string;
    description: string[];
}

interface Company {
    company: string;
    status?: string;
    startPeriod: string;
    roles: Role[];
}

export default function ExperienceSection() {
    const experiences: Company[] = [
        {
            company: "아데나소프트웨어",
            startPeriod: "2021.11",
            roles: [
                {
                    position: "백엔드 엔지니어",
                    period: "2021.11 - 현재",
                    description: [
                        "암호화폐 거래소 데이터 통합 및 실시간 시세 동기화 시스템 구축 (REST API, WebSocket 기반)",
                        "커뮤니티 서비스 핵심 개발자로 MAU 10만 → 100만 달성 (3년간 10배 성장) — 서비스 매출 3배 증대에 기여",
                        "인기글 및 실시간 이슈 랭킹 알고리즘 개발로 일일 활성 사용자(DAU) 40% 증가",
                        "LLM 기반 자동 번역 파이프라인 구축으로 번역비용 80% 감소 (월 300만원 절감)",
                        "기사 메타데이터 자동 추출 크롤러 개발로 수작업 80% 제거",
                        "AWS Lambda 기반 이미지 리사이징으로 CDN 비용 30% 절감 및 응답속도 50% 개선",
                    ],
                },
            ],
        },
        {
            company: "브이젠주식회사",
            startPeriod: "2020.10",
            roles: [
                {
                    position: "백엔드 엔지니어",
                    period: "2020.10 - 2021.10",
                    description: [
                        "실시간 발전 데이터 수집 및 Batch 통계 데이터 생성 시스템 개발",
                        "이상징후 감지 및 관리자 알림 기능 구현",
                        "재생에너지 입찰 보고서 자동화 플랫폼 구축",
                        "CI/CD 파이프라인 구축으로 개발 및 배포 효율성 향상",
                    ],
                },
            ],
        },
        {
            company: "싸이투코드",
            startPeriod: "2019.01",
            roles: [
                {
                    position: "백엔드 엔지니어",
                    period: "2019.01 - 2020.09",
                    description: [
                        "주요 증권사 API 연동 및 실시간 거래 파이프라인 구축",
                        "Python 기반 스크립트 백테스팅 플랫폼 개발",
                        "백테스팅 결과 리포트 자동 생성 (Excel 출력 시스템)",
                        "AWS 인프라 및 CI/CD 환경 구축으로 배포 자동화",
                    ],
                },
            ],
        },
        {
            company: "고센그룹 주식회사",
            startPeriod: "2017.03",
            roles: [
                {
                    position: "백엔드 엔지니어",
                    period: "2017.03 - 2018.11",
                    description: [
                        "Elasticsearch 기반 법률 지식 검색 엔진 구축으로 검색응답시간 3초 → 500ms 단축",
                        "형태소 분석 기반 법률용어 사전 개발로 검색 정확도 68% → 92% 향상",
                        "CNN 딥러닝 모델을 활용한 문서 자동 분류 시스템 개발 (정확도 89%) — 수작업 문서 분류 70% 자동화",
                        "React 기반 프론트엔드 구현으로 사용자 만족도 85% 달성",
                    ],
                },
            ],
        },
        {
            company: "KTDS(계약직)",
            startPeriod: "2015.09",
            roles: [
                {
                    position: "데이터 엔지니어",
                    period: "2015.09 - 2016.04",
                    team: "네트워크 통계 관리시스템 데이터베이스 마이그레이션",
                    description: [
                        "Oracle 9i → 11g 마이그레이션 리드로 대용량 데이터베이스(800GB) 안정적 전환 및 데이터 정합성 100% 검증",
                        "PL/SQL 튜닝으로 쿼리 성능 3배 향상 (평균 응답시간 5초 → 1.5초)",
                        "제로다운타임 롤백 계획 수립으로 마이그레이션 리스크 제거 및 비즈니스 영향도 최소화",
                    ],
                },
            ],
        },
        {
            company: "원더풀소프트",
            startPeriod: "2014.10",
            roles: [
                {
                    position: "애플리케이션 개발자",
                    period: "2014.10 - 2015.08",
                    team: "GUI 기반 앱 개발 툴 '엠비즈메이커'",
                    description: [
                        "WinForm → WPF 단계적 마이그레이션 수행",
                        "UI/UX 개선을 통한 사용자 경험 향상",
                        "모듈화 구조 개선으로 유지보수성 향상",
                    ],
                },
            ],
        },
        {
            company: "와우소프트",
            startPeriod: "2012.07",
            roles: [
                {
                    position: "C/C++ 개발자",
                    period: "2012.07 - 2014.07",
                    team: "출력물 보안 솔루션 개발",
                    description: [
                        "출력물 개인정보 검출 및 통제 시스템 개발",
                        "SSO 기반 인사시스템·그룹웨어 통합 인증 구현",
                        "출력물 인가 시스템 및 워터마크 커스터마이징",
                        "Windows 8 x64 커널 드라이버 호환성 이슈 해결",
                        "보안 CC(Common Criteria) 인증 획득에 기여",
                    ],
                },
            ],
        },
    ];

    return (
        <section id="experience">
            <div className="flex justify-between items-start mb-6">
                <h2 className="text-lg font-bold text-primary tracking-wide">
                    Experience.
                </h2>
                <span className="text-xs bg-gray-100 text-primary px-2 py-1 rounded font-medium">
                    {calculateTotalExperience(experiences)}
                </span>
            </div>
            <div className="space-y-8">
                {experiences.map((company, companyIndex) => (
                    <div key={companyIndex}>
                        {/* 회사 및 직책 정보 */}
                        {company.roles.map((role, roleIndex) => (
                            <div key={roleIndex} className="mb-6">
                                {/* 회사명 | 직책 */}
                                <h3 className="text-base font-semibold text-primary mb-1">
                                    {company.company} | {role.position}
                                </h3>

                                {/* 근무 기간 */}
                                <p className="text-sm text-secondary font-medium mb-2">
                                    {role.period}
                                </p>

                                {/* 팀/프로젝트명 */}
                                {role.team && (
                                    <p className="text-sm text-secondary font-medium mb-3 italic">
                                        {role.team}
                                    </p>
                                )}

                                {/* 주요 업무 및 성과 */}
                                {role.description &&
                                    role.description.length > 0 && (
                                        <div className="mb-3">
                                            <h4 className="text-xs font-semibold text-secondary mb-2 uppercase">
                                                주요 업무 및 성과
                                            </h4>
                                            <ul className="space-y-1">
                                                {role.description.map(
                                                    (
                                                        item: string,
                                                        idx: number
                                                    ) => (
                                                        <li
                                                            key={idx}
                                                            className="text-primary text-sm flex gap-2"
                                                        >
                                                            <span className="text-secondary flex-shrink-0">
                                                                •
                                                            </span>
                                                            <span>{item}</span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
}
