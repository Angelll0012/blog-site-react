import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import ArticleList from "./ArticleList";

describe("ArticleList", () => {
  it("renders each post's title, date, and preview", () => {
    const posts = [
      {
        id: 1,
        title: "My First Blog Post",
        date: "October 21, 2026",
        preview: "My first post preview",
      },
    ];

    const markup = renderToStaticMarkup(<ArticleList posts={posts} />);

    expect(markup).toContain("My First Blog Post");
    expect(markup).toContain("October 21, 2026");
    expect(markup).toContain("My first post preview");
  });
});
