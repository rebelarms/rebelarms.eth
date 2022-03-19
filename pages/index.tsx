/** @jsxImportSource @emotion/react */
import { CSSObject, jsx, useTheme } from '@emotion/react';
import { Animator } from '@arwes/animation';
import { Text, Figure } from '@arwes/core';
import { AppContentWrapper } from '../components/AppContentWrapper';
import { NONAME } from 'dns';

interface Data {
  id: string
  name: string
  image: string
  description: string
  url: string
}

const data: Data = {
  id: 'p0',
  name: 'Hello Friend..',
  image: '/assets/api/RebelArms.png',
  description: "",
  url: 'https://www.sleepyjoenft.com'
};

export default function Home () {
  const theme = useTheme();
  const styles: Record<string, CSSObject> = {
    content: {
      margin: theme.space(0)
    }
  };
  
  return (
    <main>
      <AppContentWrapper>
        <Animator animator={{ manager: 'stagger' }}>
          <center>
          <img src={data.image} style={{"max-height": "80vh"}}/>
          </center>
        </Animator>
      </AppContentWrapper>
    </main>
  );
}
