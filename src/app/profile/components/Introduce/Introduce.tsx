import Section from '@src/app/common/components/Section';
import Typography from '@src/app/common/components/Typography';

const Introduce = () => {
  return (
    <Section>
      <Typography kind="display3" as="p" pre>
        소개
      </Typography>
      <Typography kind="body3" as="p" pre>
        {`안녕하세요, 웹과 앱 그리고 서버를 좋아하는 주니어 개발자 박종훈입니다.\n\n이것 저것 배우고 배운 지식으로 무언가 만드는 걸 좋아합니다.\n\n또, 제가 만든 결과가 어디선가 쓰이는것에 뿌듯함을 느낍니다.`}
      </Typography>
    </Section>
  );
};
export default Introduce;
