import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import Logo from "src/components/assets/logo";
import LogoFull from 'src/components/assets/logoFull';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    logo: <span>Kreatifika Kitab ChatGPT</span>,
    // project: {
    //   link: 'https://github.com/shuding/nextra'
    // },
    useNextSeoProps() {
      return {
        titleTemplate: "%s – Kreatifika",
      };
    },
    toc: {
      float: true,
      title: "Pada Halaman Ini",
      backToTop: true
    },
    search: {
      placeholder: "Cari Prompt...",
    },
    editLink: {
      text: "",
    },
    feedback: {
      content: "Ada Pertanyaan? E-mail kami →",
      labels: "feedback",
      useLink() {
        const config = useConfig();
        return `mailto:test@example.com?subject=${encodeURIComponent(
          `Saya memiliki pertanyaan pada ${config.title}`
        )}`;
      },
    },
    sidebar: {
      titleComponent({ title, type }) {
        if (type === 'separator') {
          return <span className="cursor-default">{title}</span>
        }
        return <>{title}</>
      },
      defaultMenuCollapseLevel: 1,
      toggleButton: true
    },
    logo: () => {
      const title = "Kitab ChatGPT Perintah Super Canggih!";
      return (
        <>
          <Logo height={12} />

          <span
            className="mx-2 font-extrabold hidden md:inline select-none" style={{ marginLeft: "4px" }}
            title={`Kreatifika: ${title}`}
          >
            Kitab ChatGPT
          </span>
        </>
      );
    },
    head: () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { route } = useRouter();
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { frontMatter, title } = useConfig();
      const titleSuffix = "Kitab ChatGPT Perintah Super Canggih!";
      const description = "Kumpulan Perintah ChatGPT yang akan memaksimalkan cara kerja ChatGPT. Dapatkan ekslusif prompt library yang akan selalu update setiap minggunya.";
  
      const imageUrl = new URL("https://i.ibb.co/pKxmNnh/Frame-1-1.png");
  
      if (!/\/index\.+/.test(route)) {
        imageUrl.searchParams.set("title", title || titleSuffix);
      }
  
      const ogTitle = title ? `${title} – Kreatifika` : `Kreatifika: ${titleSuffix}`;
      const ogDescription = frontMatter.description || description;
      const ogImage = frontMatter.image || imageUrl.toString();
  
      return (
        <>
          {/* Favicons, meta */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#000000"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="apple-mobile-web-app-title" content="SWR" />
          <meta name="description" content={ogDescription} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@vercel" />
          <meta name="twitter:image" content={ogImage} />
          <meta property="og:title" content={ogTitle} />
          <meta property="og:description" content={ogDescription} />
          <meta property="og:image" content={ogImage} />
        </>
      );
    },
    footer: {
      text: () => {
  
        return (
          <a
            href={`https://kreatifika.com`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center no-underline text-current font-semibold"
          >
            <span className="mr-2">Powered By</span>
            <span>
              <LogoFull />
            </span>
          </a>
        );
      },
    },
    gitTimestamp({ timestamp }) {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { locale } = useRouter();
      const lastUpdatedOn = "Terakhir diperbaharui";
  
      return (
        <>
          {lastUpdatedOn}{" "}
          <time dateTime={timestamp.toISOString()}>
            {timestamp.toLocaleDateString(locale, {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </>
      );
    },
    // ... other theme options
  }