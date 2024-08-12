const story = [
  `<h1>Hello Guys 👋🫂. </h1>
    <p>Starting something new is never easy and web development is not an exception. But how you come out looking strong and resilient matter.</p>

<p>Let me tell you a story about Ada and the Unbreakable Code</p>

<p>Ohh wait! 😧😧. But we all came to see some animations. Peculiar remember there's always light at the end of the tunnel</p>

    `,

  `<h1>The Story of Ada and the Unbreakable Code
</h1> 
<img
          src="ada-illustration.webp"
          alt="ada-illustration"
          class="ada-image"
        />
<p>In a bustling city, in the heart of a neighborhood filled with hopes and dreams, there lived a young woman named Ada. Ada was a tech student, much like you, and her love for technology was deep-rooted. From a young age, she had been fascinated by how things worked—how a few lines of code could make a machine dance to her tune, how data could be transformed into meaningful information, and how technology could change the world.</p><p>But Ada wasn’t always the confident coder she became. In fact, there was a time when Ada doubted herself, just as every tech student does at some point. This is her story.</p>`,

  `<h1>The Challenge</h1> <p>One day, Ada’s instructor gave her class a seemingly impossible task: to create an algorithm that could solve a complex problem in record time. The challenge was daunting. Many of her classmates were overwhelmed, and some even gave up before they started. But Ada decided she would not be defeated by a challenge.</p>`,

  `
  <h1>The Story Continues: Challenge</h1> 
  <p>She spent hours upon hours researching, reading, and learning everything she could about algorithms and data structures. Her nights turned into days as she pored over textbooks and tutorials. But no matter how hard she worked, Ada kept hitting a wall. Her code would either run too slowly or fail altogether. The frustration built up, and she began to doubt herself.</p>`,

  `
  <h1>The Breakthrough</h1> 
  <p>One evening, after yet another unsuccessful attempt, Ada took a walk to clear her mind. As she strolled through the park, she noticed a young child trying to fly a kite. The child would run and the kite would lift slightly, but then it would crash to the ground. Time and again, the child tried, each time making slight adjustments to the string, the tail, or the angle at which they ran. And then, after many failed attempts, the kite finally caught the wind and soared high into the sky.</p>`,

  `
  <h1>The Breakthrough</h1> 
  <p>Ada watched in awe. The child’s persistence and resilience inspired her. She realized that just like flying a kite, coding required patience, perseverance, and a willingness to learn from every failure.</p>
<p>
She returned to her work with renewed energy. This time, she approached the problem differently. Instead of focusing on what wasn’t working, she concentrated on the small victories—each part of the code that did work, each error she managed to fix, each new piece of knowledge she acquired. Slowly but surely, her algorithm began to take shape.</p>`,

  `<h1>The Victory</h1>
<p>After weeks of hard work, countless errors, and many sleepless nights, Ada finally completed her algorithm. And not only did it work, but it also ran faster than she had ever imagined. Her instructor was impressed, and her classmates were inspired by her determination.</p>
<p>Ada’s success didn’t come because she was the smartest in the class. It came because she refused to give up, even when the odds were against her. She embraced every challenge, learned from every mistake, and believed in her ability to overcome any obstacle.</p>
`,

  `<h1>The Lesson</h1>
<p>Today, Ada is a successful software engineer, working on projects that are changing the world. But she never forgets the lessons she learned as a student. She often tells her story to others who feel like giving up, reminding them that the path to success is rarely a straight line. It’s filled with twists, turns, and obstacles. But with persistence, resilience, and a passion for learning, anyone can overcome those challenges.</p>
`,

  `<h1>To the tech student reading this:</h1>
<p>There will be times when the code won’t compile, when the errors seem endless, and when you doubt your own abilities. But remember Ada’s story. Remember that every failure is a step closer to success. Embrace the challenges, learn from the mistakes, and never, ever give up.</p>
<p>The journey might be tough, but the reward at the end is worth every moment of struggle. Keep coding, keep learning, and keep believing in yourself. You have the power to create, innovate, and change the world with your code. Remember the road to clean code is dirty🤕🤕</p>
`,

  `<h1>Sorry I didn't add emoji</h1>
<p>if you read till this point drop a 🫂❤️ emoji on the group and tag a friend to the <a href="https://cleverakanimoh.github.io/animate-borders">story link</a></p>
`,
];

const playPauseButton = document.getElementsByClassName("control-button")[0];

const animatedElement = document.getElementsByClassName("card")[0];

const title = document.getElementsByClassName("title")[0];

let isPlaying = false;
let index = -1;

playPauseButton.onclick = () => {
  index++;

  if (index > story.length) index = 0; // check when index is greater than story length

  // when index equals to the array
  if (index === story.length) {
    animatedElement.innerHTML = `<h1>The Animated Border 🥳🥳🎉🎊🎈</h1><p>Sorry no confetti for you 😂😂😁😁</p> `;
    isPlaying = !isPlaying;
    isPlaying
      ? (playPauseButton.textContent = "Now read with animation")
      : (playPauseButton.textContent = "Start Animation");
    animatedElement.classList.toggle("animated-border");
    return;
  }

  changeStoryPages();
};

function changeStoryPages() {
  title.textContent = "Reading: Ada and the Unbreakable Code";
  animatedElement.innerHTML = story[index];
  playPauseButton.textContent = `Page ${index + 1} / ${story.length}`;
}

console.log(animatedElement.classList); //open your console to see the classList // move it back into the onclick
console.log(animatedElement); //open your console to see the card element
