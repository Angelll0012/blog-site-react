import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <section>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </section>
  );
}

export default ArticleList;
