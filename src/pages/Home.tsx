import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { BlockchainProvider } from '@/contexts/BlockchainContext'

import { ControlPanel } from '@/components/ControlPanel'
import { MinedBlocks } from '@/components/MinedBlocks'
import { Footer } from '@/components/Footer'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    Notification.requestPermission()
  }, [])

  return (
    <BlockchainProvider>
      <div>
        <Head>
          <title>Create React Mine</title>
        </Head>

        <ControlPanel />

        <MinedBlocks />

        <Footer />

        <ToastContainer />
      </div>
    </BlockchainProvider>
  )
}

export default Home
