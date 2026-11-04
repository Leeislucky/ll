// Personal essay writing and citation data are stored in this file.
// Each paragraph is a separate array item so the renderer can format it individually.

const outcomeTexts = {

    history: {
        title: "Attention Is All You Need",

        paragraphs: [
            `Neural networks and deep learning have existed for decades, but major breakthroughs in image recognition around 2012 helped bring deep learning into the spotlight (Krizhevsky et al.). Almost ten years later, the introduction of ChatGPT brought AI closer to ordinary people. Before conversational AI became widely accessible, AI was already used for tasks such as image recognition and data analysis, but interacting with it through natural language was still a barrier for many people.`,

            `In 2017, a research paper called Attention Is All You Need, written by eight researchers, introduced a new neural network architecture called the Transformer. Before this, many language-processing models relied on recurrent neural networks (RNNs), which processed sequences step by step. The Transformer introduced a different approach based on self-attention, allowing the model to learn relationships between different words or tokens in a sequence. It also made training more parallelizable, improving efficiency. The paper was initially demonstrated through machine translation tasks, but its architecture provided a foundation with much broader potential (Vaswani et al.).`,

            `The impact of this architecture became more apparent with the development of larger language models. In 2019, OpenAI introduced GPT-2, a Transformer-based model trained on large amounts of internet text to predict the next word. It demonstrated that a single language model could generate coherent paragraphs and perform tasks such as translation, summarization, and question answering (OpenAI, “Better Language Models”). Its release was initially limited and later expanded to include the full 1.5-billion-parameter model (OpenAI, “GPT-2”). In 2020, GPT-3 further demonstrated that increasing model size and training data could significantly improve language abilities, allowing models to perform different tasks from simple instructions and examples (Brown et al.). These developments eventually contributed to conversational AI becoming widely accessible through ChatGPT in 2022 (OpenAI, “Introducing ChatGPT”).`,

            `This paper became an important turning point in AI history because the Transformer later became the foundation of many modern large language models (LLMs), including GPT. By learning patterns in language, these models can generate text, answer questions, and help people explore information in more accessible ways. Just as ancient stories imagined artificial beings such as Talos and the Golem, humans have long imagined creating artificial entities to serve human needs. Modern generative AI reflects part of that ambition: to extend our capabilities and make knowledge easier to access. However, its growing influence also raises questions about how we should use and rely on these systems.`
        ]
    },


    ethics: {
        title: "The Fake Pentagon Explosion",

        paragraphs: [
            `On May 22, 2023, an image appearing to show an explosion near the Pentagon spread across social media. The image was believed to be AI-generated, and several large accounts shared the false report. Authorities confirmed that no explosion had occurred. The incident briefly affected financial markets and demonstrated how quickly fabricated visual information can spread. However, the exact AI model used and the creator’s intention remain unconfirmed (Oremus).`,

            `This is an example of dual use: a technology developed for useful purposes can also be misused. AI image generation can help artists, designers, and filmmakers create visual content, but realistic images can also be used to spread misinformation. In this case, the image exploited people’s tendency to trust visual evidence, potentially damaging public trust and creating unnecessary alarm.`,

            `The consequences affect different stakeholders. AI developers face pressure to improve safeguards and make generated content easier to identify. Users who create or share false images may face reputational or legal consequences, depending on their actions. Society must also learn to evaluate online images more critically. However, we cannot automatically conclude that the creator intended to cause harm simply because the image spread widely. This raises another question: who should be responsible when AI-generated content causes harm?`,

            `In the United States, there is no single federal law that automatically covers every misleading AI-generated image. Existing laws may apply depending on the circumstances, while state laws differ, particularly regarding election-related deepfakes. Any regulation must also consider freedom of expression and legitimate creative uses (Congressional Research Service; National Conference of State Legislatures).`,

            `Another important ethical concern is privacy and fairness in AI facial recognition. In 2023, the Federal Trade Commission (FTC) took action against Rite Aid after discovering that its facial recognition system had been used in hundreds of stores to identify suspected shoplifters. The system generated thousands of false-positive matches, disproportionately affecting women and people of color. Customers were sometimes wrongly followed, searched, or accused of wrongdoing without knowing their facial data was being collected (Federal Trade Commission, “Rite Aid Banned”). As a result, a settlement order prohibited Rite Aid from using facial recognition for security or surveillance purposes for five years (Federal Trade Commission, “Stipulated Order”). This case demonstrates how inaccurate AI systems and the collection of sensitive biometric information can threaten individual privacy and lead to discriminatory treatment. It also highlights the responsibility of companies to test their systems, protect personal data, and ensure that automated decisions do not unfairly harm individuals.`,

            `Ultimately, these cases demonstrate that AI ethics is not only about what a technology can do, but also how people use it and how society responds. As AI systems become more powerful and widely adopted, we need better ways to verify information, greater accountability for deceptive or unfair uses, and stronger protection of individual privacy.`
        ]
    },


    // Reinforcement Learning and Self-Driving Cars belongs under Outcome 03.
    search: {
        title: "Reinforcement Learning and Self-Driving Cars",

        paragraphs: [
            `Self-driving cars are designed to navigate roads, recognize traffic conditions, and make decisions without requiring the driver to control every movement. However, real-world driving is complicated by unusual situations, such as unexpected obstacles, animals crossing the road, and vehicles behaving unpredictably. Reinforcement learning offers one approach to improving how AI systems respond to these situations. Tesla has publicly described using reinforcement learning techniques to improve the planning and reasoning capabilities of its self-driving systems, particularly in challenging driving scenarios (Tesla).`,

            `In reinforcement learning, an AI agent learns by interacting with an environment. At each step, the agent observes a state, chooses an action, and receives a reward based on the outcome. The environment then changes into a new state, and the process continues. For example, imagine a Tesla approaching an animal that suddenly enters the road. The state includes the vehicle’s position, speed, and the animal’s location. Possible actions include braking, slowing down, or steering away if it is safe. A reward system can encourage safer actions while penalizing dangerous outcomes, such as collisions. Over repeated training experiences, the agent can learn which actions tend to produce better results.`,

            `One important algorithm used to explain this process is Q-learning. It estimates the long-term value of taking a particular action in a particular state. Rather than considering only the immediate reward, the agent also considers the potential rewards of future states. This helps explain how an AI system could learn to prioritize safety over short-term convenience (Watkins and Dayan 279–92). However, Q-learning is a simplified example of reinforcement learning, and Tesla has not publicly established that its production driving system uses this specific algorithm. Its actual system combines more complex neural networks and training methods.`,

            `Reinforcement learning can improve adaptability by helping driving systems handle situations that are difficult to anticipate through manually written rules alone. Better decisions could reduce certain accidents, improve traffic flow, and make transportation more accessible. However, these benefits are not guaranteed. An imperfect reward system may encourage undesirable behavior, and an AI model that performs well in training may still struggle with unfamiliar real-world conditions. Therefore, reinforcement learning must be combined with careful testing, safety measures, and human oversight. Ultimately, the goal is not simply to teach a car how to drive, but to help it make safer decisions in a world that is constantly changing.`
        ]
    },


    // Add future writing here using the same structure: title + paragraphs array.
    ml: null,

    generative: null
};


