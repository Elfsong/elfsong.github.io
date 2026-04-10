// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "For the recent publications, please go to my Google Scholar directly.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-personal",
          title: "Personal",
          description: "有趣的灵魂 终会相遇",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/";
          },
        },{id: "nav-service",
          title: "Service",
          description: "大风扬积雪击面 亭东自足下皆云漫 稍见云中白若摴蒱数十立者 山也",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Mingzhe Du&#39;s Curriculum Vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-resillience",
      
        title: "Resillience",
      
      description: "Resillience",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/resilience/";
        
      },
    },{id: "post-multi-head-attention",
      
        title: "Multi-Head Attention",
      
      description: "Multi-Head Attention Implementation Notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/multi_head_attention/";
        
      },
    },{id: "post-preference-alignment-101",
      
        title: "Preference Alignment 101",
      
      description: "Preference Alignment Preliminary Notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2026/preference_alignment/";
        
      },
    },{id: "post-challenges-in-code-generation",
      
        title: "Challenges in Code Generation",
      
      description: "Challenges in Code Generation",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/code-challenge/";
        
      },
    },{id: "post-predicting-and-optimizing-llvm-compiler-pass-order",
      
        title: "PREDICTING AND OPTIMIZING LLVM COMPILER PASS ORDER",
      
      description: "Predicting and optimizing LLVM compiler pass order",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/llvm/";
        
      },
    },{id: "post-where-the-time-comes-from",
      
        title: "Where the Time Comes From?",
      
      description: "Wall Clocks vs. Monotonic Clocks",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/time/";
        
      },
    },{id: "post-advancements-in-automated-mcq-generation",
      
        title: "Advancements in Automated MCQ Generation",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/html/mcq.html";
        
      },
    },{id: "post-afterburner",
      
        title: "Afterburner",
      
      description: "By Humans, Beyond Humans.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/afterburner/";
        
      },
    },{id: "post-latex-color-palette",
      
        title: "LaTeX Color Palette",
      
      description: "Latex Color",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Xcolor/";
        
      },
    },{id: "post-ntu-nus-exchange",
      
        title: "NTU × NUS Exchange",
      
      description: "Submit new event to NTU × NUS Exchange",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/event/";
        
      },
    },{id: "post-site-rebase",
      
        title: "Site Rebase",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/site-rebase/";
        
      },
    },{id: "post-how-to-execute-llvm-ir-generated-from-codon",
      
        title: "How to execute LLVM IR generated from Codon?",
      
      description: "Python with native machine speed",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/Codon/";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-hwg703",
      
        title: "HWG703",
      
      description: "HWG703 Slides",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/HWG703.pdf";
        
      },
    },{id: "post-the-bitter-lesson",
      
        title: "The Bitter Lesson",
      
      description: "Rich Sutton (March 13, 2019)",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/abitterlesson/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-the-rise-of-artificial-intelligence-over-the-last-8-decades",
      
        title: "The rise of artificial intelligence over the last 8 decades",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/the-rise-of-artificial-intelligence-over-the-last-8-decades/";
        
      },
    },{id: "post-eventlet-with-playwright",
      
        title: "Eventlet with Playwright",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/eventlet-with-playwright/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-十字路口",
      
        title: "十字路口",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/%E5%8D%81%E5%AD%97%E8%B7%AF%E5%8F%A3/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-教授一路走好",
      
        title: "教授一路走好",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/%E6%95%99%E6%8E%88%E4%B8%80%E8%B7%AF%E8%B5%B0%E5%A5%BD/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-general-will",
      
        title: "General will",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/general-will/";
        
      },
    },{id: "post-2周年啦",
      
        title: "2周年啦",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/2%E5%91%A8%E5%B9%B4%E5%95%A6/";
        
      },
    },{id: "post-leviathan-ii",
      
        title: "Leviathan II",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/identity-and-violence/";
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-nlp-road-map",
      
        title: "NLP Road Map",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/nlp-road-map/";
        
      },
    },{id: "post-有些小朋友好久好久没写love-story了",
      
        title: "有些小朋友好久好久没写love story了",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/%E6%9C%89%E4%BA%9B%E5%B0%8F%E6%9C%8B%E5%8F%8B%E5%A5%BD%E4%B9%85%E5%A5%BD%E4%B9%85%E6%B2%A1%E5%86%99love-story%E4%BA%86/";
        
      },
    },{id: "post-xmas-treasure-hunt",
      
        title: "Xmas Treasure Hunt！",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/xmas-treasure-hunt/";
        
      },
    },{id: "post-520",
      
        title: "520",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/520/";
        
      },
    },{id: "post-gradient-divergence-curl-laplacian-jacobian-and-hessian",
      
        title: "Gradient, Divergence, Curl, Laplacian, Jacobian and Hessian",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/gradient-divergence-curl-laplacian-jacobian-and-hessian/";
        
      },
    },{id: "post-i-found-something-interesting",
      
        title: "I found something interesting!",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/i-found-something-interesting/";
        
      },
    },{id: "post-歇斯底里",
      
        title: "歇斯底里",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/%E6%AD%87%E6%96%AF%E5%BA%95%E9%87%8C/";
        
      },
    },{id: "post-关于广州机场的三件小事",
      
        title: "关于广州机场的三件小事",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/%E5%85%B3%E4%BA%8E%E5%B9%BF%E5%B7%9E%E7%9A%84%E4%B8%89%E4%BB%B6%E5%B0%8F%E4%BA%8B/";
        
      },
    },{id: "post-subway",
      
        title: "Subway",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/%E5%BD%B1/";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-rabin-karp-algorithm",
      
        title: "Rabin–Karp algorithm",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/rabin-karp-algorithm/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-generate-parentheses",
      
        title: "Generate Parentheses",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/generate-parentheses/";
        
      },
    },{id: "post-something-interesting",
      
        title: "Something interesting",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/something-interesting/";
        
      },
    },{id: "post-楽しい",
      
        title: "楽しい",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/%E6%A5%BD%E3%81%97%E3%81%84/";
        
      },
    },{id: "post-lagrangian-duality",
      
        title: "Lagrangian duality",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/lagrangian-duality/";
        
      },
    },{id: "post-machine-learning-can",
      
        title: "Machine learning, can?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/machine-learning-can/";
        
      },
    },{id: "post-mitchell-approximation",
      
        title: "Mitchell Approximation",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/mitchell-approximation/";
        
      },
    },{id: "post-how-to-renew-your-let-s-encrypt",
      
        title: "How to renew your Let’s encrypt",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/how-to-renew-your-lets-encrypt/";
        
      },
    },{id: "post-机心",
      
        title: "机心",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/%E6%9C%BA%E5%BF%83/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-semiring",
      
        title: "Semiring",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/semiring/";
        
      },
    },{id: "post-lemme-try",
      
        title: "Lemme try",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/lemme-try/";
        
      },
    },{id: "post-heap-sort",
      
        title: "Heap sort",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/heap-sort/";
        
      },
    },{id: "post-is-a-balanced-binary-tree",
      
        title: "Is a Balanced Binary Tree",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/is-a-balanced-binary-tree/";
        
      },
    },{id: "post-median-of-interval",
      
        title: "Median of interval",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/median-of-interval/";
        
      },
    },{id: "post-the-discrete-fourier-transform",
      
        title: "The Discrete Fourier Transform",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/the-discrete-fourier-transform/";
        
      },
    },{id: "post-往明月多处走",
      
        title: "往明月多处走",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/%E5%BE%80%E6%98%8E%E6%9C%88%E5%A4%9A%E5%A4%84%E8%B5%B0/";
        
      },
    },{id: "post-bug-oriented-programming",
      
        title: "Bug-oriented Programming",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/bug-oriented-programming/";
        
      },
    },{id: "post-variational-inference-for-bayes-network",
      
        title: "Variational inference for Bayes Network",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/variational-inference-for-bayes-network/";
        
      },
    },{id: "post-感谢gfw爸爸放我出来",
      
        title: "感谢GFW爸爸放我出来",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/%E6%84%9F%E8%B0%A2gfw%E7%88%B8%E7%88%B8%E6%94%BE%E6%88%91%E5%87%BA%E6%9D%A5/";
        
      },
    },{id: "post-newton-s-method",
      
        title: "Newton’s method",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/1994/";
        
      },
    },{id: "post-transformer-architecture",
      
        title: "Transformer Architecture",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/transformer-architecture/";
        
      },
    },{id: "post-expected-value-about-normal-distribution",
      
        title: "Expected Value about Normal Distribution",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/excepted-value-about-normal-distribution/";
        
      },
    },{id: "post-semigroup-and-monoid",
      
        title: "Semigroup and Monoid",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/semigroup-and-monoid/";
        
      },
    },{id: "post-how-to-buy-and-sell-stock-at-the-best-time",
      
        title: "How to buy and sell stock at the best time",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/how-to-buy-and-sell-stock-at-the-best-time/";
        
      },
    },{id: "post-verily-phone-screen-interview",
      
        title: "Verily Phone Screen Interview",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/verily-phone-screen-interview/";
        
      },
    },{id: "post-word-break",
      
        title: "Word Break",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/word-break-2/";
        
      },
    },{id: "post-how-to-check-if-a-vector-is-an-eigenvector-for-a-matrix",
      
        title: "How to check if a vector is an eigenvector for a matrix",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/how-to-check-if-a-vector-is-an-eigenvector-for-a-matrix/";
        
      },
    },{id: "post-how-to-renew-your-letsencrypt-certificate",
      
        title: "How to renew your LetsEncrypt certificate",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/how-to-renew-your-letsencrypt-certificate/";
        
      },
    },{id: "post-max-increase-to-keep-city-skyline",
      
        title: "Max Increase to Keep City Skyline",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/max-increase-to-keep-city-skyline/";
        
      },
    },{id: "post-wave-function-collapse",
      
        title: "Wave Function Collapse",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/wave-function-collapse/";
        
      },
    },{id: "post-our-project-finally",
      
        title: "Our project finally!",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/our-project-finally/";
        
      },
    },{id: "post-esim",
      
        title: "ESIM",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/esim/";
        
      },
    },{id: "post-decomposable-attention",
      
        title: "Decomposable Attention",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/decomposable-attention/";
        
      },
    },{id: "post-",
      
        title: "",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/1884/";
        
      },
    },{id: "post-the-revolution-of-cnn",
      
        title: "The revolution of CNN",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/the-revolution-of-cnn/";
        
      },
    },{id: "post-depthwise-separable-convolution",
      
        title: "Depthwise Separable Convolution",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/depthwise-separable-convolution/";
        
      },
    },{id: "post-support-vector-machine-svm",
      
        title: "Support Vector Machine (SVM)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/support-vector-machine-svm/";
        
      },
    },{id: "post-sieve-of-eratosthenes",
      
        title: "Sieve of Eratosthenes",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/sieve-of-eratosthenes/";
        
      },
    },{id: "post-my-calendar-i",
      
        title: "My Calendar I",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/my-calendar-i/";
        
      },
    },{id: "post-find-the-shortest-superstring",
      
        title: "Find the Shortest Superstring",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/find-the-shortest-superstring/";
        
      },
    },{id: "post-animals-in-the-zoo",
      
        title: "Animals in the zoo",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/animals-in-the-zoo/";
        
      },
    },{id: "post-gaia",
      
        title: "Gaia",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/gaia/";
        
      },
    },{id: "post-best-time-to-buy-and-sell-stock-with-transaction-fee",
      
        title: "Best Time to Buy and Sell Stock with Transaction Fee",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/best-time-to-buy-and-sell-stock-with-transaction-fee/";
        
      },
    },{id: "post-bifurcation-and-feigenbaum-constant",
      
        title: "Bifurcation and Feigenbaum Constant",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/bifurcation-and-feigenbaum-constant/";
        
      },
    },{id: "post-levithan",
      
        title: "Levithan",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/levithan/";
        
      },
    },{id: "post-reverse-pairs",
      
        title: "Reverse Pairs",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/reverse-pairs/";
        
      },
    },{id: "post-binary-index-tree",
      
        title: "Binary Index Tree",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/binary-index-tree/";
        
      },
    },{id: "post-tcp-states-transformer",
      
        title: "TCP States Transformer",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/tcp-states-transformer/";
        
      },
    },{id: "post-largest-rectangle-in-histogram",
      
        title: "Largest Rectangle in Histogram",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/largest-rectangle-in-histogram/";
        
      },
    },{id: "post-get-n-primes",
      
        title: "Get N primes",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/get-n-primes/";
        
      },
    },{id: "post-is-graph-bipartite",
      
        title: "Is Graph Bipartite?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/is-graph-bipartite/";
        
      },
    },{id: "post-redis-epoll",
      
        title: "Redis – epoll",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/redis-epoll/";
        
      },
    },{id: "post-select",
      
        title: "Select",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/select/";
        
      },
    },{id: "post-浓烟下的诗歌电台",
      
        title: "浓烟下的诗歌电台",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/%E6%B5%93%E7%83%9F%E4%B8%8B%E7%9A%84%E8%AF%97%E6%AD%8C%E7%94%B5%E5%8F%B0/";
        
      },
    },{id: "post-word-break",
      
        title: "Word Break",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/word-break/";
        
      },
    },{id: "post-increasing-triplet-subsequence",
      
        title: "Increasing Triplet Subsequence",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/increasing-triplet-subsequence-2/";
        
      },
    },{id: "post-evaluate-division",
      
        title: "Evaluate Division",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/evaluate-division/";
        
      },
    },{id: "post-tcp-header",
      
        title: "TCP Header",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/tcp-header/";
        
      },
    },{id: "post-implement-trie-prefix-tree",
      
        title: "Implement Trie (Prefix Tree)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/implement-trie-prefix-tree/";
        
      },
    },{id: "post-missing-ranges",
      
        title: "Missing Ranges",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/missing-ranges/";
        
      },
    },{id: "post-longest-consecutive-sequence",
      
        title: "Longest Consecutive Sequence",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/longest-consecutive-sequence/";
        
      },
    },{id: "post-python-daemon",
      
        title: "Python Daemon",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/python-daemon/";
        
      },
    },{id: "post-increment-one",
      
        title: "Increment One",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/increment-one/";
        
      },
    },{id: "post-most-stones-removed-with-same-row-or-column",
      
        title: "Most Stones Removed with Same Row or Column",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/most-stones-removed-with-same-row-or-column/";
        
      },
    },{id: "post-brace-expansion",
      
        title: "Brace Expansion",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/brace-expansion/";
        
      },
    },{id: "post-in-me-the-tiger-sniffs-the-rose",
      
        title: "In me the tiger sniffs the rose",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/in-me-the-tiger-sniffs-the-rose/";
        
      },
    },{id: "post-delete-nodes-and-return-forest",
      
        title: "Delete Nodes And Return Forest",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/delete-nodes-and-return-forest-2/";
        
      },
    },{id: "post-decode-string",
      
        title: "Decode String",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/decode-string/";
        
      },
    },{id: "post-sentence-similarity-ii",
      
        title: "Sentence Similarity II",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/sentence-similarity-ii/";
        
      },
    },{id: "post-campus-bikes-ii",
      
        title: "Campus Bikes II",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/campus-bikes-ii/";
        
      },
    },{id: "post-delete-nodes-and-return-forest",
      
        title: "Delete Nodes And Return Forest",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/delete-nodes-and-return-forest/";
        
      },
    },{id: "post-mood-journey",
      
        title: "Mood Journey",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/mood-journey/";
        
      },
    },{id: "post-union-find-python-implementation",
      
        title: "Union-Find Python Implementation",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/union-find-python-implementation/";
        
      },
    },{id: "post-minimum-knight-moves",
      
        title: "Minimum Knight Moves",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/minimum-knight-moves/";
        
      },
    },{id: "post-sum-root-to-leaf-numbers",
      
        title: "Sum Root to Leaf Numbers",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/sum-root-to-leaf-numbers/";
        
      },
    },{id: "post-decode-ways",
      
        title: "Decode ways",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/decode-ways/";
        
      },
    },{id: "post-unique-binary-search-trees-ii",
      
        title: "Unique Binary Search Trees II",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/unique-binary-search-trees-ii/";
        
      },
    },{id: "post-2-keys-keyboard",
      
        title: "2 Keys Keyboard",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/2-keys-keyboard/";
        
      },
    },{id: "post-请宽恕我的平庸",
      
        title: "请宽恕我的平庸",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/%E8%AF%B7%E5%AE%BD%E6%81%95%E6%88%91%E7%9A%84%E5%B9%B3%E5%BA%B8/";
        
      },
    },{id: "post-find-k-th-palindrome-number-of-n-digits",
      
        title: "Find K-th Palindrome Number of N Digits",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/find-k-th-palindrome-number-of-n-digits/";
        
      },
    },{id: "post-pow-x-n",
      
        title: "Pow(x, n)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/powx-n/";
        
      },
    },{id: "post-stone-game-ii",
      
        title: "Stone Game II",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/stone-game-ii/";
        
      },
    },{id: "post-largest-sum-of-averages",
      
        title: "Largest Sum of Averages",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/largest-sum-of-averages/";
        
      },
    },{id: "post-repeated-substring-pattern",
      
        title: "Repeated Substring Pattern",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/repeated-substring-pattern/";
        
      },
    },{id: "post-wiggle-sort-ii",
      
        title: "Wiggle Sort II",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/wiggle-sort-ii/";
        
      },
    },{id: "post-increasing-triplet-subsequence",
      
        title: "Increasing Triplet Subsequence",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/increasing-triplet-subsequence/";
        
      },
    },{id: "post-抛硬币",
      
        title: "抛硬币",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/%E6%8A%9B%E7%A1%AC%E5%B8%81/";
        
      },
    },{id: "post-flip-equivalent-binary-trees",
      
        title: "Flip Equivalent Binary Trees",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/flip-equivalent-binary-trees/";
        
      },
    },{id: "post-remove-zero-sum-consecutive-nodes-from-linked-list",
      
        title: "Remove Zero Sum Consecutive Nodes from Linked List",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/remove-zero-sum-consecutive-nodes-from-linked-list/";
        
      },
    },{id: "post-printing-a-pyramid-matrix",
      
        title: "Printing a pyramid matrix",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/printing-a-pyramid-matrix/";
        
      },
    },{id: "post-path-in-zigzag-labelled-binary-tree",
      
        title: "Path In Zigzag Labelled Binary Tree",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/path-in-zigzag-labelled-binary-tree/";
        
      },
    },{id: "post-remove-duplicates-from-sorted-array",
      
        title: "Remove Duplicates from Sorted Array",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/remove-duplicates-from-sorted-array/";
        
      },
    },{id: "post-permutations-ii",
      
        title: "Permutations II",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/permutations-ii/";
        
      },
    },{id: "post-permutation-sequence",
      
        title: "Permutation Sequence",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/permutation-sequence/";
        
      },
    },{id: "post-lowest-common-ancestor-with-n-nodes",
      
        title: "Lowest Common Ancestor with N nodes",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/lowest-common-ancestor-with-n-nodes-2/";
        
      },
    },{id: "post-house-robber-iii",
      
        title: "House Robber III",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/house-robber-iii/";
        
      },
    },{id: "post-courage",
      
        title: "Courage",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/courage/";
        
      },
    },{id: "post-next-permutation",
      
        title: "Next Permutation﻿",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/next-permutation/";
        
      },
    },{id: "post-candy",
      
        title: "Candy",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/candy/";
        
      },
    },{id: "post-trapping-rain-water",
      
        title: "Trapping Rain Water",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/trapping-rain-water/";
        
      },
    },{id: "post-remove-element",
      
        title: "Remove Element",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/remove-element/";
        
      },
    },{id: "post-gas-station",
      
        title: "Gas Station",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/gas-station/";
        
      },
    },{id: "post-two-sum",
      
        title: "Two Sum",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/two-sum/";
        
      },
    },{id: "post-4sum",
      
        title: "4Sum",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/4sum/";
        
      },
    },{id: "post-3sum-closest",
      
        title: "3Sum Closest",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/3sum-closest/";
        
      },
    },{id: "post-3sum",
      
        title: "3Sum",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/3sum/";
        
      },
    },{id: "post-find-and-replace-pattern",
      
        title: "Find and Replace Pattern",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/find-and-replace-pattern/";
        
      },
    },{id: "post-lowest-common-ancestor-with-n-nodes",
      
        title: "Lowest Common Ancestor with N nodes",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/lowest-common-ancestor-with-n-nodes/";
        
      },
    },{id: "post-insight-the-reversal-algorithm",
      
        title: "Insight (The Reversal Algorithm)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/insight-the-reversal-algorithm/";
        
      },
    },{id: "post-regex-matching-finite-state-machine",
      
        title: "Regex Matching – Finite State Machine",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/regex-matching-finite-state-machine/";
        
      },
    },{id: "post-total-hamming-distance",
      
        title: "Total Hamming Distance",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/total-hamming-distance/";
        
      },
    },{id: "post-using-bit-manipulation-to-achieve-operators",
      
        title: "Using bit manipulation to achieve operators",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/using-bit-manipulation-to-achieve-operators/";
        
      },
    },{id: "post-how-to-add-two-numbers-without-add",
      
        title: "How to add two numbers without add()",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/how-to-add-two-numbers-without-add/";
        
      },
    },{id: "post-我想试一试",
      
        title: "我想试一试",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/%E6%88%91%E6%83%B3%E8%AF%95%E4%B8%80%E8%AF%95/";
        
      },
    },{id: "post-permutations",
      
        title: "Permutations",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/permutations/";
        
      },
    },{id: "post-find-medians-from-a-slide-window",
      
        title: "Find medians from a slide window",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/find-medians-from-a-slide-window/";
        
      },
    },{id: "post-maximum-xor-of-two-numbers-in-an-array",
      
        title: "Maximum XOR of Two Numbers in an Array",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/maximum-xor-of-two-numbers-in-an-array/";
        
      },
    },{id: "post-mirror-of-binary-tree",
      
        title: "Mirror of Binary Tree",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/mirror-of-binary-tree/";
        
      },
    },{id: "post-flatten-a-multilevel-doubly-linked-list",
      
        title: "Flatten a Multilevel Doubly Linked List",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/flatten-a-multilevel-doubly-linked-list/";
        
      },
    },{id: "post-flatten-binary-tree-to-linked-list",
      
        title: "Flatten Binary Tree to Linked List",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/flatten-binary-tree-to-linked-list/";
        
      },
    },{id: "post-reverse-linked-list",
      
        title: "Reverse Linked List",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/reverse-linked-list-2/";
        
      },
    },{id: "post-来自网易云音乐的评论",
      
        title: "来自网易云音乐的评论",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/%E6%9D%A5%E8%87%AA%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90%E7%9A%84%E8%AF%84%E8%AE%BA/";
        
      },
    },{id: "post-daily-temperatures",
      
        title: "Daily Temperatures",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/daily-temperatures/";
        
      },
    },{id: "post-circular-queue",
      
        title: "Circular Queue",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/circular-queue/";
        
      },
    },{id: "post-未知疯狂",
      
        title: "未知疯狂",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/%E6%9C%AA%E7%9F%A5%E7%96%AF%E7%8B%82/";
        
      },
    },{id: "post-curiosity",
      
        title: "Curiosity",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/curiosity/";
        
      },
    },{id: "post-miscellaneous",
      
        title: "Miscellaneous",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/miscellaneous/";
        
      },
    },{id: "post-piles-of-boxes",
      
        title: "Piles of Boxes",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/piles-of-boxes/";
        
      },
    },{id: "post-musician",
      
        title: "Musician",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/musician/";
        
      },
    },{id: "post-haskell-moment",
      
        title: "Haskell moment",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/haskell-moment/";
        
      },
    },{id: "post-how-to-swap-two-variables-without-extra-space",
      
        title: "How to swap two variables without extra space",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/how-to-swap-two-variables-without-extra-space/";
        
      },
    },{id: "post-keep-going",
      
        title: "Keep going",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/keep-going/";
        
      },
    },{id: "post-告别",
      
        title: "告别",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/%E5%91%8A%E5%88%AB/";
        
      },
    },{id: "post-shadowsocks-优化",
      
        title: "Shadowsocks 优化",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/shadowsocks-%E4%BC%98%E5%8C%96/";
        
      },
    },{id: "post-随缘食单",
      
        title: "随缘食单",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/%E9%9A%8F%E7%BC%98%E9%A3%9F%E5%8D%95/";
        
      },
    },{id: "post-180-degree-south",
      
        title: "180 degree south",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/180-degree-south/";
        
      },
    },{id: "post-sunset",
      
        title: "Sunset",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/sunset/";
        
      },
    },{id: "post-the-master-algorithm",
      
        title: "The master algorithm",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/the-master-algorithm/";
        
      },
    },{id: "post-bert-based-sentence-scenario-detector",
      
        title: "BERT based sentence scenario detector",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/bert-based-sentence-scenario-detector/";
        
      },
    },{id: "post-more-than-it",
      
        title: "More than it",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/more-than-it/";
        
      },
    },{id: "post-hhkb-keyboard-layout",
      
        title: "HHKB keyboard layout",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/hhkb-keyboard-layout/";
        
      },
    },{id: "post-通用场景识别器",
      
        title: "通用场景识别器",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2019/%E9%80%9A%E7%94%A8%E5%9C%BA%E6%99%AF%E8%AF%86%E5%88%AB%E5%99%A8/";
        
      },
    },{id: "post-隐含语义分析",
      
        title: "隐含语义分析",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E9%9A%90%E5%90%AB%E8%AF%AD%E4%B9%89%E5%88%86%E6%9E%90/";
        
      },
    },{id: "post-virtualenv-pip-update-failure",
      
        title: "Virtualenv pip update failure",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/virtualenv-pip-update-failure/";
        
      },
    },{id: "post-how-to-recapture-my-oculus-home-of-gear-vr-when-i-came-back-china",
      
        title: "How to recapture my Oculus Home of Gear VR when I came back...",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/how-to-recapture-my-oculus-home-of-gear-vr-when-i-came-back-china/";
        
      },
    },{id: "post-how-to-sudo-in-windows",
      
        title: "How to SUDO in Windows",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/how-to-sudo-in-windows/";
        
      },
    },{id: "post-red-brick",
      
        title: "Red Brick",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/red-brick/";
        
      },
    },{id: "post-帝都十日",
      
        title: "帝都十日",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E5%B8%9D%E9%83%BD%E5%8D%81%E6%97%A5/";
        
      },
    },{id: "post-start-windows",
      
        title: "Start Windows",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/start-windows/";
        
      },
    },{id: "post-归来",
      
        title: "归来",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E5%BD%92%E6%9D%A5/";
        
      },
    },{id: "post-see-you-next-year",
      
        title: "See you next year",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/see-you-next-year/";
        
      },
    },{id: "post-magic-subject",
      
        title: "Magic subject",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/magic-subject/";
        
      },
    },{id: "post-万万没想到-我还是拿到了微软的offer",
      
        title: "万万没想到 我还是拿到了微软的Offer…",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E4%B8%87%E4%B8%87%E6%B2%A1%E6%83%B3%E5%88%B0-%E6%88%91%E8%BF%98%E6%98%AF%E6%8B%BF%E5%88%B0%E4%BA%86%E5%BE%AE%E8%BD%AF%E7%9A%84offer/";
        
      },
    },{id: "post-one-year-in-melbourne",
      
        title: "One year in Melbourne",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/one-year-in-melbourne/";
        
      },
    },{id: "post-elfsong-has-disconnected",
      
        title: "Elfsong has disconnected",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/elfsong-has-disconnected/";
        
      },
    },{id: "post-validate-ip-address",
      
        title: "Validate IP address",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/validate-ip-address/";
        
      },
    },{id: "post-be-a-survivor-of-a-disaster",
      
        title: "Be a survivor of a disaster",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/be-a-survivor-of-a-disaster/";
        
      },
    },{id: "post-一个人的江湖",
      
        title: "一个人的江湖",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E4%B8%80%E4%B8%AA%E4%BA%BA%E7%9A%84%E6%B1%9F%E6%B9%96/";
        
      },
    },{id: "post-memory",
      
        title: "Memory",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/memory/";
        
      },
    },{id: "post-小惊喜",
      
        title: "小惊喜",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E5%B0%8F%E6%83%8A%E5%96%9C/";
        
      },
    },{id: "post-若有天我不复勇往",
      
        title: "若有天我不复勇往",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E8%8B%A5%E6%9C%89%E5%A4%A9%E6%88%91%E4%B8%8D%E5%A4%8D%E5%8B%87%E5%BE%80/";
        
      },
    },{id: "post-in-the-world-of-locked-doors",
      
        title: "In the world of locked doors",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/in-the-world-of-locked-doors/";
        
      },
    },{id: "post-tensorflow-recurrent-neural-network-lstm",
      
        title: "Tensorflow Recurrent Neural Network – LSTM",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/tensorflow-recurrent-neural-network-lstm/";
        
      },
    },{id: "post-tensorflow-mnist-double-layer-model",
      
        title: "Tensorflow MNIST Double Layer Model",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/tensorflow-mnist-double-layer-model/";
        
      },
    },{id: "post-my-table",
      
        title: "My table",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/1294/";
        
      },
    },{id: "post-兑现承诺是否也算是一种预言",
      
        title: "兑现承诺是否也算是一种预言？",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E5%85%91%E7%8E%B0%E6%89%BF%E8%AF%BA%E6%98%AF%E5%90%A6%E4%B9%9F%E7%AE%97%E6%98%AF%E4%B8%80%E7%A7%8D%E9%A2%84%E8%A8%80/";
        
      },
    },{id: "post-st-kilda",
      
        title: "St Kilda",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/st-kilda/";
        
      },
    },{id: "post-sin",
      
        title: "Sin",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/sin/";
        
      },
    },{id: "post-891-sum-of-subsequence-widths",
      
        title: "891. Sum of Subsequence Widths",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/891-sum-of-subsequence-widths/";
        
      },
    },{id: "post-unimelb-timetable",
      
        title: "Unimelb Timetable",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/unimelb-timetable/";
        
      },
    },{id: "post-ready-player-one",
      
        title: "Ready Player One",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/ready-player-one/";
        
      },
    },{id: "post-maximum-product-of-word-lengths",
      
        title: "Maximum Product of Word Lengths",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/maximum-product-of-word-lengths/";
        
      },
    },{id: "post-find-all-numbers-disappeared-in-an-array",
      
        title: "Find All Numbers Disappeared in an Array",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/find-all-numbers-disappeared-in-an-array/";
        
      },
    },{id: "post-勇敢",
      
        title: "勇敢",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E5%8B%87%E6%95%A2/";
        
      },
    },{id: "post-don-39-t-panic",
      
        title: "Don&#39;t Panic",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/dont-panic/";
        
      },
    },{id: "post-生命游戏",
      
        title: "生命游戏",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E7%94%9F%E5%91%BD%E6%B8%B8%E6%88%8F/";
        
      },
    },{id: "post-由爬楼梯问题引发的思考",
      
        title: "由爬楼梯问题引发的思考",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E7%94%B1%E7%88%AC%E6%A5%BC%E6%A2%AF%E9%97%AE%E9%A2%98%E5%BC%95%E5%8F%91%E7%9A%84%E6%80%9D%E8%80%83/";
        
      },
    },{id: "post-星河",
      
        title: "星河",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E6%98%9F%E6%B2%B3/";
        
      },
    },{id: "post-虚拟",
      
        title: "虚拟",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E8%99%9A%E6%8B%9F/";
        
      },
    },{id: "post-来自小姐姐的鸡汤",
      
        title: "来自小姐姐的鸡汤",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E6%9D%A5%E8%87%AA%E5%B0%8F%E5%A7%90%E5%A7%90%E7%9A%84%E9%B8%A1%E6%B1%A4/";
        
      },
    },{id: "post-愿谁记得谁-在最好的年岁",
      
        title: "愿谁记得谁 在最好的年岁",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E6%84%BF%E8%B0%81%E8%AE%B0%E5%BE%97%E8%B0%81-%E5%9C%A8%E6%9C%80%E5%A5%BD%E7%9A%84%E5%B9%B4%E5%B2%81/";
        
      },
    },{id: "post-风沙来-就走进风沙里",
      
        title: "风沙来 就走进风沙里",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/%E9%A3%8E%E6%B2%99%E6%9D%A5-%E5%B0%B1%E8%B5%B0%E8%BF%9B%E9%A3%8E%E6%B2%99%E9%87%8C/";
        
      },
    },{id: "post-绝艺如君天下少-闲人似我世间无",
      
        title: "绝艺如君天下少 闲人似我世间无",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E7%BB%9D%E8%89%BA%E5%A6%82%E5%90%9B%E5%A4%A9%E4%B8%8B%E5%B0%91-%E9%97%B2%E4%BA%BA%E4%BC%BC%E6%88%91%E4%B8%96%E9%97%B4%E6%97%A0/";
        
      },
    },{id: "post-游必有方",
      
        title: "游必有方",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E6%B8%B8%E5%BF%85%E6%9C%89%E6%96%B9/";
        
      },
    },{id: "post-墨尔本晴",
      
        title: "墨尔本晴",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E5%A2%A8%E5%B0%94%E6%9C%AC%E6%99%B4/";
        
      },
    },{id: "post-世界在下沉-我们在狂欢",
      
        title: "世界在下沉 我们在狂欢",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E4%B8%96%E7%95%8C%E5%9C%A8%E4%B8%8B%E6%B2%89-%E6%88%91%E4%BB%AC%E5%9C%A8%E7%8B%82%E6%AC%A2/";
        
      },
    },{id: "post-隐写术",
      
        title: "隐写术",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/yinxieshu/";
        
      },
    },{id: "post-隐形战争",
      
        title: "隐形战争",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E9%9A%90%E5%BD%A2%E6%88%98%E4%BA%89/";
        
      },
    },{id: "post-没有奇迹",
      
        title: "没有奇迹",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E6%B2%A1%E6%9C%89%E5%A5%87%E8%BF%B9/";
        
      },
    },{id: "post-struggle",
      
        title: "struggle",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/struggle/";
        
      },
    },{id: "post-主页劫持恢复作业",
      
        title: "主页劫持恢复作业",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E4%B8%BB%E9%A1%B5%E5%8A%AB%E6%8C%81%E6%81%A2%E5%A4%8D%E4%BD%9C%E4%B8%9A/";
        
      },
    },{id: "post-google-authenticator",
      
        title: "Google Authenticator",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/google-authenticator/";
        
      },
    },{id: "post-python-retrying-重试库",
      
        title: "python – retrying 重试库",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/python-retrying-%E9%87%8D%E8%AF%95%E5%BA%93/";
        
      },
    },{id: "post-micropython-上手",
      
        title: "MicroPython 上手",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/micropython-%E4%B8%8A%E6%89%8B/";
        
      },
    },{id: "post-多言数穷-不如守中",
      
        title: "多言数穷 不如守中",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E5%A4%9A%E8%A8%80%E6%95%B0%E7%A9%B7-%E4%B8%8D%E5%A6%82%E5%AE%88%E4%B8%AD/";
        
      },
    },{id: "post-sigo-sí-o-sí",
      
        title: "Sigo sí o sí",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/sigo-si-o-si/";
        
      },
    },{id: "post-树莓派使用ngrok进行内网穿透",
      
        title: "树莓派使用Ngrok进行内网穿透",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E6%A0%91%E8%8E%93%E6%B4%BE%E4%BD%BF%E7%94%A8ngrok%E8%BF%9B%E8%A1%8C%E5%86%85%E7%BD%91%E7%A9%BF%E9%80%8F/";
        
      },
    },{id: "post-机器学习入门",
      
        title: "机器学习入门",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%85%A5%E9%97%A8/";
        
      },
    },{id: "post-micropython-试用",
      
        title: "Micropython 试用",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/micropython-%E8%AF%95%E7%94%A8/";
        
      },
    },{id: "post-似有故人来",
      
        title: "似有故人来",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E4%BC%BC%E6%9C%89%E6%95%85%E4%BA%BA%E6%9D%A5/";
        
      },
    },{id: "post-别急",
      
        title: "别急",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E5%88%AB%E6%80%A5/";
        
      },
    },{id: "post-秩序",
      
        title: "秩序",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E7%A7%A9%E5%BA%8F/";
        
      },
    },{id: "post-tcp-bbr试用体验",
      
        title: "TCP BBR试用体验",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/tcp-bbr%E8%AF%95%E7%94%A8%E4%BD%93%E9%AA%8C/";
        
      },
    },{id: "post-发挥所长-改变世界",
      
        title: "发挥所长 改变世界",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E5%8F%91%E6%8C%A5%E6%89%80%E9%95%BF-%E6%94%B9%E5%8F%98%E4%B8%96%E7%95%8C/";
        
      },
    },{id: "post-自由落体",
      
        title: "自由落体",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E8%87%AA%E7%94%B1%E8%90%BD%E4%BD%93-2/";
        
      },
    },{id: "post-ofo-vs-mobike-两大门派横向测评",
      
        title: "ofo vs mobike — 两大门派横向测评",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/ofo-vs-mobike-%E4%B8%A4%E5%A4%A7%E9%97%A8%E6%B4%BE%E6%A8%AA%E5%90%91%E6%B5%8B%E8%AF%84/";
        
      },
    },{id: "post-终端趣事-lolcat",
      
        title: "终端趣事——lolcat",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E7%BB%88%E7%AB%AF%E8%B6%A3%E4%BA%8B-lolcat/";
        
      },
    },{id: "post-编程原本-读书笔记",
      
        title: "《编程原本》读书笔记",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E7%BC%96%E7%A8%8B%E5%8E%9F%E6%9C%AC-%E8%AF%BB%E4%B9%A6%E7%AC%94%E8%AE%B0/";
        
      },
    },{id: "post-jar-of-love",
      
        title: "Jar of love",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/jar-of-love/";
        
      },
    },{id: "post-三星adv考试题-tunnel-construction",
      
        title: "三星ADV考试题(Tunnel Construction)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E4%B8%89%E6%98%9Fadv%E8%80%83%E8%AF%95%E5%8E%9F%E9%A2%98-tunnel-construction/";
        
      },
    },{id: "post-python生成器-generator",
      
        title: "python生成器(generator)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/python%E7%94%9F%E6%88%90%E5%99%A8generator/";
        
      },
    },{id: "post-python黑魔法-一行实现多线程",
      
        title: "Python黑魔法——一行实现多线程",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/python%E9%BB%91%E9%AD%94%E6%B3%95-%E4%B8%80%E8%A1%8C%E5%AE%9E%E7%8E%B0%E5%A4%9A%E7%BA%BF%E7%A8%8B/";
        
      },
    },{id: "post-leetcode-461-hamming-distance",
      
        title: "Leetcode 461. Hamming Distance",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/leetcode-461-hamming-distance/";
        
      },
    },{id: "post-我的站点是不是有点low啊",
      
        title: "我的站点是不是有点Low啊~~",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E6%88%91%E7%9A%84%E7%AB%99%E7%82%B9%E6%98%AF%E4%B8%8D%E6%98%AF%E6%9C%89%E7%82%B9low%E5%95%8A/";
        
      },
    },{id: "post-锐速是个好东西",
      
        title: "锐速是个好东西",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E9%94%90%E9%80%9F%E6%98%AF%E4%B8%AA%E5%A5%BD%E4%B8%9C%E8%A5%BF/";
        
      },
    },{id: "post-终极terminal",
      
        title: "终极Terminal",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E7%BB%88%E6%9E%81terminal/";
        
      },
    },{id: "post-少数派报告-树莓派搭建tor匿名站点",
      
        title: "少数派报告——树莓派搭建Tor匿名站点",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E6%A0%91%E8%8E%93%E6%B4%BE%E6%90%AD%E5%BB%BAtor%E5%8C%BF%E5%90%8D%E7%AB%99%E7%82%B9/";
        
      },
    },{id: "post-linux渗透提权脚本",
      
        title: "Linux渗透提权脚本",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/linux%E6%B8%97%E9%80%8F%E6%8F%90%E6%9D%83%E8%84%9A%E6%9C%AC/";
        
      },
    },{id: "post-基于ricequant的一个量化分析公式实现",
      
        title: "基于Ricequant的一个量化分析公式实现",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E5%9F%BA%E4%BA%8Ericequant%E7%9A%84%E4%B8%80%E4%B8%AA%E9%87%8F%E5%8C%96%E5%88%86%E6%9E%90%E5%85%AC%E5%BC%8F%E5%AE%9E%E7%8E%B0/";
        
      },
    },{id: "post-debian下zsh的安装",
      
        title: "Debian下Zsh的安装",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/debian%E4%B8%8Bzsh%E7%9A%84%E5%AE%89%E8%A3%85/";
        
      },
    },{id: "post-mdk3的安装",
      
        title: "mdk3的安装",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/mdk3%E7%9A%84%E5%AE%89%E8%A3%85/";
        
      },
    },{id: "post-seanna语音合成支持",
      
        title: "Seanna语音合成支持",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/seanna%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90%E6%94%AF%E6%8C%81/";
        
      },
    },{id: "post-全频带阻塞",
      
        title: "全频带阻塞",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E5%85%A8%E9%A2%91%E5%B8%A6%E9%98%BB%E5%A1%9E/";
        
      },
    },{id: "post-隐藏",
      
        title: "隐藏",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/%E9%9A%90%E8%97%8F/";
        
      },
    },{id: "post-what-39-s-comes-easy-won-39-t-last-what-lasts-won-39-t-come-easy",
      
        title: "What&#39;s comes easy won&#39;t last; What lasts won&#39;t come easy",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/whats-comes-easy-wont-last-what-lasts-wont-come-easy/";
        
      },
    },{id: "post-煎蛋网妹子图爬虫",
      
        title: "煎蛋网妹子图爬虫",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E7%85%8E%E8%9B%8B%E7%BD%91%E5%A6%B9%E5%AD%90%E5%9B%BE%E7%88%AC%E8%99%AB/";
        
      },
    },{id: "post-ssh登陆器",
      
        title: "SSH登陆器",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/sshbruter/";
        
      },
    },{id: "post-曾经的我们像梦一样",
      
        title: "曾经的我们像梦一样",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E6%9B%BE%E7%BB%8F%E7%9A%84%E6%88%91%E4%BB%AC%E5%83%8F%E6%A2%A6%E4%B8%80%E6%A0%B7/";
        
      },
    },{id: "post-屠龙",
      
        title: "屠龙",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E5%B1%A0%E9%BE%99/";
        
      },
    },{id: "post-无畏",
      
        title: "无畏",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E6%97%A0%E7%95%8F/";
        
      },
    },{id: "post-最熟悉的陌生",
      
        title: "最熟悉的陌生",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E6%9C%80%E7%86%9F%E6%82%89%E7%9A%84%E9%99%8C%E7%94%9F/";
        
      },
    },{id: "post-断剑重铸之时-骑士归来之日",
      
        title: "断剑重铸之时 骑士归来之日",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E6%96%AD%E5%89%91%E9%87%8D%E9%93%B8%E4%B9%8B%E6%97%B6-%E9%AA%91%E5%A3%AB%E5%BD%92%E6%9D%A5%E4%B9%8B%E6%97%A5/";
        
      },
    },{id: "post-自叹弗如",
      
        title: "自叹弗如",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%87%AA%E5%8F%B9%E5%BC%97%E5%A6%82/";
        
      },
    },{id: "post-这也算是一次实习经历吧",
      
        title: "这也算是一次实习经历吧",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%BF%99%E4%B9%9F%E7%AE%97%E6%98%AF%E4%B8%80%E6%AC%A1%E5%AE%9E%E4%B9%A0%E7%BB%8F%E5%8E%86%E5%90%A7/";
        
      },
    },{id: "post-by-the-void-beyond-the-void",
      
        title: "by the void， beyond the void",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/by-the-void-beyond-the-void/";
        
      },
    },{id: "post-windows静默执行system-command",
      
        title: "Windows静默执行system command",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/windows%E9%9D%99%E9%BB%98%E6%89%A7%E8%A1%8Csystem-command/";
        
      },
    },{id: "post-关于socket-io的一个大坑",
      
        title: "关于Socket.io的一个大坑",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E5%85%B3%E4%BA%8Esocket-io%E7%9A%84%E4%B8%80%E4%B8%AA%E5%A4%A7%E5%9D%91/";
        
      },
    },{id: "post-基于websocket的即时通讯工具",
      
        title: "基于Websocket的即时通讯工具",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E5%9F%BA%E4%BA%8Ewebsocket%E7%9A%84%E5%8D%B3%E6%97%B6%E9%80%9A%E8%AE%AF%E5%B7%A5%E5%85%B7/";
        
      },
    },{id: "post-离开阿里",
      
        title: "离开阿里",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E7%A6%BB%E5%BC%80%E9%98%BF%E9%87%8C/";
        
      },
    },{id: "post-transmissions使用小结",
      
        title: "Transmissions使用小结",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/transmissions%E4%BD%BF%E7%94%A8%E5%B0%8F%E7%BB%93/";
        
      },
    },{id: "post-mikumikudance初体验",
      
        title: "MikumikuDance初体验",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/mikumikudance%E5%88%9D%E4%BD%93%E9%AA%8C/";
        
      },
    },{id: "post-终末之诗-the-end",
      
        title: "终末之诗（The End）",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E7%BB%88%E6%9C%AB%E4%B9%8B%E8%AF%97-the-end/";
        
      },
    },{id: "post-赢了鼓掌-输了抬头-这才是比赛",
      
        title: "赢了鼓掌 输了抬头 这才是比赛",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%B5%A2%E4%BA%86%E9%BC%93%E6%8E%8C-%E8%BE%93%E4%BA%86%E6%8A%AC%E5%A4%B4-%E8%BF%99%E6%89%8D%E6%98%AF%E6%AF%94%E8%B5%9B/";
        
      },
    },{id: "post-和谐图片检查工具",
      
        title: "和谐图片检查工具",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%89%B2%E6%83%85%E5%9B%BE%E7%89%87%E6%A3%80%E6%9F%A5%E5%B7%A5%E5%85%B7/";
        
      },
    },{id: "post-高可匿代理获取工具",
      
        title: "高可匿代理获取工具",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E9%AB%98%E5%8F%AF%E5%8C%BF%E4%BB%A3%E7%90%86%E8%8E%B7%E5%8F%96%E5%B7%A5%E5%85%B7/";
        
      },
    },{id: "post-pdf文件合并工具",
      
        title: "PDF文件合并工具",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/pdf%E6%96%87%E4%BB%B6%E5%90%88%E5%B9%B6%E5%B7%A5%E5%85%B7/";
        
      },
    },{id: "post-亲爱的-这是你在阿里的第24天-享受你的这一天",
      
        title: "亲爱的，这是你在阿里的第24天，享受你的这一天！",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E4%BA%B2%E7%88%B1%E7%9A%84-%E8%BF%99%E6%98%AF%E4%BD%A0%E5%9C%A8%E9%98%BF%E9%87%8C%E7%9A%84%E7%AC%AC24%E5%A4%A9-%E4%BA%AB%E5%8F%97%E4%BD%A0%E7%9A%84%E8%BF%99%E4%B8%80%E5%A4%A9/";
        
      },
    },{id: "post-于无声处听惊雷",
      
        title: "于无声处听惊雷",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E4%BA%8E%E6%97%A0%E5%A3%B0%E5%A4%84%E5%90%AC%E6%83%8A%E9%9B%B7/";
        
      },
    },{id: "post-风林火山",
      
        title: "风林火山",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E9%A3%8E%E6%9E%97%E7%81%AB%E5%B1%B1/";
        
      },
    },{id: "post-又要到周末了",
      
        title: "又要到周末了",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E5%8F%88%E8%A6%81%E5%88%B0%E5%91%A8%E6%9C%AB%E4%BA%86/";
        
      },
    },{id: "post-杭城七日",
      
        title: "杭城七日",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E6%9D%AD%E5%9F%8E%E4%B8%83%E6%97%A5/";
        
      },
    },{id: "post-新的旅程",
      
        title: "新的旅程",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E6%96%B0%E7%9A%84%E6%97%85%E7%A8%8B/";
        
      },
    },{id: "post-网络视频串流实时输出原型设计",
      
        title: "网络视频串流实时输出原型设计",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E7%BD%91%E7%BB%9C%E8%A7%86%E9%A2%91%E4%B8%B2%E6%B5%81%E5%AE%9E%E6%97%B6%E8%BE%93%E5%87%BA%E5%8E%9F%E5%9E%8B%E8%AE%BE%E8%AE%A1/";
        
      },
    },{id: "post-the-imitation-game",
      
        title: "The Imitation Game",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/the-imitation-game/";
        
      },
    },{id: "post-电子雷管制作方案",
      
        title: "电子雷管制作方案",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E7%94%B5%E5%AD%90%E9%9B%B7%E7%AE%A1%E5%88%B6%E4%BD%9C%E6%96%B9%E6%A1%88/";
        
      },
    },{id: "post-centos-7-2下安装mariadb的步骤",
      
        title: "Centos 7.2下安装MariaDB的步骤",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/centos-7-2%E4%B8%8B%E5%AE%89%E8%A3%85mariadb%E7%9A%84%E6%AD%A5%E9%AA%A4/";
        
      },
    },{id: "post-lofter爬虫",
      
        title: "Lofter爬虫",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/lofter%E7%88%AC%E8%99%AB/";
        
      },
    },{id: "post-将树莓派打造成一台智能路由器",
      
        title: "将树莓派打造成一台智能路由器",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/test/";
        
      },
    },{id: "post-若有天我不复勇往",
      
        title: "若有天我不复勇往",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%8B%A5%E6%9C%89%E5%A4%A9%E6%88%91%E4%B8%8D%E5%A4%8D%E5%8B%87%E5%BE%80-%E8%83%BD%E5%90%A6%E5%9D%9A%E6%8C%81%E8%B5%B0%E5%AE%8C%E8%BF%99%E4%B8%80%E5%9C%BA/";
        
      },
    },{id: "post-skyhook的相关文档",
      
        title: "SkyHook的相关文档",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/skyhook%E7%9A%84%E7%9B%B8%E5%85%B3%E6%96%87%E6%A1%A3/";
        
      },
    },{id: "post-腾讯实习日记-2016-5-26",
      
        title: "腾讯实习日记【2016.5.26】",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%85%BE%E8%AE%AF%E5%AE%9E%E4%B9%A0%E6%97%A5%E8%AE%B0-2016-5-26/";
        
      },
    },{id: "post-pywin32-win32com安装错误解决方法",
      
        title: "PyWin32/Win32com安装错误解决方法",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/pywin32win32com%E5%AE%89%E8%A3%85%E9%94%99%E8%AF%AF%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95/";
        
      },
    },{id: "post-南途列车",
      
        title: "南途列车",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E5%8D%97%E9%80%94%E5%88%97%E8%BD%A6/";
        
      },
    },{id: "post-阶段性总结",
      
        title: "阶段性总结",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E9%98%B6%E6%AE%B5%E6%80%A7%E6%80%BB%E7%BB%93/";
        
      },
    },{id: "post-python爬虫的工具列表整理",
      
        title: "Python爬虫的工具列表整理",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/python%E7%88%AC%E8%99%AB%E7%9A%84%E5%B7%A5%E5%85%B7%E5%88%97%E8%A1%A8%E6%95%B4%E7%90%86/";
        
      },
    },{id: "post-机器学习的分类",
      
        title: "机器学习的分类",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E7%9A%84%E5%88%86%E7%B1%BB/";
        
      },
    },{id: "post-腾讯实习日记-2016-03-29-2016-04-11",
      
        title: "腾讯实习日记【2016.03.29-2016.04.11】",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%85%BE%E8%AE%AF%E5%AE%9E%E4%B9%A0%E6%97%A5%E8%AE%B0-2016-03-29-2016-04-11/";
        
      },
    },{id: "post-腾讯实习日记-2016-3-27-2016-3-28",
      
        title: "腾讯实习日记【2016.3.27-2016.3.28】",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%85%BE%E8%AE%AF%E5%AE%9E%E4%B9%A0%E6%97%A5%E8%AE%B0-2016-3-27-2016-3-28/";
        
      },
    },{id: "post-腾讯实习日记-2016-3-26",
      
        title: "腾讯实习日记【2016.3.26】",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%85%BE%E8%AE%AF%E5%AE%9E%E4%B9%A0%E6%97%A5%E8%AE%B0-2016-3-26/";
        
      },
    },{id: "post-腾讯实习日记-2016-3-21-2016-3-26",
      
        title: "腾讯实习日记【2016.3.21-2016.3.26】",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%85%BE%E8%AE%AF%E5%AE%9E%E4%B9%A0%E6%97%A5%E8%AE%B0-2016-3-21-2016-3-26/";
        
      },
    },{id: "post-腾讯实习日记-2016-3-18-2016-3-19-and-2016-3-20",
      
        title: "腾讯实习日记【2016.3.18-2016.3.19 and 2016.3.20】",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%85%BE%E8%AE%AF%E5%AE%9E%E4%B9%A0%E6%97%A5%E8%AE%B0-2016-3-18-2016-3-19-and-2016-3-20/";
        
      },
    },{id: "post-游走在黑暗中的暗夜精灵",
      
        title: "《游走在黑暗中的暗夜精灵》",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E6%B8%B8%E8%B5%B0%E5%9C%A8%E9%BB%91%E6%9A%97%E4%B8%AD%E7%9A%84%E6%9A%97%E5%A4%9C%E7%B2%BE%E7%81%B5/";
        
      },
    },{id: "post-腾讯实习日记-2016-3-15-3-17",
      
        title: "腾讯实习日记【2016.3.15-3.17】",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%85%BE%E8%AE%AF%E5%AE%9E%E4%B9%A0%E6%97%A5%E8%AE%B0-2016-3-15-3-17/";
        
      },
    },{id: "post-腾讯实习日记-2016-3-14",
      
        title: "腾讯实习日记【2016.3.14】",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%85%BE%E8%AE%AF%E5%AE%9E%E4%B9%A0%E6%97%A5%E8%AE%B0-2016-3-14/";
        
      },
    },{id: "post-shell-查找与替换",
      
        title: "Shell：查找与替换",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/shell-%E6%9F%A5%E6%89%BE%E4%B8%8E%E6%9B%BF%E6%8D%A2/";
        
      },
    },{id: "post-腾讯实习日记-2016-3-12-2016-3-13",
      
        title: "腾讯实习日记【2016.3.12-2016.3.13】",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%85%BE%E8%AE%AF%E5%AE%9E%E4%B9%A0%E6%97%A5%E8%AE%B0-2016-3-12-2016-3-13/";
        
      },
    },{id: "post-腾讯实习日记-2016-3-11",
      
        title: "腾讯实习日记【2016.3.11】",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%85%BE%E8%AE%AF%E5%AE%9E%E4%B9%A0%E6%97%A5%E8%AE%B0-2016-3-11/";
        
      },
    },{id: "post-随便说点什么",
      
        title: "随便说点什么",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E9%9A%8F%E4%BE%BF%E8%AF%B4%E7%82%B9%E4%BB%80%E4%B9%88/";
        
      },
    },{id: "post-大学到底要不要去上课呢",
      
        title: "大学到底要不要去上课呢？",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E5%A4%A7%E5%AD%A6%E5%88%B0%E5%BA%95%E8%A6%81%E4%B8%8D%E8%A6%81%E5%8E%BB%E4%B8%8A%E8%AF%BE%E5%91%A2/";
        
      },
    },{id: "post-苦修",
      
        title: "苦修",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%8B%A6%E4%BF%AE/";
        
      },
    },{id: "post-自由落体",
      
        title: "自由落体",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%87%AA%E7%94%B1%E8%90%BD%E4%BD%93/";
        
      },
    },{id: "post-easy-come-easy-go",
      
        title: "Easy Come Easy Go",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E6%98%AF%E7%A7%8D%E8%87%AA%E7%94%B1-%E6%97%A0%E9%A1%BB%E7%90%86%E7%94%B1/";
        
      },
    },{id: "post-求两个日期间相隔的天数",
      
        title: "求两个日期间相隔的天数",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E6%B1%82%E4%B8%A4%E4%B8%AA%E6%97%A5%E6%9C%9F%E9%97%B4%E7%9B%B8%E9%9A%94%E7%9A%84%E5%A4%A9%E6%95%B0/";
        
      },
    },{id: "post-观诸兵书-无出孙武",
      
        title: "观诸兵书 无出孙武",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E8%A7%82%E8%AF%B8%E5%85%B5%E4%B9%A6-%E6%97%A0%E5%87%BA%E5%AD%99%E6%AD%A6/";
        
      },
    },{id: "post-天才在左-疯子在右",
      
        title: "天才在左 疯子在右",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E5%A4%A9%E6%89%8D%E5%9C%A8%E5%B7%A6-%E7%96%AF%E5%AD%90%E5%9C%A8%E5%8F%B3/";
        
      },
    },{id: "post-i-merely-wanna-install-numpy-for-windows-without-vc",
      
        title: "I merely wanna install numpy for windows without VC",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/i-merely-wanna-install-numpy-for-windows-without-vc/";
        
      },
    },{id: "post-compare-version-numbers",
      
        title: "Compare Version Numbers",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/compare-version-numbers/";
        
      },
    },{id: "post-reverse-linked-list",
      
        title: "Reverse Linked List",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/reverse-linked-list/";
        
      },
    },{id: "post-climbing-stairs",
      
        title: "Climbing Stairs",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/climbing-stairs/";
        
      },
    },{id: "post-word-frequency",
      
        title: "Word Frequency",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/word-frequency/";
        
      },
    },{id: "post-just-a-little-tips-about-friendship",
      
        title: "Just a little tips about friendship",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/just-a-little-tips-about-friendship/";
        
      },
    },{id: "post-女诗人",
      
        title: "女诗人",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E5%A5%B3%E8%AF%97%E4%BA%BA/";
        
      },
    },{id: "post-向疯子致敬",
      
        title: "向疯子致敬",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E5%90%91%E7%96%AF%E5%AD%90%E8%87%B4%E6%95%AC/";
        
      },
    },{id: "post-精准-优雅",
      
        title: "精准 优雅",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E7%B2%BE%E5%87%86-%E4%BC%98%E9%9B%85/";
        
      },
    },{id: "post-excel-sheet-column-title",
      
        title: "Excel Sheet Column Title",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/excel-sheet-column-title/";
        
      },
    },{id: "post-power-of-three",
      
        title: "Power of Three",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/power-of-three/";
        
      },
    },{id: "post-maximum-depth-of-binary-tree",
      
        title: "Maximum Depth of Binary Tree",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/maximum-depth-of-binary-tree/";
        
      },
    },{id: "post-contains-duplicate",
      
        title: "Contains Duplicate",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/contains-duplicate/";
        
      },
    },{id: "post-power-of-two",
      
        title: "Power of two",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/power-of-two/";
        
      },
    },{id: "post-ugly-number",
      
        title: "Ugly number",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/ugly-number-2/";
        
      },
    },{id: "post-ugly-number-ii",
      
        title: "Ugly number II",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/ugly-number/";
        
      },
    },{id: "post-bulls-and-cows",
      
        title: "Bulls and Cows",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/bulls-and-cows/";
        
      },
    },{id: "post-google镜像站列表",
      
        title: "Google镜像站列表",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/google%E9%95%9C%E5%83%8F%E7%AB%99%E5%88%97%E8%A1%A8/";
        
      },
    },{id: "post-美好时光",
      
        title: "美好时光",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E7%BE%8E%E5%A5%BD%E6%97%B6%E5%85%89/";
        
      },
    },{id: "post-my-first-article-of-wordpress",
      
        title: "My first article of WordPress",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2016/%E6%88%91%E7%9A%84%E7%AC%AC%E4%B8%80%E7%AF%87wordpress%E6%96%87%E7%AB%A0/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-i-was-invited-to-serve-on-a-pc-member-of-clef-22",
          title: 'I was invited to serve on a PC member of CLEF’22.',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-present-our-work-on-sdsc-data-science-for-industry-amp-amp-demo-day",
          title: 'I was invited to present our work on SDSC Data Science for Industry...',
          description: "",
          section: "News",},{id: "news-our-paper-nus-ids-at-checkthat-2022-identifying-check-worthiness-of-tweets-using-checkthat5-has-been-accepted-to-ceur-ws-22",
          title: 'Our paper “NUS-IDS at CheckThat!2022: Identifying Check-worthiness of Tweets using CheckthaT5” has been...',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-present-our-work-at-university-of-bologna-italy",
          title: 'I was invited to present Our Work at University of Bologna, Italy.',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-the-the-2nd-international-research-workshop-in-computer-science-and-information-systems-oct-14-16-in-phuket-thailand-co-organized-by-psu-and-nus",
          title: 'I gave a talk on the “The 2nd International Research Workshop in Computer...',
          description: "",
          section: "News",},{id: "news-our-paper-generating-reflective-questions-for-engaging-gallery-visitors-in-artmuse-has-been-accepted-to-the-aaai-23-demonstrations-program",
          title: 'Our paper “Generating Reflective Questions for Engaging Gallery Visitors in ArtMuse” has been...',
          description: "",
          section: "News",},{id: "news-our-team-risk-prediction-modelling-for-central-line-associated-blood-stream-infections-clabsi-won-the-first-runner-up-in-sg-healthcare-al-datathon-amp-amp-expo-2022",
          title: 'Our team “Risk prediction modelling for central line associated blood stream infections (CLABSI)”...',
          description: "",
          section: "News",},{id: "news-our-paper-constituency-informed-and-constituency-constrained-extractive-question-answering-with-heterogeneous-graph-transformer-has-been-accepted-to-tldks-2023",
          title: 'Our paper “Constituency-informed and Constituency-constrained Extractive Question Answering with Heterogeneous Graph Transformer” has...',
          description: "",
          section: "News",},{id: "news-our-paper-identifying-checkworthy-cure-claims-on-twitter-has-been-accepted-to-the-thewebconf2023-www",
          title: 'Our paper “Identifying Checkworthy CURE Claims on Twitter” has been accepted to the...',
          description: "",
          section: "News",},{id: "news-i-attended-aaai23-in-washington-dc",
          title: 'I attended AAAI23 in Washington, DC.',
          description: "",
          section: "News",},{id: "news-i-attended-emnlp-24-at-resorts-world-convention-centre-singapore",
          title: 'I attended EMNLP’24 at Resorts World Convention Centre, Singapore.',
          description: "",
          section: "News",},{id: "news-our-paper-from-static-to-dynamic-knowledge-metabolism-for-large-language-models-has-been-accepted-to-aaai-24",
          title: 'Our paper ‘From Static to Dynamic: Knowledge Metabolism for Large Language Models’ has...',
          description: "",
          section: "News",},{id: "news-our-paper-chain-of-thought-improves-text-generation-with-cititations-has-been-accepted-to-aaai-24",
          title: 'Our paper ‘Chain-of-Thought Improves Text Generation with Cititations’ has been accepted to AAAI’24...',
          description: "",
          section: "News",},{id: "news-we-finished-our-new-paper-mercury-an-efficiency-benchmark-for-llm-code-synthesis",
          title: 'We finished our new paper ‘Mercury: An Efficiency Benchmark for LLM Code Synthesis’....',
          description: "",
          section: "News",},{id: "news-i-attended-aaai-24-in-vancouver-canada",
          title: 'I attended AAAI’24 in Vancouver, Canada.',
          description: "",
          section: "News",},{id: "news-i-gave-an-oral-presentation-on-aaai-24",
          title: 'I gave an oral presentation on AAAI’24.',
          description: "",
          section: "News",},{id: "news-i-attended-the-webconf-24-in-sentosa-singapore",
          title: 'I attended The WebConf’24 in Sentosa, Singapore.',
          description: "",
          section: "News",},{id: "news-i-was-nominated-as-a-neurips-24-reviewer",
          title: 'I was nominated as a NeurIPS’24 reviewer.',
          description: "",
          section: "News",},{id: "news-we-completed-our-new-paper-committee-mitigating-llm-bias-through-multi-agent-proposal-and-vote",
          title: 'We completed our new paper ‘Committee: Mitigating LLM Bias through Multi-agent Proposal and...',
          description: "",
          section: "News",},{id: "news-i-was-nominated-as-an-iclr-25-reviewer",
          title: 'I was nominated as an ICLR’25 reviewer.',
          description: "",
          section: "News",},{id: "news-our-paper-counseling-responses-for-mental-health-forum-questions-with-early-maladaptive-schema-prediction-has-been-accepted-to-eaci-24",
          title: 'Our paper “Counseling Responses for Mental Health Forum Questions with Early Maladaptive Schema...',
          description: "",
          section: "News",},{id: "news-our-paper-mercury-a-code-efficiency-benchmark-for-code-large-language-models-has-been-accepted-to-neurips-24-track-datasets-and-benchmarks",
          title: 'Our paper “Mercury: A Code Efficiency Benchmark for Code Large Language Models” has...',
          description: "",
          section: "News",},{id: "news-i-was-nominated-as-an-aistats-25-reviewer",
          title: 'I was nominated as an AISTATS’25 reviewer.',
          description: "",
          section: "News",},{id: "news-our-team-black-mesa-participated-in-the-singapore-ai-ctf-and-achieved-an-23rd-place-out-of-more-than-500-teams",
          title: 'Our team, Black Mesa participated in the Singapore AI CTF and achieved an...',
          description: "",
          section: "News",},{id: "news-we-released-the-venus-code-generation-dataset",
          title: 'We released the Venus code generation dataset.',
          description: "",
          section: "News",},{id: "news-i-passed-the-phd-qualification-examination-qe-at-ntu",
          title: 'I passed the PhD Qualification Examination (QE) at NTU 🎉.',
          description: "",
          section: "News",},{id: "news-i-completed-the-10km-run-at-scsm-with-a-time-of-58-58",
          title: 'I completed the 10KM run at SCSM with a time of 58:58 🏃!...',
          description: "",
          section: "News",},{id: "news-our-paper-curriculum-demonstration-selection-for-in-context-learning-has-been-accepted-into-sac-25",
          title: 'Our paper “Curriculum Demonstration Selection for In-Context Learning” has been accepted into SAC’25....',
          description: "",
          section: "News",},{id: "news-i-was-nominated-as-an-icml-25-reviewer",
          title: 'I was nominated as an ICML’25 reviewer.',
          description: "",
          section: "News",},{id: "news-our-paper-towards-verifiable-text-generation-with-generative-agent-has-been-accepted-into-aaai-25",
          title: 'Our paper “Towards Verifiable Text Generation with Generative Agent” has been accepted into...',
          description: "",
          section: "News",},{id: "news-our-paper-unraveling-online-mental-health-through-the-lens-of-early-maladaptive-schemas-an-ai-enabled-study-of-online-mental-health-communities-has-been-accepted-into-journal-of-medical-internet-research-jmir",
          title: 'Our paper “Unraveling Online Mental Health Through the Lens of Early Maladaptive Schemas:...',
          description: "",
          section: "News",},{id: "news-i-developed-a-multiple-language-remote-runtime-monolith-please-feel-free-to-have-a-try",
          title: 'I developed a multiple language remote runtime Monolith. Please feel free to have...',
          description: "",
          section: "News",},{id: "news-i-was-nominated-as-a-neurips-25-reviewer",
          title: 'I was nominated as a NeurIPS’25 reviewer.',
          description: "",
          section: "News",},{id: "news-i-ve-launched-an-information-exchange-platform-between-ntu-and-nus-to-share-upcoming-events-and-opportunities",
          title: 'I’ve launched an Information Exchange Platform between NTU and NUS to share upcoming...',
          description: "",
          section: "News",},{id: "news-i-attended-iclr-25-at-expo-singapore",
          title: 'I attended ICLR’25 at Expo, Singapore.',
          description: "",
          section: "News",},{id: "news-our-paper-position-current-model-licensing-practices-are-dragging-us-into-a-quagmire-of-legal-noncompliance-has-been-accepted-into-icml-25-oral",
          title: 'Our paper “Position: Current Model Licensing Practices are Dragging Us into a Quagmire...',
          description: "",
          section: "News",},{id: "news-our-paper-antileak-bench-preventing-data-contamination-by-automatically-constructing-benchmarks-with-updated-real-world-knowledge-has-been-accepted-into-acl-25-main",
          title: 'Our paper “AntiLeak-Bench: Preventing Data Contamination by Automatically Constructing Benchmarks with Updated Real-World...',
          description: "",
          section: "News",},{id: "news-our-paper-codearena-a-collective-evaluation-platform-for-llm-code-generation-has-been-accepted-into-acl-25-demo",
          title: 'Our paper “CodeArena: A Collective Evaluation Platform for LLM Code Generation” has been...',
          description: "",
          section: "News",},{id: "news-i-plan-to-attend-acl-25-july-27-august-3-in-vienna-austria",
          title: 'I plan to attend ACL’25 (July 27 - August 3) in Vienna, Austria....',
          description: "",
          section: "News",},{id: "news-i-was-nominated-as-a-cikm-25-senior-pc-member",
          title: 'I was nominated as a CIKM’25 senior PC member.',
          description: "",
          section: "News",},{id: "news-our-paper-collective-bias-mitigation-via-model-routing-and-collaboration-has-been-accepted-into-cfagentic-icml-25",
          title: 'Our paper “Collective Bias Mitigation via Model Routing and Collaboration” has been accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-afterburner-reinforcement-learning-facilitates-self-improving-code-efficiency-optimization-has-been-accepted-into-pral-icml-25",
          title: 'Our paper “Afterburner: Reinforcement Learning Facilitates Self-Improving Code Efficiency Optimization” has been accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-measuring-the-influence-of-incorrect-code-on-test-generation-has-been-accepted-into-icse-26",
          title: 'Our paper “Measuring the Influence of Incorrect Code on Test Generation” has been...',
          description: "",
          section: "News",},{id: "news-i-was-nominated-as-a-neurips-25-ethics-reviewer",
          title: 'I was nominated as a NeurIPS’25 Ethics Reviewer.',
          description: "",
          section: "News",},{id: "news-our-paper-guardreasoner-vl-safeguarding-vlms-via-reinforced-reasoning-has-been-accepted-into-r2-fm-icml-25",
          title: 'Our paper “GuardReasoner-VL: Safeguarding VLMs via Reinforced Reasoning” has been accepted into R2-FM...',
          description: "",
          section: "News",},{id: "news-i-was-nominated-as-an-aaai-26-program-committee",
          title: 'I was nominated as an AAAI’26 Program Committee.',
          description: "",
          section: "News",},{id: "news-i-will-attend-nus-ai-research-day-on-25-july",
          title: 'I will attend NUS AI Research Day on 25 July.',
          description: "",
          section: "News",},{id: "news-i-was-nominated-as-an-aisi-26-program-committee",
          title: 'I was nominated as an AISI’26 Program Committee.',
          description: "",
          section: "News",},{id: "news-i-was-nominated-as-an-aistats-26-reviewer",
          title: 'I was nominated as an AISTATS’26 Reviewer.',
          description: "",
          section: "News",},{id: "news-i-was-nominated-as-an-iclr-26-reviewer",
          title: 'I was nominated as an ICLR’26 Reviewer.',
          description: "",
          section: "News",},{id: "news-our-paper-afterburner-reinforcement-learning-facilitates-self-improving-code-efficiency-optimization-has-been-accepted-into-neurips-25",
          title: 'Our paper “Afterburner: Reinforcement Learning Facilitates Self-Improving Code Efficiency Optimization” has been accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-guardreasoner-vl-safeguarding-vlms-via-reinforced-reasoning-has-been-accepted-into-neurips-25",
          title: 'Our paper “GuardReasoner-VL: Safeguarding VLMs via Reinforced Reasoning” has been accepted into NeurIPS’25...',
          description: "",
          section: "News",},{id: "news-our-paper-effibench-x-a-multi-language-benchmark-for-measuring-efficiency-of-llm-generated-code-has-been-accepted-into-neurips-25",
          title: 'Our paper “EffiBench-X: A Multi-Language Benchmark for Measuring Efficiency of LLM-Generated Code” has...',
          description: "",
          section: "News",},{id: "news-our-paper-swe-perf-can-language-models-optimize-code-performance-on-real-world-repositories-has-been-accepted-into-dl4c-neurips-25",
          title: 'Our paper “SWE-Perf: Can Language Models Optimize Code Performance on Real-World Repositories?” has...',
          description: "",
          section: "News",},{id: "news-our-paper-on-assigning-product-and-software-codes-to-customer-service-requests-with-large-language-models-has-been-accepted-into-emnlp-25",
          title: 'Our paper “On Assigning Product and Software Codes to Customer Service Requests with...',
          description: "",
          section: "News",},{id: "news-our-team-received-a-research-grant-from-google",
          title: 'Our team received a research grant from Google 🍀.',
          description: "",
          section: "News",},{id: "news-i-will-attend-emnlp-25-in-suzhou-china",
          title: 'I will attend EMNLP’25 in Suzhou, China.',
          description: "",
          section: "News",},{id: "news-i-will-attend-neurips-25-in-mexico-city-mexico",
          title: 'I will attend NeurIPS’25 in Mexico City, Mexico.',
          description: "",
          section: "News",},{id: "news-i-was-nominated-as-a-full-member-at-sigma-xi",
          title: 'I was nominated as a Full Member at Sigma Xi.',
          description: "",
          section: "News",},{id: "news-i-received-a-research-grant-from-planet-labs",
          title: 'I received a research grant from Planet Labs 🍀.',
          description: "",
          section: "News",},{id: "news-i-will-attend-the-singapore-symposium-on-natural-language-processing-ssnlp-26",
          title: 'I will attend the Singapore Symposium on Natural Language Processing (SSNLP’26).',
          description: "",
          section: "News",},{id: "news-i-received-a-research-grant-from-thinking-machines-lab",
          title: 'I received a research grant from Thinking Machines Lab 🍀.',
          description: "",
          section: "News",},{id: "news-i-will-attend-aaai-26-in-singapore",
          title: 'I will attend AAAI’26 in Singapore.',
          description: "",
          section: "News",},{id: "news-our-paper-beyond-prompt-induced-lies-investigating-llm-deception-on-benign-prompts-has-been-accepted-into-iclr-26-oral",
          title: 'Our paper “Beyond Prompt-Induced Lies: Investigating LLM Deception on Benign Prompts” has been...',
          description: "",
          section: "News",},{id: "news-i-may-attend-icse-26-in-rio-de-janeiro-brazil",
          title: 'I may attend ICSE’26 in Rio de Janeiro, Brazil.',
          description: "",
          section: "News",},{id: "news-i-may-attend-iclr-26-in-rio-de-janeiro-brazil-after-icse-26",
          title: 'I may attend ICLR’26 in Rio de Janeiro, Brazil after ICSE’26.',
          description: "",
          section: "News",},{id: "news-i-received-the-staff-research-award-from-ids-nus",
          title: 'I received the Staff Research Award from IDS, NUS 🍀.',
          description: "",
          section: "News",},{id: "news-our-paper-pro-quest-prompt-chaining-quiz-engine-for-testing-specialized-technical-product-knowledge-has-been-accepted-into-eacl-26-demo",
          title: 'Our paper “Pro-QuEST: Prompt-chaining Quiz Engine for testing Specialized Technical Product Knowledge” has...',
          description: "",
          section: "News",},{id: "news-our-paper-improving-arabic-dialectness-in-llms-with-reinforcement-learning-has-been-accepted-into-amiya-26",
          title: 'Our paper “Improving Arabic Dialectness in LLMs with Reinforcement Learning” has been accepted...',
          description: "",
          section: "News",},{id: "news-our-paper-benchmarking-llms-for-unit-test-generation-from-real-world-functions-has-been-accepted-to-tosem-26",
          title: 'Our paper “Benchmarking LLMs for Unit Test Generation from Real-World Functions” has been...',
          description: "",
          section: "News",},{id: "news-our-team-received-an-academic-grant-usd-617-000-from-nvidia",
          title: 'Our team received an academic grant (USD $617,000) from NVIDIA 🍀.',
          description: "",
          section: "News",},{id: "news-our-team-received-a-research-grant-from-nus-hpc",
          title: 'Our team received a research grant from NUS HPC 🍀.',
          description: "",
          section: "News",},{id: "news-i-will-give-a-talk-on-towards-efficient-code-generation-at-zhongguancun-academy-on-19-march",
          title: 'I will give a talk on “Towards Efficient Code Generation” at Zhongguancun Academy...',
          description: "",
          section: "News",},{id: "news-we-release-our-new-paper-paper-espresso-from-paper-overload-to-research-insight",
          title: 'We release our new paper “Paper Espresso: From Paper Overload to Research Insight”....',
          description: "",
          section: "News",},{id: "news-our-paper-securepair-semantics-aligned-curriculum-driven-and-reasoning-enhanced-vulnerability-repair-framework-has-been-accepted-into-acl-26",
          title: 'Our paper “SeCuRepair: Semantics-Aligned, Curriculum-Driven, and Reasoning-Enhanced Vulnerability Repair Framework” has been accepted...',
          description: "",
          section: "News",},{id: "projects-ntu-x-nus",
          title: 'NTU x NUS',
          description: "NTU and NUS Information Exchange",
          section: "Projects",handler: () => {
              window.location.href = "/projects/exchange/";
            },},{id: "projects-food",
          title: 'Food',
          description: "Gastronomic Delight",
          section: "Projects",handler: () => {
              window.location.href = "/projects/food/";
            },},{id: "projects-metaphor",
          title: 'Metaphor',
          description: "Virtual Assistant",
          section: "Projects",handler: () => {
              window.location.href = "/projects/metaphor/";
            },},{id: "projects-schedule",
          title: 'Schedule',
          description: "Hustle and Bustle",
          section: "Projects",handler: () => {
              window.location.href = "/projects/schedule/";
            },},{id: "projects-sports",
          title: 'Sports',
          description: "Where The Trail Ends",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sports/";
            },},{id: "projects-think-tank",
          title: 'Think Tank',
          description: "念念不忘 必有回想",
          section: "Projects",handler: () => {
              window.location.href = "/projects/thinktank/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
