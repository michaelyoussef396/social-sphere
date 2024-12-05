"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";

const SignUpForm = () => {
  return (
    <section
      id="signup"
      className="py-16 bg-gray-50 dark:bg-gray-900 flex justify-center items-center"
    >
      <div className="w-full max-w-lg p-8 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Get in Contact with <span className="text-blue-500">Social Sphere</span>
        </h2>
        <form className="space-y-4">
          {/* First Name */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              First Name
            </label>
            <Input
              type="text"
              id="first-name"
              placeholder="Enter your first name"
              className="mt-2"
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Last Name
            </label>
            <Input
              type="text"
              id="last-name"
              placeholder="Enter your last name"
              className="mt-2"
            />
          </div>

          {/* Occasion */}
          <div>
            <label
              htmlFor="occasion"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Occasion
            </label>
            <Input
              type="text"
              id="occasion"
              placeholder="What occasion are you planning?"
              className="mt-2"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Message
            </label>
            <textarea
              id="message"
              placeholder="Tell us about your event or ask any questions"
              className="mt-2 w-full h-32 rounded-md bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input border-none px-3 py-2 text-sm placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-lg transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignUpForm;
