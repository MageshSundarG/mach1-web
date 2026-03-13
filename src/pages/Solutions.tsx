import React from 'react'
import Header from '@/components/common/Header'
import SolutionsWeOffer from '@/components/solutions/SolutionsWeOffer'
import Footer from '@/components/common/Footer'
import Faq from '@/components/common/Faq'
import Contact from '@/components/common/Contact'
import GetMoreInsights from '@/components/solutions/GetMoreInsights'
function Solutions() {
  return (
    <>
        <Header variant="light" />
        <SolutionsWeOffer />
        <GetMoreInsights />
        <Faq bg="#020B18"/>
        <Contact/>
        <Footer variant="black" />
    </>
  )
}

export default Solutions