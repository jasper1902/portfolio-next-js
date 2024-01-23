import {
    Card,
    CardHeader,
    CardBody,
    Image,
    Button,
    Chip,
  } from "@nextui-org/react";
  interface Props {
    image: string;
    stack: string[];
    projectName: string;
    category: string;
    projectUrl: string;
  }
  const Crad = ({ image, stack, projectName, category, projectUrl }: Props) => {
    return (
      <>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
            <Image
              className="object-cover rounded-xl"
              src={`${image}`}
              width={270}
            />
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <div className="p-4 flex flex-wrap gap-2">
              {stack.map((tech: string) => (
                <Chip
                  key={tech}
                  color="success"
                  className="cursor-pointer hover:p-1.5 hover:transition-all duration-500"
                >
                  {tech}
                </Chip>
              ))}
            </div>
  
            <div>
              <h2 className="font-bold text-large">
                {projectName} - {category}
              </h2>
  
              <div className="justify-end">
                <a href={projectUrl}>
                  <Button color="primary">view</Button>
                </a>
              </div>
            </div>
          </CardBody>
        </Card>
      </>
    );
  };
  
  export default Crad;