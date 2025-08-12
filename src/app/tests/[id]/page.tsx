import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export const generateMetadata = async ({ params }: Props) => {
  return {
    title: ` test - ${params && (await params)?.id}`,
  };
};

const DetailTest = async ({ params }: Props) => {
  const { id } = await params;

  if (Number(id) === 100) notFound();
  if (Number(id) > 500) throw new Error("id is 500");

  return (
    <React.Fragment>
      <main>test - {id}</main>
    </React.Fragment>
  );
};

export default DetailTest;
