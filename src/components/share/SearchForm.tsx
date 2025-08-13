import React from "react";
import Form from "next/form";
import ResetButton from "./ResetButton";
import { Search } from "lucide-react";

interface Props {
  search?: string; // from searchParmas
}
const SearchForm = async ({ search }: Props) => {
  return (
    <React.Fragment>
      <main>
        <Form
          className="py-2 px-4 rounded-2xl bg-amber-100/50 border-2 border-amber-400 serach-form text-base"
          scroll={false}
          action="/dashboard"
        >
          <div className="flex gap-2 items-center justify-around">
            <input
              placeholder="enter search"
              type="text"
              defaultValue={search}
              name="search"
              id="search"
            />
            {/* resetButton  */}
            {search && <ResetButton />}

            <button
              type="submit"
              className="btn bg-amber-300 text-slate-900 hover:bg-amber-200"
            >
              <Search size={22} />
            </button>
          </div>
        </Form>
      </main>
    </React.Fragment>
  );
};

export default SearchForm;
