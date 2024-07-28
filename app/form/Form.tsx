"use client";
import React, { useCallback, useEffect, useState, useMemo } from "react";
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
import {
  AddProject,
  GetProjectById,
  UpdateProjectDetail,
} from "@/actions/project";
import { ProjectSchemaType } from "@/type/project";

type FormProps = {
  currentUser: SafeUser | null;
  projectId?: string;
};

const ProjectForm = ({ currentUser, projectId }: FormProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectData, setProjectData] = useState<ProjectSchemaType | null>(
    null
  );

  const redirectToHomeIfNotAdmin = useCallback(() => {
    if (currentUser?.role !== "ADMIN") {
      router.push("/");
      router.refresh();
    }
  }, [currentUser, router]);

  useEffect(() => {
    redirectToHomeIfNotAdmin();
  }, [redirectToHomeIfNotAdmin]);

  const fetchProjectData = useCallback(async () => {
    if (projectId) {
      const fetchedProject = await GetProjectById(projectId);
      setProjectData(fetchedProject);
    }
  }, [projectId]);

  useEffect(() => {
    fetchProjectData();
  }, [fetchProjectData]);

  const {
    setValue,
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FieldValues>();

  useEffect(() => {
    if (projectData) {
      setValue("projectName", projectData.projectName);
      setValue("category", projectData.category);
      setValue("stack", projectData.stack);
      setValue("image", projectData.image);
      setValue("demo", projectData.demo);
      setValue("repo", projectData.repo);
    }
  }, [projectData, setValue]);

  const {
    fields: stackFields,
    append: addStackField,
    remove: removeStackField,
  } = useFieldArray({
    name: "stack",
    control,
  });

  const handleFormSubmit: SubmitHandler<FieldValues> = useCallback(
    async (formData) => {
      try {
        setIsSubmitting(true);
        const { projectName, category, stack, image, demo, repo } = formData;
        const formattedStack = stack.map(
          (item: { stack: string }) => item.stack
        );

        const projectPayload: ProjectSchemaType = {
          projectName,
          category,
          stack: formattedStack,
          image,
          demo,
          repo,
        };

        const savedProject = projectId
          ? await UpdateProjectDetail(projectId, projectPayload)
          : await AddProject(projectPayload);

        if (savedProject) {
          reset();
          router.push("/");
          router.refresh();
          toast.success("Project saved successfully");
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [projectId, reset, router]
  );

  if (currentUser?.role !== "ADMIN") {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const categoryOptions = useMemo(
    () =>
      ["Full stack", "Frontend", "Backend"].map((option) => (
        <SelectItem key={option} value={option}>
          {option}
        </SelectItem>
      )),
    []
  );

  return (
    <div className="flex flex-col gap-4 w-2/5">
      <h1 className="text-center text-4xl font-bold">Add Project</h1>
      <Input
        id="projectName"
        label="Project Name"
        disabled={isSubmitting}
        register={register}
        errors={errors}
        value={projectData?.projectName}
        onChange={(e) =>
          setProjectData((prev) =>
            prev ? { ...prev, projectName: e.target.value } : null
          )
        }
      />
      {projectData?.category && (
        <Select
          id="category"
          label="Category"
          {...register("category", { required: true })}
          disabled={isSubmitting}
          defaultSelectedKeys={[projectData?.category]}
        >
          {categoryOptions}
        </Select>
      )}
      {!projectData?.category && (
        <Select
          id="category"
          label="Category"
          {...register("category", { required: true })}
          disabled={isSubmitting}
          defaultSelectedKeys={["Full stack"]}
        >
          {categoryOptions}
        </Select>
      )}
      <Input
        id="image"
        label="Image URL"
        disabled={isSubmitting}
        register={register}
        errors={errors}
        value={projectData?.image}
        onChange={(e) =>
          setProjectData((prev) =>
            prev ? { ...prev, image: e.target.value } : null
          )
        }
      />
      <Input
        id="demo"
        label="Demo URL"
        disabled={isSubmitting}
        register={register}
        errors={errors}
        value={projectData?.demo}
        onChange={(e) =>
          setProjectData((prev) =>
            prev ? { ...prev, demo: e.target.value } : null
          )
        }
      />
      <Input
        id="repo"
        label="GitHub Repository URL"
        disabled={isSubmitting}
        register={register}
        errors={errors}
        value={projectData?.repo}
        onChange={(e) =>
          setProjectData((prev) =>
            prev ? { ...prev, repo: e.target.value } : null
          )
        }
      />
      <div>
        <h2>Stack</h2>
        {stackFields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2 my-2">
            <Input
              id={`stack.${index}.stack`}
              label="Stack"
              register={register}
              errors={errors}
              disabled={isSubmitting}
              value={projectData?.stack[index]}
              onChange={(e) =>
                setProjectData((prev) =>
                  prev
                    ? {
                        ...prev,
                        stack: prev.stack.map((s, i) =>
                          i === index ? e.target.value : s
                        ),
                      }
                    : null
                )
              }
            />
            <button onClick={() => removeStackField(index)}>
              <BsTrash3 />
            </button>
          </div>
        ))}
        <Button
          variant="bordered"
          color="secondary"
          onClick={() => addStackField({ stack: "" })}
        >
          Add stack
        </Button>
      </div>
      <Button
        className="font-bold"
        onClick={handleSubmit(handleFormSubmit)}
        isLoading={isSubmitting}
        disabled={isSubmitting}
        color="primary"
      >
        Submit
      </Button>
    </div>
  );
};

export default ProjectForm;
