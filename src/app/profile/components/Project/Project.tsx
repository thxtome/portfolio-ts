import Section from '@src/app/common/components/Section';
import Typography from '@src/app/common/components/Typography';
import VStack from '@src/app/common/components/VStack';
import HStack from '@src/app/common/components/HStack';
import Line from '@src/app/common/components/Line';
import LogoCard from '@src/app/common/components/LogoCard/LogoCard';

import img_etc from '@asset/img/img_etc.png';
import img_homeq from '@asset/img/img_homeq.png';
import img_docq from '@asset/img/img_docq.png';

const projects = [
  {
    src: img_homeq,
    title: '홈큐',
    subtitle: `빅테크플러스`,
    period: '2020. 09 ~ 2023. 04',
    desc: `부동산의 시세 알림, 등기 알림 등, 자산 관리 서비스 및 매물을 추천해주는 AI 추천 서비스를 제공하는 종합 부동산 앱입니다.
부동산 매물 추천, 전입신고 확정일자 신청, 청약 알림, 부동산 테마분석 및 자산관리 일부 파트를 맡아서 개발을 진행했습니다. 
팀 내 첫번째 팀원으로 입사해 앱 출시부터 10만명의 유저가 가입할 때까지 설계 및 개발을 담당했습니다.,
`,
    roles: [
      {
        shorten: "✓ monorepo로 프로젝트를 개편", desc: `기존 프로젝트의 규모가 커지면서, 기존의 단일 패키지의 구조에서의 빌드 시간과 핫 리로드 시간이 길어짐에 따라 생산성이 저하됐습니다.
      이를 개선하기 위해 yarn-workspace를 사용해, 도메인별 프로젝트로 분리해 하나의 레포로 개편. 빌드 시간을 3분대에서 30초대로 70% 감소시켜 생산성을 향상했습니다.` },
      { shorten: "✓ 심사 없는 서비스 배포를 위한 설계", desc: `기존 프로젝트는 서비스가 수정될때 마다 앱스토어에 심사를 받아 배포해야했습니다. 불필요한 심사 시간을 단축하기 위해 자주 변경되지 않는 로그인, 회원가입과 필요한 네이티브 기능은 flutter로 개발하고, 나머지 서비스는 웹뷰로 개발했습니다. 이에 따라 심사 시간을 없애 자유로운 서비스 배포를 할 수 있었습니다.` },
      { shorten: "✓ 웹뷰 페이지 스택으로 사용자 경험 향상", desc: `앱 내 웹뷰에서 페이지 이동 시 네이티브 앱의 인터렉션과 이질감이 느껴져, react-transition-group을 사용해 네이티브 앱의 페이지 이동을 모방, 웹뷰 내 페이지를 스택으로 쌓아 자연스러운 페이지 이동과 이전 페이지의 데이터, 스크롤 위치을 유지해 사용자 경험을 향상했습니다.` },
      { shorten: "✓ 자사 앱, 여러 제휴 플랫폼 앱과 웹뷰의 브릿지 코드 설계", desc: `웹뷰의 서비스가 자사 앱과 여러 제휴 플랫폼 앱에 제공되면서, 같은 네이티브 기능임에도 코드가 여러 조각으로 흩어져 이를 파악하고 유지보수하기가 어려웠습니다. 어려움을 해결하기 위해 브릿지 객체를 만들고 전략 패턴을 사용, 플랫폼마다 메서드를 구현해 호출하는 쪽에선 같은 코드를 호출했습니다. 이로 인해 코드를 파악하기 쉬워지고, 새로운 플랫폼이 생겨도 수정하기 편해져, 유지보수성을 향상했습니다.` },
      { shorten: "✓ sentry를 도입, 이슈 발견부터 해결까지 걸리는 시간 단축", desc: `기존 프로젝트의 규모가 커지면서, 예측하지 못한 오류들이 보고됐고 이와 같은 에러들이 더 있을 거라고 생각했습니다. 이를 해결하기 위해 sentry를 도입해, 버전마다 사용자에게 발생하는 오류를 추적하고 원인을 파악해 신속하게 대응함으로써 장애 발생 시간을 줄였습니다.` },
      { shorten: "✓ storybook을 도입, 팀 내 컴포넌트 재사용률과 생산성 향상", desc: `공통으로 사용되는 컴포넌트들이 많아지면서,  내에서 컴포넌트 공유를 위한 커뮤니케이션 비용이 커졌습니다. 그래서 storybook을 도입하고 컴포넌트를 종류별로 범주화해서 관리했습니다. 이로 인해 storybook만 보고 필요한 컴포넌트를 사용할 수 있어, 컴포넌트 재사용률과 생산성을 향상했습니다. ` },
      { shorten: "✓ opencv를 사용해 flutter 및 서버 방식의 문서 스캔 기능 개발 ", desc: `앱 내 문서 스캔 기능이 필요했는데, 외주 업체 개발은 큰 비용이 발생했습니다. 이에 기술 검토를 통해 오픈 소스를 사용해 요구 기능을 구현할 수 있다고 판단해, opencv등의 라이브러리를 사용해 직접 개발했습니다. 직접 개발함으로써 회사의 비용을 절약하고 팀 내 공유로 유지보수성을 향상했습니다.` },
    ],
    skill: 'flutter, nextjs, typescript, java, spring, postgresql',
    tool: 'styled-components, storybook, sentry, react-hook-form, react-query, recoil',
  },
  {
    src: img_docq,
    title: '독큐',
    subtitle: `빅테크플러스`,
    period: `2021. 08 ~ 2021. 10 `,
    desc: `부동산 등기와 토지/건축물 대장등 부동산 공적 장부를 실시간 열람하고 PDF와 엑셀로 관리해주는 서비스입니다.
프로젝트 설계 및 초기 설정을 맡아서 진행했습니다.`,
    roles: [
      {
        shorten: "✓ 디자인 시스템을 도입해 개발 편의성 향상", desc: `디자이너와 함께 디자인 시스템을 구현했습니다. 공통으로 사용되는 폰트, 색,  컴포넌트들을 정의함으로써 적절한 제약을 부여하고 이를 코드로 구현해 개발 시간과 코드 길이를 크게 줄였습니다. `
      },
      { shorten: "✓ 반응형 작업으로 모바일까지 지원", desc: `모바일과 테블릿 사용자를 위해 반응형 웹을 구현했습니다. 미디어 쿼리를 사용하고 미디어 쿼리로 해결할 수 없는 레이아웃은 자바스크립트를 통해 모바일에서도 편하게 볼 수 있는 서비스를 개발했습니다. ` },
      { shorten: "✓ SEO 최적화", desc: `업무를 위한 웹 서비스지만, 로그인과 회원가입 및 서비스 소개 페이지는 검색시 최적화가 필요했습니다. 이를 위해 적절한 기술을 선택해 필요한 페이지는 SSG를 통해 검색 엔진 최적화를 하고 필요가 없는 페이지는 CSR로 구현했습니다.` },
      { shorten: "✓ 발급받은 공적 장부를 웹에서 보여주고, 인쇄하는 기능 개발", desc: `공적 장부를 pdf로 보여주고 요약 정보를 함께 인쇄 할 수 있는 기능을 구현했습니다. 미디어 쿼리를 사용해 브라우저 내 특정 영역만 인쇄할 수 있게 구현했습니다.` },
    ],
    skill: 'typescript, react',
    tool: 'styled-components, react-hook-form, react-query, recoil',
  },
  {
    src: img_etc,
    title: '그 외 프로젝트',
    subtitle: `빅테크플러스`,
    period: `2020. 09 ~ 2023. 04`,
    roles: [
      {
        shorten: "ncp 및 aws를 사용해 확장 가능한 서버 설계 및 구성 ", desc: ""
      },
      {
        shorten: "jenkins를 사용해 자동 배포 파이프라인 구축", desc: ""
      },
    ],
    skill: 'shell script, linux, aws, ncp',
    tool: 'docker, jenkins',
  },
];

const Project = () => {
  return (
    <Section>
      <Typography kind="display3" as="p" pre>
        프로젝트
      </Typography>
      <VStack gap={18}>
        {projects.map(({ src, title, subtitle, desc, period, skill, tool, ...project }, idx) => (
          <VStack gap={18} key={idx}>
            <LogoCard src={src} title={title} subtitle={subtitle} period={period} />
            <Typography kind="body3" as="p" pre color="grey-700">
              {desc}
            </Typography>

            {project.roles.map((role, idx) => (
              <VStack gap={4} key={idx}>
                <Typography kind="body3">
                  {role.shorten}
                </Typography>
                <Typography kind="body3" color='grey-700'>
                  {role.desc}
                </Typography>
              </VStack>
            ))}

            <VStack gap={8}>
              <Typography kind="body3" color="grey-700">
                개발 언어
              </Typography>
              <Typography kind="body3">{skill}</Typography>
            </VStack>

            <VStack gap={8}>
              <Typography kind="body3" color="grey-700">
                사용 툴
              </Typography>
              <Typography kind="body3">{tool}</Typography>
            </VStack>
            {idx !== projects.length - 1 && <Line color="grey-200" />}
          </VStack>
        ))}
      </VStack>
    </Section>
  );
};
export default Project;
