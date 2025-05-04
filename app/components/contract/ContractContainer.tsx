"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Textarea,
} from "@nextui-org/react";
import Input from "../input/Input";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { CreateContract } from "@/actions/contract";
import Swal from "sweetalert2";

const ContractContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      name: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      const response = await CreateContract({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      });
      console.log(response);
      if (response.success) {
        Swal.fire({
          title: "Message sent successfully",
          icon: "success",
        });
        reset();
      }
    } catch (error) {
      Swal.fire({
        title: "Something went wrong",
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 hover:cursor-pointer Z-10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card>
            <CardHeader>
              <h2>Contact Information</h2>
            </CardHeader>
            <CardBody className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">thanabodee.kumsub@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+66 479 5844</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Chachoengsao</p>
                </div>
              </div>

              <div className="pt-4">
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me
                </p>
                <div className="flex space-x-4">
                  {/* Social media icons would go here */}
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h2>Send Me a Message</h2>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: "className is required" }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          id="subject"
                          label="Subject"
                          disabled={isLoading}
                          register={register}
                          errors={errors}
                          required
                        />
                      )}
                    />
                  </div>
                  <div className="space-y-2">
                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: "Email is required" }}
                      render={({ field }) => (
                        <Input
                          {...field}
                          id="subject"
                          label="Subject"
                          disabled={isLoading}
                          register={register}
                          errors={errors}
                          required
                        />
                      )}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Controller
                    name="subject"
                    control={control}
                    rules={{ required: "Subject is required" }}
                    render={({ field }) => (
                      <Input
                        {...field}
                        id="subject"
                        label="Subject"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                      />
                    )}
                  />
                </div>
                <div className="space-y-2">
                  <Controller
                    name="message"
                    control={control}
                    rules={{ required: "Message is required" }}
                    render={({ field }) => (
                      <Textarea
                        {...field}
                        label="Your message"
                        id="message"
                        required
                        color={errors.message ? "danger" : undefined}
                        errorMessage={
                          errors["message"] && `${errors["message"]?.message}`
                        }
                        variant="bordered"
                        rows={5}
                      />
                    )}
                  />
                </div>
                <Button onClick={handleSubmit(onSubmit)} className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContractContainer;
