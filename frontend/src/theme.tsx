import {
  createContext,
  createSignal,
  createUniqueId,
  onCleanup,
  onMount,
  useContext,
  type Accessor,
  type JSXElement,
} from "solid-js";

type Theme = "dark" | "light";
const ThemeContext = createContext({
  theme: (() => "dark") as Accessor<Theme>,
  toggleTheme: () => {},
  useThemeChangeListener: (cb: (theme: Theme) => void) => {},
});

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = (props: { children: JSXElement }) => {
  const [theme, setTheme] = createSignal<Theme>(
    (localStorage.getItem("theme") as Theme) || "dark"
  );
  const onThemeChangedFns: Record<string, (theme: Theme) => void> = {};

  onMount(() => {
    applyThemeFromStorage();
  });

  const toggleTheme = () => {
    animateTheme();

    const darkThemeApplied = document.body.classList.toggle("dark");

    const newTheme = darkThemeApplied ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyThemeFromStorage();
    Object.values(onThemeChangedFns).forEach((cb) => {
      cb(theme());
    });
  };

  const useThemeChangeListener = (callback: (theme: Theme) => void) => {
    const id = createUniqueId();

    onMount(() => {
      onThemeChangedFns[id] = callback;

      onCleanup(() => {
        delete onThemeChangedFns[id];
      });
    });
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, useThemeChangeListener }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

function animateTheme() {
  const styleEl = document.createElement("style");
  styleEl.innerHTML = `
  * {
    transition: 0.2s !important;
  }
  `;
  document.head.appendChild(styleEl);
  setTimeout(() => {
    document.head.removeChild(styleEl);
  }, 200);
}

export function applyThemeFromStorage() {
  document.body.classList.remove("dark");
  document.body.classList.remove("light");
  const currentTheme = localStorage.getItem("theme") || "dark";
  document.body.classList.add(currentTheme);
}
