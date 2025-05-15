import { children, createResource, createSignal, Show } from "solid-js";
import { SolidMarkdown } from "solid-markdown";
import style from "./Drawer.module.css";
import { A, useLocation } from "@solidjs/router";

const fetchDocs = () => {
  return fetch("/docs/README.md").then((r) => r.text());
};

const requestMethods = ["GET", "POST", "DELETE", "PATCH", "PUT"];

export const [drawerState, setDrawerState] = createSignal<"OPENED" | "CLOSED">(
  "OPENED"
);

export const openDrawer = () => setDrawerState("OPENED");

export const Drawer = () => {
  const [docs] = createResource(fetchDocs);

  const location = useLocation();

  return (
    <>
      <Show when={drawerState() === "OPENED"}>
        <div
          class={style.backdrop}
          onClick={() => setDrawerState("CLOSED")}
        ></div>
      </Show>
      <div class={style.drawer} data-state={drawerState()}>
        <Show when={!docs.loading}>
          <SolidMarkdown
            children={docs()!}
            components={{
              a: (a) => {
                const child = children(a.children as any);
                const text = child.toArray()[0] as string;
                const requestMethod = requestMethods.find((m) =>
                  text.includes(`[${m}]`)
                );
                return (
                  <A
                    href={a.href!.slice(0, -3)}
                    data-selected={location.pathname + ".md" === a.href!}
                    onClick={() => setDrawerState("CLOSED")}
                  >
                    <span>
                      {requestMethod
                        ? text.slice(0, text.indexOf(requestMethod) - 1)
                        : text}
                    </span>
                    {requestMethod ? (
                      <span
                        style={{
                          background: `var(--${requestMethod.toLowerCase()})`,
                        }}
                        class={style.method}
                      >
                        {requestMethod}
                      </span>
                    ) : (
                      ""
                    )}
                  </A>
                );
              },
            }}
          />
        </Show>
      </div>
    </>
  );
};
