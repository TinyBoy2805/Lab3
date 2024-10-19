const ScienceSubjects = [
  { id: 1, type: "Science", name: "Math" },
  { id: 2, type: "Science", name: "Physics" },
  { id: 3, type: "Science", name: "Chemistry" },
  { id: 4, type: "Science", name: "Biology" },
  { id: 5, type: "Science", name: "Astronomy" },
  { id: 6, type: "Science", name: "Geology" },
  { id: 7, type: "Science", name: "Environmental Science" },
  { id: 8, type: "Science", name: "Botany" },
  { id: 9, type: "Science", name: "Zoology" },
  { id: 10, type: "Science", name: "Statistics" },
  { id: 11, type: "Science", name: "Meteorology" },
  { id: 12, type: "Science", name: "Oceanography" },
  { id: 13, type: "Science", name: "Biochemistry" },
  { id: 14, type: "Science", name: "Genetics" },
  { id: 15, type: "Science", name: "Neuroscience" }
];

const ArtsSubjects = [
  { id: 1, type: "Arts", name: "History" },
  { id: 2, type: "Arts", name: "Geography" },
  { id: 3, type: "Arts", name: "Literature" },
  { id: 4, type: "Arts", name: "Art History" },
  { id: 5, type: "Arts", name: "Music" },
  { id: 6, type: "Arts", name: "Painting" },
  { id: 7, type: "Arts", name: "Sculpture" },
  { id: 8, type: "Arts", name: "Theater" },
  { id: 9, type: "Arts", name: "Photography" },
  { id: 10, type: "Arts", name: "Dance" },
  { id: 11, type: "Arts", name: "Film Studies" },
  { id: 12, type: "Arts", name: "Creative Writing" },
  { id: 13, type: "Arts", name: "Design" },
  { id: 14, type: "Arts", name: "Architecture" },
  { id: 15, type: "Arts", name: "Cultural Studies" }
];

const TechnologySubjects = [
  { id: 1, type: "Technology", name: "Computer Science" },
  { id: 2, type: "Technology", name: "Engineering" },
  { id: 3, type: "Technology", name: "Information Technology" },
  { id: 4, type: "Technology", name: "Software Engineering" },
  { id: 5, type: "Technology", name: "Data Science" },
  { id: 6, type: "Technology", name: "Artificial Intelligence" },
  { id: 7, type: "Technology", name: "Cybersecurity" },
  { id: 8, type: "Technology", name: "Robotics" },
  { id: 9, type: "Technology", name: "Mechanical Engineering" },
  { id: 10, type: "Technology", name: "Electrical Engineering" },
  { id: 11, type: "Technology", name: "Civil Engineering" },
  { id: 12, type: "Technology", name: "Nanotechnology" },
  { id: 13, type: "Technology", name: "Web Development" },
  { id: 14, type: "Technology", name: "Blockchain Technology" },
  { id: 15, type: "Technology", name: "Network Engineering" }
];

const SocialScienceSubjects = [
  { id: 1, type: "Social Science", name: "Psychology" },
  { id: 2, type: "Social Science", name: "Sociology" },
  { id: 3, type: "Social Science", name: "Philosophy" },
  { id: 4, type: "Social Science", name: "Anthropology" },
  { id: 5, type: "Social Science", name: "Political Science" },
  { id: 6, type: "Social Science", name: "Economics" },
  { id: 7, type: "Social Science", name: "History" },
  { id: 8, type: "Social Science", name: "Linguistics" },
  { id: 9, type: "Social Science", name: "Archaeology" },
  { id: 10, type: "Social Science", name: "Cultural Studies" },
  { id: 11, type: "Social Science", name: "Human Geography" },
  { id: 12, type: "Social Science", name: "Social Work" },
  { id: 13, type: "Social Science", name: "Criminology" },
  { id: 14, type: "Social Science", name: "International Relations" },
  { id: 15, type: "Social Science", name: "Public Policy" }
];

