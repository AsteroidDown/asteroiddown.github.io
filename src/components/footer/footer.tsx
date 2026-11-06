import styles from "./footer.module.css";
import { Flex, Text } from "@locus-ui/components";
import { Arrow } from "../arrow/arrow";

export function Footer() {
  return (
    <footer
      className={`mx-auto max-w-[1240px] px-[22px] md:px-7 lg:px-12 ${styles.siteFooter} py-6 md:pt-[25px] md:pb-[30px]`}
    >
      <Flex
        justify="between"
        direction={{ initial: "column", sm: "row" }}
        gap="4"
        wrap="wrap"
      >
        <Text>© {new Date().getFullYear()} Jasper Stahmer</Text>
        <Text>
          Built with Next.js &{" "}
          <a href="https://locus-ui.com/" target="_blank" rel="noreferrer">
            Locus UI <Arrow diagonal />
          </a>
        </Text>
        <a href="#home">Back to top ↑</a>
      </Flex>
    </footer>
  );
}
