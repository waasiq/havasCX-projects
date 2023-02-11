import Head from 'next/head'
import React from 'react'
import Button from '@/components/Button'


export default function Home() {
  return (
    <>
      <Head>
        <title>CSR-SSR-SSG</title>
        <meta name="explaining-csr-ssr-and-ssg" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='h-screen flex flex-col items-center'> 
        <h1 className="max-w-[50ch] text-center border-2 border-gray-600 rounded-lg py-4 px-2 mt-16 font-bold text-2xl">Use the Button Below To Visit Different Rendering Page</h1>
        <div className="flex items-center justify-between w-2/5 gap-5 mt-12">
          <Button text="CSR" />
          <Button text="SSG" />
          <Button text="SSR" />
        </div>
      </main>
    </>
  )
}