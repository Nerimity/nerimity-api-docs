import style from "./ContentPane.module.css";
import { useLocation } from "@solidjs/router";
import { createEffect, createResource, createSignal, Show } from "solid-js";
import markdownit from "markdown-it";
import MarkdownItGitHubAlerts from "markdown-it-github-alerts";
import MarkdownItReplaceLink from "markdown-it-replace-link";
import MarkdownItAnchor from "markdown-it-anchor";
import "markdown-it-github-alerts/styles/github-colors-dark-media.css";
import "markdown-it-github-alerts/styles/github-base.css";

const md = markdownit();
md.use(MarkdownItGitHubAlerts);
md.use(MarkdownItReplaceLink, {
  replaceLink: (href, title, text) => {
    if (href.endsWith(".md")) {
      return href.slice(0, -3);
    }
    return href;
  },
});
md.use(MarkdownItAnchor);

function fetchDocs(path: string) {
  return fetch("/docs" + path).then((r) => {
    if (r.status !== 200) return "# This page does not exist.";
    return r.text();
  });
}

export const ContentPane = () => {
  const location = useLocation();
  const [docs] = createResource(() => location.pathname + ".md", fetchDocs);
  const [markdown, setMarkdown] = createSignal("");

  createEffect(() => {
    const _docs = docs();
    if (!_docs) return;
    const str = md.render(_docs);
    setMarkdown(str);
  });
  return (
    <div class={style.container}>
      <Show when={md}>
        <div innerHTML={markdown()}></div>
      </Show>
    </div>
  );
};
