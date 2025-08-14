import React from "react";
import { type User } from "@/app/api/tests/users/data";
import { revalidatePath } from "next/cache";

export default function UserForm() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        action={async (formdata: FormData) => {
          "use server";
          const name = formdata.get("name") as string;
          const email = formdata.get("email") as string;
          const phone = formdata.get("phone") as string;

          const newUser: User = {
            id: Math.floor(Math.random() * (99999 - 15 + 1)) + 15,
            email,
            name,
            phone,
          };

          const response = await fetch(
            "http://localhost:3000/api/tests/users",
            {
              method: "POST",
              body: JSON.stringify(newUser),
            }
          );

          const data = await response.json();

          if (!response.ok) throw new Error(data.message ?? "api error");

          if (data.users) {
            revalidatePath("/tests/users");
          }
        }}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Create User</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            placeholder="+1-202-555-0111"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Save User
        </button>
      </form>
    </div>
  );
}
