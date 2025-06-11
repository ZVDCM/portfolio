import ProjectList from '@/components/pages/projects/project-list';
import { TypographyH1 } from '@/components/ui/typography';

export default function Home() {
    return (
        <div className="flex size-full flex-col items-stretch justify-center">
            <TypographyH1 className="my-20 text-center">Projects</TypographyH1>
            <ProjectList />
        </div>
    );
}
