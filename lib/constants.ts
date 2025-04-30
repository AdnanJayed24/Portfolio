export type Skill = {
  name: string;
  icon: string;
  proficiency: number; // 1-100
  color: string;
};

export type Achievement = {
  title: string;
  description: string;
  date: string;
  link?: string;
};

export type Credential = {
  name: string;
  id: string;
  issuer: string;
  date: string;
  verificationLink?: string;
};

// Update these with your actual information
export const PORTFOLIO_DATA = {
  name: "Adnan Jayed",
  title: "Software Engineer & Competitive Programmer",
  bio: "I'm a passionate software engineer and competitive programmer with extensive experience in algorithmic problem solving. My technical expertise includes C++, Python, and Java, with a focus on efficient algorithm implementation and data structures.",
  photo: "https://media.licdn.com/dms/image/v2/D4E03AQHNnESSTw0SiQ/profile-displayphoto-shrink_800_800/B4EZaB8ciGHMAc-/0/1745936829872?e=1751500800&v=beta&t=PB0Oi1o_QPyCqEsJwPkFwDfZjeeiokXS-rxDfkA0Uhg", // Replace with your actual photo
  location: "Chattogram, Bangladesh",
  email: "muhammad.adnan.jayed@gmail.com",
  github: "https://github.com/AdnanJayed24",
  linkedin: "https://www.linkedin.com/in/greenheaven24/",
  
  skills: [
    {
      name: "C++",
      icon: "code",
      proficiency: 80,
      color: "text-blue-500"
    },
    {
      name: "Python",
      icon: "code-2",
      proficiency: 50,
      color: "text-yellow-500"
    },
    {
      name: "Java",
      icon: "coffee",
      proficiency: 20,
      color: "text-red-500"
    },
    {
      name: "Data Structures",
      icon: "database",
      proficiency: 60,
      color: "text-green-500"
    },
    {
      name: "Algorithms",
      icon: "git-branch",
      proficiency: 60,
      color: "text-purple-500"
    },
    {
      name: "Problem Solving",
      icon: "puzzle",
      proficiency: 60,
      color: "text-orange-500"
    }
  ],
  
  achievements: [
    {
      title: "ICPC Regionalist",
      description: "Qualified for the ICPC Regional Contest, Ranked 23rd among 2500+ teams.",
      date: "2024",
      link: "https://bapsoj.org/contests/icpc-preliminary-dhaka-site-2024/standings"
    },
    {
      title: "ICPC Regionalist",
      description: "Ranked 98th among 300+ teams",
      date: "2024",
      link: "https://bapsoj.org/contests/icpc-asia-dhaka-regional-contest-2024-onsite-round/standings"
    },
    {
      title: "Codeforces Top 2%",
      description: "Consistently ranked in the top 2% of participants in Codeforces contests.",
      date: "2022-Present",
      link: "https://codeforces.com/contests/with/green_heaven"
    },
    {
      title: "Codechef Top 50",
      description: "Achieved ranking in the top 50 contestants in multiple Codechef competitions.",
      date: "2022-Present",
      link: "https://www.codechef.com/users/green_heaven"
    }
  ],
  
  credentials: [
    {
      name: "ICPC ID",
      id: "NFWW6368F3D0",
      issuer: "International Collegiate Programming Contest",
      verificationLink: "https://icpc.global/ICPCID/NFWW6368F3D0"
    },
    {
      name: "Codeforces Handle",
      id: "green_heaven",
      issuer: "Codeforces",
      verificationLink: "https://codeforces.com/profile/green_heaven"
    },
    {
      name: "Codechef Handle",
      id: "green_heaven",
      issuer: "Codechef",
      verificationLink: "https://www.codechef.com/users/green_heaven"
    }
  ]
};