import Contact from '@/components/common/Contact'
import Faq from '@/components/common/Faq'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import Dash from '@/components/packages/Dash'
import HiddenCostUI from '@/components/packages/HiddenCostUI'
import MachDashboard from '@/components/packages/MachDashboard'
import PricingPage from '@/components/packages/Pricing'
import React from 'react'

function Packages() {
  return (
    <>
    <Header variant='dark'/>
    <PricingPage />
    <HiddenCostUI />
    {/* <MachDashboard /> */}
    <Dash />
    <Faq bg={'#00165B'} />
    <Contact />
    <Footer variant='dark'/>
    </>
  )
}

export default Packages