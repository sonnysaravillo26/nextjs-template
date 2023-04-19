import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h2>Start</h2>
      </div>
 

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"> 
        <h3>Hello World!</h3>
      </div>
    </main>
  )
}
