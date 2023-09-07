import './globals.css'
import { ReduxProvider } from '@/redux/provider'
import Navbar from '@/components/navbar/navbar';

import Footer from '@/components/footer/footer';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import { Metadata } from "next";
export const metadata:Metadata={
  title:{
    default:'Fashion Forward: Your Destination for Trendy Clothing and Accessories | GlamEdge',
    template:'%s'
  },
  description:'Explore the latest fashion trends and shop a wide range of stylish clothing and accessories at GlamEdge. Find your perfect style today. Shop now!'
} 
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
