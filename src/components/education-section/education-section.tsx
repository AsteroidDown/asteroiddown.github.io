import styles from "./education-section.module.css";
import sectionStyles from "../shared/section.module.css";
import { Badge, Box, Flex, Text } from "@locus-ui/components";

export function EducationSection() {
  return (
    <section
      id="education"
      className="mx-auto max-w-[1240px] px-[22px] md:px-7 lg:px-12 pt-[68px] md:pt-[100px]"
    >
      <Box className="mb-[26px] md:mb-[34px]">
        <Text className={`${sectionStyles.eyebrow} ${sectionStyles.purple}`}>
          03 / THE FOUNDATION
        </Text>
        <Text
          as="h2"
          weight="medium"
          mt="3"
          className={sectionStyles.sectionTitle}
        >
          A scientific perspective
        </Text>
      </Box>
      <Flex
        className={styles.educationPanel}
        direction={{ initial: "column", sm: "row" }}
        p={{ initial: "6", sm: "8" }}
        gap="6"
        align="start"
      >
        <img
          className="size-[72px] shrink-0 rounded-lg bg-white p-2.5 object-contain md:size-[100px]"
          src="/assets/waterloo.png"
          alt="University of Waterloo"
          width="100"
          height="100"
          loading="lazy"
        />
        <Box>
          <Text className={sectionStyles.eyebrow}>UNIVERSITY OF WATERLOO</Text>
          <Text as="h3" weight="medium" mt="10px" className={styles.degree}>
            Honours BSc, Physics & Astronomy
          </Text>
          <Text
            size="14px"
            mt="3"
            className={`${styles.educationDescription} max-w-[670px]`}
          >
            Computing Technology Minor · Co-operative Education
          </Text>
          <Text mt="10px" className={sectionStyles.dates}>
            Sep 2016 — Apr 2021
          </Text>
          <Text
            size="14px"
            mt="3"
            className={`${styles.educationDescription} max-w-[670px]`}
          >
            An analytical foundation in understanding complex systems, testing
            ideas, and solving unfamiliar problems.
          </Text>
          <Flex gap="2" wrap="wrap" mt="5">
            {[
              "Algorithms",
              "Network Systems",
              "Abstract Data Types",
              "Computational Physics",
            ].map((course) => (
              <Badge
                className={sectionStyles.badge}
                key={course}
                variant="outlined"
                color="secondary"
              >
                {course}
              </Badge>
            ))}
          </Flex>
        </Box>
      </Flex>
    </section>
  );
}
