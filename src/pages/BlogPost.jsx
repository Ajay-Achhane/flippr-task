import React from "react";
import BlogHeroSection from "../components/sections/blogpost-page/BlogHeroSection";
import PostCards from "../components/uiComponent/PostCard";
import { postData } from "../data/projectData";
import JoinTeamSection from "../components/sections/homepage/JoinTeamSection";

const BlogPost = () => {
  return (
    <>
      <BlogHeroSection />
      {/* =============blog article section============ */}
      <div className="max-w-7xl mx-auto m-6 px-8">
        <div className="lg:w-[65%] w-11/12 mx-auto">
          <h1 className="text-3xl ">
            Lorem ipusm dolar sit amet,consectetur adipiscing elit,sed do
            eiusmod
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugit
            sapiente optio ducimus, quasi tempora culpa deleniti corporis,
            nostrum, repellat iusto. Libero, neque dignissimos. Commodi error
            corrupti tempora nemo consequuntur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vitae fugit sapiente optio ducimus,
            quasi tempora culpa deleniti corporis, nostrum, repellat iusto.
            Libero, neque dignissimos. Commodi error corrupti tempora nemo
            consequuntur?
          </p>
          <h1 className="text-3xl ">
            Lorem ipusm dolar sit amet,consectetur adipiscing elit,sed do
            eiusmod
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugit
            sapiente optio ducimus, quasi tempora culpa deleniti corporis,
            nostrum, repellat iusto. Libero, neque dignissimos. Commodi error
            corrupti tempora nemo consequuntur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vitae fugit sapiente optio ducimus,
            quasi tempora culpa deleniti corporis, nostrum, repellat iusto.
            Libero, neque dignissimos. Commodi error corrupti tempora nemo
            consequuntur?
          </p>

          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugit
            sapiente optio ducimus, quasi tempora culpa deleniti corporis,
            nostrum, repellat iusto. Libero, neque dignissimos. Commodi error
            corrupti tempora nemo consequuntur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vitae fugit sapiente optio ducimus,
            quasi tempora culpa deleniti corporis, nostrum, repellat iusto.
            Libero, neque dignissimos. Commodi error corrupti tempora nemo
            consequuntur?
          </p>

          <ul className="list-disc my-4 list-inside">
            <li className="font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </li>
            <li className="font-semibold">
              Vitae fugit sapiente optio ducimus, quasi tempora culpa{" "}
            </li>
            <li className="font-semibold">
              Vitae fugit sapiente optio ducimus, quasi tempora culpa{" "}
            </li>
          </ul>

          <h1 className="text-3xl ">
            Lorem ipusm dolar sit amet,consectetur adipiscing elit,sed do
            eiusmod
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fugit
            sapiente optio ducimus, quasi tempora culpa deleniti corporis,
            nostrum, repellat iusto. Libero, neque dignissimos. Commodi error
            corrupti tempora nemo consequuntur? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vitae fugit sapiente optio ducimus,
          </p>
        </div>
      </div>
      {/* ======================suggestion section================= */}
      <section className="mt-20 max-w-[95vw] mx-auto">
        <h1 className="text-3xl my-5 px-10 capitalize">what read to next</h1>
        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1">
         {postData.slice(0,3).map((data)=>( <PostCards fontAreaStyle={"lg:w-[90%!imporant]"} className={"lg:flex-col gap-y-6"} data={data} />))}
        </div>
      </section>
      <hr className=" bg-gray-700 lg:mb-10 mb-6"/>
      <JoinTeamSection/>
    </>
  );
};

export default BlogPost;
