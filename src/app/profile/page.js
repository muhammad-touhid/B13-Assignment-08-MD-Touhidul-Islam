"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

export default function ProfilePage() {
  const userData = authClient.useSession();
  const user = userData.data?.user;

  return (
    <section className="min-h-screen bg-secondary-custom px-4 py-12">
      <div className="mx-auto max-w-4xl rounded-2xl bg-primary-custom p-8 shadow-lg">
        <h1 className="text-center text-3xl font-bold text-primary-custom sm:text-4xl">
          My Profile
        </h1>

        <div className="mt-10 grid gap-8 md:grid-cols-[220px_1fr]">
          <div className="flex justify-center">
            <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-secondary-custom bg-secondary-custom">
              <Image
                src={user?.image || "/default-avatar.png"}
                alt={user?.name || "User"}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-primary-custom/80">Name</p>
              <h2 className="text-xl font-semibold text-primary-custom">
                {user?.name || "N/A"}
              </h2>
            </div>

            <div>
              <p className="text-sm text-primary-custom/80">Email</p>
              <h2 className="text-xl font-semibold text-primary-custom">
                {user?.email || "N/A"}
              </h2>
            </div>
            <div>
              <Link href={"/update-profile"}>
                <button className="btn bg-secondary-custom text-secondary-custom">
                  Edit Your Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
