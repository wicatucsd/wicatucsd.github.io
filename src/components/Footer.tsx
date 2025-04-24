import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-purple-medium text-purple-light'>
      <section className='flex flex-col items-center'>
        <h1>Connect with Us</h1>
        <p className='text-center'>
          In accordance with applicable Federal and State law and University policy, Undergraduate Women in Computing at UC San Diego does not discriminate, or grant preferences, on the basis of race, color, national origin, religion, sex, disability, and/or other protected categories. All enrolled students are encouraged to participate in Undergraduate Women in Computing at UC San Diego events and activities.
        </p>
        <p>&copy; Women in Computing at University of California San Diego, {new Date().getFullYear()}</p>
      </section>
    </footer>
  );
};