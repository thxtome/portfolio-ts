import HStack from '@src/app/common/components/HStack';
import Typography from '@src/app/common/components/Typography';
import VStack from '@src/app/common/components/VStack';
import { Memo as IMemo } from '../../type/Memo';
import Icon from '@src/app/common/components/Icon';
import ic_trash from '@asset/icon/ic_trash.png';
import ic_memos from '@asset/icon/ic_memos.png';
import Memo from '@note/components/Memo';

interface MemosProps {
  memos: IMemo[];
  selectedId: number;
  onMemoClick: (id: number) => void;
  onCreateMemoClick: () => void;
  onDeleteMemoClick: (id: number) => void;
}

const Memos = ({ memos, selectedId, onMemoClick, onCreateMemoClick, onDeleteMemoClick }: MemosProps) => {
  return (
    <VStack maxWidth="320px" minWidth="124px" width="30%">
      <HStack height="30px" minHeight="30px" border="1px solid #e8e8e8" bg="grey-100" justifyContent="space-between">
        <Icon icon={ic_trash} size={30} onClick={onDeleteMemoClick.bind(null, selectedId)}></Icon>
        <Icon icon={ic_memos} size={30} onClick={onCreateMemoClick}></Icon>
      </HStack>
      <VStack bg="grey-100" overflowY="auto" flexGrow={1}>
        {memos.map(memo => (
          <Memo {...memo} selected={selectedId === memo.id} onClick={onMemoClick.bind(null, memo.id)} />
        ))}
      </VStack>
    </VStack>
  );
};

export default Memos;
