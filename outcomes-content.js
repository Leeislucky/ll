// outcomes-content.js
// Write your personal paragraphs here only once.
// Leave the quotes and the structure exactly as they are.

const outcomeTexts = {
    history: `
        Attention Is All You Need

\n\n Neural networks and deep learning have existed for decades, but major breakthroughs in image recognition around 2012 helped bring deep learning into the spotlight. Almost ten years later, the introduction of ChatGPT brought AI closer to ordinary people. Before conversational AI became widely accessible, AI was already used for tasks such as image recognition and data analysis, but interacting with it through natural language was still a barrier for many people.

\n\n In 2017, a research paper called Attention Is All You Need, written by eight researchers, introduced a new neural network architecture called the Transformer. Before this, many language-processing models relied on recurrent neural networks (RNNs), which processed sequences step by step. The Transformer introduced a different approach based on self-attention, allowing the model to learn relationships between different words or tokens in a sequence. It also made training more parallelizable, improving efficiency.

\n\n This paper became an important turning point in AI history because the Transformer later became the foundation of many modern large language models (LLMs), including GPT. By learning patterns in language, these models can generate text, answer questions, and help people explore information in more accessible ways.

\n\n Just as ancient stories imagined artificial beings such as Talos and the Golem, humans have long imagined creating artificial entities to serve human needs. Modern generative AI reflects part of that ambition: to extend our capabilities and make knowledge easier to access. However, its growing influence also raises questions about how we should use and rely on these systems.
    `,

    ethics: `
        The Fake Pentagon Explosion

\n\n On May 22, 2023, an image appearing to show an explosion near the Pentagon spread across social media. The image was believed to be AI-generated, and several large accounts shared the false report. Authorities confirmed that no explosion had occurred. The incident briefly affected financial markets and demonstrated how quickly fabricated visual information can spread. However, the exact AI model used and the creator’s intention remain unconfirmed.

\n\n This is an example of dual use: a technology developed for useful purposes can also be misused. AI image generation can help artists, designers, and filmmakers create visual content, but realistic images can also be used to spread misinformation. In this case, the image exploited people’s tendency to trust visual evidence, potentially damaging public trust and creating unnecessary alarm.

\n\n The consequences affect different stakeholders. AI developers face pressure to improve safeguards and make generated content easier to identify. Users who create or share false images may face reputational or legal consequences, depending on their actions. Society must also learn to evaluate online images more critically. However, we cannot automatically conclude that the creator intended to cause harm simply because the image spread widely.

\n\n This raises another question: who should be responsible when AI-generated content causes harm? In the United States, there is no single federal law that automatically covers every misleading AI-generated image. Existing laws may apply depending on the circumstances, while state laws differ, particularly regarding election-related deepfakes. Any regulation must also consider freedom of expression and legitimate creative uses.

\n\n Ultimately, this case demonstrates that AI ethics is not only about what a technology can do, but also how people use it and how society responds. As generated images become more realistic, we need better ways to verify information, greater accountability for deceptive uses, and more careful judgment before trusting what we see online.
    `,

    search: `
        Reinforcement Learning and Self-Driving Cars

Self-driving cars are designed to navigate roads, recognize traffic conditions, and make decisions without requiring the driver to control every movement. However, real-world driving is complicated by unusual situations, such as unexpected obstacles, animals crossing the road, and vehicles behaving unpredictably. Reinforcement learning offers one approach to improving how AI systems respond to these situations. Tesla has publicly described using reinforcement learning to improve its Full Self-Driving neural network, particularly in rare and difficult driving scenarios. [1]

In reinforcement learning, an AI agent learns by interacting with an environment. At each step, the agent observes a state, chooses an action, and receives a reward based on the outcome. The environment then changes into a new state, and the process continues. For example, imagine a Tesla approaching an animal that suddenly enters the road. The state includes the vehicle’s position, speed, and the animal’s location. Possible actions include braking, slowing down, or steering away if it is safe. A reward system can encourage safer actions while penalizing dangerous outcomes, such as collisions. Over repeated training experiences, the agent can learn which actions tend to produce better results.

One important algorithm used to explain this process is Q-learning. It estimates the long-term value of taking a particular action in a particular state. Rather than considering only the immediate reward, the agent also considers the potential rewards of future states. This helps explain how an AI system could learn to prioritize safety over short-term convenience. However, Q-learning is a simplified example of reinforcement learning, and Tesla has not publicly established that its production driving system uses this specific algorithm. Its actual system combines more complex neural networks and training methods.

Reinforcement learning can improve adaptability by helping driving systems handle situations that are difficult to anticipate through manually written rules alone. Better decisions could reduce certain accidents, improve traffic flow, and make transportation more accessible. However, these benefits are not guaranteed. An imperfect reward system may encourage undesirable behavior, and an AI model that performs well in training may still struggle with unfamiliar real-world conditions. Therefore, reinforcement learning must be combined with careful testing, safety measures, and human oversight. Ultimately, the goal is not simply to teach a car how to drive, but to help it make safer decisions in a world that is constantly changing.
    `,

    ml: `
        Paste your full personal paragraph for ML Fundamentals here.
    `,

    generative: `
        Paste your full personal paragraph for Generative AI here.
    `
};
