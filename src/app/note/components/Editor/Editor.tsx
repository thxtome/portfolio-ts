import HStack from '@src/app/common/components/HStack';
import Icon from '@src/app/common/components/Icon';
import VStack from '@src/app/common/components/VStack';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Memo } from '../../type/Memo';
import ic_unlock from '@asset/icon/ic_unlock.png';
import ic_lock from '@asset/icon/ic_lock.png';

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
`;

interface EditorProps {
  memo: Memo;
  onMemoChange: (memo: Memo) => void;
}

const Editor = ({ memo, onMemoChange }: EditorProps) => {
  const [locked, setLocked] = useState(false);

  function handleLock() {
    setLocked(true);
  }

  function handleUnlock() {
    setLocked(false);
  }

  function handleMemoEditorChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const [title, ...text] = e.target.value.split('\n');
    onMemoChange({ ...memo, title, text: text.join('\n') });
  }

  return (
    <VStack flexGrow={1} minWidth="194px" width="40%">
      <HStack height="30px" minHeight="30px" border="1px solid #e8e8e8">
        {/* {locked ? (
          <Icon icon={ic_lock} size={30} onClick={handleUnlock}></Icon>
        ) : (
          <Icon icon={ic_unlock} size={30} onClick={handleLock}></Icon>
        )} */}
      </HStack>
      <VStack flexGrow={1} p={12}>
        <Textarea onChange={handleMemoEditorChange} value={memo.title + `\n` + memo.text}></Textarea>
      </VStack>
    </VStack>
  );
};

export default Editor;
