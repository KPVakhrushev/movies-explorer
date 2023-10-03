import React from 'react';
import './Project.css';
import Title from '../Title/Title';

const  Project = ( ) => {
  return (
    <section className="project" id="about-project">
      <Title level='2' type='section'>О проекте</Title>
      <div className='project__stages'>
        <div className='project__stage'>
          <h3 className='project__stage-title'>Дипломный проект включал 5 этапов</h3>
          <p className="project__stage-desc">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className='project__stage'>
          <h3 className='project__stage-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='project__stage-desc'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>


      <div className="project__terms">
          <span>1 неделя</span>
          <span>4 недели</span>
          <span>Back-end</span>
          <span>Front-end</span>
      </div>
    </section>
  )
}
export default Project;
