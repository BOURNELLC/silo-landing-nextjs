import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Pricing from '@/components/PricingComponents/Pricing'
import VsCompetitor from '@/components/PricingComponents/VsCompetitor'
import CostTable from '@/components/PricingComponents/CostTable'
import CostCalculator from '@/components/PricingComponents/CostCalculator'
import CTA1 from '@/components/PricingComponents/CTA1'
import FAQ from '@/components/PricingComponents/FAQ'
import CaseStudies from '@/components/PricingComponents/CaseStudies'
import ConnectApps from '@/components/PricingComponents/ConnectApps'
import CTA2 from '@/components/PricingComponents/CTA2'

function page() {
    return (
        <div>
            <div className='bg-[#060C18]'>
                <Header />
            </div>
            <Pricing />
            <VsCompetitor />
            <CostTable />
            <CostCalculator />
            <CTA1 />
            <FAQ />
            <CaseStudies />
            <ConnectApps />
            <CTA2 />
            <Footer />
        </div>
    )
}

export default page