import Image from 'next/image'
import Background from './components/utils/Background'
import ProductCard from './components/blocks/ProductCard'
import VerticalFeatureRow from './components/blocks/VerticalFeatureRow'
import Section from './components/blocks/Section'
import Navbar from './components/blocks/NavBar'
import Navbar2 from './components/blocks/NavBar2'
import PageTitle from './components/blocks/PageTitle'
import Link from 'next/link'
import UnderlineLink from "./components/blocks/underline-link"
import CoolLink from "./components/blocks/CoolLink"

export default function Home() {

  return (
    <main>
    <div className="text-gray-800 antialiased">
    <Navbar2 />

    <Section yPadding="pt-20 pb-20">
    <header className="text-center">
    <h1 className="text-5xl p-4 text-center font-bold from-green-600 via-yellow-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
        Local Care, Global Impact
    </h1>

    <div className="mb-16 mt-4 text-2xl">Your Sustainable E-commerce in the Heart of Trentino</div>

    <Link
    href="/store"
    className="btn-main rounded-2xl text-base px-8 py-2.5 bg-gradient-to-l from-green-400 to-green-600"
            >
              Let's Start!
    </Link>

    </header>
    </Section>

    <Background color="bg-gradient-to-r from-blue-600 to-green-600">
    <Section yPadding="pt-2 pb-2">
    <VerticalFeatureRow
      title="We believe in local economy, and you?"
      description="Buy what you are looking for directly from the shops in your area, but online! By doing so you will help small-medium sized businesses to approach this world."
      image="/images/eco5.png"
      imageAlt="First feature alt text"
      reverse={true}
    />
    </Section>
    </Background>
    <Background color="bg-gradient-to-r from-blue-600 to-green-600">
    <Section yPadding="pt-2 pb-2">
    <VerticalFeatureRow
      title="Single site to manage all local products"
      description="Search, filter and find all local products available in your area on one platform. Explore the page dedicated to local shops and their products."
      image="/images/phone.png"
      imageAlt="First feature alt text"
      reverse={false}
    />
    </Section>
    </Background>
    <Background color="bg-gradient-to-r from-blue-600 to-green-600">
    <Section yPadding="pt-2 pb-2">
    <VerticalFeatureRow
      title="Are you a local shop?"
      description="Start your online business easily, discover all the advantages via the dedicated page and join us."
      image="/images/map.jpg"
      imageAlt="First feature alt text"
      reverse={true}
    />
    </Section>
    </Background>
    </div>

    <Section yPadding="pt-2 pb-10">
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
      <p style={{ textAlign: 'center' }}>University of Trento</p>
    </div>
    </Section>


    </main>
  )
}
