import { openDrawer } from "./Drawer";
import style from "./Header.module.css";
import { useTheme } from "./theme";

export const Header = () => {
  const { toggleTheme } = useTheme();
  return (
    <header class={style.header}>
      <div class={style.button} data-open-drawer-button onClick={openDrawer}>
        Open Drawer
      </div>

      <div class={style.right}>
        <div class={style.button} onClick={toggleTheme}>
          Toggle Night Mode
        </div>
        <div class={style.separator}></div>
        <a
          class={style.button}
          href="http://github.com/nerimity/nerimity-docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </header>
  );
};
