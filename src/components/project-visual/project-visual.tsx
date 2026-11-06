import styles from "./project-visual.module.css";
import { Box, ChevronDown, Flex } from "@locus-ui/components";
import { Arrow } from "../arrow/arrow";

export function ProjectVisual({ kind }: { kind: string }) {
  if (kind === "life")
    return (
      <Box
        className={`${styles.projectVisual} ${styles.lifeVisual}`}
        aria-hidden="true"
      >
        <Box className={styles.lifeCounterScene}>
          <Box className={styles.lifeCounterBoard}>
            {[
              { color: "blue", total: "40" },
              { color: "green", total: "38" },
              { color: "red", total: "36" },
              { color: "gold", total: "40" },
            ].map((player) => (
              <Box
                className={`${styles.lifeCounterTile} ${styles[`life-counter-${player.color}`]}`}
                key={player.color}
              >
                <Flex
                  align="center"
                  justify="between"
                >
                  <span className={styles.lifeCounterStep}>−</span>
                  <span className={styles.lifeCounterTotal}>
                    {player.total}
                  </span>
                  <span className={styles.lifeCounterStep}>+</span>
                </Flex>
              </Box>
            ))}
          </Box>
        </Box>
        <span className={styles.lifeWordmark}>Life Tracker</span>
        <span className={styles.lifeCaption}>Every point. Every player.</span>
      </Box>
    );
  if (kind === "locus")
    return (
      <Box
        className={`${styles.projectVisual} ${styles.locusVisual}`}
        aria-hidden="true"
      >
        <span className={styles.visualCaption}>
          A foundation for your next idea.
        </span>
        <Box className={styles.componentScene}>
          <Flex className={styles.componentRow} gap="3" align="center">
            <span className={styles.demoButton}>
              Get started <Arrow />
            </span>
            <span className={styles.demoBadge}>React</span>
            <span className={styles.demoIconButton}>⌘</span>
          </Flex>
          <Flex className={styles.componentRow} gap="3" align="center">
            <span className={styles.demoInput}>
              <span>⌕</span> Find a component <span>⌘ K</span>
            </span>
            <span className={styles.demoSelect}>
              <span>Theme</span>
              <ChevronDown />
            </span>
          </Flex>
          <Flex className={styles.demoControls} gap={{ initial: "3", sm: "2", md: "3" }} align="center">
            <span className={styles.demoCheck}>✓</span>
            <span className={styles.demoTrack}>
              <span />
            </span>
            <span className={styles.demoSwitch} />
            <span className={styles.demoAvatars}>
              <span>J</span>
              <span>A</span>
              <span>+2</span>
            </span>
          </Flex>
        </Box>
        <span className={styles.visualWordmark}>Locus UI</span>
        <span className={styles.demoStatus}>
          <span /> All systems styled
        </span>
      </Box>
    );
  return (
    <Box
      className={`${styles.projectVisual} ${styles.manaVisual}`}
      aria-hidden="true"
    >
      <Box className={styles.cardFan}>
        <span />
        <span />
        <span>
          <i>✦</i>
        </span>
      </Box>
      <span className={styles.manaWordmark}>MANA LOCUS</span>
      <span className={styles.manaCaption}>Build. Collect. Play.</span>
    </Box>
  );
}
