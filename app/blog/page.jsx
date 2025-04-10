import BlogPageComp from "@/components/blogPage";

const BlogPage = async () => {
  return (
    <div className="container mx-auto">
        <section className="flex flex-col gap-8">
            <h1 className="text-center text-xl text-indigo-600">وبلاگ فروشگاه فایل</h1>
            <BlogPageComp/>
        </section>
    </div>
  );
};

export default BlogPage;
