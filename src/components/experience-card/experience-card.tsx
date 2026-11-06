"use client";

import styles from "./experience-card.module.css";
import sectionStyles from "../shared/section.module.css";

import { useState } from "react";
import { Badge, Box, Button, Flex, Text } from "@locus-ui/components";
import type { experience } from "@/data/portfolio";

export function ExperienceCard({
  item,
  index,
}: {
  item: (typeof experience)[number];
  index: number;
}) {
  const [open, setOpen] = useState(index < 2);
  const panelId = `experience-${index}`;
  return (
    <article className={`${styles.experienceCard} py-[25px] md:py-[30px]`}>
      <Flex justify="between" align="start" gap="4">
        <Flex gap={{ initial: "3", sm: "4" }} align="start">
          <Flex
            className={`${styles.companyMark} size-10 shrink-0 overflow-hidden rounded-[9px] md:size-12`}
            align="center"
            justify="center"
          >
            {item.image ? (
              <img
                src={item.image}
                alt=""
                width="44"
                height="44"
                className={`size-full object-contain p-[5px] ${item.monochrome ? styles.monochromeLogo : ""}`}
              />
            ) : (
              <span aria-hidden="true">X</span>
            )}
          </Flex>
          <Box>
            <Text as="h3" weight="medium" className={styles.companyName}>
              {item.company}
            </Text>
            <Text size="14px" mt="6px" className={styles.role}>
              {item.role}
            </Text>
            <Text mt="10px" className={sectionStyles.dates}>
              {item.dates}
            </Text>
          </Box>
        </Flex>
        <Button
          className="size-9 min-w-9 shrink-0 p-0 text-2xl"
          variant="outlined"
          color="secondary"
          radius="full"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? "Hide" : "Show"} details for ${item.company}`}
          onClick={() => setOpen(!open)}
        >
          {open ? "−" : "+"}
        </Button>
      </Flex>
      <Flex gap="2" wrap="wrap" mt="5" className="lg:ml-16">
        {item.tags.map((tag) => (
          <Badge
            className={sectionStyles.badge}
            variant="muted"
            color="primary"
            key={tag}
          >
            {tag}
          </Badge>
        ))}
      </Flex>
      <Box id={panelId} hidden={!open}>
        <ul
          className={`${styles.experiencePoints} mt-[22px] mb-0 max-w-[920px] pl-5 lg:ml-16 [&_li]:pl-1.5 [&_li]:mt-[9px]`}
        >
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </Box>
    </article>
  );
}
