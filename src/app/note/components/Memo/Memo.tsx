import VStack from '@src/app/common/components/VStack';
import Typography from '@src/app/common/components/Typography';
import { Container } from './styled';

interface MemoProps {
  title: string;
  text: string;
  createdAt: string;
  selected?: boolean;
  onClick: () => void;
}

function Memo({ title, text, createdAt, selected, onClick }: MemoProps) {
  return (
    <Container selected={selected} position="relative" height="108px" onClick={onClick}>
      <VStack p={12} gap={8} width="100%" pl={22}>
        <Typography kind="title1" as="span" pre elipsis>
          {title}
        </Typography>
        <Typography kind="body3" as="span" pre elipsis>
          {text}
        </Typography>
        <Typography kind="body3" as="span" pre elipsis color="grey-700">
          {createdAt}
        </Typography>
      </VStack>
    </Container>
  );
}

export default Memo;
