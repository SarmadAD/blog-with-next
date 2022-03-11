import { render, screen } from "@testing-library/react";
import { Post } from "./Post";

describe("Post", () => {
  const title = "Hallo Welt";
  it("shows title of Post", () => {
    render(<Post title={title} />)
    const heading = screen.getByRole("heading", {
      name: /Hallo Welt/i,
    })
    
    expect(heading).toBeInTheDocument();
  });
});
