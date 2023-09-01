import './globals.css'
import { ReduxProvider } from '@/redux/provider'
import Navbar from '@/components/navbar';

import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
    
      <body className='' >
      
        <ReduxProvider>
        <Navbar/>
          {children}
         <Footer/>
          </ReduxProvider>
       
        </body>
        
    </html>
  )
}
