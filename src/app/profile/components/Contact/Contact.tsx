import Section from '@src/app/common/components/Section';
import Typography from '@src/app/common/components/Typography';
import VStack from '@src/app/common/components/VStack';

const Contact = () => {
  return (
    <Section>
      <Typography kind="display3" as="p" pre>
        연락처
      </Typography>
      <VStack gap={12}>
        <Typography kind="title1" as="p" pre>
          깃허브
        </Typography>
        <Typography kind="body3" as="p" pre>
          https://github.com/thxtome
        </Typography>
      </VStack>
      <VStack gap={12}>
        <Typography kind="title1" as="p" pre>
          이메일
        </Typography>
        <Typography kind="body3" as="p" pre>
          thxtome531@gmail.com
        </Typography>
      </VStack>
      <VStack gap={12}>
        <Typography kind="title1" as="p" pre>
          전화번호
        </Typography>
        <Typography kind="body3" as="p" pre>
          010-7673-7941
        </Typography>
      </VStack>
    </Section>
  );
};
export default Contact;
