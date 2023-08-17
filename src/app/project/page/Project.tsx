import Process from '@src/app/common/components/Process';
import Typography from '@src/app/common/components/Typography';
import VStack from '@src/app/common/components/VStack';

import img_portfolio from '@asset/img/img_portfolio.png';
import img_gulp from '@asset/img/img_gulp.png';
import img_momato from '@asset/img/img_momato.png';
import img_double from '@asset/img/img_double.png';
import HStack from '@src/app/common/components/HStack';
import Img from '@src/app/common/components/Img';
import Section from '@src/app/common/components/Section';
import Layout from '@src/app/common/components/Layout';

const projects = [
  {
    imgSrc: img_portfolio,
    title: '포트폴리오',
    type: '개인 프로젝트',
    period: '2022.03. 20 ~ 04.10',
    description: `19년도에 만들었던 포트폴리오 프로젝트를 리뉴얼했습니다.
여러가지 이유가 있었는데, 새롭게 배운 기술들도, 배워보고 싶은 기술들도 있었고
디자이너분과 같이 스터디 하면서 미적 감각이 조금은 발전했는지 기존 디자인을 변경하고 싶었습니다. 
js로 개발했던 프로젝트를 ts로 변경했고, 상태관리 툴은 redux에서 recoil로 그리고 서버 상태는 react-query를 사용했습니다.`,
    skills: 'ts, react, java, spring, jpa',
  },
  {
    imgSrc: img_gulp,
    title: '꿀꺽',
    type: '팀 프로젝트',
    period: '2021.10. 20 ~ 2022.03.24',
    description: `알약 먹는 시간을 종종 깜박해서 제시간에 먹어보자라는 생각에 시작하게된 프로젝트입니다.
백앤드 개발을 맡아서 진행했습니다. mybatis만 써봤던 제게 jpa를 실습하는데 많은 도움이 됐습니다.
쿼리를 jpql 과 queryDsl로만 작업하려고 노력했습니다. 스프링 배치도 처음 써봤는데, 기회가 된다면 더 깊이 배워보고 싶습니다.`,
    skills: 'java, spring, jpa, mysql',
  },
  {
    imgSrc: img_momato,
    title: '모마토',
    type: '팀 프로젝트',
    period: '2020.04.03 ~ 07.13',
    description: `뽀모도로 기법을 이용한 타이머앱입니다.
부족한 시간을 효율적으로 사용해보자는 생각에서 출발했습니다.
이 앱을 사용해서 집중 할 수 있는 시간을 많이 늘렸습니다.
작업을 만들고 완료한 개수로 통계를 내주며 등급을 부여해서 동기부여 효과를 줬습니다.

백엔드는 spring boot, 프론트는 react를 사용했습니다.
2명에서 작업했고, 그 중 백엔드 및 프론트엔드 중 로그인과 타이머를 개발했습니다.

비회원 사용자는 localStorage를 사용해 작업을 저장했고, 회원은 데이터베이스를 사용해 작업을 저장했습니다.

클라이언트에서 예상치 못한 종료로 인해 저장이 안될 경우, 실패 처리를 위해 회원의 타이머가 진행될 때는 websocket을 사용했습니다.
모바일에서 인터넷이 끊겼을 때, 백엔드에서 연결 해제가 안될 경우가 있어, 이 때 작업의 동기화가 실패했습니다.
이를 위해 pingpong 메세지를 구현하여 일정 시간마다 메세지를 보내 응답이 없는 경우 연결이 끊김으로 간주하고 종료 처리를 해줬습니다.

pwa가 가능해서 오프라인 시에도 사용할 수 있습니다.
다만 백그라운드시에 web push를 사용해서 알림을 줬는데 모바일 사파리에서 지원을 안해 아쉬웠던 기억이 있습니다.`,
    skills: 'js, react, java, spring, mybatis, mysql',
  },
  {
    imgSrc: img_double,
    title: '더블로와',
    type: '팀 프로젝트',
    period: '2019.10.23 ~ 2020.01.18',
    description: `국비 지원 교육에서 진행한 프로젝트입니다.
중고 물품을 실시간 온라인 경매를 통해 팔자라는 아이디어에서 시작했습니다.

백엔드는 spring, 프론트는 jsp를 사용했습니다.

5명에서 작업했고, 그 중 경매의 실시간 방송 및 채팅을 개발했습니다. 

실시간 방송은 webRtc를 사용해서 구현했습니다.
처음 webRtc를 접했을 때, 중간 서버 없이 web에서 유저와 유저 P2P 연결을 통해 스트리밍을 하는 것에 매력을 느꼈습니다.
목표는 1:40의 실시간 방송이였는데, P2P방식으로는 클라이언트에 많은 부담이 가서 어쩔 수 없이 중간에 쿠렌토 미디어 서버를 설치했습니다.
또한 시연 환경이 같은 NAT 안에 있어서 TURN 서버를 설치해 해결했습니다.

실시간 채팅은 websocket을 사용해서 구현했습니다.
닉네임이 없는 사용자를 구분하기위해 입장시 임의의 색을 결정해 사용자의 채팅에 색을 입혀 구분했습니다.
 
공식 문서를 읽어가면서 이슈를 하나씩 해결했던 좋은 경험이였습니다.`,
    href: 'https://www.youtube.com/watch?v=j1gPvZifyS0',
    skills: 'js, java, spring, mybatis, mysql',
  },
];

const Project = () => {
  return (
    <Process>
      <Layout>
        <VStack alignItems="center" gap={24} p="0 24px">
          <Typography kind="title1" as="p">
            사이드 프로젝트
          </Typography>
          <Typography kind="body3" as="p" color="grey-700">
            개인 또는 팀으로 진행했던 사이드 프로젝트들 입니다.
          </Typography>
        </VStack>

        {projects.map(project => (
          <Section>
            <HStack gap={20}>
              <Img width={140} height={140} src={project.imgSrc}></Img>
              <VStack gap={16} justifyContent="center">
                <Typography kind="title1" as="p">
                  {project.title}
                </Typography>
                <Typography kind="body3" as="p" color="grey-700">
                  {project.type}
                </Typography>
                <Typography kind="body3" as="p" color="grey-700">
                  {project.period}
                </Typography>
              </VStack>
            </HStack>
            <VStack gap={12}>
              <Typography kind="body3" as="p" pre>
                {project.description}
              </Typography>
              {project.href && (<>
                <a href={project.href} target='_blank'>
                  <Typography kind="body3" as="p" color="grey-700">
                    링크
                  </Typography>
                </a>
              </>)}
              <Typography kind="body3" as="p" color="grey-700">
                기술 스택
              </Typography>
              <Typography kind="body3" as="p">
                {project.skills}
              </Typography>
            </VStack>
          </Section>
        ))}
      </Layout>
    </Process>
  );
};
export default Project;
