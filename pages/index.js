Homepage With Sidebar
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  "/images/HEROKITCHEN1.JPG",
  "/images/NEWHERO2.JPG",
  "/images/DINING2.JPG",
  "/images/NEWHERO3.JPG",
  "/images/NEWHERO4.JPG",
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans">
      <Head>
        <title>Halcyon Haus</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Slide ${index}`}
            fill
            style={{
              objectFit: "cover",
              opacity: index === currentIndex ? 0.7 : 0,
              transition: "opacity 1s ease-in-out",
              position: "absolute",
            }}
            priority={index === currentIndex}
          />
        ))}
        <div className="absolute inset-0 bg-white bg-opacity-20 pointer-events-none" />
      </div>

      {/* +MENU BUTTON */}
      <header className="absolute top-0 right-0 z-30 p-6">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="uppercase text-xs tracking-widest font-inter text-white hover:text-neutral-400"
        >
          + Menu
        </button>
      </header>

      {/* CENTERED TITLE */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h1
          className="text-white text-[48px] md:text-[72px] font-bold tracking-widest text-center uppercase"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          HALCYON HAUS
        </h1>
      </div>

      {/* SLIDE-OUT MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-1/4 min-w-[280px] bg-[#f9f9f6] text-black z-50 px-6 py-6 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end text-xs uppercase tracking-wide">
          <button onClick={() => setIsMenuOpen(false)}>Close ×</button>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <img
            src="/logos/HHLOGO.JPG"
            alt="Halcyon Haus Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>

        <p className="mt-6 text-sm text-left font-inter leading-snug max-w-[220px]">
          I’m Nikka, a Colorado-based interior designer crafting warm, curated spaces rooted in California ease and elevated function.
        </p>

        <nav className="mt-6 space-y-4 text-sm tracking-widest font-inter uppercase text-left">
          <Link href="/projects" className="block hover:text-neutral-500">Projects</Link>
          <Link href="/about" className="block hover:text-neutral-500">About</Link>
          <Link href="/contact" className="block hover:text-neutral-500">Get In Touch</Link>
          <a
            href="https://www.shopltk.com/explore/halcyonhaus"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-neutral-500"
          >
            Shop My Home
          </a>
        </nav>

        <div className="absolute bottom-6 left-6 text-xs tracking-wider font-inter uppercase">
          <a
            href="https://www.instagram.com/halcyonhaus_"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-500"
          >
            @HALCYONHAUS_
          </a>
        </div>
      </div>

      <style jsx global>{`
        body {
          margin: 0;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
