const stringDictionary = {
    btn0: `
        <h1>About Me</h1>
        <p>
            Hey there! I'm Thomas, a seasoned developer with a passion for pushing boundaries in the embedded systems realm.
            My journey in development began in 2016 when I dived into the Android Open Source Project.
            Since then, I've honed my skills and gained extensive experience, particularly in the embedded domain,
            with a focus on Qualcomm devices.
        </p>
        <svg style="bottom: 0;" width="9" height="9" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg>
        <a href="mailto:infus38@gmail.com"> Contact Me</a>
        <svg style="bottom: 0; margin-left: 1%" width="9" height="9" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg>
        <a href="./resources/cv-en.pdf" target="_blank">My Resume</a>
    `,
    btn1: `
        <h1>Experience and Expertise</h1>
        <h4>Crafting Code, Shaping the Future</h4>
        <p>
            Over the years, I've delved into various programming languages, including C, C++, Python, HTML, CSS, JS, and C#.
            These tools enable me to tackle diverse development challenges effectively.
        </p>
        <img src="./img/1.png"/><img src="./img/2.png"/><img src="./img/3.png"/>
        <h2><u>Problem-Solving and Collaboration:</u> <i>Innovating Together</i></h2>
        <p>
            Problem-based learning has been the core of my education at CESI, a school where I've been immersed in various real-world projects.
            Continuously working on fresh problems has sharpened my analytical and problem-solving skills.
            Furthermore, collaborating with multidisciplinary teams both in the Android Open Source community and at Guerbet
            has enhanced my ability to work effectively in diverse environments.
        </p>
        <h2><u>Contributions to the Developer Community:</u> <i>Sharing Knowledge, Empowering Others</i></h2>
        <p>
            Contributing to the Android community has been an integral part of my journey.
            I have released my work for the Xperia E3 on platforms like XDA for end-users and GitHub for fellow developers.
            Additionally, I've actively supported and helped individuals in Telegram groups,
            providing assistance and guidance to resolve issues and bring newer Android versions to their devices.
        </p>
        <h2><u>Notable Projects:</u> <i>Achievements and Impact</i></h2>
        <p>
            I take pride in my accomplishments, such as successfully bringing Android Nougat to the Xperia E3,
            a remarkable achievement that extended the lifespan of the device.
            Additionally, I contributed to Guerbet's augmented intelligence algorithms in medical imaging
            by building a test platform on Kubernetes.
            These experiences have provided me with a broad perspective and a solid foundation in project management.
        </p>
        <img style="width: 100%; border-radius: 5px; margin: auto; display: block;" src="./img/5.png"/>
        <h2><u>Footsteps of Progress:</u> <i>A timeline of personal achievements</i></h2>
        <img style="width: 100%; border-radius: 5px; margin: auto; display: block;" src="./img/4.png"/>    `,
    btn2: `
        <h1>Hobbies and Passions</h1>
        <h4>Seeking Thrills, Embracing Beauty</h4>
        <p>
            Beyond the realm of development, I find joy in pursuing my hobbies and passions. 
            Skiing is one of my favorite activities, as it allows me to embrace the thrill of gliding down snowy slopes and experiencing the beauty of nature in winter. 
            I'm also passionate about traveling, as it enables me to discover new landscapes and immerse myself in different cultures, expanding my horizons and fostering a broader perspective. 
            <br><br>
            <img style="width: 100%; border-radius: 5px; margin: auto; display: block;" src="https://lh3.googleusercontent.com/xyW1MGibDmc3SDy2esX-yvObwIvAH16ucRPF2-x7qJmOYRJRRU_LpOvZbis6yDwavBITLUbYRkbKi7aAvSS0wfOL9-TsElDxWlzyaUPevURvORQqxw=w960"/>
            </p>
            <a href="https://m3.material.io" target="_blank">source</a>
            <br>
            <p>In addition to my technical pursuits, I have a deep appreciation for design. 
            I'm captivated by the artistry and aesthetics that go into creating visually appealing experiences. 
            This passion for design influences my work, as I strive to deliver not only robust functionality but also elegant and intuitive user interfaces.
        </p>
        <h2><u>Passion for Learning:</u> <i>Igniting the Drive for Achievement</i></h2>
        <p>
            My passion for learning drives me to continuously expand my knowledge and skills. Whether it's staying up to date with the latest industry trends, 
            investing time in personal projects, or exploring the exciting world of embedded devices and the Kubernetes platform (DevOps), 
            I'm committed to pushing the boundaries of my expertise.
        </p>
      
    `,
    btn3: `
        <h1>Work Ethic</h1>
        <h4>Commitment, Perseverance, and Meticulousness</h4>
        <img style="width: 100%; border-radius: 5px; margin: auto; display: block;" src="https://lh3.googleusercontent.com/1g6ObozQbNcIxHYGbo0krkhewX9Gt6UCW2xDIlef0zP8Br3UROSFVhwPC-157ehy9TBXJ77-vbrXdETqNyD28chYLtDJuX10zOOGw5d-Hp8gwkurGw=w2400-rj"/>
        <a href="https://m3.material.io" target="_blank">source</a>
        <br>
        <p>
            In my work, I tend to set high standards for myself, always striving for excellence.
            While this dedication may occasionally lead me to invest extra time and effort into projects,
            it drives me to deliver results that go above and beyond expectations.
            I'm a hard worker, known for my perseverance and meticulous attention to detail.
        <p>
        <h2><u>Final Thoughts:</u> <i>Embarking on the Journey of Innovation</i></h2>
        <p>
            If I were to share a valuable recommendation, it would be to start working on projects at an early stage.
            Engaging in practical experiences naturally leads to building a network and enhancing both technical and soft skills.
            Embracing the challenges and persevering through long-term projects fosters personal growth
            and instills a deep understanding of hard work.
        </p>
    `
  };
  
  function getStringByIndex(index) {
    const keys = Object.keys(stringDictionary);
    const btnId = keys[index];
    return stringDictionary[btnId];
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Use 'auto' for instant scrolling without animation
    });
  }

function injectStringById(event) {
    const btnId = event.target.id;
    rememberButtonState(btnId)
    const stringIndex = parseInt(btnId.replace("btn", ""));
    const string = getStringByIndex(stringIndex);

    const element = document.getElementById("myTextContent");
    if (element) {
      element.innerHTML = string;
    } else {
      console.error("Element with ID", "myTextContent", "not found.");
    }
    scrollToTop();
}

function rememberButtonState(buttonId) {
    const buttons = document.querySelectorAll('button');
  
    buttons.forEach(function(button) {
        button.classList.remove('btn-clicked');
    });
    const button = document.getElementById(buttonId);
    button.classList.add('btn-clicked')
  }
  