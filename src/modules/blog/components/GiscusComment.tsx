import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

interface GiscusComment {
  isEnableReaction?: boolean;
}

const GiscusComment = ({ isEnableReaction = false }: GiscusComment) => {
  const { theme } = useTheme();

  return (
    <div className='mt-5 mb-2'>
      <Giscus
        repo="mawsyh/misaghi"
        repoId="R_kgDOKxplOg"
        category="General"
        categoryId="DIC_kwDOKxplOs4Cc2W3"
        mapping="pathname"
        reactionsEnabled={isEnableReaction ? '1' : '0'}
        emitMetadata='1'
        inputPosition='top'
        theme={theme === 'dark' ? 'transparent_dark' : 'light'}
        lang='en'
        loading='lazy'
      />
    </div>
  );
};

export default GiscusComment;
