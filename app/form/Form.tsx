"use client";
import React, { useEffect, useState } from "react";
import { SafeUser } from "@/type/user";
import { useRouter } from "next/navigation";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  useFieldArray,
} from "react-hook-form";
import Input from "../components/input/Input";
import { BsTrash3 } from "react-icons/bs";
import { Button, Select, SelectItem } from "@nextui-org/react";
import toast from "react-hot-toast";
import { AddProject } from "@/actions/project";
import { ProjectSchemaType } from "@/type/project";

type Props = {
  currentUser: SafeUser | null;
};

const Form = ({ currentUser }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (currentUser?.role !== "ADMIN") {
      router.push("/");
      router.refresh();
    }
  }, [currentUser, router]);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      projectName: "",
      category: "Frontend",
      stack: [],
      image: "",
      demo: "",
      repo: "",
    },
  });

  const {
    fields: stackFields,
    append: stackAppend,
    remove: stackRemove,
  } = useFieldArray({
    name: "stack",
    control,
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);
      const { projectName, category, stack, image, demo, repo } = data;
      const extractedStack = stack.map((item: { stack: string }) => item.stack);

      const newData: ProjectSchemaType = {
        projectName,
        category,
        stack: extractedStack,
        image,
        demo,
        repo,
      };

      const newProject = await AddProject(newData);

      if (newProject) {
        reset();
        router.push("/");
        router.refresh();
        toast.success("Add project successfully");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (currentUser?.role !== "ADMIN") {
    return <></>;
  }

  return (
    <>
      <div className="flex flex-col gap-4 w-2/5">
        <h1 className="text-center text-4xl font-bold">Add Project</h1>
        <Input
          id="projectName"
          label="Project Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />


        <Select
          id="category"
          label="Category"
          {...register("category", { required: true })}
          disabled={isLoading}
        >
          {["Full stack", "Frontend", "Backend"].map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </Select>
        {errors.category && <span>This field is required</span>}

        <Input
          id="image"
          label="Image URL"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Input
          id="demo"
          label="demo URL"
          disabled={isLoading}
          register={register}
          errors={errors}
        />

        <Input
          id="repo"
          label="Github Repository URL"
          disabled={isLoading}
          register={register}
          errors={errors}
        />

        <div>
          <h2>Stack</h2>
          {stackFields.map((field, index) => {
            return (
              <div key={field.id}>
                <div className="flex items-center gap-2 my-2">
                  <Input
                    id={`stack.${index}.stack`}
                    label="Stack"
                    register={register}
                    errors={errors}
                    disabled={isLoading}
                  />
                  <button onClick={() => stackRemove(index)}>
                    <BsTrash3 />
                  </button>
                </div>
              </div>
            );
          })}

          <Button
            variant="bordered"
            color="secondary"
            onClick={() => {
              stackAppend("");
            }}
          >
            Add stack
          </Button>
        </div>

        <Button
          className="font-bold"
          onClick={handleSubmit(onSubmit)}
          isLoading={isLoading}
          disabled={isLoading}
          color="primary"
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default Form;
