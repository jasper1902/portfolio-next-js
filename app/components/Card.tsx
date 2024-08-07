/* eslint-disable jsx-a11y/alt-text */
import { SafeUser } from "@/type/user";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button,
  Chip,
  CardFooter,
} from "@nextui-org/react";
import { projects } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { DeleteProject } from "@/actions/project";
import Link from "next/link";

interface Props {
  project: projects;
  currentUser?: SafeUser | null;
}

const Crad = ({ project, currentUser }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const onClickDelete = async () => {
    try {
      setIsLoading(true);

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton:
            "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-success text-danger-foreground data-[hover=true]:opacity-hover mx-1",
          cancelButton:
            "z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none bg-danger text-danger-foreground data-[hover=true]:opacity-hover mx-1",
        },
        buttonsStyling: false,
      });

      const result = await swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      });

      if (result.isConfirmed) {
        await swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        const deleted = await DeleteProject(project.id);
        if (deleted) {
          router.push("/");
          router.refresh();
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        await swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error",
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Card className="py-4">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <Image
            className="object-cover rounded-xl cursor-pointer"
            src={project.image}
            width={270}
            onClick={() => setIsModalOpen(true)}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div>
            <h2 className="font-bold text-large">
              {project.projectName} - {project.category}
            </h2>

            <div className="p-4 flex flex-wrap gap-2">
              {project.stack.map((tech: string) => (
                <Chip key={tech} color="success">
                  {tech}
                </Chip>
              ))}
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex flex-wrap items-center gap-4">
            {project.demo && (
              <a href={project.demo}>
                <Button color="primary">Live demo</Button>
              </a>
            )}

            {project.repo && (
              <a href={project.repo}>
                <Button color="primary">Repository </Button>
              </a>
            )}
            {currentUser?.role === "ADMIN" && (
              <Button
                color="danger"
                onClick={onClickDelete}
                disabled={isLoading}
              >
                Delete
              </Button>
            )}
            {currentUser?.role === "ADMIN" && (
              <Link href={`/form/${project.id}`}>
                <Button color="warning">Edit</Button>
              </Link>
            )}
          </div>
        </CardFooter>
      </Card>

      <Transition appear show={isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsModalOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl align-middle shadow-xl transition-all">
                  <Image
                    className="object-cover rounded-xl"
                    src={project.image}
                    width={1920}
                  />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Crad;
