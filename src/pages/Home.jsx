import { Button } from '@/components/ui/button';
import {
  StarIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  Users2Icon,
  ChevronDownIcon,
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import About from './About';
export default function Home() {
  return (
    <>
     

      <section className="relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 z-0"></div>
        <div className="container relative z-10 mx-auto px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
            Launch Your Career Today
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground sm:text-2xl">
            Find the perfect entry-level job that matches your skills and
            aspirations. Your dream career starts here!
          </p>
          <div className="mb-12 flex justify-center space-x-4">
            <Button size="lg" className="text-lg">
              Find Jobs
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Post Jobs
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-bold text-primary">10k+</span>
              <span className="text-sm text-muted-foreground">
                Active Job Listings
              </span>
            </div>
            <div className="hidden sm:block border-l border-border h-12"></div>
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-bold text-primary">5k+</span>
              <span className="text-sm text-muted-foreground">
                Companies Hiring
              </span>
            </div>
            <div className="hidden sm:block border-l border-border h-12"></div>
            <div className="flex items-center space-x-2">
              <span className="text-4xl font-bold text-primary">98%</span>
              <span className="text-sm text-muted-foreground">
                Success Rate
              </span>
            </div>
          </div>
        </div>
      </section>
      <About/>
    </>
  );
}
