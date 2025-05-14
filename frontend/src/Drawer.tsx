import { children, createResource, Show } from "solid-js";
import { SolidMarkdown } from "solid-markdown";
import style from "./Drawer.module.css";
import { A, useLocation } from "@solidjs/router";

const fetchDocs = () => {
  return fetch("/nerimity-docs/docs/README.md").then((r) => r.text());
};

const requestMethods = ["GET", "POST", "DELETE", "PATCH", "PUT"];

export const Drawer = () => {
  const [docs] = createResource(fetchDocs);

  const location = useLocation();

  return (
    <div class={style.drawer}>
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
  );
};
