export default function processOembedTags(content) {
    const parser = new DOMParser();
  const doc = parser.parseFromString(content, "text/html");

  // Find all <oembed> elements
  const oembedElements = doc.querySelectorAll("oembed");

  oembedElements.forEach((oembed) => {
    const url = oembed.getAttribute("url");

    // Check if the URL is a YouTube video
    if (url.includes("youtu.be") || url.includes("youtube.com")) {
      // Extract the video ID
      const videoId = url.match(/(?:youtu\.be\/|v=|\/embed\/|\/v\/|\/watch\?v=)([^&?\/]+)/)?.[1];

      if (videoId) {
        // Create the YouTube embed URL
        const embedUrl = `https://www.youtube.com/embed/${videoId}`;

        // Replace the <oembed> tag with an <iframe>
        const iframe = document.createElement("iframe");
        iframe.setAttribute("src", embedUrl);
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
        iframe.setAttribute("allowfullscreen", "true");
        iframe.style.width = "100%";
        iframe.style.height = "700px";

        oembed.replaceWith(iframe);
      }
    }
  });

  return doc.body.innerHTML;
  };
  