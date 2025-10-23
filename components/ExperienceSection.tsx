// 근무 기간 계산 함수
function calculateDuration(period: string): string {
  const [startStr, endStr] = period.split(' - ');
  const [startYear, startMonth] = startStr.split('.').map(Number);

  let endYear: number, endMonth: number;

  if (endStr === '현재') {
    const now = new Date();
    endYear = now.getFullYear();
    endMonth = now.getMonth() + 1;
  } else {
    [endYear, endMonth] = endStr.split('.').map(Number);
  }

  const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
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

// 총 경력 계산 함수
function calculateTotalExperience(experiences: Array<{ period: string }>): string {
  let totalMonths = 0;

  experiences.forEach((exp) => {
    const [startStr, endStr] = exp.period.split(' - ');
    const [startYear, startMonth] = startStr.split('.').map(Number);

    let endYear: number, endMonth: number;

    if (endStr === '현재') {
      const now = new Date();
      endYear = now.getFullYear();
      endMonth = now.getMonth() + 1;
    } else {
      [endYear, endMonth] = endStr.split('.').map(Number);
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

export default function ExperienceSection() {
  const experiences = [
    {
      company: '아데나소프트웨어',
      position: '백엔드 엔지니어',
      period: '2021.11 - 현재',
      description: [
        '암호화폐 거래소 데이터 통합 및 실시간 시세 동기화 시스템 구축 (REST API, WebSocket 기반)',
        '커뮤니티 서비스 런칭 및 성장 주도 — MAU 10만 → 100만 달성 (3년간 10배 성장)',
        '인기글 및 실시간 이슈 랭킹 알고리즘 개발로 콘텐츠 노출 자동화',
        'LLM 기반 사용자 QnA 응답 및 자동 번역 파이프라인 구축 (번역 비용 80% 감소)',
        '기사 메타데이터 자동 추출 크롤러 개발 (Open Graph + LLM 보완)',
        'AWS Lambda 기반 이미지 리사이징 시스템 구축',
      ],
    },
    {
      company: '브이젠주식회사',
      position: '백엔드 엔지니어',
      period: '2020.10 - 2021.10',
      description: [
        '실시간 발전 데이터 수집 및 Batch 통계 데이터 생성 시스템 개발',
        '이상징후 감지 및 관리자 알림 기능 구현',
        '재생에너지 입찰 보고서 자동화 플랫폼 구축',
        'CI/CD 파이프라인 구축으로 개발 및 배포 효율성 향상',
      ],
    },
    {
      company: '싸이투코드',
      position: '백엔드 엔지니어',
      period: '2019.01 - 2020.09',
      description: [
        '주요 증권사 API 연동 및 실시간 거래 파이프라인 구축',
        'Python 기반 스크립트 백테스팅 플랫폼 개발',
        '백테스팅 결과 리포트 자동 생성 (Excel 출력 시스템)',
        'AWS 인프라 및 CI/CD 환경 구축으로 배포 자동화',
      ],
    },
    {
      company: '고센그룹 주식회사',
      position: '백엔드 엔지니어',
      period: '2017.03 - 2018.11',
      description: [
        'Elasticsearch 기반 법률 지식 검색 엔진 구축',
        '형태소 분석 기반 법률용어 사전 개발로 검색 정확도 향상',
        'CNN 딥러닝 모델을 활용한 문서 자동 분류 시스템 개발 (OCR 텍스트 포함)',
        'React 기반 프론트엔드 일부 기능 구현 참여',
      ],
    },
  ];

  return (
    <section id="experience">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-lg font-bold text-primary tracking-wide">EXPERIENCES</h2>
        <span className="text-xs bg-gray-100 text-primary px-2 py-1 rounded font-medium">
          {calculateTotalExperience(experiences)}
        </span>
      </div>
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="border-l-2 border-gray-200 pl-4">
            <div className="flex justify-between items-start mb-1">
              <h3 className="text-base font-semibold text-primary">{experience.position}</h3>
              <span className="text-xs text-secondary">{experience.period}</span>
            </div>
            <div className="flex justify-between items-center mb-3">
              <p className="text-secondary text-sm font-medium">{experience.company}</p>
              <span className="text-xs bg-gray-100 text-primary px-2 py-1 rounded font-medium">
                {calculateDuration(experience.period)}
              </span>
            </div>
            <ul className="space-y-1">
              {experience.description.map((item, idx) => (
                <li key={idx} className="text-primary text-sm flex gap-2">
                  <span className="text-secondary flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
