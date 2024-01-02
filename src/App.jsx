// Assets
import illustrationArticle from "./assets/images/illustration-article.svg";
import avatarImg from "./assets/images/image-avatar.webp";

const App = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center p-6 bg-[hsl(47,_88%,_63%)] text-[hsl(0,_0%,_7%)]">
      <div className="bg-white p-4 rounded-2xl border-2 border-[hsl(0,_0%,_7%)] max-w-80 shadow-[4.0px_8.0px_0px_hsl(0,_0%,_7%)]">
        <img
          src={illustrationArticle}
          alt="Article illustration"
          className="rounded-lg mb-6"
        />
        <span className="bg-[hsl(47,_88%,_63%)] font-black text-sm px-3 p-1 rounded mb-3 inline-block">
          Learning
        </span>
        <div className="text-sm font-semibold mb-6">Published 21 Dec 2023</div>
        <a
          className="font-black text-xl mb-4 inline-block hover:text-[hsl(47,_88%,_63%)] focus-visible:text-[hsl(47,_88%,_63%)]"
          href="/"
        >
          HTML & CSS foundations
        </a>
        <p className="text-sm font-semibold mb-6 text-[hsl(0,_0%,_50%)]">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
        <div className="flex items-center gap-4 mb-1">
          <img
            src={avatarImg}
            alt="Greg Hooper"
            className="w-8 aspect-square"
          />
          <span className="font-black">Greg Hooper</span>
        </div>
      </div>
    </div>
  );
};

export default App;
