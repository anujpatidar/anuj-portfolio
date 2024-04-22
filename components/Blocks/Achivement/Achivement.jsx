"use client";

import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Image from "next/image";
import styles from './Achivement.module.scss';
import Title from "@/components/UI/Elements/Title/Title";
import TextReveal from "@/components/UI/Elements/TextReveal/TextReveal";
import Container from "@/components/UI/Layout/Layout";
import Blobs from "@/components/UI/Elements/Blobs/Blobs";
export default function Achivement() {
    const container = useRef();
    const { contextSafe } = useGSAP({scope: container});


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        /*gsap.from(`.${styles.sliderItem}`, {
            x: '-50%',
            stagger: 0.1,
            duration: 1,
            scrollTrigger: {
                trigger: `.${styles.sliderItem}`,
                start: 'top 80%',
            }
        });*/
    }, {scope: container});

    return (
        <section className={styles.section} ref={container} id="films">
            <Blobs type={'v2'} classVariable={`${styles.blob}`}/>
            <Container>
                <header className={styles.header}>
                    <Title color={'white'}><span>CodeBite</span> <br />2K23</Title>
                </header>
                <div className={styles.films}>
                    <div className={styles.film}>
                        <div className={styles.video}>
                            <Image
                                src="/winner.jpg"
                                alt="win"
                                sizes="150vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }}
                                width={1920}
                                height={1080}
                                className={styles.image}
                                loading={'lazy'}
                            />
                        </div>
                        <div className={styles.name}>
                        <TextReveal className={styles.description}>
                                Developed a website facilitating small Handycrafters to showcase and sell their creative products, showcasing proficiency in both technical and presentation aspects. Achieved success at CODEBITE HACKATHON 2K23, a State Level Web Development Hackathon organised by Sheryians Coding School, by winning two awards – ALL ROUNDERS and BEST REEL.
                        </TextReveal>
                            
                        </div>
                        
                    </div>
                    
                </div>
            </Container>


            <Container>

            </Container>

        </section>
    );
}