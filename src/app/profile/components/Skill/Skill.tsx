import HStack from '@src/app/common/components/HStack';
import Section from '@src/app/common/components/Section';
import Typography from '@src/app/common/components/Typography';
import VStack from '@src/app/common/components/VStack';

const mainSkills = ['Javascript', 'Typescript', 'React', 'Redux', 'Spring', 'Java'];
const subSkills = ['jpa', 'next', 'Node', 'aws', 'ncp', 'Nginx', 'figma', 'linux'];

const Skill = () => {
  return (
    <Section>
      <Typography kind="display3" as="p" pre>
        기술
      </Typography>
      <VStack gap={16} justifyContent="center">
        <Typography kind="title1" as="p">
          주요 기술
        </Typography>
        <HStack gap={16} flexWrap="wrap">
          {mainSkills.map(skill => (
            <HStack bg="black" p={10} borderRadius={5}>
              <Typography kind="body3" as="p" color="white">
                {skill}
              </Typography>
            </HStack>
          ))}
        </HStack>
      </VStack>
      <VStack gap={16} justifyContent="center">
        <Typography kind="title1" as="p">
          사용할 줄 아는 기술
        </Typography>
        <HStack gap={16} flexWrap="wrap">
          {subSkills.map(skill => (
            <HStack bg="black" p={10} borderRadius={5}>
              <Typography kind="body3" as="p" color="white">
                {skill}
              </Typography>
            </HStack>
          ))}
        </HStack>
      </VStack>
    </Section>
  );
};
export default Skill;
