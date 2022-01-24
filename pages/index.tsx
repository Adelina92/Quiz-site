import type { NextPage } from 'next'
import { Button } from 'antd';
import { CommonUILayout } from '../components/layouts/CommonUILayout';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
      <CommonUILayout>
          Hello World
          <div>Check your English level</div>
          <Button type="dashed"><Link href="/quiz">Check now</Link></Button>
      </CommonUILayout>
  )
}

export default Home
