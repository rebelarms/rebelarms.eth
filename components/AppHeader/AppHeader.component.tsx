/** @jsxImportSource @emotion/react */
import { FC, HTMLAttributes } from 'react';
import { jsx, useTheme } from '@emotion/react';
import Link from 'next/link';
import { WithAnimatorOutputProps } from '@arwes/animation';
import { FrameLinesProps, FrameLines, Text } from '@arwes/core';

import { createStyles } from './AppHeader.styles';

const Frame: FC<HTMLAttributes<HTMLDivElement> & FrameLinesProps<HTMLDivElement> & WithAnimatorOutputProps> = FrameLines as any;

const AppHeader: FC = () => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <header css={styles.root}>
      <Frame animator={{ manager: 'stagger' }} css={styles.frame} hideTopLines>
        <div css={styles.container}>
          <Text as='h1' blink={true}>
            <Link href='/'>
              RebelArms.Eth
            </Link>
          </Text>
          <Text as='nav' css={styles.nav} blink={false}>
            <ul css={styles.navList}>
              <li css={styles.navItem}>
                <Link href='/projects'>Projects</Link>
              </li>
              {/* <li css={styles.navItem}>
                <Link href='/contact'>Contact</Link>
              </li> */}
            </ul>
          </Text>
        </div>
      </Frame>
    </header>
  );
};

export { AppHeader };
