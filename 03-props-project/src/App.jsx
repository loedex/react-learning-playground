import React from 'react'
import Card from './components/Card'


const App = () => {
  const jobOpenings = [
  {
    "id":1,
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png",
    "companyName": "Google",
    "timeSincePosted": "posted 5 minutes ago",
    "tag1": "Design",
    "tag2": "UI/UX",
    "tag3": "Systems",
    "jobHeading": "Senior Product Designer - Android Design System",
    "jobShortDescription": "Lead the evolution of Material Design components across flagship Android experiences and multi-device platforms.",
    "ratePerHour": "$115"
  },
  {
    "id":2,
    "companyLogo": "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg",
    "companyName": "Meta",
    "timeSincePosted": "posted 12 minutes ago",
    "tag1": "Engineering",
    "tag2": "React",
    "tag3": "GraphQL",
    "jobHeading": "Staff Frontend Engineer - Instagram Web",
    "jobShortDescription": "Architect scalable frontend web infrastructure and user-facing features for over a billion daily active users.",
    "ratePerHour": "$135"
  },
  {
    "id":3,
    "companyLogo": "https://pngdownload.io/wp-content/uploads/2023/12/Apple-Logo-Iconic-Tech-Brand-Symbol-PNG-Transparent-Representation-of-Innovation-and-Design-jpg.webp",
    "companyName": "Apple",
    "timeSincePosted": "posted 28 minutes ago",
    "tag1": "Design",
    "tag2": "Human Interface",
    "tag3": "iOS",
    "jobHeading": "Human Interface Designer - VisionOS",
    "jobShortDescription": "Craft intuitive spatial computing interfaces and user interactions for next-generation spatial hardware.",
    "ratePerHour": "$125"
  },
  {
    "id":4,
    "companyLogo": "https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg",
    "companyName": "Amazon",
    "timeSincePosted": "posted 45 minutes ago",
    "tag1": "Cloud",
    "tag2": "AWS",
    "tag3": "DevOps",
    "jobHeading": "Senior AWS Cloud Solutions Architect",
    "jobShortDescription": "Design fault-tolerant, high-concurrency cloud infrastructure solutions for global enterprise retail platforms.",
    "ratePerHour": "$110"
  },
  {
    "id":5,
    "companyLogo": "https://static.vecteezy.com/system/resources/previews/042/165/794/non_2x/netflix-logo-transparent-background-free-png.png",
    "companyName": "Netflix",
    "timeSincePosted": "posted 1 hour ago",
    "tag1": "Engineering",
    "tag2": "Systems",
    "tag3": "Java",
    "jobHeading": "Senior Backend Engineer - Streaming Core",
    "jobShortDescription": "Optimize low-latency video delivery microservices and content routing algorithms serving worldwide streams.",
    "ratePerHour": "$140"
  },
  {
    "id":6,
    "companyLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVooNbmrQduvFXQhUp5e9GUajxnf-ZuEhnIJ0kRLXW8ZZQwnsCTpAUmg&s=10",
    "companyName": "Microsoft",
    "timeSincePosted": "posted 1 hour ago",
    "tag1": "AI & ML",
    "tag2": "PyTorch",
    "tag3": "Azure",
    "jobHeading": "Principal AI Research Engineer - Copilot",
    "jobShortDescription": "Train and fine-tune large language models integrated directly into enterprise productivity tools.",
    "ratePerHour": "$150"
  },
  {
    "id":7,
    "companyLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZOIT53oxnTjkFAL7YdYR1cgp8IY0fgJlAFJWPeWP6Wy7Iz55DyqeyQM&s=10",
    "companyName": "NVIDIA",
    "timeSincePosted": "posted 2 hours ago",
    "tag1": "Hardware",
    "tag2": "CUDA",
    "tag3": "C++",
    "jobHeading": "Senior Graphics Performance Engineer",
    "jobShortDescription": "Develop and optimize high-performance CUDA algorithms for real-time ray tracing and neural rendering.",
    "ratePerHour": "$145"
  },
  {
    "id":8,
    "companyLogo": "https://www.pngplay.com/wp-content/uploads/13/Tesla-Logo-PNG-HD-Quality.png",
    "companyName": "Tesla",
    "timeSincePosted": "posted 2 hours ago",
    "tag1": "Robotics",
    "tag2": "AI",
    "tag3": "C++",
    "jobHeading": "Autopilot Computer Vision Engineer",
    "jobShortDescription": "Build state-of-the-art neural network pipelines for real-time object detection and trajectory planning.",
    "ratePerHour": "$130"
  },
  {
    "id":9,
    "companyLogo": "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    "companyName": "Adobe",
    "timeSincePosted": "posted 3 hours ago",
    "tag1": "Design",
    "tag2": "UX Research",
    "tag3": "Figma",
    "jobHeading": "Lead UX Researcher - Creative Cloud",
    "jobShortDescription": "Conduct qualitative research to shape workflows for vector graphic tools and generative AI features.",
    "ratePerHour": "$95"
  },
  {
    "id":10,
    "companyLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRctQHNKlkEsXVexZAmmrmpb-rYIIbAQIBWKltrsIbh1fbuNWSJZxtSx9Y-&s=10",
    "companyName": "Salesforce",
    "timeSincePosted": "posted 3 hours ago",
    "tag1": "Enterprise",
    "tag2": "Apex",
    "tag3": "Lightning",
    "jobHeading": "Senior Salesforce Architect - Einstein AI",
    "jobShortDescription": "Build customized predictive AI workflows and automated business applications on the Lightning platform.",
    "ratePerHour": "$105"
  },
  {
    "id":11,
    "companyLogo": "https://static.vecteezy.com/system/resources/thumbnails/050/816/820/small/uber-transparent-icon-free-png.png",
    "companyName": "Uber",
    "timeSincePosted": "posted 4 hours ago",
    "tag1": "Data",
    "tag2": "Go",
    "tag3": "Kafka",
    "jobHeading": "Senior Data Infrastructure Engineer",
    "jobShortDescription": "Maintain real-time streaming data pipelines handling dynamic pricing and driver dispatch services.",
    "ratePerHour": "$120"
  },
  {
    "id":12,
    "companyLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrnuNRd0ScoaMfLEE3D2dyF_L-chA3UjKEwdXJnS-FkC8FD8HtthTyUcCS&s=10",
    "companyName": "Airbnb",
    "timeSincePosted": "posted 4 hours ago",
    "tag1": "Design",
    "tag2": "Product",
    "tag3": "Prototyping",
    "jobHeading": "Staff Product Designer - Host Experience",
    "jobShortDescription": "Reimagine hosting tools and financial dashboards using high-fidelity prototypes and user testing.",
    "ratePerHour": "$125"
  },
  {
    "id":13,
    "companyLogo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/500px-Spotify_App_Logo.svg.png?_=20210620075506",
    "companyName": "Spotify",
    "timeSincePosted": "posted 5 hours ago",
    "tag1": "Mobile",
    "tag2": "Swift",
    "tag3": "iOS",
    "jobHeading": "Senior iOS Engineer - Personalization",
    "jobShortDescription": "Deliver algorithmic discovery features and custom audio player interfaces to tens of millions of mobile users.",
    "ratePerHour": "$100"
  },
  {
    "id":14,
    "companyLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxy-5OTXaG38HzRLOdxhpA0_a9FX1B9Xz__27MSV6N2g3N19z6DaBiolht&s=10",
    "companyName": "Snowflake",
    "timeSincePosted": "posted 6 hours ago",
    "tag1": "Database",
    "tag2": "SQL",
    "tag3": "Rust",
    "jobHeading": "Database Core Systems Engineer",
    "jobShortDescription": "Optimize high-throughput, cloud-native SQL query engines with low-level memory control in Rust.",
    "ratePerHour": "$130"
  },
  {
    "id":15,
    "companyLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4qr782G6MTFEN_nmKI7NPMn432pm7DTpD7SnlEZzVYw9xrcVDis97U8c&s=10",
    "companyName": "Palantir",
    "timeSincePosted": "posted 7 hours ago",
    "tag1": "Security",
    "tag2": "Python",
    "tag3": "Kubernetes",
    "jobHeading": "Forward Deployed Software Engineer",
    "jobShortDescription": "Deploy high-security analytics foundations and custom data integrations for enterprise and defense clients.",
    "ratePerHour": "$115"
  },
  {
    "id":16,
    "companyLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEfjP3pri_6zNQZmNH5LzdIuq5QTFNwiHwlAo-jbRqwIOJ0tE6TnUEeARU&s=10",
    "companyName": "Oracle",
    "timeSincePosted": "posted 8 hours ago",
    "tag1": "Infrastructure",
    "tag2": "Terraform",
    "tag3": "OCI",
    "jobHeading": "Principal Cloud Infrastructure Engineer",
    "jobShortDescription": "Automate multi-region cloud provisioning and container orchestrations across Oracle Cloud Infrastructure.",
    "ratePerHour": "$105"
  },
  {
    "id":17,
    "companyLogo": "https://icon2.cleanpng.com/20180501/jtw/kisspng-cisco-systems-logo-company-dare-5ae84d58143b81.6492739415251735920829.jpg",
    "companyName": "Cisco",
    "timeSincePosted": "posted 9 hours ago",
    "tag1": "Networking",
    "tag2": "Cybersecurity",
    "tag3": "C++",
    "jobHeading": "Senior Network Security Architect",
    "jobShortDescription": "Design zero-trust network architectures and automated threat protection mechanisms for enterprise hardware.",
    "ratePerHour": "$90"
  },
  {
    "id":18,
    "companyLogo": "https://logoeps.com/wp-content/uploads/2025/02/Intel-logo.png",
    "companyName": "Intel",
    "timeSincePosted": "posted 10 hours ago",
    "tag1": "Hardware",
    "tag2": "Verilog",
    "tag3": "Silicon",
    "jobHeading": "SoC Verification Engineer",
    "jobShortDescription": "Verify complex System-on-Chip designs through functional simulation and emulation models before tape-out.",
    "ratePerHour": "$100"
  },
  {
    "id":19,
    "companyLogo": "https://www.logo.dev/_next/image?url=https%3A%2F%2Fimg.logo.dev%2Fibm.com%3Ftoken%3Dlive_6a1a28fd-6420-4492-aeb0-b297461d9de2%26size%3D128%26retina%3Dtrue%26format%3Dpng&w=3840&q=75",
    "companyName": "IBM",
    "timeSincePosted": "posted 12 hours ago",
    "tag1": "Quantum",
    "tag2": "Qiskit",
    "tag3": "Python",
    "jobHeading": "Quantum Computing Application Developer",
    "jobShortDescription": "Implement quantum algorithms and hybrid quantum-classical workflows using the Qiskit framework.",
    "ratePerHour": "$110"
  },
  {
    "id":20,
    "companyLogo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxkR3C72A3LPIDWbGTP_XcG6IRn-f7DYGm-XKEAizo2Die6Fs6MkS_4Bk&s=10",
    "companyName": "LinkedIn",
    "timeSincePosted": "posted 14 hours ago",
    "tag1": "Engineering",
    "tag2": "Java",
    "tag3": "Systems",
    "jobHeading": "Senior Backend Engineer - Feed & Recommendations",
    "jobShortDescription": "Optimize real-time feed ranking algorithms and high-throughput notification networks.",
    "ratePerHour": "$115"
  }
];
  return (
    <div className='card-wrapper'>
      {
        jobOpenings.map((e)=>(
          <Card key={e.id}  {...e}/>
        ))
      }
    </div>
  );
}

export default App