import HStack from '@src/app/common/components/HStack';
import Process from '@src/app/common/components/Process';
import VStack from '@src/app/common/components/VStack';
import Typography from '@src/app/common/components/Typography';

import Folder from '../components/Folder';
import Memos from '../components/Memos';
import Editor from '../components/Editor';
import { useState } from 'react';

const memos = [
  {
    id: 1,
    title: 'asdfasdf',
    text: '넘 멋있다',
    createdAt: '2021-07-28 08:01',
  },
  {
    id: 2,
    title: 'Hello',
    text: 'World',
    createdAt: '2021-03-11 02:50',
  },
  {
    id: 3,
    title: 'wewe',
    text: '와',
    createdAt: '2021-01-22 05:40',
  },
  {
    id: 4,
    title: 'willy',
    text: '잘하셨네요',
    createdAt: '2020-09-21 02:56',
  },
  {
    id: 5,
    title: 'willy',
    text: '안녕 난 윌리가 아닌 촬리야',
    createdAt: '2020-09-15 05:58',
  },
  {
    id: 6,
    title: 'wow',
    text: '여전히 잘하는구나 ㅋㅋㅋ 잘보구갑니다',
    createdAt: '2020-08-28 02:57',
  },
  {
    id: 7,
    title: '블랙',
    text: '세세하게 다 신경쓰셨네요 깔끔하고 귀여워요~ 잘 보고 갑니다!',
    createdAt: '2020-08-26 07:17',
  },
  {
    id: 8,
    title: '구경중',
    text: '아이디어가 참신해요 재밌게 보다 갑니다!',
    createdAt: '2020-08-26 05:24',
  },
];

const Note = () => {
  const [selectedMemo, setSelectedMemo] = useState(memos[0]);
  const handleMemoClick = (id: number) => {
    setSelectedMemo(memos.find(memo => memo.id === id) ?? memos[0]);
  };
  return (
    <Process>
      <HStack width="100%" height="90%">
        <Folder />
        <Memos memos={memos} selectedId={selectedMemo.id} onMemoClick={handleMemoClick} />
        <Editor memo={selectedMemo} />
      </HStack>
    </Process>
  );
};
export default Note;
