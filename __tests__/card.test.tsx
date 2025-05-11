import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Card } from "../src/shared/components/card/card";
import * as nextNavigation from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

vi.mock("next/navigation", async () => {
  const actual =
    await vi.importActual<typeof nextNavigation>("next/navigation");
  return {
    ...actual,
    useRouter: () => ({ push: vi.fn() }),
  };
});

describe("Card", () => {
  it("renders the text prop", () => {
    render(<Card id="1" text="Test Card" url="/test" />);
    expect(screen.getByText("Test Card").textContent).toBe("Test Card");
  });

  it("calls push with correct url on click", () => {
    const push = vi.fn();
    vi.spyOn(nextNavigation, "useRouter").mockReturnValue({
      push,
    } as unknown as AppRouterInstance);
    render(<Card id="1" text="Clickable Card" url="/go" />);
    fireEvent.click(screen.getByText("Clickable Card"));
    expect(push).toHaveBeenCalledWith("/go/1");
  });
});
