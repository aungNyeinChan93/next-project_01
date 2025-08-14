import Link from "next/link";
import React from "react";

const PhotoPage = async () => {
  return (
    <React.Fragment>
      <main>
        <h3>Photos</h3>
        <Link href={"/tests/photo/4"}>4</Link>
      </main>
    </React.Fragment>
  );
};

export default PhotoPage;
