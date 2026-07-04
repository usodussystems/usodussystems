export type Language = 'en' | 'es' | 'pt';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    solutions: string;
    news: string;
    contact: string;
    clientArea: string;
    toggleMenu: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    stats: {
      projects: string;
      satisfaction: string;
      teamMembers: string;
    };
    cards: {
      platformDevelopment: {
        title: string;
        description: string;
      };
      userCentricDesign: {
        title: string;
        description: string;
      };
      digitalInnovation: {
        title: string;
        description: string;
      };
    };
  };
  about: {
    title: string;
    description: string;
    brandElements: {
      terminal: {
        title: string;
        description: string;
      };
      people: {
        title: string;
        description: string;
      };
      pipeProcess: {
        title: string;
        description: string;
      };
    };
    etymologyTitle: string;
    etymologyBody: string;
  };
  services: {
    title: string;
    subtitle: string;
    agenticTransformation: {
      title: string;
      description: string;
      badge: string;
    };
    platformDevelopment: {
      title: string;
      description: string;
    };
    agenticConsulting: {
      title: string;
      description: string;
    };
    userExperience: {
      title: string;
      description: string;
    };
  };
  solutions: {
    title: string;
    subtitle: string;
    items: {
      agentArchitecture: {
        title: string;
        subtitle: string;
      };
      dataIntegration: {
        title: string;
        subtitle: string;
      };
      governance: {
        title: string;
        subtitle: string;
      };
      humanInLoop: {
        title: string;
        subtitle: string;
      };
      cloudDeployment: {
        title: string;
        subtitle: string;
      };
      performanceMonitoring: {
        title: string;
        subtitle: string;
      };
    };
  };
  engagement: {
    title: string;
    subtitle: string;
    ctaText: string;
    ctaButton: string;
    tiers: {
      quickWins: {
        title: string;
        timeline: string;
        description: string;
        highlights: string[];
      };
      productionReady: {
        title: string;
        timeline: string;
        description: string;
        highlights: string[];
      };
      enterpriseScale: {
        title: string;
        timeline: string;
        description: string;
        highlights: string[];
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    successTitle: string;
    successBody: string;
    placeholders: {
      name: string;
      email: string;
      message: string;
    };
  };
  footer: {
    tagline: string;
    company: string;
    services: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  news: {
    title: string;
    latest: string;
    readMore: string;
    backToHome: string;
    backToNews: string;
    actionsTitle: string;
    referencesTitle: string;
    items: {
      slug: string;
      title: string;
      excerpt: string;
      category: string;
      date: string;
      readTime: string;
      image: string;
      lead: string;
      sections: {
        title: string;
        body: string[];
      }[];
      actions: string[];
      references: string[];
    }[];
  };
  clientArea: {
    title: string;
    unavailableTitle: string;
    unavailableBody: string;
    contactSupport: string;
  };
  seo: {
    keywords: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      solutions: 'Solutions',
      news: 'News',
      contact: 'Contact',
      clientArea: 'Client Area',
      toggleMenu: 'Toggle menu',
    },
    hero: {
      badge: 'sudo su > Digital Transformation',
      title: 'Digital Transformation Powered by People',
      subtitle: 'We create platforms that empower your business with super privilege access to innovation.',
      cta: 'Get Started',
      ctaSecondary: 'Learn More',
      stats: {
        projects: 'Projects',
        satisfaction: 'Satisfaction',
        teamMembers: 'Team Members',
      },
      cards: {
        platformDevelopment: {
          title: 'Platform Development',
          description: 'Custom solutions for your needs',
        },
        userCentricDesign: {
          title: 'User-Centric Design',
          description: 'Experiences that matter',
        },
        digitalInnovation: {
          title: 'Digital Innovation',
          description: 'Transforming businesses',
        },
      },
    },
    about: {
      title: 'About Usodus',
      description: 'Usodus Systems is a digital transformation company focused on creating platforms. Our name comes from "sudo su" - representing super privilege access. We believe in putting users first, where ">" represents the terminal, "." represents people, and "|" represents "so what?" - a pipe process that drives meaningful change.',
      brandElements: {
        terminal: {
          title: 'Terminal',
          description: 'Represents command-line power and direct access to systems',
        },
        people: {
          title: 'People',
          description: 'Our focus on user-centric solutions and human connection',
        },
        pipeProcess: {
          title: 'Pipe Process',
          description: 'The "so what?" that drives meaningful transformation',
        },
      },
      etymologyTitle: 'sudo su',
      etymologyBody: 'Our name is derived from the Unix command "sudo su" - which grants super user privileges. This represents our commitment to providing our clients with elevated access to digital transformation, empowering them with the highest level of control and innovation in their platforms.',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Enterprise-grade AI solutions from rapid prototyping to full-scale transformation',
      agenticTransformation: {
        title: 'AI Agentic Transformation',
        description: 'Design, deploy, and scale autonomous AI agents that execute complex workflows. From POCs to production systems handling mission-critical operations.',
        badge: 'Core Service',
      },
      platformDevelopment: {
        title: 'Platform Development',
        description: 'Scalable platforms integrated with AI agents. Custom solutions designed for enterprise growth.',
      },
      agenticConsulting: {
        title: 'Agentic AI Strategy',
        description: 'Architecture design, governance frameworks, and ROI optimization. Expert guidance from use-case assessment to production deployment.',
      },
      userExperience: {
        title: 'User-Centric Integration',
        description: 'Design human-in-the-loop experiences. Seamless agent integration that enhances, not replaces, human capability.',
      },
    },
    solutions: {
      title: 'Solutions',
      subtitle: 'Tailored solutions for modern challenges',
      items: {
        agentArchitecture: {
          title: 'Agent Architecture',
          subtitle: 'Design & Deployment',
        },
        dataIntegration: {
          title: 'Data Integration',
          subtitle: 'Connectors & Pipelines',
        },
        governance: {
          title: 'Governance',
          subtitle: 'Compliance & Control',
        },
        humanInLoop: {
          title: 'Human-in-Loop',
          subtitle: 'Oversight & Approval',
        },
        cloudDeployment: {
          title: 'Cloud Deployment',
          subtitle: 'Scalable Infrastructure',
        },
        performanceMonitoring: {
          title: 'Performance Monitoring',
          subtitle: 'Analytics & ROI',
        },
      },
    },
    engagement: {
      title: 'Engagement Models',
      subtitle: 'From rapid prototyping to enterprise-scale transformation',
      ctaText: 'Start your agentic AI transformation today',
      ctaButton: 'Schedule Consultation',
      tiers: {
        quickWins: {
          title: 'Quick Wins',
          timeline: '2-4 weeks',
          description: 'Rapid POC with pre-built agent templates. Prove value and ROI before scaling.',
          highlights: ['Pre-built agents', 'Fast deployment', 'Measurable results'],
        },
        productionReady: {
          title: 'Production Ready',
          timeline: '2-3 months',
          description: 'Full-featured agent systems with governance frameworks and human oversight.',
          highlights: ['Custom architecture', 'Enterprise integration', 'Compliance frameworks'],
        },
        enterpriseScale: {
          title: 'Enterprise Scale',
          timeline: '3-6 months',
          description: 'Multi-agent orchestration with continuous optimization and organizational change.',
          highlights: ['Multi-agent systems', 'Organization design', 'Ongoing optimization'],
        },
      },
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s discuss how we can transform your digital presence',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      successTitle: 'Message Sent!',
      successBody: 'We\'ll get back to you soon.',
      placeholders: {
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Tell us about your project...',
      },
    },
    footer: {
      tagline: 'Empowering digital transformation through user-focused platforms',
      company: 'Company',
      services: 'Services',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
    },
    news: {
      title: 'Latest News',
      latest: 'AI strategy notes for leaders turning pilots into production systems',
      readMore: 'Read More',
      backToHome: 'Back to Home',
      backToNews: 'Back to News',
      actionsTitle: 'Client action checklist',
      referencesTitle: 'References',
      items: [
        {
          slug: 'agentic-ai-operating-model',
          title: 'AI Agents Need an Operating Model Before They Need More Tools',
          excerpt: 'The fastest path to value is not adding agents everywhere. It is choosing a few workflows, assigning ownership, and designing the control points before autonomy scales.',
          category: 'AI Strategy',
          date: '2026-06-24',
          readTime: '7 min read',
          image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80',
          lead: 'Agentic AI should start as an operating-model decision, not a software shopping exercise. Companies that redesign workflows, define where human judgment stays in control, and measure outcomes by business value are better positioned to move beyond pilots.',
          sections: [
            {
              title: 'What to do',
              body: [
                'Pick two or three workflows where autonomy can remove delay without removing accountability. Good first candidates usually have repeatable inputs, clear decision rules, visible exception paths, and measurable cycle-time or quality problems.',
                'Assign each agent a business owner, a technical owner, allowed tools, data boundaries, and an escalation rule. Treat the agent like a governed digital worker with a job description, not like a generic chatbot.',
              ],
            },
            {
              title: 'How to do it',
              body: [
                'Map the workflow from trigger to outcome. Mark every decision, system touchpoint, approval, and failure mode. Then decide which steps are read-only assistance, which can be executed by an agent, and which require human approval.',
                'Start with constrained autonomy: narrow tools, scoped data, audit logs, and a human checkpoint for high-impact actions. Expand only when the agent demonstrates stable quality, predictable cost, and low exception rates.',
              ],
            },
            {
              title: 'How to measure it',
              body: [
                'Avoid vanity metrics such as number of agents launched. Track cycle time, rework, cost per completed case, human override rate, customer impact, and incidents. A small number of reliable agents beats a large catalog nobody trusts.',
              ],
            },
          ],
          actions: [
            'Select one workflow with measurable delay and one accountable executive sponsor.',
            'Write the agent job description: goal, tools, forbidden actions, escalation rules, and success metrics.',
            'Run a four-week pilot with audit logs and weekly quality review before expanding scope.',
          ],
          references: [
            '[1] McKinsey & Company, "The state of AI in 2025: Agents, innovation, and transformation," Nov. 2025. [Online]. Available: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
            '[2] Deloitte, "The State of AI in the Enterprise," 2026. [Online]. Available: https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
            '[3] National Institute of Standards and Technology, "AI Risk Management Framework," 2023-2026. [Online]. Available: https://www.nist.gov/itl/ai-risk-management-framework',
          ],
        },
        {
          slug: 'rag-data-readiness',
          title: 'AI Answers Improve When the Knowledge Base Is Treated Like a Product',
          excerpt: 'Retrieval-augmented generation fails when content is stale, duplicated, or ownerless. The strategic move is to productize enterprise knowledge before asking AI to reason over it.',
          category: 'Data & RAG',
          date: '2026-06-18',
          readTime: '8 min read',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
          lead: 'RAG is not a magic layer over messy documents. It is a data product with customers, quality rules, lifecycle management, and evaluation. Teams that make content trustworthy first get more reliable AI answers later.',
          sections: [
            {
              title: 'What to do',
              body: [
                'Define the business questions the system must answer, then build the corpus around those questions. Do not start by indexing every folder. Start with the documents that are authoritative, current, and operationally useful.',
                'Make every source accountable. Each content set needs an owner, update cadence, retention rule, access policy, and quality score. If nobody owns a document, the AI should not depend on it for critical work.',
              ],
            },
            {
              title: 'How to do it',
              body: [
                'Create a preparation loop: collect representative documents, create test queries, chunk content by meaning, enrich chunks with metadata, embed them, and evaluate retrieval before evaluating generated answers.',
                'Use hybrid search where exact terms and semantic meaning both matter. Measure groundedness, completeness, relevance, and source utilization. If retrieval misses the right evidence, prompt tuning will only hide the root problem.',
              ],
            },
            {
              title: 'How to operate it',
              body: [
                'Set a monthly knowledge review for high-value domains. Remove outdated content, merge duplicates, test new queries from real users, and publish a short quality report. The goal is not a bigger index; it is a more dependable one.',
              ],
            },
          ],
          actions: [
            'Inventory the top 50 questions employees or customers ask today.',
            'Choose one domain, assign source owners, and define freshness and access rules.',
            'Build an evaluation set before launch, including questions the corpus cannot answer.',
          ],
          references: [
            '[1] Amazon Web Services, "Retrieval Augmented Generation options and architectures on AWS," Oct. 2024. [Online]. Available: https://docs.aws.amazon.com/prescriptive-guidance/latest/retrieval-augmented-generation-options/introduction.html',
            '[2] Microsoft, "Design and develop a RAG solution," Azure Architecture Center, Jun. 2026. [Online]. Available: https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide',
            '[3] National Institute of Standards and Technology, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile," NIST AI 600-1, Jul. 2024. [Online]. Available: https://doi.org/10.6028/NIST.AI.600-1',
          ],
        },
        {
          slug: 'ai-governance-with-human-oversight',
          title: 'AI Governance Should Shorten the Path to Production, Not Freeze It',
          excerpt: 'Good governance is a release system: it classifies risk, sets review depth, and tells teams exactly what evidence is needed to launch safely.',
          category: 'AI Governance',
          date: '2026-06-12',
          readTime: '7 min read',
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
          lead: 'AI governance works when it is practical enough for product teams to use. The goal is not a committee for every prompt; it is a clear route from idea to production based on risk, evidence, and human accountability.',
          sections: [
            {
              title: 'What to do',
              body: [
                'Create three release lanes: low-risk internal assistance, controlled workflow automation, and high-impact decision support. Each lane should have its own approval evidence, monitoring requirements, and human oversight model.',
                'Define where humans must remain in control. That usually includes regulated decisions, financial commitments, identity changes, security-sensitive actions, and any workflow where a wrong answer can materially harm a person or customer relationship.',
              ],
            },
            {
              title: 'How to do it',
              body: [
                'Build governance into delivery rituals. Product briefs should state intended users, data used, model behavior, failure modes, fallback paths, and audit needs. Release reviews should verify evidence instead of reopening strategy debates.',
                'Keep an AI system register. Track owners, data sources, model/provider, risk tier, evaluation results, incidents, and review dates. This gives leadership visibility without slowing every team through bespoke reporting.',
              ],
            },
            {
              title: 'How to keep it useful',
              body: [
                'Review governance quarterly against incidents and delivery speed. If teams route around the process, the process is probably too vague or too slow. Tighten the standard, not the ceremony.',
              ],
            },
          ],
          actions: [
            'Define risk tiers and required launch evidence for each tier.',
            'Create an AI system register with named business and technical owners.',
            'Add human-control rules for high-impact actions before pilots become production workflows.',
          ],
          references: [
            '[1] National Institute of Standards and Technology, "AI Risk Management Framework," 2023-2026. [Online]. Available: https://www.nist.gov/itl/ai-risk-management-framework',
            '[2] National Institute of Standards and Technology, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile," NIST AI 600-1, Jul. 2024. [Online]. Available: https://doi.org/10.6028/NIST.AI.600-1',
            '[3] Deloitte, "The State of AI in the Enterprise," 2026. [Online]. Available: https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
          ],
        },
        {
          slug: 'secure-llm-applications',
          title: 'AI Security Starts With Tool Boundaries and Untrusted Content',
          excerpt: 'Prompt injection, excessive agency, and weak output handling are design problems. The fix starts before the first user prompt reaches production.',
          category: 'AI Security',
          date: '2026-06-05',
          readTime: '8 min read',
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
          lead: 'LLM applications need a security model that assumes user input, retrieved documents, and tool results may be hostile. The practical answer is least privilege, content separation, output validation, and explicit approval for sensitive actions.',
          sections: [
            {
              title: 'What to do',
              body: [
                'Classify every input by trust level. User prompts, web pages, uploaded files, retrieved documents, and tool responses should not be treated as equal instructions. The application must separate commands from content.',
                'Limit agency. An AI system that can send emails, change records, run code, or move money needs tool permissions, transaction limits, confirmation steps, and logs that security teams can inspect.',
              ],
            },
            {
              title: 'How to do it',
              body: [
                'Create a tool gateway between the model and business systems. The gateway should authenticate tool calls, validate arguments, enforce policy, redact secrets, and block actions outside the agent role.',
                'Validate outputs before execution. If model output becomes SQL, code, a workflow command, or customer-facing content, run deterministic validation and human review where the consequence is high.',
              ],
            },
            {
              title: 'How to test it',
              body: [
                'Red-team the application with direct and indirect prompt injection, poisoned retrieval content, oversized requests, and attempts to bypass approval. Track findings like product defects, not theoretical risks.',
              ],
            },
          ],
          actions: [
            'Write a trust-boundary diagram for prompts, retrieved content, tools, logs, and outputs.',
            'Apply least privilege to every model-accessible tool before production use.',
            'Add prompt-injection and excessive-agency scenarios to the release test suite.',
          ],
          references: [
            '[1] OWASP Foundation, "OWASP Top 10 for Large Language Model Applications," Version 2025. [Online]. Available: https://owasp.org/www-project-top-10-for-large-language-model-applications/',
            '[2] OWASP Gen AI Security Project, "LLM01:2025 Prompt Injection," 2025. [Online]. Available: https://genai.owasp.org/llmrisk/llm01-prompt-injection/',
            '[3] National Institute of Standards and Technology, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile," NIST AI 600-1, Jul. 2024. [Online]. Available: https://doi.org/10.6028/NIST.AI.600-1',
          ],
        },
        {
          slug: 'ai-value-scorecard',
          title: 'AI ROI Comes From Fewer, Better Use Cases',
          excerpt: 'Enterprise value appears when AI work is tied to growth, cost, quality, and cycle-time metrics. The portfolio should be smaller than most teams expect.',
          category: 'Value Realization',
          date: '2026-05-29',
          readTime: '7 min read',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
          lead: 'AI value is easier to capture when the portfolio is focused. The best candidates are not the flashiest demos; they are workflows where leaders can name the baseline, fund the change, redesign the process, and measure the result.',
          sections: [
            {
              title: 'What to do',
              body: [
                'Build an AI value scorecard before funding implementation. Each use case should state the business outcome, baseline metric, expected benefit, adoption owner, risk tier, integration effort, and data readiness.',
                'Prioritize use cases that improve a core business function. Research keeps pointing to the same lesson: scaled value comes from workflow redesign and leadership ownership, not broad experimentation without operational change.',
              ],
            },
            {
              title: 'How to do it',
              body: [
                'Rank opportunities by value, feasibility, and control. A high-value use case with no clean data or no process owner is not ready. Move it to a readiness backlog instead of forcing a weak pilot.',
                'Fund the portfolio in waves. Wave one should prove the measurement system and operating model. Wave two should reuse platform components, evaluation assets, and governance patterns from wave one.',
              ],
            },
            {
              title: 'How to report it',
              body: [
                'Report benefits in business terms: hours removed from a process, cases resolved without rework, faster quote turnaround, lower support cost, higher conversion, or reduced risk exposure. Adoption numbers matter only when they explain those outcomes.',
              ],
            },
          ],
          actions: [
            'Create a one-page scorecard for every AI opportunity before approving build work.',
            'Stop or redesign pilots that cannot name a baseline metric and accountable owner.',
            'Review portfolio value monthly and retire low-use experiments quickly.',
          ],
          references: [
            '[1] McKinsey & Company, "The state of AI in 2025: Agents, innovation, and transformation," Nov. 2025. [Online]. Available: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
            '[2] Boston Consulting Group, "AI Leaders Outpace Laggards with Double the Revenue Growth and 40% More Cost Savings," Sep. 2025. [Online]. Available: https://www.bcg.com/press/30september2025-ai-leaders-outpace-laggards-revenue-growth-cost-savings',
            '[3] Deloitte, "The State of AI in the Enterprise," 2026. [Online]. Available: https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
          ],
        },
        {
          slug: 'human-in-the-loop-ai-adoption',
          title: 'AI Adoption Works When People Get a Better Job, Not Just a New Tool',
          excerpt: 'Training should be tied to redesigned roles, review standards, and team rituals. Otherwise AI becomes another underused system beside the real workflow.',
          category: 'Change Management',
          date: '2026-05-22',
          readTime: '7 min read',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
          lead: 'AI adoption is a work-design problem. People use AI well when they know which decisions remain theirs, what quality bar changed, and how the tool fits into daily delivery.',
          sections: [
            {
              title: 'What to do',
              body: [
                'Start with role-level workflows, not generic prompt classes. A sales analyst, service manager, engineer, and finance controller need different examples, risks, approval rules, and success metrics.',
                'Define the human-in-the-loop standard. Teams should know when to accept, edit, reject, escalate, or document AI output. That standard protects quality and gives employees confidence to use the system.',
              ],
            },
            {
              title: 'How to do it',
              body: [
                'Create practice sessions around real work artifacts: support cases, project briefs, code reviews, policy summaries, or sales proposals. Teach people to compare AI output against source evidence and business intent.',
                'Update team rituals. Add AI-assisted preparation before meetings, AI-reviewed drafts before handoff, and short retrospectives on where the tool saved time or introduced rework.',
              ],
            },
            {
              title: 'How to sustain it',
              body: [
                'Reward better outcomes, not heavier tool usage. Measure quality, speed, customer experience, and learning loops. Adoption sticks when AI helps the team do more valuable work, not when dashboards shame them into opening another app.',
              ],
            },
          ],
          actions: [
            'Pick one role and rewrite three recurring tasks with explicit AI assistance and human review points.',
            'Create examples of acceptable and unacceptable AI-assisted work for that role.',
            'Measure time saved, rework, and confidence after two delivery cycles.',
          ],
          references: [
            '[1] Deloitte, "The State of AI in the Enterprise," 2026. [Online]. Available: https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
            '[2] McKinsey & Company, "The state of AI in 2025: Agents, innovation, and transformation," Nov. 2025. [Online]. Available: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
            '[3] National Institute of Standards and Technology, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile," NIST AI 600-1, Jul. 2024. [Online]. Available: https://doi.org/10.6028/NIST.AI.600-1',
          ],
        },
      ],
    },
    clientArea: {
      title: 'Client Area',
      unavailableTitle: 'Access is currently unavailable',
      unavailableBody: 'Client authentication is not enabled on this site yet, so this page does not collect usernames or passwords.',
      contactSupport: 'Contact Us',
    },
    seo: {
      keywords: 'digital transformation, platform development, cloud solutions, user experience, technology consulting',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      solutions: 'Soluciones',
      news: 'Noticias',
      contact: 'Contacto',
      clientArea: 'Área de Clientes',
      toggleMenu: 'Alternar menú',
    },
    hero: {
      badge: 'sudo su > Transformación Digital',
      title: 'Transformación Digital Impulsada por Personas',
      subtitle: 'Creamos plataformas que potencian tu negocio con acceso privilegiado a la innovación.',
      cta: 'Comenzar',
      ctaSecondary: 'Saber Más',
      stats: {
        projects: 'Proyectos',
        satisfaction: 'Satisfacción',
        teamMembers: 'Miembros del equipo',
      },
      cards: {
        platformDevelopment: {
          title: 'Desarrollo de Plataformas',
          description: 'Soluciones personalizadas para tus necesidades',
        },
        userCentricDesign: {
          title: 'Diseño Centrado en el Usuario',
          description: 'Experiencias que importan',
        },
        digitalInnovation: {
          title: 'Innovación Digital',
          description: 'Transformando empresas',
        },
      },
    },
    about: {
      title: 'Sobre Usodus',
      description: 'Usodus Systems es una empresa de transformación digital enfocada en crear plataformas. Nuestro nombre proviene de "sudo su" - representando acceso con súper privilegios. Creemos en poner a los usuarios primero, donde ">" representa la terminal, "." representa las personas, y "|" representa "¿y qué?" - un proceso pipe que impulsa el cambio significativo.',
      brandElements: {
        terminal: {
          title: 'Terminal',
          description: 'Representa el poder de la línea de comandos y el acceso directo a los sistemas',
        },
        people: {
          title: 'Personas',
          description: 'Nuestro enfoque en soluciones centradas en el usuario y la conexión humana',
        },
        pipeProcess: {
          title: 'Proceso Pipe',
          description: 'El "¿y qué?" que impulsa la transformación significativa',
        },
      },
      etymologyTitle: 'sudo su',
      etymologyBody: 'Nuestro nombre se deriva del comando Unix "sudo su", que otorga privilegios de superusuario. Esto representa nuestro compromiso de brindar a nuestros clientes un acceso elevado a la transformación digital, empoderándolos con el máximo nivel de control e innovación en sus plataformas.',
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones IA de nivel empresarial, desde prototipos rápidos hasta transformación completa',
      agenticTransformation: {
        title: 'Transformación IA Agentica',
        description: 'Diseña, implementa y escala agentes IA autónomos que ejecuten flujos de trabajo complejos. Desde POCs hasta sistemas de producción que manejan operaciones críticas.',
        badge: 'Servicio Clave',
      },
      platformDevelopment: {
        title: 'Desarrollo de Plataformas',
        description: 'Plataformas escalables integradas con agentes IA. Soluciones personalizadas diseñadas para el crecimiento empresarial.',
      },
      agenticConsulting: {
        title: 'Estrategia IA Agentica',
        description: 'Diseño de arquitectura, marcos de gobernanza y optimización de ROI. Orientación experta desde evaluación de casos de uso hasta despliegue en producción.',
      },
      userExperience: {
        title: 'Integración Centrada en Usuario',
        description: 'Diseña experiencias con humanos en el bucle. Integración fluida de agentes que mejora, no reemplaza, la capacidad humana.',
      },
    },
    solutions: {
      title: 'Soluciones',
      subtitle: 'Soluciones adaptadas para desafíos modernos',
      items: {
        agentArchitecture: {
          title: 'Arquitectura de Agentes',
          subtitle: 'Diseño y Despliegue',
        },
        dataIntegration: {
          title: 'Integración de Datos',
          subtitle: 'Conectores y Pipelines',
        },
        governance: {
          title: 'Gobernanza',
          subtitle: 'Cumplimiento y Control',
        },
        humanInLoop: {
          title: 'Humano en el Bucle',
          subtitle: 'Supervisión y Aprobación',
        },
        cloudDeployment: {
          title: 'Despliegue en la Nube',
          subtitle: 'Infraestructura Escalable',
        },
        performanceMonitoring: {
          title: 'Monitoreo de Rendimiento',
          subtitle: 'Analítica y ROI',
        },
      },
    },
    engagement: {
      title: 'Modelos de Participación',
      subtitle: 'Desde prototipos rápidos hasta transformación a escala empresarial',
      ctaText: 'Comienza hoy tu transformación de IA agéntica',
      ctaButton: 'Agendar Consulta',
      tiers: {
        quickWins: {
          title: 'Resultados Rápidos',
          timeline: '2-4 semanas',
          description: 'POC rápida con plantillas de agentes preconstruidas. Demuestra valor y ROI antes de escalar.',
          highlights: ['Agentes preconstruidos', 'Despliegue rápido', 'Resultados medibles'],
        },
        productionReady: {
          title: 'Listo para Producción',
          timeline: '2-3 meses',
          description: 'Sistemas de agentes completos con marcos de gobernanza y supervisión humana.',
          highlights: ['Arquitectura personalizada', 'Integración empresarial', 'Marcos de cumplimiento'],
        },
        enterpriseScale: {
          title: 'Escala Empresarial',
          timeline: '3-6 meses',
          description: 'Orquestación multiagente con optimización continua y cambio organizacional.',
          highlights: ['Sistemas multiagente', 'Diseño organizacional', 'Optimización continua'],
        },
      },
    },
    contact: {
      title: 'Contáctanos',
      subtitle: 'Hablemos sobre cómo transformar tu presencia digital',
      name: 'Nombre',
      email: 'Correo Electrónico',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      successTitle: '¡Mensaje enviado!',
      successBody: 'Nos pondremos en contacto contigo pronto.',
      placeholders: {
        name: 'Juan Pérez',
        email: 'juan@ejemplo.com',
        message: 'Cuéntanos sobre tu proyecto...',
      },
    },
    footer: {
      tagline: 'Potenciando la transformación digital a través de plataformas centradas en el usuario',
      company: 'Empresa',
      services: 'Servicios',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      rights: 'Todos los derechos reservados.',
    },
    news: {
      title: 'Últimas Noticias',
      latest: 'Notas de estrategia de IA para líderes que llevan pilotos a producción',
      readMore: 'Leer Más',
      backToHome: 'Volver al Inicio',
      backToNews: 'Volver a Noticias',
      actionsTitle: 'Lista de acciones para clientes',
      referencesTitle: 'Referencias',
      items: [
        {
          slug: 'agentic-ai-operating-model',
          title: 'Los agentes de IA necesitan un modelo operativo antes que más herramientas',
          excerpt: 'El camino más rápido al valor no es poner agentes en todas partes. Es elegir pocos flujos, asignar responsables y diseñar controles antes de escalar la autonomía.',
          category: 'Estrategia de IA',
          date: '2026-06-24',
          readTime: '7 min de lectura',
          image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80',
          lead: 'La IA agéntica debe empezar como una decisión de modelo operativo, no como una compra de software. Las empresas que rediseñan flujos, definen dónde queda el juicio humano y miden resultados de negocio están mejor preparadas para salir de los pilotos.',
          sections: [
            {
              title: 'Qué hacer',
              body: [
                'Elige dos o tres flujos donde la autonomía pueda reducir demora sin eliminar responsabilidad. Los mejores primeros casos tienen entradas repetibles, reglas claras, excepciones visibles y problemas medibles de ciclo o calidad.',
                'Asigna a cada agente un responsable de negocio, un responsable técnico, herramientas permitidas, límites de datos y una regla de escalamiento. Trátalo como un trabajador digital gobernado con descripción de cargo, no como un chatbot genérico.',
              ],
            },
            {
              title: 'Cómo hacerlo',
              body: [
                'Mapea el flujo desde el disparador hasta el resultado. Marca cada decisión, punto de contacto con sistemas, aprobación y modo de falla. Después decide qué pasos son solo asistencia, cuáles puede ejecutar el agente y cuáles exigen aprobación humana.',
                'Empieza con autonomía limitada: pocas herramientas, datos acotados, registros de auditoría y control humano para acciones de alto impacto. Amplía solo cuando el agente demuestre calidad estable, costo predecible y baja tasa de excepciones.',
              ],
            },
            {
              title: 'Cómo medirlo',
              body: [
                'Evita métricas de vanidad como cantidad de agentes lanzados. Mide tiempo de ciclo, retrabajo, costo por caso completado, tasa de intervención humana, impacto en clientes e incidentes. Pocos agentes confiables valen más que un catálogo grande que nadie usa.',
              ],
            },
          ],
          actions: [
            'Selecciona un flujo con demora medible y un patrocinador ejecutivo responsable.',
            'Escribe la descripción del agente: objetivo, herramientas, acciones prohibidas, reglas de escalamiento y métricas de éxito.',
            'Ejecuta un piloto de cuatro semanas con auditoría y revisión semanal de calidad antes de ampliar el alcance.',
          ],
          references: [
            '[1] McKinsey & Company, "The state of AI in 2025: Agents, innovation, and transformation," Nov. 2025. [Online]. Available: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
            '[2] Deloitte, "The State of AI in the Enterprise," 2026. [Online]. Available: https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
            '[3] National Institute of Standards and Technology, "AI Risk Management Framework," 2023-2026. [Online]. Available: https://www.nist.gov/itl/ai-risk-management-framework',
          ],
        },
        {
          slug: 'rag-data-readiness',
          title: 'Las respuestas de IA mejoran cuando la base de conocimiento se trata como producto',
          excerpt: 'RAG falla cuando el contenido está viejo, duplicado o sin dueño. La jugada estratégica es productizar el conocimiento empresarial antes de pedirle a la IA que razone sobre él.',
          category: 'Datos y RAG',
          date: '2026-06-18',
          readTime: '8 min de lectura',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
          lead: 'RAG no es una capa mágica sobre documentos desordenados. Es un producto de datos con clientes, reglas de calidad, gestión de ciclo de vida y evaluación. Primero se vuelve confiable el contenido; luego mejoran las respuestas de IA.',
          sections: [
            {
              title: 'Qué hacer',
              body: [
                'Define las preguntas de negocio que el sistema debe responder y construye el corpus alrededor de ellas. No empieces indexando todas las carpetas. Empieza con documentos autoritativos, actuales y útiles para la operación.',
                'Haz que cada fuente tenga responsable. Cada conjunto de contenido necesita dueño, cadencia de actualización, regla de retención, política de acceso y puntaje de calidad. Si nadie lo mantiene, la IA no debe depender de él para trabajo crítico.',
              ],
            },
            {
              title: 'Cómo hacerlo',
              body: [
                'Crea un ciclo de preparación: reúne documentos representativos, crea consultas de prueba, divide contenido por significado, enriquece fragmentos con metadatos, genera embeddings y evalúa recuperación antes de evaluar respuestas generadas.',
                'Usa búsqueda híbrida cuando importan tanto términos exactos como significado semántico. Mide fundamentación, completitud, relevancia y uso de fuentes. Si la recuperación no encuentra la evidencia correcta, ajustar prompts solo tapa el problema.',
              ],
            },
            {
              title: 'Cómo operarlo',
              body: [
                'Programa una revisión mensual del conocimiento para dominios de alto valor. Elimina contenido vencido, une duplicados, prueba nuevas consultas reales y publica un breve reporte de calidad. El objetivo no es un índice más grande, sino más confiable.',
              ],
            },
          ],
          actions: [
            'Inventaría las 50 preguntas principales que empleados o clientes hacen hoy.',
            'Elige un dominio, asigna dueños de fuente y define reglas de frescura y acceso.',
            'Construye un conjunto de evaluación antes del lanzamiento, incluyendo preguntas que el corpus no puede responder.',
          ],
          references: [
            '[1] Amazon Web Services, "Retrieval Augmented Generation options and architectures on AWS," Oct. 2024. [Online]. Available: https://docs.aws.amazon.com/prescriptive-guidance/latest/retrieval-augmented-generation-options/introduction.html',
            '[2] Microsoft, "Design and develop a RAG solution," Azure Architecture Center, Jun. 2026. [Online]. Available: https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide',
            '[3] National Institute of Standards and Technology, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile," NIST AI 600-1, Jul. 2024. [Online]. Available: https://doi.org/10.6028/NIST.AI.600-1',
          ],
        },
        {
          slug: 'ai-governance-with-human-oversight',
          title: 'La gobernanza de IA debe acelerar producción, no congelarla',
          excerpt: 'Una buena gobernanza funciona como sistema de release: clasifica riesgo, define profundidad de revisión y explica qué evidencia se necesita para lanzar con seguridad.',
          category: 'Gobernanza de IA',
          date: '2026-06-12',
          readTime: '7 min de lectura',
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
          lead: 'La gobernanza de IA funciona cuando es práctica para los equipos de producto. El objetivo no es crear un comité para cada prompt; es dar una ruta clara desde idea hasta producción basada en riesgo, evidencia y responsabilidad humana.',
          sections: [
            {
              title: 'Qué hacer',
              body: [
                'Crea tres carriles de lanzamiento: asistencia interna de bajo riesgo, automatización controlada de flujos y soporte a decisiones de alto impacto. Cada carril debe tener su evidencia de aprobación, monitoreo y modelo de supervisión humana.',
                'Define dónde los humanos deben mantener control. Normalmente incluye decisiones reguladas, compromisos financieros, cambios de identidad, acciones sensibles de seguridad y flujos donde un error puede dañar a una persona o relación con cliente.',
              ],
            },
            {
              title: 'Cómo hacerlo',
              body: [
                'Integra la gobernanza a los rituales de entrega. Los briefs deben declarar usuarios, datos, comportamiento esperado, modos de falla, rutas de respaldo y necesidades de auditoría. Las revisiones verifican evidencia, no reabren la estrategia.',
                'Mantén un registro de sistemas de IA. Rastrea dueños, fuentes de datos, modelo/proveedor, nivel de riesgo, resultados de evaluación, incidentes y fechas de revisión. Así liderazgo ve el panorama sin crear reportes artesanales para cada equipo.',
              ],
            },
            {
              title: 'Cómo mantenerla útil',
              body: [
                'Revisa la gobernanza cada trimestre contra incidentes y velocidad de entrega. Si los equipos rodean el proceso, probablemente es vago o lento. Ajusta el estándar, no la ceremonia.',
              ],
            },
          ],
          actions: [
            'Define niveles de riesgo y evidencia de lanzamiento requerida para cada nivel.',
            'Crea un registro de sistemas de IA con dueños de negocio y técnicos.',
            'Agrega reglas de control humano para acciones de alto impacto antes de que los pilotos pasen a producción.',
          ],
          references: [
            '[1] National Institute of Standards and Technology, "AI Risk Management Framework," 2023-2026. [Online]. Available: https://www.nist.gov/itl/ai-risk-management-framework',
            '[2] National Institute of Standards and Technology, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile," NIST AI 600-1, Jul. 2024. [Online]. Available: https://doi.org/10.6028/NIST.AI.600-1',
            '[3] Deloitte, "The State of AI in the Enterprise," 2026. [Online]. Available: https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
          ],
        },
        {
          slug: 'secure-llm-applications',
          title: 'La seguridad de IA empieza con límites de herramientas y contenido no confiable',
          excerpt: 'La inyección de prompts, la agencia excesiva y el manejo débil de salidas son problemas de diseño. La solución empieza antes del primer prompt en producción.',
          category: 'Seguridad de IA',
          date: '2026-06-05',
          readTime: '8 min de lectura',
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
          lead: 'Las aplicaciones con LLM necesitan un modelo de seguridad que asuma que prompts, documentos recuperados y resultados de herramientas pueden ser hostiles. La respuesta práctica es privilegio mínimo, separación de contenido, validación de salidas y aprobación explícita para acciones sensibles.',
          sections: [
            {
              title: 'Qué hacer',
              body: [
                'Clasifica cada entrada por nivel de confianza. Prompts de usuarios, páginas web, archivos cargados, documentos recuperados y respuestas de herramientas no deben tratarse como instrucciones equivalentes. La aplicación debe separar comandos de contenido.',
                'Limita la agencia. Un sistema de IA que puede enviar correos, cambiar registros, ejecutar código o mover dinero necesita permisos de herramientas, límites de transacción, confirmaciones y logs que seguridad pueda inspeccionar.',
              ],
            },
            {
              title: 'Cómo hacerlo',
              body: [
                'Crea una pasarela de herramientas entre el modelo y los sistemas de negocio. Debe autenticar llamadas, validar argumentos, aplicar políticas, redactar secretos y bloquear acciones fuera del rol del agente.',
                'Valida salidas antes de ejecutarlas. Si la salida del modelo se convierte en SQL, código, comando de flujo o contenido para cliente, usa validación determinística y revisión humana cuando la consecuencia sea alta.',
              ],
            },
            {
              title: 'Cómo probarlo',
              body: [
                'Haz pruebas red-team con inyección directa e indirecta de prompts, contenido recuperado manipulado, solicitudes sobredimensionadas e intentos de saltar aprobaciones. Trata los hallazgos como defectos de producto, no como riesgos teóricos.',
              ],
            },
          ],
          actions: [
            'Dibuja un diagrama de límites de confianza para prompts, contenido recuperado, herramientas, logs y salidas.',
            'Aplica privilegio mínimo a cada herramienta accesible por el modelo antes de usarla en producción.',
            'Agrega escenarios de inyección de prompts y agencia excesiva a la suite de pruebas de release.',
          ],
          references: [
            '[1] OWASP Foundation, "OWASP Top 10 for Large Language Model Applications," Version 2025. [Online]. Available: https://owasp.org/www-project-top-10-for-large-language-model-applications/',
            '[2] OWASP Gen AI Security Project, "LLM01:2025 Prompt Injection," 2025. [Online]. Available: https://genai.owasp.org/llmrisk/llm01-prompt-injection/',
            '[3] National Institute of Standards and Technology, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile," NIST AI 600-1, Jul. 2024. [Online]. Available: https://doi.org/10.6028/NIST.AI.600-1',
          ],
        },
        {
          slug: 'ai-value-scorecard',
          title: 'El ROI de IA viene de menos casos de uso, pero mejores',
          excerpt: 'El valor empresarial aparece cuando la IA se conecta a métricas de crecimiento, costo, calidad y tiempo de ciclo. El portafolio debe ser más pequeño de lo que muchos equipos esperan.',
          category: 'Realización de Valor',
          date: '2026-05-29',
          readTime: '7 min de lectura',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
          lead: 'El valor de IA es más fácil de capturar cuando el portafolio está enfocado. Los mejores candidatos no son las demos más llamativas; son flujos donde liderazgo puede nombrar la línea base, financiar el cambio, rediseñar el proceso y medir el resultado.',
          sections: [
            {
              title: 'Qué hacer',
              body: [
                'Construye una tarjeta de valor de IA antes de financiar la implementación. Cada caso debe declarar resultado de negocio, métrica base, beneficio esperado, dueño de adopción, nivel de riesgo, esfuerzo de integración y preparación de datos.',
                'Prioriza casos que mejoran una función central del negocio. La investigación repite la misma lección: el valor escalado viene del rediseño de flujos y la propiedad del liderazgo, no de experimentación amplia sin cambio operativo.',
              ],
            },
            {
              title: 'Cómo hacerlo',
              body: [
                'Ordena oportunidades por valor, factibilidad y control. Un caso de alto valor sin datos limpios o sin dueño de proceso no está listo. Ponlo en un backlog de preparación en lugar de forzar un piloto débil.',
                'Financia el portafolio por olas. La primera ola debe probar el sistema de medición y el modelo operativo. La segunda debe reutilizar componentes de plataforma, activos de evaluación y patrones de gobernanza de la primera.',
              ],
            },
            {
              title: 'Cómo reportarlo',
              body: [
                'Reporta beneficios en términos de negocio: horas removidas de un proceso, casos resueltos sin retrabajo, cotizaciones más rápidas, menor costo de soporte, mayor conversión o menor exposición al riesgo. La adopción importa solo cuando explica esos resultados.',
              ],
            },
          ],
          actions: [
            'Crea una tarjeta de una página para cada oportunidad de IA antes de aprobar construcción.',
            'Detén o rediseña pilotos que no puedan nombrar métrica base y dueño responsable.',
            'Revisa valor del portafolio mensualmente y retira rápido los experimentos de bajo uso.',
          ],
          references: [
            '[1] McKinsey & Company, "The state of AI in 2025: Agents, innovation, and transformation," Nov. 2025. [Online]. Available: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
            '[2] Boston Consulting Group, "AI Leaders Outpace Laggards with Double the Revenue Growth and 40% More Cost Savings," Sep. 2025. [Online]. Available: https://www.bcg.com/press/30september2025-ai-leaders-outpace-laggards-revenue-growth-cost-savings',
            '[3] Deloitte, "The State of AI in the Enterprise," 2026. [Online]. Available: https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
          ],
        },
        {
          slug: 'human-in-the-loop-ai-adoption',
          title: 'La adopción de IA funciona cuando la gente recibe un mejor trabajo, no solo otra herramienta',
          excerpt: 'La capacitación debe conectarse a roles rediseñados, estándares de revisión y rituales de equipo. Si no, la IA termina como otro sistema poco usado al lado del flujo real.',
          category: 'Gestión del Cambio',
          date: '2026-05-22',
          readTime: '7 min de lectura',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
          lead: 'La adopción de IA es un problema de diseño del trabajo. Las personas usan bien la IA cuando saben qué decisiones siguen siendo suyas, qué estándar de calidad cambió y cómo la herramienta encaja en la entrega diaria.',
          sections: [
            {
              title: 'Qué hacer',
              body: [
                'Empieza con flujos por rol, no con clases genéricas de prompts. Un analista comercial, gerente de servicio, ingeniero y controller financiero necesitan ejemplos, riesgos, reglas de aprobación y métricas distintas.',
                'Define el estándar de humano en el bucle. Los equipos deben saber cuándo aceptar, editar, rechazar, escalar o documentar una salida de IA. Ese estándar protege la calidad y da confianza para usar el sistema.',
              ],
            },
            {
              title: 'Cómo hacerlo',
              body: [
                'Crea sesiones prácticas con artefactos reales: casos de soporte, briefs de proyecto, revisiones de código, resúmenes de políticas o propuestas comerciales. Enseña a comparar la salida de IA con evidencia fuente e intención de negocio.',
                'Actualiza rituales del equipo. Agrega preparación asistida por IA antes de reuniones, borradores revisados por IA antes de handoffs y retrospectivas cortas sobre dónde la herramienta ahorró tiempo o generó retrabajo.',
              ],
            },
            {
              title: 'Cómo sostenerlo',
              body: [
                'Premia mejores resultados, no uso más pesado de herramientas. Mide calidad, velocidad, experiencia de cliente y ciclos de aprendizaje. La adopción permanece cuando la IA ayuda al equipo a hacer trabajo más valioso, no cuando un dashboard lo obliga a abrir otra app.',
              ],
            },
          ],
          actions: [
            'Elige un rol y reescribe tres tareas recurrentes con asistencia de IA y puntos explícitos de revisión humana.',
            'Crea ejemplos de trabajo asistido por IA aceptable y no aceptable para ese rol.',
            'Mide tiempo ahorrado, retrabajo y confianza después de dos ciclos de entrega.',
          ],
          references: [
            '[1] Deloitte, "The State of AI in the Enterprise," 2026. [Online]. Available: https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
            '[2] McKinsey & Company, "The state of AI in 2025: Agents, innovation, and transformation," Nov. 2025. [Online]. Available: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
            '[3] National Institute of Standards and Technology, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile," NIST AI 600-1, Jul. 2024. [Online]. Available: https://doi.org/10.6028/NIST.AI.600-1',
          ],
        },
      ],
    },
    clientArea: {
      title: 'Área de Clientes',
      unavailableTitle: 'El acceso no está disponible actualmente',
      unavailableBody: 'La autenticación de clientes aún no está habilitada en este sitio, por lo que esta página no recopila usuarios ni contraseñas.',
      contactSupport: 'Contáctanos',
    },
    seo: {
      keywords: 'transformación digital, desarrollo de plataformas, soluciones en la nube, experiencia de usuario, consultoría tecnológica',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      solutions: 'Soluções',
      news: 'Notícias',
      contact: 'Contato',
      clientArea: 'Área do Cliente',
      toggleMenu: 'Alternar menu',
    },
    hero: {
      badge: 'sudo su > Transformação Digital',
      title: 'Transformação Digital Impulsionada por Pessoas',
      subtitle: 'Criamos plataformas que potencializam seu negócio com acesso privilegiado à inovação.',
      cta: 'Começar',
      ctaSecondary: 'Saiba Mais',
      stats: {
        projects: 'Projetos',
        satisfaction: 'Satisfação',
        teamMembers: 'Membros da equipe',
      },
      cards: {
        platformDevelopment: {
          title: 'Desenvolvimento de Plataformas',
          description: 'Soluções personalizadas para suas necessidades',
        },
        userCentricDesign: {
          title: 'Design Centrado no Usuário',
          description: 'Experiências que importam',
        },
        digitalInnovation: {
          title: 'Inovação Digital',
          description: 'Transformando negócios',
        },
      },
    },
    about: {
      title: 'Sobre a Usodus',
      description: 'Usodus Systems é uma empresa de transformação digital focada em criar plataformas. Nosso nome vem de "sudo su" - representando acesso com super privilégios. Acreditamos em colocar os usuários em primeiro lugar, onde ">" representa o terminal, "." representa as pessoas, e "|" representa "e daí?" - um processo pipe que impulsiona mudanças significativas.',
      brandElements: {
        terminal: {
          title: 'Terminal',
          description: 'Representa o poder da linha de comando e o acesso direto a sistemas',
        },
        people: {
          title: 'Pessoas',
          description: 'Nosso foco em soluções centradas no usuário e na conexão humana',
        },
        pipeProcess: {
          title: 'Processo Pipe',
          description: 'O "e daí?" que impulsiona transformações significativas',
        },
      },
      etymologyTitle: 'sudo su',
      etymologyBody: 'Nosso nome deriva do comando Unix "sudo su", que concede privilégios de superusuário. Isso representa nosso compromisso de oferecer aos clientes acesso elevado à transformação digital, capacitando-os com o mais alto nível de controle e inovação em suas plataformas.',
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções de IA de nível empresarial, desde prototipagem rápida até transformação em escala',
      agenticTransformation: {
        title: 'Transformação IA Agencial',
        description: 'Projete, implemente e escale agentes IA autônomos que executem fluxos de trabalho complexos. De POCs a sistemas de produção que lidam com operações críticas.',
        badge: 'Serviço Principal',
      },
      platformDevelopment: {
        title: 'Desenvolvimento de Plataformas',
        description: 'Plataformas escaláveis integradas com agentes IA. Soluções personalizadas projetadas para crescimento empresarial.',
      },
      agenticConsulting: {
        title: 'Estratégia IA Agencial',
        description: 'Design de arquitetura, frameworks de governança e otimização de ROI. Orientação especializada da avaliação de casos de uso ao desdobramento em produção.',
      },
      userExperience: {
        title: 'Integração Centrada no Usuário',
        description: 'Projete experiências com humanos no loop. Integração perfeita de agentes que aprimora, não substitui, a capacidade humana.',
      },
    },
    solutions: {
      title: 'Soluções',
      subtitle: 'Soluções personalizadas para desafios modernos',
      items: {
        agentArchitecture: {
          title: 'Arquitetura de Agentes',
          subtitle: 'Design e Implantação',
        },
        dataIntegration: {
          title: 'Integração de Dados',
          subtitle: 'Conectores e Pipelines',
        },
        governance: {
          title: 'Governança',
          subtitle: 'Conformidade e Controle',
        },
        humanInLoop: {
          title: 'Humano no Loop',
          subtitle: 'Supervisão e Aprovação',
        },
        cloudDeployment: {
          title: 'Implantação em Nuvem',
          subtitle: 'Infraestrutura Escalável',
        },
        performanceMonitoring: {
          title: 'Monitoramento de Performance',
          subtitle: 'Analytics e ROI',
        },
      },
    },
    engagement: {
      title: 'Modelos de Engajamento',
      subtitle: 'Da prototipagem rápida à transformação em escala empresarial',
      ctaText: 'Comece hoje sua transformação de IA agencial',
      ctaButton: 'Agendar Consultoria',
      tiers: {
        quickWins: {
          title: 'Ganhos Rápidos',
          timeline: '2-4 semanas',
          description: 'POC rápida com modelos de agentes pré-construídos. Comprove valor e ROI antes de escalar.',
          highlights: ['Agentes pré-construídos', 'Implantação rápida', 'Resultados mensuráveis'],
        },
        productionReady: {
          title: 'Pronto para Produção',
          timeline: '2-3 meses',
          description: 'Sistemas de agentes completos com frameworks de governança e supervisão humana.',
          highlights: ['Arquitetura personalizada', 'Integração empresarial', 'Frameworks de conformidade'],
        },
        enterpriseScale: {
          title: 'Escala Empresarial',
          timeline: '3-6 meses',
          description: 'Orquestração multiagente com otimização contínua e mudança organizacional.',
          highlights: ['Sistemas multiagente', 'Design organizacional', 'Otimização contínua'],
        },
      },
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos discutir como transformar sua presença digital',
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      successTitle: 'Mensagem enviada!',
      successBody: 'Entraremos em contato em breve.',
      placeholders: {
        name: 'João Silva',
        email: 'joao@exemplo.com',
        message: 'Conte-nos sobre seu projeto...',
      },
    },
    footer: {
      tagline: 'Capacitando a transformação digital através de plataformas focadas no usuário',
      company: 'Empresa',
      services: 'Serviços',
      legal: 'Legal',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      rights: 'Todos os direitos reservados.',
    },
    news: {
      title: 'Últimas Notícias',
      latest: 'Notas de estratégia de IA para líderes que levam pilotos à produção',
      readMore: 'Leia Mais',
      backToHome: 'Voltar ao Início',
      backToNews: 'Voltar para Notícias',
      actionsTitle: 'Lista de ações para clientes',
      referencesTitle: 'Referências',
      items: [
        {
          slug: 'agentic-ai-operating-model',
          title: 'Agentes de IA precisam de um modelo operacional antes de mais ferramentas',
          excerpt: 'O caminho mais rápido para valor não é colocar agentes em todos os lugares. É escolher poucos fluxos, definir responsáveis e desenhar controles antes de escalar autonomia.',
          category: 'Estratégia de IA',
          date: '2026-06-24',
          readTime: '7 min de leitura',
          image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80',
          lead: 'IA agencial deve começar como uma decisão de modelo operacional, não como uma compra de software. Empresas que redesenham fluxos, definem onde o julgamento humano permanece e medem resultados de negócio ficam melhor preparadas para sair dos pilotos.',
          sections: [
            {
              title: 'O que fazer',
              body: [
                'Escolha dois ou três fluxos em que a autonomia possa reduzir demora sem remover responsabilidade. Bons primeiros casos têm entradas repetíveis, regras claras, caminhos de exceção visíveis e problemas mensuráveis de ciclo ou qualidade.',
                'Atribua a cada agente um dono de negócio, um dono técnico, ferramentas permitidas, limites de dados e uma regra de escalonamento. Trate o agente como um trabalhador digital governado com descrição de função, não como um chatbot genérico.',
              ],
            },
            {
              title: 'Como fazer',
              body: [
                'Mapeie o fluxo do gatilho ao resultado. Marque cada decisão, ponto de contato com sistemas, aprovação e modo de falha. Depois decida quais etapas são apenas assistência, quais o agente pode executar e quais exigem aprovação humana.',
                'Comece com autonomia restrita: ferramentas limitadas, dados delimitados, logs de auditoria e ponto de controle humano para ações de alto impacto. Expanda apenas quando o agente demonstrar qualidade estável, custo previsível e baixa taxa de exceções.',
              ],
            },
            {
              title: 'Como medir',
              body: [
                'Evite métricas de vaidade, como quantidade de agentes lançados. Acompanhe tempo de ciclo, retrabalho, custo por caso concluído, taxa de intervenção humana, impacto no cliente e incidentes. Poucos agentes confiáveis valem mais do que um catálogo grande que ninguém confia.',
              ],
            },
          ],
          actions: [
            'Selecione um fluxo com atraso mensurável e um patrocinador executivo responsável.',
            'Escreva a descrição do agente: objetivo, ferramentas, ações proibidas, regras de escalonamento e métricas de sucesso.',
            'Execute um piloto de quatro semanas com logs de auditoria e revisão semanal de qualidade antes de ampliar o escopo.',
          ],
          references: [
            '[1] McKinsey & Company, "The state of AI in 2025: Agents, innovation, and transformation," Nov. 2025. [Online]. Available: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
            '[2] Deloitte, "The State of AI in the Enterprise," 2026. [Online]. Available: https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
            '[3] National Institute of Standards and Technology, "AI Risk Management Framework," 2023-2026. [Online]. Available: https://www.nist.gov/itl/ai-risk-management-framework',
          ],
        },
        {
          slug: 'rag-data-readiness',
          title: 'Respostas de IA melhoram quando a base de conhecimento é tratada como produto',
          excerpt: 'RAG falha quando o conteúdo está velho, duplicado ou sem dono. A jogada estratégica é productizar o conhecimento empresarial antes de pedir que a IA raciocine sobre ele.',
          category: 'Dados e RAG',
          date: '2026-06-18',
          readTime: '8 min de leitura',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80',
          lead: 'RAG não é uma camada mágica sobre documentos bagunçados. É um produto de dados com clientes, regras de qualidade, gestão de ciclo de vida e avaliação. Times que tornam o conteúdo confiável primeiro obtêm respostas de IA mais confiáveis depois.',
          sections: [
            {
              title: 'O que fazer',
              body: [
                'Defina as perguntas de negócio que o sistema deve responder e construa o corpus ao redor delas. Não comece indexando todas as pastas. Comece pelos documentos autoritativos, atuais e úteis para a operação.',
                'Faça cada fonte ter um responsável. Cada conjunto de conteúdo precisa de dono, cadência de atualização, regra de retenção, política de acesso e nota de qualidade. Se ninguém mantém um documento, a IA não deve depender dele em trabalho crítico.',
              ],
            },
            {
              title: 'Como fazer',
              body: [
                'Crie um ciclo de preparação: reúna documentos representativos, crie consultas de teste, divida conteúdo por significado, enriqueça trechos com metadados, gere embeddings e avalie recuperação antes de avaliar respostas geradas.',
                'Use busca híbrida quando termos exatos e significado semântico importam. Meça fundamentação, completude, relevância e uso de fontes. Se a recuperação não encontra a evidência correta, ajustar prompts só esconde a raiz do problema.',
              ],
            },
            {
              title: 'Como operar',
              body: [
                'Defina uma revisão mensal do conhecimento para domínios de alto valor. Remova conteúdo vencido, una duplicados, teste novas consultas de usuários reais e publique um relatório curto de qualidade. O objetivo não é um índice maior; é um índice mais confiável.',
              ],
            },
          ],
          actions: [
            'Inventarie as 50 principais perguntas que funcionários ou clientes fazem hoje.',
            'Escolha um domínio, atribua donos de fonte e defina regras de frescor e acesso.',
            'Construa um conjunto de avaliação antes do lançamento, incluindo perguntas que o corpus não consegue responder.',
          ],
          references: [
            '[1] Amazon Web Services, "Retrieval Augmented Generation options and architectures on AWS," Oct. 2024. [Online]. Available: https://docs.aws.amazon.com/prescriptive-guidance/latest/retrieval-augmented-generation-options/introduction.html',
            '[2] Microsoft, "Design and develop a RAG solution," Azure Architecture Center, Jun. 2026. [Online]. Available: https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/rag/rag-solution-design-and-evaluation-guide',
            '[3] National Institute of Standards and Technology, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile," NIST AI 600-1, Jul. 2024. [Online]. Available: https://doi.org/10.6028/NIST.AI.600-1',
          ],
        },
        {
          slug: 'ai-governance-with-human-oversight',
          title: 'Governança de IA deve encurtar o caminho para produção, não congelá-lo',
          excerpt: 'Boa governança é um sistema de release: classifica risco, define profundidade de revisão e mostra exatamente qual evidência é necessária para lançar com segurança.',
          category: 'Governança de IA',
          date: '2026-06-12',
          readTime: '7 min de leitura',
          image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
          lead: 'Governança de IA funciona quando é prática o suficiente para equipes de produto usarem. O objetivo não é um comitê para cada prompt; é uma rota clara da ideia à produção baseada em risco, evidência e responsabilidade humana.',
          sections: [
            {
              title: 'O que fazer',
              body: [
                'Crie três faixas de lançamento: assistência interna de baixo risco, automação controlada de fluxos e apoio a decisões de alto impacto. Cada faixa deve ter sua própria evidência de aprovação, requisitos de monitoramento e modelo de supervisão humana.',
                'Defina onde humanos devem permanecer no controle. Isso geralmente inclui decisões reguladas, compromissos financeiros, alterações de identidade, ações sensíveis de segurança e qualquer fluxo em que uma resposta errada possa prejudicar uma pessoa ou relação com cliente.',
              ],
            },
            {
              title: 'Como fazer',
              body: [
                'Inclua governança nos rituais de entrega. Briefings de produto devem declarar usuários, dados usados, comportamento do modelo, modos de falha, caminhos de contingência e necessidades de auditoria. Revisões de lançamento devem verificar evidência em vez de reabrir a estratégia.',
                'Mantenha um registro de sistemas de IA. Acompanhe donos, fontes de dados, modelo/provedor, nível de risco, resultados de avaliação, incidentes e datas de revisão. Isso dá visibilidade à liderança sem atrasar cada equipe com relatórios sob medida.',
              ],
            },
            {
              title: 'Como mantê-la útil',
              body: [
                'Revise a governança trimestralmente contra incidentes e velocidade de entrega. Se as equipes contornam o processo, ele provavelmente está vago ou lento demais. Aperte o padrão, não a cerimônia.',
              ],
            },
          ],
          actions: [
            'Defina níveis de risco e evidências de lançamento obrigatórias para cada nível.',
            'Crie um registro de sistemas de IA com donos de negócio e técnicos nomeados.',
            'Adicione regras de controle humano para ações de alto impacto antes que pilotos virem fluxos de produção.',
          ],
          references: [
            '[1] National Institute of Standards and Technology, "AI Risk Management Framework," 2023-2026. [Online]. Available: https://www.nist.gov/itl/ai-risk-management-framework',
            '[2] National Institute of Standards and Technology, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile," NIST AI 600-1, Jul. 2024. [Online]. Available: https://doi.org/10.6028/NIST.AI.600-1',
            '[3] Deloitte, "The State of AI in the Enterprise," 2026. [Online]. Available: https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
          ],
        },
        {
          slug: 'secure-llm-applications',
          title: 'Segurança de IA começa com limites de ferramentas e conteúdo não confiável',
          excerpt: 'Injeção de prompt, agência excessiva e tratamento fraco de saídas são problemas de desenho. A correção começa antes do primeiro prompt chegar à produção.',
          category: 'Segurança de IA',
          date: '2026-06-05',
          readTime: '8 min de leitura',
          image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80',
          lead: 'Aplicações com LLM precisam de um modelo de segurança que assuma que entrada de usuário, documentos recuperados e resultados de ferramentas podem ser hostis. A resposta prática é privilégio mínimo, separação de conteúdo, validação de saídas e aprovação explícita para ações sensíveis.',
          sections: [
            {
              title: 'O que fazer',
              body: [
                'Classifique cada entrada por nível de confiança. Prompts de usuários, páginas web, arquivos enviados, documentos recuperados e respostas de ferramentas não devem ser tratados como instruções equivalentes. A aplicação deve separar comandos de conteúdo.',
                'Limite a agência. Um sistema de IA que pode enviar e-mails, alterar registros, executar código ou mover dinheiro precisa de permissões de ferramenta, limites de transação, etapas de confirmação e logs que segurança consiga inspecionar.',
              ],
            },
            {
              title: 'Como fazer',
              body: [
                'Crie um gateway de ferramentas entre o modelo e os sistemas de negócio. O gateway deve autenticar chamadas, validar argumentos, aplicar política, ocultar segredos e bloquear ações fora do papel do agente.',
                'Valide saídas antes da execução. Se a saída do modelo vira SQL, código, comando de workflow ou conteúdo para cliente, aplique validação determinística e revisão humana quando a consequência for alta.',
              ],
            },
            {
              title: 'Como testar',
              body: [
                'Faça red-team da aplicação com injeção direta e indireta de prompt, conteúdo recuperado envenenado, requisições grandes demais e tentativas de burlar aprovação. Trate achados como defeitos de produto, não como riscos teóricos.',
              ],
            },
          ],
          actions: [
            'Escreva um diagrama de fronteiras de confiança para prompts, conteúdo recuperado, ferramentas, logs e saídas.',
            'Aplique privilégio mínimo a toda ferramenta acessível pelo modelo antes do uso em produção.',
            'Inclua cenários de injeção de prompt e agência excessiva na suíte de testes de release.',
          ],
          references: [
            '[1] OWASP Foundation, "OWASP Top 10 for Large Language Model Applications," Version 2025. [Online]. Available: https://owasp.org/www-project-top-10-for-large-language-model-applications/',
            '[2] OWASP Gen AI Security Project, "LLM01:2025 Prompt Injection," 2025. [Online]. Available: https://genai.owasp.org/llmrisk/llm01-prompt-injection/',
            '[3] National Institute of Standards and Technology, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile," NIST AI 600-1, Jul. 2024. [Online]. Available: https://doi.org/10.6028/NIST.AI.600-1',
          ],
        },
        {
          slug: 'ai-value-scorecard',
          title: 'ROI de IA vem de menos casos de uso, mas melhores',
          excerpt: 'Valor empresarial aparece quando IA está ligada a métricas de crescimento, custo, qualidade e tempo de ciclo. O portfólio deve ser menor do que muitos times imaginam.',
          category: 'Realização de Valor',
          date: '2026-05-29',
          readTime: '7 min de leitura',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80',
          lead: 'Valor de IA é mais fácil de capturar quando o portfólio é focado. Os melhores candidatos não são as demos mais vistosas; são fluxos em que líderes conseguem nomear a linha de base, financiar a mudança, redesenhar o processo e medir o resultado.',
          sections: [
            {
              title: 'O que fazer',
              body: [
                'Construa um scorecard de valor de IA antes de financiar a implementação. Cada caso deve declarar resultado de negócio, métrica de base, benefício esperado, dono da adoção, nível de risco, esforço de integração e prontidão de dados.',
                'Priorize casos que melhoram uma função central do negócio. A pesquisa aponta repetidamente a mesma lição: valor em escala vem de redesenho de workflow e propriedade da liderança, não de experimentação ampla sem mudança operacional.',
              ],
            },
            {
              title: 'Como fazer',
              body: [
                'Classifique oportunidades por valor, viabilidade e controle. Um caso de alto valor sem dados limpos ou dono de processo não está pronto. Coloque-o em um backlog de prontidão em vez de forçar um piloto fraco.',
                'Financie o portfólio em ondas. A primeira onda deve provar o sistema de medição e o modelo operacional. A segunda deve reutilizar componentes de plataforma, ativos de avaliação e padrões de governança da primeira.',
              ],
            },
            {
              title: 'Como reportar',
              body: [
                'Reporte benefícios em termos de negócio: horas removidas de um processo, casos resolvidos sem retrabalho, cotações mais rápidas, menor custo de suporte, maior conversão ou menor exposição a risco. Números de adoção importam apenas quando explicam esses resultados.',
              ],
            },
          ],
          actions: [
            'Crie um scorecard de uma página para cada oportunidade de IA antes de aprovar o desenvolvimento.',
            'Pare ou redesenhe pilotos que não conseguem nomear métrica de base e dono responsável.',
            'Revise o valor do portfólio mensalmente e aposente rapidamente experimentos de baixo uso.',
          ],
          references: [
            '[1] McKinsey & Company, "The state of AI in 2025: Agents, innovation, and transformation," Nov. 2025. [Online]. Available: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
            '[2] Boston Consulting Group, "AI Leaders Outpace Laggards with Double the Revenue Growth and 40% More Cost Savings," Sep. 2025. [Online]. Available: https://www.bcg.com/press/30september2025-ai-leaders-outpace-laggards-revenue-growth-cost-savings',
            '[3] Deloitte, "The State of AI in the Enterprise," 2026. [Online]. Available: https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
          ],
        },
        {
          slug: 'human-in-the-loop-ai-adoption',
          title: 'Adoção de IA funciona quando pessoas recebem um trabalho melhor, não só uma nova ferramenta',
          excerpt: 'Treinamento deve estar ligado a papéis redesenhados, padrões de revisão e rituais de equipe. Caso contrário, IA vira mais um sistema pouco usado ao lado do fluxo real.',
          category: 'Gestão da Mudança',
          date: '2026-05-22',
          readTime: '7 min de leitura',
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
          lead: 'Adoção de IA é um problema de desenho do trabalho. Pessoas usam IA bem quando sabem quais decisões continuam sendo delas, qual padrão de qualidade mudou e como a ferramenta se encaixa na entrega diária.',
          sections: [
            {
              title: 'O que fazer',
              body: [
                'Comece com fluxos por papel, não com aulas genéricas de prompt. Um analista comercial, gerente de serviço, engenheiro e controller financeiro precisam de exemplos, riscos, regras de aprovação e métricas diferentes.',
                'Defina o padrão de humano no loop. As equipes devem saber quando aceitar, editar, rejeitar, escalar ou documentar uma saída de IA. Esse padrão protege a qualidade e dá confiança para usar o sistema.',
              ],
            },
            {
              title: 'Como fazer',
              body: [
                'Crie sessões práticas com artefatos reais: casos de suporte, briefs de projeto, revisões de código, resumos de políticas ou propostas comerciais. Ensine as pessoas a comparar a saída de IA com evidência de origem e intenção de negócio.',
                'Atualize os rituais da equipe. Adicione preparação assistida por IA antes de reuniões, rascunhos revisados por IA antes de handoffs e retrospectivas curtas sobre onde a ferramenta economizou tempo ou gerou retrabalho.',
              ],
            },
            {
              title: 'Como sustentar',
              body: [
                'Recompense melhores resultados, não uso mais pesado da ferramenta. Meça qualidade, velocidade, experiência do cliente e ciclos de aprendizado. Adoção permanece quando IA ajuda a equipe a fazer trabalho mais valioso, não quando dashboards pressionam alguém a abrir outro aplicativo.',
              ],
            },
          ],
          actions: [
            'Escolha um papel e reescreva três tarefas recorrentes com assistência de IA e pontos explícitos de revisão humana.',
            'Crie exemplos de trabalho assistido por IA aceitável e inaceitável para esse papel.',
            'Meça tempo economizado, retrabalho e confiança após dois ciclos de entrega.',
          ],
          references: [
            '[1] Deloitte, "The State of AI in the Enterprise," 2026. [Online]. Available: https://www.deloitte.com/us/en/what-we-do/capabilities/applied-artificial-intelligence/content/state-of-ai-in-the-enterprise.html',
            '[2] McKinsey & Company, "The state of AI in 2025: Agents, innovation, and transformation," Nov. 2025. [Online]. Available: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
            '[3] National Institute of Standards and Technology, "Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile," NIST AI 600-1, Jul. 2024. [Online]. Available: https://doi.org/10.6028/NIST.AI.600-1',
          ],
        },
      ],
    },
    clientArea: {
      title: 'Área do Cliente',
      unavailableTitle: 'O acesso está indisponível no momento',
      unavailableBody: 'A autenticação de clientes ainda não está habilitada neste site, portanto esta página não coleta usuários nem senhas.',
      contactSupport: 'Entre em Contato',
    },
    seo: {
      keywords: 'transformação digital, desenvolvimento de plataformas, soluções em nuvem, experiência do usuário, consultoria em tecnologia',
    },
  },
};

export const getTranslations = (lang: Language): Translations => {
  return translations[lang] || translations.en;
};

export const isLanguage = (value: string | null): value is Language => {
  return value === 'en' || value === 'es' || value === 'pt';
};
