import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Home: NextPage = () => {
    const { t } = useTranslation('common');

    return (<>
        <Head>
            <title>otten.dev</title>
        </Head>

        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}> {/*How to: solve better?*/}
                        <div>
                            <h1 style={{marginBlockEnd: -10}}><mark>Yoeri Otten</mark></h1>
                            <p><mark>{t('location')}</mark></p>
                            <p style={{color: 'white'}}>
                                <a target='blank' href="https://github.com/yoeori"><FontAwesomeIcon size='xl' icon={faGithub} /></a>&nbsp;&bull;&nbsp;
                                <a target='blank' href="https://www.linkedin.com/in/yoeriotten/"><FontAwesomeIcon size='xl' icon={faLinkedin} /></a>
                            </p>
                        </div>
                    </div>
                    <div>
                        <Image className={styles.profilepicture} src={'/images/profile-picture.jpg'} alt='picture of Yoeri' width={300} height={300} quality={100} />
                    </div>
                </div>
            </div>
        </header>
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div style={{marginRight: '30px', flex: '1 1 0'}}>
                        <h1>Erfaring</h1>
                        <h2>Undervisningsassistent</h2>
                        <p>Etter det første året av studien begynte jeg med å hjelpe som undervisningsassistent. Jeg hjalp med et stort spektrum av emner: objekt-orientert og funksjonell programmering, algoritmer, nettverksystemer, programomsetjing, databaser, multiprogrammering osv.</p>
                        <p><i>September 2017 til juli 2021</i></p>
                        <h2>Linjeforeningen for informatikk</h2>
                        <p>I min 3. studieår, sluttet jeg med studien i ett år for å bli styremedlem av linjeforeningen sammen med fem andre. Jeg var hovedsakelig økonomiansvarlig og ved siden av det hjalp jeg flere undergrupper med å organisere aktiviteter og daglige ting. Mer informasjon finner du på <a href="https://inter-actief.net/">https://inter-actief.net/</a></p>
                        <p><i>Hovedsakelig september 2018 til september 2019</i></p>
                        <h2>Campus Kabelforening</h2>
                        <p>University of Twente har sin egen campus hvor mer enn 2000 studenter får tv-signal av oss. Vi får signal fra flere kilder f.eks. satellitt og koaksialkabel og sender det ut gjennom vår IPTV og analog nettverk. Her har jeg lært mye om systemutvikling, prosjektledelse og server vedlikehold men også om kontraktsforhandlinger og opphavsrett.</p>
                        <p><i>Oktober 2016 til juli 2021</i></p>
                    </div>
                    <div style={{flex: '1 1 0'}}>
                        <h1>Undervisning</h1>
                        <h2>MSc. Informatikk</h2>
                        <p>Universitetet i Bergen, retning algoritmer<br /><i>August 2021, pågående</i></p>
                        <h2>BSc. Computer Science &amp; Engineering</h2>
                        <p>University of Twente<br /><i>September 2016 til februari 2021 (pause i 3. år)</i></p>
                        <h2>Forberedend vitenskapsutdanning</h2>
                        <p>Videregående skole i Nederland<br />Corderius College<br />August 2010 til juli 2016</p>
                    </div>
                </div>
            </div>
        </main>
    </>)
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
    },
})

export default Home
