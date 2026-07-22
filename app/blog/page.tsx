import Blogs from "@/components/blog/Blogs";
import SeoPageIntro from "@/components/seo/SeoPageIntro";

export default function BlogPage() {
  return (
    <div>
      <SeoPageIntro
        title="Travel Blog – Tips, Destination Guides & Holiday Ideas"
        subtitle="Helpful travel guides to plan better trips"
        paragraphs={[
          "Welcome to the Dream Sky Airways Travel Blog—your hub for destination guides, cheap holiday tips, honeymoon ideas, family vacation planning, and domestic tour package advice across India.",
          "Read expert articles on Goa tour packages, Manali trips from Delhi, Rishikesh adventure travel, honeymoon destinations India, and budget holiday packages. Every guide is written to help you travel smarter and book confidently.",
        ]}
        bullets={[
          "Destination guides for popular travel spots",
          "Budget and honeymoon planning tips",
          "Package booking advice from travel experts",
          "Quick links to book tours instantly",
        ]}
        links={[
          {href: "/packages", label: "Browse Tour Packages"},
          {href: "/packages/honeymoon-package", label: "Honeymoon Packages"},
          {href: "/contact", label: "Ask Travel Expert"},
        ]}
      />
      <Blogs />
    </div>
  );
}
