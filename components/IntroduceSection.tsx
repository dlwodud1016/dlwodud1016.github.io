export default function IntroduceSection() {
    return (
        <section id="introduce">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-primary mb-2">이재영</h1>
                <p className="text-sm text-secondary font-medium">
                    12년차 백엔드 엔지니어 | 데이터 기반 시스템 설계
                </p>
            </div>

            <h2 className="text-lg font-bold text-primary mb-4 tracking-wide">
                PROFILE
            </h2>
            <div className="border-l-2 border-gray-200 pl-4 mb-6">
                <p className="text-primary leading-relaxed text-sm mb-3">
                    12년간 다양한 산업에서 웹 서비스 백엔드 개발을 주도했습니다.
                    Node.js, C/C++ 등 다양한 기술 스택으로 전사 서비스 구축부터
                    대용량 시스템 최적화까지 경험했습니다.
                </p>
                <p className="text-primary leading-relaxed text-sm mb-3">
                    데이터 기반 자동화와 시스템 최적화를 통해 비즈니스 임팩트를
                    창출합니다. 커뮤니티 서비스에서 MAU를 10만에서 100만으로
                    성장시켰고, LLM 기반 자동화로 번역비용을 80% 절감한 경험이
                    있습니다.
                </p>
                <p className="text-primary leading-relaxed text-sm">
                    요구사항 분석과 시스템 단순화를 통해 백오피스 개선 및 레거시
                    시스템 현대화를 이끄는 것을 즐깁니다.
                </p>
            </div>

            <h2 className="text-lg font-bold text-primary mb-4 tracking-wide">
                KEY HIGHLIGHTS
            </h2>
            <div className="border-l-2 border-gray-200 pl-4">
                <ul className="space-y-2">
                    <li className="text-primary text-sm flex gap-2">
                        <span className="text-secondary flex-shrink-0">•</span>
                        <span>
                            <strong>커뮤니티 플랫폼 성장:</strong> MAU 10만 →
                            100만 달성 (3년간 10배 성장)
                        </span>
                    </li>
                    <li className="text-primary text-sm flex gap-2">
                        <span className="text-secondary flex-shrink-0">•</span>
                        <span>
                            <strong>자동화 비용 절감:</strong> LLM 기반 자동
                            번역 파이프라인으로 번역비용 80% 감소
                        </span>
                    </li>
                    <li className="text-primary text-sm flex gap-2">
                        <span className="text-secondary flex-shrink-0">•</span>
                        <span>
                            <strong>기술 스택 다양성:</strong> 7개 회사에서
                            C/C++, C#, Node.js, ReactJS 등 풀스택 경험
                        </span>
                    </li>
                    <li className="text-primary text-sm flex gap-2">
                        <span className="text-secondary flex-shrink-0">•</span>
                        <span>
                            <strong>시스템 성능 개선:</strong> PL/SQL 튜닝으로
                            쿼리 성능 3배 향상, 데이터베이스 마이그레이션 주도
                        </span>
                    </li>
                </ul>
            </div>
        </section>
    );
}
