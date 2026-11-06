import Header from "./components/Header";
import About from "./components/About";
import ArticleList from "./components/ArticleList";

function App() {

  const posts = [
    {
      id: 1,
      title: "My First Blog Post",
      date: "October 21, 2026",
      preview: "This is my first blog post about learning software development"
    },
    {
      id: 2,
      title: "Learning JavaScript",
      date: "October 24, 2026",
      preview: "Today I learned about JavaScript functions and arrays"
    },
    {
      id: 3,
      title: "Getting Started with React",
      date: "November 1, 2026",
      preview: "Today i learnt about react and the components"
    }
  ];

  return (
    <div>
      <Header name="My Personal Blog" />

      <About
        image="https://unsplash.com/photos/computer-screen-displaying-web-code-oXlXu2qukGE"
        about="Welcome to my blog...hehhehehe Here i will  share my learning journey"
      />

      <ArticleList posts={posts} />
    </div>
  );
}

export default App;