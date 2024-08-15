import React from "react";

const AdminPage = () => {
  return (
    <div>
      <div>AdminPage</div>

      <p>This is the Admin page</p>
      <p>Branch test</p> {/* Change from current branch */}
      <p>commit 2</p> {/* Change from master branch */}
      <div className="border-red-600 border w-[500px] h-[500px] bg-zinc-800"></div>

      <p>This is Admin page</p>
      <p>commit 2</p>
      <div className=" border-red-600 border w-[500px] h-[500px]  bg-zinc-800"></div>

    </div>
  );
};

export default AdminPage;
