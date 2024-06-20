import Navbar from "@/pagecomponents/shared/Navbar";
import { useEffect } from "react";

const Docs = () => {
  useEffect(() => {
    document.title = "Docs | williamouyang.org";

    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', 'My website documentation');
    }
    
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "100px", padding: "10px" }}>
        Docs

        <div style={{ maxWidth: "50px" }}>
          <svg fill="#1c449b" viewBox="0 0 32 32">
            <path d="M32 23.4V7.7l-7.9 7.5 7.9 8.2zM22.1 16.9l-4 3.8c-1.2 1.1-3.2 1.1-4.4 0L9.8 17 .7 26.4c.8.9 2 1.6 3.3 1.6h24c1.3 0 2.5-.7 3.2-1.6l-9.1-9.5z"></path>
            <path d="M15.2 18.4c.2.2.5.3.8.3.3 0 .6-.1.8-.3L31 5.4c-.7-.9-1.8-1.4-3-1.4H4c-1.2 0-2.2.5-3 1.4l14.2 13zM7.9 15.2 0 7.7V23.4l7.9-8.2z"></path>
          </svg>
        </div>

        <div style={{ maxWidth: "50px" }}>
          <svg id="nav_cloud_new" fill="white" stroke="black" viewBox="0 0 32 32">
            <path
              d="M6 12.5a7.5 7.5 0 0 1 14.301-3.165 4.5 4.5 0 0 1 7.303 5.013A6.503 6.503 0 0 1 32 20.5c0 3.422-2.64 6.5-6 6.5H7a7 7 0 0 1-.979-13.932A7.608 7.608 0 0 1 6 12.5z"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>

        
      </div>
    </div>
  );
};

export default Docs;
