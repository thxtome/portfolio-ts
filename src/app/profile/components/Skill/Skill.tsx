import HStack from '@src/app/common/components/HStack';
import Section from '@src/app/common/components/Section';
import Typography from '@src/app/common/components/Typography';
import VStack from '@src/app/common/components/VStack';
import img_react from '@asset/img/img_react.png';
import img_next from '@asset/img/img_next.png';
import img_spring from '@asset/img/img_spring.png';
import img_sql from '@asset/img/img_sql.png';
import Img from '@src/app/common/components/Img';

const skills = [
  {
    src: img_react,
    label: 'React',
    desc: '리액트의 컨셉을 정확히 이해하고, 요구 기능을 위해 여러 패턴 및 아키텍처를 사용할 수 있습니다. 전역 상태 관리를 위해 Redux, recoil, contextApi를 사용했고, 서버 상태 관리를 위해 react-query를 사용했습니다. 리렌더링 방지를 위한 설계, 가상화를 통해 성능 최적화를 했습니다. 100 페이지가 넘는 규모의 웹앱의 프로젝트를 설계했습니다. 팀 내 소통을 위해 스토리북을 통해 컴포넌트들을 관리했습니다.',
  },
  {
    src: img_next,
    label: 'Next',
    desc: '서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), 증분 정적 생성(ISR)을 적절히 사용해 최적의 성능과 빠른 로드 시간을 구현하고, 미들웨어를 사용해 특정 기능을 쉽게 구현했습니다.',
  },
  {
    src: img_spring,
    label: 'Spring',
    desc: '스프링 부트를 사용해 Rest api 어플리케이션을 개발했습니다. spring-security를 통해 jwt 토큰 기반 인증 방식으로 구현해 stateless로 확장 가능한 어플리케이션을 개발했습니다. jdbc부터, mybatis, spring-data-jpa까지 다양한 라이브러리를 사용해 데이터베이스와 연동했습니다.',
  },
  {
    src: img_sql,
    label: 'Sql',
    desc: '서비스를 위해 기본적인 테이블 설계 및 데이터 모델링을 했습니다. CRUD를 위한 기본적인 쿼리, 통계를 위한 함수를 이용한 쿼리, 함수 및 프로시저를 사용했습니다. 인덱싱을 사용해 성능을 최적화 해본적이 있으며, 트랜잭션을 다룰 수 있습니다.',
  }
]

const Skill = () => {
  return (
    <Section>
      <Typography kind="display3" as="p" pre>
        기술
      </Typography>
      {skills.map((skill) => (
        <HStack gap={60} justifyContent="center" alignItems="center" flexWrap={"wrap"} minWidth={300}>
          <VStack gap={8} justifyContent="center" alignItems="center">
            <Img width={75} height={75} src={skill.src}></Img>
            <Typography kind="title2" as="p">{skill.label}</Typography>
          </VStack>
          <HStack maxWidth={800}>
            <Typography kind="body3" as="p">{skill.desc}</Typography>
          </HStack>
        </HStack>
      ))}

    </Section>
  );
};
export default Skill;
