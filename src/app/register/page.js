"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignUpPage() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name, // user display name
      image, // User image URL (optional)
      email, // user email address
      password, // user password -> min 8 characters by default
      callbackURL: "/",
    });

    if (!error) {
      router.push("/login");
    } else {
      setErrorMessage("User Already Exist, Please Sign In");
    }
  };
  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="px-6">
      <Card className="border border-[#41431B] w-full md:w-125 mx-auto mt-15 mb-50">
        <h1 className="text-center text-2xl font-bold">Register </h1>
        <Form
          className="flex w-full mx-auto flex-col gap-4"
          onSubmit={onSubmit}
        >
          <TextField isRequired name="name" type="text">
            <Label>Name</Label>
            <Input placeholder="Enter your name" className="w-full" />
            <FieldError />
          </TextField>
          <TextField isRequired name="image" type="text">
            <Label>Image URL</Label>
            <Input placeholder="Image URL" className="w-full" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" className="w-full" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" className="w-full" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          {errorMessage && (
            <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
          )}
          <div className="flex gap-2">
            <Button type="submit" className="w-full bg-primary-custom">
              Submit
            </Button>
          </div>
        </Form>
        <div className="w-full mx-auto flex flex-col items-center gap-2 ">
          <p>OR</p>
          <button
            onClick={handleSignIn}
            className="btn w-full bg-white text-black border-[#e5e5e5] rounded-lg"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        </div>
        <div className="w-full mx-auto mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href={"/sign-in"}>
              <span className="font-semibold text-secondary-custom hover:underline">
                Sign In
              </span>
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
