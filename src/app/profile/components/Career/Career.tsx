import HStack from '@src/app/common/components/HStack';
import Img from '@src/app/common/components/Img';
import Section from '@src/app/common/components/Section';
import Typography from '@src/app/common/components/Typography';
import img_bigtech from '@asset/img/img_bigtech.png';
import VStack from '@src/app/common/components/VStack';
import Line from '@src/app/common/components/Line';

const projects = [
  {
    title: '홈큐 모바일 앱 개발',
    description: `고객에게 맞춤 부동산을 추천해주고 전입신고 / 확정일자를 쉽게 신청할 수 있게 도와주는 앱 서비스입니다.
기존에 개발되어있던 앱을 유지보수와 기능추가를 맡아서 진행했습니다.
안정적인 운영을 위해 개발 환경과 운영환경을 분리시키고 git-flow를 사용했습니다.
또한 앱의 핵심 기능(부동산 추천, 등기 변동 알림, 전입신고 / 확정일자) 화면을 개발했습니다.`,
    skills: 'js, cordova, react, java, spring',
  },
  {
    title: '홈큐 웹뷰 서비스 개발',
    description: `타 앱의 제휴서비스로 들어가기 위해 앱의 기능을 웹뷰로 개발했습니다.
페이지를 stack으로 관리해 이전 페이지로 가도 데이터와 스크롤 위치를 유지하고 매끄러운 페이지 전환을 할 수 있게 구현했습니다.
또한 유지보수를 조금 더 편하게 하기 위해 typescript를 도입했습니다.`,
    skills: 'ts, react, java, spring',
  },
  {
    title: '독큐',
    description: `부동산 등기 / 대장을 쉽게 발급할 수 있게 도와주는 웹서비스입니다.
개발을 할 수 있게 프로젝트 초기 세팅을 진행했습니다.
프로젝트 구조를 잡고, 디자이너에게 받은 작업물을 토대로 styled-system을 사용해 기본 컴포넌트를 설계했습니다.
또한 랜딩페이지의 seo를 위해  부분적인 ssg를 적용했습니다.`,
    skills: 'ts, react',
  },
  {
    title: ' 클라우드 서버 구성 및 운영',
    description: `회사에서 사용하는 클라우드 서버를 구성하고 운영을 맡았습니다.
초기에 aws에 vpc, subnet 등을 구성해 서버를 올리고 운영을 하다가 ncp를 사용하게 돼서 마이그레이션을 진행했습니다.`,
    skills: 'aws, ncp',
  },
];

const Career = () => {
  return (
    <Section>
      <Typography kind="display3" as="p" pre>
        경력
      </Typography>
      <HStack gap={20}>
        <Img width={140} height={140} src={img_bigtech}></Img>
        <VStack gap={16} justifyContent="center">
          <Typography kind="title1" as="p">
            빅테크플러스
          </Typography>
          <Typography kind="body3" as="p" color="grey-700">
            소프트웨어 엔지니어
          </Typography>
          <Typography kind="body3" as="p" color="grey-700">
            2020. 09. 14 ~ 재직중
          </Typography>
        </VStack>
      </HStack>
      <VStack gap={18}>
        {projects.map((project, idx) => (
          <>
            <VStack gap={12}>
              <Typography kind="title1" as="p">
                {project.title}
              </Typography>
              <Typography kind="body3" as="p" pre>
                {project.description}
              </Typography>
              <Typography kind="body3" as="p" color="grey-700">
                기술 스택
              </Typography>
              <Typography kind="body3" as="p">
                {project.skills}
              </Typography>
            </VStack>
            {idx !== projects.length - 1 && <Line color="grey-200" />}
          </>
        ))}
      </VStack>
    </Section>
  );
};
export default Career;
