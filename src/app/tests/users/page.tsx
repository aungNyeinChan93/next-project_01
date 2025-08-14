import React from "react";
import { type User } from "@/app/api/tests/users/data";
import CreateForm from "./CreateForm";
import { CircleX } from "lucide-react";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const getUsers = async () => {
  const response = await fetch("http://localhost:3000/api/tests/users");
  const { users } = await response.json();
  return users;
};

const UsersPage = async () => {
  const users: User[] = await getUsers();
  console.log(users);

  return (
    <React.Fragment>
      <main className="container mx-auto min-h-screen bg-amber-200/60 p-6 flex  justify-center items-center">
        <div className=" ">
          <section className=" ">
            <CreateForm />
          </section>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {users &&
              Array.isArray(users) &&
              users?.map((user) => (
                <div
                  className="p-6 w-100 bg-slate-600 text-white rounded-2xl my-3 hover:bg-slate-500 flex justify-between"
                  key={user.id}
                >
                  <span>{user.name}</span>
                  <form
                    action={async (formdata: FormData) => {
                      "use server";
                      const id = formdata.get("id") as string;
                      const response = await fetch(
                        `http://localhost:3000/api/tests/users/${Number(id)}`,
                        {
                          method: "DELETE",
                        }
                      );
                      const data = await response.json();
                      if (data) revalidatePath("/tests/users");
                    }}
                    className="text-red-500/80 cursor-pointer"
                  >
                    <input type="hidden" name="id" value={user.id} />
                    <button type="submit">
                      <CircleX />
                    </button>
                  </form>
                </div>
              ))}
          </div>
        </div>
      </main>
    </React.Fragment>
  );
};

export default UsersPage;
