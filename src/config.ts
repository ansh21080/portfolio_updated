export const config = {
    developer: {
        name: "Ansh",
        fullName: "Ansh Rathod",
        title: "AI/ML Engineer & Data Analyst",
        description: "AI/ML Engineer and Data Analyst building scalable cloud data pipelines, predictive models, and full-stack applications. Passionate about Generative AI, analytics, and data-driven solutions."
    },
    social: {
        github: "ansh21080",
        email: "rathod.ans@northeastern.edu",
        location: "Boston, MA"
    },
    about: {
        title: "About Me",
        description: "As an AI/ML Engineer and Data Analyst, I thrive at the intersection of efficiency and innovation. Recently, I've been deep-diving into Generative AI, building autonomous supply chain tools using LangChain, Pinecone, and LLMs. My goal is to transform massive, fragmented datasets into streamlined, predictive powerhouses—like the AWS Glue pipelines I built that turned 45-minute tasks into 10-minute wins."
    },
    experiences: [
        {
            position: "AI/ML Engineer",
            company: "Baxter",
            period: "Aug 2025 - Mar 2026",
            location: "Deerfield, IL",
            description: "Built cloud data pipelines and conducted predictive modeling to optimize operations and reduce readmission rates.",
            responsibilities: [
                "Built a cloud data pipeline using Python, AWS Glue, PySpark, and EC2, cutting execution time from 45 to 10 minutes.",
                "Developed a Power BI star schema dashboard reducing report generation by 30%.",
                "Analyzed 5 years of claims data with Python (SciPy, Pandas), t-tests, and Chi-squared tests to reduce readmission rates by 15%.",
                "Optimized SQL queries for audit and risk detection, exploring XGBoost and NLP models for predictive insights."
            ],
            technologies: ["Python", "AWS Glue", "PySpark", "Power BI", "SciPy", "Pandas", "XGBoost", "NLP", "SQL"]
        },
        {
            position: "Data Analyst",
            company: "Northeastern University",
            period: "Sep 2024 - Feb 2025",
            location: "Boston, MA",
            description: "Optimized data processing workflows and built analytical dashboards for the admissions team.",
            responsibilities: [
                "Optimized SQL pipelines in Snowflake to process 15,000+ student applications, cutting query runtime by 30%.",
                "Automated data categorization using SQL window functions and CTEs.",
                "Built Power BI dashboards providing real-time applicant tracking for the admissions team."
            ],
            technologies: ["SQL", "Snowflake", "Power BI", "Data Modeling"]
        },
        {
            position: "Software Developer",
            company: "iSoftwareFactory Services LLC",
            period: "Jun 2022 - Jul 2023",
            location: "Mumbai, India",
            description: "Architected and deployed full-stack web applications prioritizing scalability and modern features.",
            responsibilities: [
                "Architected and deployed a full-stack Q&A platform using MongoDB, Express.js, React.js, and Node.js (MERN) with scalable RESTful APIs.",
                "Integrated Razorpay payment gateway for subscription-based features.",
                "Shipped releases on schedule using Agile/Scrum and Git-based version control."
            ],
            technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Agile", "MERN Stack"]
        },
        {
            position: "Data Science/Business Analytics Intern",
            company: "Ernst & Young",
            period: "Jul 2021 - Dec 2021",
            location: "Mumbai, India",
            description: "Developed machine learning pipelines for complex analytics use cases including dimensionality reduction and clustering workflows.",
            responsibilities: [
                "Developed and deployed a robust XGBoost model with dimensionality reduction for high-cardinality features, achieving 94.9% cross-validation accuracy.",
                "Implemented clustering-based signer identification workflows using DBSCAN, hierarchical clustering, and threshold-based clustering.",
                "Automated parameter optimization for improved cross-document robustness."
            ],
            technologies: ["Python", "XGBoost", "DBSCAN", "Clustering", "Machine Learning"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "UBER Real-Time Data Engineering",
            category: "Data Engineering",
            technologies: "PySpark, Kafka, Spark, Azure, Star Schema",
            image: "/images/uber_data.png",
            description: "End-to-end real-time data pipeline inspired by Uber’s architecture. Simulates ride event ingestion, transformation, and creation of analytical datasets. Features real-time analytics for surge pricing, demand forecasting, and driver performance."
        },
        {
            id: 2,
            title: "GenAI Supply Chain Analytics Tool",
            category: "Generative AI",
            technologies: "OpenAI GPT-4, Pinecone, Streamlit, Python, Pandas, BeautifulSoup",
            image: "/images/supply_chain.png",
            description: "Built a Retrieval-Augmented Generation (RAG) system using OpenAI GPT-4, Pinecone, and Streamlit for semantic search and supply chain decision-making, improving forecasting precision by 25%. Automated data collection via web scraping."
        },
        {
            id: 3,
            title: "Intelligent Resume Screening",
            category: "NLP / LLM",
            technologies: "GPT-4, LangChain, Pinecone, Streamlit",
            image: "/images/resume_script.png",
            description: "AI-powered resume screening solution automating candidate evaluation using GPT-4 and LangChain for semantic understanding and Pinecone for vector similarity matching. Reduced screening time organically, achieving 80%+ matching accuracy."
        },
        {
            id: 4,
            title: "Astronomer Airflow ETL Pipeline",
            category: "Workflow Orchestration",
            technologies: "Apache Airflow, Docker, Python, Postgres",
            image: "/images/airflow_etl.png",
            description: "A local Airflow workflow built using Astronomer CLI to demonstrate an ETL pipeline that fetches real-time astronaut data and processes it dynamically via DAGs. End-to-end local Airflow deployment using Docker."
        },
        {
            id: 5,
            title: "AI Football Match Predictor",
            category: "Machine Learning",
            technologies: "Streamlit, Scikit-learn, Pandas, Seaborn",
            image: "/images/ai_football.png",
            description: "Interactive football analytics and prediction platform for English Premier League matches. Provides dashboards for teams and players, predicts match outcomes using ML, and evaluates head-to-head metrics."
        },
        {
            id: 6,
            title: "Stock Price Prediction",
            category: "Applied ML",
            technologies: "CNN, ARIMA, RL, Alpha Vantage API",
            image: "/images/stock_prediction.png",
            description: "An academic project designing and comparing ML algorithms (CNN, RL, ARIMA, Linear Regression) to predict intraday stock prices for informed trading. Attained 77% accuracy utilizing CNN methodologies."
        },
        {
            id: 7,
            title: "Voice4Rights",
            category: "Full Stack Web",
            technologies: "Node.js, React.js, TypeScript, MongoDB, Redux",
            image: "/images/voice4rights.png",
            description: "A scalable web platform for human rights advocacy with API-driven donation processing, increasing user engagement by 40%. Features an AI-powered chatbot reducing inbound inquiries."
        }
    ],
    contact: {
        email: "rathod.ans@northeastern.edu",
        phone: "+1 (617) 319-1525",
        github: "https://github.com/ansh21080",
        linkedin: "https://www.linkedin.com/in/anshr21/",
        twitter: "https://x.com/AnshRathod16132"
    },
    skills: {
        develop: {
            title: "DATA & AI",
            description: "Machine Learning, Analytics & Generative AI",
            details: "Developing data pipelines, predictive models, and LLM-powered applications. Proficient in cloud platforms and modern vector databases.",
            tools: ["Python", "SQL", "AWS", "PySpark", "Snowflake", "OpenAI", "LangChain", "Pinecone", "TensorFlow", "PyTorch"]
        },
        design: {
            title: "DATA SCIENCE / BI",
            description: "Analytics & Business Intelligence",
            details: "Building interactive dashboards, conducting statistical analyses, and deriving actionable insights to drive business decisions.",
            tools: ["Power BI", "Tableau", "DAX", "Pandas", "Scikit-Learn", "SciPy", "A/B Testing", "ETL", "StatsModels"]
        }
    },
    education: [
        {
            degree: "Master of Science in Information Systems",
            institution: "Northeastern University, Boston, MA",
            period: "Sep 2023 – Dec 2025",
            coursework: "Python & Analytics Technology, Business Processes, Predictive Analytics, Probability Theory & Statistics"
        },
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "National Institute of Technology Nagpur, India",
            period: "Jul 2018 – Jun 2022",
            coursework: "Natural Language Processing, Machine Learning in Python, Big Data, Data Structures & Algorithms"
        }
    ]
};