// Citation entries are reused on the relevant essay page and on the combined Citation Page.
// Entries follow MLA-style Works Cited formatting.

const citationGroups = [

    {
        key: "history",

        entries: [
            {
                author: "Brown, Tom B., et al.",
                title: "Language Models Are Few-Shot Learners",
                titleStyle: "quoted",
                container: "Advances in Neural Information Processing Systems",
                details: "vol. 33, 2020, pp. 1877–1901",
                url: "https://papers.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html"
            },

            {
                author: "Krizhevsky, Alex, et al.",
                title: "ImageNet Classification with Deep Convolutional Neural Networks",
                titleStyle: "quoted",
                container: "Advances in Neural Information Processing Systems",
                details: "vol. 25, 2012, pp. 1097–1105",
                url: "https://proceedings.neurips.cc/paper_files/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html"
            },

            {
                author: "OpenAI.",
                title: "Better Language Models and Their Implications",
                titleStyle: "quoted",
                container: "OpenAI",
                details: "14 Feb. 2019",
                url: "https://openai.com/index/better-language-models/"
            },

            {
                author: "OpenAI.",
                title: "GPT-2: 1.5B Release",
                titleStyle: "quoted",
                container: "OpenAI",
                details: "5 Nov. 2019",
                url: "https://openai.com/index/gpt-2-1-5b-release/"
            },

            {
                author: "OpenAI.",
                title: "Introducing ChatGPT",
                titleStyle: "quoted",
                container: "OpenAI",
                details: "30 Nov. 2022",
                url: "https://openai.com/index/chatgpt/"
            },

            {
                author: "Vaswani, Ashish, et al.",
                title: "Attention Is All You Need",
                titleStyle: "quoted",
                container: "Advances in Neural Information Processing Systems",
                details: "vol. 30, 2017, pp. 5998–6008",
                url: "https://arxiv.org/abs/1706.03762"
            }
        ]
    },


    {
        key: "ethics",

        entries: [
            {
                author: "Congressional Research Service.",
                title: "Regulating Artificial Intelligence: U.S. and International Approaches and Considerations for Congress",
                titleStyle: "italic",
                container: "Congressional Research Service",
                details: "4 June 2025",
                url: "https://www.everycrsreport.com/reports/R48555.html"
            },

            {
                author: "Federal Trade Commission.",
                title: "Rite Aid Banned from Using AI Facial Recognition after FTC Says Retailer Deployed Technology without Reasonable Safeguards",
                titleStyle: "quoted",
                container: "Federal Trade Commission",
                details: "19 Dec. 2023",
                url: "https://www.ftc.gov/news-events/news/press-releases/2023/12/rite-aid-banned-using-ai-facial-recognition-after-ftc-says-retailer-deployed-technology-without"
            },

            {
                author: "Federal Trade Commission.",
                title: "Stipulated Order for Permanent Injunction and Other Relief",
                titleStyle: "italic",
                container: "",
                details: "8 Mar. 2024",
                url: "https://www.ftc.gov/system/files/ftc_gov/pdf/DE019-StipulatedOrderforPermanentInjunctionandOtherRelief.pdf"
            },

            {
                author: "Murphy, Tom.",
                title: "Rite Aid Banned from Facial Recognition Tech Use for 5 Years after Faulty Theft Targeting in Stores",
                titleStyle: "quoted",
                container: "Associated Press",
                details: "20 Dec. 2023",
                url: "https://apnews.com/article/e8deb16296d9cef78faca2761b2efb48"
            },

            {
                author: "National Conference of State Legislatures.",
                title: "Artificial Intelligence (AI) in Elections and Campaigns",
                titleStyle: "quoted",
                container: "NCSL",
                details: "13 Oct. 2026",
                url: "https://www.ncsl.org/elections-and-campaigns/artificial-intelligence-ai-in-elections-and-campaigns"
            },

            {
                author: "Oremus, Will.",
                title: "A Tweet about a Pentagon Explosion Was Fake. It Still Went Viral",
                titleStyle: "quoted",
                container: "The Washington Post",
                details: "22 May 2023",
                url: "https://www.washingtonpost.com/technology/2023/05/22/pentagon-explosion-ai-image-hoax/"
            }
        ]
    },


    {
        key: "search",

        entries: [
            {
                author: "Tesla, Inc.",
                title: "Reinforcement Learning Engineer, Self-Driving, Tesla SI",
                titleStyle: "quoted",
                container: "Tesla Careers",
                details: "Accessed 4 Nov. 2026",
                url: "https://www.tesla.com/careers/search/job/reinforcement-learning-engineer-self-driving-tesla-si-221945"
            },

            {
                author: "Watkins, Christopher J. C. H., and Peter Dayan.",
                title: "Q-Learning",
                titleStyle: "quoted",
                container: "Machine Learning",
                details: "vol. 8, 1992, pp. 279–292",
                url: "https://doi.org/10.1007/BF00992698"
            }
        ]
    }
];


// The AI-use disclosure is brief and appears as plain academic prose.
// Only Grok is included in this acknowledgment.

const aiToolAcknowledgment = {

    statement: "Grok (Standard Fast Version) was used on 23 September 2026 to assist with generating HTML and CSS code based on the author’s instructions. The author wrote the About Me content, selected the color scheme, planned the website structure, supplied the profile photograph, and summarized the five learning outcomes. Grok assisted with the code for index.html, style.css, and the learning-outcome pages.",

    citation: {
        author: "xAI.",
        title: "Grok, Standard Fast Version",
        titleStyle: "italic",
        container: "",
        details: "23 Sept. 2026",
        url: "https://grok.com"
    }
};
