import path from 'path';
import { promises as fs } from 'fs';

import type { NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import { remark } from 'remark';
import html from 'remark-html';

import profilePicture from '../public/images/profile-picture.jpg';

const Home: NextPage<{cv: string}> = ({ cv }) => {
    const { t } = useTranslation('common');

    return (<>
        <Head>
            <title>otten.dev</title>
        </Head>

        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
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
                        <Image className={styles.profilepicture} src={profilePicture} alt='picture of Yoeri' width={300} height={300} quality={100} placeholder='blur' />
                    </div>
                </div>
            </div>
        </header>
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.grid} dangerouslySetInnerHTML={{ __html: cv }}/>
            </div>
        </main>
    </>)
}

async function getCV(locale: string) {
    const fullPath = path.join(process.cwd(), 'public', 'locales', locale, 'cv.md');
    let content;

    try {
        content = await fs.readFile(fullPath);
    } catch (e) {
        content = await fs.readFile(path.join(process.cwd(), 'public', 'locales', 'en', 'cv.md'));
    }

    const processedContent = await remark()
        .use(html, {sanitize: false})
        .process(content);

    return processedContent.toString();
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
    props: {
        ...await serverSideTranslations(locale, ['common']),
        cv: await getCV(locale)
    },
})

export default Home
