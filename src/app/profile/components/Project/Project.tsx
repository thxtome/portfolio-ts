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
    subtitle: `부동산 종합 서비스`,
    desc: '2020. 09. 14 ~ ',
    roles: [
      {
        title: '앱 설계, 개발 및 운영 ',
        works: [
          '빠른 배포와 제휴사에 제공되는 웹뷰 서비스를 위해 로그인과 회원가입은 flutter로, 그 외 기능은 nextjs를 사용한 웹뷰로 제작해 심사 없이 배포가 가능하게 설계',
          'flavor를 도입, 여러 운영 환경을 분리하고 쉽고 빠른 앱 배포 환경 구축',
        ],
      },
      {
        title: '웹 서비스 화면 설계, 개발 및 운영',
        works: [
          'monorepo로 프로젝트를 설계, 프로젝트 빌드 시간을 2 ~ 3분에서 10초 내외로 단축',
          '기존에 앱 서비스와 나눠져있던 제휴사 코드를 합쳐 공통으로 사용할 수 있게 설계',
          '앱 내 웹뷰로 스택으로 페이지를 쌓아 이전 화면을 유지시키고 자연스러운 페이지 전환등을 설계, 이질감이 느껴지지 않게 구현',
          '이슈 트래킹을 위해 sentry를 도입, 이슈 해결 시간 단축',
          'storybook을 도입, 팀 내 컴포넌트 재사용률과 생산성 향상',
        ],
      },
    ],
    env: 'intelij, vscode',
    skill: 'flutter, nextjs, typescript, java, spring, postgresql',
    tool: 'styled-components, storybook, sentry, react-hook-form, react-query, recoil',
  },
  {
    src: img_docq,
    title: '독큐',
    subtitle: `부동산 공적 장부 열람 서비스`,
    desc: `2021. 08. 10 ~ `,
    roles: [
      {
        title: '웹 서비스 화면 설계 및 개발',
        works: [
          '디자인 시스템을 도입해 개발 편의성 향상',
          '크로스 브라우징 작업으로 ie 11까지 지원',
          'react-snap을 사용해 seo가 필요한 페이지만 ssg로, 필요 없는 페이지는 csr로 구현해 유지보수 포인트 제거',
        ],
      },
    ],
    env: 'intelij, vscode',
    skill: 'typescript, react, java, spring, postgresql',
    tool: 'styled-components, react-hook-form, react-query, recoil',
  },
  {
    src: img_etc,
    title: '그 외 프로젝트',
    subtitle: `서비스 개발 외의 프로젝트`,
    desc: `2020. 09. 14 ~ `,
    roles: [
      {
        title: '클라우드 서버 구성',
        works: ['ncp 및 aws를 사용해 확장 가능한 서버 설계 및 구성 '],
      },
      {
        title: 'CI/CD 구성',
        works: ['jenkins를 사용해 자동 테스트. 배포 파이프라인 구축'],
      },
    ],
    env: 'linux, aws, ncp',
    skill: 'shell script',
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
        {projects.map(({ src, title, subtitle, desc, env, skill, tool, ...project }, idx) => (
          <VStack gap={18} key={idx}>
            <LogoCard src={src} title={title} subtitle={subtitle} desc={desc} />

            {project.roles.map(({ title, works }, idx) => (
              <VStack gap={18} key={idx}>
                <Typography kind="title1">{title}</Typography>

                {works.map((work, idx) => (
                  <HStack gap={4}>
                    <Typography kind="body3" key={idx}>
                      ✓
                    </Typography>
                    <Typography kind="body3" key={idx}>
                      {work}
                    </Typography>
                  </HStack>
                ))}
              </VStack>
            ))}

            <VStack gap={8}>
              <Typography kind="body3" color="grey-700">
                개발 환경
              </Typography>
              <Typography kind="body3">{env}</Typography>
            </VStack>

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
