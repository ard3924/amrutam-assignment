import { useEffect } from "react";

export default function Seo({ title, description, keywords }) {
  useEffect(() => {
    document.title = `${title} | Amrutam Doctors`;

    // Update or create description tag
    const setMetaTag = (name, content) => {
      let metaTag = document.querySelector(`meta[name='${name}']`);
      if (metaTag) {
        metaTag.setAttribute("content", content);
      } else {
        metaTag = document.createElement("meta");
        metaTag.name = name;
        metaTag.content = content;
        document.head.appendChild(metaTag);
      }
    };

    if (description) setMetaTag("description", description);
    if (keywords) setMetaTag("keywords", keywords);

  }, [title, description, keywords]);

  return null; 
}
