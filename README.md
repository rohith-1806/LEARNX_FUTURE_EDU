<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>LearnX | AI Learning Platform</title>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap');


*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Inter',sans-serif;<h1 align="center">🚀 LearnX - AI Learning Platform</h1>

<p align="center">
  A next generation education platform built with intelligent course tracking,
  interactive learning, events, AI assistance, and modern user experience.
</p>

---

## 🌟 About The Project

**LearnX** is an AI Powered Learning Management System designed to deliver a smart and interactive digital learning experience.

The platform combines modern UI design, intelligent assistance, structured courses, progress monitoring, event management, and certification features into one complete learning ecosystem.

---

# ✨ Core Features

---

## 🤖 LearnX Helper AI

Smart chatbot assistant that helps students navigate and understand the platform.

The AI assistant guides users with:

- Course information
- Learning progress details
- Event assistance
- Platform usage support
- Quick guidance

---

## 📚 Smart Courses

LearnX provides structured learning paths including:

- Technical courses
- Non Technical courses
- Organized modules
- Roadmap based learning
- Easy course navigation

---

## 🎥 Interactive Course Player

A complete learning environment with:

- Course videos
- Lesson modules
- Study materials
- Assignments
- Learning roadmap
- Progress updates

---

## 📊 Progress Tracking System

Users can monitor their learning journey with:

- Real-time completion tracking
- Persistent learning records
- Course progress percentage
- Continue learning option
- Performance monitoring

---

## 🎯 Events System

Interactive event management system where users can:

- Browse events
- Register for workshops
- Manage participation
- Track upcoming events

---

## 🏆 Certificate Generation

After successful course completion:

- Generate certificates
- Validate achievements
- Showcase completed courses
- Maintain learning records

---

# ⚙️ Tech Stack

## Frontend

- ⚛ React JS
- 🎨 CSS3
- JavaScript
- HTML5

---

## Backend

- 🟢 Node JS
- 🚀 Express JS

---

## Database

- 🍃 MongoDB

---

## Artificial Intelligence

- 🤖 AI Chatbot Assistant
- Smart Learning Support

---

# 🧠 System Architecture

```text
Frontend (React)

        ↓

REST API Integration

        ↓

Node + Express Server

        ↓

MongoDB Database
```

---

# 🖥 Application Screens

## 🏠 Home Page

- Modern landing interface
- Interactive UI
- Responsive design

---

## 📚 Course Dashboard

- Course categories
- Learning paths
- Progress overview

---

## 🎬 Learning Player

- Video learning
- Assignments
- Course roadmap

---

## 🤖 LearnX Helper

- AI powered assistant
- Student support chatbot
- Instant learning guidance

---

# 🎨 UI Highlights

- Modern Glassmorphism Design
- Animated Interface
- Responsive Layout
- Smooth User Experience
- Dark Professional Theme
- Interactive Cards
- AI Integrated Experience

---

# 🚀 Project Vision

LearnX focuses on creating a future-ready digital learning platform by combining:

✔ Artificial Intelligence  
✔ Interactive Education  
✔ Smart Course Management  
✔ Real-Time Progress Tracking  
✔ Modern User Experience  

Built with innovation, creativity, and technology.

---

## 👨‍💻 Creator & Developer

<h2 align="center">Developed By</h2>

<h1 align="center">
🚀 Perumalla Rohith 🚀
</h1>

<p align="center">

Full Stack Developer | AI & ML Enthusiast | UI/UX Designer

</p>

<p align="center">

Designed and developed LearnX with a vision to build an intelligent,
interactive, and user-friendly AI learning platform.

</p>

---

<p align="center">

⭐ If you like this project, support it by giving a star ⭐

</p>

<p align="center">

🚀 LearnX © 2026 | Created by Perumalla Rohith

</p>
}


html{
    scroll-behavior:smooth;
}


