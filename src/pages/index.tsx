import Head from 'next/head'

import TemplateHome from '@/views/templates/home'

export default function Home() {
  return (
    <>
      <Head>
        <title>HD Truyện</title>
      </Head>
      <TemplateHome />
    </>
  )
}
