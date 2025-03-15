import Layout from '../components/profileLayout'
import Image from 'next/image'
import Link from 'next/link'
import Loader from '../components/loader'
import { useEffect, useState } from 'react';
import { getUserData, getSiteUrl } from '../utils/config';
var QRCode = require('qrcode')

async function Share(title, url) {
  try {
    if (navigator.canShare) {
      await navigator.share({ title: title, text: 'Here is ' + title + '\'s Digital Business Card', url: url });
    }
  } catch (err) {
    console.error(err.message);
  }
};

export default function Profile({ user }) {
  const [loader, setLoader] = useState(false)
  const [qrimage, setQrimage] = useState('')
  const currentUrl = getSiteUrl()
  
  // Generate QR code on the client side to ensure it has the correct URL
  useEffect(() => {
    const generateQR = async () => {
      try {
        const qrDataUrl = await QRCode.toDataURL(currentUrl, { errorCorrectionLevel: 'H' });
        setQrimage(qrDataUrl);
      } catch (err) {
        console.error('Error generating QR code:', err);
      }
    };
    
    generateQR();
  }, [currentUrl]);

  return (
    <Layout title={user.name + ' | ' + user.company} description={user.about} keyworkds={user.name} currentURL={currentUrl} previewImage={user.photo} siteName='Digital Business Card'>
      <div className="flex flex-col-reverse lg:flex-row md:w-8/12 md:mx-auto bg-white dark:bg-gray-800 shadow rounded">
        <div className="w-full lg:w-1/2">
          <div aria-label="card" className="px-5 md:py-3 py-8">
            <div className="flex justify-between items-center flex-col mb-3 ">
              {user.company &&
                <div className='w-full '><h4 className="text-base text-blue-900 dark:text-indigo-600 tracking-normal leading-4">{user.company}</h4></div>
              }
              {user.name &&
                <div className='w-full '><h1 className="mt-4 mb-0 tracking-normal text-xl lg:text-2xl custombold">{user.name}<small className='pl-1 text-xs text-gray-500 font-light'> {user.subtitle}</small></h1></div>
              }
              {user.title &&
                <div className='w-full '><h2 className="lg:mt-0 text-gray-600 dark:text-gray-400 text-base font-normal">{user.title}</h2></div>
              }   
            </div>
            {user.about &&
              <p className="b-3 lg:mb-6 font-normal text-gray-600 dark:text-gray-400 text-sm tracking-normal w-11/12 lg:w-9/12">{user.about}</p>
            }
            <div className="flex items-start flex-col lg:flex-row">
              {user.location &&
                <a target='_blank' rel='noreferrer' href={'http://maps.google.com/?q=' + encodeURIComponent(user.location)} className="text-gray-600 dark:text-gray-400 focus:outline-none hover:text-indigo-700 focus:text-indigo-700 mt-4 lg:mt-0 ml-0 flex">
                  <span className="mr-2 mt-1 sm:mt-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={11} r={3} />
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                  </span>
                  <p className=" text-sm tracking-normal font-normal text-left">{user.location}</p>
                </a>
              }
            </div>
          </div>
          <div className="px-5 py-3 flex flex-row items-center border-t border-gray-300">
            <div className="flex items-center flex-wrap">
              {user.email &&
                <div className="py-2 px-1">
                  <a href={'mailto:' + user.email} target='_blank' rel='noreferrer' className="py-2 px-4 text-xs font-semibold leading-3 bg-blue-900 rounded hover:bg-indigo-600 focus:outline-none text-white">Email</a>
                </div>
              }
              {user.phone &&
                <div className="py-2 px-1">
                  <a href={'tel:' + user.phone} target='_blank' rel='noreferrer' className="py-2 px-4 text-xs font-semibold leading-3 bg-blue-900 rounded hover:bg-indigo-600 focus:outline-none text-white">Phone</a>
                </div>
              }
              {user.linkedin &&
                <div className="py-2 px-1">
                  <a href={user.linkedin} target='_blank' rel='noreferrer' className="py-2 px-4 text-xs font-semibold leading-3 bg-blue-900 rounded hover:bg-indigo-600 focus:outline-none text-white">Linkedin</a>
                </div>
              }
              {user.website &&
                <div className="py-2 px-1">
                  <a href={user.website} target='_blank' rel='noreferrer' className="py-2 px-4 text-xs font-semibold leading-3 bg-blue-900 rounded hover:bg-indigo-600 focus:outline-none text-white">Website</a>
                </div>
              }
              <div className="py-2 px-1">
                {loader &&
                  <Loader></Loader>
                }
              </div>
            </div>
          </div>
          <div className="px-5 py-1 flex flex-row border-t border-gray-300">
            <button onClick={(e) => Share(user.name, currentUrl)} aria-label="share" className="md:hidden mr-5 text-blue-900 dark:text-indigo-600  hover:text-indigo-500  focus:outline-none focus:text-indigo-500 cursor-pointer">
              <svg className="feather feather-share-2" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx={18} cy={5} r={3} />
                <circle cx={6} cy={12} r={3} />
                <circle cx={18} cy={19} r={3} />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
            <div className='py-4 mt-2 cursor-pointer'>
              <Link href={`/qr?name=${encodeURIComponent(user.name)}&image=${encodeURIComponent(qrimage)}`}>
                <a>
                  <Image src="/images/QR_icon.svg" alt={user.name} height={26} width={26} />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative w-full h-96 lg:h-100 lg:w-1/2 rounded-t lg:rounded-t-none lg:rounded-r inline-block">
          {user.photo &&
            <Image unoptimized={true} className="w-full h-full absolute inset-0 object-cover rounded-t lg:rounded-r lg:rounded-t-none" layout="fill" src={user.photo} alt={user.name} />
          }
          {!user.photo &&
            <div className='w-full h-full bg-gray-400 opacity-75 mx-auto text-center pt-40'>[No photo yet]</div>
          }
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Get user data from environment variables
  const user = getUserData()

  return {
    props: {
      user
    }
  }
}