"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const FeedbackSettings = () => {
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
        <div className="bg-white rounded-lg p-16 m-8">
          {/* @ts-expect-error will be fixed by TypeScript team soon */}
          <form action={submitFeedback}>
            <div>
              <h1>Get in touch!</h1>
              <div className="flex flex-col">
                <div className="mb-1 mt-8 text-sm text-slate-500 dark:text-slate-400">
                  First name
                </div>

                <input
                  type="text"
                  required
                  name="firstName"
                  className="input mb-8"
                  placeholder="First Name"
                />

                <div className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                  Last name
                </div>

                <input
                  type="text"
                  required
                  name="lastName"
                  className="input mb-8"
                  placeholder="Last name"
                />

                <div className="mb-1 text-sm text-slate-500 dark:text-slate-400">
                  Describe your feedback:
                </div>
                <textarea
                  required
                  rows={6}
                  name="body"
                  placeholder="What feedback do you have?"
                  className="input mb-8"
                />

                <div className="flex justify-end">
                  <button type="submit">
                    <span>Submit</span>
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

export default FeedbackSettings;
