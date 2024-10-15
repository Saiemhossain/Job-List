
import { Facebook, Twitter, Instagram,Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <div>
      <footer className=" text-black dark:bg-neutral-950 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h2 className="text-black text-lg font-semibold mb-4 dark:text-white">
                JobrexJob
              </h2>
              <p className="mb-4">Connecting talent with opportunity.</p>
              <div className="flex space-x-4">
                <a href="#" className=" dark:bg-neutral-950">
                  <span className="sr-only dark:bg-neutral-950">Facebook</span>
                  <Facebook
                    className="h-6 w-6"
                    text-black
                    dark:bg-neutral-950
                    text-white
                  />
                </a>
                <a href="#" className=" dark:bg-neutral-950">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-black text-lg font-semibold mb-4 dark:text-white">
                For Job Seekers
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Career Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Resume Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Job Alerts
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className=" text-lg font-semibold mb-4 text-black dark:text-white ">
                For Employers
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Browse Resumes
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Recruiting Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Pricing Plans
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-black font-semibold mb-4 dark:text-white text-lg">
                Company
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>
              &copy; {new Date().getFullYear()} JobrexJob. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
