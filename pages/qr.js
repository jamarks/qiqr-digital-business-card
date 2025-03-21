import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getSiteUrl } from '../utils/config'
var QRCode = require('qrcode')

export default function Qrviewer() {
  const router = useRouter()
  const { name, image } = router.query
  const [qrImage, setQrImage] = useState('')
  
  useEffect(() => {
    // If image is provided in the URL, use it
    if (image) {
      setQrImage(image)
      return
    }
    
    // Otherwise, generate the QR code on the client side
    const generateQR = async () => {
      try {
        const currentUrl = getSiteUrl()
        const qrDataUrl = await QRCode.toDataURL(currentUrl, { errorCorrectionLevel: 'H' })
        setQrImage(qrDataUrl)
      } catch (err) {
        console.error('Error generating QR code:', err)
      }
    }
    
    generateQR()
  }, [image])
  
  return (
    <>
      <Head>
        <title>{name ? `${name}'s QR Code` : 'QR Code'}</title>
        <meta name="description" content="Digital Business Card QR Code" />
      </Head>
      <div className='container w-full md:w-4/12 mx-auto py-10 px-5 md:py-10 md:px-10'>
        <div>
          <h1 className="text-2xl font-bold text-center mb-4">{name ? `${name}'s QR Code` : 'QR Code'}</h1>
          <p className="text-center mb-6">Scan this QR code to view the digital business card</p>
          {qrImage && <img alt='QR Code' src={qrImage} className='w-full h-full' />}
        </div>
        <div className="text-center mt-6">
          <button 
            onClick={() => router.push('/')}
            className="py-2 px-4 text-sm font-semibold leading-5 bg-blue-900 rounded hover:bg-indigo-600 focus:outline-none text-white"
          >
            Back to Card
          </button>
        </div>
      </div>
    </>
  )
} 