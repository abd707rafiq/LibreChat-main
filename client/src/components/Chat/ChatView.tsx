import React, { useState, useContext, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useGetMessagesByConvoId } from 'librechat-data-provider/react-query';
import { ChatContext, useFileMapContext } from '~/Providers'; // Keep other contexts
import MessagesView from './Messages/MessagesView';
import { useChatHelpers, useSSE } from '~/hooks';
import { Spinner } from '~/components/svg';
import Presentation from './Presentation';
import ChatForm from './Input/ChatForm';
import { buildTree } from '~/utils';
import Landing from './Landing';
import Header from './Header';
import Footer from './Footer';
import NormalModeButtons from './NormalModeButtons'; // Assuming this component exists as per your instruction
import store from '~/store';

function ChatView({ index = 0 }) {
  const { conversationId } = useParams();
  const submissionAtIndex = useRecoilValue(store.submissionByIndex(0));
  useSSE(submissionAtIndex);

  const fileMap = useFileMapContext();

  const { data: messagesTree = null, isLoading } = useGetMessagesByConvoId(conversationId ?? '', {
    select: (data) => {
      const dataTree = buildTree({ messages: data, fileMap });
      return dataTree?.length === 0 ? null : dataTree ?? null;
    },
    enabled: !!fileMap,
  });

  const chatHelpers = useChatHelpers(index, conversationId);

  const [mode, setMode] = useState('Normal'); // Manage the mode state locally

  // Toggle between Normal and Advanced modes
  const toggleMode = () => setMode(mode === 'Normal' ? 'Advanced' : 'Normal');

  return (
    <ChatContext.Provider value={chatHelpers}>
      <Presentation useSidePanel={mode === 'Advanced'}>
        <button onClick={toggleMode} className="toggle-mode-button text-white">
          Switch to {mode === 'Normal' ? 'Advanced' : 'Normal'} Mode
        </button>
        {mode === 'Advanced' ? (
          <>
            {isLoading && conversationId !== 'new' ? (
              <div className="flex h-screen items-center justify-center">
                <Spinner className="opacity-0" />
              </div>
            ) : messagesTree && messagesTree.length !== 0 ? (
              <MessagesView messagesTree={messagesTree} />
            ) : (
              <Landing Header={<Header />} />
            )}
            <div className="w-full border-t-0 pl-0 pt-2 dark:border-white/20 md:w-[calc(100%-.5rem)] md:border-t-0 md:border-transparent md:pl-0 md:pt-0 md:dark:border-transparent">
              <ChatForm index={index} />
              <Footer />
            </div>
          </>
        ) : (
          // Normal mode UI
          <NormalModeButtons />
        )}
      </Presentation>
    </ChatContext.Provider>
  );
}

export default memo(ChatView);
