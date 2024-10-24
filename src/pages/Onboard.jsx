/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { Comment } from 'react-loader-spinner';
import { useNavigate } from "react-router";


export default function Onboard() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  console.log(user);

  const navigateUser = (currentRole) => {
    navigate(currentRole === "applicant" ?  "/jobs" : "/post-job")
  }
  const handleUserRole = async(role) => {
    await user.update({ unsafeMetadata: { role } }).then(() => {
      console.log(`role change to : ${ role }`);
      navigateUser(role)
   })
  }

  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigateUser(user.unsafeMetadata.role);
    }
  }, [user]);
  

  if (!isLoaded) {
    return (
      <div className="absolute inset-0 top-0 left-0 flex items-center justify-center">
        <Comment
          visible={true}
          height="80"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#612895"
        />
        
      </div>
    );
  }
  return (
    <section className="flex flex-col items-center justify-center gap-2 h-[500px]">
      <h2 className="text-2xl ">choose your role 🖍</h2>
      <div className="flex gap-6">
        <Button
          className="px-8 py-6 text-xl"
          onClick={() => handleUserRole('applicant')}
        >
          Applicant - I am looking for jobs
        </Button>
        <Button
          className="px-8 py-6 text-xl"
          onClick={() => handleUserRole('recruiter')}
        >
          Recruiter - I want post a jobs
        </Button>
      </div>
    </section>
  );
}
