/** @jsxImportSource @emotion/react */
import { FC, HTMLAttributes } from 'react';
import { jsx } from '@emotion/react';
import { WithAnimatorOutputProps } from '@arwes/animation';
import { FrameLinesProps, FrameLines, Text } from '@arwes/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const Frame: FC<HTMLAttributes<HTMLDivElement> & FrameLinesProps<HTMLDivElement> & WithAnimatorOutputProps> = FrameLines as any;

const AppFooter: FC = () => {
  return (
    <header css={({ space }) => ({ padding: space(2), userSelect: 'none', p: { margin: 0 } })} >
      <Frame animator={{ manager: 'stagger' }} style={{display: 'block'}} hideBottomLines>
        <div css={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text as='p'>
            Networks://
            <a href='https://www.github.com/rebelarms' target='rebelarms' referrerPolicy='no-referrer'>Github :: </a> 
            <a href='https://www.twitter.com/rebelarms_eth' target='rebelarms' referrerPolicy='no-referrer'>Twitter :: </a> 
            <a href='https://www.instagram.com/rebelarms.eth' target='rebelarms' referrerPolicy='no-referrer'>Instagram :: </a> 
            <a href='https://www.tiktok.com/@rebelarms.eth' target='rebelarms' referrerPolicy='no-referrer'>Tiktok </a>
          </Text>
          <Text as='p'>
            <a href='' target='rsi' referrerPolicy='no-referrer'>
              V1.0.0
            </a>
          </Text>
        </div>
      </Frame>
    </header>
  );
};

export { AppFooter };
