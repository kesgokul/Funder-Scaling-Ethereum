"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { BsFillCloudArrowUpFill } from "react-icons/bs";

import { Noto_Sans } from "next/font/google";
const noto = Noto_Sans({ subsets: ["latin"], weight: ["300"] });

export default function NewCampaignForm() {
  return (
    <Formik
      initialValues={{
        banner: "",
        title: "",
        target: "",
        name: "",
        email: "",
        desc: "",
        deadline: null,
        minContribution: 0,
      }}
      validationSchema={Yup.object({
        banner: Yup.object().shape({
          file: Yup.mixed().required("A file is required"),
        }),
        title: Yup.string().required("Please add a Title"),
        target: Yup.number().required("How much money do you want to raise?"),
        name: Yup.string().required("Please enter you name"),
        email: Yup.string()
          .email("Invalid email")
          .required("Please enter your email"),
        desc: Yup.string().required("Tell what are you raising the funds for"),
        deadline: Yup.date().required(
          "By when do you want this campaign to end?"
        ),
        minContribution: Yup.number().required(
          "Add a minimum contribution Amount in Dollars"
        ),
      })}
      onSubmit={(values, { setSubmiting }) => {
        console.log(values);
        setSubmiting(false);
      }}
    >
      <Form
        className={`${noto.className} w-4/5 mx-auto bg-gray-300 flex flex-col gap-4 rounded-md border-2 border-white`}
      >
        <div className="py-10 px-32 bg-violet-800 rounded-t-md">
          <div className="py-10 w-1/2 mx-auto flex flex-col items-center bg-indigo-700 rounded-md border-2 border-gray-300">
            <BsFillCloudArrowUpFill size={"50"} />
            <Field name="banner">
              {({ field, form }) => (
                <div>
                  <input
                    value=""
                    type="file"
                    onChange={(event) => {
                      form.setFieldValue(
                        field.name,
                        event.currentTarget.files[0]
                      );
                    }}
                    className="hidden"
                    id="file"
                  />
                  <label htmlFor="file" className="flex flex-col gap-2">
                    <span className=" bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-lg px-3 py-2 font-semibold cursor-pointer flex justify-center align-center">
                      Choose a file
                    </span>
                    <span className="mx-auto text-xs">
                      {field.value ? field.value.name : "No file chosen"}
                    </span>
                  </label>

                  <ErrorMessage name={field.name} />
                </div>
              )}
            </Field>
          </div>
        </div>
        <section className="py-4 px-32 flex flex-col gap-4">
          <div className="flex flex-col ">
            <label className="text-gray-500" htmlFor="title">
              Title
            </label>
            <Field
              className="py-4 px-2 text-gray-700 bg-white border border-gray-400 rounded-md"
              name="title"
              type="text"
              placeholder="Title of the Campaign"
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-gray-500" htmlFor="desc">
              Description
            </label>
            <Field
              className="py-4 px-2 text-gray-700 bg-white border border-gray-400 rounded-md"
              name="desc"
              type="text"
              placeholder="What are you raising funds"
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-gray-500" htmlFor="target">
              Target
            </label>
            <Field
              className="py-4 px-2 text-gray-700 bg-white border border-gray-400 rounded-md"
              name="target"
              type="number"
              placeholder="How much do you want raise?"
            />
          </div>
          <div className="w-full flex items-center gap-4">
            <Field name="deadline">
              {({ field, form }) => (
                <div className="flex flex-col">
                  <label className="text-gray-500" htmlFor="deadline">
                    Choose when deadline for the campaign
                  </label>
                  <input
                    value={""}
                    className="p-2 rounded-md"
                    type="date"
                    {...field}
                    onChange={(event) => {
                      form.setFieldValue(field.name, event.currentTarget.value);
                    }}
                  />
                  <ErrorMessage name={"deadline"} component="div" />
                </div>
              )}
            </Field>
          </div>
          <div className="flex flex-col ">
            <label className="text-gray-500" htmlFor="minContribution">
              Minimum Contribution
            </label>
            <Field
              className="py-4 px-2 text-gray-700 bg-white border border-gray-400 rounded-md"
              name="minContribution"
              type="number"
              placeholder="Set the minium contrbution amount in dollars"
            />
          </div>
          <div className="w-full flex justify-between">
            <button
              type="button"
              className=" py-2 w-32 bg-transparent border-2 border-indigo-700 text-indigo-700 rounded-md hover:bg-gray-200 active:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" py-2 w-32 border-2 border-indigo-700 bg-indigo-800 text-gray-100 rounded-md hover:bg-indigo-700 active:bg-indigo-700"
            >
              Next
            </button>
          </div>
        </section>
      </Form>
    </Formik>
  );
}
