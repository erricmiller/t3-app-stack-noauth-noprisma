import React from 'react';
import Link from 'next/link';
import NextImage from '../NextImage';
import { Icons } from '@/lib/Icons';

const Footer = () => {

  return (
    <footer className='Footer overflow-hidden'>

      {/* Main Footer */}
      <div className="footer_top 2xl:bg-[url('/images/bg-footer.webp')] border-t dark:bg-background bg-white  py-5  xl:py-[60px] 2xl:py-[60px] px-4">
        <div className="div_container grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-5 gap-3">
          {/* Footer Info */}
          <div className="info_footer">
            <Link aria-label="logo" href={'/'} className='w-fit'>
              <NextImage src={'/images/logo.webp'} alt='Instant Design Studio Logo' height={50} width={50} />
            </Link>
            <p className="web_desc text-[14px] dark:text-white text-black my-5">Full-stack Web, Mobile Developer.</p>
          </div>
          {/* Quick Links */}
          <div className="quick_links">
            <h2 className="text-[20px] dark:text-white text-black mb-6">Quick Links</h2>
              <Link aria-label="Home" href={'/'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Home
                </Link>
              <Link aria-label="About Us" href={'/'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                About Us
                </Link>
              <Link aria-label="Packages" href={'/'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Packages
                </Link>
              <Link aria-label="Portfolio" href={'/'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Portfolio
                </Link>
              <Link aria-label="Reviews" href={'/'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Reviews
                </Link>
          </div>
          {/* Services */}
          <div className="services">
            <h2 className="text-[20px] dark:text-white text-black mb-6">Services</h2>
              <Link aria-label="Website Development" href={'/'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Website Development
                </Link>
              <Link aria-label="Logo Design" href={'/'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Logo Design
                </Link>
              <Link aria-label="Ecommerce Solutions" href={'/'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Ecommerce Solutions
                </Link>
              <Link aria-label="Animation" href={'/'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Animation
                </Link>
          </div>
          {/* More Services */}
          <div className="more-services">
            <h2 className="text-[20px] dark:text-white text-black mb-6">More Services</h2>
              <Link aria-label="Creative Copywriting" href={'/'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Creative Copywriting
                </Link>
              <Link aria-label="Mobile Apps" href={'/'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                Mobile Apps
                </Link>
              <Link aria-label="SEO Servicess"  href={'/'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                SEO Servicess
                </Link>
          </div>
          {/* Contact */}
          <div className="Contact_info">
            <h2 className="text-[20px] dark:text-white text-black mb-6">Get in Touch Now!</h2>
              <Link aria-label="Number" href={'tel:923040021198'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                +92 304 0021198
                </Link>
              <Link aria-label="Email" href={'mailto:fahadrazzaq41@gmail.com'} className='dark:text-white text-black tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue'>
                <Icons.play className='w-[14px] h-[14px]' />
                fahadrazzaq41@gmail.com
                </Link>
              <Link aria-label="Address" href={'#'} className='dark:text-white text-black relative tex-[14px] mb-2 flex items-center justify-start gap-1 hover:text-blue pl-5'>
                <Icons.play className='w-[14px] h-[14px] absolute top-1 left-0' />
                Karachi, Sindh, Pakistan.
                </Link>
          </div>
        </div>
      </div>

      {/* Copyright Footer */}
      <div className="footer_bottom border-y dark:bg-background bg-white py-3 px-4">
        <div className="div_container flex items-center justify-center gap-3 flex-col lg:flex-row xl:flex-row 2xl:flex-row lg:justify-between xl:justify-between 2xl:justify-between">
          <p className="dark:text-white text-black text-[14px]">
            Copyright © {new Date().getFullYear()} NextJS | All Rights Reserved.
          </p>
          <div className="socials flex items-center gap-2">
            <Link aria-label='Facebook'
              href={
                '/'
              }
              className="facebook_social flex items-center justify-center rounded-full  p-2"
            >
              <Icons.facebook className="" />
            </Link>
            <Link aria-label='Instagram'
              href={'/'}
              className="facebook_social flex items-center justify-center rounded-full p-2"
            >
              <Icons.insta className="" />
            </Link>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
