"use server";
import prisma from "@/libs/prismadb";

export async function CreateContract(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  try {
    const { name, email, subject, message } = data;
    await prisma.contract.create({
      data: {
        name,
        email,
        subject,
        message,
      },
    });

    return { success: true, message: "Contract created successfully" };
  } catch (error) {
    console.log(error);
    throw new Error(`Failed to create contract`);
  }
}
