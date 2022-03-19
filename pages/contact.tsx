import { Text } from '@arwes/core';

import { AppContentWrapper } from '../components/AppContentWrapper';

export default function Contact () {
  return (
    <main>
      <AppContentWrapper>
        <header>
          <Text as='h1'>Telemundo.com</Text>
        </header>
        <div>
          <Text as='p'>Inventory of available planets.</Text>
        </div>
      </AppContentWrapper>
    </main>
  );
}
