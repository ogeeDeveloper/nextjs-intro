import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Nextjs Introduction project' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Link href='/notes'>
        <a>View Notes</a>
      </Link>
    </div>
  )
}
