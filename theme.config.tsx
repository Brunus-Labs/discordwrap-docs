import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Discordwrap</span>,
  project: {
    link: "https://github.com/Brunus-Labs/discordwrap-docs",
  },
  docsRepositoryBase:
    "https://github.com/Brunus-Labs/discordwrap-docs/tree/main",
  editLink: {
    text: "Edit this page",
  },
  footer: {
    text: "Discordwrap Docs",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "DW - %s",
      description: "The Discordwrap Docs",
    };
  },
};

export default config;
