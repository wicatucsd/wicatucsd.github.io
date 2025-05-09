import React from 'react';
import Image from 'next/image';
import Button from './Button';

export default function Footer() {
  const iconSize = 30; // Size of the icon in pixels
  return (
    <footer className='bg-primary-medium text-primary-light'>
      <section className='flex flex-col gap-md items-center'>
        <h1 className='text-primary-light'>Connect with Us</h1>
        <div className='flex flex-col gap-lg'>
          <div className='flex flex-col md:flex-row gap-lg w-full'>
            <div className='flex flex-col gap-md'>
                <div className='flex gap-sm justify-center md:flex-col md:gap-1'>
                  <a href="https://www.instagram.com/wicucsd" target="_blank" rel="noopener noreferrer">
                    <div className="inline-flex items-center gap-sm transition-transform duration-200 hover:scale-120">
                      <Image
                      src="/images/icons/instagram-light.png"
                      alt="Instagram"
                      width={iconSize}
                      height={iconSize}
                      />
                        <p className='font-bold hidden md:block'>Instagram</p>
                    </div>
                  </a>
                  <a href="https://discord.com/invite/ZE62Zuh" target="_blank" rel="noopener noreferrer">
                    <div className="inline-flex items-center gap-sm transition-transform duration-200 hover:scale-120">
                      <Image
                      src="/images/icons/discord-light.png"
                      alt="Discord"
                      width={iconSize}
                      height={iconSize}
                      />
                      <p className='font-bold hidden md:block'>Discord</p>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/wic-ucsd/" target="_blank" rel="noopener noreferrer">
                    <div className="inline-flex items-center gap-sm transition-transform duration-200 hover:scale-120">
                      <Image
                      src="/images/icons/linkedin-light.png"
                      alt="LinkedIn"
                      width={iconSize}
                      height={iconSize}
                      />
                      <p className='font-bold hidden md:block'>LinkedIn</p>
                    </div>
                  </a>
                  <a href="https://linktr.ee/wicucsd" target="_blank" rel="noopener noreferrer">
                    <div className="inline-flex items-center gap-sm transition-transform duration-200 hover:scale-120">
                      <Image
                      src="/images/icons/linktree-light.png"
                      alt="LinkTree"
                      width={iconSize}
                      height={iconSize}
                      />
                      <p className='font-bold hidden md:block'>LinkTree</p>
                    </div>
                  </a>
                  <a href="mailto:wic.ucsd@gmail.com" target="_blank" rel="noopener noreferrer">
                    <div className="inline-flex items-center gap-sm transition-transform duration-200 hover:scale-120">
                      <Image
                      src="/images/icons/email-light.png"
                      alt="Email"
                      width={iconSize}
                      height={iconSize}
                      />
                      <p className='font-bold hidden md:block'>Email</p>
                    </div>
                  </a>
              </div>
              <div className='flex flex-col gap-2 items-center md:items-start'>
                <h3 className='text-primary-light'>Mailing List</h3>
                <p>Get weekly updates straight to your mailbox!</p>
                <Button
                  text="Subscribe"
                  href='https://forms.gle/2v1Z5G7x4a3Y6z8s9'
                  color='light'
                />
              </div>
            </div>
            <div className='flex-1'>
              <h3 className='text-primary-light'>Contact Us</h3>
              <div tabIndex={-1} id="typeform-embed-anchor" >
                <iframe
                  src="https://form.typeform.com/to/GKKZfJYR?hide_footer=true?disable-auto-focus=true"
                  width="100%"
                  height="350"
                ></iframe>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-lg items-center'>
            <p className='text-center'>
              In accordance with applicable Federal and State law and University policy, Undergraduate Women in Computing at UC San Diego does not discriminate, or grant preferences, on the basis of race, color, national origin, religion, sex, disability, and/or other protected categories. All enrolled students are encouraged to participate in Undergraduate Women in Computing at UC San Diego events and activities.
            </p>
            <p>&copy; Women in Computing at University of California San Diego, {new Date().getFullYear()}</p>
          </div>
        </div>
       
      </section>
    </footer>
  );
};