"use client";
import InputFile from "@/components/ui/InputFile";
import InputSelect from "@/components/ui/InputSelect";
import InputText from "@/components/ui/InputText";
import React from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

const Page = () => {
  const formMethods = useForm();
  const { handleSubmit } = formMethods;

  const onSubmit = (data: any) => {};

  return (
    <>
      <h1 className="text-xl lg:text-2xl lg:font-semibold">
        Become a Freelancer
      </h1>
      <h2 className="text-md mb-4">
        Fill out the request form and upload your CV
      </h2>

      <div className="space-y-4">
        <FormProvider {...formMethods}>
          <InputText
            name="fullname"
            label="Full Name"
            placeholder="Mohamed Ahmed"
            rules={{ required: "Email is required" }}
          />

          <InputText
            name="fullname"
            label="Email"
            placeholder="Mohamed Ahmed"
            rules={{ required: "Email is required" }}
          />

          <div className="flex gap-4">
            <div className="w-full">
              <InputSelect name="country" label="Country" options={[]} />
            </div>
            <div className="w-full">
              <InputSelect
                name="nationality"
                label="Nationality"
                options={[]}
              />
            </div>
          </div>

          <InputText
            name="companyName"
            label="Company Name"
            placeholder="Enter your company name"
            rules={{ required: "Email is required" }}
          />

          <InputSelect name="industry" label="Industry" options={[]} />

          <InputSelect name="discipline" label="Discipline" options={[]} />

          <InputSelect
            name="hear"
            label="How did you hear about Ilearna?"
            options={[]}
          />

          <InputText
            name="experience"
            label="Your experience in online teaching"
            placeholder="Tell about your experience"
            rules={{ required: "Email is required" }}
          />

          <InputSelect
            name="field2"
            label="Which level you can teach ?"
            options={[]}
          />

          <InputSelect
            name="field3"
            label="What languages can you teach ?"
            options={[]}
          />

          <InputSelect name="field4" label="Skills & Expertise" options={[]} />

          <InputText
            name="portfolio"
            label="Portfolio / work samples"
            placeholder="Paste a link to your portfolio or work samples"
          />

          <InputSelect
            name="field4"
            label="Teaching preferences"
            options={[]}
          />

          <InputText
            name="message"
            label="Message to admin"
            placeholder="Type a message to the admin"
          />

          <InputFile name="cv" label="Upload your CV" />

          <InputFile
            name="video"
            label="Introduce yourself to the I.learna community"
          />

          <button className="btn btn-accent block ml-auto">Save Changes</button>
        </FormProvider>
      </div>
    </>
  );
};

export default Page;
