import HStack from '@src/app/common/components/HStack';
import Process from '@src/app/common/components/Process';

import Folder from '../components/Folder';
import Memos from '../components/Memos';
import Editor from '../components/Editor';
import { useEffect, useRef, useState } from 'react';
import useContainerQuery from '@src/app/common/hooks/useContainerQuery';
import PasswordConfirm from '../components/PasswordConfirm';
import { Memo } from '../type/Memo';
import { createMemo, deleteMemo, fetchMemos, updateMemo } from '../api/api';

const Note = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [memos, setMemos] = useState<Memo[]>([]);
  const [show, isShow] = useState(false);
  const [selectedMemoId, setSelectedMemoId] = useState(memos[0]?.id);
  const selectedMemo = memos.find(memo => memo.id === selectedMemoId);

  const handleMemoClick = (id: number) => {
    setSelectedMemoId(id);
  };

  async function getMemos() {
    const memos = await fetchMemos();
    setMemos(memos);
    setSelectedMemoId(memos[0].id);
  }

  useEffect(() => {
    getMemos();
  }, []);

  async function handleCreateMemoClick() {
    const maxId = memos.reduce((acc, memo) => (acc > memo.id ? acc : memo.id), 0);

    const memo = {
      id: maxId + 1,
      title: '새 메모',
      text: '',
      createdAt: new Date().toLocaleString(),
    };

    await createMemo(memo);
    await getMemos();
  }

  async function handleMemoChange(memo: Memo) {
    setMemos(memos.map(m => (m.id === memo.id ? memo : m)));
    await updateMemo(memo);
    const newMemos = await fetchMemos();
    setMemos(newMemos);
  }

  async function handleDeleteMemoClick(id: number) {
    await deleteMemo(id);
    await getMemos();
  }

  function handleConfirmClose() {
    isShow(false);
  }

  const folderVisible = useContainerQuery(ref, [false, true, true]);

  return (
    <Process>
      <HStack width="100%" height="0px" ref={ref} flexGrow={1}>
        {memos.length === 0 || !selectedMemoId ? (
          <></>
        ) : (
          <>
            {folderVisible && <Folder />}
            <Memos
              memos={memos}
              selectedId={selectedMemoId}
              onMemoClick={handleMemoClick}
              onDeleteMemoClick={handleDeleteMemoClick}
              onCreateMemoClick={handleCreateMemoClick}
            />
            <Editor
              memo={selectedMemo ?? { title: '', text: '', id: -1, createdAt: '' }}
              onMemoChange={handleMemoChange}
            />
          </>
        )}
      </HStack>
      {show && <PasswordConfirm onClose={handleConfirmClose}></PasswordConfirm>}
    </Process>
  );
};
export default Note;
