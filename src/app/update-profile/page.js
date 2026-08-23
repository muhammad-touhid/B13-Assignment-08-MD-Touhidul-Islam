"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    const updateData = {};

    if (name) {
      updateData.name = name;
    }

    if (image) {
      updateData.image = image;
    }
    const { error } = await authClient.updateUser(updateData);

    if (!error) {
      router.push("/profile");
    }
  };

  return (
    <div className="px-6">
      <Card className="border border-[#41431B] w-full md:w-125 mx-auto mt-15 mb-50">
        <h1 className="text-center text-2xl font-bold">Update Your Profile</h1>
        <Form
          className="flex w-full mx-auto flex-col gap-4"
          onSubmit={onSubmit}
        >
          <TextField name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" className="w-full" />
            <FieldError />
          </TextField>
          <TextField name="image" type="text">
            <Label>Image URL</Label>
            <Input placeholder="Image URL" className="w-full" />
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button type="submit" className="bg-primary-custom">
              Update
            </Button>
            <Button
              type="submit"
              className="bg-secondary-custom text-secondary-custom"
            >
              <Link href={"/profile"}>Cancel</Link>
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}
