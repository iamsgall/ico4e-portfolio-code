import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export default function Header() {
  return (
    <nav
      class='navbar navbar-light '
      style={{
        background: 'rgba(0,0,0,.1)',
      }}
    >
      <div className='container-fluid'>
        <Link href='/' className='navbar-brand mb-0 ml-5'>
          <a
            style={{
              textDecoration: 'none',
            }}
          >
            <FontAwesomeIcon
              icon='arrow-left'
              className='text-white'
              style={{
                fontSize: 20,
              }}
            />{' '}
            <span
              className='text-white'
              style={{
                fontSize: 22,
              }}
            >
              Back
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
}
