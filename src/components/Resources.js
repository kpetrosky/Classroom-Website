import React from 'react';

const Resources = () => {
  // Define an array of resources with their names, image URLs, and alt text
  const resourcesList = [
    {
      name: 'iReady',
      image: 'iready.png',
      alt: 'iReady',
      link: 'https://readyclassroomcentral.com/'
    },
    {
      name: 'Typingclub',
      image: 'typingclub.png',
      alt: 'Typingclub',
      link: 'https://www.typingclub.com/'
    },
    {
      name: 'Dragon Drop',
      image: 'dragon drop.png',
      alt: 'Dragon Drop',
      link: 'https://www.roomrecess.com/games/DragonDrop/play.html'
    },
    {
      name: 'HP computer skills games',
      image: 'hp.png',
      alt: 'HP computer skills games',
      link: 'https://www.hp.com/us-en/shop/tech-takes/mouse-and-keyboarding-games'
    }
    // Add more resources as needed
  ];

  return (
    <section>
      <h2>Resources</h2>
      <ul className="resources-list">
        {resourcesList.map((resource, index) => (
          <li key={index} className="resource-item">
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-link"
            >
              <img src={resource.image} alt={resource.alt} />
              {resource.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Resources;
