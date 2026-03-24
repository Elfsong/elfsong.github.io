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
          description: "Redircting to Mingzhe Du&#39;s resume (it may takes a few seconds)...",
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
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
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
          section: "News",},{id: "news-our-team-received-an-academic-grant-from-nvidia",
          title: 'Our team received an academic grant from NVIDIA 🍀.',
          description: "",
          section: "News",},{id: "news-our-team-received-a-research-grant-from-nus-hpc",
          title: 'Our team received a research grant from NUS HPC 🍀.',
          description: "",
          section: "News",},{id: "news-i-will-give-a-talk-on-towards-efficient-code-generation-at-zhongguancun-academy-on-19-march",
          title: 'I will give a talk on “Towards Efficient Code Generation” at Zhongguancun Academy...',
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
