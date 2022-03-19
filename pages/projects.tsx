/** @jsxImportSource @emotion/react */
import { CSSObject, jsx, useTheme } from '@emotion/react';
import Link from 'next/link';
import { Animator } from '@arwes/animation';
import { Card, Button, Text } from '@arwes/core';

import { AppContentWrapper } from '../components/AppContentWrapper';

interface Projects {
  id: string
  name: string
  image: string
  description: string
  url: string
}

const projects: Projects[] = [
  {
    id: 'p0',
    name: 'Corporate Spending Innovations',
    image: '/assets/api/csi.png',
    description: 'Sofware & Salesforce Engineering Consultant responsible for Saleforce Development & API Integration.',
    url: 'https://www.corporatespending.com/'
  },
  {
    id: 'p1',
    name: 'Craft Clouds',
    image: '/assets/api/craftclouds.png',
    description: "Security consultant conducting a code and infrastructure security audit. Project is a React site with custom web3 integration.",
    url: 'https://craftclouds.com'
  },
  {
    id: 'p2',
    name: 'Sleepy Joe Biden',
    image: '/assets/api/sleepyjoe.png',
    description: 'Principle Software Engineer responsible for NFT Contracts, Web3 site integration, CI/CD, Automated testing, and Security audits. Project website is a React SPA with web3 integration using Moralis.',
    url: 'https://www.sleepyjoenft.com'
  },
  {
    id: 'p3',
    name: 'Telemundo',
    image: '/assets/api/telemundo.png',
    description: 'Software Engineer responsible for Bug Fixes, Feature Development, Security Remediations, and deployment pipelines. Project has an AWS infrastructure, Drupal CMS backend, React / Next.JS Frontend, Memcache/Varnish, and Akamai CDN.',
    url: 'https://www.telemundo.com'
  },
  {
    id: 'p4',
    name: 'MSNBC',
    image: '/assets/api/msnbc.png',
    description: 'Frontend Development',
    url: 'https://www.msnbc.com'
  }
];

function Projects () {
  const theme = useTheme();
  const styles: Record<string, CSSObject> = {
    cards: {
      display: 'flex',
      flexDirection: 'column'
    },
    card: {
      marginBottom: theme.space(4)
    }
  };

  return (
    <main>
      <AppContentWrapper>
        <Animator animator={{ manager: 'stagger' }}>
          <header>
            <Text as='h1'>Projects</Text>
          </header>
          <div css={styles.cards}>
            {projects.map(project =>
              <Card
                key={project.id}
                css={styles.card}
                landscape
                title={project.name}
                image={{
                  src: project.image
                }}
                options={
                  <>
                    <a href={project.url} target='_blank' rel='noreferrer'>
                      <Button palette='secondary'>
                        <Text>Visit Project</Text>
                      </Button>
                    </a>
                  </>
                }
              >
                <Text>
                  {project.description}
                </Text>
              </Card>
            )}
          </div>
        </Animator>
      </AppContentWrapper>
    </main>
  );
}

export default Projects;
