import * as React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import styled from "styled-components";

import Layout from '../components/Layout';

export default function Home() {

  const metadata = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);

  const StyledCurrentList = styled.ul`
    list-style-type: none;
    li {
      margin-bottom: .75rem;
    }
    @media (max-width: 540px) {
      li {
        margin-bottom: 1.25rem;
      }
    }
  `;

  const StyledDirectoryList = styled.ol`
    list-style-type: none;
    display: inline-block;
    margin: 0;
    li {
      display: inline-block;
    }
    .inline-text {
      display: inline-block;
    }
  `;

  const StyledProjectList = styled.ol`
    margin-top: 1.75rem;
    list-style-type: none;
    h4 {
      font-weight: 500;
    }
    p {
      max-width: 800px;
      margin-bottom: 1.25rem;
      font-size: 14px;
      color: #444;
    }
  `;

  return (
    <div class="container">
      <Layout>
        <main>
          <h1>Hey, I'm Tarran! 👋</h1>
          <p>{metadata.site.siteMetadata.description}</p>
          <ul class="inline-list">
            <li><a href="https://github.com/tarranprior" target="_blank" rel="noreferrer">GitHub</a></li><li>|</li>
            <li><a href="https://linkedin.com/in/tarranprior" target="_blank" rel="noreferrer">LinkedIn</a></li><li>|</li>
            <li><a href="mailto:tarranprior@protonmail.com" target="_blank" rel="noreferrer">Email</a></li><li>|</li>
            <li><a href="https://github.com/tarranprior.gpg" target="_blank" rel="noreferrer">PGP</a></li>
          </ul>
          <h3>Currently:</h3>
          <StyledCurrentList>
            <li>👨‍💻 I'm an <b>IT</b> & <b>Data Storage Engineer</b> living in beautiful <b>Wiltshire, UK</b>,</li>
            <li>💼 providing <b>enterprise hardware support and services</b> with the team @ <a href="https://ultrasupport.co.uk" target="_blank" rel="noreferrer">UltraSupport</a>,</li>
            <li>🛠️ building and maintaining <b>open-source projects</b> and <b>community software</b>,</li>
            <li>💾 <b>preserving files</b> and discussing data with the good people @ <a href="https://old.reddit.com/r/DataHoarder" target="_blank" rel="noreferrer">r/DataHoarder</a>,</li>
            <li>📚 learning <b>Go</b> and <b>Offensive Security</b>, and working towards CompTIA <b>A+</b> & <b>Security+</b>.</li>
          </StyledCurrentList>
          <div class="inline-text"><h2>Index of <StyledDirectoryList><li>/public</li><li>/recent</li><li>/Projects/</li></StyledDirectoryList></h2></div>
          <StyledProjectList>
            <li>
              <h4>📁 <a href="https://github.com/tarranprior/Sudonym" target="_blank" rel="noreferrer">Sudonym/</a></h4>
              <p>The most advanced cyber security focused bot on Discord. Built-in <b>networking utilities</b>, <b>security tools</b>, <b>OSINT</b>, <b>CTFs</b> and more.</p>
            </li>
            <li>
              <h4>✈️ <a href="https://github.com/tarranprior/blackstar" target="_blank" rel="noreferrer">Blackstar/</a></h4>
              <p>An asynchronous and lightweight <b>OSINT</b> and <b>online surveillance</b> tool which searches for usernames across common social networking platforms. Inspired by The Sherlock Project.</p>
            </li>
            <li>
              <h4>📁 <a href="https://github.com/tarranprior/disclone" target="_blank" rel="noreferrer">Disclone/</a></h4>
              <p><b>Disclone</b> is a self-hostable bot with <b>Rclone</b> integration, <b>Gclone</b> support and <b>Google Drive</b> automation utilities for collaborative cloud storage management.</p>
            </li>
            <li>
              <h4>📁 <a href="https://runebot.org" target="_blank" rel="noreferrer">Runebot/</a></h4>
              <p>The open source RuneScape lookup tool. <b>Runebot</b> is a feature-rich Discord bot which scrapes, pulls and displays information about the popular MMORPG <b>Old School RuneScape</b>.</p>
            </li>
          </StyledProjectList>
        </main>
      </Layout>
    </div>
  );
};

export function Head() {
  return (
    <title>Tarran Prior - Home</title>
  );
};