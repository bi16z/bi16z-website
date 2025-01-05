'use client'

import Link from 'next/link'

export function Footer() {
  const links = [
    {
      label: 'GitHub',
      url: 'https://github.com/bi16z'
    },
    {
      label: 'X/Twitter',
      url: 'https://x.com/bi16z'
    }
  ]

  const transactions = [
    {
      token: '$bi16z',
      wallet: 'HeLp...8jwC'
    },
    {
      token: '$beliza',
      wallet: 'Gu3L...pump'
    }
  ]
  return (
    <footer className='border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-[#050505] py-16'>
      <div className='md:container mx-auto px-10 flex flex-col items-center'>
        <ul className='grid md:grid-cols-3 grid-cols-2 gap-4 pb-12 pt-6 w-full'>
          {links.map((link, index) => (
            <Link key={index} href={link.url} className='text-gray-800 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-600 font-semibold text-sm'>{link.label}</Link>
          ))}
        </ul>
        <hr className='border-t border-gray-200 dark:border-gray-700 w-full' />
        <div className='grid gap-4 py-12 w-full'>
          {transactions.map(({ token, wallet }, index) => (
            <div key={index} className='flex justify-between items-center'>
              <span className='text-gray-900 dark:text-white font-semibold text-sm'>{token}</span>
              <button
                className="flex items-center gap-2 bg-gray-100 dark:bg-[#FFFFFF0D] text-gray-900 dark:text-white px-3 py-2 border-gray-300 dark:border-[#1E1E1E] rounded-lg text-sm font-medium shadow-md hover:bg-gray-200 dark:hover:bg-[#1E1E1E] transition-colors"
              >
                <span className="truncate font-medium">{wallet}</span>
                <span className="font-semibold text-gray-600 dark:text-[#828282] hover:text-gray-900 dark:hover:text-white" onClick={() => navigator.clipboard.writeText(wallet)}>Copy</span>
              </button>
            </div>
          ))}
        </div>
        <hr className='border-t border-gray-200 dark:border-gray-700 w-full' />
        <p className='mx-auto md:max-w-[800px] text-center text-gray-600 dark:text-[#828282] font-semibold text-sm py-8'>By purchasing the $bi16z coin or associated coins you are expressing your support for the bi16z ideology expressed on the blockchain. Value appreciation is not guaranteed.</p>
      </div>
    </footer>
  )
}

