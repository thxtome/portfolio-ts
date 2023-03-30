import Section from '@src/app/common/components/Section';
import Typography from '@src/app/common/components/Typography';
import img_bigtech from '@asset/img/img_bigtech.png';
import VStack from '@src/app/common/components/VStack';
import Line from '@src/app/common/components/Line';
import LogoCard from '@src/app/common/components/LogoCard/LogoCard';

const projects = [
  {
    title: '홈큐 서비스 개발',
    description: `부동산 자산 관리, 매물 추천, 청약 알림, 전입신고 / 확정일자 신청 등 부동산 종합 서비스`,
  },
  {
    title: '독큐 서비스 개발',
    description: `부동산 공적 장부 열람 서비스`,
  },
];

const Career = () => {
  return (
    <Section>
      <Typography kind="display3" as="p" pre>
        경력
      </Typography>
      <LogoCard src={img_bigtech} title="빅테크플러스" subtitle="소프트웨어 엔지니어" desc="2020. 09. 14 ~ 재직중" />

      <VStack gap={18}>
        {projects.map((project, idx) => (
          <>
            <VStack gap={12}>
              <Typography kind="title1" as="p">
                {project.title}
              </Typography>
              <Typography kind="body3" as="p" pre color="grey-700">
                {project.description}
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