body{

    min-height:100vh;

    background:
    radial-gradient(circle at 20% 20%,#7c3aed55,transparent 35%),
    radial-gradient(circle at 80% 10%,#06b6d455,transparent 35%),
    #050816;

    color:white;

    overflow-x:hidden;

}




/* BACKGROUND ANIMATION */


body::before{

content:"";

position:fixed;

width:300px;
height:300px;

background:#7c3aed;

filter:blur(180px);

animation:move 8s infinite alternate;

}


@keyframes move{

from{

left:5%;
top:10%;

}

to{

left:70%;
top:70%;

}

}









.container{

width:90%;
max-width:1200px;

margin:auto;

position:relative;

z-index:2;

}







/* HERO */


.hero{

height:100vh;

display:flex;

flex-direction:column;

align-items:center;

justify-content:center;

text-align:center;

}



.logo{

font-size:90px;

font-weight:900;


background:
linear-gradient(
90deg,
#fff,
#8b5cf6,
#22d3ee
);

background-size:300%;

-webkit-background-clip:text;

color:transparent;

animation:text 4s infinite alternate;

}



@keyframes text{

to{

background-position:300%;

}

}



.hero h2{

font-size:28px;

margin-top:20px;

color:#cbd5e1;

}



.hero p{

margin-top:25px;

max-width:700px;

line-height:1.8;

color:#94a3b8;

font-size:18px;

}







.badges{

margin-top:40px;

}


.badges span{


display:inline-block;

margin:10px;

padding:12px 24px;

border-radius:50px;

background:
rgba(255,255,255,.08);

border:
1px solid rgba(255,255,255,.15);

backdrop-filter:blur(15px);

}








.title{

text-align:center;

font-size:45px;

margin:80px 0 50px;

}







.grid{

display:grid;

grid-template-columns:
repeat(auto-fit,minmax(280px,1fr));

gap:25px;

}






.card{

padding:35px;

border-radius:25px;


background:
rgba(255,255,255,.07);


border:
1px solid rgba(255,255,255,.15);


backdrop-filter:
blur(20px);


transition:.35s;

}



.card:hover{

transform:
translateY(-10px);


box-shadow:
0 0 40px #7c3aed88;

border-color:#8b5cf6;

}



.card h3{

font-size:23px;

margin-bottom:15px;

}



.card p{

color:#cbd5e1;

line-height:1.7;

}










.tech{

display:flex;

flex-wrap:wrap;

justify-content:center;

gap:18px;

}



.tech span{


padding:16px 30px;


background:
linear-gradient(
135deg,
#111827,
#1e1b4b
);


border:

1px solid #4338ca;


border-radius:16px;


font-weight:700;

}









.arch{


text-align:center;

font-size:25px;

line-height:2.2;

padding:40px;


background:
rgba(255,255,255,.06);


border-radius:30px;


border:
1px solid rgba(255,255,255,.15);

}









.screen{


height:180px;

display:flex;

align-items:center;

justify-content:center;


font-size:22px;

font-weight:800;


background:
linear-gradient(
135deg,
#7c3aed55,
#06b6d455
);


border-radius:25px;

}









.footer{


margin-top:100px;

padding:40px;

text-align:center;

color:#94a3b8;

}







</style>

</head>

<body>



<div class="container">






<section class="hero">


<h1 class="logo">

🚀 LearnX

</h1>


<h2>

AI Powered Learning Management System

</h2>



<p>

A next generation education platform built with intelligent
course tracking, interactive learning, events,
AI assistance and modern user experience.

</p>




<div class="badges">

<span>🤖 AI Assistant</span>

<span>⚛ MERN Stack</span>

<span>🎯 Smart LMS</span>

<span>🔥 Modern UI</span>

</div>


</section>











<h1 class="title">

✨ Core Features

</h1>



<div class="grid">



<div class="card">

<h3>🤖 LearnX Helper AI</h3>

<p>

Smart chatbot assistant that guides students
through courses, progress, events and platform usage.

</p>

</div>





<div class="card">

<h3>📚 Smart Courses</h3>

<p>

Technical and Non Technical learning paths with
structured modules.

</p>

</div>





<div class="card">

<h3>🎥 Course Player</h3>

<p>

Interactive roadmap with videos, lessons,
assignments and learning progress.

</p>

</div>






<div class="card">

<h3>📊 Progress Tracking</h3>

<p>

Real time completion tracking with persistent
learning records.

</p>

</div>






<div class="card">

<h3>🎯 Events System</h3>

<p>

Register, manage and participate in learning
events and workshops.

</p>

</div>






<div class="card">

<h3>🏆 Certificates</h3>

<p>

Generate certificates after successful course
completion.

</p>

</div>




</div>










<h1 class="title">

⚙️ Tech Stack

</h1>



<div class="tech">


<span>⚛ React JS</span>

<span>🎨 CSS3</span>

<span>🟢 Node JS</span>

<span>🚀 Express</span>

<span>🍃 MongoDB</span>

<span>🤖 AI Bot</span>


</div>










<h1 class="title">

🧠 Architecture

</h1>



<div class="arch">

Frontend (React)

<br>

⬇

<br>

REST API Integration

<br>

⬇

<br>

Node + Express Server

<br>

⬇

<br>

MongoDB Database


</div>











<h1 class="title">

🖥 Screens

</h1>



<div class="grid">


<div class="screen">

🏠 Home Page

</div>



<div class="screen">

📚 Course Dashboard

</div>



<div class="screen">

🎬 Learning Player

</div>



<div class="screen">

🤖 LearnX Helper

</div>



</div>











<div class="footer">


Designed & Developed with 💜

<br><br>

🚀 LearnX © 2026


</div>






</div>


</body>

</html>