const BusinessSubjects = [
  { id: 1, type: "Business", name: "Economics" },
  { id: 2, type: "Business", name: "Marketing" },
  { id: 3, type: "Business", name: "Management" },
  { id: 4, type: "Business", name: "Accounting" },
  { id: 5, type: "Business", name: "Finance" },
  { id: 6, type: "Business", name: "Entrepreneurship" },
  { id: 7, type: "Business", name: "Human Resources" },
  { id: 8, type: "Business", name: "International Business" },
  { id: 9, type: "Business", name: "Supply Chain Management" },
  { id: 10, type: "Business", name: "Business Analytics" },
  { id: 11, type: "Business", name: "Business Law" },
  { id: 12, type: "Business", name: "E-Commerce" },
  { id: 13, type: "Business", name: "Project Management" },
  { id: 14, type: "Business", name: "Investment Management" },
  { id: 15, type: "Business", name: "Corporate Social Responsibility" }
];

const PhysicalEducationSubjects = [
  { id: 1, type: "Physical Education", name: "Sports" },
  { id: 2, type: "Physical Education", name: "Health Education" },
  { id: 3, type: "Physical Education", name: "Kinesiology" },
  { id: 4, type: "Physical Education", name: "Exercise Science" },
  { id: 5, type: "Physical Education", name: "Physical Fitness" },
  { id: 6, type: "Physical Education", name: "Sports Management" },
  { id: 7, type: "Physical Education", name: "Nutrition" },
  { id: 8, type: "Physical Education", name: "Recreational Sports" },
  { id: 9, type: "Physical Education", name: "Athletic Training" },
  { id: 10, type: "Physical Education", name: "Yoga" },
  { id: 11, type: "Physical Education", name: "Martial Arts" },
  { id: 12, type: "Physical Education", name: "Swimming" },
  { id: 13, type: "Physical Education", name: "Dance" },
  { id: 14, type: "Physical Education", name: "Team Sports" },
  { id: 15, type: "Physical Education", name: "Sports Psychology" }
];

const LanguageSubjects = [
  { id: 1, type: "Language", name: "English" },
  { id: 2, type: "Language", name: "French" },
  { id: 3, type: "Language", name: "Spanish" },
  { id: 4, type: "Language", name: "German" },
  { id: 5, type: "Language", name: "Chinese" },
  { id: 6, type: "Language", name: "Japanese" },
  { id: 7, type: "Language", name: "Arabic" },
  { id: 8, type: "Language", name: "Russian" },
  { id: 9, type: "Language", name: "Portuguese" },
  { id: 10, type: "Language", name: "Italian" },
  { id: 11, type: "Language", name: "Korean" },
  { id: 12, type: "Language", name: "Hindi" },
  { id: 13, type: "Language", name: "Latin" },
  { id: 14, type: "Language", name: "Greek" },
  { id: 15, type: "Language", name: "Sign Language" }
];




const subName = ["Science", 
                  "Arts", 
                  "Language", 
                  "Technology", 
                  "Social Science", 
                  "Physical Education", 
                  "Business"]

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const main = $("#main")
const sideTabs = $$('.side-tab')
const input = $('#search')

input.addEventListener('keydown', (e)=>
{
  if(e.key ==='Enter')
  {
    if(input.value !== '')
    {
      main.replaceChildren()
    }else window.alert("haha")
  }
})

input.addEventListener('change', (e)=>
{

})

sideTabs.forEach((tab, index) =>
{
      tab.addEventListener('click', function()
      {
          $('.side-tab.active').classList.remove('active')
          this.classList.add('active')
          if(index===0)
          {
            main.replaceChildren()
            renderHome()
          }else if(index===1)
          {
            main.replaceChildren()
            renderDocuments()
          }else if(index===2)
          {
            main.replaceChildren()
            renderBook();
          }else if(index===3)
          {
            main.replaceChildren()
            renderAbout()
          }else if(index===4)
          {
            main.replaceChildren()
          }
      })
}
)

