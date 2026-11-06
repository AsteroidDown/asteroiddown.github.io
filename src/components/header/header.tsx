import styles from "./header.module.css";
import { Flex } from "@locus-ui/components";
import { Arrow } from "../arrow/arrow";

export function Header() {
  return (
    <header className={styles.siteHeader}>
      <Flex
        className="mx-auto max-w-[1240px] px-[22px] md:px-7 lg:px-12"
        py={{ initial: "5", sm: "6" }}
        align="center"
        justify="between"
        gap="4"
      >
        <a
          className={styles.monogram}
          href="#home"
          aria-label="Jasper Stahmer home"
        >
          js<span>.</span>
        </a>
        <nav className={styles.navigation} aria-label="Main navigation">
          <Flex
            gap={{ initial: "2", xs: "3", sm: "6" }}
            align="center"
            wrap="wrap"
          >
            <a
              className="inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap leading-none"
              href="#experience"
            >
              Experience
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap leading-none"
              href="#projects"
            >
              Projects
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap leading-none"
              href="#education"
            >
              Education
            </a>
            <a
              className="inline-flex min-h-11 items-center justify-center gap-1.5 whitespace-nowrap leading-none"
              href="#contact"
            >
              Contact <Arrow diagonal />
            </a>
          </Flex>
        </nav>
      </Flex>
    </header>
  );
}
