import Section from '@src/app/common/components/Section';
import Typography from '@src/app/common/components/Typography';
import img_bigtech from '@asset/img/img_bigtech.png';
import VStack from '@src/app/common/components/VStack';
import Line from '@src/app/common/components/Line';
import LogoCard from '@src/app/common/components/LogoCard/LogoCard';

const projects = [
  {
    description: `개발자로 근무하면서 부동산 자산 관리 서비스 홈큐 화면 및 서버 개발과 부동산 공적 장부 열람 서비스 독큐 화면 개발을 진행했습니다.`,
  },
];

const Career = () => {
  return (
    <Section>
      <Typography kind="display3" as="p" pre>
        경력
      </Typography>
      <LogoCard src={img_bigtech} title="빅테크플러스" subtitle="소프트웨어 엔지니어" period="2020. 09 ~ 2023. 04" />

      <VStack gap={18}>
        <VStack gap={12}>
          <Typography kind="body3" as="p" pre color="grey-700">
            개발자로 근무하면서 부동산 자산 관리 서비스 홈큐 화면 및 서버 개발과 부동산 공적 장부 열람 서비스 독큐 화면 개발을 진행했습니다.
          </Typography>
        </VStack>
        <Line color="grey-200" />
      </VStack>
    </Section>
  );
};
export default Career;
