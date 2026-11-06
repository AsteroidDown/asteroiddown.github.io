import styles from "./contact-section.module.css";
import sectionStyles from "../shared/section.module.css";
import { Box, Flex, Grid, Text } from "@locus-ui/components";
import { contacts } from "@/data/portfolio";
import { Arrow } from "../arrow/arrow";

export function ContactSection() {
  return (
    <section
      id="contact"
      className={`mx-auto max-w-[1240px] px-[22px] md:px-7 lg:px-12 ${styles.contactSection} pt-[110px] pb-[60px] md:pb-[75px]`}
    >
      <Text className={`${sectionStyles.eyebrow} ${sectionStyles.blue}`}>
        04 / WHAT'S NEXT?
      </Text>
      <Text
        as="h2"
        weight="medium"
        mt="22px"
        className={sectionStyles.sectionTitle}
      >
        Let's build something
        <br />
        <span>worth exploring.</span>
      </Text>
      <Text size="14px" mt="6" className={styles.contactDescription}>
        Have a project in mind or an opportunity to share? I'd love to hear from
        you.
      </Text>
      <Grid
        mt="36px"
        className="gap-x-9 gap-y-0"
        columns={{ initial: "1", sm: "2" }}
      >
        {contacts.map((contact) => (
          <a
            href={contact.href}
            key={contact.name}
            className={`${styles.contactLink} flex items-center justify-between py-6`}
            {...(contact.href.startsWith("https")
              ? { target: "_blank", rel: "noreferrer" }
              : {})}
          >
            <Flex gap="3" align="center">
              <img
                src={`/assets/${contact.icon}.svg`}
                alt=""
                width="22"
                height="22"
                className="shrink-0 opacity-70"
              />
              <Box className="text-left [&_.text]:text-left">
                <Text size="14px">{contact.name}</Text>
                <Text size="sm" mt="1" className={styles.contactDetail}>
                  {contact.detail}
                </Text>
              </Box>
            </Flex>
            <Arrow diagonal />
          </a>
        ))}
      </Grid>
    </section>
  );
}
