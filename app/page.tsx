"use client";

import Header from "@/components/Header";
import SideBar from "@/components/SideBar";
import IntroduceSection from "@/components/IntroduceSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectSection from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import EducationSection from "@/components/EducationSection";

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <Header />
            <div className="container mx-auto px-6 py-12 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <SideBar />
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-3 space-y-12">
                        <IntroduceSection />
                        <ExperienceSection />
                        <EducationSection />
                        <SkillSection />
                        <ProjectSection />
                    </div>
                </div>
            </div>
        </main>
    );
}
