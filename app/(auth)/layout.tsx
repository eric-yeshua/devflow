import SocialAuthForm from "@/components/forms/social-auth-form";
import Image from "next/image";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen background-auth">
      <section className="shadow-light100_dark100 shadow-md px-4 sm:px-8 py-10 border light-border rounded-[10px] min-w-full sm:min-w-[520px] background-light800_dark200">
        <div className="flex justify-between items-center gap-2">
          <div className="space-y-2.5">
            <h1 className="text-dark100_light900 h2-bold">Join DevFlow</h1>
            <p className="text-dark500_light400 paragraph-regular">
              To get your questions answered
            </p>
          </div>
          <Image
            src="/images/site-logo.svg"
            alt="dev flow logo"
            width={50}
            height={50}
          />
        </div>
        <div className="my-10">{children}</div>
        <SocialAuthForm />
      </section>
    </main>
  );
};

export default Layout;
