import Hero from '@/components/pages/about-me/hero';
import Technologies from '@/components/pages/about-me/technologies';

export default function AboutMe() {
    return (
        <div className="flex size-full flex-col gap-10">
            <Hero />
            <Technologies />
        </div>
    );
}
