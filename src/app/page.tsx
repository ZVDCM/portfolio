import ProjectGrid from '@/components/pages/projects/project-grid';
import { TypographyH1 } from '@/components/ui/typography';

export default function Home() {
    return (
        <div className="size-full">
            <TypographyH1 className="mt-20 mb-40 text-center">Projects</TypographyH1>
            <ProjectGrid />
        </div>
    );
}
