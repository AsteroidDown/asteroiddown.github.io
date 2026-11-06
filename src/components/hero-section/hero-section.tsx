import styles from "./hero-section.module.css";
import sectionStyles from "../shared/section.module.css";
import { Box, Flex, Text } from "@locus-ui/components";
import { Arrow } from "../arrow/arrow";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative grid grid-cols-1 items-center pt-14 md:min-h-[740px] md:grid-cols-[1.2fr_1fr] md:pt-[84px] lg:grid-cols-[1.15fr_1fr] mx-auto max-w-[1240px] px-[22px] md:px-7 lg:px-12"
    >
      <Box>
        <Text
          className={`${sectionStyles.eyebrow} ${styles.heroEyebrow} flex items-center gap-3`}
        >
          <span className={styles.smallOrbit} /> FULL STACK SOFTWARE ENGINEER
        </Text>
        <Text
          as="h1"
          weight="medium"
          mt="30px"
          mb="26px"
          className={styles.heroTitle}
        >
          Jasper
          <br />
          <span>Stahmer</span>
          <span className={styles.titleDot}>.</span>
        </Text>
        <Text className={styles.heroStatement}>
          Curious by nature.
          <br />A developer by design.
        </Text>
        <Text
          size="15px"
          mt="18px"
          className={`${styles.heroDescription} max-w-[430px] md:max-w-[410px]`}
        >
          I build thoughtful interfaces, connect complex systems, and turn ideas
          into software people use. Grounded in physics. Driven by what's next.
        </Text>
        <Flex gap="3" align="center" wrap="wrap" mt="30px">
          <a
            href="#experience"
            className={`${styles.primaryLink} inline-flex items-center rounded-md px-[18px] py-[13px] text-[13px] gap-[25px] max-[381px]:gap-3.5 max-[381px]:px-[13px]`}
          >
            Explore my work <Arrow />
          </a>
          <a
            href="#contact"
            className={`${styles.secondaryLink} inline-flex items-center rounded-md px-[18px] py-[13px] text-[13px] gap-[25px] max-[381px]:gap-3.5 max-[381px]:px-[13px]`}
          >
            Get in touch <Arrow diagonal />
          </a>
        </Flex>
      </Box>
      <Box className={styles.orbitArt} aria-hidden="true">
        <span className={`${styles.orbit} ${styles.orbitOne}`} />
        <span className={`${styles.orbit} ${styles.orbitTwo}`} />
        <span className={`${styles.orbit} ${styles.orbitThree}`} />
        <span className={styles.orbitCore}>
          js<span>.</span>
        </span>
        <span className={`${styles.orbitLabel} ${styles.labelOne}`}>
          React / Next.js
        </span>
        <span className={`${styles.orbitLabel} ${styles.labelTwo}`}>
          Systems & APIs
        </span>
        <span className={`${styles.orbitLabel} ${styles.labelThree}`}>
          AI & automation
        </span>
        <span className={`${styles.star} ${styles.starOne}`}>✦</span>
        <span className={`${styles.star} ${styles.starTwo}`}>+</span>
        <span className={styles.coordinate}>43.65° N / ALWAYS EXPLORING</span>
      </Box>
      <Flex
        py="6"
        className={`${styles.heroFooter} mt-5 md:mt-[70px]`}
        justify="between"
        gap="4"
        wrap="wrap"
      >
        <Text className="hidden md:block">
          From scientific questions to software solutions.
        </Text>
        <a href="#experience">
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </a>
      </Flex>
    </section>
  );
}
