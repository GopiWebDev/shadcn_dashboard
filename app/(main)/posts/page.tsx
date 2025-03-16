import PostTable from "@/components/posts/PostTable";
import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostsPagination";

const PostsPage = () => {
  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostTable />
      <PostPagination />
    </>
  );
};

export default PostsPage;
