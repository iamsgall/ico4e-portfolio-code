import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Particles from '../functions/Particles';
import Header from '../components/Header';
import Link from 'next/link';
import styles from '../styles/Portfolio.module.sass';

export default function Portfolio() {
  return (
    <Particles>
      <div
        className='portfolio'
        style={{
          height: '100vh',
        }}
      >
        <Header />
        <div
          className='d-flex justify-content-center align-items-center mt-4 '
          style={{
            height: '75vh',
          }}
        >
          <div className='container'>
            <div className='row'>
              <div
                className='col-12 col-md-4 d-flex justify-content-center my-2'
                style={{padding: 0}}
              >
                <div
                  className='card text-center mx-3 shadow-sm mt-md-3'
                  style={{width: '20rem', opacity: 0.94}}
                >
                  <div className='card-body'>
                    <h5 className={styles.card_title}>Design UX / UI</h5>
                    <p
                      className='card-icon'
                      style={{
                        color: '#9270be',
                        fontSize: '1.625rem',
                        margin: 0,
                      }}
                    >
                      <FontAwesomeIcon icon='palette' />
                    </p>
                    <p
                      className='card-text'
                      style={{
                        color: '#383838',
                        fontSize: '17px',
                        fontFamily: 'Questrial, sans-serif',
                      }}
                    >
                      Ease to create, design, and adapt web user interface with
                      the help of AdobeXD
                    </p>
                    <Link href='/portfolio/designs'>
                      <a className='btn btn-primary shadow-sm rounded py-2 px-3'>
                        See Details
                        <FontAwesomeIcon
                          className='ml-2 primary-arrow-right'
                          icon='chevron-right'
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className='col-12 col-md-4 d-flex justify-content-center my-2'
                style={{padding: 0}}
              >
                <div
                  className='card text-center mx-3 shadow middle-card'
                  style={{}}
                >
                  <div className='card-body'>
                    <h5
                      className={styles.card_title}
                      style={{
                        color: '#fff',
                      }}
                    >
                      Frontend Developer
                    </h5>
                    <p
                      className='my-2 text-white'
                      style={{
                        color: '#9270be',
                        fontSize: '1.625rem',
                        margin: 0,
                      }}
                    >
                      {' '}
                      <FontAwesomeIcon icon='code' />
                    </p>
                    <p
                      className='card-text text-white'
                      style={{
                        fontSize: '17px',
                        fontFamily: 'Questrial, sans-serif',
                      }}
                    >
                      Knowledge to integrate Frontend and Backend. Use of APIs.
                      Responsive design and more.
                    </p>
                    <Link href='/portfolio/developments'>
                      <a
                        className='btn btn-outline-primary shadow-sm rounded py-2 px-3'
                        onClick={() => history.push('/portfolio/development')}
                      >
                        See Details
                        <FontAwesomeIcon
                          className='ml-2 primary-arrow-right'
                          icon='chevron-right'
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className='col-12 col-md-4 d-flex justify-content-center my-2'
                style={{padding: 0}}
              >
                <div
                  className='card text-center mx-3 shadow-sm mt-md-3'
                  style={{width: '20rem', opacity: 0.94}}
                >
                  <div className='card-body'>
                    <h5 className={styles.card_title}>
                      Courses and Certifications
                    </h5>
                    <p
                      className='card-icon my-2'
                      style={{
                        color: '#9270be',
                        fontSize: '1.625rem',
                        margin: 0,
                      }}
                    >
                      {' '}
                      <FontAwesomeIcon icon='graduation-cap' />
                    </p>
                    <p
                      className='card-text'
                      style={{
                        fontSize: '17px',
                        fontFamily: 'Questrial, sans-serif',
                      }}
                    >
                      Self-taught through official documentation, YouTube, and
                      study platforms such as Platzi
                    </p>
                    <Link href='/portfolio/courses'>
                      <a
                        className='btn btn-primary shadow-sm rounded py-2 px-3'
                        onClick={() => history.push('/portfolio/courses')}
                      >
                        See Details
                        <FontAwesomeIcon
                          className='ml-2 primary-arrow-right'
                          icon='chevron-right'
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`

          .middle-card {
            width: 20rem;
            border-top: 4px solid #fff;
            background: rgb(163, 112, 190) !important;
            opacity: 0.9;
            border: none;
            border-bottom: 4px solid white;
            border-right: 4px solid white;
            }

          {
                /* BTN PRIMARY */
            }
          .btn-primary {
                  font-family: 'Questrial', sans-serif;
                  letter-spacing: 0.8px;
                  font-size: 16px;
                  border-radius: 0;
                  margin: 0 8px;
                  background: #9270be;
                  border: 0.4px solid #9270be;
                }

          .btn-primary:hover {
            background: #8465ac;
            border: 0.4px solid #8465ac;
            color: #fff;
          }

          .btn-primary:hover .primary-arrow-right {
            animation: left-right 1s ease infinite;
          }

          {
            /* BTN SECONDARY */
          }
          .btn-outline-primary {
            font-family: 'Questrial', sans-serif;
            letter-spacing: 0.8px;
            font-size: 16px;
            border-radius: 0;
            margin: 0 8px;
            border-color: #fff;
            color: #fff;
          }

          .btn-outline-primary:hover {
              background: #ffffff;
              color: #2f3640;
          }
          
          .btn-secondary:hover .secondary-arrow-right {
            animation: left-right 1s ease infinite;
            font-size: 200px;
            }

          @media screen and ( min-width: 992px ){
            .height-card{
              height: 100vh
            }
          }

        }
          `}</style>
        </div>
      </div>
    </Particles>
  );
}
