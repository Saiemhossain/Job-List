import { Button } from '@/components/ui/button';
import {
  BriefcaseIcon,
  GraduationCapIcon,
  Users2Icon,

} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function About() {
  return (
    <div>
      <section id="about" className="py-16 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            About FreshJobs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <GraduationCapIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                For Fresh Graduates
              </h3>
              <p className="text-muted-foreground">
                We specialize in connecting recent graduates with their first
                career opportunities.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BriefcaseIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Quality Job Listings
              </h3>
              <p className="text-muted-foreground">
                We carefully curate job listings to ensure they're suitable for
                entry-level professionals.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users2Icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Career Support</h3>
              <p className="text-muted-foreground">
                Our team provides guidance and resources to help you succeed in
                your job search.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I create an account?</AccordionTrigger>
              <AccordionContent>
                To create an account, click on the "Sign Up" button in the top
                right corner of the page. Fill out the required information, and
                you'll be ready to start your job search.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Is this service free for job seekers?
              </AccordionTrigger>
              <AccordionContent>
                Yes, our service is completely free for job seekers. We make our
                revenue through partnerships with employers and recruiters.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How can I improve my chances of getting hired?
              </AccordionTrigger>
              <AccordionContent>
                Make sure your profile is complete and up-to-date. Tailor your
                resume for each application, and take advantage of our career
                resources and tips available on the platform.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I apply for jobs if I'm not a recent graduate?
              </AccordionTrigger>
              <AccordionContent>
                While our platform is primarily focused on entry-level positions
                for recent graduates, we do have opportunities for professionals
                with varying levels of experience. You're welcome to browse and
                apply for positions that match your skills and experience level.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
