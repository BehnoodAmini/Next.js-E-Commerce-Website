import BlogBox from "./BlogBox";

const getData = async () => {
  const data = await fetch("http://localhost:27017/api/get-new-posts");
  return data.json();
};

const NewBlogs = async () => {
  const data = await getData();

  return (
    <section className="container mx-auto flex flex-col gap-[1.5rem]">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl border-r-zinc-500 border-r-2 pr-1">
          آخرین مقالات
        </h2>
      </header>
      <div className="flex justify-between items-center flex-wrap gap-2">
        {data.map((bl, i) => (
          <BlogBox data={bl} key={i} />
        ))}
      </div>
    </section>
  );
};

export default NewBlogs;
