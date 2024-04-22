import React from "react";
import Hero from '@/components/Blocks/Hero/Hero';
import SelectedWorks from "@/components/Blocks/SelectedWorks/SelectedWorks";
import ExperienceBlock from "@/components/Blocks/Experience/Experience";
import Resume from "@/components/Blocks/Resume/Resume";
import SkillSet from "@/components/Blocks/SkillSet/SkillSet";
import BoldTitle from "@/components/UI/Cards/BoldTitle/BoldTitle";
import Gallery from "@/components/Blocks/Gallery/Gallery";
import Arts from "@/components/Blocks/Arts/Arts";
import Achivement from "@/components/Blocks/Achivement/Achivement"
import Films from "@/components/Blocks/Films/Films";

export default function Home() {
    return (
        <>
            <Hero/>
            <SelectedWorks/>
            <SkillSet/>
            <ExperienceBlock/>
            <Achivement />
            <BoldTitle/>
            <Resume/>
            <Films/>
            <Gallery/>
            <Arts/>
        </>
    )
}
