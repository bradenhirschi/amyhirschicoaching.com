"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const Contact = () => {
  {
    /*
    # TODO 
    Figure out what all of this does
  */
  }

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [success, setSuccess] = useState(false);

  const submitFeedback = () => {
    setSuccess(true);
  };

  useEffect(() => {
    const isSuccess = searchParams.get("success") === "true";
    setSuccess(isSuccess);
    router.push(pathname);
  }, []);

  if (!success) {
    return (
      <div className="flex justify-center bg-gray-100">
        <div className="bg-white rounded-lg p-16 my-4">
          {/* @ts-expect-error will be fixed by TypeScript team soon */}
          <form action={submitFeedback}>
            <div>
              <h1>Get in touch!</h1>
              <div className="grid grid-cols-2 mt-8 gap-x-8">
                <div className="col-span-2 md:col-span-1">
                  <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    First name:
                  </div>
                  <input
                    type="text"
                    required
                    name="firstName"
                    className="input mb-8"
                    placeholder="First Name"
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    Last name:
                  </div>
                  <input
                    type="text"
                    required
                    name="lastName"
                    className="input mb-8"
                    placeholder="Last name"
                  />
                </div>

                <div className="col-span-2 ">
                  <div className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                    Email:
                  </div>
                  <input
                    type="text"
                    required
                    name="email"
                    className="input mb-8 w-full"
                    placeholder="Email"
                  />
                </div>

                <div className="col-span-2">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Message:
                  </div>
                  <textarea
                    required
                    rows={6}
                    name="body"
                    placeholder="What can I help you with?"
                    className="input mb-8 w-full"
                  />
                </div>
                <div className="w-full flex justify-center col-span-2">
                  <button type="submit" className="button">
                    <span>Send message</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mx-auto flex h-96 max-w-lg flex-col items-center justify-center">
        Checkmark
        <div className="label mb-1 text-xl font-medium">
          Feedback submitted!
        </div>
        <div className="label mb-6">
          One of our team members will be reviewing this shortly.
        </div>
        <button className="btn btn-outlined" onClick={() => setSuccess(false)}>
          <span>Submit more feedback</span>
        </button>
      </div>
    );
  }
};

export default Contact;
