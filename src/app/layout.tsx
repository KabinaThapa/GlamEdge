import './globals.css'
import { ReduxProvider } from '@/redux/provider'
import Navbar from '@/components/navbar';

import Footer from '@/components/footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
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
          <ToastContainer/>
         <Footer/>
          </ReduxProvider>
       
        </body>
        
    </html>
  )
}
