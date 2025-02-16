import React from 'react'
import Project from './Project'
import smiley from '../../assets/widgets/smiley_face.png'

const About = () => {

  const image = smiley;
  const title = "This is the Project Title"
  const summary = <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic illo ea maxime eligendi vel iusto a ipsa, laudantium quia! Illum reprehenderit saepe ipsam rerum nemo repellat cupiditate ex mollitia libero repellendus tempora dolores inventore voluptate numquam excepturi soluta dolorem aut molestiae obcaecati, architecto, optio sit voluptatibus ipsa! Voluptatum, deleniti tenetur.</p>
  const article_link = "";
  const github_link = "";

  return (
    <div className='about'>
      <p className='about-title'>OUR PROJECTS</p>
      <Project image={image} title={title} summary={summary} article_link={article_link} github_link={github_link}/>
    </div>
  )
}

export default About