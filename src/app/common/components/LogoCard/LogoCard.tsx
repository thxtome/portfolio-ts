import Typography from '@src/app/common/components/Typography';
import VStack from '@src/app/common/components/VStack';
import HStack from '@src/app/common/components/HStack';
import Img from '@src/app/common/components/Img';

interface Props {
  src: string;
  title: string;
  subtitle: string;
  period: string;
}

const LogoCard = ({ src, title, subtitle, period }: Props) => {
  return (
    <HStack gap={20}>
      <Img width={140} height={140} src={src}></Img>
      <VStack gap={16} justifyContent="center">
        <Typography kind="title1" as="p">
          {title}
        </Typography>
        <Typography kind="body3" as="p" color="grey-700">
          {subtitle}
        </Typography>
        <Typography kind="body3" as="p" color="grey-700">
          {period}
        </Typography>
      </VStack>
    </HStack>
  );
};
export default LogoCard;
