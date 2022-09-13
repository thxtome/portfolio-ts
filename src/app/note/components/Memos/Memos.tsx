import HStack from '@src/app/common/components/HStack';
import Typography from '@src/app/common/components/Typography';
import VStack from '@src/app/common/components/VStack';
import styled from 'styled-components';
import css from '@styled-system/css';
import { Memo as IMemo } from '../../type/Memo';

const selected = css({
  background: theme => theme.colors.white,
  '&::before': {
    content: `""`,
    position: 'absolute',
    width: '10px',
    height: '100%',
    background: theme => theme.colors['blue-300'],
  },
});

const Memo = styled(HStack)<{ selected?: boolean }>`
  border-bottom: 1px solid ${props => props.theme.colors['grey-300']};
  cursor: pointer;
  ${props => props.selected && selected}
`;

const Memos = ({
  memos,
  selectedId,
  onMemoClick,
}: {
  memos: IMemo[];
  selectedId: number;
  onMemoClick: (id: number) => void;
}) => {
  return (
    <VStack maxWidth="250px" width="30%">
      <HStack height="30px" minHeight="30px" border="1px solid grey" bg="grey-100"></HStack>
      <VStack bg="grey-100" overflowY="auto" flexGrow={1}>
        {memos.map(memo => (
          <Memo
            selected={selectedId === memo.id}
            position="relative"
            height="108px"
            onClick={onMemoClick.bind(null, memo.id)}
          >
            <VStack p={12} gap={8} width="100%" pl={22}>
              <Typography kind="title1" as="span" pre elipsis>
                {memo.title}
              </Typography>
              <Typography kind="body3" as="span" pre elipsis>
                {memo.text}
              </Typography>
              <Typography kind="body3" as="span" pre elipsis color="grey-700">
                {memo.createdAt}
              </Typography>
            </VStack>
          </Memo>
        ))}
        {/* <Memo position="relative" height="108px">
          <VStack p={12} gap={8} width="100%" pl={22}>
            <Typography kind="title1" as="span" pre elipsis>
              Title
            </Typography>
            <Typography kind="body3" as="span" pre elipsis>
              content place content place placeplacepasdasdasdasdasa
            </Typography>
            <Typography kind="body3" as="span" pre elipsis>
              2021-07-28 08:01
            </Typography>
          </VStack>
        </Memo> */}
      </VStack>
    </VStack>
  );
};

export default Memos;
