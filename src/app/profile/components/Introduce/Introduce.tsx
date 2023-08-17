import Section from '@src/app/common/components/Section';
import Typography from '@src/app/common/components/Typography';
import VStack from '@src/app/common/components/VStack';

const Introduce = () => {
  return (
    <Section>
      <VStack gap={12}>
        <Typography kind="display3" as="p" pre>
          소개
        </Typography>
        <Typography kind="body3" as="p" color="grey-700">
          개발할 때 도파민이 나오는 주니어 소프트웨어 엔지니어
        </Typography>
      </VStack>
      <Typography kind="body3" as="p" pre>
        {`안녕하세요, 유쾌한 개발자 박종훈입니다.
여러 사람들과 즐겁게 개발하는게 목표입니다.
같은 목표를 가지고 조금씩 이뤄가는 걸 즐깁니다.

자동화에 관심이 있습니다.
스토리북으로 컴포넌트 유지보수와 테스트를 자동화 할 때, 젠킨스로 배포 프로세스를 자동화 할 때 뿌듯함을 느낍니다.
이것 저것 배우는 걸 좋아합니다.
최근엔 쿠버네티스를 배워서 홈랩을 만들고, ha로 홈 iot 구축하는데 시간을 보냅니다.`}
      </Typography>
    </Section>
  );
};
export default Introduce;
