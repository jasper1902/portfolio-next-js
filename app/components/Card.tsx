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
interface Props {
  project: projects;
  currentUser?: SafeUser | null;
}
const Crad = ({ project, currentUser }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
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

      (async () => {
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

          const response = await axios.delete(`/api/project/${project.id}`);
          if (response.status === 200) {
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
      })();
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
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            className="object-cover rounded-xl"
            src={`${project.image}`}
            width={270}
          />
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <div>
            <h2 className="font-bold text-large">
              {project.projectName} - {project.category}
            </h2>

            <div className="p-4 flex flex-wrap gap-2">
              {project.stack.map((tech: string) => (
                <Chip
                  key={tech}
                  color="success"
                  className="cursor-pointer hover:p-1.5 hover:transition-all duration-500"
                >
                  {tech}
                </Chip>
              ))}
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex items-center gap-4">
            {project.demo && (
              <>
                <a href={project.demo}>
                  <Button color="primary">Live demo</Button>
                </a>
              </>
            )}

            {!project.demo && project.repo && (
              <>
                <a href={project.repo}>
                  <Button color="primary">Repository </Button>
                </a>
              </>
            )}
            {currentUser && (
              <Button
                color="danger"
                onClick={onClickDelete}
                disabled={isLoading}
              >
                Delete
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default Crad;
