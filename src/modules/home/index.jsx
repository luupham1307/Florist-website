import React from 'react'
import Slide from './pages/Slide'
import Benefits from './pages/Benefits'
import Categories from './pages/Categories'
import CallToAction from './pages/CallToAction'
import About from '../../common/components/About'
import Posts from './pages/Posts'
import Testimonial from '../../common/components/Testimonial/Testimonial'
import Arrival from './pages/Arrival'
import ShopListing from '../shop/pages/Shop'

export default function Home() {
    return (
        <React.Fragment>
            <Slide />
            <Benefits />
            <Categories />
            <About />
            <Arrival />
            <ShopListing />
            <CallToAction />
            <Posts />
            <Testimonial />

        </React.Fragment>
    )
}
