import Head from 'next/head'
import Link from 'next/link';
import styles from './CommonUILayout.module.css'
import { Layout, Button, Menu } from 'antd';
import { ReactNode } from 'react';

const { Header, Footer, Content } = Layout;

export type CommonUILayoutProps = {
    children: ReactNode;
}

export const CommonUILayout = ({children}:CommonUILayoutProps) => {
    return (
        <div>
        <Head>
          <title>Quiz</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Layout>
        <Header className="header">
          <div className={styles.logotype} />
            <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1"><Link href="/">Home</Link></Menu.Item>
            <Menu.Item key="2"><Link href="/quiz">Quiz</Link></Menu.Item>
            <Menu.Item key="3"><Link href="/contact">Contact us</Link></Menu.Item>
          </Menu>
        </Header>
          <Content className= {styles.content}>
              {children}
          </Content>
          <Footer>Footer</Footer>
        </Layout>
  
      </div>
    )
}