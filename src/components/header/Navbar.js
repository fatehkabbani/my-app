import React from 'react';
import Link from '../Link';

function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center m-10">
        <h1 className='text-3xl font-bold tracking-wider'><span className='text-orange-500'>Fat</span>eh</h1>
        <ul className='flex gap-5 w-1/2 justify-end'>
          <Link href='#Home' text="Home"/>
          <Link href='#projects' text="projects" />
          <Link href='#contact' text="contact" />
        </ul>
      </nav>
    </>
  );
}
export default Navbar;