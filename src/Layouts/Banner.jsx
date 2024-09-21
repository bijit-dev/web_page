import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Button from '../components/Button'
import BannerImg from '../assets/banner.png'

const Banner = () => {
    return (
        <section className='bg-back h-screen pt-32'>
            <Container>
                <Flex className='gap-2 items-center'>
                    <div className='w-3/5'>
                        <h1 className='text-[27px] sm:text-[32px] md:text-[36px] lg:text-[40px]  xl:text-5xl pt-12 text-htext font-pop font-semibold md:pt-4 lg:pt-2 xl:pt-1 md:bg-6 lg:pb-1 pb-1 text-center'>HEY, I'M BIJIT DEB.</h1>

                        <h2 className='text-[27px] sm:text-[32px] md:text-[36px] lg:text-[40px]  xl:text-5xl pt-3 text-ptext font-pop font-semibold    md:bg-6 lg:pb-8 pb-4'>I build things for the web.</h2>

                        <p className='text-ptext text-justify mb-14'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
                        <Flex className="gap-5">
                            <Button className="py-4 px-9" text="HIRE ME"/>
                            <Button className="py-4 px-8" text="Contact Me"/>
                        </Flex>
                    </div>
                    
                    <div><img src={BannerImg} alt="" /></div>
                </Flex>
            </Container>
        </section>
    
    )
}

export default Banner
