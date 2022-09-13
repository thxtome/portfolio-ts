import HStack from '@src/app/common/components/HStack';
import VStack from '@src/app/common/components/VStack';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Memo } from '../../type/Memo';

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
`;

const Editor = ({ memo }: { memo: Memo }) => {
  const [title, setTitle] = useState(memo.title);
  const [text, setText] = useState(memo.text);

  useEffect(() => {
    setTitle(memo.title);
    setText(memo.text);
  }, [memo]);

  return (
    <VStack flexGrow={1} minWidth="200px" width="40%">
      <HStack height="30px" minHeight="30px" border="1px solid grey"></HStack>
      <VStack flexGrow={1} p={12}>
        <Textarea
          onChange={e => {
            const [title, ...text] = e.target.value.split('\n');
            setTitle(title);
            setText(text.join('\n'));
          }}
          value={title + `\n` + text}
        ></Textarea>
      </VStack>
    </VStack>
  );
};

export default Editor;
