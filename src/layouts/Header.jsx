/* eslint-disable no-unused-vars */
import ThemeToggle from '@/components/mode-toggle'; 
import { Button } from '@/components/ui/button';
import { SignedOut, SignedIn, SignIn, UserButton } from '@clerk/clerk-react';
import { useState } from 'react';

export default function Header() {
  const [showSignIn, setShowSignIn] = useState(false);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  };

  return (
    <header className="py-10">
      <div className="flex justify-between max-w-4xl mx-auto">
        <div className="logo font-thin text-2xl">JobRex</div>
        <div>
          <ThemeToggle />

          {/* Show SignIn button when user is signed out */}
          <SignedOut>
            <Button onClick={() => setShowSignIn(true)}>LOG IN</Button>
          </SignedOut>

          {/* Show UserButton when user is signed in */}
          <SignedIn>
            <UserButton />
          </SignedIn>

          {/* Display SignIn modal when 'showSignIn' is true */}
          {showSignIn && (
            <div
              className="fixed flex inset-0 items-center justify-center bg-slate-800/70"
              onClick={handleOverlayClick}
            >
              <SignIn />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

