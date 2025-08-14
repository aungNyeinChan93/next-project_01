import React from "react";

const DetailPhoto = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <React.Fragment>
      <main>{id}</main>
    </React.Fragment>
  );
};

export default DetailPhoto;
