"use client";

import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { AiOutlineGoogle } from "react-icons/ai";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Input from "../components/input/Input";
import { Button, Link } from "@nextui-org/react";
import { SafeUser } from "@/type/user";
import Swal from "sweetalert2";

type Props = {
  currentUser: SafeUser | null;
};

const RegisterForm = ({ currentUser }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (currentUser) {
      router.push("/");
      router.refresh();
    }
  }, [currentUser, router]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      await axios.post("/api/register", data);

      Swal.fire({
        icon: "success",
        title: "Account created",
      });

      const callback = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (callback?.ok) {
        reset();
        router.push("/login");
        router.refresh();

        Swal.fire({
          icon: "success",
          title: "Logged In",
          timer: 1500,
        });
      }

      if (callback?.error) {
        Swal.fire({
          icon: "error",
          title: callback.error,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (currentUser) {
    return <p className="text-center">Logged in. Redirecting...</p>;
  }

  return (
    <div className="flex flex-col gap-4 w-2/5 ">
      <Button
        variant="flat"
        onClick={() => {
          signIn("google");
        }}
      >
        Continue with Google
        <span>
          <AiOutlineGoogle />
        </span>
      </Button>

      <hr className="bg-slate-300 w-full" />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />

      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="email"
      />

      <Input
        id="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type="password"
      />

      <Button
        onClick={handleSubmit(onSubmit)}
        color="primary"
        isLoading={isLoading}
      >
        {isLoading ? "Loading" : "Sign Up"}
      </Button>

      <p className="text-sm">
        Already have an account?{" "}
        <Link href={"/login"} className="underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
