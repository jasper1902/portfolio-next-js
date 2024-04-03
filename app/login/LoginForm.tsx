"use client";

import React, { useEffect, useState } from "react";
import Input from "../components/input/Input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Button, Link } from "@nextui-org/react";
import { SafeUser } from "@/type/user";

type Props = {
  currentUser: SafeUser | null;
};

const LoginForm = ({ currentUser }: Props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
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
      const callback = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      setIsLoading(false);

      if (callback?.ok) {
        reset()
        router.push("/");
        router.refresh();
        toast.success("Logged In");
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    } catch (error) {
      toast.error("Something went wrong");
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
      <hr className="bg-slate-300 w-full h-px" />

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
        isLoading={isLoading}
        color="primary"
      >
        {isLoading ? "Loading" : "Login"}
      </Button>
      <p className="text-sm">
        Do not have an account?{" "}
        <Link href={"/register"} className="underline">
          sign up
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;