const renderAbout = ()=>
{
    const about_container = document.createElement('div')

    about_container.classList.add('about-us')

    about_container.innerHTML = `
            <h1>About Us</h1>
            <p>Welcome to <strong>BrainStack</strong>, the go-to platform for students seeking a wide range of academic resources. We are dedicated to helping students excel by providing free access to study materials, notes, and research papers across various subjects. Whether you're preparing for exams, working on assignments, or looking for additional learning resources, our collection of high-quality documents is here to support your academic journey.</p>
            <p>At <strong>BrainStack</strong>, we believe in the power of education and community. Our platform allows students to share their own materials, contribute to a growing knowledge base, and help each other succeed. Join us and take your studies to the next level!</p>
    `
    main.appendChild(about_container)
}


const renderBook = ()=>
{
  for(let i=0; i<7; i++)
    {
        const subject = document.createElement('div')
        subject.classList.add('subject')
        subject.innerHTML = `
                <h2>${subName[i]}</h2>
                <div class="slide-box">
        `
    
        const slideBox = subject.querySelector('.slide-box')
        let subArray
        if(subName[i]==="Science") subArray = ScienceSubjects
        if(subName[i]==="Arts") subArray = ArtsSubjects
        if(subName[i]==="Language") subArray = LanguageSubjects
        if(subName[i]==="Technology") subArray = TechnologySubjects
        if(subName[i]==="Social Science") subArray = SocialScienceSubjects
        if(subName[i]==="Physical Education") subArray = PhysicalEducationSubjects
        if(subName[i]==="Business") subArray = BusinessSubjects
        
    
        subArray.forEach(sub=>
          {
                  const box = document.createElement("div")
                  box.classList.add('box')
                  box.innerHTML = `
                    <i class='bx bxs-bookmark'></i>
                    <p id="nameSub">${sub.name}</p>
                    <button id="see">View More</button>
                  `

              const subjectInfo = document.createElement('div')
              subjectInfo.classList.add('sub-info')

              subjectInfo.innerHTML = `
                  <a title="download" href="./doc/Discrete_Mathematics_and_Its_Applications_7th_Edition_Rosen.pdf" download>${sub.name}</a>
                  <embed src="./doc/doc2.pdf" type="application/pdf" width="100%" height="600px" />

              `


              const viewButton = box.querySelector("#see")
              viewButton.addEventListener('click', ()=>
              {

                main.replaceChildren()
                main.appendChild(subjectInfo)

              })
              
              
                  slideBox.appendChild(box)
          }
          )
        
        main.appendChild(subject)
    }
}


const renderHome = ()=>
{
    const home_container = document.createElement('div')
    home_container.classList.add('home-container')
    home_container.innerHTML = `
           <div class="home-text">
              <h2 class="animated-title">Explore and Share Study Materials</h2>
              <p>Discover a rich and diverse collection of study materials on our website. Join us in sharing knowledge to enhance your learning experience.</p>
              <button id="started">Get Started</button>
          </div>
          <div class="home-image">
              <img src="https://i.pinimg.com/736x/07/46/05/07460549c31c54c446823e7241702f34.jpg" alt="Study Material" />
          </div>
    `
    main.appendChild(home_container)
}

const renderDocuments = ()=>
{


  const document_container = document.createElement('div')
  document_container.classList.add('documents-section')
  document_container.innerHTML = `
      <h2>Search for Documents</h2>
        <input type="text" class="search-input" placeholder="Search for documents...">

        <div class="upload-form">
            <h3>Upload Document</h3>
            <input type="text" placeholder="Document name..." required>
            <input type="file" required>
            <button type="submit">Upload</button>
        </div>
  `
  main.appendChild(document_container)
}


renderHome()
function reloadPage()
{
  window.location.reload()
}


