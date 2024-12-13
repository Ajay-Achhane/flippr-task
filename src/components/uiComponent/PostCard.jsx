const PostCards = ({ data, className, fontAreaStyle }) => {
  return (
    <div
      className={`flex items-center lg:flex-row flex-col justify-start lg:mb-16 lg:my-0 my-8 lg:gap-x-10 ${className}`}
    >
      <img
        className="lg:h-60 aspect-video object-cover lg:w-auto w-full"
        src={data?.postImage}
        alt="images"
      />
      <div
        className={` ${fontAreaStyle} flex flex-col gap-y-2 lg:my-0 my-5 `}
      >
        <p className="text-[#6836ed] font-medium tracking-widest uppercase">
          {data?.genre}
        </p>
        <h4 className="lg:text-3xl leading-[1.59rem] tracking-wide text-2xl font-bold">
          {data?.title}
        </h4>
        <p className="tracking-wide"> {data?.desc}</p>
      </div>
    </div>
  );
};

export default PostCards;
