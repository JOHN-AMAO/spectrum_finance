import Image from "next/image";
import Link from "next/link";

export function Landingpage() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link
          className='flex flex-col items-center justify-center'
          href='/'
        >
          <h1 className='text-2xl'>Spectrum</h1>
          <p>Finance</p>
          <span className='sr-only'>Fintech Platform</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Features
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Pricing
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Security
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='#'
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none'>
                    Secure Payments, Seamless Finance Management
                  </h1>
                  <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                    Our platform offers a comprehensive solution for all your
                    financial needs, from secure payments to advanced finance
                    management tools.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Link
                    className='inline-flex h-10 items-center justify-center rounded-md bg-[#0070f3] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#0070f3]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0070f3] disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-[#0070f3] dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                    href='#'
                  >
                    Get Started
                  </Link>
                  <Link
                    className='inline-flex h-10 items-center justify-center rounded-md border border-[#0070f3 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-[#0070f3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0070f3] disabled:pointer-events-none disabled:opacity-50  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                    href='#'
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <Image
                alt='Hero'
                className='mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last'
                height='550'
                src='/placeholder.svg'
                width='550'
              />
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                  Key Features
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Streamline Your Finances
                </h2>
                <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Our platform offers a comprehensive suite of tools to help you
                  manage your finances with ease, from secure payments to
                  advanced budgeting and reporting.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12'>
              <Image
                alt='Image'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last'
                height='310'
                src='/placeholder.svg'
                width='550'
              />
              <div className='flex flex-col justify-center space-y-4'>
                <ul className='grid gap-6'>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Secure Payments</h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        Accept payments securely with our advanced payment
                        processing technology.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Finance Management</h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        Track your income, expenses, and budgets with our
                        easy-to-use finance management tools.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className='grid gap-1'>
                      <h3 className='text-xl font-bold'>Seamless UX</h3>
                      <p className='text-gray-500 dark:text-gray-400'>
                        Enjoy a smooth and intuitive user experience across all
                        your devices.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 border-t'>
          <div className='container grid items-center justify-center gap-4 px-4 text-center md:px-6'>
            <div className='space-y-3'>
              <div className='inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800'>
                Security
              </div>
              <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                Secure Your Finances
              </h2>
              <p className='mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                Our platform is built with security in mind, ensuring your
                financial data is protected at all times.
              </p>
            </div>
            <div className='mx-auto w-full max-w-sm space-y-2'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex flex-col items-center justify-center space-y-2 rounded-md border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50'>
                  <LockIcon className='h-8 w-8' />
                  <h4 className='text-lg font-semibold'>Encryption</h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    All your data is encrypted using the latest security
                    standards.
                  </p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-2 rounded-md border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50'>
                  <ShieldCheckIcon className='h-8 w-8' />
                  <h4 className='text-lg font-semibold'>Compliance</h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Our platform is compliant with all relevant financial
                    regulations.
                  </p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-2 rounded-md border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50'>
                  <KeyIcon className='h-8 w-8' />
                  <h4 className='text-lg font-semibold'>Authentication</h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Secure your account with multi-factor authentication.
                  </p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-2 rounded-md border border-gray-200 bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50'>
                  <ShieldIcon className='h-8 w-8' />
                  <h4 className='text-lg font-semibold'>Fraud Protection</h4>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Our advanced fraud detection system keeps your transactions
                    safe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800'>
          <div className='container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10'>
            <div className='space-y-2'>
              <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                Trusted by Businesses Worldwide
              </h2>
              <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                Our platform is used by businesses of all sizes, from startups
                to enterprise-level organizations.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row lg:justify-end'>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md bg-[#0070f3] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#0070f3]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0070f3] disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-[#0070f3] dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                href='#'
              >
                Contact Sales
              </Link>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md border border-[#0070f3] bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-[#0070f3] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#0070f3] disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                href='#'
              >
                Learn more
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-gray-500 dark:text-gray-400'>
          © 2024 Fintech Platform. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-xs hover:underline underline-offset-4'
            href='#'
          >
            Terms of Service
          </Link>
          <Link
            className='text-xs hover:underline underline-offset-4'
            href='#'
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line
        x1='12'
        x2='12'
        y1='2'
        y2='22'
      />
      <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
    </svg>
  );
}

function KeyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle
        cx='7.5'
        cy='15.5'
        r='5.5'
      />
      <path d='m21 2-9.6 9.6' />
      <path d='m15.5 7.5 3 3L22 7l-3-3' />
    </svg>
  );
}

function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect
        width='18'
        height='11'
        x='3'
        y='11'
        rx='2'
        ry='2'
      />
      <path d='M7 11V7a5 5 0 0 1 10 0v4' />
    </svg>
  );
}

function ShieldCheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' />
      <path d='m9 12 2 2 4-4' />
    </svg>
  );
}

function ShieldIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z' />
    </svg>
  );
}
