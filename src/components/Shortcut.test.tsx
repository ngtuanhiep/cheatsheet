import { render, screen } from "@testing-library/preact";
import { describe, expect, it } from "vitest";
import { Shortcut } from "./Shortcut";

describe("Shortcut", () => {
  it("renders a chord as separate keycaps and a plain plus separator", () => {
    const { container } = render(<Shortcut value="Ctrl+B" />);
    expect(screen.getByText("Ctrl").tagName).toBe("KBD");
    expect(screen.getByText("B").tagName).toBe("KBD");
    expect(container.querySelectorAll("kbd")).toHaveLength(2);
    expect(container.querySelector(".key-plus")?.tagName).toBe("SPAN");
  });

  it("separates a prefix chord from the following key", () => {
    const { container } = render(<Shortcut value="Ctrl+B C" />);
    expect(container.querySelectorAll("kbd")).toHaveLength(3);
    expect(container.querySelector(".key-then")?.textContent).toBe("→");
  });

  it("renders a Vim sequence as individual keys", () => {
    const { container } = render(<Shortcut value="gg" />);
    expect(container.querySelectorAll("kbd")).toHaveLength(2);
  });

  it("keeps consecutive angle-bracket keys intact", () => {
    const { container } = render(<Shortcut value="<leader><space>" />);
    expect(Array.from(container.querySelectorAll("kbd")).map((key) => key.textContent)).toEqual(["Leader", "Space"]);
    expect(container.querySelectorAll(".key-then")).toHaveLength(1);
    expect(screen.queryByText("s")).toBeNull();
  });

  it("splits a Vim suffix but not a slash key", () => {
    const leaderFiles = render(<Shortcut value="<leader>ff" />);
    expect(Array.from(leaderFiles.container.querySelectorAll("kbd")).map((key) => key.textContent)).toEqual(["Leader", "f", "f"]);
    leaderFiles.unmount();

    const leaderSlash = render(<Shortcut value="<leader>/" />);
    expect(Array.from(leaderSlash.container.querySelectorAll("kbd")).map((key) => key.textContent)).toEqual(["Leader", "/"]);
  });
});
