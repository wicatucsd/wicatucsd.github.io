import React from 'react';

export default function Footer() {
  const iconSize = 30; // Size of the icon in pixels
  return (
    <footer className='bg-primary-medium text-primary-light'>
      <section className='flex flex-col items-center'>
        <h1 className='text-primary-light'>Connect with Us</h1>
        <div className='flex gap-md w-full'>
          <div className='flex-1'>
            <p>socials</p>
            <p>Instagram</p>

          </div>
          <div className='flex-1'>
            <h2 className='text-primary-light'>Send us a question!</h2>
            <iframe
              src="https://form.typeform.com/to/GKKZfJYR?hide_footer=true"
              width="100%"
              height="400"
            ></iframe>
          </div>
        </div>
        <p className='text-center'>
          In accordance with applicable Federal and State law and University policy, Undergraduate Women in Computing at UC San Diego does not discriminate, or grant preferences, on the basis of race, color, national origin, religion, sex, disability, and/or other protected categories. All enrolled students are encouraged to participate in Undergraduate Women in Computing at UC San Diego events and activities.
        </p>
        <p>&copy; Women in Computing at University of California San Diego, {new Date().getFullYear()}</p>
      </section>
    </footer>
  );
};