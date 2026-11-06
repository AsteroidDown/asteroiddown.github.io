import styles from "./experience-section.module.css";
import sectionStyles from "../shared/section.module.css";
import { Box, Flex, Text } from "@locus-ui/components";
import { experience } from "@/data/portfolio";
import { ExperienceCard } from "../experience-card/experience-card";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1240px] px-[22px] md:px-7 lg:px-12 pt-[68px] md:pt-[100px]"
    >
      <Flex
        className="mb-[26px] md:mb-[34px]"
        justify="between"
        align="end"
        gap="4"
        wrap="wrap"
      >
        <Box>
          <Text className={`${sectionStyles.eyebrow} ${sectionStyles.blue}`}>
            01 / THE JOURNEY
          </Text>
          <Text
            as="h2"
            weight="medium"
            mt="3"
            className={sectionStyles.sectionTitle}
          >
            Work experience
          </Text>
        </Box>
        <Text size="sm" pb="5px" className={sectionStyles.sectionNote}>
          Building, connecting, and helping others grow.
        </Text>
      </Flex>
      <Box className={styles.experienceList}>
        {experience.map((item, index) => (
          <ExperienceCard item={item} index={index} key={item.company} />
        ))}
      </Box>
    </section>
  );
}
