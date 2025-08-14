import React from "react";

const DetailModalInterceptPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <React.Fragment>
      <main>
        {"DetailModalInterceptPage"} ||{id}
      </main>
    </React.Fragment>
  );
};

export default DetailModalInterceptPage;
