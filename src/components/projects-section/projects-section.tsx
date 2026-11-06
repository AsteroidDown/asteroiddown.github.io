import styles from "./projects-section.module.css";
import sectionStyles from "../shared/section.module.css";
import { projects } from "@/data/portfolio";
import { Badge, Box, Flex, Grid, Text } from "@locus-ui/components";
import { Arrow } from "../arrow/arrow";
import { ProjectVisual } from "../project-visual/project-visual";

export function ProjectsSection() {
  return (
    <section
      id="projects"
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
          <Text className={`${sectionStyles.eyebrow} ${sectionStyles.orange}`}>
            02 / BUILT WITH CURIOSITY
          </Text>
          <Text
            as="h2"
            weight="medium"
            mt="3"
            className={sectionStyles.sectionTitle}
          >
            Personal projects
          </Text>
        </Box>
        <Text size="sm" pb="5px" className={sectionStyles.sectionNote}>
          Ideas turned into things you can use.
        </Text>
      </Flex>
      <Grid
        columns={{ initial: "1", sm: "3" }}
        gap={{ initial: "6", sm: "4", md: "6" }}
      >
        {projects.map((project, index) => (
          <article
            className={`${styles.projectCard} flex flex-col overflow-hidden rounded-[10px]`}
            key={project.name}
          >
            <ProjectVisual kind={project.visual} />
            <Flex
              className="flex-1"
              direction="column"
              p={{ initial: "6", sm: "5", md: "6" }}
            >
              <Text className={styles.projectCategory}>
                0{index + 1} / {project.category}
              </Text>
              <Flex mt="3" align="center" gap="3">
                <img
                  className="size-9 shrink-0 object-contain"
                  src={project.logo}
                  alt=""
                  width="36"
                  height="36"
                  loading="lazy"
                />
                <Text
                  as="h3"
                  weight="medium"
                  size="25px"
                  className="tracking-[-0.7px]"
                >
                  {project.name}
                </Text>
              </Flex>
              <Text
                mt="3"
                className={`${styles.projectDescription} text-sm md:text-[13px] leading-[1.85]`}
              >
                {project.description}
              </Text>
              <Flex gap="2" wrap="wrap" mt="5" className="mb-auto pb-0.5">
                {project.tags.map((tag) => (
                  <Badge
                    className={sectionStyles.badge}
                    key={tag}
                    variant="muted"
                    color="tertiary"
                  >
                    {tag}
                  </Badge>
                ))}
              </Flex>
              <Flex
                pt="5"
                className={`${styles.projectLinks} text-xs`}
                mt="6"
                gap="4"
              >
                <a href={project.href} target="_blank" rel="noreferrer">
                  {project.href === project.source
                    ? "View on GitHub"
                    : "Visit project"}{" "}
                  <Arrow diagonal />
                </a>
                {project.source && project.source !== project.href && (
                  <a href={project.source} target="_blank" rel="noreferrer">
                    Source <Arrow diagonal />
                  </a>
                )}
              </Flex>
            </Flex>
          </article>
        ))}
      </Grid>
    </section>
  );
}
