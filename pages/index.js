import Link from 'next/link';
import styles from '../styles/Home.module.sass';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import ReactTooltip from 'react-tooltip';
import {Animated} from 'react-animated-css';
import Image from 'next/image';
import ReactParticles from 'react-particles-js';
import particlesConfig from '../utils/particlesjs-config';

export default function Home() {
  function Particles({children}) {
    return (
      <div style={{position: 'relative'}}>
        <ReactParticles
          params={particlesConfig}
          style={{
            position: 'absolute',
            zIndex: 0,
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
          }}
        />
        {children && <div style={{position: 'relative'}}>{children}</div>}
      </div>
    );
  }

  return (
    <div className='main'>
      <Particles>
        <div className={styles.portfolio}>
          <div>
            <Animated animationIn='bounceInLeft'>
              <h1 className={styles.h1_title}>Web Developer</h1>
            </Animated>
            <Animated animationIn='bounceInDown'>
              <h2 className={styles.h2_subtitle}>React Frontend</h2>
            </Animated>
            <Animated animationIn='bounceInRight'>
              <div className='d-flex justify-content-center'>
                <p className={styles.p_paragraph}>
                  Design / <span className={styles.span}>Code</span>
                </p>
              </div>
            </Animated>
            <Animated animationIn='zoomInDown'>
              <div
                className='d-flex justify-content-center'
                style={{
                  opacity: 0.8,
                }}
              >
                <Image
                  src='/images/ico4e.png'
                  alt='profile image'
                  width='112'
                  height='112'
                  style={{
                    width: '22%',
                    opacity: '.8',
                  }}
                  className='rounded-circle img-fluid d-block shadow-sm '
                />
              </div>
            </Animated>

            <Animated animationIn='bounceInUp'>
              <div className='d-flex justify-content-center mt-4'>
                <Link href='/portfolio'>
                  <a
                    rel='dofollow'
                    className='btn btn-primary btn-lg py-3 shadow-sm rounded'
                  >
                    View Portfolio
                    <FontAwesomeIcon
                      className='ml-2 primary-arrow-right'
                      icon='chevron-right'
                    />
                  </a>
                </Link>
                <Link href='/contact'>
                  <a
                    rel='dofollow'
                    className='btn btn-secondary btn-lg py-3 rounded'
                  >
                    Contact
                    <FontAwesomeIcon
                      className='ml-2 secondary-arrow-right'
                      icon='chevron-right'
                    />
                  </a>
                </Link>
              </div>
              <div className={styles.social_media}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.facebook.com/ico4e'
                  className={styles.box_icon_facebook}
                  data-tip='ico4e Facebook'
                >
                  <FontAwesomeIcon
                    className={styles.icon_facebook}
                    icon={['fab', 'facebook-f']}
                  />
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://linkedin.com/in/ico4e'
                  className={styles.box_icon_linkedin}
                  data-tip='ico4e Linkedin'
                >
                  <FontAwesomeIcon
                    className={styles.icon_linkedin}
                    icon={['fab', 'linkedin-in']}
                  />
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/ico4e'
                  className={styles.box_icon_github}
                  data-tip='ico4e Github'
                >
                  <FontAwesomeIcon
                    className={styles.icon_github}
                    icon={['fab', 'github-alt']}
                  />
                </a>
                <ReactTooltip place='bottom' type='dark' effect='solid' />
              </div>
            </Animated>
          </div>

          <style jsx>{`
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
            .btn-secondary {
              font-family: 'Questrial', sans-serif;
              letter-spacing: 0.8px;
              font-size: 16px;
              border-radius: 0;
              margin: 0 8px;
              background: #9270be;
              border: 0.4px solid #9270be;
              background: transparent;
              border: 0.4px solid #fff;
            }
            .btn-secondary:hover {
              background: #fff;
              border: 0.4px solid #fff;
              color: #2f3640;
            }
            .btn-secondary:hover .secondary-arrow-right {
              animation: left-right 1s ease infinite;
              font-size: 200px;
            }

             {
              /* ANIMATIONS */
            }

            @keyframes left-right {
              0% {
                transform: translateX(6px);
              }
              25% {
                transform: translateX(0px);
              }
              100% {
                transform: translateX(6px);
              }
            }
          `}</style>
        </div>
      </Particles>
    </div>
  );
}
