import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import '../styles/base.scss'
import 'rsuite/lib/styles/index.less';
import { Input, InputGroup, Icon, Panel, PanelGroup, Divider } from 'rsuite';
import Card from '../components/layout/card';

const Home = () => (
  <div className="warp-index">
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Nav />
    <div className="warp-cover">
      <img src="/static/cover.png" alt="cover" />
      <div className="cover-content">
        <h1>Hello world,<br /> we come in peace.</h1>
        <div className="container-search">
          <InputGroup inside >
            <Input placeholder="Find Something" />
            <InputGroup.Button>
              <Icon icon="search" />
            </InputGroup.Button>
          </InputGroup>
        </div>
      </div>
    </div>

    <div className="warp-content">
      <div className="content-about">
        <PanelGroup>
          <Panel header="Panel 1">
            <h5>ABCDEFG</h5>
          </Panel>
        </PanelGroup>
        <PanelGroup>
          <Panel header="Panel 2">
            <h5>ABCDEFG</h5>
          </Panel>
        </PanelGroup>
      </div>

      <div className="content">
        <div className="content-tabs">
          <h4>NEW</h4><Divider />
        </div>
        <div className="content-card" >
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>


      </div>
    </div>



  </div>
)

export default Home
